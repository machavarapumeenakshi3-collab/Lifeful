import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { LifestyleStyle } from '../types';
import { User, Check, Heart, ShoppingBag, Sparkles, Sliders, LogOut, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { 
    userProfile, 
    updateUserProfile, 
    currentScenario, 
    activeItems, 
    savedProductIds, 
    savedSetupIds, 
    navigateTo,
    signOut
  } = useApp();

  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [city, setCity] = useState(userProfile.city);
  const [preferredStyle, setPreferredStyle] = useState<LifestyleStyle>(userProfile.preferredStyle);
  const [budgetRange, setBudgetRange] = useState(userProfile.defaultBudgetRange);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state if userProfile updates
  useEffect(() => {
    setName(userProfile.name);
    setEmail(userProfile.email);
    setCity(userProfile.city);
    setPreferredStyle(userProfile.preferredStyle);
    setBudgetRange(userProfile.defaultBudgetRange);
  }, [userProfile]);

  // Compute initials for avatar
  const getInitials = (fullName: string) => {
    if (!fullName) return 'U';
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const styleOptions: { id: LifestyleStyle; label: string }[] = [
    { id: 'minimal', label: 'Minimal' },
    { id: 'cozy', label: 'Cozy' },
    { id: 'aesthetic', label: 'Aesthetic' },
    { id: 'practical', label: 'Practical' },
    { id: 'premium', label: 'Premium' },
    { id: 'eco', label: 'Eco-conscious' }
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: name.trim() || userProfile.name,
      email: email.trim() || userProfile.email,
      city,
      preferredStyle,
      defaultBudgetRange: budgetRange
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Editorial Profile Header with Avatar & Sign Out */}
      <div className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
        
        {/* Profile / Avatar Area */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Avatar Area */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1E2C22] text-[#FAF8F5] flex items-center justify-center font-editorial text-2xl sm:text-3xl font-normal tracking-wide shadow-inner flex-shrink-0 border-2 border-[#E8E2D8]">
            {getInitials(userProfile.name)}
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-[#2D6A4F] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E8E2D8]">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Member</span>
              </span>
            </div>
            
            {/* Entered Full Name */}
            <h1 className="font-editorial text-2xl sm:text-4xl text-[#1E2C22] leading-tight">
              {userProfile.name}
            </h1>
            
            {/* Entered Email Address */}
            <p className="text-xs sm:text-sm text-[#4A5B4F] font-mono">
              {userProfile.email}
            </p>
          </div>
        </div>

        {/* Header Sign Out Action */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-4 sm:pt-0 border-[#E8E2D8] gap-3">
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8E2D8] hover:border-[#C85A32] text-xs font-semibold text-[#1E2C22] hover:text-[#C85A32] bg-[#FAF8F5] hover:bg-white transition-all shadow-sm cursor-pointer"
            title="Sign out of your account"
          >
            <LogOut className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Sign Out</span>
          </button>
          <span className="text-[11px] text-[#4A5B4F]">
            Session active
          </span>
        </div>

      </div>

      {/* Snapshot Cards with Wishlist Access */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Wishlist Access Card */}
        <div 
          onClick={() => navigateTo('saved')}
          className="p-5 bg-white rounded-2xl border border-[#E8E2D8] cursor-pointer hover:border-[#C85A32] hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-medium">Your Wishlist</span>
            <Heart className="w-4 h-4 text-[#C85A32] fill-[#C85A32]/10 group-hover:scale-110 transition-transform" />
          </div>
          <div className="font-editorial text-2xl text-[#1E2C22] mt-2">
            {savedProductIds.length} Saved {savedProductIds.length === 1 ? 'Item' : 'Items'}
          </div>
          <div className="text-xs text-[#C85A32] mt-1 flex items-center gap-1 font-medium group-hover:underline">
            <span>View Wishlist</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Active Setup Card */}
        <div 
          onClick={() => navigateTo('my-setup')}
          className="p-5 bg-white rounded-2xl border border-[#E8E2D8] cursor-pointer hover:border-[#1E2C22] hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-medium">Active Life Setup</span>
            <ShoppingBag className="w-4 h-4 text-[#1E2C22] group-hover:scale-110 transition-transform" />
          </div>
          <div className="font-editorial text-2xl text-[#1E2C22] mt-2">
            {currentScenario.title}
          </div>
          <div className="text-xs text-[#4A5B4F] mt-1 flex items-center gap-1 font-medium group-hover:underline">
            <span>{activeItems.length} pieces planned</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Preferred Tone Card */}
        <div className="p-5 bg-white rounded-2xl border border-[#E8E2D8]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-medium">Preferred Tone</span>
            <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
          </div>
          <div className="font-editorial text-2xl text-[#1E2C22] capitalize mt-2">
            {userProfile.preferredStyle}
          </div>
          <div className="text-xs text-[#2D6A4F] mt-1 font-medium">
            Calibrated automatically
          </div>
        </div>

      </div>

      {/* Account Settings & Preferences Form */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-[#E8E2D8] pb-4">
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#1E2C22]">
            Account Settings & Preferences
          </h2>
          <p className="text-xs text-[#4A5B4F] mt-0.5">
            Update your account details and living preferences. Changes apply across all life setups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#1E2C22]">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/40 focus:bg-white focus:outline-none focus:border-[#1E2C22]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#1E2C22]">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your registered email"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/40 focus:bg-white focus:outline-none focus:border-[#1E2C22]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#1E2C22]">Base City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Bengaluru, India"
              className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] text-xs text-[#1E2C22] bg-[#FAF8F5]/40 focus:bg-white focus:outline-none focus:border-[#1E2C22]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#1E2C22]">Default Budget Range</label>
            <div className="flex items-center gap-3 pt-1">
              <input
                type="range"
                min="10000"
                max="45000"
                step="1000"
                value={budgetRange}
                onChange={(e) => setBudgetRange(Number(e.target.value))}
                className="flex-1 accent-[#1E2C22]"
              />
              <span className="text-xs font-mono font-bold text-[#1E2C22] tabular-nums min-w-[70px] text-right">
                ₹{budgetRange.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Preferred Style Selector */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-semibold text-[#1E2C22]">Preferred Design Aesthetic</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {styleOptions.map(st => (
              <button
                key={st.id}
                type="button"
                onClick={() => setPreferredStyle(st.id)}
                className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  preferredStyle === st.id
                    ? 'bg-[#1E2C22] text-white border-[#1E2C22] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#1E2C22] border-[#E8E2D8] hover:border-[#1E2C22]'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-[#1E2C22] hover:bg-[#2D4233] text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm cursor-pointer"
          >
            Save Changes
          </button>

          {savedSuccess && (
            <span className="text-xs text-[#2D6A4F] flex items-center gap-1.5 font-medium animate-in fade-in">
              <Check className="w-4 h-4" />
              <span>Profile updated across Lifeful</span>
            </span>
          )}
        </div>
      </form>

      {/* Account Session / Sign Out Card */}
      <div className="bg-[#F4EFEB] rounded-2xl border border-[#E8E2D8] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-[#1E2C22]">Signed in to Lifeful</div>
          <p className="text-xs text-[#4A5B4F] mt-0.5 font-mono">
            Active account: {userProfile.email}
          </p>
        </div>

        <button
          onClick={signOut}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#E8E2D8] hover:border-[#C85A32] text-xs font-semibold text-[#1E2C22] hover:text-[#C85A32] transition-colors cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>Sign Out</span>
        </button>
      </div>

    </div>
  );
};

