import React, { useState } from 'react'
import { Server, Cpu, HardDrive, ShieldCheck, Wrench, Check, Zap } from 'lucide-react'

export default function SovereignTiers({ onRequestQuote }) {
  // State to track selected care plan for each hardware tier
  const [tierCare, setTierCare] = useState({
    tier1: 'self', // 'self' ($0), 'sentinel' ($49), 'enterprise' ($149)
    tier2: 'sentinel',
    tier3: 'enterprise'
  })

  const carePrices = {
    self: { name: 'Self-Care', price: '$0/mo', desc: 'Self-managed OS & patches' },
    sentinel: { name: 'Sentinel Care', price: '$49/mo', desc: '24/7 telemetry & patch tunnels' },
    enterprise: { name: 'Enterprise Care', price: '$149/mo', desc: 'Priority swap & cluster care' }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12 text-slate-200">
      
      {/* Page Header */}
      <div className="space-y-4 border-b border-hairline pb-8">
        <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-wider">
          <Server className="w-4 h-4" />
          <span>On-Premise Infrastructure // Hardware & Service Matrix</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Sovereign Deployment Tiers
        </h1>
        <p className="text-sm text-muted max-w-3xl leading-relaxed">
          Select your physical hardware foundation and pair it with optional Zero-Trust Managed Care. You own the hardware 100%—maintenance is purely optional human labor.
        </p>
      </div>

      {/* Grid: Hardware + Care Side-by-Side per Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* ================= TIER 1 ================= */}
        <div className="bg-panel border border-hairline rounded p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            
            {/* Hardware Header */}
            <div>
              <div className="text-xs font-mono text-cyan uppercase">Tier 01 // Compact</div>
              <h3 className="text-xl font-bold text-white">Sovereign Desk Node</h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Silent, low-power desktop node for personal file vaults, local LLMs, and private journaling [cite: 6, 36-39].
              </p>
            </div>

            {/* Hardware Specs (Original BOM) */}
            <div className="space-y-2 pt-4 border-t border-hairline">
              <div className="text-[11px] font-mono text-cyan font-bold uppercase">// Physical Hardware Specs</div>
              <ul className="space-y-2 text-xs font-sans text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 24GB VRAM Unified Memory</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 2TB NVMe Storage Pool (Mirrored)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Silent Liquid Cooling (&lt;25dB)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Pre-loaded Proxmox & Ollama</li>
              </ul>
            </div>

            {/* Side-by-Side Care Plan Selector */}
            <div className="pt-4 border-t border-hairline space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-gold font-bold uppercase">// Add Managed Care</span>
                <span className="text-muted text-[10px]">Optional</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier1: 'self' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier1 === 'self' 
                      ? 'border-cyan bg-cyan/10 text-cyan font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Self</div>
                  <div>$0/mo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier1: 'sentinel' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier1 === 'sentinel' 
                      ? 'border-cyan bg-cyan/10 text-cyan font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Sentinel</div>
                  <div>+$49/mo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier1: 'enterprise' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier1 === 'enterprise' 
                      ? 'border-gold bg-gold/10 text-gold font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Enterprise</div>
                  <div>+$149/mo</div>
                </button>
              </div>

              <p className="text-[10px] text-muted font-sans italic">
                Selected: {carePrices[tierCare.tier1].name} ({carePrices[tierCare.tier1].desc})
              </p>
            </div>

          </div>

          <button
            onClick={onRequestQuote}
            className="w-full border border-hairline hover:border-cyan text-cyan font-bold py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
          >
            Request Spec Manifest
          </button>
        </div>

        {/* ================= TIER 2 ================= */}
        <div className="bg-panel border-2 border-cyan/50 rounded p-6 flex flex-col justify-between space-y-6 relative shadow-[0_0_20px_rgba(0,229,255,0.08)]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-obsidian text-[10px] font-mono font-bold uppercase px-3 py-0.5 rounded-full">
            Recommended
          </div>

          <div className="space-y-6">
            
            {/* Hardware Header */}
            <div>
              <div className="text-xs font-mono text-cyan uppercase">Tier 02 // Business</div>
              <h3 className="text-xl font-bold text-white">SOHO AI & Storage Rack</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                12U/24U mobile server cabinet for high-concurrency local AI, automated document indexing, and ZFS backups [cite: 7, 41-46].
              </p>
            </div>

            {/* Hardware Specs (Original BOM) */}
            <div className="space-y-2 pt-4 border-t border-hairline">
              <div className="text-[11px] font-mono text-cyan font-bold uppercase">// Physical Hardware Specs</div>
              <ul className="space-y-2 text-xs font-sans text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 48GB - 96GB GPU VRAM [cite: 42]</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 16TB ZFS RAID Storage Pool</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Dual-WAN Failover & 10GbE LAN [cite: 45]</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> UPS Automated Graceful Shutdown [cite: 42]</li>
              </ul>
            </div>

            {/* Side-by-Side Care Plan Selector */}
            <div className="pt-4 border-t border-hairline space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-gold font-bold uppercase">// Add Managed Care</span>
                <span className="text-muted text-[10px]">Optional</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier2: 'self' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier2 === 'self' 
                      ? 'border-cyan bg-cyan/10 text-cyan font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Self</div>
                  <div>$0/mo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier2: 'sentinel' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier2 === 'sentinel' 
                      ? 'border-cyan bg-cyan/10 text-cyan font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Sentinel</div>
                  <div>+$49/mo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier2: 'enterprise' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier2 === 'enterprise' 
                      ? 'border-gold bg-gold/10 text-gold font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Enterprise</div>
                  <div>+$149/mo</div>
                </button>
              </div>

              <p className="text-[10px] text-muted font-sans italic">
                Selected: {carePrices[tierCare.tier2].name} ({carePrices[tierCare.tier2].desc})
              </p>
            </div>

          </div>

          <button
            onClick={onRequestQuote}
            className="w-full bg-cyan hover:bg-cyan/80 text-obsidian font-bold py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
          >
            Configure Deployment
          </button>
        </div>

        {/* ================= TIER 3 ================= */}
        <div className="bg-panel border border-hairline rounded p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            
            {/* Hardware Header */}
            <div>
              <div className="text-xs font-mono text-gold uppercase">Tier 03 // Cluster</div>
              <h3 className="text-xl font-bold text-white">Omniscient Home Core</h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                Whole-house high-density server array for real-time edge AI, local vision processing, and enterprise data pools [cite: 8, 47-55].
              </p>
            </div>

            {/* Hardware Specs (Original BOM) */}
            <div className="space-y-2 pt-4 border-t border-hairline">
              <div className="text-[11px] font-mono text-gold font-bold uppercase">// Physical Hardware Specs</div>
              <ul className="space-y-2 text-xs font-sans text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Fluid-Cooled Heavy Compute Loop [cite: 48]</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> 128GB+ VRAM Array</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Local Vision AI Camera Processing [cite: 52]</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Hot-Swappable ZFS Storage Array</li>
              </ul>
            </div>

            {/* Side-by-Side Care Plan Selector */}
            <div className="pt-4 border-t border-hairline space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-gold font-bold uppercase">// Add Managed Care</span>
                <span className="text-muted text-[10px]">Optional</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier3: 'self' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier3 === 'self' 
                      ? 'border-cyan bg-cyan/10 text-cyan font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Self</div>
                  <div>$0/mo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier3: 'sentinel' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier3 === 'sentinel' 
                      ? 'border-cyan bg-cyan/10 text-cyan font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Sentinel</div>
                  <div>+$49/mo</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTierCare({ ...tierCare, tier3: 'enterprise' })}
                  className={`p-2 rounded border text-center transition-all ${
                    tierCare.tier3 === 'enterprise' 
                      ? 'border-gold bg-gold/10 text-gold font-bold' 
                      : 'border-hairline text-muted hover:text-slate-200'
                  }`}
                >
                  <div>Enterprise</div>
                  <div>+$149/mo</div>
                </button>
              </div>

              <p className="text-[10px] text-muted font-sans italic">
                Selected: {carePrices[tierCare.tier3].name} ({carePrices[tierCare.tier3].desc})
              </p>
            </div>

          </div>

          <button
            onClick={onRequestQuote}
            className="w-full border border-hairline hover:border-gold text-slate-300 hover:text-gold font-bold py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
          >
            Inquire Custom BOM
          </button>
        </div>

      </div>

      {/* Security Guarantee Banner */}
      <div className="p-4 bg-panel border border-hairline rounded flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed font-sans">
          <strong className="text-white font-mono uppercase">The Pipe vs. Payload Guarantee:</strong> All maintenance care plans operate on read-only hardware health telemetry (thermals, fan speeds, S.M.A.R.T. logs). Your file storage pools, databases, and local AI prompts remain encrypted under keys held exclusively by you.
        </div>
      </div>

    </div>
  )
}
