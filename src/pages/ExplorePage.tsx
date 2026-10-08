import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SCENARIOS } from '../data/scenarios';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Layers, 
  SlidersHorizontal,
  Search
} from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const { triggerGeneration, navigateTo, openDetailModal } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const curatedMoments = [
    {
      id: 'tiny-apartment',
      title: 'Small Space Living',
      tagline: 'Multi-functional living for studios under 400 sq ft',
      scenarioId: 'tiny-apartment',
      image: '/src/assets/images/hero_tiny_apartment_1791451912488.jpg',
      category: 'Rooms'
    },
    {
      id: 'home-office',
      title: 'Calm Workspace',
      tagline: 'Ergonomic stillness, warm oak, and hidden wiring',
      scenarioId: 'home-office',
      image: '/src/assets/images/hero_home_office_1791451955725.jpg',
      category: 'Activities'
    },
    {
      id: 'college-hostel',
      title: 'Study Better',
      tagline: 'Acoustic calm and compact vertical storage for shared rooms',
      scenarioId: 'college-hostel',
      image: '/src/assets/images/hero_college_hostel_1791451934070.jpg',
      category: 'Moments'
    },
    {
      id: 'house-party',
      title: 'Host Like You Mean It',
      tagline: 'Fluted glassware, amber candlelight, and zero breakage anxiety',
      scenarioId: 'house-party',
      image: '/src/assets/images/hero_house_party_1791451969949.jpg',
      category: 'Moments'
    },
    {
      id: 'weekend-getaway',
      title: 'Weekend Away',
      tagline: 'Heavy waxed canvas and packable thermal comfort',
      scenarioId: 'weekend-getaway',
      image: '/src/assets/images/hero_weekend_getaway_1791451982017.jpg',
      category: 'Activities'
    },
    {
      id: 'fitness-starter',
      title: 'Starter Fitness',
      tagline: 'Natural rubber, low-noise mobility, and bedroom strength',
      scenarioId: 'fitness-starter',
      image: '/src/assets/images/hero_home_office_1791451955725.jpg',
      category: 'Activities'
    }
  ];

  const filterTabs = ['all', 'Moments', 'Rooms', 'Activities'];

  const filteredMoments = curatedMoments.filter(m => {
    const matchesTab = activeFilter === 'all' || m.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5B4F] font-semibold">
            <span>Visual Discovery</span>
            <span>·</span>
            <span className="text-[#C85A32]">Curated Environments</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#1E2C22] mt-2">
            Explore Life Concepts
          </h1>
          <p className="text-xs sm:text-sm text-[#4A5B4F] mt-1 max-w-xl">
            Discover living environments organized around rituals, architectural scale, and human transitions.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#4A5B4F] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search moments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-2 bg-white rounded-full border border-[#E8E2D8] text-xs text-[#1E2C22] focus:outline-none focus:border-[#1E2C22]"
            />
          </div>

          <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-full border border-[#E8E2D8]">
            {filterTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1 rounded-full text-xs capitalize transition-colors ${
                  activeFilter === tab 
                    ? 'bg-[#1E2C22] text-white font-medium' 
                    : 'text-[#4A5B4F] hover:text-[#1E2C22]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Curated Moments Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMoments.map(moment => (
          <div
            key={moment.id}
            onClick={() => triggerGeneration(moment.scenarioId)}
            className="group cursor-pointer bg-white rounded-2xl border border-[#E8E2D8] hover:border-[#1E2C22] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F4EFEB]">
                <img
                  src={moment.image}
                  alt={moment.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-white/90 uppercase tracking-widest">
                  {moment.category}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-editorial text-2xl text-[#1E2C22] group-hover:text-[#C85A32] transition-colors">
                  {moment.title}
                </h3>
                <p className="text-xs text-[#4A5B4F] leading-relaxed">
                  {moment.tagline}
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF8F5] border-t border-[#E8E2D8] flex items-center justify-between text-xs font-semibold text-[#1E2C22]">
              <span>Configure Complete Setup</span>
              <ArrowRight className="w-4 h-4 text-[#C85A32] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Featured Anchor Pieces Collection */}
      <div className="space-y-6 pt-10 border-t border-[#E8E2D8]">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
              Signature Workhorses
            </span>
            <h2 className="font-editorial text-3xl text-[#1E2C22]">
              Most Considered Foundation Pieces
            </h2>
          </div>
          <button 
            onClick={() => navigateTo('setups')}
            className="text-xs uppercase tracking-widest text-[#1E2C22] hover:text-[#C85A32] font-semibold"
          >
            View All Setups →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
};
