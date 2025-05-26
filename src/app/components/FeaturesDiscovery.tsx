"use client";
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const teacherCards = [
  { src: '/assets/teacher-1.png', alt: 'Teacher 1', style: { left: 'calc(50% - 210px)', top: 'calc(50% - 120px)' } },
  { src: '/assets/teacher-2.png', alt: 'Teacher 2', style: { left: 'calc(50% + 70px)', top: 'calc(50% + 60px)' } },
  { src: '/assets/teacher-3.png', alt: 'Teacher 3', style: { left: 'calc(60% - 280px)', top: 'calc(50% + 100px)' } },
  { src: '/assets/teacher-4.png', alt: 'Teacher 4', style: { left: 'calc(30% + 70px)', top: 'calc(50% - 60px)' } },
];

const FeaturesDiscovery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="section features-discovery-section" style={{ background: '#fff', position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
      <div className="container features-discovery-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 64, maxWidth: 1200, minHeight: 480 }}>
        {/* Left: Explanation */}
        <div className="features-text-column" style={{ flex: 1, minWidth: 280, maxWidth: 420, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
          <h2 style={{ fontFamily: 'Fredoka, Nunito, sans-serif', fontWeight: 900, fontSize: '2.3rem', color: '#232B55', marginBottom: '1.2rem', letterSpacing: '-0.5px' }}>
            Teacher Discovery
          </h2>
          <p style={{ color: '#232B55', fontSize: 22, fontWeight: 500, lineHeight: 1.6, margin: 0, marginTop: 40 }}>
            Find the perfect local teacher for your child. Browse real profiles, see expertise, and connect instantly.
          </p>
        </div>
        {/* Center: Phone with blue blob and pop-up cards */}
        <div className="features-illustration-column" style={{ flex: 1.2, minWidth: 340, maxWidth: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: 420 }}>
          {/* Blue Blob */}
          <svg width={260} height={260} viewBox="0 0 260 260" className="features-blob" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}>
            <ellipse cx="130" cy="130" rx="110" ry="90" fill="#4F8CFF" fillOpacity="0.13" />
          </svg>
          {/* Teacher Card Pop-ups */}
          {teacherCards.map((card, idx) => (
            <div key={card.src} className="teacher-card-item" style={{ position: 'absolute', zIndex: 2, ...card.style, width: 170, height: 80, boxShadow: '0 4px 16px rgba(35,43,85,0.10)', borderRadius: 16, overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src={card.src} alt={card.alt} width={170} height={80} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 992px) { /* Tablet and smaller */
          .features-discovery-container {
            flex-direction: column !important; /* Ensure it's column, text will be first due to order */
            gap: 32px !important; /* Reduced gap slightly */
            text-align: center !important;
            padding: 0 1rem;
          }
          .features-text-column {
            align-items: center !important;
            text-align: center !important;
            max-width: 600px !important;
            min-width: unset !important;
            order: -1; /* Text column comes first */
          }
          .features-text-column h2 {
            font-size: 2rem !important;
          }
          .features-text-column p {
            font-size: 1.1rem !important; /* Adjusted from 22px */
            margin-top: 20px !important;
          }
          .features-illustration-column {
            justify-content: center !important;
            height: auto !important; /* Adjust height for content */
            min-height: 300px; /* Ensure blob and cards have space */
            margin-bottom: 0px; 
            margin-top: 32px; /* Add space above illustration, as it's now second */
            min-width: unset !important;
            max-width: 400px !important;
            width: 100%;
          }
          .features-blob {
            width: 220px !important;
            height: 220px !important;
          }
          .teacher-card-item {
            /* Adjust card positions for a more compact mobile layout if needed */
            /* Example: transform them to be closer or stack differently */
            /* For now, we rely on their absolute % based positioning to adapt */
            /* but might need more specific overrides if they overlap poorly */
            width: 140px !important;
            height: 70px !important;
          }
          /* Example of adjusting specific card positions for mobile if needed */
          .teacher-card-item:nth-child(1) { /* Teacher 1 */
             left: calc(50% - 150px) !important; top: calc(50% - 100px) !important;
          }
          .teacher-card-item:nth-child(2) { /* Teacher 2 */
             left: calc(50% + 50px) !important; top: calc(50% + 40px) !important;
          }
           .teacher-card-item:nth-child(3) { /* Teacher 3 */
             left: calc(50% - 160px) !important; top: calc(50% + 70px) !important;
          }
           .teacher-card-item:nth-child(4) { /* Teacher 4 */
            left: calc(50% + 20px) !important; top: calc(50% - 70px) !important;
          }
        }
        @media (max-width: 480px) { /* Smaller mobile specific */
          .features-text-column h2 {
            font-size: 1.8rem !important;
          }
          .features-text-column p {
            font-size: 1rem !important;
          }
          .teacher-card-item {
            width: 120px !important;
            height: 60px !important;
          }
          .features-illustration-column {
             min-height: 250px; 
          }
           .teacher-card-item:nth-child(1) { /* Teacher 1 */
             left: calc(50% - 120px) !important; top: calc(50% - 90px) !important;
          }
          .teacher-card-item:nth-child(2) { /* Teacher 2 */
             left: calc(50% + 30px) !important; top: calc(50% + 30px) !important;
          }
           .teacher-card-item:nth-child(3) { /* Teacher 3 */
             left: calc(50% - 130px) !important; top: calc(50% + 60px) !important;
          }
           .teacher-card-item:nth-child(4) { /* Teacher 4 */
            left: calc(50% + 10px) !important; top: calc(50% - 60px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesDiscovery; 