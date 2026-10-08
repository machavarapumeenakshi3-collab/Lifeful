import React, { useState } from 'react';
import { 
  Bed, 
  Lamp, 
  Coffee, 
  UtensilsCrossed, 
  Sparkles, 
  Briefcase, 
  Armchair, 
  Music, 
  GlassWater, 
  Flame, 
  Dumbbell, 
  Dog, 
  Luggage,
  Package,
  Layers
} from 'lucide-react';

interface ProductImageProps {
  src: string;
  alt: string;
  category?: string;
  className?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  category = '',
  className = ''
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getCategoryIcon = () => {
    const lower = (category + ' ' + alt).toLowerCase();
    if (lower.includes('bed') || lower.includes('sleep') || lower.includes('linen') || lower.includes('quilt')) {
      return <Bed className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('lamp') || lower.includes('light')) {
      return <Lamp className="w-10 h-10 text-[#C85A32]/70" />;
    }
    if (lower.includes('kettle') || lower.includes('mug') || lower.includes('sipper') || lower.includes('flask')) {
      return <Coffee className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('pan') || lower.includes('skillet') || lower.includes('kitchen') || lower.includes('glass')) {
      return <UtensilsCrossed className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('desk') || lower.includes('stand') || lower.includes('pegboard') || lower.includes('study')) {
      return <Briefcase className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('chair') || lower.includes('stool')) {
      return <Armchair className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('audio') || lower.includes('speaker') || lower.includes('headphone')) {
      return <Music className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('glass') || lower.includes('cocktail') || lower.includes('serving')) {
      return <GlassWater className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('candle')) {
      return <Flame className="w-10 h-10 text-[#C85A32]/70" />;
    }
    if (lower.includes('mat') || lower.includes('roller') || lower.includes('fitness') || lower.includes('bands')) {
      return <Dumbbell className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('pet') || lower.includes('dog') || lower.includes('puppy') || lower.includes('leash')) {
      return <Dog className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    if (lower.includes('travel') || lower.includes('duffel') || lower.includes('dopp')) {
      return <Luggage className="w-10 h-10 text-[#4A5B4F]/60" />;
    }
    return <Package className="w-10 h-10 text-[#4A5B4F]/60" />;
  };

  return (
    <div className={`relative w-full h-full bg-[#F4EFEB] overflow-hidden flex items-center justify-center ${className}`}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : null}

      {(hasError || !src || isLoading) && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FAF8F5] via-[#F4EFEB] to-[#E8E2D8] text-center ${!isLoading && !hasError ? 'hidden' : ''}`}>
          {getCategoryIcon()}
          <span className="font-editorial text-sm text-[#1E2C22] mt-2 line-clamp-1 italic px-2">
            {alt}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[#4A5B4F] mt-0.5 font-medium">
            {category || 'Considered Piece'}
          </span>
        </div>
      )}
    </div>
  );
};
