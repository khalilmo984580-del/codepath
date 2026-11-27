/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState} from 'react';
import {
  BookMarked,
  Bot,
  Code2,
  Compass,
  Globe,
  Home,
  Trophy,
  User,
} from 'lucide-react';
import {AITutorModal} from './components/AITutorModal';
import {ChallengesView} from './components/ChallengesView';
import {HomeDashboard} from './components/HomeDashboard';
import {LessonView} from './components/LessonView';
import {MyLearningView} from './components/MyLearningView';
import {PathsView} from './components/PathsView';
import {PlaygroundView} from './components/PlaygroundView';
import {ProfileView} from './components/ProfileView';
import {OfflineIndicator, PWAInstallButton} from './components/PWAComponents';
import {getLessonById} from './data/curriculum';
import {CHALLENGES} from './data/gamification';
import {useLanguage, useProgress} from './hooks/useAppState';
import {translations} from './i18n/translations';
import {NavSection} from './types';

export default function App() {
  const {language, toggleLanguage, setLanguage} = useLanguage();
  const t = translations[language];

  const {
    progress,
    completeLesson,
    recordQuizPass,
    recordExercisePass,
    completeChallenge,
    toggleBookmark,
    setDisplayName,
    setCustomVideoUrl,
    resetProgress,
  } = useProgress();

  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(CHALLENGES[0].id);
  const [playgroundSeed, setPlaygroundSeed] = useState<{html?: string; css?: string}>({});
  const [tutorOpen, setTutorOpen] = useState(false);
  const [tutorContextTitle, setTutorContextTitle] = useState<string | undefined>(undefined);

  const navItems: {id: NavSection; label: string; icon: React.ReactNode}[] = [
    {id: 'home', label: t.nav.home, icon: <Home className="w-5 h-5" />},
    {id: 'paths', label: t.nav.paths, icon: <Compass className="w-5 h-5" />},
    {id: 'my-learning', label: t.nav.myLearning, icon: <BookMarked className="w-5 h-5" />},
    {id: 'playground', label: t.nav.playground, icon: <Code2 className="w-5 h-5" />},
    {id: 'challenges', label: t.nav.challenges, icon: <Trophy className="w-5 h-5" />},
    {id: 'profile', label: t.nav.profile, icon: <User className="w-5 h-5" />},
  ];

  const handleNavigate = (section: NavSection) => {
    setActiveLessonId(null);
    setActiveSection(section);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const handleOpenLesson = (lessonId: number) => {
    setActiveSection('paths');
    setActiveLessonId(lessonId);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const handleOpenChallenge = (challengeId: string) => {
    setActiveLessonId(null);
    setSelectedChallengeId(challengeId);
    setActiveSection('challenges');
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const handleOpenInPlayground = (html: string, css: string) => {
    setPlaygroundSeed({html, css});
    setActiveLessonId(null);
    setActiveSection('playground');
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const activeLesson = activeLessonId ? getLessonById(activeLessonId) : undefined;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col lg:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 bg-white border-e border-slate-200 sticky top-0 h-screen p-5 justify-between">
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2.5 text-start w-full"
          >
            <img
              src="/icon.svg"
              alt={t.brand}
              className="w-9 h-9 rounded-xl shrink-0"
            />
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              {t.brand}
            </span>
          </button>

          <nav className="space-y-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id && !activeLesson;
              const isLessonPathActive = item.id === 'paths' && !!activeLesson;
              const active = isActive || isLessonPathActive;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 transition-colors whitespace-nowrap ${
                    active
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setTutorContextTitle(activeLesson ? activeLesson.title[language] : undefined);
                setTutorOpen(true);
              }}
              className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-800 text-sm font-semibold flex items-center gap-3 transition-colors"
            >
              <Bot className="w-5 h-5" />
              <span>{t.nav.aiTutor}</span>
            </button>
          </div>
        </div>

        <div className="space-y-2.5 pt-4 border-t border-slate-100">
          <PWAInstallButton t={t} />
          <button
            type="button"
            onClick={toggleLanguage}
            className="w-full min-h-[42px] px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            <Globe className="w-4 h-4 text-blue-600" />
            <span>{t.actions.switchLang}</span>
          </button>
        </div>
      </aside>

      {/* Mobile Compact Sticky Top Bar */}
      <header className="lg:hidden sticky top-0 z-30 h-14 px-4 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-2 whitespace-nowrap shrink-0"
        >
          <img src="/icon.svg" alt={t.brand} className="w-7 h-7 rounded-lg" />
          <span className="text-base font-extrabold text-slate-900">{t.brand}</span>
        </button>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setTutorContextTitle(activeLesson ? activeLesson.title[language] : undefined);
              setTutorOpen(true);
            }}
            aria-label={t.nav.aiTutor}
            className="min-w-[40px] min-h-[40px] px-2.5 rounded-xl bg-violet-50 text-violet-700 inline-flex items-center justify-center gap-1.5 text-xs font-semibold"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden xs:inline">{t.actions.askTutor}</span>
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="min-h-[40px] px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            {t.actions.switchLang}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-10">
        <div className="max-w-6xl mx-auto">
          {activeLesson ? (
            <LessonView
              lesson={activeLesson}
              t={t}
              lang={language}
              progress={progress}
              onBack={() => setActiveLessonId(null)}
              onSelectLesson={handleOpenLesson}
              onCompleteLesson={completeLesson}
              onRecordQuizPass={recordQuizPass}
              onRecordExercisePass={recordExercisePass}
              onToggleBookmark={toggleBookmark}
              onSaveVideoUrl={setCustomVideoUrl}
              onOpenInPlayground={handleOpenInPlayground}
              onOpenTutor={(title) => {
                setTutorContextTitle(title);
                setTutorOpen(true);
              }}
            />
          ) : activeSection === 'home' ? (
            <HomeDashboard
              t={t}
              lang={language}
              progress={progress}
              onNavigate={handleNavigate}
              onOpenLesson={handleOpenLesson}
              onOpenChallenge={handleOpenChallenge}
            />
          ) : activeSection === 'paths' ? (
            <PathsView
              t={t}
              lang={language}
              progress={progress}
              onOpenLesson={handleOpenLesson}
            />
          ) : activeSection === 'my-learning' ? (
            <MyLearningView
              t={t}
              lang={language}
              progress={progress}
              onOpenLesson={handleOpenLesson}
              onNavigate={handleNavigate}
            />
          ) : activeSection === 'playground' ? (
            <PlaygroundView
              t={t}
              lang={language}
              initialHtml={playgroundSeed.html}
              initialCss={playgroundSeed.css}
            />
          ) : activeSection === 'challenges' ? (
            <ChallengesView
              t={t}
              lang={language}
              progress={progress}
              selectedChallengeId={selectedChallengeId}
              onSelectChallenge={setSelectedChallengeId}
              onCompleteChallenge={completeChallenge}
            />
          ) : (
            <ProfileView
              t={t}
              lang={language}
              progress={progress}
              onSetDisplayName={setDisplayName}
              onSetLanguage={setLanguage}
              onResetProgress={resetProgress}
            />
          )}
        </div>
      </main>

      {/* Mobile Fixed Bottom Navigation Bar (All 6 main sections) */}
      <nav
        aria-label="Mobile bottom navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-30 h-16 bg-white/95 backdrop-blur-md border-t border-slate-200 grid grid-cols-6 items-center px-1"
      >
        {navItems.map((item) => {
          const isActive =
            (activeSection === item.id && !activeLesson) ||
            (item.id === 'paths' && !!activeLesson);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={`min-h-[48px] flex flex-col items-center justify-center gap-0.5 rounded-lg transition-colors ${
                isActive ? 'text-violet-700 font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.icon}
              <span className="text-[10px] leading-tight truncate max-w-full px-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* AI Tutor Modal & Offline Indicator */}
      <AITutorModal
        isOpen={tutorOpen}
        onClose={() => setTutorOpen(false)}
        t={t}
        lang={language}
        activeLessonTitle={tutorContextTitle}
      />
      <OfflineIndicator text={t.pwa.offlineBanner} />
    </div>
  );
}
