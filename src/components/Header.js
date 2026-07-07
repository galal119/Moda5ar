import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>{t('app.title')}</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">{t('nav.home')}</a></li>
              <li><a href="#features">{t('nav.features')}</a></li>
              <li><a href="#services">{t('nav.services')}</a></li>
              <li><a href="#testimonials">{t('nav.testimonials')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </nav>
          <div className="language-switcher">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'ar' ? 'active' : ''}`}
              onClick={() => changeLanguage('ar')}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
