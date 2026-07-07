import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: '💼', key: 'services.consulting' },
    { icon: '🎓', key: 'services.training' },
    { icon: '🔧', key: 'services.support' },
    { icon: '📊', key: 'services.analytics' }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>{t('services.title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{t(service.key)}</h3>
              <p>{t(`services.${service.key.split('.')[1]}_desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
