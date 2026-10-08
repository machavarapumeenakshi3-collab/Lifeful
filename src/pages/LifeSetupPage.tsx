import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LifestyleStyle, PriorityTier, Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { BudgetBuilder } from '../components/BudgetBuilder';
import { SetupProgress } from '../components/SetupProgress';
import { ForgottenEssentials } from '../components/ForgottenEssentials';
import { 
  Sparkles, 
  Eye, 
  ArrowRight, 
  Check, 
  SlidersHorizontal,
  Layers,
  Heart,
  Share2
} from 'lucide-react';

export const LifeSetupPage: React.FC = () => {
  const { 
    currentScenario, 
    activeItems, 
    selectedStyle, 
    setSelectedStyle, 
    applyStyleToSetup,
    totalCost, 
    completionRate, 
    navigateTo,
    isSetupSaved, 
    toggleSaveSetup 
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activePriority, setActivePriority] = useState<string>('all');
  const [filterStrictlyStyle, setFilterStrictlyStyle] = useState<boolean>(false);

  const stylesList: { id: LifestyleStyle; label: string; description: string }[] = [
    { id: 'minimal', label: 'Minimal', description: 'Simple uncluttered forms, essential utilities only' },
    { id: 'cozy', label: 'Cozy', description: 'Warm amber lighting, waffle textiles, tactile softness' },
    { id: 'aesthetic', label: 'Aesthetic', description: 'Sculptural forms, architectural pottery, fluted glassware' },
    { id: 'practical', label: 'Practical', description: 'Maximum durability, quick cleaning, utility-first' },
    { id: 'premium', label: 'Premium', description: 'Solid oak, brass dials, hand-finished joinery' },
    { id: 'eco', label: 'Eco-conscious', description: 'French flax, natural cork, zero synthetic waste' }
  ];

  const categories = ['All', ...currentScenario.categories];

  // Count items matching currently selected style
  const styleMatchedCount = activeItems.filter(item => 
    item.product.styles.includes(selectedStyle)
  ).length;

  // Filter products in current active setup
  const filteredItems = activeItems
    .filter(item => {
      const categoryMatches = activeCategory === 'All' || item.product.category === activeCategory;
      const priorityMatches = activePriority === 'all' || item.product.priority === activePriority;
      const styleMatches = !filterStrictlyStyle || item.product.styles.includes(selectedStyle);
      return categoryMatches && priorityMatches && styleMatches;
    })
    .sort((a, b) => {
      // Prioritize items that match the active selected style!
      const aMatches = a.product.styles.includes(selectedStyle) ? 1 : 0;
      const bMatches = b.product.styles.includes(selectedStyle) ? 1 : 0;
      return bMatches - aMatches;
    });

  // Group by priority
  const mustHaveItems = filteredItems.filter(i => {
    // If item matches selected style, elevate it to must-have
    if (i.product.styles.includes(selectedStyle) && i.product.priority !== 'later') {
      return true;
    }
    return i.product.priority === 'must-have';
  });

  const niceToHaveItems = filteredItems.filter(i => {
    if (mustHaveItems.some(m => m.product.id === i.product.id)) return false;
    return i.product.priority === 'nice-to-have';
  });

  const laterItems = filteredItems.filter(i => {
    if (mustHaveItems.some(m => m.product.id === i.product.id)) return false;
    if (niceToHaveItems.some(n => n.product.id === i.product.id)) return false;
    return true;
  });

  const isSaved = isSetupSaved(currentScenario.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* ===================== HERO HEADER ===================== */}
      <section className="bg-white rounded-3xl border border-[#E8E2D8] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        
        {/* Top Badges and Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5B4F] font-semibold">
            <span>Your Life Setup</span>
            <span>·</span>
            <span className="text-[#C85A32]">{currentScenario.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveSetup(currentScenario.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                isSaved 
                  ? 'bg-[#C85A32] text-white border-[#C85A32]' 
                  : 'bg-[#FAF8F5] text-[#1E2C22] border-[#E8E2D8] hover:border-[#1E2C22]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              <span>{isSaved ? 'Setup Saved' : 'Save Setup'}</span>
            </button>

            <button
              onClick={() => navigateTo('board')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1E2C22] text-white text-xs font-medium hover:bg-[#2D4233] transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Visual Room Board</span>
            </button>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="mt-8 max-w-3xl">
          <h1 className="font-editorial text-4xl sm:text-6xl text-[#1E2C22] leading-[1.05]">
            “{currentScenario.headline}”
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#4A5B4F] leading-relaxed">
            {currentScenario.subtitle}
          </p>
        </div>

        {/* Metrics Pill Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-8 pt-6 border-t border-[#E8E2D8] text-xs sm:text-sm text-[#1E2C22]">
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold tabular-nums font-mono text-base sm:text-lg">
              {activeItems.length}
            </span>
            <span className="text-[#4A5B4F]">considered pieces</span>
          </div>

          <span className="text-[#E8E2D8]">·</span>

          <div className="flex items-baseline gap-1.5">
            <span className="font-bold tabular-nums font-mono text-base sm:text-lg">
              ₹{totalCost.toLocaleString('en-IN')}
            </span>
            <span className="text-[#4A5B4F]">estimated investment</span>
          </div>

          <span className="text-[#E8E2D8]">·</span>

          <div className="flex items-baseline gap-1.5">
            <span className="font-bold tabular-nums font-mono text-base sm:text-lg text-[#C85A32]">
              {completionRate}%
            </span>
            <span className="text-[#4A5B4F]">move-in ready</span>
          </div>
        </div>

      </section>

      {/* ===================== STYLE PERSONALIZATION ENGINE ===================== */}
      <section className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
              Style Mood & Atmosphere
            </span>
            <h3 className="font-editorial text-2xl text-[#1E2C22]">
              Make It Feel:
            </h3>
          </div>
          <p className="text-xs text-[#4A5B4F]">
            Clicking a style instantly modulates recommended textures, materials, and form factors.
          </p>
        </div>

        {/* Style Selection Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
          {stylesList.map(st => {
            const isSelected = selectedStyle === st.id;
            return (
              <button
                key={st.id}
                onClick={() => applyStyleToSetup(st.id)}
                className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? 'bg-[#1E2C22] text-[#FAF8F5] border-[#1E2C22] shadow-sm ring-2 ring-[#C85A32]/40' 
                    : 'bg-[#FAF8F5] text-[#1E2C22] border-[#E8E2D8] hover:border-[#1E2C22]/40 hover:bg-[#F4EFEB]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{st.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C85A32]" />}
                  </div>
                  <p className={`text-[10px] mt-1.5 line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-[#FAF8F5]/80' : 'text-[#4A5B4F]'
                  }`}>
                    {st.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Style Feedback and Filter Toggle Bar */}
        <div className="pt-3 border-t border-[#E8E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-[11px] text-[#1E2C22] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span className="font-semibold uppercase tracking-wider">{selectedStyle} curation active:</span>
            <span className="text-[#4A5B4F]">{styleMatchedCount} pieces specifically matched</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterStrictlyStyle(false)}
              className={`px-3 py-1 rounded-full text-xs transition-colors ${
                !filterStrictlyStyle 
                  ? 'bg-[#1E2C22] text-white font-medium' 
                  : 'bg-[#FAF8F5] text-[#4A5B4F] hover:text-[#1E2C22] border border-[#E8E2D8]'
              }`}
            >
              Show All ({activeItems.length})
            </button>
            <button
              onClick={() => setFilterStrictlyStyle(true)}
              className={`px-3 py-1 rounded-full text-xs transition-colors ${
                filterStrictlyStyle 
                  ? 'bg-[#C85A32] text-white font-medium' 
                  : 'bg-[#FAF8F5] text-[#4A5B4F] hover:text-[#1E2C22] border border-[#E8E2D8]'
              }`}
            >
              Only {stylesList.find(s => s.id === selectedStyle)?.label} ({styleMatchedCount})
            </button>
          </div>
        </div>
      </section>

      {/* ===================== SETUP PROGRESS GAUGE ===================== */}
      <SetupProgress />

      {/* ===================== CATEGORY SWITCHER & PRODUCT SECTIONS ===================== */}
      <section className="space-y-8">
        
        {/* Category Segmented Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E2D8] pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#1E2C22] text-white shadow-sm'
                      : 'bg-white text-[#4A5B4F] hover:text-[#1E2C22] hover:bg-[#F4EFEB] border border-[#E8E2D8]'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#4A5B4F]">
            <span>Showing {filteredItems.length} curated pieces</span>
          </div>
        </div>

        {/* 1. MUST HAVE SECTION */}
        {mustHaveItems.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-[#E8E2D8]/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E2C22]" />
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#1E2C22]">
                  Must Have Essentials ({mustHaveItems.length})
                </h3>
              </div>
              <span className="text-[11px] text-[#4A5B4F]">
                Fundamental daily anchor pieces
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mustHaveItems.map(item => (
                <ProductCard key={item.product.id} product={item.product} />
              ))}
            </div>
          </div>
        )}

        {/* 2. NICE TO HAVE SECTION */}
        {niceToHaveItems.length > 0 && (
          <div className="space-y-4 pt-6">
            <div className="flex items-baseline justify-between border-b border-[#E8E2D8]/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#1E2C22]">
                  Nice to Have Comforts ({niceToHaveItems.length})
                </h3>
              </div>
              <span className="text-[11px] text-[#4A5B4F]">
                Sensory comfort, acoustic warmth, and textiles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {niceToHaveItems.map(item => (
                <ProductCard key={item.product.id} product={item.product} />
              ))}
            </div>
          </div>
        )}

        {/* 3. LATER SECTION */}
        {laterItems.length > 0 && (
          <div className="space-y-4 pt-6">
            <div className="flex items-baseline justify-between border-b border-[#E8E2D8]/80 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4A5B4F]" />
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#1E2C22]">
                  Consider for Later ({laterItems.length})
                </h3>
              </div>
              <span className="text-[11px] text-[#4A5B4F]">
                Secondary accents for month two
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {laterItems.map(item => (
                <ProductCard key={item.product.id} product={item.product} />
              ))}
            </div>
          </div>
        )}

      </section>

      {/* ===================== BUDGET BUILDER SECTION ===================== */}
      <BudgetBuilder />

      {/* ===================== FORGOTTEN ESSENTIALS SECTION ===================== */}
      <ForgottenEssentials />

      {/* ===================== BOTTOM COMPLETION CTA ===================== */}
      <section className="p-8 sm:p-10 rounded-2xl bg-[#1E2C22] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
            Ready to live in it?
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl text-white mt-1">
            Review your complete lifestyle plan
          </h3>
          <p className="text-xs text-[#FAF8F5]/80 mt-1">
            {activeItems.length} items configured with space-conscious compatibility.
          </p>
        </div>

        <button
          onClick={() => navigateTo('my-setup')}
          className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FAF8F5] hover:bg-white text-[#1E2C22] text-xs uppercase tracking-widest font-bold transition-all shadow-lg hover:gap-3"
        >
          <span>Complete My Setup</span>
          <ArrowRight className="w-4 h-4 text-[#C85A32]" />
        </button>
      </section>

    </div>
  );
};
