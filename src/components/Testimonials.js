import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { name: 'Ahmed', company: 'Tech Corp', text: 'testimonials.testimonial1' },
    { name: 'Fatima', company: 'Design Studio', text: 'testimonials.testimonial2' },
    { name: 'John', company: 'Innovation Labs', text: 'testimonials.testimonial3' }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>{t('testimonials.title')}</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{t(testimonial.text)}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
