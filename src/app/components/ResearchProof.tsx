import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    icon: '📉',
    key: 'decliningQuality',
    color: '#EAF1FB',
  },
  {
    icon: '👩‍🏫',
    key: 'teacherShortage',
    color: '#E6F7F7',
  },
  {
    icon: '🌏',
    key: 'globalGap',
    color: '#FFF6B7',
  },
  {
    icon: '💸',
    key: 'privateTrap',
    color: '#FDE6F2',
  },
  {
    icon: '💡',
    key: 'needInnovation',
    color: '#E6EFFF',
  },
];

const citations = [
  'https://rise.smeru.or.id/en/blog/competence-indonesian-primary-school-teachers-substandard-and-government%E2%80%99s-measures-improve-it',
  'https://www.kompas.com/edu/read/2023/12/08/115722171/alasan-skor-pisa-2022-indonesia-turun-tapi-peringkat-naik',
  'https://www.kompasiana.com/muhammadihwansafrudin4026/670f089bc925c45328526e12/factors-in-the-declining-quality-of-education-in-indonesia',
  'https://www.ei-ie.org/en/item/28551:building-stronger-public-education-systems-in-southeast-asia',
  'https://www.statista.com/statistics/1459902/indonesia-pupil-teacher-ratio-by-education-level/',
  'https://en.antaranews.com/news/340150/waiting-for-education-quality-improvement-in-the-country',
  'https://www.oecd.org/en/publications/extending-broadband-connectivity-in-southeast-asia_b8920f6d-en.html',
];

const ResearchProof: React.FC = () => {
  const { t } = useTranslation();
  const [showSources, setShowSources] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing or a placeholder on the server/first client render
    return null; // Or a loading spinner, or a version without translated text
  }

  return (
    <section className="research-proof" style={{ background: '#EAF1FB', padding: '3.5rem 0' }}>
      <div className="container research-proof-container" style={{ maxWidth: 900, margin: '0 auto', color: '#232B55', fontFamily: 'Fredoka, Nunito, sans-serif', position: 'relative' }}>
        <h2 style={{ fontWeight: 900, fontSize: '2.1rem', marginBottom: '2.2rem', textAlign: 'center', letterSpacing: '-0.5px' }}>{t('researchProof.title', 'Why Sokola?')}</h2>
        <div className="timeline-wrapper" style={{ position: 'relative', margin: '0 auto', maxWidth: 600, padding: '0 1rem' }}>
          {/* Vertical line */}
          <div className="timeline-line" style={{ position: 'absolute', left: 38, top: 0, bottom: 0, width: 4, background: 'linear-gradient(to bottom, #4F8CFF 0%, #EAF1FB 100%)', borderRadius: 2, zIndex: 0 }} />
          <div className="timeline-steps-column" style={{ display: 'flex', flexDirection: 'column', gap: 44, position: 'relative', zIndex: 1 }}>
            {steps.map((step, idx) => (
              <div key={step.key} className="timeline-step" style={{ display: 'flex', alignItems: 'flex-start', gap: 24, position: 'relative' }}>
                {/* Icon */}
                <div className="timeline-icon-container" style={{ width: 56, height: 56, borderRadius: '50%', background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, boxShadow: '0 2px 8px rgba(35,43,85,0.08)', position: 'relative', zIndex: 2, flexShrink: 0 }}>
                  {step.icon}
                </div>
                {/* Text */}
                <div className="timeline-text-content" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: '1.13rem', fontFamily: 'Fredoka, Nunito, sans-serif', marginBottom: 4, color: '#232B55' }}>{t(`researchProof.${step.key}.title`)}</div>
                  <div style={{ color: '#232B55', fontSize: 15, fontWeight: 500, opacity: 0.92, lineHeight: 1.5 }}>{t(`researchProof.${step.key}.desc`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button
            onClick={() => setShowSources((s) => !s)}
            className="sources-button"
            style={{
              background: '#fff',
              color: '#232B55',
              border: 'none',
              borderRadius: 12,
              padding: '0.5rem 1.2rem',
              fontWeight: 700,
              fontSize: 15,
              boxShadow: '0 2px 8px rgba(35,43,85,0.08)',
              cursor: 'pointer',
              marginBottom: showSources ? 16 : 0,
              transition: 'background 0.18s',
            }}
          >
            {showSources ? t('researchProof.hideSources', 'Hide Sources') : t('researchProof.showSources', 'See Sources')}
          </button>
          {showSources && (
            <div className="citations-box" style={{ background: '#fff', borderRadius: 14, padding: '1.2rem', marginTop: 18, boxShadow: '0 2px 8px rgba(35,43,85,0.08)', maxWidth: 700, margin: '18px auto 0 auto', textAlign: 'left' }}>
              <strong>{t('researchProof.citations')}</strong>
              <ul style={{ fontSize: 13, marginTop: 8, color: '#555', overflowX: 'auto', maxHeight: 120, paddingLeft: 20 }}>
                {citations.map((url, idx) => (
                  <li key={url} style={{ marginBottom: 2 }}><a href={url} target="_blank" rel="noopener noreferrer">[{idx + 1}] {url}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .research-proof-container h2 {
           /* Default title styles */
        }
        .timeline-line {
          left: 28px !important; /* Default for desktop if icon is 56px */
        }
        .timeline-icon-container {
           /* Default icon styles */
        }
        .timeline-step div[style*="font-size: 1.13rem"] { /* Title */
          /* Default step title styles */
        }
        .timeline-step div[style*="font-size: 15px"] { /* Description */
          /* Default step desc styles */
        }

        @media (max-width: 768px) { /* Tablet and smaller */
          .research-proof-container {
            padding: 0 1rem;
          }
          .research-proof-container h2 {
            font-size: 1.9rem !important;
            margin-bottom: 1.8rem !important;
          }
          .timeline-wrapper {
            padding: 0 0.5rem !important;
          }
          .timeline-line {
            left: 22px !important; /* Icon width 48px / 2 + adjust */
          }
          .timeline-steps-column {
            gap: 36px !important;
          }
          .timeline-step {
            gap: 18px !important;
          }
          .timeline-icon-container {
            width: 48px !important;
            height: 48px !important;
            font-size: 28px !important;
          }
          .timeline-step div[style*="font-size: 1.13rem"] { /* Title */
            font-size: 1.05rem !important;
          }
          .timeline-step div[style*="font-size: 15px"] { /* Description */
            font-size: 14px !important;
            line-height: 1.45 !important;
          }
          .sources-button {
            font-size: 14px !important;
            padding: '0.4rem 1rem' !important;
          }
          .citations-box {
            padding: '1rem' !important;
          }
          .citations-box ul {
            font-size: 12px !important;
          }
        }

        @media (max-width: 480px) { /* Mobile specific */
           .research-proof-container h2 {
            font-size: 1.7rem !important;
          }
          .timeline-line {
            left: 18px !important; /* Icon width 40px / 2 + adjust */
          }
          .timeline-icon-container {
            width: 40px !important;
            height: 40px !important;
            font-size: 24px !important;
          }
           .timeline-step div[style*="font-size: 1.13rem"] { /* Title */
            font-size: 1rem !important;
          }
          .timeline-step div[style*="font-size: 15px"] { /* Description */
            font-size: 13.5px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ResearchProof; 