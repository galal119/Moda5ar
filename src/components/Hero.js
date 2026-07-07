import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>{t('hero.title')}</h2>
          <p>{t('hero.subtitle')}</p>
          <button className="cta-button">{t('hero.cta')}</button>
        </div>
        <div className="hero-image">
          <div className="hero-icon">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
