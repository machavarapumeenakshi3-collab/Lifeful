import React from 'react';
import { useApp } from '../context/AppContext';
import { Plus, Check, Sparkles, Lightbulb } from 'lucide-react';
import { ProductImage } from './ProductImage';

export const ForgottenEssentials: React.FC = () => {
  const { 
    scenarioForgottenEssentials, 
    addForgottenEssentialToSetup, 
    isProductInSetup 
  } = useApp();

  if (scenarioForgottenEssentials.length === 0) return null;

  return (
    <section className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-8 space-y-6">
      
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E8E2D8] pb-4">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#C85A32] font-semibold">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Before you go...</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E2C22] mt-1">
            You Might Be Forgetting:
          </h3>
        </div>
        <p className="text-xs text-[#4A5B4F] max-w-sm sm:text-right">
          Small, unglamorous essentials that turn chaotic move-in days into seamless living rituals.
        </p>
      </div>

      {/* Grid of Forgotten Essentials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scenarioForgottenEssentials.map(fe => {
          const inSetup = isProductInSetup(fe.id);

          return (
            <div 
              key={fe.id}
              className="p-4 rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] hover:border-[#1E2C22]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-[#F4EFEB]">
                  <ProductImage
                    src={fe.image}
                    alt={fe.name}
                    category={fe.category}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#4A5B4F] mb-1">
                  <span className="uppercase tracking-wider font-semibold text-[#1E2C22]/70">
                    {fe.category}
                  </span>
                  <span className="text-[#C85A32] font-medium">
                    {fe.spaceCompatibility}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-[#1E2C22] leading-snug">
                  {fe.name}
                </h4>

                <p className="text-[11px] text-[#4A5B4F] mt-2 leading-relaxed">
                  "{fe.reason}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E2D8]/80 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1E2C22] tabular-nums font-mono">
                  ₹{fe.price.toLocaleString('en-IN')}
                </span>

                <button
                  onClick={() => addForgottenEssentialToSetup(fe)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    inSetup
                      ? 'bg-[#1E2C22] text-white'
                      : 'bg-white border border-[#E8E2D8] text-[#1E2C22] hover:bg-[#1E2C22] hover:text-white'
                  }`}
                >
                  {inSetup ? (
                    <>
                      <Check className="w-3 h-3 text-[#C85A32]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3 h-3" />
                      <span>Add</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
