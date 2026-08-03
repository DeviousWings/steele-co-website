import React, { useState, useMemo } from 'react';
import { DollarSign, Shield } from 'lucide-react';

export default function CloudRoiCalculator({ setQuoteModalOpen }) {
  const [cloudStorage, setCloudStorage] = useState(45);
  const [saasAi, setSaasAi] = useState(60);
  const [securityCloud, setSecurityCloud] = useState(35);
  const [years, setYears] = useState(3);

  const calculations = useMemo(() => {
    const monthlyBleed = Number(cloudStorage) + Number(saasAi) + Number(securityCloud);
    const totalBleed = monthlyBleed * 12 * Number(years);
    const steeleCost = 7800; // SOHO Vault Rack baseline
    const netSavings = totalBleed - steeleCost;

    return { monthlyBleed, totalBleed, netSavings };
  }, [cloudStorage, saasAi, securityCloud, years]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Controls */}
      <div className="lg:col-span-7 bg-[#121216] border border-[#262630] rounded-xl p-6 space-y-6">
        <div className="text-sm font-bold text-white uppercase border-b border-[#262630] pb-3">
          1. Monthly Recurring Cloud Expense Bleed
        </div>

        <div className="space-y-4 text-xs">
          <div>
            <div className="flex justify-between font-bold mb-1">
              <span>Cloud Storage Subscriptions</span>
              <span className="text-[#00e5ff]">${cloudStorage}/mo</span>
            </div>
            <input 
              type="range" min="0" max="200" value={cloudStorage} 
              onChange={(e) => setCloudStorage(e.target.value)}
              className="w-full accent-[#00e5ff]"
            />
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1">
              <span>SaaS AI & API Tokens</span>
              <span className="text-[#00e5ff]">${saasAi}/mo</span>
            </div>
            <input 
              type="range" min="0" max="300" value={saasAi} 
              onChange={(e) => setSaasAi(e.target.value)}
              className="w-full accent-[#00e5ff]"
            />
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1">
              <span>Security & Camera Cloud Fees</span>
              <span className="text-[#00e5ff]">${securityCloud}/mo</span>
            </div>
            <input 
              type="range" min="0" max="150" value={securityCloud} 
              onChange={(e) => setSecurityCloud(e.target.value)}
              className="w-full accent-[#00e5ff]"
            />
          </div>

          <div className="pt-4 border-t border-[#262630]">
            <div className="flex justify-between font-bold mb-1">
              <span>Projection Horizon Timeline</span>
              <span className="text-[#f59e0b]">{years} Years</span>
            </div>
            <input 
              type="range" min="1" max="5" value={years} 
              onChange={(e) => setYears(e.target.value)}
              className="w-full accent-[#f59e0b]"
            />
          </div>
        </div>
      </div>

      {/* ROI Output */}
      <div className="lg:col-span-5 bg-[#181820] border-2 border-[#00e5ff] rounded-xl p-6 space-y-6 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="text-xs text-[#00e5ff] font-bold uppercase tracking-wider">// FINANCIAL OUTCOME</div>
          
          <div className="space-y-1 border-b border-[#262630] pb-4">
            <div className="text-xs text-[#94a3b8]">Total Projected Cloud Bleed:</div>
            <div className="text-3xl font-black text-[#ef4444]">${calculations.totalBleed.toLocaleString()}</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-[#94a3b8]">One-Time Fixed Steele Co. SOHO Build:</div>
            <div className="text-xl font-bold text-white">$7,800</div>
          </div>

          <div className="p-3 bg-[#10b981]/10 border border-[#10b981]/30 rounded">
            <div className="text-[10px] text-[#10b981] font-bold uppercase">Estimated Net Capital Saved</div>
            <div className="text-2xl font-black text-[#10b981]">${calculations.netSavings.toLocaleString()}</div>
          </div>
        </div>

        <button
          onClick={() => setQuoteModalOpen(true)}
          className="w-full py-3.5 bg-[#00e5ff] hover:bg-[#00b8cc] text-[#0a0a0c] font-black text-xs uppercase rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] flex justify-center items-center gap-2"
        >
          <Shield className="w-4 h-4" />
          <span>Lock In Fixed On-Prem Hardware</span>
        </button>
      </div>
    </div>
  );
}
