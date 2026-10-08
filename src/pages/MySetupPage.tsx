import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Trash2, 
  RefreshCw, 
  Heart, 
  ArrowRight, 
  Plus, 
  Minus, 
  Sparkles, 
  CheckCircle2, 
  ShoppingBag,
  PackageCheck,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { ProductImage } from '../components/ProductImage';

export const MySetupPage: React.FC = () => {
  const { 
    currentScenario, 
    activeItems, 
    updateQuantity, 
    removeFromSetup, 
    openSwapModal, 
    openDetailModal, 
    toggleSaveProduct, 
    totalCost, 
    budgetCap,
    completionRate,
    navigateTo 
  } = useApp();

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Group items by category
  const categories = Array.from(new Set(activeItems.map(i => i.product.category)));

  // Calculate cost per category
  const categoryCosts = categories.map(cat => {
    const sum = activeItems
      .filter(i => i.product.category === cat)
      .reduce((acc, i) => acc + (i.product.price * i.quantity), 0);
    return { category: cat, cost: sum };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E8E2D8]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5B4F] font-semibold">
            <span>Lifestyle Blueprint</span>
            <span>·</span>
            <span className="text-[#C85A32]">{currentScenario.title}</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl text-[#1E2C22] mt-2">
            My Complete Setup
          </h1>
          <p className="text-xs sm:text-sm text-[#4A5B4F] mt-1">
            {activeItems.length} intentionally assembled pieces ready for your transition.
          </p>
        </div>

        <div className="flex items-baseline gap-3 text-right">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F]">Estimated Investment</div>
            <div className="text-3xl font-bold font-mono text-[#1E2C22] tabular-nums">
              ₹{totalCost.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </div>

      {activeItems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#E8E2D8] p-12 text-center space-y-4 max-w-lg mx-auto">
          <ShoppingBag className="w-12 h-12 text-[#4A5B4F]/40 mx-auto" />
          <h3 className="font-editorial text-2xl text-[#1E2C22]">Your setup is currently empty</h3>
          <p className="text-xs text-[#4A5B4F]">
            Browse our curated moments or build a new lifestyle configuration to start adding pieces.
          </p>
          <button
            onClick={() => navigateTo('setup', { scenarioId: currentScenario.id })}
            className="px-6 py-3 rounded-xl bg-[#1E2C22] text-white text-xs uppercase tracking-widest font-semibold"
          >
            Return to Setup Builder
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Itemized Setup List */}
          <div className="lg:col-span-8 space-y-8">
            {categories.map(category => {
              const catItems = activeItems.filter(i => i.product.category === category);
              const catTotal = catItems.reduce((acc, i) => acc + (i.product.price * i.quantity), 0);

              return (
                <div key={category} className="bg-white rounded-2xl border border-[#E8E2D8] p-6 space-y-4">
                  
                  {/* Category Header with Subtotal */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1E2C22]" />
                      <h3 className="text-xs uppercase tracking-widest font-bold text-[#1E2C22]">
                        {category} ({catItems.length})
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1E2C22] tabular-nums">
                      ₹{catTotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Category Products */}
                  <div className="divide-y divide-[#E8E2D8]/60">
                    {catItems.map(item => (
                      <div key={item.product.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        
                        <div className="flex items-center gap-4 flex-1">
                          <div 
                            className="w-16 h-16 rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
                            onClick={() => openDetailModal(item.product)}
                          >
                            <ProductImage
                              src={item.product.image}
                              alt={item.product.name}
                              category={item.product.category}
                            />
                          </div>
                          <div>
                            <h4 
                              onClick={() => openDetailModal(item.product)}
                              className="text-xs sm:text-sm font-bold text-[#1E2C22] hover:text-[#C85A32] cursor-pointer transition-colors line-clamp-1"
                            >
                              {item.product.name}
                            </h4>
                            <div className="text-[11px] text-[#C85A32] mt-0.5">
                              {item.product.spaceCompatibility}
                            </div>
                            <div className="text-xs font-mono font-semibold text-[#1E2C22] tabular-nums mt-1">
                              ₹{item.product.price.toLocaleString('en-IN')} each
                            </div>
                          </div>
                        </div>

                        {/* Controls: Quantity, Swap, Save, Remove */}
                        <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E8E2D8]">
                          
                          {/* Quantity Stepper */}
                          <div className="flex items-center border border-[#E8E2D8] rounded-lg bg-[#FAF8F5]">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 text-[#4A5B4F] hover:text-[#1E2C22] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-mono font-semibold text-[#1E2C22] tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 text-[#4A5B4F] hover:text-[#1E2C22] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="text-right sm:w-24">
                            <span className="text-xs sm:text-sm font-bold font-mono text-[#1E2C22] tabular-nums">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-1">
                            {item.product.alternatives && item.product.alternatives.length > 0 && (
                              <button
                                onClick={() => openSwapModal(item.product)}
                                className="p-2 text-[#4A5B4F] hover:text-[#1E2C22] hover:bg-[#F4EFEB] rounded-lg transition-colors"
                                title="Swap with alternative"
                              >
                                <RefreshCw className="w-3.5 h-3.5" />
                              </button>
                            )}

                            <button
                              onClick={() => toggleSaveProduct(item.product.id)}
                              className="p-2 text-[#4A5B4F] hover:text-[#C85A32] hover:bg-[#F4EFEB] rounded-lg transition-colors"
                              title="Save for later"
                            >
                              <Heart className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => removeFromSetup(item.product.id)}
                              className="p-2 text-[#4A5B4F] hover:text-red-700 hover:bg-[#F4EFEB] rounded-lg transition-colors"
                              title="Remove from setup"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right Column: Financial Breakdown & Complete Setup */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 space-y-6 shadow-sm">
              <h3 className="font-editorial text-2xl text-[#1E2C22]">
                Setup Summary
              </h3>

              {/* Category Breakdown */}
              <div className="space-y-2.5 text-xs">
                {categoryCosts.map(cc => (
                  <div key={cc.category} className="flex items-center justify-between text-[#4A5B4F]">
                    <span>{cc.category}</span>
                    <span className="font-mono font-medium text-[#1E2C22] tabular-nums">
                      ₹{cc.cost.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}

                <div className="pt-3 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-semibold text-[#1E2C22]">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#2D6A4F]">
                  <span>Cohesive Space Curation</span>
                  <span className="font-medium">Included ✓</span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#2D6A4F]">
                  <span>Consolidated Threshold Delivery</span>
                  <span className="font-medium">Free</span>
                </div>

                <div className="pt-3 border-t border-[#E8E2D8] flex items-baseline justify-between">
                  <span className="text-sm font-bold text-[#1E2C22]">Total Investment</span>
                  <span className="text-2xl font-bold font-mono text-[#1E2C22] tabular-nums">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Readiness status */}
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8] flex items-center justify-between text-xs">
                <span className="text-[#4A5B4F]">Move-in Readiness:</span>
                <span className="font-bold text-[#C85A32]">{completionRate}% Complete</span>
              </div>

              {/* COMPLETE MY SETUP BUTTON */}
              <button
                onClick={() => setIsCheckoutModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#1E2C22] hover:bg-[#2D4233] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Complete My Setup</span>
                <ArrowRight className="w-4 h-4 text-[#C85A32]" />
              </button>

              <p className="text-[11px] text-center text-[#4A5B4F] leading-tight">
                Consolidated batch dispatch. All pieces scheduled for simultaneous room arrival.
              </p>
            </div>

            {/* Trust markers */}
            <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] p-5 space-y-3 text-xs text-[#4A5B4F]">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#1E2C22]" />
                <span>Synchronized single-trip delivery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1E2C22]" />
                <span>30-day spatial fit & proportion guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PackageCheck className="w-4 h-4 text-[#1E2C22]" />
                <span>Zero plastic, recycled honeycomb packaging</span>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ===================== READY TO PURCHASE MODAL ===================== */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1E2C22]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#E8E2D8] max-w-lg w-full p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22] mx-auto border border-[#E8E2D8]">
                <PackageCheck className="w-7 h-7 text-[#C85A32]" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
                Setup Blueprint Locked
              </span>
              <h3 className="font-editorial text-3xl text-[#1E2C22]">
                Your {currentScenario.title} is Ready
              </h3>
              <p className="text-xs text-[#4A5B4F] max-w-sm mx-auto">
                {activeItems.length} pieces scheduled for synchronized delivery to your space.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] space-y-2 text-xs">
              <div className="flex justify-between text-[#4A5B4F]">
                <span>Total Pieces:</span>
                <span className="font-semibold text-[#1E2C22]">{activeItems.length} items</span>
              </div>
              <div className="flex justify-between text-[#4A5B4F]">
                <span>Curated Value:</span>
                <span className="font-mono font-bold text-[#1E2C22]">₹{totalCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#4A5B4F]">
                <span>Room Arrival:</span>
                <span className="text-[#2D6A4F] font-semibold">Consolidated (Friday Delivery)</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  alert('Thank you! Your Lifeful blueprint has been saved and order instructions dispatched.');
                  setIsCheckoutModalOpen(false);
                }}
                className="w-full py-4 rounded-xl bg-[#1E2C22] hover:bg-[#2D4233] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-md"
              >
                Confirm Setup & Reserve Delivery
              </button>
              <button
                onClick={() => setIsCheckoutModalOpen(false)}
                className="w-full py-2.5 text-xs text-[#4A5B4F] hover:text-[#1E2C22] font-medium"
              >
                Keep Customizing My Setup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
