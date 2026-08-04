import React from 'react'
import { Server, Cpu, HardDrive, ShieldCheck, Wrench, Check, Terminal, Zap } from 'lucide-react'

export default function SovereignTiers({ onRequestQuote }) {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 space-y-16 text-slate-200">
      
      {/* Page Header */}
      <div className="space-y-4 border-b border-hairline pb-8">
        <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-wider">
          <Server className="w-4 h-4" />
          <span>On-Premise Infrastructure // Bill of Materials</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Sovereign Deployment Tiers
        </h1>
        <p className="text-sm text-muted max-w-2xl leading-relaxed">
          Fixed-cost physical hardware deployments engineered for quiet operation, local AI execution, and 100% data containment. Zero cloud tethers, zero SaaS lock-in.
        </p>
      </div>

      {/* Hardware Tiers Section */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan" />
          <span>1. Hardware Build Tiers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tier 1: Desk Node */}
          <div className="bg-panel border border-hairline p-6 rounded flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-cyan uppercase">Tier 01 // Compact</div>
              <h3 className="text-lg font-bold text-white">Sovereign Desk Node</h3>
              <p className="text-xs text-muted leading-relaxed">
                A silent, low-power desktop server ideal for home offices, personal file vaults, and local LLM inference (Llama 3 8B, Mistral).
              </p>
              <ul className="space-y-2 pt-4 border-t border-hairline text-xs font-sans text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 24GB VRAM Unified Memory</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 2TB NVMe Storage Pool (Mirrored)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Silent Liquid Cooling (&lt;25dB)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Pre-loaded Proxmox & Ollama</li>
              </ul>
            </div>
            <button
              onClick={onRequestQuote}
              className="w-full border border-hairline hover:border-cyan text-cyan font-bold py-2 rounded text-xs font-mono uppercase tracking-wider transition-all"
            >
              Request Spec Manifest
            </button>
          </div>

          {/* Tier 2: Workgroup Rack */}
          <div className="bg-panel border-2 border-cyan/50 p-6 rounded flex flex-col justify-between space-y-6 relative shadow-[0_0_20px_rgba(0,229,255,0.08)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-obsidian text-[10px] font-mono font-bold uppercase px-3 py-0.5 rounded-full">
              Recommended
            </div>
            <div className="space-y-4">
              <div className="text-xs font-mono text-cyan uppercase">Tier 02 // Business</div>
              <h3 className="text-lg font-bold text-white">SOHO AI & Storage Rack</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated 2U/4U chassis designed for small businesses needing high-concurrency local AI, automated document indexing, and ZFS data backup.
              </p>
              <ul className="space-y-2 pt-4 border-t border-hairline text-xs font-sans text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 48GB - 96GB GPU VRAM</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 16TB ZFS RAID Storage Pool</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 10GbE Local Networking</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Local Vector Database Runtime</li>
              </ul>
            </div>
            <button
              onClick={onRequestQuote}
              className="w-full bg-cyan hover:bg-cyan/80 text-obsidian font-bold py-2 rounded text-xs font-mono uppercase tracking-wider transition-all"
            >
              Configure Deployment
            </button>
          </div>

          {/* Tier 3: Enterprise Fortress */}
          <div className="bg-panel border border-hairline p-6 rounded flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-gold uppercase">Tier 03 // Cluster</div>
              <h3 className="text-lg font-bold text-white">Enterprise Sovereign Vault</h3>
              <p className="text-xs text-muted leading-relaxed">
                Multi-node rack assembly for private model fine-tuning, heavy database workloads, and redundant air-gapped backups.
              </p>
              <ul className="space-y-2 pt-4 border-t border-hairline text-xs font-sans text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Dual-Node High Availability Cluster</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> 128GB+ VRAM Array</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Hot-Swappable ZFS Array</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Hardware IPMI Management</li>
              </ul>
            </div>
            <button
              onClick={onRequestQuote}
              className="w-full border border-hairline hover:border-gold text-slate-300 hover:text-gold font-bold py-2 rounded text-xs font-mono uppercase tracking-wider transition-all"
            >
              Inquire Custom BOM
            </button>
          </div>

        </div>
      </div>

      {/* Embedded Zero-Trust Managed Care Section */}
      <div className="pt-12 border-t border-hairline space-y-8">
        
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-cyan font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-cyan/10 border border-cyan/30">
            <Wrench className="w-3.5 h-3.5" />
            <span>Optional Service Add-On</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            2. Zero-Trust Managed Maintenance
          </h2>
          <p className="text-xs lg:text-sm text-muted leading-relaxed max-w-3xl">
            You own the hardware outright. If you want us to handle system security updates, drive health monitoring, and RAID maintenance like a trusted lawn care crew, add an optional maintenance plan.
          </p>
        </div>

        {/* Managed Care Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Care Option 1 */}
          <div className="bg-surface border border-hairline p-6 rounded space-y-4">
            <div className="text-xs font-mono text-muted uppercase">Plan A</div>
            <h3 className="text-base font-bold text-white">Sovereign Self-Care</h3>
            <div className="text-2xl font-bold text-white font-mono">$0 <span className="text-xs font-normal text-muted">/ mo</span></div>
            <p className="text-xs text-muted leading-relaxed">
              Full root access handed to you. You handle OS security updates, drive swaps, and backups.
            </p>
            <div className="pt-3 border-t border-hairline text-xs font-mono text-cyan">
              ✓ Included with all builds
            </div>
          </div>

          {/* Care Option 2 */}
          <div className="bg-surface border border-cyan/40 p-6 rounded space-y-4 relative">
            <div className="text-xs font-mono text-cyan uppercase">Plan B // Managed</div>
            <h3 className="text-base font-bold text-white">Sentinel Managed Care</h3>
            <div className="text-2xl font-bold text-cyan font-mono">$49 <span className="text-xs font-normal text-muted">/ mo</span></div>
            <p className="text-xs text-slate-300 leading-relaxed">
              24/7 outbound thermal and disk telemetry. Client-gated remote maintenance sessions for OS and container patches.
            </p>
            <div className="pt-3 border-t border-hairline text-xs font-mono text-cyan">
              ✓ Ideal for Desk Nodes & Single Servers
            </div>
          </div>

          {/* Care Option 3 */}
          <div className="bg-surface border border-hairline p-6 rounded space-y-4">
            <div className="text-xs font-mono text-gold uppercase">Plan C // Enterprise</div>
            <h3 className="text-base font-bold text-white">Enterprise Sovereign Care</h3>
            <div className="text-2xl font-bold text-white font-mono">$149 <span className="text-xs font-normal text-muted">/ mo</span></div>
            <p className="text-xs text-muted leading-relaxed">
              Multi-node cluster management, priority drive dispatch, quarterly thermal maintenance, and local AI pipeline tuning.
            </p>
            <div className="pt-3 border-t border-hairline text-xs font-mono text-gold">
              ✓ For Rack Deployments & Clusters
            </div>
          </div>

        </div>

        {/* Security Guarantee Note */}
        <div className="p-4 bg-panel border border-hairline rounded flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed font-sans">
            <strong className="text-white font-mono uppercase">The Pipe vs. Payload Guarantee:</strong> All maintenance tiers operate on read-only hardware health metrics (thermals, fan speeds, drive S.M.A.R.T. logs). Your file storage pools, databases, and AI prompt histories remain encrypted under keys held exclusively by you.
          </div>
        </div>

      </div>

    </div>
  )
}
