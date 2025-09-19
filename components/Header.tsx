import React from 'react';
import { VendistaLogo, LogoutIcon } from './icons';
import type { Language } from '../types';
import { translations } from '../constants';

interface HeaderProps {
    onLogout: () => void;
    language: Language;
}

export const Header: React.FC<HeaderProps> = ({ onLogout, language }) => {
    const t = translations[language];
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <VendistaLogo className="h-8 w-auto" />
                    </div>
                    <div>
                        <button
                            onClick={onLogout}
                            className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-200"
                            aria-label={t.logout}
                        >
                            <LogoutIcon className="h-5 w-5" />
                            <span className="hidden sm:inline">{t.logout}</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};