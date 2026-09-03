import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "id";

const LanguageContext = createContext(null);

const readStoredLanguage = () => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "id" || stored === "en" ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(readStoredLanguage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage unavailable (private mode, disabled, etc.) — the
      // language choice just won't persist across reloads.
    }
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Resolves a bilingual field (`{ id, en }`, or `{ id: fn, en: fn }` for
// strings that need interpolation — e.g. word order differs between the two
// languages) for the current language. Extra args pass through to the fn.
export const useTranslate = () => {
  const { language } = useLanguage();
  return (field, ...args) => {
    if (field == null) return "";
    const value = field[language];
    return typeof value === "function" ? value(...args) : value;
  };
};
