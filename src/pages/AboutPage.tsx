import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Editorial Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
          The lifeful Manifesto
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl text-[#1E2C22] leading-[1.05]">
          A counter-movement to mindless consumption.
        </h1>
        <p className="text-sm sm:text-base text-[#4A5B4F] leading-relaxed">
          We believe shopping for an apartment should feel like composing a poem, not sifting through an infinite warehouse search box.
        </p>
      </div>

      {/* Narrative Section 1 */}
      <section className="bg-white rounded-3xl border border-[#E8E2D8] p-8 sm:p-12 space-y-6">
        <h2 className="font-editorial text-3xl text-[#1E2C22]">
          The Problem with 10,000 Search Results
        </h2>
        <div className="space-y-4 text-xs sm:text-sm text-[#4A5B4F] leading-relaxed">
          <p>
            When you move into your first tiny apartment or pack for college, you don’t actually want "a desk", "a lamp", and "a quilt". You want the feeling of waking up in a serene, sunlit room where everything fits, cables are invisible, and you have space to breathe.
          </p>
          <p>
            Yet traditional commerce drops you into a hostile labyrinth of flash sales, sponsored banner ads, fake five-star reviews, and plastic-heavy knockoffs. You buy six items from six sellers, only to find the desk blocks your bedroom door and the lamp emits blinding blue light.
          </p>
        </div>
      </section>

      {/* Manifesto Pullquote */}
      <div className="p-8 sm:p-12 bg-[#1E2C22] text-white rounded-3xl text-center space-y-4">
        <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
          First Principle
        </span>
        <blockquote className="font-editorial text-3xl sm:text-5xl text-white italic max-w-xl mx-auto leading-tight">
          “Don’t shop for products. <br />Shop for the life you want.”
        </blockquote>
        <p className="text-xs text-[#FAF8F5]/80 max-w-md mx-auto pt-2">
          Every piece must justify its presence in your square footage. If it does not serve your rituals or age gracefully, it does not belong in our catalog.
        </p>
      </div>

      {/* Three Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-editorial text-xl text-[#1E2C22]">Spatial Proportions</h3>
          <p className="text-xs text-[#4A5B4F] leading-relaxed">
            Our algorithms understand clearances, door swings, and ceiling heights. We ensure every piece leaves room for your elbows and your plants.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-editorial text-xl text-[#1E2C22]">Atmospheric Cohesion</h3>
          <p className="text-xs text-[#4A5B4F] leading-relaxed">
            Natural travertine, raw unglazed ceramics, and French linen. Color temperatures calibrated strictly between 2200K and 3000K.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-editorial text-xl text-[#1E2C22]">Heirloom Integrity</h3>
          <p className="text-xs text-[#4A5B4F] leading-relaxed">
            Solid European oak, cast iron, and waxed cotton canvas. Designed to survive ten moves, not crack within six months.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <div className="text-center pt-8">
        <button
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1E2C22] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#2D4233] transition-colors"
        >
          <span>Start Assembling Your Moment</span>
          <ArrowRight className="w-4 h-4 text-[#C85A32]" />
        </button>
      </div>

    </div>
  );
};
