import React from 'react';
import { AlertTriangle, ChevronRight, FileText, CheckCircle, Shield } from 'lucide-react';
import TerminalMonitor from '../components/TerminalMonitor';

export default function Home({ setActiveTab, setQuoteModalOpen }) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#262630] pb-16">
        
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ANTI-CLOUD // PHYSICAL PROPERTY ADVOCACY</span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight uppercase text-white">
            If your data lives on their cloud, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-white to-[#00e5ff]">
              you don’t really own your life.
            </span>
          </h1>

          <p className="text-[#94a3b8] text-base leading-relaxed">
            Elite physical infrastructure builds for the data sovereignty era. We design, wire, and deploy whisper-quiet private server racks, armored local firewalls, and self-hosted storage vaults. Zero predatory subscriptions. Zero corporate tracking loops. Absolute physical containment.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => setActiveTab('tiers')} 
              className="bg-[#00e5ff] text-[#0a0a0c] font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider hover:bg-[#00b8cc] transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-2"
            >
              <span>View Flat-Rate Sovereign Tiers</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setActiveTab('sdi-vault')} 
              className="bg-[#181820] hover:bg-[#22222e] text-[#e2e8f0] border border-[#262630] font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#f59e0b]" />
              <span>Read SDI Act Vault (2026)</span>
            </button>
          </div>

          {/* Core Trade Commitments */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#262630]/60 text-xs">
            <div>
              <div className="text-white font-bold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Fixed Pricing</span>
              </div>
              <div className="text-[11px] text-[#94a3b8] mt-0.5">Published hardware BOM & labor sheets.</div>
            </div>
            <div>
              <div className="text-white font-bold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span>No Data, No Fee</span>
              </div>
              <div className="text-[11px] text-[#94a3b8] mt-0.5">Zero charge if recovery verification fails.</div>
            </div>
            <div>
              <div className="text-white font-bold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#10b981]" />
                <span>100% Local</span>
              </div>
              <div className="text-[11px] text-[#94a3b8] mt-0.5">Zero external telemetry reliance.</div>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Component */}
        <div className="lg:col-span-5">
          <TerminalMonitor />
        </div>

      </div>
    </div>
  );
}
