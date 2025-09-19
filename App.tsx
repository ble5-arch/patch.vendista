import React, { useState } from 'react';
import { LoginCard } from './components/LoginCard';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Dashboard } from './components/Dashboard';
import type { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ru');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (loggedInUsername: string) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div 
      className={`relative min-h-screen w-full transition-all duration-500 ${!isLoggedIn ? 'bg-cover bg-center' : 'bg-gray-100'}`}
      style={{ backgroundImage: !isLoggedIn ? "url('https://picsum.photos/id/237/1920/1080?blur=5')" : 'none' }}
    >
      {!isLoggedIn ? (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <main className="relative z-10 w-full flex items-center justify-center p-4 min-h-screen">
            <LoginCard language={language} onLoginSuccess={handleLoginSuccess} />
          </main>
        </>
      ) : (
        <Dashboard username={username} language={language} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
