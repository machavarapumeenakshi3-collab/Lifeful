import React from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Heart, RefreshCw, Plus, Check } from 'lucide-react';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    addToSetup, 
    isProductInSetup, 
    openSwapModal, 
    openDetailModal, 
    toggleSaveProduct, 
    isProductSaved,
    selectedStyle 
  } = useApp();

  const inSetup = isProductInSetup(product.id);
  const saved = isProductSaved(product.id);

  // Dynamic compatibility label based on selected style & product tags
  const styleMatch = product.styles.includes(selectedStyle);

  return (
    <div className={`group flex flex-col bg-white rounded-xl border transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
      styleMatch 
        ? 'border-[#1E2C22]/40 shadow-sm ring-1 ring-[#1E2C22]/10' 
        : 'border-[#E8E2D8] hover:border-[#1E2C22]/30'
    }`}>
      
      {/* Product Image Stage */}
      <div 
        onClick={() => openDetailModal(product)}
        className="relative w-full aspect-[4/3] bg-[#F4EFEB] overflow-hidden cursor-pointer"
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Floating Actions: Save Heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSaveProduct(product.id);
          }}
          aria-label={saved ? 'Remove from saved' : 'Save product'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
            saved 
              ? 'bg-[#C85A32] text-white shadow-sm' 
              : 'bg-white/80 text-[#1E2C22] hover:bg-white hover:text-[#C85A32]'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : 'stroke-[1.75]'}`} />
        </button>

        {/* Quick Swap Trigger Badge (Top Left) */}
        {product.alternatives && product.alternatives.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              openSwapModal(product);
            }}
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-medium text-[#1E2C22] hover:bg-[#1E2C22] hover:text-[#FAF8F5] transition-colors shadow-sm"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Swap ({product.alternatives.length})</span>
          </button>
        )}
      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs text-[#4A5B4F] mb-1.5">
            <span className="uppercase tracking-wider text-[10px] font-semibold text-[#1E2C22]/80">
              {product.category}
            </span>
            <span aria-hidden="true" className="text-[#E8E2D8]">·</span>
            <span className="text-[11px] text-[#C85A32]">
              {product.spaceCompatibility}
            </span>
            {styleMatch && (
              <>
                <span aria-hidden="true" className="text-[#E8E2D8]">·</span>
                <span className="text-[11px] text-[#1E2C22] font-medium">
                  Matches {selectedStyle}
                </span>
              </>
            )}
          </div>

          {/* Product Name */}
          <h4 
            onClick={() => openDetailModal(product)}
            className="text-sm font-semibold text-[#1E2C22] group-hover:text-[#C85A32] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h4>

          {/* Why We Picked This Reason */}
          <p className="text-xs text-[#4A5B4F] mt-1 line-clamp-2 leading-relaxed">
            {product.reason}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-[#E8E2D8] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-[#1E2C22] tabular-nums font-mono">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#4A5B4F]/70 line-through tabular-nums font-mono">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {product.alternatives && product.alternatives.length > 0 && (
              <button
                onClick={() => openSwapModal(product)}
                aria-label="Swap this product"
                className="px-2.5 py-1.5 text-xs text-[#4A5B4F] hover:text-[#1E2C22] hover:bg-[#F4EFEB] rounded-lg transition-colors"
              >
                Swap
              </button>
            )}
            
            <button
              onClick={() => addToSetup(product)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                inSetup
                  ? 'bg-[#1E2C22] text-[#FAF8F5]'
                  : 'bg-[#F4EFEB] text-[#1E2C22] hover:bg-[#1E2C22] hover:text-white'
              }`}
            >
              {inSetup ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>In Setup</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
