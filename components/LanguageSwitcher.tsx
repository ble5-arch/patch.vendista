
import React from 'react';
import type { Language } from '../types';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  const inactiveClass = "text-gray-400 hover:text-white transition-colors duration-200";
  const activeClass = "text-white font-bold";

  return (
    <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black/20 p-1 rounded-full">
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1 rounded-full text-sm ${language === 'ru' ? activeClass : inactiveClass}`}
      >
        RU
      </button>
      <span className="text-gray-500">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm ${language === 'en' ? activeClass : inactiveClass}`}
      >
        EN
      </button>
    </div>
  );
};
