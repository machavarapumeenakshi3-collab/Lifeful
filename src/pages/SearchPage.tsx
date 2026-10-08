import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { SCENARIOS } from '../data/scenarios';
import { ProductCard } from '../components/ProductCard';
import { Search, Sparkles, ArrowRight, X } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const { searchQuery, setSearchQuery, navigateTo, selectScenario } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'setups' | 'products'>('all');

  const query = searchQuery.trim().toLowerCase();

  const matchedSetups = SCENARIOS.filter(s => {
    if (!query) return true;
    return (
      s.title.toLowerCase().includes(query) ||
      s.subtitle.toLowerCase().includes(query) ||
      s.categories.some(c => c.toLowerCase().includes(query)) ||
      s.tags.some(t => t.toLowerCase().includes(query))
    );
  });

  const matchedProducts = PRODUCTS.filter(p => {
    if (!query) return true;
    return (
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query)) ||
      p.styles.some(s => s.toLowerCase().includes(query))
    );
  });

  const quickPicks = ['Studio Apartment', 'Home Office', 'Gooseneck Kettle', 'Desk Lamp', 'Linen Duvet', 'Waxed Duffel', 'Hostel Bunk'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Search Header */}
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
            Global Search
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#1E2C22] mt-1">
            Search Moments & Pieces
          </h1>
        </div>

        {/* Search Bar Input */}
        <div className="relative bg-white rounded-2xl border border-[#E8E2D8] shadow-sm flex items-center p-2 focus-within:border-[#1E2C22]">
          <Search className="w-5 h-5 text-[#4A5B4F] ml-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by moment, room, piece name, or style..."
            className="w-full px-3 py-2 text-sm text-[#1E2C22] placeholder:text-[#4A5B4F]/60 bg-transparent border-none outline-none font-normal"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1.5 text-[#4A5B4F] hover:text-[#1E2C22] mr-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          <span className="text-xs text-[#4A5B4F] mr-1">Suggested:</span>
          {quickPicks.map(pick => (
            <button
              key={pick}
              onClick={() => setSearchQuery(pick)}
              className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#1E2C22] text-xs text-[#1E2C22] transition-colors"
            >
              {pick}
            </button>
          ))}
        </div>
      </div>

      {/* Results Filter Bar */}
      <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-[#1E2C22] text-white'
                : 'text-[#4A5B4F] hover:text-[#1E2C22]'
            }`}
          >
            All Results ({matchedSetups.length + matchedProducts.length})
          </button>
          <button
            onClick={() => setActiveTab('setups')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'setups'
                ? 'bg-[#1E2C22] text-white'
                : 'text-[#4A5B4F] hover:text-[#1E2C22]'
            }`}
          >
            Life Setups ({matchedSetups.length})
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'products'
                ? 'bg-[#1E2C22] text-white'
                : 'text-[#4A5B4F] hover:text-[#1E2C22]'
            }`}
          >
            Products ({matchedProducts.length})
          </button>
        </div>

        <span className="text-xs text-[#4A5B4F]">
          {query ? `Showing results for "${query}"` : 'Showing full catalog'}
        </span>
      </div>

      {/* Results Content */}
      <div className="space-y-12">
        {/* Setups Section */}
        {(activeTab === 'all' || activeTab === 'setups') && matchedSetups.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#1E2C22]">
              Matching Life Setups ({matchedSetups.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedSetups.map(sc => (
                <div
                  key={sc.id}
                  onClick={() => {
                    selectScenario(sc.id);
                    navigateTo('setup', { scenarioId: sc.id });
                  }}
                  className="p-5 bg-white rounded-2xl border border-[#E8E2D8] hover:border-[#1E2C22] transition-all cursor-pointer flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={sc.heroImage}
                      alt={sc.title}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-xl object-cover bg-[#F4EFEB]"
                    />
                    <div>
                      <h4 className="font-editorial text-xl text-[#1E2C22] group-hover:text-[#C85A32] transition-colors">
                        {sc.title}
                      </h4>
                      <p className="text-xs text-[#4A5B4F] mt-0.5 line-clamp-1">{sc.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1E2C22] group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Section */}
        {(activeTab === 'all' || activeTab === 'products') && matchedProducts.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#1E2C22]">
              Matching Considered Products ({matchedProducts.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {matchedSetups.length === 0 && matchedProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E2D8] space-y-3">
            <Sparkles className="w-10 h-10 text-[#4A5B4F]/30 mx-auto" />
            <h3 className="font-editorial text-2xl text-[#1E2C22]">No matches found</h3>
            <p className="text-xs text-[#4A5B4F] max-w-sm mx-auto">
              Try searching with broader terms like "desk", "sleep", "travel", or "apartment".
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
