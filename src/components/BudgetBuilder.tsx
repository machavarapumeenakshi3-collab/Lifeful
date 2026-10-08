import React from 'react';
import { useApp } from '../context/AppContext';
import { Sliders, Sparkles, AlertCircle, X, CheckCircle2 } from 'lucide-react';

export const BudgetBuilder: React.FC = () => {
  const { 
    budgetCap, 
    setBudgetCap, 
    totalCost, 
    optimizeForBudget, 
    budgetOptimizationMessage, 
    clearOptimizationMessage,
    activeItems 
  } = useApp();

  const presets = [10000, 15000, 20000, 30000];

  const percentageUsed = Math.min(100, Math.round((totalCost / budgetCap) * 100));
  const isOverBudget = totalCost > budgetCap;

  // Breakdown of costs by priority
  const essentialsCost = activeItems
    .filter(i => i.product.priority === 'must-have')
    .reduce((sum, i) => sum + (i.product.price * i.quantity), 0);

  const comfortCost = activeItems
    .filter(i => i.product.priority === 'nice-to-have')
    .reduce((sum, i) => sum + (i.product.price * i.quantity), 0);

  const optionalCost = activeItems
    .filter(i => i.product.priority === 'later')
    .reduce((sum, i) => sum + (i.product.price * i.quantity), 0);

  const handlePresetClick = (amount: number) => {
    optimizeForBudget(amount);
  };

  const handleCustomSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    optimizeForBudget(val);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-8 space-y-6">
      
      {/* Title & Preset Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#C85A32] font-semibold">
            Financial Calibration
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E2C22]">
            What’s Your Budget?
          </h3>
        </div>

        {/* Preset Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {presets.map(amount => (
            <button
              key={amount}
              onClick={() => handlePresetClick(amount)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tabular-nums transition-all ${
                budgetCap === amount
                  ? 'bg-[#1E2C22] text-[#FAF8F5] shadow-sm'
                  : 'bg-[#F4EFEB] text-[#1E2C22] hover:bg-[#E8E2D8]'
              }`}
            >
              ₹{amount.toLocaleString('en-IN')}
            </button>
          ))}
        </div>
      </div>

      {/* Progress & Live Gauge */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-editorial text-3xl sm:text-4xl text-[#1E2C22] tabular-nums font-mono">
              ₹{totalCost.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-[#4A5B4F]">
              / ₹{budgetCap.toLocaleString('en-IN')} cap
            </span>
          </div>

          <span className={`text-xs font-semibold ${isOverBudget ? 'text-[#C85A32]' : 'text-[#2D6A4F]'}`}>
            {percentageUsed}% Allocated
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-[#F4EFEB] rounded-full overflow-hidden p-0.5 border border-[#E8E2D8]">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              isOverBudget ? 'bg-[#C85A32]' : 'bg-[#1E2C22]'
            }`}
            style={{ width: `${percentageUsed}%` }}
          />
        </div>
      </div>

      {/* Custom Budget Slider */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-xs text-[#4A5B4F] mb-1">
          <span>Fine-tune Cap</span>
          <span className="font-mono text-[#1E2C22] font-semibold">
            ₹{budgetCap.toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min="8000"
          max="45000"
          step="500"
          value={budgetCap}
          onChange={handleCustomSliderChange}
          className="w-full accent-[#1E2C22] cursor-pointer"
        />
      </div>

      {/* Three-Tier Cost Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E8E2D8]">
        <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8]">
          <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-semibold">
            Essentials
          </div>
          <div className="text-base font-bold text-[#1E2C22] tabular-nums font-mono mt-0.5">
            ₹{essentialsCost.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-[#4A5B4F] mt-0.5">Core functional pieces</div>
        </div>

        <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8]">
          <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-semibold">
            Comfort
          </div>
          <div className="text-base font-bold text-[#1E2C22] tabular-nums font-mono mt-0.5">
            ₹{comfortCost.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-[#4A5B4F] mt-0.5">Ergonomics & textiles</div>
        </div>

        <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8]">
          <div className="text-[10px] uppercase tracking-wider text-[#4A5B4F] font-semibold">
            Optional / Later
          </div>
          <div className="text-base font-bold text-[#1E2C22] tabular-nums font-mono mt-0.5">
            ₹{optionalCost.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-[#4A5B4F] mt-0.5">Accents & atmosphere</div>
        </div>
      </div>

      {/* Dynamic Optimization Notice */}
      {budgetOptimizationMessage && (
        <div className="p-3.5 bg-[#FAF8F5] border border-[#C85A32]/30 rounded-xl flex items-start justify-between gap-3 animate-in fade-in duration-300">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#C85A32] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#1E2C22] leading-relaxed">
              {budgetOptimizationMessage}
            </p>
          </div>
          <button
            onClick={clearOptimizationMessage}
            className="text-[#4A5B4F] hover:text-[#1E2C22] p-0.5"
            aria-label="Dismiss optimization notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {isOverBudget && !budgetOptimizationMessage && (
        <div className="p-3 bg-[#FAF8F5] border border-[#C85A32]/40 rounded-xl flex items-center justify-between text-xs text-[#C85A32]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Currently ₹{(totalCost - budgetCap).toLocaleString('en-IN')} over target cap.</span>
          </div>
          <button
            onClick={() => optimizeForBudget(budgetCap)}
            className="px-2.5 py-1 bg-[#C85A32] text-white rounded-md font-medium text-[11px] hover:bg-[#B54D27] transition-colors"
          >
            Auto Optimize
          </button>
        </div>
      )}

    </div>
  );
};
