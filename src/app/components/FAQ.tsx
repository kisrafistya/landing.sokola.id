"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const faqKeys = ['q1', 'q2', 'q3'];

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" style={{ background: '#B6F0E6', padding: '4rem 0' }}>
      <div className="container faq-container" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Fredoka, Nunito, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#232B55', marginBottom: '2rem' }}>
          FAQ
        </h2>
        <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqKeys.map((key, idx) => (
            <div
              key={key}
              className="faq-item"
              style={{
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 2px 8px rgba(35,43,85,0.08)',
                padding: '1.5rem 2rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s, border-color 0.2s',
                border: openIndex === idx ? '2px solid #F94F9C' : '2px solid transparent',
              }}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="faq-question-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, color: '#232B55', fontSize: '1.1rem' }}>{t(`faq.${key}.q`)}</span>
                <span className="faq-icon" style={{ fontSize: 24, color: '#F94F9C', marginLeft: 16, transition: 'transform 0.2s' }}>{openIndex === idx ? '−' : '+'}</span>
              </div>
              {openIndex === idx && (
                <p className="faq-answer" style={{ color: '#222', marginTop: 16, fontSize: 15, lineHeight: 1.6 }}>{t(`faq.${key}.a`)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq-section {
          /* Default section styles */
        }
        .faq-container h2 {
           /* Default title styles */
        }
        .faq-item span[style*="font-size: 1.1rem"] { /* Question Text */
           /* Default question text styles */
        }
        .faq-answer {
           /* Default answer text styles */
        }
        
        @media (max-width: 768px) { /* Tablet and smaller */
          .faq-section {
            padding: 3rem 1rem !important;
          }
          .faq-container h2 {
            font-size: 1.8rem !important;
            margin-bottom: 1.5rem !important;
          }
          .faq-list {
            gap: 1rem !important;
          }
          .faq-item {
            padding: 1.2rem 1.5rem !important;
            border-radius: 16px !important;
          }
          .faq-item span[style*="font-size: 1.1rem"] { /* Question Text */
            font-size: 1rem !important;
          }
          .faq-icon {
            font-size: 22px !important;
          }
          .faq-answer {
            font-size: 14px !important;
            margin-top: 12px !important;
          }
        }

        @media (max-width: 480px) { /* Mobile specific */
          .faq-section {
            padding: 2.5rem 1rem !important;
          }
          .faq-item {
            padding: 1rem 1.2rem !important;
          }
          .faq-item span[style*="font-size: 1.1rem"] { /* Question Text */
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ; 