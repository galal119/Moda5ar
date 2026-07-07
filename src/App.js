import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from './i18n';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h2 className="logo">{t('app.title')}</h2>
        <div className="language-switcher">
          <button
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
          <button
            className={`lang-btn ${i18n.language === 'ar' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('ar')}
          >
            العربية
          </button>
        </div>
      </div>

      <div className="content">
        <h1>{t('app.subtitle')}</h1>
        <p className="description">{t('app.description')}</p>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <div className="feature-title">{t('features.multilingual')}</div>
            <div>{t('features.multilingualDesc')}</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <div className="feature-title">{t('features.responsive')}</div>
            <div>{t('features.responsiveDesc')}</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">{t('features.fast')}</div>
            <div>{t('features.fastDesc')}</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <div className="feature-title">{t('features.secure')}</div>
            <div>{t('features.secureDesc')}</div>
          </div>
        </div>
      </div>

      <div className="footer">
        {t('footer')}
      </div>
    </div>
  );
}

export default App;
