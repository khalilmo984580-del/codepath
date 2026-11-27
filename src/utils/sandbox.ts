import {Language, ValidationRule} from '../types';

export interface SanitizeResult {
  cleanHtml: string;
  cleanCss: string;
  hadScriptOrHandler: boolean;
  syntaxWarnings: string[];
}

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

export function sanitizeAndInspectCode(
  rawHtml: string,
  rawCss: string,
  lang: Language,
  unclosedMsg: string,
  cssBraceMsg: string
): SanitizeResult {
  let hadScriptOrHandler = false;

  const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const standaloneScript = /<\/?script\b[^>]*>/gi;
  const unsafeTags = /<\/?(iframe|object|embed|applet|base|meta|link)\b[^>]*>/gi;
  const inlineHandlers = /\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi;
  const jsProtocols = /(href|src|action|formaction)\s*=\s*(["'])\s*javascript:[^"']*\2/gi;

  if (
    scriptRegex.test(rawHtml) ||
    standaloneScript.test(rawHtml) ||
    unsafeTags.test(rawHtml) ||
    inlineHandlers.test(rawHtml) ||
    jsProtocols.test(rawHtml)
  ) {
    hadScriptOrHandler = true;
  }

  let cleanHtml = rawHtml
    .replace(scriptRegex, '')
    .replace(standaloneScript, '')
    .replace(unsafeTags, '')
    .replace(inlineHandlers, '')
    .replace(jsProtocols, '$1="#"');

  // Remove CSS expressions or @import url(javascript:)
  let cleanCss = rawCss
    .replace(/expression\s*\([^)]*\)/gi, '')
    .replace(/@import\s+[^;]+;/gi, '');

  if (rawCss !== cleanCss) {
    hadScriptOrHandler = true;
  }

  // Lightweight syntax checks for beginner helpfulness
  const syntaxWarnings: string[] = [];

  const openBraces = (cleanCss.match(/\{/g) || []).length;
  const closeBraces = (cleanCss.match(/\}/g) || []).length;
  if (openBraces !== closeBraces) {
    syntaxWarnings.push(cssBraceMsg);
  }

  // Check basic unclosed HTML tags (ignoring DOCTYPE and comments)
  const stripped = cleanHtml
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const tagStack: string[] = [];
  const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*\/?>/g;
  let match: RegExpExecArray | null;
  while ((match = tagPattern.exec(stripped)) !== null) {
    const full = match[0];
    const tagName = match[1].toLowerCase();
    if (VOID_TAGS.has(tagName) || full.endsWith('/>')) continue;
    if (full.startsWith('</')) {
      const idx = tagStack.lastIndexOf(tagName);
      if (idx !== -1) {
        tagStack.splice(idx, 1);
      }
    } else {
      tagStack.push(tagName);
    }
  }
  if (tagStack.length > 0) {
    const lastOpen = tagStack[tagStack.length - 1];
    syntaxWarnings.push(`${unclosedMsg} <${lastOpen}>`);
  }

  void lang;
  return {cleanHtml, cleanCss, hadScriptOrHandler, syntaxWarnings};
}

export function buildSandboxedSrcDoc(cleanHtml: string, cleanCss: string, dir: 'rtl' | 'ltr' = 'ltr'): string {
  // Check if user already wrote a full document or snippet
  const hasBodyTag = /<body[\s>]/i.test(cleanHtml);
  const cspMeta = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: https:;">`;
  const baseStyle = `
    <style>
      *, *::before, *::after { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 16px;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        color: #0f172a;
        background: #ffffff;
        line-height: 1.6;
      }
      img { max-width: 100%; height: auto; }
    </style>
    <style>${cleanCss}</style>
  `;

  if (hasBodyTag) {
    // Inject CSP and styles safely into <head> or start
    if (/<head[\s>]/i.test(cleanHtml)) {
      return cleanHtml.replace(/<head([^>]*)>/i, `<head$1>${cspMeta}${baseStyle}`);
    }
    return `<!doctype html><html dir="${dir}"><head>${cspMeta}${baseStyle}</head>${cleanHtml}</html>`;
  }

  return `<!doctype html>
<html dir="${dir}">
  <head>
    <meta charset="UTF-8" />
    ${cspMeta}
    ${baseStyle}
  </head>
  <body>
    ${cleanHtml}
  </body>
</html>`;
}

export interface RuleEvaluationResult {
  passed: boolean;
  results: {rule: ValidationRule; ok: boolean}[];
}

export function evaluateValidationRules(
  cleanHtml: string,
  cleanCss: string,
  rules: ValidationRule[]
): RuleEvaluationResult {
  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHtml, 'text/html');
  const normalizedCss = cleanCss.replace(/\s+/g, ' ').toLowerCase();

  const results = rules.map((rule) => {
    let ok = false;
    try {
      if (rule.type === 'html-selector') {
        ok = doc.querySelector(rule.target) !== null;
      } else if (rule.type === 'html-attr') {
        const els = Array.from(doc.querySelectorAll(rule.target));
        ok = els.some((el) => {
          const val = el.getAttribute(rule.attr || '');
          return val !== null && val.trim().length > 0;
        });
      } else if (rule.type === 'css-pattern') {
        const regex = new RegExp(rule.target, 'i');
        ok = regex.test(normalizedCss);
      } else if (rule.type === 'text-present') {
        ok = (doc.body.textContent || '').trim().length >= Number(rule.target || 1);
      }
    } catch {
      ok = false;
    }
    return {rule, ok};
  });

  return {
    passed: results.every((r) => r.ok),
    results,
  };
}
