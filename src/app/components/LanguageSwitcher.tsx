"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language === "id" ? "id" : "en";
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const setLang = (lng: string) => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'inline-flex', borderRadius: 16, background: '#EAF1FB', padding: 4 }}>
      <button
        style={{
          padding: '6px 18px',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 14,
          background: current === "id" ? '#232B55' : 'transparent',
          color: current === "id" ? '#fff' : '#232B55',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onClick={() => setLang("id")}
        aria-pressed={current === "id"}
      >
        ID
      </button>
      <span style={{ padding: '0 8px', color: '#888' }}>|</span>
      <button
        style={{
          padding: '6px 18px',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 14,
          background: current === "en" ? '#232B55' : 'transparent',
          color: current === "en" ? '#fff' : '#232B55',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onClick={() => setLang("en")}
        aria-pressed={current === "en"}
      >
        EN
      </button>
    </div>
  );
} 