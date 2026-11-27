import React, {useEffect, useMemo, useState} from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Bot,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  Film,
  HelpCircle,
  Play,
  RotateCcw,
  Sparkles,
  Trash2,
  XCircle,
} from 'lucide-react';
import {LESSONS} from '../data/curriculum';
import {TranslationStrings} from '../i18n/translations';
import {Language, Lesson, UserProgress} from '../types';
import {evaluateValidationRules, sanitizeAndInspectCode} from '../utils/sandbox';
import {CodeBlock} from './CodeBlock';
import {SandboxedPreview} from './SandboxedPreview';
import {VisualConceptDiagram} from './VisualConceptDiagram';

interface LessonViewProps {
  lesson: Lesson;
  t: TranslationStrings;
  lang: Language;
  progress: UserProgress;
  onBack: () => void;
  onSelectLesson: (lessonId: number) => void;
  onCompleteLesson: (lessonId: number) => {xpAwarded: number; newlyCompleted: boolean};
  onRecordQuizPass: (lessonId: number) => void;
  onRecordExercisePass: (lessonId: number) => void;
  onToggleBookmark: (lessonId: number) => void;
  onSaveVideoUrl: (lessonId: number, url: string | null) => void;
  onOpenInPlayground: (html: string, css: string) => void;
  onOpenTutor: (lessonTitle: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  t,
  lang,
  progress,
  onBack,
  onSelectLesson,
  onCompleteLesson,
  onRecordQuizPass,
  onRecordExercisePass,
  onToggleBookmark,
  onSaveVideoUrl,
  onOpenInPlayground,
  onOpenTutor,
}) => {
  const isAr = lang === 'ar';
  const BackIcon = isAr ? ArrowRight : ArrowLeft;
  const PrevIcon = isAr ? ArrowRight : ArrowLeft;
  const NextIcon = isAr ? ArrowLeft : ArrowRight;

  // Interactive coding exercise state
  const [exHtml, setExHtml] = useState(lesson.exercise.starterHtml);
  const [exCss, setExCss] = useState(lesson.exercise.starterCss);
  const [exRunHtml, setExRunHtml] = useState(lesson.exercise.starterHtml);
  const [exRunCss, setExRunCss] = useState(lesson.exercise.starterCss);
  const [exEditorTab, setExEditorTab] = useState<'html' | 'css'>('html');
  const [showExpected, setShowExpected] = useState(false);
  const [exerciseChecked, setExerciseChecked] = useState(false);

  // Quiz state (never reveal answer before submission)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});

  // Video URL optional input
  const [videoDraft, setVideoDraft] = useState(progress.customVideoUrls[lesson.id] || '');
  const [videoError, setVideoError] = useState<string | null>(null);

  // Completion celebration banner
  const [celebrationXp, setCelebrationXp] = useState<number | null>(null);

  useEffect(() => {
    setExHtml(lesson.exercise.starterHtml);
    setExCss(lesson.exercise.starterCss);
    setExRunHtml(lesson.exercise.starterHtml);
    setExRunCss(lesson.exercise.starterCss);
    setExEditorTab('html');
    setShowExpected(false);
    setExerciseChecked(false);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setVideoDraft(progress.customVideoUrls[lesson.id] || '');
    setVideoError(null);
    setCelebrationXp(null);
  }, [lesson.id, lesson.exercise.starterHtml, lesson.exercise.starterCss, progress.customVideoUrls]);

  const isCompleted = progress.completedLessonIds.includes(lesson.id);
  const isBookmarked = progress.bookmarkedLessonIds.includes(lesson.id);
  const attachedVideoUrl = progress.customVideoUrls[lesson.id] || '';

  const exInspection = useMemo(
    () =>
      sanitizeAndInspectCode(
        exRunHtml,
        exRunCss,
        lang,
        t.playground.unclosedTagWarning,
        t.playground.cssBraceWarning
      ),
    [exRunHtml, exRunCss, lang, t.playground.unclosedTagWarning, t.playground.cssBraceWarning]
  );

  const exerciseEval = useMemo(
    () =>
      evaluateValidationRules(
        exInspection.cleanHtml,
        exInspection.cleanCss,
        lesson.exercise.rules
      ),
    [exInspection.cleanHtml, exInspection.cleanCss, lesson.exercise.rules]
  );

  const handleRunAndCheckExercise = () => {
    setExRunHtml(exHtml);
    setExRunCss(exCss);
    setExerciseChecked(true);
    const inspected = sanitizeAndInspectCode(
      exHtml,
      exCss,
      lang,
      t.playground.unclosedTagWarning,
      t.playground.cssBraceWarning
    );
    const evaluated = evaluateValidationRules(
      inspected.cleanHtml,
      inspected.cleanCss,
      lesson.exercise.rules
    );
    if (evaluated.passed) {
      onRecordExercisePass(lesson.id);
    }
  };

  const handleResetExercise = () => {
    setExHtml(lesson.exercise.starterHtml);
    setExCss(lesson.exercise.starterCss);
    setExRunHtml(lesson.exercise.starterHtml);
    setExRunCss(lesson.exercise.starterCss);
    setExerciseChecked(false);
  };

  const handleSubmitQuizQuestion = (questionId: string) => {
    if (selectedAnswers[questionId] === undefined) return;
    const nextSubmitted = {...submittedAnswers, [questionId]: true};
    setSubmittedAnswers(nextSubmitted);

    const allSubmitted = lesson.quiz.every((q) => nextSubmitted[q.id]);
    const allCorrect = lesson.quiz.every(
      (q) => selectedAnswers[q.id] === q.correctIndex
    );
    if (allSubmitted && allCorrect) {
      onRecordQuizPass(lesson.id);
    }
  };

  const handleRetryQuiz = () => {
    setSelectedAnswers({});
    setSubmittedAnswers({});
  };

  const handleSaveVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = videoDraft.trim();
    if (!trimmed) {
      onSaveVideoUrl(lesson.id, null);
      setVideoError(null);
      return;
    }
    try {
      const parsed = new URL(trimmed);
      if (parsed.protocol !== 'https:') {
        setVideoError(t.lesson.videoInvalidError);
        return;
      }
      setVideoError(null);
      onSaveVideoUrl(lesson.id, trimmed);
    } catch {
      setVideoError(t.lesson.videoInvalidError);
    }
  };

  const handleCompleteClick = () => {
    const res = onCompleteLesson(lesson.id);
    if (res.newlyCompleted) {
      setCelebrationXp(res.xpAwarded);
    }
  };

  const allQuizSubmitted = lesson.quiz.every((q) => submittedAnswers[q.id]);
  const quizCorrectCount = lesson.quiz.filter(
    (q) => submittedAnswers[q.id] && selectedAnswers[q.id] === q.correctIndex
  ).length;

  const prevLesson = LESSONS.find((l) => l.id === lesson.id - 1);
  const nextLesson = LESSONS.find((l) => l.id === lesson.id + 1);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
        >
          <BackIcon className="w-4 h-4" />
          {t.actions.backToPaths}
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenTutor(lesson.title[lang])}
            className="min-h-[44px] px-3.5 py-2 rounded-xl bg-violet-50 border border-violet-200 hover:bg-violet-100 text-violet-800 text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
          >
            <Bot className="w-4 h-4" />
            {t.actions.askTutor}
          </button>
          <button
            type="button"
            onClick={() => onToggleBookmark(lesson.id)}
            className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              isBookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            {isBookmarked ? t.actions.bookmarked : t.actions.bookmark}
          </button>
        </div>
      </div>

      {/* 1. Lesson Header */}
      <header className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 tabular-nums">
          <span className="text-violet-700">
            {t.lesson.modulePrefix} {lesson.moduleId}
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {t.lesson.lessonPrefix} {lesson.id} / {LESSONS.length}
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {lesson.durationMinutes} {t.lesson.minutesUnit}
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-blue-700">+{lesson.xpReward} {t.lesson.xpUnit}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight text-balance">
          {lesson.title[lang]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{lesson.summary[lang]}</p>
      </header>

      {/* 2. Learning Objectives */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3">
        <h2 className="text-lg font-bold text-slate-900">{t.lesson.objectivesTitle}</h2>
        <ul className="space-y-2">
          {lesson.objectives[lang].map((obj, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Clear Explanation & Glossary */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-5">
        <h2 className="text-lg font-bold text-slate-900">{t.lesson.explanationTitle}</h2>
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          {lesson.explanation[lang].map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {lesson.glossary.length > 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">{t.lesson.glossaryTitle}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {lesson.glossary.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-mono text-xs font-bold text-violet-800" dir="ltr">
                    {item.term}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.meaning[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Visual Concept Breakdown */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-slate-900">{t.lesson.visualTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-600">{lesson.visualCaption[lang]}</p>
        </div>
        <VisualConceptDiagram type={lesson.visualType} lang={lang} />
      </section>

      {/* 5. Original Code Examples + Live Result */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{t.lesson.codeExampleTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-600">{lesson.exampleTitle[lang]}</p>
          </div>
          <button
            type="button"
            onClick={() => onOpenInPlayground(lesson.exampleHtml, lesson.exampleCss)}
            className="min-h-[40px] px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4" />
            {t.actions.openInPlayground}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock
            code={lesson.exampleHtml}
            languageLabel="HTML"
            copyLabel={t.actions.copyCode}
            copiedLabel={t.actions.copied}
          />
          <CodeBlock
            code={lesson.exampleCss}
            languageLabel="CSS"
            copyLabel={t.actions.copyCode}
            copiedLabel={t.actions.copied}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-600">{t.lesson.expectedPreviewTitle}</div>
          <SandboxedPreview
            html={lesson.exampleHtml}
            css={lesson.exampleCss}
            title={lesson.exampleTitle[lang]}
            minHeight="180px"
          />
        </div>
      </section>

      {/* 6. Optional Video Learning Section */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
        <div className="flex items-center gap-2">
          <Film className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-slate-900">{t.lesson.videoTitle}</h2>
        </div>

        {attachedVideoUrl ? (
          <div className="space-y-3">
            <video
              controls
              src={attachedVideoUrl}
              className="w-full rounded-2xl bg-slate-950 max-h-80"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  onSaveVideoUrl(lesson.id, null);
                  setVideoDraft('');
                }}
                className="min-h-[40px] px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                {t.actions.removeVideoUrl}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 rounded-2xl bg-slate-50 border border-dashed border-slate-300 space-y-2">
            <div className="text-sm font-bold text-slate-900">{t.lesson.videoPlaceholderTitle}</div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.lesson.videoPlaceholderDesc}
            </p>
          </div>
        )}

        <form onSubmit={handleSaveVideo} className="flex flex-col sm:flex-row gap-2">
          <input
            type="url"
            dir="ltr"
            value={videoDraft}
            onChange={(e) => setVideoDraft(e.target.value)}
            placeholder={t.lesson.videoUrlPlaceholder}
            aria-label={t.lesson.videoUrlLabel}
            className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="min-h-[42px] px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors"
          >
            {t.actions.saveVideoUrl}
          </button>
        </form>
        {videoError && <p className="text-xs text-rose-600 font-medium">{videoError}</p>}
      </section>

      {/* 7. Interactive Coding Exercise */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">{t.lesson.exerciseTitle}</h2>
            <p className="text-sm text-slate-700 leading-relaxed">{lesson.exercise.prompt[lang]}</p>
            <p className="text-xs text-violet-700">
              <strong>{t.lesson.exerciseHintLabel}</strong> {lesson.exercise.hint[lang]}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowExpected((v) => !v)}
            className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
          >
            {showExpected ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showExpected ? t.actions.hideExpected : t.actions.showExpected}
          </button>
        </div>

        {showExpected && (
          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-200 space-y-2">
            <div className="text-xs font-bold text-violet-900">{t.lesson.expectedPreviewTitle}</div>
            <SandboxedPreview
              html={lesson.exercise.expectedHtml}
              css={lesson.exercise.expectedCss}
              title={t.lesson.expectedPreviewTitle}
              minHeight="160px"
            />
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-6 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-950/70 border-b border-slate-800">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setExEditorTab('html')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    exEditorTab === 'html' ? 'bg-violet-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  HTML
                </button>
                <button
                  type="button"
                  onClick={() => setExEditorTab('css')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    exEditorTab === 'css' ? 'bg-cyan-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  CSS
                </button>
              </div>
              <button
                type="button"
                onClick={handleResetExercise}
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
                value={exEditorTab === 'html' ? exHtml : exCss}
                onChange={(e) =>
                  exEditorTab === 'html' ? setExHtml(e.target.value) : setExCss(e.target.value)
                }
                aria-label={exEditorTab.toUpperCase()}
                className="code-editor w-full h-56 bg-slate-900 text-slate-100 text-xs sm:text-sm leading-6 p-1 focus:outline-none resize-y text-left"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-2">
            <div className="text-xs font-semibold text-slate-600">{t.lesson.yourPreviewTitle}</div>
            <SandboxedPreview
              html={exInspection.cleanHtml}
              css={exInspection.cleanCss}
              title={t.lesson.yourPreviewTitle}
              minHeight="240px"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleRunAndCheckExercise}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-sm font-bold inline-flex items-center gap-2 transition-all whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4" />
            {t.actions.checkExercise}
          </button>

          {exerciseChecked && (
            <span
              className={`text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 ${
                exerciseEval.passed ? 'text-emerald-700' : 'text-amber-700'
              }`}
            >
              {exerciseEval.passed ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  {t.lesson.exercisePassed}
                </>
              ) : (
                <>
                  <HelpCircle className="w-4 h-4" />
                  {t.lesson.exerciseNeedsWork}
                </>
              )}
            </span>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-2 pt-2">
          {exerciseEval.results.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 p-2.5 rounded-xl text-xs border ${
                !exerciseChecked
                  ? 'bg-slate-50 border-slate-200 text-slate-600'
                  : item.ok
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border-rose-200 text-rose-900'
              }`}
            >
              {!exerciseChecked ? (
                <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
              ) : item.ok ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>{item.rule.description[lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Interactive Quiz */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-bold text-slate-900">{t.lesson.quizTitle}</h2>
          {allQuizSubmitted && (
            <button
              type="button"
              onClick={handleRetryQuiz}
              className="min-h-[38px] px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.actions.retryQuiz}
            </button>
          )}
        </div>

        <div className="space-y-5">
          {lesson.quiz.map((q, qIndex) => {
            const selected = selectedAnswers[q.id];
            const isSubmitted = !!submittedAnswers[q.id];
            const isCorrect = isSubmitted && selected === q.correctIndex;

            return (
              <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-semibold text-violet-700 tabular-nums">
                  {t.lesson.quizProgress} {qIndex + 1} / {lesson.quiz.length}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{q.question[lang]}</h3>

                <div className="space-y-2">
                  {q.options[lang].map((opt, optIdx) => {
                    const isPicked = selected === optIdx;
                    let optionStyle =
                      'bg-white border-slate-200 hover:border-violet-300 text-slate-800';
                    if (isSubmitted) {
                      if (optIdx === q.correctIndex) {
                        optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                      } else if (isPicked && optIdx !== q.correctIndex) {
                        optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                      }
                    } else if (isPicked) {
                      optionStyle = 'bg-violet-50 border-violet-500 text-violet-950 font-semibold';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={isSubmitted}
                        onClick={() => setSelectedAnswers((prev) => ({...prev, [q.id]: optIdx}))}
                        className={`w-full text-start p-3 rounded-xl border text-xs sm:text-sm transition-colors ${optionStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {!isSubmitted ? (
                  <button
                    type="button"
                    disabled={selected === undefined}
                    onClick={() => handleSubmitQuizQuestion(q.id)}
                    className="min-h-[40px] px-4 py-2 rounded-xl bg-slate-900 disabled:bg-slate-300 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    {t.actions.submitAnswer}
                  </button>
                ) : (
                  <div
                    className={`p-3 rounded-xl text-xs sm:text-sm space-y-1 border ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="font-bold">
                      {isCorrect ? t.lesson.quizCorrect : t.lesson.quizIncorrect}
                    </div>
                    <p className="leading-relaxed">{q.explanation[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {allQuizSubmitted && (
          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-200 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm font-bold text-violet-950 tabular-nums">
                {t.lesson.quizScoreTitle}: {quizCorrectCount} / {lesson.quiz.length}
              </div>
              <p className="text-xs text-violet-800">
                {quizCorrectCount === lesson.quiz.length
                  ? t.lesson.quizAllPassed
                  : t.lesson.quizNeedsRetry}
              </p>
            </div>
            <button
              type="button"
              onClick={handleRetryQuiz}
              className="min-h-[40px] px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold"
            >
              {t.actions.retryQuiz}
            </button>
          </div>
        )}
      </section>

      {/* 9. Lesson Completion & Prev/Next Navigation */}
      <section className="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
        {celebrationXp !== null && (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-300 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">{t.lesson.celebrationTitle}</div>
              <div className="text-xs text-emerald-200">
                {t.lesson.celebrationDesc} (+{celebrationXp} XP)
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-300">{t.lesson.completeRequirementHint}</p>
          <button
            type="button"
            disabled={isCompleted}
            onClick={handleCompleteClick}
            className={`min-h-[46px] px-5 py-2.5 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 ${
              isCompleted
                ? 'bg-emerald-600 text-white cursor-default'
                : 'bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {isCompleted ? t.actions.lessonCompleted : `${t.actions.completeLesson} (+${lesson.xpReward} XP)`}
          </button>
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          {prevLesson ? (
            <button
              type="button"
              onClick={() => onSelectLesson(prevLesson.id)}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
            >
              <PrevIcon className="w-4 h-4" />
              <span className="truncate max-w-[140px] sm:max-w-xs">{prevLesson.title[lang]}</span>
            </button>
          ) : (
            <div />
          )}

          {nextLesson && (
            <button
              type="button"
              onClick={() => onSelectLesson(nextLesson.id)}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <span className="truncate max-w-[140px] sm:max-w-xs">{nextLesson.title[lang]}</span>
              <NextIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
