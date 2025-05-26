"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const valueProps = [
  { key: 'breakFree', color: '#E6F7F7', icon: '🪁' },
  { key: 'affordable', color: '#FFF6B7', icon: '💸' },
  { key: 'aiGuidance', color: '#EAF1FB', icon: '🤖' },
  { key: 'community', color: '#FDE6F2', icon: '🤝' },
  { key: 'trackProgress', color: '#E6EFFF', icon: '📈' },
];

const ValueProps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="value-props" style={{ background: '#fff', padding: '4.5rem 0 3.5rem 0' }}>
      <div className="container value-props-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Fredoka, Nunito, sans-serif', fontWeight: 900, fontSize: '2.3rem', color: '#232B55', marginBottom: '2.5rem', letterSpacing: '-0.5px' }}>
          {t('header.nav.features')}
        </h2>
        <div className="value-props-grid-row1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem 2.5rem', width: '100%', maxWidth: 950 }}>
          {valueProps.slice(0, 3).map((prop) => (
            <div key={prop.key} className="value-prop-card" style={{
              background: prop.color,
              borderRadius: 28,
              boxShadow: '0 4px 24px rgba(35,43,85,0.08)',
              padding: '2.2rem 2rem 2.1rem 2rem',
              minWidth: 240,
              maxWidth: 320,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.18s, box-shadow 0.18s',
              cursor: 'pointer',
              fontFamily: 'Fredoka, Nunito, sans-serif',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(35,43,85,0.13)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(35,43,85,0.08)'; }}
            >
              <span style={{ fontSize: 48, marginBottom: 18 }}>{prop.icon}</span>
              <h3 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#232B55', marginBottom: 10, fontFamily: 'Fredoka, Nunito, sans-serif' }}>
                {t(`valueProps.${prop.key}.title`)}
              </h3>
              <p style={{ color: '#232B55', fontSize: 16, fontWeight: 500, lineHeight: 1.6, margin: 0, opacity: 0.92 }}>{t(`valueProps.${prop.key}.desc`)}</p>
            </div>
          ))}
        </div>
        <div className="value-props-grid-row2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem 2.5rem', width: '66%', maxWidth: 650, margin: '2.5rem auto 0 auto' }}>
          {valueProps.slice(3).map((prop) => (
            <div key={prop.key} className="value-prop-card" style={{
              background: prop.color,
              borderRadius: 28,
              boxShadow: '0 4px 24px rgba(35,43,85,0.08)',
              padding: '2.2rem 2rem 2.1rem 2rem',
              minWidth: 240,
              maxWidth: 320,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.18s, box-shadow 0.18s',
              cursor: 'pointer',
              fontFamily: 'Fredoka, Nunito, sans-serif',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(35,43,85,0.13)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(35,43,85,0.08)'; }}
            >
              <span style={{ fontSize: 48, marginBottom: 18 }}>{prop.icon}</span>
              <h3 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#232B55', marginBottom: 10, fontFamily: 'Fredoka, Nunito, sans-serif' }}>
                {t(`valueProps.${prop.key}.title`)}
              </h3>
              <p style={{ color: '#232B55', fontSize: 16, fontWeight: 500, lineHeight: 1.6, margin: 0, opacity: 0.92 }}>{t(`valueProps.${prop.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .value-props-container h2 {
          /* Ensure this can be overridden by media queries if needed */
        }
        @media (max-width: 992px) { /* Tablet */
          .value-props-container {
            padding: 0 1rem;
          }
          .value-props-grid-row1,
          .value-props-grid-row2 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
            width: 100% !important;
            max-width: 700px !important;
          }
          .value-props-grid-row2 {
            margin-top: 2rem !important;
          }
          .value-prop-card {
            padding: 1.8rem 1.5rem !important;
            max-width: none !important; /* Allow cards to fill grid cells */
          }
           .value-prop-card h3 {
            font-size: 1.15rem !important;
          }
          .value-prop-card p {
            font-size: 15px !important;
          }
        }

        @media (max-width: 600px) { /* Mobile */
          .value-props-container h2 {
            font-size: 2rem !important;
            margin-bottom: 2rem !important;
          }
          .value-props-grid-row1,
          .value-props-grid-row2 {
            grid-template-columns: 1fr !important; /* Stack to single column */
            gap: 1.5rem !important;
            max-width: 350px !important; /* Adjust for single column width */
          }
           .value-props-grid-row2 {
            width: 100% !important; /* Make second row also full width when stacked */
          }
          .value-prop-card {
            padding: 1.5rem !important;
          }
          .value-prop-card span {
            font-size: 40px !important;
            margin-bottom: 12px !important;
          }
          .value-prop-card h3 {
            font-size: 1.1rem !important;
          }
          .value-prop-card p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ValueProps; 