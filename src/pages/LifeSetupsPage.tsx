import React from 'react';
import { useApp } from '../context/AppContext';
import { SCENARIOS } from '../data/scenarios';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles, Heart, CheckCircle2, Clock } from 'lucide-react';

export const LifeSetupsPage: React.FC = () => {
  const { 
    selectScenario, 
    navigateTo, 
    isSetupSaved, 
    toggleSaveSetup 
  } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5B4F] font-semibold">
            <span>Life Setups Library</span>
            <span>·</span>
            <span className="text-[#C85A32]">Pre-Engineered Configurations</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#1E2C22] mt-2">
            Curated Lifestyle Blueprints
          </h1>
          <p className="text-xs sm:text-sm text-[#4A5B4F] mt-1 max-w-xl">
            Complete living blueprints designed for specific transitions. Every configuration accounts for spatial flow, lighting balance, and daily rituals.
          </p>
        </div>

        <span className="text-xs text-[#4A5B4F]">
          {SCENARIOS.length} foundational life moments available
        </span>
      </div>

      {/* Grid of Setups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SCENARIOS.map(sc => {
          const isSaved = isSetupSaved(sc.id);
          const scProducts = PRODUCTS.filter(p => p.scenarioId === sc.id);

          return (
            <div
              key={sc.id}
              className="bg-white rounded-2xl border border-[#E8E2D8] hover:border-[#1E2C22] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between shadow-sm group"
            >
              <div>
                {/* Visual Preview */}
                <div 
                  onClick={() => {
                    selectScenario(sc.id);
                    navigateTo('setup', { scenarioId: sc.id });
                  }}
                  className="relative aspect-[16/10] bg-[#F4EFEB] overflow-hidden cursor-pointer"
                >
                  <img
                    src={sc.heroImage}
                    alt={sc.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaveSetup(sc.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        isSaved 
                          ? 'bg-[#C85A32] text-white shadow-sm' 
                          : 'bg-white/80 text-[#1E2C22] hover:bg-white'
                      }`}
                      aria-label="Save setup"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#FAF8F5]/80">
                      {sc.categories.join(' · ')}
                    </span>
                    <h3 className="font-editorial text-2xl text-white">
                      {sc.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#4A5B4F] leading-relaxed line-clamp-2">
                    {sc.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E8E2D8] text-xs">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F]">Est. Investment</div>
                      <div className="font-mono font-bold text-[#1E2C22] text-sm tabular-nums mt-0.5">
                        ₹{sc.defaultBudget.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F]">Readiness</div>
                      <div className="font-mono font-bold text-[#C85A32] text-sm tabular-nums mt-0.5">
                        {sc.completionEstimate}% Ready
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#4A5B4F] pt-2">
                    <span>{scProducts.length || 6} considered pieces</span>
                    <span className="capitalize">{sc.recommendedStyles.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div 
                onClick={() => {
                  selectScenario(sc.id);
                  navigateTo('setup', { scenarioId: sc.id });
                }}
                className="p-4 bg-[#FAF8F5] border-t border-[#E8E2D8] flex items-center justify-between text-xs font-semibold text-[#1E2C22] group-hover:text-[#C85A32] cursor-pointer transition-colors"
              >
                <span>Open Life Setup</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
