import React, {useState} from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  Flame,
  Lock,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';
import {HTML_CSS_PATH, LESSONS} from '../data/curriculum';
import {BADGES, CHALLENGES, getLevelInfo} from '../data/gamification';
import {TranslationStrings} from '../i18n/translations';
import {Language, NavSection, UserProgress} from '../types';
import {BadgeIcon} from './BadgeIcon';

interface HomeDashboardProps {
  t: TranslationStrings;
  lang: Language;
  progress: UserProgress;
  onNavigate: (section: NavSection) => void;
  onOpenLesson: (lessonId: number) => void;
  onOpenChallenge: (challengeId: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  t,
  lang,
  progress,
  onNavigate,
  onOpenLesson,
  onOpenChallenge,
}) => {
  const [heroImgError, setHeroImgError] = useState(false);
  const [pathImgError, setPathImgError] = useState(false);

  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const levelInfo = getLevelInfo(progress.xp);
  const completedCount = progress.completedLessonIds.length;
  const totalLessons = LESSONS.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const nextLesson =
    LESSONS.find((l) => !progress.completedLessonIds.includes(l.id)) || LESSONS[0];
  const recommendedLessons = LESSONS.filter(
    (l) => !progress.completedLessonIds.includes(l.id)
  ).slice(0, 3);
  const displayRecommended =
    recommendedLessons.length > 0 ? recommendedLessons : LESSONS.slice(0, 3);

  const dailyChallenge = CHALLENGES.find((c) => c.isDaily) || CHALLENGES[0];
  const isDailySolved = progress.completedChallengeIds.includes(dailyChallenge.id);

  const levelLabel = t.levels[levelInfo.key];

  return (
    <div className="space-y-8">
      {/* Hero Banner Split */}
      <section className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-5">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold text-violet-700">
                {t.tagline} · {t.home.freeAccessTag}
              </p>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight text-balance">
                {progress.displayName
                  ? `${t.home.welcomeReturning} ${progress.displayName}`
                  : t.home.welcomeNew}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {t.home.heroSubtitle}
              </p>
            </div>

            {completedCount === 0 && (
              <div className="text-xs sm:text-sm font-medium text-blue-800 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5">
                {t.home.newStudentNote}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onOpenLesson(nextLesson.id)}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-sm font-bold inline-flex items-center gap-2 shadow-sm transition-all whitespace-nowrap shrink-0"
              >
                <span>
                  {completedCount === 0
                    ? t.actions.continueLearning
                    : `${t.actions.startLearning}: ${nextLesson.title[lang]}`}
                </span>
                <ArrowIcon className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('playground')}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
              >
                <Code2 className="w-4 h-4 text-violet-700" />
                {t.actions.openPlayground}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-100 min-h-[200px] lg:min-h-full relative">
            {!heroImgError ? (
              <img
                src="/src/assets/images/hero_codepath_banner_1795740795336.jpg"
                alt={t.brand}
                referrerPolicy="no-referrer"
                onError={() => setHeroImgError(true)}
                className="w-full h-56 sm:h-64 lg:h-full object-cover"
              />
            ) : (
              <div className="w-full h-56 lg:h-full bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white p-6">
                <Code2 className="w-16 h-16 opacity-90" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4-Column KPI Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>{t.home.levelLabel}</span>
            <Sparkles className="w-4 h-4 text-violet-600" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900">{levelLabel}</div>
          <div className="text-xs text-slate-500 tabular-nums">
            {levelInfo.nextXp
              ? `${t.levels.nextLevelAt} ${levelInfo.nextXp} XP`
              : `${progress.xp} XP`}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>{t.home.streakLabel}</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">
            {progress.streakDays} <span className="text-sm font-semibold text-slate-600">{t.home.daysUnit}</span>
          </div>
          <div className="text-xs text-slate-500">
            {progress.streakDays === 0 ? (isAr ? 'ابدأ اليوم!' : 'Start today!') : (isAr ? 'استمر يومياً' : 'Keep going!')}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>{t.home.xpLabel}</span>
            <Zap className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">
            {progress.xp} <span className="text-sm font-semibold text-blue-600">XP</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-600 to-blue-600 rounded-full transition-all"
              style={{width: `${levelInfo.progressPercent}%`}}
            />
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>{t.home.progressLabel}</span>
            <BookOpen className="w-4 h-4 text-cyan-600" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">
            {progressPercent}%
          </div>
          <div className="text-xs text-slate-500 tabular-nums">
            {completedCount} {t.home.lessonsCompletedOf} {totalLessons}
          </div>
        </div>
      </section>

      {/* Featured Learning Path + Daily Challenge */}
      <section className="grid lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col sm:flex-row">
          <div className="sm:w-56 bg-slate-100 shrink-0">
            {!pathImgError ? (
              <img
                src={HTML_CSS_PATH.coverImage}
                alt={HTML_CSS_PATH.title[lang]}
                referrerPolicy="no-referrer"
                onError={() => setPathImgError(true)}
                className="w-full h-44 sm:h-full object-cover"
              />
            ) : (
              <div className="w-full h-44 sm:h-full bg-gradient-to-br from-blue-600 to-cyan-500" />
            )}
          </div>
          <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-blue-700">
                {t.home.learningPathTitle} · {t.paths.freeLabel}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">{HTML_CSS_PATH.title[lang]}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {HTML_CSS_PATH.subtitle[lang]}
              </p>
            </div>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-500 tabular-nums">
                  <span>{completedCount}/{totalLessons} {t.paths.lessonsLabel}</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 rounded-full transition-all"
                    style={{width: `${progressPercent}%`}}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('paths')}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
              >
                <span>{t.myLearning.startFirstLesson}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-amber-300">
                {t.home.dailyChallengeTitle} · +{dailyChallenge.xpReward} XP
              </span>
              {isDailySolved && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4" />
                  {t.challenges.solvedLabel}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">{dailyChallenge.title[lang]}</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {dailyChallenge.description[lang]}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenChallenge(dailyChallenge.id)}
            className="min-h-[44px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
          >
            <Trophy className="w-4 h-4" />
            {t.actions.tryChallenge}
          </button>
        </div>
      </section>

      {/* Recommended Lessons */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">{t.home.recommendedTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-500">{t.home.recommendedSubtitle}</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('paths')}
            className="text-sm font-semibold text-violet-700 hover:underline whitespace-nowrap shrink-0"
          >
            {t.paths.title}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {displayRecommended.map((lesson) => {
            const isDone = progress.completedLessonIds.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => onOpenLesson(lesson.id)}
                className="text-start p-5 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 tabular-nums">
                    <span>
                      {t.lesson.lessonPrefix} {lesson.id} · {lesson.durationMinutes} {t.lesson.minutesUnit}
                    </span>
                    <span className="font-semibold text-violet-700">+{lesson.xpReward} XP</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {lesson.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {lesson.summary[lang]}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-semibold">
                  <span className={isDone ? 'text-emerald-700 inline-flex items-center gap-1' : 'text-blue-700'}>
                    {isDone ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        {t.lesson.lessonPrefix} {t.challenges.solvedLabel}
                      </>
                    ) : (
                      t.actions.startLearning
                    )}
                  </span>
                  <ArrowIcon className="w-4 h-4 text-slate-400" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Achievement Badges */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-violet-600" />
            {t.home.badgesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">{t.home.badgesSubtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {BADGES.map((badge) => {
            const unlocked = progress.unlockedBadgeIds.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-colors space-y-2.5 ${
                  unlocked
                    ? 'bg-white border-violet-200'
                    : 'bg-slate-50 border-slate-200 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      unlocked ? badge.colorClass : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    <BadgeIcon name={badge.iconName} className="w-5 h-5" />
                  </div>
                  {!unlocked ? (
                    <Lock className="w-4 h-4 text-slate-400" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900">{badge.title[lang]}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {badge.conditionLabel[lang]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
