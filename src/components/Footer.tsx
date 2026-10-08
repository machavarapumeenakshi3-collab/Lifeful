import React from 'react';
import { useApp } from '../context/AppContext';
import { PageRoute } from '../types';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="border-t border-[#E8E2D8] bg-[#FAF8F5] pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8E2D8]">
          {/* Brand Manifesto Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="font-editorial text-3xl tracking-tight text-[#1E2C22]">lifeful</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
            </div>
            <p className="text-sm text-[#4A5B4F] max-w-sm leading-relaxed">
              Don’t shop for products. Shop for the life you want. We curate cohesive, space-aware lifestyle setups around the transitions that actually define you.
            </p>
            <div className="pt-2 text-xs uppercase tracking-widest text-[#1E2C22]/60">
              Kinfolk sensibility · Space-conscious engineering
            </div>
          </div>

          {/* Life Moments Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#1E2C22] font-semibold">
              Curated Moments
            </h4>
            <ul className="space-y-2 text-sm text-[#4A5B4F]">
              <li>
                <button onClick={() => navigateTo('setup', { scenarioId: 'tiny-apartment' })} className="hover:text-[#1E2C22] transition-colors">
                  First Studio Apartment
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('setup', { scenarioId: 'college-hostel' })} className="hover:text-[#1E2C22] transition-colors">
                  College Hostel Room
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('setup', { scenarioId: 'home-office' })} className="hover:text-[#1E2C22] transition-colors">
                  Calm Home Office
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('setup', { scenarioId: 'house-party' })} className="hover:text-[#1E2C22] transition-colors">
                  First House Party
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('setup', { scenarioId: 'weekend-getaway' })} className="hover:text-[#1E2C22] transition-colors">
                  Weekend Getaway
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#1E2C22] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#4A5B4F]">
              <li><button onClick={() => navigateTo('home')} className="hover:text-[#1E2C22] transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('explore')} className="hover:text-[#1E2C22] transition-colors">Explore</button></li>
              <li><button onClick={() => navigateTo('setups')} className="hover:text-[#1E2C22] transition-colors">Life Setups</button></li>
              <li><button onClick={() => navigateTo('board')} className="hover:text-[#1E2C22] transition-colors">Visual Board</button></li>
              <li><button onClick={() => navigateTo('my-setup')} className="hover:text-[#1E2C22] transition-colors">My Setup</button></li>
              <li><button onClick={() => navigateTo('saved')} className="hover:text-[#1E2C22] transition-colors">Saved</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-[#1E2C22] transition-colors">Manifesto</button></li>
            </ul>
          </div>

          {/* Quiet Ethics Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#1E2C22] font-semibold">
              Ethos
            </h4>
            <p className="text-xs text-[#4A5B4F] leading-relaxed">
              Every piece in our catalog is verified for proportion integrity, repairable joinery, and non-toxic materials.
            </p>
            <div className="text-xs text-[#C85A32] font-medium pt-1">
              Zero Synthetic Plastic Waste
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A5B4F]/80 gap-4">
          <div>
            © {new Date().getFullYear()} lifeful Inc. All thoughtful setups reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Bengaluru</span>
            <span>·</span>
            <span>Mumbai</span>
            <span>·</span>
            <span>Delhi NCR</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
