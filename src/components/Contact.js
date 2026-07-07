import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t('contact.success'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={t('contact.name')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={t('contact.email')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder={t('contact.message')}
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">{t('contact.submit')}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
