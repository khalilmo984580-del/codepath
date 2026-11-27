import React, {useState} from 'react';
import {Check, Copy, Play} from 'lucide-react';

interface CodeBlockProps {
  code: string;
  languageLabel: 'HTML' | 'CSS';
  copyLabel: string;
  copiedLabel: string;
  onTryInPlayground?: () => void;
  tryLabel?: string;
}

function renderHighlightedLine(line: string, lang: 'HTML' | 'CSS'): React.ReactNode {
  if (lang === 'HTML') {
    const parts = line.split(/(<\/?[a-zA-Z0-9!-]+|\s+[a-zA-Z-]+="[^"]*"|\/?>)/g);
    return parts.map((part, idx) => {
      if (!part) return null;
      if (part.startsWith('<!--')) {
        return (
          <span key={idx} className="text-slate-400 italic">
            {part}
          </span>
        );
      }
      if (part.startsWith('<') || part === '>' || part === '/>') {
        return (
          <span key={idx} className="text-cyan-300 font-medium">
            {part}
          </span>
        );
      }
      if (/^\s+[a-zA-Z-]+="[^"]*"$/.test(part)) {
        const eqIdx = part.indexOf('=');
        const attrName = part.slice(0, eqIdx);
        const attrVal = part.slice(eqIdx);
        return (
          <span key={idx}>
            <span className="text-amber-300">{attrName}</span>
            <span className="text-emerald-300">{attrVal}</span>
          </span>
        );
      }
      return (
        <span key={idx} className="text-slate-100">
          {part}
        </span>
      );
    });
  }

  // CSS syntax highlighting
  const trimmed = line.trim();
  if (trimmed.startsWith('/*')) {
    return <span className="text-slate-400 italic">{line}</span>;
  }
  const colonIdx = line.indexOf(':');
  if (colonIdx > 0 && !trimmed.endsWith('{')) {
    const prop = line.slice(0, colonIdx);
    const rest = line.slice(colonIdx);
    return (
      <>
        <span className="text-cyan-300">{prop}</span>
        <span className="text-amber-200">{rest}</span>
      </>
    );
  }
  if (trimmed.endsWith('{')) {
    return <span className="text-violet-300 font-medium">{line}</span>;
  }
  return <span className="text-slate-200">{line}</span>;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  languageLabel,
  copyLabel,
  copiedLabel,
  onTryInPlayground,
  tryLabel,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard fallback ignored cleanly
    }
  };

  const lines = code.split('\n');

  return (
    <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-sm" dir="ltr">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/70 border-b border-slate-800">
        <span className="text-xs font-semibold tracking-wide text-cyan-300">{languageLabel}</span>
        <div className="flex items-center gap-2">
          {onTryInPlayground && tryLabel && (
            <button
              type="button"
              onClick={onTryInPlayground}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors whitespace-nowrap shrink-0"
            >
              <Play className="w-3.5 h-3.5" />
              {tryLabel}
            </button>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-[13px] leading-6 text-left">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="select-none w-7 shrink-0 text-slate-500 text-right pr-3 tabular-nums">
                {i + 1}
              </span>
              <span className="whitespace-pre">{renderHighlightedLine(line, languageLabel)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};
