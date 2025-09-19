import React from 'react';
import type { Language } from '../types';
import { translations } from '../constants';
import { Header } from './Header';
import { DashboardCard } from './DashboardCard';
import { BellIcon, ShieldIcon, TerminalIcon, WalletIcon } from './icons';

interface DashboardProps {
  username: string;
  language: Language;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ username, language, onLogout }) => {
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header onLogout={onLogout} language={language} />
      
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">{t.welcome},</h1>
          <p className="text-gray-600 mb-6 truncate">{username}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard title={t.terminals} icon={<TerminalIcon className="h-8 w-8 text-blue-500" />}>
              <p className="text-3xl font-bold">{t.terminalsOnlineValue}</p>
              <p className="text-sm text-gray-500">{t.terminalsDescriptionFormat.replace('{total}', t.terminalsTotalValue)}</p>
            </DashboardCard>

            <DashboardCard title={t.monitoring} icon={<ShieldIcon className="h-8 w-8 text-green-500" />}>
              <p className="text-xl font-semibold text-green-600">{t.monitoringStatus}</p>
            </DashboardCard>
            
            <DashboardCard title={t.finances} icon={<WalletIcon className="h-8 w-8 text-indigo-500" />}>
               <p className="text-2xl font-bold">
                 {language === 'en' ? t.balanceCurrency : ''}
                 {t.balanceValue}
                 {language === 'ru' ? ` ${t.balanceCurrency}` : ''}
                </p>
            </DashboardCard>

            <DashboardCard title={t.events} icon={<BellIcon className="h-8 w-8 text-amber-500" />}>
                <p className="text-lg font-medium text-gray-600">{t.eventsStatus}</p>
            </DashboardCard>
          </div>
        </div>
      </main>
    </div>
  );
};
