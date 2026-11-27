import React, {useState} from 'react';
import {ArrowLeft, ArrowRight, Bookmark, CheckCircle2, Clock} from 'lucide-react';
import {LESSONS} from '../data/curriculum';
import {TranslationStrings} from '../i18n/translations';
import {Language, NavSection, UserProgress} from '../types';

interface MyLearningViewProps {
  t: TranslationStrings;
  lang: Language;
  progress: UserProgress;
  onOpenLesson: (lessonId: number) => void;
  onNavigate: (section: NavSection) => void;
}

export const MyLearningView: React.FC<MyLearningViewProps> = ({
  t,
  lang,
  progress,
  onOpenLesson,
  onNavigate,
}) => {
  const [tab, setTab] = useState<'available' | 'completed' | 'saved'>('available');
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const availableLessons = LESSONS.filter(
    (l) => !progress.completedLessonIds.includes(l.id)
  );
  const completedLessons = LESSONS.filter((l) =>
    progress.completedLessonIds.includes(l.id)
  );
  const savedLessons = LESSONS.filter((l) =>
    progress.bookmarkedLessonIds.includes(l.id)
  );

  const activeList =
    tab === 'available'
      ? availableLessons
      : tab === 'completed'
      ? completedLessons
      : savedLessons;

  return (
    <div className="space-y-6">
      <header className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {t.myLearning.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">{t.myLearning.subtitle}</p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-slate-200">
          <div className="text-xs text-slate-500">{t.myLearning.completedTab}</div>
          <div className="text-2xl font-extrabold text-emerald-700 mt-1 tabular-nums">
            {completedLessons.length}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200">
          <div className="text-xs text-slate-500">{t.myLearning.savedTab}</div>
          <div className="text-2xl font-extrabold text-amber-600 mt-1 tabular-nums">
            {savedLessons.length}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200">
          <div className="text-xs text-slate-500">{t.home.xpLabel}</div>
          <div className="text-2xl font-extrabold text-violet-700 mt-1 tabular-nums">
            {progress.xp}
          </div>
        </div>
      </div>

      {/* Interactive Segmented Tabs */}
      <div className="inline-flex p-1 rounded-xl bg-slate-200/70 gap-1">
        <button
          type="button"
          onClick={() => setTab('available')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
            tab === 'available' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {t.myLearning.inProgressTab} ({availableLessons.length})
        </button>
        <button
          type="button"
          onClick={() => setTab('completed')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
            tab === 'completed' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {t.myLearning.completedTab} ({completedLessons.length})
        </button>
        <button
          type="button"
          onClick={() => setTab('saved')}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
            tab === 'saved' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {t.myLearning.savedTab} ({savedLessons.length})
        </button>
      </div>

      {activeList.length === 0 ? (
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4">
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            {tab === 'completed'
              ? t.myLearning.emptyCompleted
              : t.myLearning.emptySaved}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('paths')}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors"
          >
            {t.myLearning.startFirstLesson}
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeList.map((lesson) => {
            const isDone = progress.completedLessonIds.includes(lesson.id);
            const isSaved = progress.bookmarkedLessonIds.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => onOpenLesson(lesson.id)}
                className="text-start p-5 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 tabular-nums">
                    <span>
                      {t.lesson.modulePrefix} {lesson.moduleId} · {t.lesson.lessonPrefix} {lesson.id}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isSaved && <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />}
                      {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{lesson.title[lang]}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{lesson.summary[lang]}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold">
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
      )}
    </div>
  );
};
