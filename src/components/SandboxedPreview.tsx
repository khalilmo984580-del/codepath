import React, {useMemo} from 'react';
import {buildSandboxedSrcDoc} from '../utils/sandbox';

interface SandboxedPreviewProps {
  html: string;
  css: string;
  title: string;
  className?: string;
  minHeight?: string;
}

export const SandboxedPreview: React.FC<SandboxedPreviewProps> = ({
  html,
  css,
  title,
  className = '',
  minHeight = '260px',
}) => {
  const srcDoc = useMemo(() => buildSandboxedSrcDoc(html, css, 'ltr'), [html, css]);

  return (
    <iframe
      title={title}
      srcDoc={srcDoc}
      sandbox=""
      referrerPolicy="no-referrer"
      className={`w-full bg-white rounded-xl border border-slate-200 ${className}`}
      style={{minHeight}}
    />
  );
};
