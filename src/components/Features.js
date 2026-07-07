import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { icon: '🌍', key: 'features.multilingual' },
    { icon: '⚡', key: 'features.fast' },
    { icon: '🔒', key: 'features.secure' },
    { icon: '📱', key: 'features.responsive' },
    { icon: '🎨', key: 'features.beautiful' },
    { icon: '🛠', key: 'features.flexible' }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>{t('features.title')}</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{t(feature.key)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
