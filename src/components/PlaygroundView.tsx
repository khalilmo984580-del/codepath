import React, {useEffect, useMemo, useState} from 'react';
import {AlertTriangle, Check, Copy, Play, RotateCcw, ShieldCheck} from 'lucide-react';
import {PLAYGROUND_TEMPLATES} from '../data/playgroundTemplates';
import {TranslationStrings} from '../i18n/translations';
import {Language} from '../types';
import {sanitizeAndInspectCode} from '../utils/sandbox';
import {SandboxedPreview} from './SandboxedPreview';

interface PlaygroundViewProps {
  t: TranslationStrings;
  lang: Language;
  initialHtml?: string;
  initialCss?: string;
}

export const PlaygroundView: React.FC<PlaygroundViewProps> = ({
  t,
  lang,
  initialHtml,
  initialCss,
}) => {
  const defaultTemplate = PLAYGROUND_TEMPLATES[0];

  const [htmlDraft, setHtmlDraft] = useState(initialHtml ?? defaultTemplate.html);
  const [cssDraft, setCssDraft] = useState(initialCss ?? defaultTemplate.css);
  const [runHtml, setRunHtml] = useState(initialHtml ?? defaultTemplate.html);
  const [runCss, setRunCss] = useState(initialCss ?? defaultTemplate.css);
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'css'>('html');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(defaultTemplate.id);
  const [copiedType, setCopiedType] = useState<'html' | 'css' | null>(null);

  useEffect(() => {
    if (initialHtml !== undefined || initialCss !== undefined) {
      const nextHtml = initialHtml ?? defaultTemplate.html;
      const nextCss = initialCss ?? defaultTemplate.css;
      setHtmlDraft(nextHtml);
      setCssDraft(nextCss);
      setRunHtml(nextHtml);
      setRunCss(nextCss);
    }
  }, [initialHtml, initialCss, defaultTemplate.html, defaultTemplate.css]);

  const inspection = useMemo(
    () =>
      sanitizeAndInspectCode(
        runHtml,
        runCss,
        lang,
        t.playground.unclosedTagWarning,
        t.playground.cssBraceWarning
      ),
    [runHtml, runCss, lang, t.playground.unclosedTagWarning, t.playground.cssBraceWarning]
  );

  const handleRun = () => {
    setRunHtml(htmlDraft);
    setRunCss(cssDraft);
  };

  const handleReset = () => {
    const tpl =
      PLAYGROUND_TEMPLATES.find((item) => item.id === selectedTemplateId) ||
      defaultTemplate;
    setHtmlDraft(tpl.html);
    setCssDraft(tpl.css);
    setRunHtml(tpl.html);
    setRunCss(tpl.css);
  };

  const handleTemplateSelect = (templateId: string) => {
    const tpl = PLAYGROUND_TEMPLATES.find((item) => item.id === templateId);
    if (!tpl) return;
    setSelectedTemplateId(tpl.id);
    setHtmlDraft(tpl.html);
    setCssDraft(tpl.css);
    setRunHtml(tpl.html);
    setRunCss(tpl.css);
  };

  const handleCopy = async (kind: 'html' | 'css') => {
    const value = kind === 'html' ? htmlDraft : cssDraft;
    try {
      await navigator.clipboard.writeText(value);
      setCopiedType(kind);
      setTimeout(() => setCopiedType(null), 1600);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <div className="space-y-5">
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.playground.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">{t.playground.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="playground-template" className="sr-only">
            {t.playground.templatesLabel}
          </label>
          <select
            id="playground-template"
            value={selectedTemplateId}
            onChange={(e) => handleTemplateSelect(e.target.value)}
            className="min-h-[42px] px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
          >
            {PLAYGROUND_TEMPLATES.map((tpl) => (
              <option key={tpl.id} value={tpl.id}>
                {tpl.title[lang]}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={handleReset}
            className="min-h-[42px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            {t.actions.resetCode}
          </button>

          <button
            type="button"
            onClick={handleRun}
            className="min-h-[42px] px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4" />
            {t.actions.runCode}
          </button>
        </div>
      </header>

      {/* Security & Syntax Feedback */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>{t.playground.sandboxNotice}</span>
        </div>

        {inspection.hadScriptOrHandler && (
          <div className="flex items-start gap-2 text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3.5 py-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>{t.playground.scriptBlockedWarning}</span>
          </div>
        )}

        {inspection.syntaxWarnings.map((warn, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2 text-xs text-rose-900 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2.5"
          >
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>
              {t.playground.syntaxWarningPrefix} {warn}
            </span>
          </div>
        ))}
      </div>

      {/* Main Split Workspace */}
      <div className="grid lg:grid-cols-12 gap-4 items-stretch">
        {/* Editors Panel */}
        <div className="lg:col-span-6 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-3 py-2.5 bg-slate-950/70 border-b border-slate-800">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveEditorTab('html')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  activeEditorTab === 'html'
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {t.playground.htmlTab}
              </button>
              <button
                type="button"
                onClick={() => setActiveEditorTab('css')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  activeEditorTab === 'css'
                    ? 'bg-cyan-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {t.playground.cssTab}
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(activeEditorTab)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
            >
              {copiedType === activeEditorTab ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copiedType === activeEditorTab ? t.actions.copied : t.actions.copyCode}
            </button>
          </div>

          <div className="p-3 flex-1">
            {activeEditorTab === 'html' ? (
              <textarea
                aria-label={t.playground.htmlTab}
                dir="ltr"
                spellCheck={false}
                value={htmlDraft}
                onChange={(e) => setHtmlDraft(e.target.value)}
                className="code-editor w-full h-72 lg:h-[420px] bg-slate-900 text-slate-100 text-xs sm:text-sm leading-6 p-2 focus:outline-none resize-y text-left"
              />
            ) : (
              <textarea
                aria-label={t.playground.cssTab}
                dir="ltr"
                spellCheck={false}
                value={cssDraft}
                onChange={(e) => setCssDraft(e.target.value)}
                className="code-editor w-full h-72 lg:h-[420px] bg-slate-900 text-cyan-100 text-xs sm:text-sm leading-6 p-2 focus:outline-none resize-y text-left"
              />
            )}
          </div>
        </div>

        {/* Sandboxed Live Preview Panel */}
        <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-4 flex flex-col space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-bold text-slate-900">{t.playground.previewTitle}</h2>
            <span className="text-xs text-slate-500">{t.playground.autoUpdated}</span>
          </div>
          <SandboxedPreview
            html={inspection.cleanHtml}
            css={inspection.cleanCss}
            title={t.playground.previewTitle}
            className="flex-1"
            minHeight="360px"
          />
        </div>
      </div>
    </div>
  );
};
