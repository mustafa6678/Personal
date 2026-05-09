'use client';

import { Check } from 'lucide-react';
import { cn } from '@/components/ui';

interface Step {
  id: number;
  name: string;
}

const steps: Step[] = [
  { id: 1, name: 'Select Your Device' },
  { id: 2, name: 'Repair Type' },
  { id: 3, name: 'Fixing Way' },
  { id: 4, name: 'Book repair' },
];

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full py-4 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          {steps.map((step) => {
            const isActive = step.id <= currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center group">
                <div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isActive 
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-white border-gray-300 text-gray-400"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 md:w-5 md:h-5 stroke-[3]" />
                  ) : (
                    <span className="text-xs md:text-sm font-bold">{step.id}</span>
                  )}
                </div>
                <span className={cn(
                  "absolute top-full mt-2 text-[10px] md:text-xs font-bold uppercase tracking-tight whitespace-nowrap transition-colors duration-300",
                  isActive ? "text-primary" : "text-gray-400"
                )}>
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
