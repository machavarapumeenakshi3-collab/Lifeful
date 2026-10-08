import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SwapAlternative } from '../types';
import { X, RefreshCw, Check, ArrowRight, Sparkles } from 'lucide-react';
import { ProductImage } from './ProductImage';

export const SwapModal: React.FC = () => {
  const { swapModalProduct, closeSwapModal, executeSwap } = useApp();
  const [selectedTab, setSelectedTab] = useState<'all' | 'affordable' | 'compact' | 'aesthetic' | 'quality'>('all');

  if (!swapModalProduct) return null;

  const alternatives = swapModalProduct.alternatives || [];

  const filteredAlternatives = selectedTab === 'all' 
    ? alternatives 
    : alternatives.filter(a => a.type === selectedTab);

  const tabs = [
    { id: 'all', label: 'All Alternatives' },
    { id: 'affordable', label: 'More Affordable' },
    { id: 'compact', label: 'More Compact' },
    { id: 'aesthetic', label: 'More Aesthetic' },
    { id: 'quality', label: 'Higher Quality' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#1E2C22]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] shadow-2xl p-6 sm:p-8 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E8E2D8]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-[#F4EFEB] text-[#1E2C22]">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
                Smart Product Swap
              </span>
              <h3 className="font-editorial text-2xl text-[#1E2C22]">
                Explore Compatible Alternatives
              </h3>
            </div>
          </div>
          <button
            onClick={closeSwapModal}
            className="p-2 rounded-full hover:bg-[#F4EFEB] text-[#1E2C22] transition-colors"
            aria-label="Close swap modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Piece Bar */}
        <div className="mt-4 p-3.5 bg-white rounded-xl border border-[#E8E2D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <ProductImage
                src={swapModalProduct.image}
                alt={swapModalProduct.name}
                category={swapModalProduct.category}
              />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-semibold">
                Current Setup Selection
              </div>
              <h4 className="text-xs font-semibold text-[#1E2C22] line-clamp-1">
                {swapModalProduct.name}
              </h4>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-[#1E2C22] tabular-nums font-mono">
              ₹{swapModalProduct.price.toLocaleString('en-IN')}
            </span>
            <div className="text-[10px] text-[#4A5B4F]">In active setup</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-5 flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedTab === tab.id
                  ? 'bg-[#1E2C22] text-[#FAF8F5]'
                  : 'bg-white text-[#4A5B4F] hover:text-[#1E2C22] hover:bg-[#F4EFEB] border border-[#E8E2D8]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Alternatives List */}
        <div className="mt-4 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
          {filteredAlternatives.length > 0 ? (
            filteredAlternatives.map((alt) => {
              const priceDelta = alt.price - swapModalProduct.price;
              const isCheaper = priceDelta < 0;

              return (
                <div 
                  key={alt.id}
                  className="p-4 bg-white rounded-xl border border-[#E8E2D8] hover:border-[#1E2C22]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                      <ProductImage
                        src={alt.image}
                        alt={alt.name}
                        category={swapModalProduct.category}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#C85A32]">
                          {alt.differenceLabel}
                        </span>
                        <span className="text-[11px] text-[#4A5B4F]">{alt.compatibilityNote}</span>
                      </div>
                      <h4 className="text-xs font-bold text-[#1E2C22] mt-0.5">
                        {alt.name}
                      </h4>
                      <p className="text-xs text-[#4A5B4F] mt-1 leading-relaxed">
                        {alt.reason}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E8E2D8]">
                    <div className="text-left sm:text-right">
                      <div className="text-sm font-bold text-[#1E2C22] tabular-nums font-mono">
                        ₹{alt.price.toLocaleString('en-IN')}
                      </div>
                      <div className={`text-[11px] tabular-nums font-medium ${isCheaper ? 'text-[#2D6A4F]' : 'text-[#C85A32]'}`}>
                        {isCheaper ? `Save ₹${Math.abs(priceDelta).toLocaleString('en-IN')}` : `+₹${priceDelta.toLocaleString('en-IN')}`}
                      </div>
                    </div>

                    <button
                      onClick={() => executeSwap(swapModalProduct.id, alt)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1E2C22] hover:bg-[#2D4233] text-white text-xs font-medium rounded-lg transition-colors whitespace-nowrap shadow-sm"
                    >
                      <span>Swap Piece</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 bg-white rounded-xl border border-[#E8E2D8]">
              <Sparkles className="w-6 h-6 mx-auto text-[#4A5B4F]/40 mb-2" />
              <p className="text-xs text-[#4A5B4F]">No specific alternatives under this category.</p>
              <button
                onClick={() => setSelectedTab('all')}
                className="mt-2 text-xs text-[#C85A32] underline"
              >
                Show all options
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
