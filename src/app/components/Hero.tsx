"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null or a placeholder until the client has mounted
    return null; 
  }

  return (
    <section
      className="section hero-section"
      style={{
        paddingTop: '2rem',
        paddingBottom: '0rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 700,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Fredoka, Geist, sans-serif',
        background: 'linear-gradient(180deg, #E6EFFF 0%, #FFFFFF 70%)',
      }}
    >
      {/* Top Content Area (Logo, Headline, Sub-headline) */}
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          gap: '1.2rem',
          maxWidth: 1100,
          textAlign: 'center',
          padding: '0 1rem',
          marginBottom: '0.5rem',
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: '0.5rem' }}>
          <Image
            src="/assets/sokola-logo.png"
            alt="Sokola Logo"
            width={90}
            height={28}
            style={{ display: 'block', margin: '0 auto', width: 'auto' }}
          />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'Fredoka, sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: '#232B55',
            marginBottom: '0.5rem',
            lineHeight: 1.15,
            letterSpacing: '0.01em',
            maxWidth: 900,
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: t('hero.headline') }} />
        </h1>

        {/* Sub-headline */}
        <p
          className="font-heading"
          style={{
            fontSize: '1.2rem',
            color: '#4A5580',
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: 800,
            marginBottom: 0,
          }}
        >
          {t('hero.description')}
        </p>
      </div>

      {/* SVG Wave - exactly behind the app-image */}
      <div
        className="hero-wave-container"
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: 'auto',
          zIndex: 1,
          lineHeight: 0,
          pointerEvents: 'none',
          top: 'calc(50vh - 120px)',
        }}>
        <svg 
          viewBox="0 0 1440 320" 
          xmlns="http://www.w3.org/2000/svg" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#e0eaff', stopOpacity: 1 }} /> 
              <stop offset="100%" style={{ stopColor: '#f7faff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,202.7C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* App Screenshots Display */}
      <div
        className="app-screenshots-container"
        style={{
          position: 'relative',
          width: '100vw',
          maxWidth: '100vw',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 0,
          zIndex: 2, // phones above the wave
          marginTop: '-3.5rem',
        }}
      >
        <Image 
          src="/assets/Shot.png"
          alt="Sokola App Showcase"
          width={4000}
          height={2500}
          style={{ 
            maxWidth: '100vw',
            width: '100vw',
            height: 'auto',
            objectFit: 'contain',
            margin: 0,
            padding: 0,
            display: 'block',
          }}
          priority 
        />
      </div>

      {/* CTA Button */}
      <div className="hero-cta-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '0' }}>
        <a href="#" className="hero-cta-btn" style={{
          background: 'var(--accent, #4F8CFF)',
          color: '#fff',
          borderRadius: 14,
          padding: '0.85rem 2.2rem',
          fontWeight: 700,
          fontSize: 18,
          boxShadow: '0 2px 8px rgba(79,140,255,0.10)',
          letterSpacing: 0.2,
          transition: 'background 0.2s',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          display: 'inline-block',
        }}>{t('hero.cta')}</a>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(180deg, #E6EFFF 0%, #FFFFFF 70%); 
          min-height: auto; /* Adjust min-height for mobile */
          padding-bottom: 2rem; /* Add some bottom padding on mobile */
        }
        .hero-wave-container {
           /* Default style already in inline style */
        }
        .app-screenshots-container {
           /* Default style already in inline style */
        }
        .hero-cta-container {
          margin-top: 1.5rem;
          margin-bottom: 0;
        }
        @media (max-width: 1200px) {
          .app-screenshots-container img {
             max-width: 100vw !important;
          }
          .hero-section .container h1 {
            font-size: 2.2rem !important;
          }
          .hero-section .container p {
            font-size: 1.05rem !important;
          }
        }
        @media (max-width: 900px) {
          .hero-section .container h1 {
            font-size: 1.8rem !important;
            color: var(--navy) !important;
          }
          .hero-section .container p {
            font-size: 1rem !important;
            color: #4A5580 !important;
          }
          .app-screenshots-container img {
             max-width: 100vw !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            padding-top: 1.5rem !important;
            min-height: auto;
          }
          .hero-wave-container {
            top: calc(50vh - 80px) !important;
          }
          .hero-section .container {
            gap: 0.8rem !important;
            margin-bottom: 0rem !important;
          }
          .hero-section .container h1 {
            font-size: 1.6rem !important;
            color: #232B55 !important;
          }
          .hero-section .container p {
            font-size: 0.9rem !important;
            color: #4A5580 !important;
          }
          .app-screenshots-container {
            margin-top: -2rem !important;
            max-width: 100vw;
          }
          .app-screenshots-container img {
            max-width: 100vw !important;
          }
          .hero-cta-container {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .hero-section .container h1 {
            font-size: 1.4rem !important;
            color: #232B55 !important;
          }
          .hero-section .container p {
            font-size: 0.85rem !important;
            color: #4A5580 !important;
          }
          .app-screenshots-container {
            margin-top: -1rem !important; 
          }
          .hero-wave-container {
            top: calc(50vh - 60px) !important;
          }
          .hero-cta-container {
            margin-top: 0.2rem !important;
            margin-bottom: 0.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 