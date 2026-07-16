"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Language, TranslationKey } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "nl") {
      setLanguageState(stored);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }

  function t(key: TranslationKey) {
    return translations[language][key];
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
