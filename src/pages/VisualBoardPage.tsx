import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SCENARIOS } from '../data/scenarios';
import { PRODUCTS } from '../data/products';
import { Product, BoardHotspot } from '../types';
import { 
  Sparkles, 
  Plus, 
  Check, 
  RefreshCw, 
  Eye, 
  ArrowRight,
  Maximize2,
  Layers,
  Heart
} from 'lucide-react';

export const VisualBoardPage: React.FC = () => {
  const { 
    currentScenario, 
    selectScenario, 
    openDetailModal, 
    openSwapModal, 
    addToSetup, 
    isProductInSetup,
    navigateTo 
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedHotspot, setSelectedHotspot] = useState<BoardHotspot | null>(null);

  const hotspots = currentScenario.boardHotspots || [];
  const categories = ['All', ...currentScenario.categories];

  const filteredHotspots = activeCategory === 'All'
    ? hotspots
    : hotspots.filter(h => h.category === activeCategory);

  // Find product for selected hotspot
  const selectedProduct: Product | undefined = selectedHotspot 
    ? PRODUCTS.find(p => p.id === selectedHotspot.productId) 
    : undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5B4F] font-semibold">
            <span>Visual Life Board</span>
            <span>·</span>
            <span className="text-[#C85A32]">Interactive Spatial Composition</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#1E2C22] mt-2">
            The Living Canvas
          </h1>
          <p className="text-xs sm:text-sm text-[#4A5B4F] mt-1 max-w-xl">
            Inspect pieces in their natural spatial context. Tap any glowing coordinate to inspect joinery, verify proportions, or swap pieces.
          </p>
        </div>

        {/* Scenario Switcher Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SCENARIOS.map(sc => (
            <button
              key={sc.id}
              onClick={() => {
                selectScenario(sc.id);
                setSelectedHotspot(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                sc.id === currentScenario.id
                  ? 'bg-[#1E2C22] text-white shadow-sm'
                  : 'bg-white text-[#4A5B4F] border border-[#E8E2D8] hover:border-[#1E2C22]'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter Pills on Board */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#FAF8F5] border border-[#1E2C22] text-[#1E2C22] font-bold'
                  : 'bg-white border border-[#E8E2D8] text-[#4A5B4F] hover:text-[#1E2C22]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-[#4A5B4F] hidden sm:inline">
          {filteredHotspots.length} active spatial pins
        </span>
      </div>

      {/* ===================== INTERACTIVE CANVAS CONTAINER ===================== */}
      <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D8] bg-[#1E2C22] shadow-xl aspect-[16/10] sm:aspect-[16/9] w-full">
        
        {/* Board Background Image */}
        <img
          src={currentScenario.boardImage}
          alt={currentScenario.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-90 transition-all duration-700"
        />

        {/* Ambient Dark Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Title Overlay (Bottom Left) */}
        <div className="absolute bottom-6 left-6 text-white pointer-events-none max-w-sm hidden sm:block">
          <span className="text-[10px] uppercase tracking-widest text-[#FAF8F5]/80">
            {currentScenario.title} composition
          </span>
          <h3 className="font-editorial text-2xl text-white mt-0.5">
            {currentScenario.headline}
          </h3>
        </div>

        {/* Interactive Hotspot Pins */}
        {filteredHotspots.map(hs => {
          const isSelected = selectedHotspot?.id === hs.id;
          const matchedProduct = PRODUCTS.find(p => p.id === hs.productId);
          const inSetup = matchedProduct ? isProductInSetup(matchedProduct.id) : false;

          return (
            <div
              key={hs.id}
              style={{ left: `${hs.xPercent}%`, top: `${hs.yPercent}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
            >
              {/* Pulsing ring indicator */}
              <button
                onClick={() => setSelectedHotspot(hs)}
                className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-transform focus:outline-none ${
                  isSelected 
                    ? 'scale-125' 
                    : 'hover:scale-110'
                }`}
                aria-label={`Hotspot for ${hs.label}`}
              >
                <span className="absolute inset-0 rounded-full bg-[#C85A32]/40 animate-ping duration-1000" />
                <span className={`relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-colors ${
                  isSelected 
                    ? 'bg-[#C85A32] text-white' 
                    : 'bg-[#FAF8F5] text-[#1E2C22] group-hover:bg-[#C85A32] group-hover:text-white'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current" />
                </span>
              </button>

              {/* Pin Hover/Selected Tooltip Tag */}
              <div 
                onClick={() => setSelectedHotspot(hs)}
                className={`cursor-pointer whitespace-nowrap absolute top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E8E2D8] text-[#1E2C22] shadow-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                  isSelected 
                    ? 'opacity-100 scale-100 ring-2 ring-[#C85A32]' 
                    : 'opacity-90 group-hover:opacity-100 scale-95 group-hover:scale-100'
                }`}
              >
                <span>{hs.label}</span>
                {matchedProduct && (
                  <span className="font-mono text-[#C85A32] font-bold">
                    ₹{matchedProduct.price.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Selected Product Floating Inspection Card */}
        {selectedHotspot && selectedProduct && (
          <div className="absolute top-6 right-6 z-30 max-w-sm w-full bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E8E2D8] shadow-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
              <span className="text-[10px] uppercase tracking-wider text-[#C85A32] font-bold">
                {selectedProduct.category} · Spatial Pin
              </span>
              <button
                onClick={() => setSelectedHotspot(null)}
                className="text-xs text-[#4A5B4F] hover:text-[#1E2C22]"
              >
                Close
              </button>
            </div>

            <div className="mt-3 flex gap-3.5 items-start">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-xl object-cover bg-[#F4EFEB] flex-shrink-0"
              />
              <div>
                <h4 className="text-xs font-bold text-[#1E2C22] leading-snug">
                  {selectedProduct.name}
                </h4>
                <div className="text-sm font-bold text-[#1E2C22] tabular-nums font-mono mt-1">
                  ₹{selectedProduct.price.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-[#C85A32] mt-0.5">
                  {selectedProduct.spaceCompatibility}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#4A5B4F] mt-3 leading-relaxed border-t border-[#E8E2D8]/80 pt-2">
              "{selectedProduct.reason}"
            </p>

            {/* Actions Bar */}
            <div className="mt-4 pt-3 border-t border-[#E8E2D8] flex items-center gap-2">
              <button
                onClick={() => openDetailModal(selectedProduct)}
                className="flex-1 py-2 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] hover:bg-[#F4EFEB] text-[#1E2C22] text-xs font-medium transition-colors"
              >
                Inspect Specs
              </button>

              {selectedProduct.alternatives && selectedProduct.alternatives.length > 0 && (
                <button
                  onClick={() => openSwapModal(selectedProduct)}
                  className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] hover:bg-[#F4EFEB] text-[#1E2C22] transition-colors"
                  aria-label="Swap piece"
                  title="Swap piece"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => addToSetup(selectedProduct)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isProductInSetup(selectedProduct.id)
                    ? 'bg-[#1E2C22] text-white'
                    : 'bg-[#1E2C22] hover:bg-[#2D4233] text-white'
                }`}
              >
                {isProductInSetup(selectedProduct.id) ? 'In Setup ✓' : 'Add Piece'}
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Return to Setup Builder */}
      <div className="flex items-center justify-between pt-6 border-t border-[#E8E2D8]">
        <button
          onClick={() => navigateTo('setup', { scenarioId: currentScenario.id })}
          className="text-xs uppercase tracking-widest text-[#4A5B4F] hover:text-[#1E2C22] font-semibold"
        >
          ← Back to Setup Details
        </button>

        <button
          onClick={() => navigateTo('my-setup')}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E2C22] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#2D4233] transition-colors"
        >
          <span>Review My Plan</span>
          <ArrowRight className="w-4 h-4 text-[#C85A32]" />
        </button>
      </div>

    </div>
  );
};
