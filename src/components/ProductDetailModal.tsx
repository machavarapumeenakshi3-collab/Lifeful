import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Check, RefreshCw, Heart, Sparkles, Ruler, ShieldCheck } from 'lucide-react';
import { ProductImage } from './ProductImage';

export const ProductDetailModal: React.FC = () => {
  const { 
    detailProduct, 
    closeDetailModal, 
    addToSetup, 
    isProductInSetup, 
    openSwapModal, 
    toggleSaveProduct, 
    isProductSaved,
    selectedStyle,
    budgetCap,
    totalCost 
  } = useApp();

  if (!detailProduct) return null;

  const inSetup = isProductInSetup(detailProduct.id);
  const isSaved = isProductSaved(detailProduct.id);
  const withinBudget = (totalCost + detailProduct.price) <= (budgetCap * 1.15);

  return (
    <div className="fixed inset-0 z-50 bg-[#1E2C22]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={closeDetailModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#1E2C22] shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image Showcase */}
          <div className="md:col-span-6 bg-[#F4EFEB] relative aspect-square md:aspect-auto">
            <ProductImage
              src={detailProduct.image}
              alt={detailProduct.name}
              category={detailProduct.category}
              className="w-full h-full"
            />
            <button
              onClick={() => toggleSaveProduct(detailProduct.id)}
              className="absolute top-4 left-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1E2C22] transition-colors shadow-sm"
              aria-label="Save product"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#C85A32] text-[#C85A32]' : ''}`} />
            </button>
          </div>

          {/* Right Column: Thoughtful Product Context */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Category & Status */}
              <div className="flex items-center gap-2 text-xs text-[#4A5B4F]">
                <span className="uppercase tracking-widest font-semibold text-[#1E2C22]">
                  {detailProduct.category}
                </span>
                <span>·</span>
                <span className="text-[#C85A32] font-medium">Fits your setup ✓</span>
              </div>

              {/* Title & Price */}
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E2C22] leading-tight">
                  {detailProduct.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-xl font-bold text-[#1E2C22] tabular-nums font-mono">
                    ₹{detailProduct.price.toLocaleString('en-IN')}
                  </span>
                  {detailProduct.originalPrice && (
                    <span className="text-sm text-[#4A5B4F] line-through tabular-nums font-mono">
                      ₹{detailProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>

              {/* WHY WE PICKED THIS Signature Section */}
              <div className="bg-white p-4 rounded-xl border border-[#E8E2D8] space-y-2">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1E2C22]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Why We Picked This</span>
                </div>
                <p className="text-xs text-[#4A5B4F] leading-relaxed">
                  {detailProduct.reason}
                </p>
                <p className="text-xs text-[#4A5B4F]/90 leading-relaxed pt-1">
                  {detailProduct.description}
                </p>
              </div>

              {/* Compatibility Check Matrix */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#E8E2D8]/60">
                  <span className="text-[#4A5B4F]">Space Compatibility</span>
                  <span className="font-medium text-[#1E2C22]">{detailProduct.spaceCompatibility}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E8E2D8]/60">
                  <span className="text-[#4A5B4F]">Budget Compatibility</span>
                  <span className={`font-medium ${withinBudget ? 'text-[#1E2C22]' : 'text-[#C85A32]'}`}>
                    {withinBudget ? 'Aligned with budget plan ✓' : 'Exceeds target budget range'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E8E2D8]/60">
                  <span className="text-[#4A5B4F]">Style Aesthetic</span>
                  <span className="font-medium text-[#1E2C22] capitalize">
                    {detailProduct.styles.join(', ')}
                  </span>
                </div>
                {detailProduct.dimensions && (
                  <div className="flex items-center justify-between py-1 border-b border-[#E8E2D8]/60">
                    <span className="text-[#4A5B4F]">Dimensions</span>
                    <span className="font-medium text-[#1E2C22]">{detailProduct.dimensions}</span>
                  </div>
                )}
                {detailProduct.materials && (
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#4A5B4F]">Materials</span>
                    <span className="font-medium text-[#1E2C22]">{detailProduct.materials}</span>
                  </div>
                )}
              </div>

              {/* Specifications pills/bullets */}
              {detailProduct.specs && (
                <div className="space-y-1 pt-1">
                  {detailProduct.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#4A5B4F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E2C22]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Bottom Primary Actions */}
            <div className="pt-6 mt-6 border-t border-[#E8E2D8] flex items-center gap-3">
              {detailProduct.alternatives && detailProduct.alternatives.length > 0 && (
                <button
                  onClick={() => {
                    closeDetailModal();
                    openSwapModal(detailProduct);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#E8E2D8] bg-white hover:bg-[#F4EFEB] text-[#1E2C22] text-xs font-semibold tracking-wide transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Swap Piece</span>
                </button>
              )}

              <button
                onClick={() => {
                  addToSetup(detailProduct);
                  closeDetailModal();
                }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm ${
                  inSetup 
                    ? 'bg-[#1E2C22] text-white' 
                    : 'bg-[#1E2C22] hover:bg-[#2D4233] text-white'
                }`}
              >
                {inSetup ? (
                  <>
                    <Check className="w-4 h-4 text-[#C85A32]" />
                    <span>In My Setup</span>
                  </>
                ) : (
                  <>
                    <span>Add to My Setup</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
