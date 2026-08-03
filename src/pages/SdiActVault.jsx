import React, { useState } from 'react';
import { BookOpen, FileText, Send, Check } from 'lucide-react';
import ConstituentGenerator from '../components/ConstituentGenerator';

export default function SdiActVault({ setSdiModalOpen, setDirectiveModalOpen }) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-[#262630] pb-6 space-y-2">
        <div className="text-xs text-[#f59e0b] font-bold uppercase tracking-widest">// PUBLIC READING ROOM // REPOSITORY HUB</div>
        <h1 className="text-3xl font-black uppercase text-white">Statutory Legislative Vault & Bill Repository</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Dual Statutory Nodes */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Node 01: SDI Act */}
          <div className="bg-[#121216] border-2 border-[#f59e0b] rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#f59e0b] font-bold uppercase tracking-wider">[ NODE 01 // CONSTITUTIONAL EXTENDER ]</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30 rounded">BILL DRAFT 2026</span>
            </div>
            
            <h2 className="text-xl font-bold text-white uppercase">The Sovereign Digital Identity Act</h2>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Reclassifies personal digital telemetry as a direct physical extension of the human body under the Fourth Amendment. Codifies personal data property rights, outlaws unauthorized tracking loops, and establishes a statutory 10% gross dividend back to consumers.
            </p>

            <button
              onClick={() => setSdiModalOpen(true)}
              className="bg-[#f59e0b] hover:bg-[#d98206] text-[#0a0a0c] font-black px-4 py-2.5 rounded text-xs uppercase flex items-center gap-2 transition-all shadow-[0_0_12px_rgba(245,158,11,0.2)]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Node 01 Unabridged Statutory Text</span>
            </button>
          </div>

          {/* Node 02: Consumer Sovereignty Directive */}
          <div className="bg-[#121216] border-2 border-[#00e5ff] rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#00e5ff] font-bold uppercase tracking-wider">[ NODE 02 // STATUTORY PROPERTY ACT ]</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 rounded">DIRECTIVE 2026</span>
            </div>

            <h2 className="text-xl font-bold text-white uppercase">Consumer Sovereignty & Digital Property Rights Directive</h2>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Establishes product ownership finality. Outlaws software paywalls placed on factory-installed physical components (heated seats, thermostats), bans digital ad-trespass on user-owned RAM and bandwidth, and holds software monopolies liable for platform directory fraud.
            </p>

            <button
              onClick={() => setDirectiveModalOpen(true)}
              className="bg-[#00e5ff] hover:bg-[#00b8cc] text-[#0a0a0c] font-black px-4 py-2.5 rounded text-xs uppercase flex items-center gap-2 transition-all shadow-[0_0_12px_rgba(0,229,255,0.2)]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Node 02 Directive Text</span>
            </button>
          </div>

        </div>

        {/* Right Column: Constituent Letter Builder */}
        <div className="lg:col-span-5">
          <ConstituentGenerator />
        </div>

      </div>
    </div>
  );
}
