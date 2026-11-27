import React, {useState} from 'react';
import {BookOpen, Info, Send, X} from 'lucide-react';
import {TranslationStrings} from '../i18n/translations';
import {Language} from '../types';

interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationStrings;
  lang: Language;
  activeLessonTitle?: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  isOpen,
  onClose,
  t,
  activeLessonTitle,
}) => {
  const [draft, setDraft] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setSubmittedQuestion(draft.trim());
    setDraft('');
  };

  const handleQuickPrompt = (promptText: string) => {
    setSubmittedQuestion(promptText);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/55 backdrop-blur-sm p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-tutor-title"
    >
      <div className="w-full sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 bg-white border-b border-slate-100">
          <div className="flex items-center gap-3 min-w-0">
            {!imgError ? (
              <img
                src="/src/assets/images/tutor_avatar_emblem_1795740795672.jpg"
                alt={t.tutor.title}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-11 h-11 rounded-xl object-cover border border-slate-200 shrink-0"
              />
            ) : (
              <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
            )}
            <div className="min-w-0">
              <h2 id="ai-tutor-title" className="text-base font-bold text-slate-900 truncate">
                {t.tutor.title}
              </h2>
              <p className="text-xs text-slate-500 truncate">
                {activeLessonTitle ? `${t.tutor.subtitle} · ${activeLessonTitle}` : t.tutor.subtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.actions.close}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-amber-950">{t.tutor.noticeTitle}</h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">{t.tutor.noticeBody}</p>
            </div>
          </div>

          {submittedQuestion && (
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-violet-50 border border-violet-200 text-sm text-violet-950">
                {submittedQuestion}
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {t.tutor.noticeBody}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-600">{t.tutor.quickPromptsLabel}</div>
            <div className="flex flex-wrap gap-2">
              {t.tutor.quickPrompts.map((promptText, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickPrompt(promptText)}
                  className="px-3 py-2 rounded-xl text-xs font-medium bg-slate-100 hover:bg-violet-50 hover:text-violet-700 text-slate-700 border border-slate-200 transition-colors text-start"
                >
                  {promptText}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t.tutor.inputPlaceholder}
              className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            <button
              type="submit"
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
            >
              <Send className="w-4 h-4" />
              {t.tutor.sendButton}
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">{t.tutor.offlineTipsTitle}</h3>
            <div className="space-y-2.5">
              {t.tutor.offlineTips.map((tip, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">{tip.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
