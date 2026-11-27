import React, {useEffect, useMemo, useState} from 'react';
import {CheckCircle2, Eye, EyeOff, HelpCircle, Play, RotateCcw, Trophy, XCircle} from 'lucide-react';
import {CHALLENGES} from '../data/gamification';
import {TranslationStrings} from '../i18n/translations';
import {Language, UserProgress} from '../types';
import {evaluateValidationRules, sanitizeAndInspectCode} from '../utils/sandbox';
import {SandboxedPreview} from './SandboxedPreview';

interface ChallengesViewProps {
  t: TranslationStrings;
  lang: Language;
  progress: UserProgress;
  selectedChallengeId: string;
  onSelectChallenge: (id: string) => void;
  onCompleteChallenge: (id: string) => boolean;
}

export const ChallengesView: React.FC<ChallengesViewProps> = ({
  t,
  lang,
  progress,
  selectedChallengeId,
  onSelectChallenge,
  onCompleteChallenge,
}) => {
  const activeChallenge =
    CHALLENGES.find((c) => c.id === selectedChallengeId) || CHALLENGES[0];

  const [htmlCode, setHtmlCode] = useState(activeChallenge.starterHtml);
  const [cssCode, setCssCode] = useState(activeChallenge.starterCss);
  const [runHtml, setRunHtml] = useState(activeChallenge.starterHtml);
  const [runCss, setRunCss] = useState(activeChallenge.starterCss);
  const [editorTab, setEditorTab] = useState<'html' | 'css'>('html');
  const [checked, setChecked] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    setHtmlCode(activeChallenge.starterHtml);
    setCssCode(activeChallenge.starterCss);
    setRunHtml(activeChallenge.starterHtml);
    setRunCss(activeChallenge.starterCss);
    setChecked(false);
    setShowSolution(false);
  }, [activeChallenge.id, activeChallenge.starterHtml, activeChallenge.starterCss]);

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

  const evaluation = useMemo(
    () =>
      evaluateValidationRules(
        inspection.cleanHtml,
        inspection.cleanCss,
        activeChallenge.rules
      ),
    [inspection.cleanHtml, inspection.cleanCss, activeChallenge.rules]
  );

  const handleCheck = () => {
    setRunHtml(htmlCode);
    setRunCss(cssCode);
    setChecked(true);
    const inspected = sanitizeAndInspectCode(
      htmlCode,
      cssCode,
      lang,
      t.playground.unclosedTagWarning,
      t.playground.cssBraceWarning
    );
    const evalRes = evaluateValidationRules(
      inspected.cleanHtml,
      inspected.cleanCss,
      activeChallenge.rules
    );
    if (evalRes.passed) {
      onCompleteChallenge(activeChallenge.id);
    }
  };

  const handleReset = () => {
    setHtmlCode(activeChallenge.starterHtml);
    setCssCode(activeChallenge.starterCss);
    setRunHtml(activeChallenge.starterHtml);
    setRunCss(activeChallenge.starterCss);
    setChecked(false);
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.challenges.title}</h1>
        <p className="text-sm text-slate-600">{t.challenges.subtitle}</p>
      </header>

      {/* Challenge Selector Strip */}
      <div className="grid md:grid-cols-3 gap-3">
        {CHALLENGES.map((challenge) => {
          const solved = progress.completedChallengeIds.includes(challenge.id);
          const isSelected = challenge.id === activeChallenge.id;
          return (
            <button
              key={challenge.id}
              type="button"
              onClick={() => onSelectChallenge(challenge.id)}
              className={`text-start p-4 rounded-2xl border transition-all space-y-2 ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-violet-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className={isSelected ? 'text-amber-300 font-semibold' : 'text-violet-700 font-semibold'}>
                  {challenge.isDaily ? `${t.challenges.dailyBadge} · ` : ''}+{challenge.xpReward} XP
                </span>
                {solved && (
                  <span className="inline-flex items-center gap-1 text-emerald-500 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    {t.challenges.solvedLabel}
                  </span>
                )}
              </div>
              <div className="text-sm font-bold leading-snug">{challenge.title[lang]}</div>
              <div className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                {challenge.difficulty === 'beginner'
                  ? t.challenges.difficultyBeginner
                  : t.challenges.difficultyIntermediate}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Challenge Workspace */}
      <section className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600">
              <Trophy className="w-4 h-4" />
              +{activeChallenge.xpReward} XP
            </div>
            <h2 className="text-xl font-bold text-slate-900">{activeChallenge.title[lang]}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{activeChallenge.description[lang]}</p>
          </div>

          <button
            type="button"
            onClick={() => setShowSolution((s) => !s)}
            className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-flex items-center gap-1.5"
          >
            {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showSolution ? t.actions.hideSolution : t.actions.viewSolution}
          </button>
        </div>

        {showSolution && (
          <div className="grid md:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900 text-slate-100 text-xs font-mono" dir="ltr">
            <pre className="overflow-x-auto">{activeChallenge.solutionHtml}</pre>
            <pre className="overflow-x-auto text-cyan-200">{activeChallenge.solutionCss}</pre>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-6 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-950/70 border-b border-slate-800">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setEditorTab('html')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    editorTab === 'html' ? 'bg-violet-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  HTML
                </button>
                <button
                  type="button"
                  onClick={() => setEditorTab('css')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    editorTab === 'css' ? 'bg-cyan-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  CSS
                </button>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 inline-flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {t.actions.resetCode}
              </button>
            </div>
            <div className="p-3 flex-1">
              <textarea
                dir="ltr"
                spellCheck={false}
                value={editorTab === 'html' ? htmlCode : cssCode}
                onChange={(e) =>
                  editorTab === 'html' ? setHtmlCode(e.target.value) : setCssCode(e.target.value)
                }
                aria-label={editorTab.toUpperCase()}
                className="code-editor w-full h-64 bg-slate-900 text-slate-100 text-xs sm:text-sm leading-6 p-1 focus:outline-none resize-y text-left"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-2">
            <div className="text-xs font-semibold text-slate-600">{t.playground.previewTitle}</div>
            <SandboxedPreview
              html={inspection.cleanHtml}
              css={inspection.cleanCss}
              title={activeChallenge.title[lang]}
              minHeight="270px"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCheck}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4" />
            {t.actions.checkChallenge}
          </button>

          {checked && (
            <span
              className={`text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 ${
                evaluation.passed ? 'text-emerald-700' : 'text-rose-700'
              }`}
            >
              {evaluation.passed ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  {t.challenges.passedBanner}
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4" />
                  {t.challenges.failedBanner}
                </>
              )}
            </span>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-700">{t.challenges.requirementsTitle}</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {evaluation.results.map((r, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-xs border ${
                  !checked
                    ? 'bg-slate-50 border-slate-200 text-slate-600'
                    : r.ok
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {!checked ? (
                  <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                ) : r.ok ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
                <span>{r.rule.description[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
