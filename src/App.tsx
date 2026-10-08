/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { GenerationLoader } from './components/GenerationLoader';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SwapModal } from './components/SwapModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { LifeSetupsPage } from './pages/LifeSetupsPage';
import { LifeSetupPage } from './pages/LifeSetupPage';
import { VisualBoardPage } from './pages/VisualBoardPage';
import { MySetupPage } from './pages/MySetupPage';
import { SavedPage } from './pages/SavedPage';
import { SearchPage } from './pages/SearchPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';

// Auth Components
import { SignInPage } from './components/auth/SignInPage';
import { SignUpPage } from './components/auth/SignUpPage';

const AppContent: React.FC = () => {
  const { currentRoute, isAuthenticated, authView, setAuthView } = useApp();

  // Authentication gate: When not signed in, show Sign In or Sign Up screen
  if (!isAuthenticated) {
    if (authView === 'signup') {
      return <SignUpPage onSwitchToSignIn={() => setAuthView('signin')} />;
    }
    return <SignInPage onSwitchToSignUp={() => setAuthView('signup')} />;
  }

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return <ExplorePage />;
      case 'setups':
        return <LifeSetupsPage />;
      case 'setup':
        return <LifeSetupPage />;
      case 'board':
        return <VisualBoardPage />;
      case 'my-setup':
        return <MySetupPage />;
      case 'saved':
        return <SavedPage />;
      case 'search':
        return <SearchPage />;
      case 'profile':
        return <ProfilePage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2C22] flex flex-col font-sans selection:bg-[#E2D9CC] selection:text-[#16241A]">
      {/* Persistent Navigation */}
      <Navigation />

      {/* Main Page Route */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Modals & Loaders */}
      <GenerationLoader />
      <ProductDetailModal />
      <SwapModal />

      {/* Persistent Editorial Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

