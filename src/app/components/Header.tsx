"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsClient(true);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isClient) {
    return null;
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header style={{
      width: '100%',
      background: 'var(--navy)',
      boxShadow: '0 2px 16px rgba(35,43,85,0.04)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0 1rem',
    }}>
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72,
        maxWidth: 'var(--container-width)',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <div className="sokola-blue" style={{ fontWeight: 900, fontSize: 28, letterSpacing: 2, fontFamily: 'Fredoka, Geist, sans-serif' }}>
          SOKOLA
        </div>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center', margin: 0 }}>
            <li><a href="#about" style={{ fontWeight: 600, color: 'var(--white)', fontSize: 16 }}>{t('header.nav.about', 'About')}</a></li>
            <li><a href="#features" style={{ fontWeight: 600, color: 'var(--white)', fontSize: 16 }}>{t('header.nav.features', 'Features')}</a></li>
            <li><a href="#faq" style={{ fontWeight: 600, color: 'var(--white)', fontSize: 16 }}>{t('header.nav.faq', 'FAQ')}</a></li>
          </ul>
        )}

        {/* Right side: Language Switcher, CTA, Burger Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16 }}>
          {/* Language Switcher and CTA for Desktop */}, 
          {!isMobile && (
            <>
              <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
                <LanguageSwitcher />
              </div>
              <a href="https://app-sokola-id.vercel.app" style={{
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: 12,
                padding: '0.45rem 1.1rem',
                fontWeight: 700,
                fontSize: 14,
                boxShadow: '0 2px 8px rgba(249,79,156,0.10)',
                letterSpacing: 0.2,
                transition: 'background 0.2s',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                height: 40,
              }}>{t('header.cta.createCurriculum', 'Create Curriculum')}</a>
            </>
          )}

          {/* Burger Menu for Mobile */}
          {isMobile && (
            <button onClick={toggleMobileMenu} style={{ background: 'none', border: 'none', color: 'var(--white)', fontSize: 28, cursor: 'pointer', padding: '0.5rem' }}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobile && isMobileMenuOpen && (
        <div style={{ 
          background: 'var(--navy)', 
          padding: '1rem', 
          position: 'absolute', 
          top: 72, 
          left: 0, 
          right: 0, 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
            <li style={{ marginBottom: '1rem' }}><a href="#about" style={{ fontWeight: 600, color: 'var(--white)', fontSize: 18, textDecoration: 'none' }} onClick={toggleMobileMenu}>{t('header.nav.about', 'About')}</a></li>
            <li style={{ marginBottom: '1rem' }}><a href="#features" style={{ fontWeight: 600, color: 'var(--white)', fontSize: 18, textDecoration: 'none' }} onClick={toggleMobileMenu}>{t('header.nav.features', 'Features')}</a></li>
            <li style={{ marginBottom: '1rem' }}><a href="#faq" style={{ fontWeight: 600, color: 'var(--white)', fontSize: 18, textDecoration: 'none' }} onClick={toggleMobileMenu}>{t('header.nav.faq', 'FAQ')}</a></li>
            <li style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40 }}>
                <LanguageSwitcher />
              </div>
            </li>
            <li>
              <a href="https://app-sokola-id.vercel.app" style={{
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: 12,
                padding: '0.6rem 1.5rem',
                fontWeight: 700,
                fontSize: 16,
                boxShadow: '0 2px 8px rgba(249,79,156,0.10)',
                letterSpacing: 0.2,
                transition: 'background 0.2s',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                height: 44,
                width: '100%',
                justifyContent: 'center'
              }} onClick={toggleMobileMenu}>{t('header.cta.createCurriculum', 'Create Curriculum')}</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
} 