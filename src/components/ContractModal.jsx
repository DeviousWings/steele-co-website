import React from 'react';
import { X, Shield } from 'lucide-react';

export default function ContractModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md flex justify-center items-center p-4">
      <div className="bg-[#121216] border border-[#10b981] rounded-xl max-w-md w-full p-6 space-y-4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#94a3b8] hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#262630] pb-2">
          <span className="text-sm font-bold text-[#10b981] uppercase flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#10b981]" />
            <span>"No Data, No Fee" Guarantee</span>
          </span>
        </div>

        <div className="text-xs text-[#94a3b8] space-y-3 leading-relaxed">
          <p>
            If Steele Co. deploys a localized backup remediation vault or failover array on your property, and your system fails to perform a complete simulated recovery test during final commissioning, total labor costs are <strong className="text-white">$0</strong>.
          </p>
          <p className="text-[11px] border-t border-[#262630] pt-2 text-[#e2e8f0]">
            We hold ourselves physically accountable to standard enterprise IT recovery standards.
          </p>
        </div>

        <button onClick={onClose} className="w-full py-2 bg-[#181820] text-[#10b981] border border-[#10b981]/40 font-bold text-xs uppercase rounded hover:bg-[#22222e] transition-all">
          Acknowledge Trade Code
        </button>
      </div>
    </div>
  );
}
