import {useCallback, useEffect, useState} from 'react';
import {CHALLENGES} from '../data/gamification';
import {LESSONS} from '../data/curriculum';
import {Language, LearningHistoryEntry, UserProgress} from '../types';

const LANG_KEY = 'codepath_language';
const PROGRESS_KEY = 'codepath_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  displayName: '',
  xp: 0,
  completedLessonIds: [],
  bookmarkedLessonIds: [],
  passedQuizLessonIds: [],
  passedExerciseLessonIds: [],
  completedChallengeIds: [],
  unlockedBadgeIds: [],
  streakDays: 0,
  lastActiveDate: null,
  customVideoUrls: {},
  history: [],
};

function getTodayDateString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function computeBadges(p: UserProgress): string[] {
  const badges = new Set<string>(p.unlockedBadgeIds);
  const completed = new Set(p.completedLessonIds);

  if (completed.size >= 1) badges.add('first-step');
  if ([1, 2, 3, 4, 5].every((id) => completed.has(id))) badges.add('html-explorer');
  if ([6, 7, 8, 9, 10].every((id) => completed.has(id))) badges.add('structure-builder');
  if ([11, 12, 13, 14, 15].every((id) => completed.has(id))) badges.add('css-stylist');
  if (completed.size >= 20) badges.add('responsive-pro');
  if (p.passedQuizLessonIds.length >= 5) badges.add('quiz-whiz');
  if (p.completedChallengeIds.length >= 1) badges.add('challenge-solver');
  if (p.streakDays >= 3) badges.add('streak-starter');

  return Array.from(badges);
}

