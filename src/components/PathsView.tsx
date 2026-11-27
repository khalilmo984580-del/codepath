import React, {useState} from 'react';
import {ArrowLeft, ArrowRight, Bookmark, CheckCircle2, Clock, Sparkles} from 'lucide-react';
import {HTML_CSS_PATH, LESSONS} from '../data/curriculum';
import {FUTURE_ROADMAP} from '../data/gamification';
import {TranslationStrings} from '../i18n/translations';
import {Language, UserProgress} from '../types';

interface PathsViewProps {
  t: TranslationStrings;
  lang: Language;
  progress: UserProgress;
  onOpenLesson: (lessonId: number) => void;
}

export const PathsView: React.FC<PathsViewProps> = ({
  t,
  lang,
  progress,
  onOpenLesson,
}) => {
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [coverError, setCoverError] = useState(false);

  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const completedSet = new Set(progress.completedLessonIds);
  const completedCount = progress.completedLessonIds.length;
  const percent = Math.round((completedCount / LESSONS.length) * 100);

  const visibleModules =
    selectedModule === 'all'
      ? HTML_CSS_PATH.modules
      : HTML_CSS_PATH.modules.filter((m) => m.id === selectedModule);

  const accentMap = {
    violet: 'bg-violet-600',
    blue: 'bg-blue-600',
    cyan: 'bg-cyan-600',
    orange: 'bg-orange-500',
  };

  return (
    <div className="space-y-8">
      <header className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.paths.title}</h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">{t.paths.subtitle}</p>
      </header>

      {/* Main Free Path Header Card */}
      <section className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-12 items-stretch">
          <div className="md:col-span-4 bg-slate-100">
            {!coverError ? (
              <img
                src={HTML_CSS_PATH.coverImage}
                alt={HTML_CSS_PATH.title[lang]}
                referrerPolicy="no-referrer"
                onError={() => setCoverError(true)}
                className="w-full h-48 md:h-full object-cover"
              />
            ) : (
              <div className="w-full h-48 md:h-full bg-gradient-to-br from-violet-600 to-cyan-500" />
            )}
          </div>
          <div className="md:col-span-8 p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-emerald-700">
                {t.paths.allCurrentFree} · {HTML_CSS_PATH.levelLabel[lang]} · {HTML_CSS_PATH.lessonsCount} {t.paths.lessonsLabel} · {HTML_CSS_PATH.estimatedHours} {t.paths.hoursLabel}
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {HTML_CSS_PATH.title[lang]}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {HTML_CSS_PATH.description[lang]}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 tabular-nums">
                <span>
                  {completedCount}/{LESSONS.length} {t.paths.lessonsLabel}
                </span>
                <span>{percent}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 rounded-full transition-all"
                  style={{width: `${percent}%`}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedModule('all')}
          className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
            selectedModule === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          {t.paths.allModules}
        </button>
        {HTML_CSS_PATH.modules.map((mod) => (
          <button
            key={mod.id}
            type="button"
            onClick={() => setSelectedModule(mod.id)}
            className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
              selectedModule === mod.id
                ? 'bg-violet-600 text-white'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t.lesson.modulePrefix} {mod.id}
          </button>
        ))}
      </div>

      {/* Modules & 20 Lessons */}
      <div className="space-y-6">
        {visibleModules.map((mod) => {
          const modLessons = LESSONS.filter((l) => l.moduleId === mod.id);
          const modDone = modLessons.filter((l) => completedSet.has(l.id)).length;
          return (
            <section
              key={mod.id}
              className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 space-y-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-start gap-3">
                  <span
                    className={`w-9 h-9 rounded-xl ${accentMap[mod.accentColor]} text-white font-bold text-sm flex items-center justify-center shrink-0 tabular-nums`}
                  >
                    {mod.id}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {mod.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {mod.description[lang]}
                    </p>
                  </div>
                </div>
                <div className="text-xs font-semibold text-slate-500 tabular-nums">
                  {modDone}/{modLessons.length} {t.paths.lessonsLabel}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {modLessons.map((lesson) => {
                  const isDone = completedSet.has(lesson.id);
                  const isSaved = progress.bookmarkedLessonIds.includes(lesson.id);
                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => onOpenLesson(lesson.id)}
                      className={`text-start p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                        isDone
                          ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                          : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-violet-300'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-slate-500 tabular-nums">
                          <span>
                            {t.lesson.lessonPrefix} {lesson.id}
                          </span>
                          <div className="flex items-center gap-2">
                            {isSaved && <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
                            {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {lesson.title[lang]}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {lesson.summary[lang]}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/70 text-xs">
                        <span className="inline-flex items-center gap-1 text-slate-500 tabular-nums">
                          <Clock className="w-3.5 h-3.5" />
                          {lesson.durationMinutes} {t.lesson.minutesUnit} · +{lesson.xpReward} XP
                        </span>
                        <ArrowIcon className="w-4 h-4 text-violet-600" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Future Monetization Roadmap (Prepared Architecture, Zero Billing) */}
      <section className="rounded-3xl bg-slate-900 text-white p-6 space-y-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-4 h-4" />
            {t.paths.comingSoon}
          </div>
          <h2 className="text-lg sm:text-xl font-bold">{t.paths.futureTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-300">{t.paths.futureSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {FUTURE_ROADMAP.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2"
            >
              <div className="text-xs font-semibold text-amber-300">
                {item.estimatedCount[lang]}
              </div>
              <h3 className="text-sm font-bold text-white">{item.title[lang]}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.description[lang]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
