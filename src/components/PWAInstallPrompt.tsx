import React, { useState, useEffect } from 'react';
import { X, Download, Smartphone, Monitor } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

const PWAInstallPrompt: React.FC = () => {
  const { canInstall, installApp, isInstalled } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const iOS = /iPad|iPhone|iPod/.test(userAgent);
    const android = /Android/.test(userAgent);
    
    setIsIOS(iOS);
    setIsAndroid(android);

    if (isInstalled) return;

    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('pwa-prompt-dismissed');
      const lastDismissed = dismissed ? parseInt(dismissed) : 0;
      const now = Date.now();
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      
      if ((!dismissed || (now - lastDismissed > sevenDays)) && (canInstall || iOS || android)) {
        setShowPrompt(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [canInstall, isInstalled, isIOS, isAndroid]);

  const handleInstallClick = async () => {
    const success = await installApp();
    if (success) {
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
  };

  if (!showPrompt || isInstalled) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 animate-slide-up">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {isIOS || isAndroid ? (
              <Smartphone className="text-blue-600" size={24} />
            ) : (
              <Monitor className="text-blue-600" size={24} />
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Install IEEE MSIT App</h3>

            {isIOS ? (
              <div className="text-xs text-gray-600 mb-3">
                <p className="mb-2">Add to your home screen for easy access:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Tap the share button{' '}
                    <span className="inline-block w-4 h-4 bg-blue-500 rounded text-white text-center text-xs leading-4">
                      ↗
                    </span>
                  </li>
                  <li>Scroll down and tap "Add to Home Screen"</li>
                  <li>Tap "Add" to confirm</li>
                </ol>
              </div>
            ) : isAndroid && !canInstall ? (
              <div className="text-xs text-gray-600 mb-3">
                <p className="mb-2">Install the app for a better experience:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Tap the menu button (⋮) in your browser</li>
                  <li>Look for "Install app" or "Add to Home screen"</li>
                  <li>Follow the prompts to install</li>
                </ol>
              </div>
            ) : (
              <p className="text-xs text-gray-600 mb-3">
                Get quick access to IEEE MSIT directly from your home screen. Install our app for a
                better experience with offline access and faster loading!
              </p>
            )}

            {canInstall && (
              <button
                onClick={handleInstallClick}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
              >
                <Download size={14} />
                <span>Install App</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