function updateStreak(prev: UserProgress): {streakDays: number; lastActiveDate: string} {
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();
  if (prev.lastActiveDate === today) {
    return {streakDays: Math.max(1, prev.streakDays), lastActiveDate: today};
  }
  if (prev.lastActiveDate === yesterday) {
    return {streakDays: prev.streakDays + 1, lastActiveDate: today};
  }
  return {streakDays: 1, lastActiveDate: today};
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      return saved === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(LANG_KEY, language);
    } catch {
      // Ignore storage quota errors
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  return {language, toggleLanguage, setLanguage};
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) return DEFAULT_PROGRESS;
      const parsed = JSON.parse(raw) as Partial<UserProgress>;
      return {
        ...DEFAULT_PROGRESS,
        ...parsed,
        completedLessonIds: Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : [],
        bookmarkedLessonIds: Array.isArray(parsed.bookmarkedLessonIds) ? parsed.bookmarkedLessonIds : [],
        passedQuizLessonIds: Array.isArray(parsed.passedQuizLessonIds) ? parsed.passedQuizLessonIds : [],
        passedExerciseLessonIds: Array.isArray(parsed.passedExerciseLessonIds) ? parsed.passedExerciseLessonIds : [],
        completedChallengeIds: Array.isArray(parsed.completedChallengeIds) ? parsed.completedChallengeIds : [],
        unlockedBadgeIds: Array.isArray(parsed.unlockedBadgeIds) ? parsed.unlockedBadgeIds : [],
        history: Array.isArray(parsed.history) ? parsed.history : [],
        customVideoUrls: parsed.customVideoUrls && typeof parsed.customVideoUrls === 'object' ? parsed.customVideoUrls : {},
      };
    } catch {
      return DEFAULT_PROGRESS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors
    }
  }, [progress]);

  const completeLesson = useCallback((lessonId: number): {xpAwarded: number; newlyCompleted: boolean} => {
    const lesson = LESSONS.find((l) => l.id === lessonId);
    if (!lesson) return {xpAwarded: 0, newlyCompleted: false};

    let awarded = 0;
    let wasNew = false;

    setProgress((prev) => {
      if (prev.completedLessonIds.includes(lessonId)) {
        return prev;
      }
      wasNew = true;
      awarded = lesson.xpReward;
      const streak = updateStreak(prev);
      const entry: LearningHistoryEntry = {
        id: `lesson-${lessonId}-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'lesson',
        title: lesson.title,
        xpEarned: lesson.xpReward,
      };
      const next: UserProgress = {
        ...prev,
        xp: prev.xp + lesson.xpReward,
        completedLessonIds: [...prev.completedLessonIds, lessonId],
        streakDays: streak.streakDays,
        lastActiveDate: streak.lastActiveDate,
        history: [entry, ...prev.history].slice(0, 40),
      };
      next.unlockedBadgeIds = computeBadges(next);
      return next;
    });

    return {xpAwarded: awarded, newlyCompleted: wasNew};
  }, []);

  const recordQuizPass = useCallback((lessonId: number) => {
    const lesson = LESSONS.find((l) => l.id === lessonId);
    if (!lesson) return;
    setProgress((prev) => {
      if (prev.passedQuizLessonIds.includes(lessonId)) return prev;
      const streak = updateStreak(prev);
      const bonusXp = 20;
      const entry: LearningHistoryEntry = {
        id: `quiz-${lessonId}-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'quiz',
        title: lesson.title,
        xpEarned: bonusXp,
      };
      const next: UserProgress = {
        ...prev,
        xp: prev.xp + bonusXp,
        passedQuizLessonIds: [...prev.passedQuizLessonIds, lessonId],
        streakDays: streak.streakDays,
        lastActiveDate: streak.lastActiveDate,
        history: [entry, ...prev.history].slice(0, 40),
      };
      next.unlockedBadgeIds = computeBadges(next);
      return next;
    });
  }, []);

  const recordExercisePass = useCallback((lessonId: number) => {
    const lesson = LESSONS.find((l) => l.id === lessonId);
    if (!lesson) return;
    setProgress((prev) => {
      if (prev.passedExerciseLessonIds.includes(lessonId)) return prev;
      const streak = updateStreak(prev);
      const bonusXp = 25;
      const entry: LearningHistoryEntry = {
        id: `ex-${lessonId}-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'exercise',
        title: lesson.title,
        xpEarned: bonusXp,
      };
      const next: UserProgress = {
        ...prev,
        xp: prev.xp + bonusXp,
        passedExerciseLessonIds: [...prev.passedExerciseLessonIds, lessonId],
        streakDays: streak.streakDays,
        lastActiveDate: streak.lastActiveDate,
        history: [entry, ...prev.history].slice(0, 40),
      };
      next.unlockedBadgeIds = computeBadges(next);
      return next;
    });
  }, []);

  const completeChallenge = useCallback((challengeId: string): boolean => {
    const challenge = CHALLENGES.find((c) => c.id === challengeId);
    if (!challenge) return false;
    let newlySolved = false;
    setProgress((prev) => {
      if (prev.completedChallengeIds.includes(challengeId)) return prev;
      newlySolved = true;
      const streak = updateStreak(prev);
      const entry: LearningHistoryEntry = {
        id: `chal-${challengeId}-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'challenge',
        title: challenge.title,
        xpEarned: challenge.xpReward,
      };
      const next: UserProgress = {
        ...prev,
        xp: prev.xp + challenge.xpReward,
        completedChallengeIds: [...prev.completedChallengeIds, challengeId],
        streakDays: streak.streakDays,
        lastActiveDate: streak.lastActiveDate,
        history: [entry, ...prev.history].slice(0, 40),
      };
      next.unlockedBadgeIds = computeBadges(next);
      return next;
    });
    return newlySolved;
  }, []);

  const toggleBookmark = useCallback((lessonId: number) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedLessonIds.includes(lessonId);
      return {
        ...prev,
        bookmarkedLessonIds: exists
          ? prev.bookmarkedLessonIds.filter((id) => id !== lessonId)
          : [...prev.bookmarkedLessonIds, lessonId],
      };
    });
  }, []);

  const setDisplayName = useCallback((displayName: string) => {
    setProgress((prev) => ({...prev, displayName: displayName.trim().slice(0, 40)}));
  }, []);

  const setCustomVideoUrl = useCallback((lessonId: number, url: string | null) => {
    setProgress((prev) => {
      const nextUrls = {...prev.customVideoUrls};
      if (!url) {
        delete nextUrls[lessonId];
      } else {
        nextUrls[lessonId] = url;
      }
      return {...prev, customVideoUrls: nextUrls};
    });
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS);
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch {
      // Ignore
    }
  }, []);

  return {
    progress,
    completeLesson,
    recordQuizPass,
    recordExercisePass,
    completeChallenge,
    toggleBookmark,
    setDisplayName,
    setCustomVideoUrl,
    resetProgress,
  };
}
