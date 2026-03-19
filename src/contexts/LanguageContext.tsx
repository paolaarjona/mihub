
import React, { createContext, useContext } from 'react';
import { es } from '@/locales/es';

interface LanguageContextType {
  language: 'es';
  setLanguage: (lang: 'es') => void;
  t: typeof es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    language: 'es' as const,
    setLanguage: () => {},
    t: es
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
