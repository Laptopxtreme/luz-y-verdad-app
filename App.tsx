
import React, { useState } from 'react';
import { AppView } from './types';
import Chat from './components/Chat';
import VerseFinder from './components/VerseFinder';
import PrayerGenerator from './components/PrayerGenerator';
import { SparklesIcon, BibleIcon, PrayingHandsIcon, SearchIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.Chat);

  const renderView = () => {
    switch (activeView) {
      case AppView.VerseFinder:
        return <VerseFinder />;
      case AppView.Prayer:
        return <PrayerGenerator />;
      case AppView.Chat:
      default:
        return <Chat />;
    }
  };

  const NavButton = ({ view, label, icon }: { view: AppView; label: string; icon: React.ReactNode }) => (
    <button
      onClick={() => setActiveView(view)}
      className={`flex-1 flex flex-col items-center justify-center p-3 text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500
        ${activeView === view
          ? 'bg-sky-100 text-sky-700'
          : 'text-gray-500 hover:bg-sky-50 hover:text-sky-600'
        }`}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col h-screen bg-slate-100 font-sans antialiased">
      <header className="bg-white shadow-md z-10 sticky top-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center">
          <SparklesIcon className="w-8 h-8 text-yellow-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Luz y Verdad
          </h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
          {renderView()}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 sticky bottom-0">
        <nav className="max-w-5xl mx-auto flex">
          <NavButton view={AppView.Chat} label="Chat Espiritual" icon={<BibleIcon className="w-6 h-6" />} />
          <NavButton view={AppView.VerseFinder} label="Buscar Versículo" icon={<SearchIcon className="w-6 h-6" />} />
          <NavButton view={AppView.Prayer} label="Generar Oración" icon={<PrayingHandsIcon className="w-6 h-6" />} />
        </nav>
      </footer>
    </div>
  );
};

export default App;