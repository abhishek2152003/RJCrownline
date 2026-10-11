"use client";

import { useState, useEffect, useRef } from "react";
import {
  SUPPORTED_LANGUAGES,
  getCurrentLanguageCode,
  changeLanguage,
  Language,
} from "./languages";

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
  onSelectLanguage?: () => void;
}

export default function LanguageSelector({
  variant = "desktop",
  onSelectLanguage,
}: LanguageSelectorProps) {
  const [currentCode, setCurrentCode] = useState<string>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync with cookie on mount and listen to changes
  useEffect(() => {
    setCurrentCode(getCurrentLanguageCode());

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setCurrentCode(customEvent.detail);
      } else {
        setCurrentCode(getCurrentLanguageCode());
      }
    };

    window.addEventListener("app:languageChanged", handleLanguageChange);
    return () => {
      window.removeEventListener("app:languageChanged", handleLanguageChange);
    };
  }, []);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const activeLanguage =
    SUPPORTED_LANGUAGES.find((lang) => lang.code === currentCode) ||
    SUPPORTED_LANGUAGES[0];

  const handleSelect = (lang: Language) => {
    setIsOpen(false);
    setIsTranslating(true);
    setCurrentCode(lang.code);
    changeLanguage(lang.code);
    if (onSelectLanguage) {
      onSelectLanguage();
    }
    setTimeout(() => {
      setIsTranslating(false);
    }, 400);
  };

  // Mobile layout
  if (variant === "mobile") {
    return (
      <div className="notranslate w-full py-3 border-t border-ocean-blue/40 mt-2">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-spice-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Language / भाषा
          </span>
          <span className="text-xs text-spice-gold font-medium">
            {activeLanguage.flag} {activeLanguage.nativeName}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentCode;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                  isSelected
                    ? "bg-spice-gold text-white font-semibold shadow-md"
                    : "bg-ocean-blue/30 text-white hover:bg-ocean-blue hover:text-spice-gold"
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <span>{lang.flag}</span>
                  <span className="truncate">{lang.nativeName}</span>
                </span>
                {isSelected && (
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop simple dropdown
  return (
    <div className="notranslate relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-spice-gold transition-all duration-200 text-[14px] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-spice-gold/50 cursor-pointer"
        title="Change Language"
      >
        <span className="text-base leading-none" aria-hidden="true">
          {activeLanguage.flag}
        </span>
        <span className="font-semibold text-white tracking-wide">
          {activeLanguage.nativeName}
        </span>
        {isTranslating ? (
          <span className="w-3.5 h-3.5 border-2 border-spice-gold border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg
            className={`w-3.5 h-3.5 text-spice-gold transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {/* Simple Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-fadeIn py-1">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentCode;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-soft-blue text-industrial-blue font-bold"
                    : "text-charcoal hover:bg-soft-blue/60 hover:text-industrial-blue"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-base leading-none">{lang.flag}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-gray-900 leading-tight">
                      {lang.nativeName}
                    </span>
                    <span className="text-[11px] text-gray-500 leading-tight">
                      {lang.name}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <svg
                    className="w-4 h-4 text-spice-gold shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
