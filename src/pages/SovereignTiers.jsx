import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, Shield, Check } from 'lucide-react';
import { tiers, upgradeOptions, storagePrices } from '../data/tiersData';

export default function SovereignTiers({ setQuoteModalOpen }) {
  const [selectedTier, setSelectedTier] = useState('tier2');
  const [selectedUpgrades, setSelectedUpgrades] = useState({
    upsUpgrade: true,
    dualGpu: true,
    liquidCooling: true,
    acousticPanels: true,
    tenGbSwitch: true,
    storageCapacity: '32TB'
  });

  const activeTierData = tiers.find(t => t.id === selectedTier) || tiers[1];

  const calculateTotal = useMemo(() => {
    let total = activeTierData.basePrice;
    if (selectedUpgrades.upsUpgrade) total += upgradeOptions.upsUpgrade;
    if (selectedUpgrades.dualGpu) total += upgradeOptions.dualGpu;
    if (selectedUpgrades.liquidCooling) total += upgradeOptions.liquidCooling;
    if (selectedUpgrades.acousticPanels) total += upgradeOptions.acousticPanels;
    if (selectedUpgrades.tenGbSwitch) total += upgradeOptions.tenGbSwitch;
    total += storagePrices[selectedUpgrades.storageCapacity] || 0;
    return total;
  }, [selectedTier, selectedUpgrades, activeTierData]);

  const toggleUpgrade = (key) => {
    setSelectedUpgrades(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-[#262630] pb-6 space-y-2">
        <div className="text-xs text-[#00e5ff] font-bold uppercase tracking-widest">// INFRASTRUCTURE CATALOG</div>
        <h1 className="text-3xl font-black uppercase text-white">Sovereign Deployment Tiers & Hardware BOM</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Configurator Controls */}
        <div className="lg:col-span-7 bg-[#121216] border border-[#262630] rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#262630] pb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white uppercase">
              <SlidersHorizontal className="w-4 h-4 text-[#00e5ff]" />
              <span>Interactive Bill of Materials Configurator</span>
            </div>
            <span className="text-xs text-[#94a3b8]">Live Price Matrix</span>
          </div>

          {/* Step 1: Baseline Tier Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#94a3b8] uppercase">1. Select Baseline Chassis Platform</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {tiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`p-3 rounded text-left border transition-all text-xs ${
                    selectedTier === t.id
                      ? 'bg-[#181820] border-[#00e5ff] text-white shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                      : 'bg-[#0a0a0c] border-[#262630] text-[#94a3b8] hover:border-[#94a3b8]'
                  }`}
                >
                  <div className="font-bold">{t.name}</div>
                  <div className="text-[10px] text-[#00e5ff] mt-1">Base: ${t.basePrice.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Component Upgrades */}
          <div className="space-y-3 border-t border-[#262630] pt-4">
            <label className="text-xs font-bold text-[#94a3b8] uppercase">2. Hardware Options & Modules</label>
            <div className="space-y-2 text-xs">
              
              <label className="p-3 rounded border border-[#262630] bg-[#0a0a0c] flex justify-between items-center cursor-pointer hover:border-[#00e5ff]/50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedUpgrades.upsUpgrade}
                    onChange={() => toggleUpgrade('upsUpgrade')}
                    className="accent-[#00e5ff]"
                  />
                  <div>
                    <span className="font-bold text-white">Smart-UPS Battery Backup</span>
                    <div className="text-[10px] text-[#94a3b8]">1500VA battery with graceful auto-shutdown script</div>
                  </div>
                </div>
                <span className="text-[#00e5ff] font-bold">+${upgradeOptions.upsUpgrade}</span>
              </label>

              <label className="p-3 rounded border border-[#262630] bg-[#0a0a0c] flex justify-between items-center cursor-pointer hover:border-[#00e5ff]/50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedUpgrades.dualGpu}
                    onChange={() => toggleUpgrade('dualGpu')}
                    className="accent-[#00e5ff]"
                  />
                  <div>
                    <span className="font-bold text-white">Dual-GPU AI Compute Node</span>
                    <div className="text-[10px] text-[#94a3b8]">48GB total VRAM for offline LLM & vision models</div>
                  </div>
                </div>
                <span className="text-[#00e5ff] font-bold">+${upgradeOptions.dualGpu.toLocaleString()}</span>
              </label>

              <label className="p-3 rounded border border-[#262630] bg-[#0a0a0c] flex justify-between items-center cursor-pointer hover:border-[#00e5ff]/50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedUpgrades.liquidCooling}
                    onChange={() => toggleUpgrade('liquidCooling')}
                    className="accent-[#00e5ff]"
                  />
                  <div>
                    <span className="font-bold text-white">Closed-Loop Liquid Thermal Array</span>
                    <div className="text-[10px] text-[#94a3b8]">Ultra-quiet thermal system rated for continuous high loads</div>
                  </div>
                </div>
                <span className="text-[#00e5ff] font-bold">+${upgradeOptions.liquidCooling.toLocaleString()}</span>
              </label>

            </div>
          </div>
        </div>

        {/* Right Column: Hardware Summary & Booking */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#181820] border-2 border-[#00e5ff] rounded-xl p-6 space-y-6">
            <div className="border-b border-[#262630] pb-4 flex justify-between items-center">
              <div>
                <div className="text-xs text-[#00e5ff] font-bold uppercase">ESTIMATED INVESTMENT</div>
                <div className="text-3xl font-black text-white mt-1">${calculateTotal.toLocaleString()}</div>
              </div>
              <span className="text-[10px] px-2 py-1 bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40 font-bold uppercase">
                Fixed Pricing
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="font-bold text-white uppercase text-[11px]">// Selected Base: {activeTierData.name}</div>
              <p className="text-[#94a3b8] leading-relaxed">{activeTierData.description}</p>
              
              <div className="space-y-1.5 pt-2">
                {activeTierData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#e2e8f0]">
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="w-full py-3.5 bg-[#00e5ff] hover:bg-[#00b8cc] text-[#0a0a0c] font-black text-xs uppercase rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] flex justify-center items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>Request Installation Intake</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
