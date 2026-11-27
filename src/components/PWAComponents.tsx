import React, {useState} from 'react';
import {Download, WifiOff} from 'lucide-react';
import {useOnlineStatus, usePWAInstall} from '../hooks/usePWA';
import {TranslationStrings} from '../i18n/translations';

interface PWAInstallButtonProps {
  t: TranslationStrings;
  compact?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({t, compact = false}) => {
  const {isInstallable, isInstalled, isIOS, install} = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) return null;

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className={`inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors whitespace-nowrap shrink-0 ${
          compact ? 'px-3 py-2 text-xs' : 'w-full px-4 py-2.5 text-sm'
        }`}
      >
        <Download className="w-4 h-4" />
        {t.actions.installApp}
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className={`inline-flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 hover:bg-violet-100 text-violet-800 font-semibold transition-colors whitespace-nowrap shrink-0 ${
            compact ? 'px-3 py-2 text-xs' : 'w-full px-4 py-2.5 text-sm'
          }`}
        >
          <Download className="w-4 h-4" />
          {t.actions.installIOS}
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl border border-slate-200 space-y-3">
              <h3 className="text-lg font-bold text-slate-900">{t.pwa.iosModalTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{t.pwa.iosStep1}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{t.pwa.iosStep2}</p>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
              >
                {t.actions.close}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export const OfflineIndicator: React.FC<{text: string}> = ({text}) => {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-20 lg:bottom-4 inset-x-4 lg:inset-x-auto lg:end-6 z-40 flex items-center gap-2.5 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg"
    >
      <WifiOff className="w-4 h-4 shrink-0" />
      <span>{text}</span>
    </div>
  );
};
