import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { SCENARIOS } from '../data/scenarios';
import { ProductCard } from '../components/ProductCard';
import { Heart, ArrowRight, Trash2, ShoppingBag } from 'lucide-react';

export const SavedPage: React.FC = () => {
  const { 
    savedProductIds, 
    savedSetupIds, 
    toggleSaveProduct,
    toggleSaveSetup, 
    navigateTo, 
    selectScenario 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'products' | 'setups'>('products');

  const savedProducts = PRODUCTS.filter(p => savedProductIds.includes(p.id));
  const savedSetups = SCENARIOS.filter(s => savedSetupIds.includes(s.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5B4F] font-semibold">
            <span>Personal Archive</span>
            <span>·</span>
            <span className="text-[#C85A32]">Saved Objects & Ideas</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#1E2C22] mt-2">
            Saved for Later
          </h1>
          <p className="text-xs sm:text-sm text-[#4A5B4F] mt-1">
            Revisit thoughtful pieces and living blueprints you’ve earmarked for future transitions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 bg-[#FAF8F5] p-1 rounded-full border border-[#E8E2D8]">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-[#1E2C22] text-white shadow-sm'
                : 'text-[#4A5B4F] hover:text-[#1E2C22]'
            }`}
          >
            Saved Products ({savedProducts.length})
          </button>
          <button
            onClick={() => setActiveTab('setups')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'setups'
                ? 'bg-[#1E2C22] text-white shadow-sm'
                : 'text-[#4A5B4F] hover:text-[#1E2C22]'
            }`}
          >
            Saved Setups ({savedSetups.length})
          </button>
        </div>
      </div>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div>
          {savedProducts.length > 0 ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-[#4A5B4F] pb-2">
                <span>{savedProducts.length} items saved in your wishlist</span>
                <button
                  onClick={() => {
                    savedProducts.forEach(p => toggleSaveProduct(p.id));
                  }}
                  className="text-[#C85A32] hover:underline"
                >
                  Clear all wishlist
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedProducts.map(product => (
                  <div key={product.id} className="relative flex flex-col">
                    <ProductCard product={product} />
                    <button
                      onClick={() => toggleSaveProduct(product.id)}
                      className="mt-2 text-xs text-[#C85A32] hover:text-[#B54D27] py-1 text-center font-medium flex items-center justify-center gap-1.5 hover:underline"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove from wishlist</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
              <Heart className="w-10 h-10 text-[#4A5B4F]/30 mx-auto" />
              <h3 className="font-editorial text-2xl text-[#1E2C22]">No saved products yet</h3>
              <p className="text-xs text-[#4A5B4F] max-w-sm mx-auto">
                Tap the heart on any product card while browsing setups to keep it in your personal collection.
              </p>
              <button
                onClick={() => navigateTo('explore')}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#1E2C22] text-white text-xs uppercase tracking-widest font-semibold"
              >
                Explore Catalog
              </button>
            </div>
          )}
        </div>
      )}

      {/* Setups Tab */}
      {activeTab === 'setups' && (
        <div>
          {savedSetups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedSetups.map(sc => (
                <div
                  key={sc.id}
                  className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/10] bg-[#F4EFEB]">
                    <img
                      src={sc.heroImage}
                      alt={sc.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <button
                      onClick={() => toggleSaveSetup(sc.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-[#C85A32] text-white"
                      title="Remove from saved setups"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="absolute bottom-3 left-4 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                        {sc.categories.join(' · ')}
                      </span>
                      <h3 className="font-editorial text-2xl text-white">{sc.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <p className="text-xs text-[#4A5B4F] line-clamp-2">{sc.subtitle}</p>
                    <div className="text-xs font-mono font-bold text-[#1E2C22] pt-2">
                      ₹{sc.defaultBudget.toLocaleString('en-IN')} estimated
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      selectScenario(sc.id);
                      navigateTo('setup', { scenarioId: sc.id });
                    }}
                    className="p-4 bg-[#FAF8F5] border-t border-[#E8E2D8] flex items-center justify-between text-xs font-semibold text-[#1E2C22] group-hover:text-[#C85A32] cursor-pointer"
                  >
                    <span>Launch Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
              <ShoppingBag className="w-10 h-10 text-[#4A5B4F]/30 mx-auto" />
              <h3 className="font-editorial text-2xl text-[#1E2C22]">No saved setups yet</h3>
              <p className="text-xs text-[#4A5B4F] max-w-sm mx-auto">
                Save complete living configurations like "First Apartment" or "Home Office" to track progress.
              </p>
              <button
                onClick={() => navigateTo('setups')}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#1E2C22] text-white text-xs uppercase tracking-widest font-semibold"
              >
                Browse Setups
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
