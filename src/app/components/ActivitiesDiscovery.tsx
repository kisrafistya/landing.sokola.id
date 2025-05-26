"use client";
import React from 'react';
import Image from 'next/image';

const activityCards = [
  { src: '/assets/Rectangle 3.png', alt: 'Activity 1' },
  { src: '/assets/Rectangle 4.png', alt: 'Activity 2' },
  { src: '/assets/Rectangle 5.png', alt: 'Activity 3' },
  { src: '/assets/Rectangle 6.png', alt: 'Activity 4' },
];

const ActivitiesDiscovery: React.FC = () => {
  return (
    <section id="activities" className="section activities-discovery-section" style={{ background: '#fff', position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
      <div className="container activities-discovery-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 64, maxWidth: 1200, minHeight: 480, margin: '0 auto' }}>
        {/* Left: Pop-up Activity Cards with Blue Blob */}
        <div className="activities-illustration-column" style={{ flex: 1.2, minWidth: 340, maxWidth: 500, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', height: 420 }}>
          {/* Blue Blob */}
          <svg width={320} height={340} viewBox="0 0 320 340" className="activities-blob" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 0 }}>
            <ellipse cx="100" cy="170" rx="120" ry="150" fill="#4F8CFF" fillOpacity="0.13" />
          </svg>
          {/* Activity Card Pop-ups as vertical list */}
          <div className="activity-cards-list" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 32, width: 220, marginLeft: 32 }}>
            {activityCards.map((card, idx) => (
              <div key={card.src} className="activity-card-item" style={{ width: 220, height: 100, boxShadow: '0 4px 16px rgba(35,43,85,0.10)', borderRadius: 18, overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s', transform: `translateX(${idx % 2 === 0 ? '-16px' : '16px'})` }}>
                <Image src={card.src} alt={card.alt} width={220} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Explanation */}
        <div className="activities-text-column" style={{ flex: 1, minWidth: 320, maxWidth: 520, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
          <h2 style={{ fontFamily: 'Fredoka, Nunito, sans-serif', fontWeight: 900, fontSize: '2.3rem', color: '#232B55', marginBottom: '1.2rem', letterSpacing: '-0.5px' }}>
            Activities Discovery
          </h2>
          <p style={{ color: '#232B55', fontSize: 28, fontWeight: 500, lineHeight: 1.5, margin: 0, marginTop: 40 }}>
            Explore a variety of fun and educational activities for your child. Find, compare, and join activities that match their interests and schedule.
          </p>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 992px) { /* Tablet and smaller */
          .activities-discovery-container {
            flex-direction: column !important;
            gap: 32px !important;
            text-align: center !important;
            padding: 0 1rem;
          }
          .activities-text-column {
            align-items: center !important;
            text-align: center !important;
            max-width: 600px !important;
            min-width: unset !important;
            order: -1;
          }
          .activities-text-column h2 {
            font-size: 2rem !important;
          }
          .activities-text-column p {
            font-size: 1.1rem !important;
            margin-top: 20px !important;
          }
          .activities-illustration-column {
            justify-content: center !important;
            margin-bottom: 0px;
            margin-top: 32px;
            height: auto !important;
            min-width: unset !important;
            max-width: 400px !important;
          }
          .activities-blob {
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 280px !important;
            height: 300px !important;
          }
          .activity-cards-list {
            margin-left: 0 !important;
            gap: 24px !important;
            width: 200px !important;
          }
          .activity-card-item {
            width: 200px !important;
            height: 90px !important;
            transform: translateX(0) !important;
          }
        }
        @media (max-width: 480px) { /* Smaller mobile specific */
          .activities-text-column h2 {
            font-size: 1.8rem !important;
          }
          .activities-text-column p {
            font-size: 1rem !important;
          }
           .activity-cards-list {
            width: 180px !important;
          }
          .activity-card-item {
            width: 180px !important;
            height: 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ActivitiesDiscovery; 