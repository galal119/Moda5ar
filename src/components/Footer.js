import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('app.title')}</h3>
            <p>{t('footer.description')}</p>
          </div>
          <div className="footer-section">
            <h3>{t('footer.links')}</h3>
            <ul>
              <li><a href="#home">{t('nav.home')}</a></li>
              <li><a href="#features">{t('nav.features')}</a></li>
              <li><a href="#services">{t('nav.services')}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t('footer.contact')}</h3>
            <p>Email: info@moda5ar.com</p>
            <p>Phone: +1 (234) 567-8900</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
