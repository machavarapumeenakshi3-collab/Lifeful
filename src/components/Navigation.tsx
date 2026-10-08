import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PageRoute } from '../types';
import { Search, Heart, ShoppingBag, User, Menu, X, Sparkles, LogOut } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { 
    currentRoute, 
    navigateTo, 
    activeItems, 
    savedProductIds,
    savedSetupIds,
    currentScenario,
    userProfile,
    signOut
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalSavedCount = savedProductIds.length;
  const setupCount = activeItems.length;

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Explore', route: 'explore' },
    { label: 'Life Setups', route: 'setups' },
    { label: 'Visual Board', route: 'board' },
    { label: 'My Setup', route: 'my-setup' },
    { label: 'Saved', route: 'saved' },
    { label: 'About', route: 'about' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleNavClick('home')}
              className="group flex items-baseline gap-1 text-left focus:outline-none"
              aria-label="lifeful home"
            >
              <span className="font-editorial text-3xl font-normal tracking-tight text-[#1E2C22] group-hover:text-[#C85A32] transition-colors">
                lifeful
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32] group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Zone 2: Clean Typography Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-xs uppercase tracking-widest transition-all relative py-1 focus:outline-none ${
                    isActive 
                      ? 'text-[#1E2C22] font-semibold' 
                      : 'text-[#4A5B4F] hover:text-[#1E2C22] font-normal'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1E2C22]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Desktop & Mobile) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Global Search */}
            <button
              onClick={() => handleNavClick('search')}
              aria-label="Search moments, setups, products"
              className={`p-2 rounded-full transition-colors ${
                currentRoute === 'search' 
                  ? 'bg-[#1E2C22] text-[#FAF8F5]' 
                  : 'text-[#1E2C22] hover:bg-[#F4EFEB]'
              }`}
            >
              <Search className="w-4 h-4 stroke-[1.75]" />
            </button>

            {/* Saved Items */}
            <button
              onClick={() => handleNavClick('saved')}
              aria-label="View saved items and setups"
              className={`relative p-2 rounded-full transition-colors ${
                currentRoute === 'saved' 
                  ? 'bg-[#1E2C22] text-[#FAF8F5]' 
                  : 'text-[#1E2C22] hover:bg-[#F4EFEB]'
              }`}
            >
              <Heart className="w-4 h-4 stroke-[1.75]" />
              {totalSavedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C85A32] text-white text-[10px] font-medium flex items-center justify-center tabular-nums">
                  {totalSavedCount}
                </span>
              )}
            </button>

            {/* My Setup Action */}
            <button
              onClick={() => handleNavClick('my-setup')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border text-xs font-medium tracking-wide transition-all ${
                currentRoute === 'my-setup'
                  ? 'bg-[#1E2C22] text-[#FAF8F5] border-[#1E2C22]'
                  : 'bg-white text-[#1E2C22] border-[#E8E2D8] hover:border-[#1E2C22] hover:bg-[#F4EFEB]'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[1.75]" />
              <span className="hidden sm:inline">My Setup</span>
              <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-[#E8E2D8] text-[#1E2C22] font-semibold tabular-nums">
                {setupCount}
              </span>
            </button>

            {/* Profile */}
            <button
              onClick={() => handleNavClick('profile')}
              aria-label={`Profile of ${userProfile.name}`}
              className={`items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-full transition-all hidden sm:flex border ${
                currentRoute === 'profile'
                  ? 'bg-[#1E2C22] text-[#FAF8F5] border-[#1E2C22] shadow-sm'
                  : 'bg-white text-[#1E2C22] border-[#E8E2D8] hover:border-[#1E2C22] hover:bg-[#F4EFEB]'
              }`}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold ${
                currentRoute === 'profile' ? 'bg-[#FAF8F5] text-[#1E2C22]' : 'bg-[#1E2C22] text-[#FAF8F5]'
              }`}>
                {userProfile.name ? userProfile.name.trim().charAt(0).toUpperCase() : <User className="w-3 h-3" />}
              </div>
              <span className="text-xs font-medium max-w-[85px] truncate">
                {userProfile.name ? userProfile.name.trim().split(' ')[0] : 'Profile'}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1E2C22] hover:bg-[#F4EFEB] rounded-full focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#FAF8F5]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#4A5B4F] mb-4">
              Explore lifeful
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`text-left text-2xl font-editorial tracking-tight py-1 flex items-center justify-between ${
                    currentRoute === link.route ? 'text-[#C85A32]' : 'text-[#1E2C22]'
                  }`}
                >
                  <span>{link.label}</span>
                  {currentRoute === link.route && <span className="w-2 h-2 rounded-full bg-[#C85A32]" />}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E8E2D8] space-y-3">
              <button
                onClick={() => handleNavClick('profile')}
                className="w-full flex items-center justify-between text-sm text-[#1E2C22] p-2 rounded-xl hover:bg-[#F4EFEB] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1E2C22] text-white flex items-center justify-center text-xs font-semibold">
                    {userProfile.name ? userProfile.name.trim().charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-xs text-[#1E2C22]">{userProfile.name}</div>
                    <div className="text-[11px] text-[#4A5B4F] font-mono">{userProfile.email}</div>
                  </div>
                </div>
                <span className="text-xs text-[#C85A32] font-semibold">Profile →</span>
              </button>

              <button
                onClick={() => {
                  signOut();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 text-xs font-semibold text-[#C85A32] hover:text-[#B54D27] p-2 rounded-xl transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out of Lifeful</span>
              </button>
            </div>
          </div>

          <div className="bg-[#F4EFEB] p-4 rounded-xl border border-[#E8E2D8]">
            <div className="text-xs text-[#4A5B4F] mb-1">Active Moment</div>
            <div className="font-editorial text-lg text-[#1E2C22]">{currentScenario.title}</div>
            <div className="text-xs text-[#4A5B4F] mt-1">{activeItems.length} curated pieces ready</div>
          </div>
        </div>
      )}
    </>
  );
};
