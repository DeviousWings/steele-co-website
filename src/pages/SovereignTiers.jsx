import React from 'react'
import { Server, Cpu, Check, ShieldCheck, Wrench } from 'lucide-react'

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
          Fixed-cost physical hardware deployments engineered for quiet operation, local AI execution, and 100% data containment. Zero cloud tethers, zero SaaS lock-in[cite: 5, 80].
        </p>
      </div>

      {/* Hardware & Service Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tier 1: Desk Node */}
        <div className="bg-panel border border-hairline p-6 rounded flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono text-cyan uppercase">Tier 01 // Compact</div>
            <h3 className="text-lg font-bold text-white">Sovereign Desk Node</h3>
            <p className="text-xs text-muted leading-relaxed">
              A silent, low-power desktop server ideal for home offices, personal file vaults, and local LLM inference [cite: 6, 36-39].
            </p>
            
            {/* Hardware BOM */}
            <div className="pt-4 border-t border-hairline space-y-2">
              <div className="text-[11px] font-mono text-cyan font-bold uppercase">// Physical Hardware Specs</div>
              <ul className="space-y-1.5 text-xs font-sans text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 24GB VRAM Unified Memory</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 2TB NVMe Storage Pool (Mirrored)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Silent Liquid Cooling (&lt;25dB)</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Pre-loaded Proxmox & Ollama</li>
              </ul>
            </div>

            {/* Managed Care Options (Right alongside hardware) */}
            <div className="pt-4 border-t border-hairline space-y-2">
              <div className="text-[11px] font-mono text-gold font-bold uppercase">// Maintenance Care Add-On</div>
              <ul className="space-y-1 text-xs font-sans text-muted">
                <li>• <strong className="text-slate-200">Self-Care:</strong> $0/mo (Self-managed)</li>
                <li>• <strong className="text-slate-200">Sentinel Care:</strong> +$49/mo (24/7 Telemetry)</li>
              </ul>
            </div>
          </div>

          <button
            onClick={onRequestQuote}
            className="w-full border border-hairline hover:border-cyan text-cyan font-bold py-2 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
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
              Dedicated 2U/4U chassis designed for small businesses needing high-concurrency local AI, automated document indexing, and ZFS data backup [cite: 7, 41-46].
            </p>
            
            {/* Hardware BOM */}
            <div className="pt-4 border-t border-hairline space-y-2">
              <div className="text-[11px] font-mono text-cyan font-bold uppercase">// Physical Hardware Specs</div>
              <ul className="space-y-1.5 text-xs font-sans text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 48GB - 96GB GPU VRAM</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 16TB ZFS RAID Storage Pool</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> 10GbE Local Networking</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan shrink-0" /> Local Vector Database Runtime</li>
              </ul>
            </div>

            {/* Managed Care Options */}
            <div className="pt-4 border-t border-hairline space-y-2">
              <div className="text-[11px] font-mono text-gold font-bold uppercase">// Maintenance Care Add-On</div>
              <ul className="space-y-1 text-xs font-sans text-muted">
                <li>• <strong className="text-slate-200">Sentinel Care:</strong> +$49/mo (Telemetry & Tunnels)</li>
                <li>• <strong className="text-slate-200">Enterprise Care:</strong> +$149/mo (Priority Swap)</li>
              </ul>
            </div>
          </div>

          <button
            onClick={onRequestQuote}
            className="w-full bg-cyan hover:bg-cyan/80 text-obsidian font-bold py-2 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
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
              Multi-node rack assembly for private model fine-tuning, heavy database workloads, and redundant air-gapped backups [cite: 8, 47-55].
            </p>
            
            {/* Hardware BOM */}
            <div className="pt-4 border-t border-hairline space-y-2">
              <div className="text-[11px] font-mono text-gold font-bold uppercase">// Physical Hardware Specs</div>
              <ul className="space-y-1.5 text-xs font-sans text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Dual-Node High Availability Cluster</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> 128GB+ VRAM Array</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Hot-Swappable ZFS Array</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-gold shrink-0" /> Hardware IPMI Management</li>
              </ul>
            </div>

            {/* Managed Care Options */}
            <div className="pt-4 border-t border-hairline space-y-2">
              <div className="text-[11px] font-mono text-gold font-bold uppercase">// Maintenance Care Add-On</div>
              <ul className="space-y-1 text-xs font-sans text-muted">
                <li>• <strong className="text-slate-200">Enterprise Care:</strong> +$149/mo (Full Cluster Care)</li>
                <li>• <strong className="text-slate-200">On-Site SLA:</strong> Custom Dedicated Support</li>
              </ul>
            </div>
          </div>

          <button
            onClick={onRequestQuote}
            className="w-full border border-hairline hover:border-gold text-slate-300 hover:text-gold font-bold py-2 rounded text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
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
