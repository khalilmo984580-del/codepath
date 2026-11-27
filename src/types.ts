export type Language = 'ar' | 'en';

export type NavSection =
  | 'home'
  | 'paths'
  | 'my-learning'
  | 'playground'
  | 'challenges'
  | 'profile';

export type LocalizedText = {
  ar: string;
  en: string;
};

export type LocalizedList = {
  ar: string[];
  en: string[];
};

export type QuizQuestionType = 'mcq' | 'tf';

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  question: LocalizedText;
  options: {
    ar: string[];
    en: string[];
  };
  correctIndex: number;
  explanation: LocalizedText;
}

export type VisualConceptType =
  | 'html-anatomy'
  | 'doc-structure'
  | 'headings-scale'
  | 'links-images'
  | 'lists-tree'
  | 'table-grid'
  | 'form-controls'
  | 'semantic-layout'
  | 'buttons-details'
  | 'personal-page-wireframe'
  | 'css-rule-anatomy'
  | 'color-palette'
  | 'typography-scale'
  | 'spacing-margin-padding'
  | 'borders-shadows'
  | 'box-model'
  | 'flexbox-axes'
  | 'css-grid-tracks'
  | 'responsive-breakpoints'
  | 'portfolio-architecture';

export interface ValidationRule {
  type: 'html-selector' | 'html-attr' | 'css-pattern' | 'text-present';
  target: string;
  attr?: string;
  description: LocalizedText;
}

export interface CodingExercise {
  prompt: LocalizedText;
  hint: LocalizedText;
  starterHtml: string;
  starterCss: string;
  expectedHtml: string;
  expectedCss: string;
  rules: ValidationRule[];
}

export interface GlossaryTerm {
  term: string;
  meaning: LocalizedText;
}

export interface Lesson {
  id: number;
  slug: string;
  moduleId: number;
  title: LocalizedText;
  summary: LocalizedText;
  durationMinutes: number;
  xpReward: number;
  tier: 'free' | 'premium';
  objectives: LocalizedList;
  explanation: LocalizedList;
  glossary: GlossaryTerm[];
  visualType: VisualConceptType;
  visualCaption: LocalizedText;
  exampleTitle: LocalizedText;
  exampleHtml: string;
  exampleCss: string;
  exercise: CodingExercise;
  quiz: QuizQuestion[];
}

export interface ModuleInfo {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  accentColor: 'violet' | 'blue' | 'cyan' | 'orange';
}

export interface LearningPath {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  tier: 'free' | 'premium';
  estimatedHours: number;
  lessonsCount: number;
  levelLabel: LocalizedText;
  coverImage: string;
  modules: ModuleInfo[];
}

export interface BadgeDefinition {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  iconName: 'sparkles' | 'code' | 'layout' | 'palette' | 'trophy' | 'flame' | 'check' | 'smartphone' | 'layers';
  colorClass: string;
  conditionLabel: LocalizedText;
}

export interface ChallengeItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  difficulty: 'beginner' | 'intermediate';
  xpReward: number;
  isDaily?: boolean;
  starterHtml: string;
  starterCss: string;
  solutionHtml: string;
  solutionCss: string;
  rules: ValidationRule[];
}

export interface LearningHistoryEntry {
  id: string;
  timestamp: string;
  type: 'lesson' | 'quiz' | 'challenge' | 'exercise';
  title: LocalizedText;
  xpEarned: number;
}

export interface UserProgress {
  displayName: string;
  xp: number;
  completedLessonIds: number[];
  bookmarkedLessonIds: number[];
  passedQuizLessonIds: number[];
  passedExerciseLessonIds: number[];
  completedChallengeIds: string[];
  unlockedBadgeIds: string[];
  streakDays: number;
  lastActiveDate: string | null;
  customVideoUrls: Record<number, string>;
  history: LearningHistoryEntry[];
}

export interface PlaygroundTemplate {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  html: string;
  css: string;
}

export interface FutureFeatureItem {
  id: string;
  category: 'path' | 'project' | 'exercise' | 'resource';
  title: LocalizedText;
  description: LocalizedText;
  tier: 'premium';
  estimatedCount: LocalizedText;
}
