import React from 'react';
import CloudRoiCalculator from '../components/CloudRoiCalculator';

export default function CloudRoi({ setQuoteModalOpen }) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-[#262630] pb-6 space-y-2">
        <div className="text-xs text-[#00e5ff] font-bold uppercase tracking-widest">// FINANCIAL MODEL</div>
        <h1 className="text-3xl font-black uppercase text-white">Cloud Bleed vs. Fixed On-Prem ROI Calculator</h1>
      </div>

      <CloudRoiCalculator setQuoteModalOpen={setQuoteModalOpen} />
    </div>
  );
}
