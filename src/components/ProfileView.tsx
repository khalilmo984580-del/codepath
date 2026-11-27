import React, {useState} from 'react';
import {AlertTriangle, CheckCircle2, Flame, Globe, History, Lock, Trash2, Zap} from 'lucide-react';
import {LESSONS} from '../data/curriculum';
import {BADGES, formatLocalizedDate, getLevelInfo} from '../data/gamification';
import {TranslationStrings} from '../i18n/translations';
import {Language, UserProgress} from '../types';
import {BadgeIcon} from './BadgeIcon';
import {PWAInstallButton} from './PWAComponents';

interface ProfileViewProps {
  t: TranslationStrings;
  lang: Language;
  progress: UserProgress;
  onSetDisplayName: (name: string) => void;
  onSetLanguage: (lang: Language) => void;
  onResetProgress: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  t,
  lang,
  progress,
  onSetDisplayName,
  onSetLanguage,
  onResetProgress,
}) => {
  const [nameInput, setNameInput] = useState(progress.displayName);
  const [savedNotice, setSavedNotice] = useState(false);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);

  const levelInfo = getLevelInfo(progress.xp);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    onSetDisplayName(nameInput);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t.profile.title}</h1>
        <p className="text-sm text-slate-600">{t.profile.subtitle}</p>
      </header>

      {/* Summary Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
          <div className="text-xs text-slate-500">{t.profile.currentLevelLabel}</div>
          <div className="text-lg font-extrabold text-violet-700">{t.levels[levelInfo.key]}</div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
          <div className="text-xs text-slate-500">{t.profile.totalXpLabel}</div>
          <div className="text-lg font-extrabold text-blue-700 tabular-nums inline-flex items-center gap-1">
            <Zap className="w-4 h-4" />
            {progress.xp}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
          <div className="text-xs text-slate-500">{t.profile.completedLessonsLabel}</div>
          <div className="text-lg font-extrabold text-emerald-700 tabular-nums">
            {progress.completedLessonIds.length} / {LESSONS.length}
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
          <div className="text-xs text-slate-500">{t.profile.streakLabel}</div>
          <div className="text-lg font-extrabold text-orange-600 tabular-nums inline-flex items-center gap-1">
            <Flame className="w-4 h-4" />
            {progress.streakDays}
          </div>
        </div>
      </div>

      {/* Settings Form */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-5">
        <form onSubmit={handleSaveName} className="space-y-2">
          <label htmlFor="student-name" className="block text-sm font-bold text-slate-900">
            {t.profile.studentNameLabel}
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id="student-name"
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder={t.profile.namePlaceholder}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            <button
              type="submit"
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              {t.actions.saveName}
            </button>
          </div>
          {savedNotice && (
            <p className="text-xs font-semibold text-emerald-700 inline-flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              {t.profile.savedToast}
            </p>
          )}
        </form>

        <div className="pt-4 border-t border-slate-100 space-y-2">
          <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            {t.profile.languageLabel}
          </div>
          <div className="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
            <button
              type="button"
              onClick={() => onSetLanguage('ar')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                lang === 'ar' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
              }`}
            >
              العربية (RTL)
            </button>
            <button
              type="button"
              onClick={() => onSetLanguage('en')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                lang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
              }`}
            >
              English (LTR)
            </button>
          </div>
        </div>

        <div className="pt-2">
          <PWAInstallButton t={t} />
        </div>
      </section>

      {/* Earned & Locked Badges */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">{t.profile.badgesSectionTitle}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BADGES.map((badge) => {
            const unlocked = progress.unlockedBadgeIds.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border space-y-2 ${
                  unlocked ? 'bg-white border-violet-200' : 'bg-slate-50 border-slate-200 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      unlocked ? badge.colorClass : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    <BadgeIcon name={badge.iconName} className="w-4 h-4" />
                  </div>
                  {unlocked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-400" />
                  )}
                </div>
                <div className="text-sm font-bold text-slate-900">{badge.title[lang]}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{badge.description[lang]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Learning History */}
      <section className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <History className="w-5 h-5 text-violet-600" />
          {t.profile.historySectionTitle}
        </h2>

        {progress.history.length === 0 ? (
          <p className="text-sm text-slate-500">{t.profile.emptyHistory}</p>
        ) : (
          <div className="divide-y divide-slate-100">
            {progress.history.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-sm">
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 truncate">{item.title[lang]}</div>
                  <div className="text-xs text-slate-500">
                    {formatLocalizedDate(item.timestamp, lang)}
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 tabular-nums shrink-0">
                  +{item.xpEarned} XP
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Danger Zone: Reset Local Progress */}
      <section className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200 space-y-3">
        <h2 className="text-base font-bold text-rose-950">{t.profile.dangerZoneTitle}</h2>
        <button
          type="button"
          onClick={() => setConfirmResetOpen(true)}
          className="min-h-[44px] px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          {t.actions.resetProgress}
        </button>
      </section>

      {confirmResetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-6 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">{t.profile.resetWarningTitle}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.profile.resetWarningDesc}</p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setConfirmResetOpen(false)}
                className="min-h-[42px] px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold"
              >
                {t.actions.cancel}
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setNameInput('');
                  setConfirmResetOpen(false);
                }}
                className="min-h-[42px] px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold"
              >
                {t.actions.confirmReset}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
