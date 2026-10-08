import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const GenerationLoader: React.FC = () => {
  const { isGenerating, generationStep, currentScenario, heroPromptText } = useApp();

  if (!isGenerating) return null;

  const steps = [
    { num: 1, title: 'Reading your moment...', desc: 'Parsing room dimensions, lighting constraints, and intent' },
    { num: 2, title: 'Understanding your space...', desc: 'Eliminating bulky furniture, ensuring circulation pathways' },
    { num: 3, title: 'Curating your essentials...', desc: 'Harmonizing warm textures, oak grains, and proportions' },
    { num: 4, title: 'Building your setup...', desc: 'Calibrating budget tiers and unearthing forgotten essentials' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF8F5]/96 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E2D8] shadow-2xl relative overflow-hidden">
        
        {/* Subtle top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E2C22] via-[#C85A32] to-[#1E2C22]" />

        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#F4EFEB] flex items-center justify-center text-[#1E2C22] mb-4 border border-[#E8E2D8]">
            <Compass className="w-6 h-6 animate-spin duration-1000" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-[#C85A32] font-semibold">
            lifeful engine
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E2C22] mt-1">
            Assembling Your World
          </h3>
          <p className="text-xs text-[#4A5B4F] mt-2 italic px-4 line-clamp-2">
            "{heroPromptText || currentScenario.promptExample}"
          </p>
        </div>

        {/* 4 Generation Steps */}
        <div className="space-y-4">
          {steps.map(step => {
            const isCompleted = generationStep > step.num;
            const isCurrent = generationStep === step.num;
            const isPending = generationStep < step.num;

            return (
              <div 
                key={step.num}
                className={`p-3 rounded-xl transition-all border ${
                  isCurrent 
                    ? 'bg-[#F4EFEB] border-[#1E2C22]/30 scale-[1.02]' 
                    : isCompleted
                    ? 'bg-white border-[#E8E2D8] opacity-80'
                    : 'bg-white/40 border-transparent opacity-40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-[#1E2C22]" />
                    ) : isCurrent ? (
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#C85A32] border-t-transparent animate-spin inline-block" />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full border border-[#4A5B4F]/30 inline-block" />
                    )}
                  </div>
                  <div>
                    <h5 className={`text-xs font-semibold ${isCurrent ? 'text-[#1E2C22]' : 'text-[#4A5B4F]'}`}>
                      {step.title}
                    </h5>
                    <p className="text-[11px] text-[#4A5B4F]/80 leading-tight mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-[11px] text-[#4A5B4F] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#C85A32]" />
          <span>Configuring {currentScenario.title} setup</span>
        </div>

      </div>
    </div>
  );
};
