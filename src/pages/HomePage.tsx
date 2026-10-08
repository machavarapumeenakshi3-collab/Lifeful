import React from 'react';
import { useApp } from '../context/AppContext';
import { SCENARIOS } from '../data/scenarios';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Layers, 
  Check, 
  MoveRight,
  Sliders,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    heroPromptText, 
    setHeroPromptText, 
    triggerGeneration, 
    navigateTo,
    selectScenario 
  } = useApp();

  const handleBuildClick = () => {
    // If text matches a scenario or contains keywords, detect scenario
    const lower = heroPromptText.toLowerCase();
    let targetId = 'tiny-apartment';
    if (lower.includes('hostel') || lower.includes('dorm') || lower.includes('college')) {
      targetId = 'college-hostel';
    } else if (lower.includes('office') || lower.includes('work') || lower.includes('desk')) {
      targetId = 'home-office';
    } else if (lower.includes('game') || lower.includes('gaming')) {
      targetId = 'gaming-setup';
    } else if (lower.includes('party') || lower.includes('host')) {
      targetId = 'house-party';
    } else if (lower.includes('getaway') || lower.includes('travel') || lower.includes('trip')) {
      targetId = 'weekend-getaway';
    } else if (lower.includes('fitness') || lower.includes('workout') || lower.includes('gym')) {
      targetId = 'fitness-starter';
    } else if (lower.includes('pet') || lower.includes('puppy') || lower.includes('dog') || lower.includes('cat')) {
      targetId = 'new-pet';
    }
    triggerGeneration(targetId, heroPromptText);
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-12 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        
        {/* Subtle Top Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEB] border border-[#E8E2D8] mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
          <span className="text-[11px] uppercase tracking-widest font-semibold text-[#1E2C22]">
            Life, Thoughtfully Assembled
          </span>
        </div>

        {/* Hero Title in Instrument Serif Display */}
        <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#1E2C22] leading-[0.95] max-w-4xl mx-auto text-balance">
          Shop for the life <br />
          <span className="italic font-light text-[#C85A32]">you actually want.</span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg text-[#4A5B4F] max-w-xl mx-auto font-normal leading-relaxed">
          Tell us what you’re preparing for. We interpret the room dimensions, lighting constraints, and daily rituals—and assemble everything around it.
        </p>

        {/* Large Scenario Input */}
        <div className="mt-10 max-w-2xl mx-auto bg-white p-2.5 sm:p-3 rounded-2xl border border-[#E8E2D8] shadow-lg shadow-[#1E2C22]/5 flex flex-col sm:flex-row items-stretch gap-3 transition-all focus-within:border-[#1E2C22] focus-within:shadow-xl">
          <div className="flex-1 flex items-center px-3 sm:px-4">
            <input
              type="text"
              value={heroPromptText}
              onChange={(e) => setHeroPromptText(e.target.value)}
              placeholder="e.g. I’m moving into my first tiny studio apartment..."
              className="w-full text-sm sm:text-base text-[#1E2C22] placeholder:text-[#4A5B4F]/60 bg-transparent border-none outline-none font-normal"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleBuildClick();
              }}
            />
          </div>

          <button
            onClick={handleBuildClick}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E2C22] hover:bg-[#2D4233] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold transition-all hover:gap-3 cursor-pointer shrink-0"
          >
            <span>Build My Life</span>
            <ArrowRight className="w-4 h-4 text-[#C85A32]" />
          </button>
        </div>

        {/* Core Subtitle Prompt */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => {
              const el = document.getElementById('curated-moments');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFEB] border border-[#E8E2D8] hover:border-[#1E2C22] text-xs uppercase tracking-widest text-[#4A5B4F] hover:text-[#1E2C22] transition-all cursor-pointer shadow-sm hover:shadow"
            aria-label="Scroll to curated moments"
          >
            <span>Not sure where to start?</span>
            <span className="text-[#C85A32] font-semibold group-hover:translate-y-0.5 transition-transform inline-flex items-center gap-1">
              Choose a moment below ↓
            </span>
          </button>
        </div>

      </section>

      {/* ===================== ALL 8 FUNCTIONAL SCENARIO CARDS ===================== */}
      <section id="curated-moments" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-[#E8E2D8] gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
              Curated Life Situations
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1E2C22]">
              Choose Your Transition
            </h2>
          </div>
          <span className="text-xs text-[#4A5B4F]">
            Every moment produces a bespoke, space-calibrated setup
          </span>
        </div>

        {/* 8 Scenario Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCENARIOS.map((scenario, index) => {
            return (
              <div
                key={scenario.id}
                onClick={() => {
                  setHeroPromptText(scenario.promptExample);
                  triggerGeneration(scenario.id, scenario.promptExample);
                }}
                className="group cursor-pointer bg-white rounded-2xl border border-[#E8E2D8] hover:border-[#1E2C22] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image Header with Scrim */}
                  <div className="relative aspect-[16/10] bg-[#F4EFEB] overflow-hidden">
                    <img
                      src={scenario.heroImage}
                      alt={scenario.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Index & Completion */}
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-mono text-white/90">
                      0{index + 1}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[10px] uppercase tracking-wider text-[#FAF8F5]/80">
                        {scenario.categories.join(' · ')}
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl text-white leading-tight">
                        {scenario.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-[#4A5B4F] line-clamp-2 leading-relaxed">
                      {scenario.subtitle}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#1E2C22]">
                      <span className="font-mono font-semibold">
                        ₹{scenario.defaultBudget.toLocaleString('en-IN')} est.
                      </span>
                      <span className="text-[#C85A32] font-medium">
                        {scenario.completionEstimate}% Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-4 py-3 bg-[#FAF8F5] border-t border-[#E8E2D8] flex items-center justify-between text-xs font-semibold text-[#1E2C22] group-hover:text-[#C85A32] transition-colors">
                  <span>Explore this setup</span>
                  <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ===================== EDITORIAL PHILOSOPHY BANNER ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E2C22] text-[#FAF8F5] rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden">
          
          <div className="max-w-2xl relative z-10 space-y-6">
            <span className="text-[11px] uppercase tracking-widest text-[#C85A32] font-semibold">
              The lifeful Philosophy
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              “Don’t shop for products. <br />
              <span className="italic text-[#E8E2D8]">Shop for the life you want.”</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed font-light">
              Conventional retail buries you under 10,000 disconnected products with no sense of proportion, lighting temperature, or room geometry. We reverse the entire model: you define the milestone, and our intelligence curates a unified, tactile world.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo('explore')}
                className="px-6 py-3 rounded-full bg-[#FAF8F5] text-[#1E2C22] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
              >
                Browse All Moments
              </button>
              <button
                onClick={() => navigateTo('board')}
                className="px-6 py-3 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
              >
                Interactive Room Board
              </button>
            </div>
          </div>

          {/* Decorative subtle texture watermark */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
            <Compass className="w-72 h-72 text-white stroke-[0.5]" />
          </div>

        </div>
      </section>

      {/* ===================== HOW IT WORKS / THREE INTENTIONS ===================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
            How It Works
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1E2C22] mt-1">
            From Moment to Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22] font-mono text-sm font-bold">
              01
            </div>
            <h3 className="font-editorial text-2xl text-[#1E2C22]">
              Describe Your Moment
            </h3>
            <p className="text-xs text-[#4A5B4F] leading-relaxed">
              No product searches or SKU hunting. State your transition: moving out, starting college, building focus, or bringing home a new pet.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22] font-mono text-sm font-bold">
              02
            </div>
            <h3 className="font-editorial text-2xl text-[#1E2C22]">
              Calibrate & Personalize
            </h3>
            <p className="text-xs text-[#4A5B4F] leading-relaxed">
              Tune your aesthetic (Minimal, Cozy, Practical, Premium) and slide your budget. Our engine dynamically swaps items to maintain spatial harmony.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22] font-mono text-sm font-bold">
              03
            </div>
            <h3 className="font-editorial text-2xl text-[#1E2C22]">
              Unearth Forgotten Pieces
            </h3>
            <p className="text-xs text-[#4A5B4F] leading-relaxed">
              Never experience the frustration of moving in and realizing you have no extension cords or door stoppers. We catch what you’d otherwise forget.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
