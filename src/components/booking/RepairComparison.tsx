'use client';

import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui';

interface RepairOptionProps {
  type: 'Standard' | 'Premium';
  features: string[];
  recommended?: boolean;
}

function RepairOption({ type, features, recommended }: RepairOptionProps) {
  return (
    <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
      recommended 
        ? 'border-primary bg-primary/5 shadow-xl scale-105 z-10' 
        : 'border-gray-100 bg-white hover:border-gray-200'
    }`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
          Recommended
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className={`text-xl font-black uppercase tracking-tighter ${recommended ? 'text-primary' : 'text-secondary'}`}>
          {type}
        </h3>
        <div className="mt-2 flex items-baseline justify-center gap-1">
          <span className="text-sm font-bold text-gray-400">Custom Quote Provided</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600">
            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={recommended ? 'primary' : 'outline'} 
        className="w-full py-4 text-xs font-black uppercase tracking-widest"
      >
        Select {type}
      </Button>
    </div>
  );
}

export function RepairComparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto py-12">
      <RepairOption 
        type="Standard"
        features={[
          'High Quality Replacement Screen',
          '90-Day Warranty',
          'Same-Day Service',
          'Professional Installation',
          'Basic Point Check'
        ]}
      />
      <RepairOption 
        type="Premium"
        recommended
        features={[
          'Original Manufacturer (OEM) Part',
          '12-Month Warranty',
          'Express 1-Hour Service',
          'Water Resistance Restoration',
          'Full 40-Point Technical Diagnostic'
        ]}
      />
    </div>
  );
}

