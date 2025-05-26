import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section" style={{ background: '#232B55', color: '#fff', padding: '2.5rem 0 1.5rem 0', borderTopLeftRadius: 32, borderTopRightRadius: 32, marginTop: 48 }}>
      <div className="container footer-container" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {/* Logo Placeholder */}
        <div className="footer-logo" style={{ marginBottom: 16 }}>
          <span style={{ fontWeight: 900, fontSize: 28, letterSpacing: 2, color: '#F94F9C' }}>SOKOLA</span>
        </div>
        {/* Contact Info */}
        <div className="footer-contact" style={{ marginBottom: 12, fontSize: 15 }}>{t('footer.contact')}</div>
        {/* Social Links */}
        <div className="footer-social-links" style={{ marginBottom: 18 }}>
          <a href="#" style={{ color: '#fff', margin: '0 10px', fontSize: 20, textDecoration: 'none' }} aria-label="Instagram">📸</a>
          <a href="#" style={{ color: '#fff', margin: '0 10px', fontSize: 20, textDecoration: 'none' }} aria-label="Twitter">🐦</a>
          <a href="#" style={{ color: '#fff', margin: '0 10px', fontSize: 20, textDecoration: 'none' }} aria-label="Facebook">📘</a>
        </div>
        {/* Legal Links */}
        <div className="footer-legal-links" style={{ marginBottom: 18, fontSize: 14 }}>
          <a href="#" style={{ color: '#fff', margin: '0 8px', textDecoration: 'underline' }}>{t('footer.privacy')}</a>
          |
          <a href="#" style={{ color: '#fff', margin: '0 8px', textDecoration: 'underline' }}>{t('footer.terms')}</a>
        </div>
        {/* Copyright */}
        <div className="footer-copyright" style={{ fontSize: 13, color: '#EAF1FB' }}>{t('footer.copyright')}</div>
      </div>
      <style jsx>{`
        .footer-section {
          /* Default styles */
        }
        @media (max-width: 768px) { /* Tablet and smaller */
          .footer-section {
            padding: 2rem 1rem 1rem 1rem !important;
            border-top-left-radius: 24px !important;
            border-top-right-radius: 24px !important;
            margin-top: 32px !important;
          }
          .footer-logo span {
            font-size: 24px !important;
          }
          .footer-contact {
            font-size: 14px !important;
            margin-bottom: 16px !important;
          }
          .footer-social-links a {
            font-size: 18px !important;
            margin: 0 8px !important;
          }
           .footer-social-links {
            margin-bottom: 20px !important;
          }
          .footer-legal-links {
            font-size: 13px !important;
             margin-bottom: 20px !important;
          }
          .footer-copyright {
            font-size: 12px !important;
          }
        }
        @media (max-width: 480px) { /* Mobile specific */
           .footer-legal-links {
            display: flex;
            flex-direction: column;
            gap: 8px; /* Add gap between stacked legal links */
          }
          .footer-legal-links span.separator { /* Hide separator if you add one */
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 