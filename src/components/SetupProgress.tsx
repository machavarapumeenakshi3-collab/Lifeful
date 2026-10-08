import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const SetupProgress: React.FC = () => {
  const { currentScenario, activeItems, completionRate, navigateTo } = useApp();

  const essentialsCount = activeItems.filter(i => i.product.priority === 'must-have').length;
  const optionalCount = activeItems.filter(i => i.product.priority !== 'must-have').length;
  const missingCount = Math.max(0, 8 - essentialsCount);

  return (
    <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E2D8] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
      
      {/* Left: Headline & Percentage Ring/Bar */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-[#4A5B4F] font-semibold">
            Setup Readiness
          </span>
          <span className="text-xs text-[#E8E2D8]">·</span>
          <span className="text-[11px] text-[#C85A32] font-semibold">
            {completionRate >= 80 ? 'Move-In Ready' : 'In Assembly'}
          </span>
        </div>

        <div className="flex items-baseline gap-3">
          <h3 className="font-editorial text-3xl sm:text-4xl text-[#1E2C22]">
            {currentScenario.title}
          </h3>
          <span className="font-editorial text-3xl sm:text-4xl text-[#C85A32] tabular-nums">
            {completionRate}% Ready
          </span>
        </div>

        <p className="text-xs text-[#4A5B4F] max-w-md">
          {completionRate >= 80 
            ? 'Essential dimensions and daily rituals accounted for. You have a fully cohesive living environment.'
            : 'A few fundamental pieces are still missing to achieve complete daily flow and storage harmony.'
          }
        </p>
      </div>

      {/* Right: Metrics Trio */}
      <div className="flex items-center gap-4 sm:gap-6 border-t md:border-t-0 md:border-l border-[#E8E2D8] pt-4 md:pt-0 md:pl-8">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-medium">
            Essentials
          </div>
          <div className="text-xl font-bold text-[#1E2C22] tabular-nums font-mono mt-0.5">
            {essentialsCount} / 8
          </div>
          <div className="text-[10px] text-[#2D6A4F] flex items-center gap-1 mt-0.5">
            <CheckCircle2 className="w-2.5 h-2.5" />
            <span>Anchored</span>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-[#E8E2D8]" />

        <div>
          <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-medium">
            Optional
          </div>
          <div className="text-xl font-bold text-[#1E2C22] tabular-nums font-mono mt-0.5">
            {optionalCount}
          </div>
          <div className="text-[10px] text-[#4A5B4F] mt-0.5">
            Atmosphere
          </div>
        </div>

        <div className="h-8 w-[1px] bg-[#E8E2D8]" />

        <div>
          <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-medium">
            Missing
          </div>
          <div className="text-xl font-bold text-[#C85A32] tabular-nums font-mono mt-0.5">
            {missingCount}
          </div>
          <div className="text-[10px] text-[#C85A32] mt-0.5">
            Recommendations
          </div>
        </div>
      </div>

    </div>
  );
};
