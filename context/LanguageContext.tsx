"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  translations,
  phraseDictionary,
  LanguageCode,
  TranslationDictionary,
  translatePhrase,
} from "@/data/translations/index";

export interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (keyPath: string, fallback?: string) => string;
  tPhrase: (phrase: string) => string;
  tSpec: (specLabel: string) => string;
  dict: TranslationDictionary;
  isRTL: boolean;
}

const STORAGE_KEY = "app_language";
const COOKIE_NAME = "preferred_language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") return "en";

  try {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && translations[saved]) {
      return saved;
    }

    const cookieMatch = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`));
    if (cookieMatch) {
      const val = cookieMatch.split("=")[1] as LanguageCode;
      if (translations[val]) return val;
    }
  } catch {
    // ignore
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  // Sync saved preference on initial hydration
  useEffect(() => {
    const initial = getInitialLanguage();
    if (initial !== language) {
      setLanguageState(initial);
    }
  }, []);

  const setLanguage = useCallback((newLang: LanguageCode) => {
    if (!translations[newLang]) return;

    setLanguageState(newLang);

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
        document.cookie = `${COOKIE_NAME}=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
        document.documentElement.lang = newLang;
        document.documentElement.dir = "ltr";
        // Dispatch custom event for any non-React listeners
        window.dispatchEvent(
          new CustomEvent("app:languageChanged", { detail: newLang }),
        );
      } catch {
        // ignore
      }
    }
  }, []);

  /**
   * Look up nested keypath like 'nav.home', 'buttons.requestQuote',
   * or fall back to English if missing, then fallback argument.
   */
  const t = useCallback(
    (keyPath: string, fallback?: string): string => {
      if (!keyPath) return "";

      const keys = keyPath.split(".");
      const currentDict = translations[language] || translations.en;
      const fallbackDict = translations.en;

      const getNested = (obj: any): string | undefined => {
        let curr = obj;
        for (const k of keys) {
          if (curr && typeof curr === "object" && k in curr) {
            curr = curr[k];
          } else {
            return undefined;
          }
        }
        return typeof curr === "string" ? curr : undefined;
      };

      const value = getNested(currentDict);
      if (value !== undefined) return value;

      const fallbackValue = getNested(fallbackDict);
      if (fallbackValue !== undefined) return fallbackValue;

      // If keyPath itself is an exact phrase in phraseDictionary, translate it
      if (phraseDictionary[keyPath]) {
        return translatePhrase(keyPath, language);
      }

      return fallback ?? keyPath;
    },
    [language],
  );

  /**
   * Translate exact text/phrases (e.g. "Dry Fruits", "Request a Quote", etc.)
   */
  const tPhrase = useCallback(
    (phrase: string): string => {
      return translatePhrase(phrase, language);
    },
    [language],
  );

  /**
   * Translate specification label like "Variety", "Color", "Taste", etc.
   */
  const tSpec = useCallback(
    (specLabel: string): string => {
      const key = specLabel.toLowerCase().replace(/\s+/g, "");
      const dict = translations[language]?.specs || translations.en.specs;
      if (key in dict) {
        return (dict as any)[key];
      }
      return translatePhrase(specLabel, language);
    },
    [language],
  );

  const dict = translations[language] || translations.en;
  const isRTL = language === "ur";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        tPhrase,
        tSpec,
        dict,
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback safe value for components rendered outside provider
    return {
      language: "en",
      setLanguage: () => {},
      t: (keyPath: string, fallback?: string) => fallback ?? keyPath,
      tPhrase: (phrase: string) => phrase,
      tSpec: (spec: string) => spec,
      dict: translations.en,
      isRTL: false,
    };
  }
  return context;
}
