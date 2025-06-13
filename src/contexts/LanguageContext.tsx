
import React, { createContext, useContext, useState } from 'react';
import { en } from '@/locales/en';
import { it } from '@/locales/it';
import { es } from '@/locales/es';

type Language = 'en' | 'it' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Cambiado a español por defecto
  
  const translations = { en, it, es };
  
  const value = {
    language,
    setLanguage,
    t: translations[language]
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
