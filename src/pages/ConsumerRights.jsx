import React from 'react'
import { Shield, FileText, Lock, ArrowRight } from 'lucide-react'

export default function ConsumerRights({ onOpenDraft, onOpenQuote }) {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-panel border border-hairline rounded-lg p-8 space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gold/10 border border-gold/30 text-gold text-xs font-mono uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>Foundational Manifesto // The Genesis of SDI</span>
        </div>

        <h1 className="text-2xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
          Consumer Rights: <span className="text-cyan">Ownership, Enjoyment, & Data Sovereignty</span>
        </h1>

        <p className="text-muted text-sm lg:text-base leading-relaxed">
          The core political letter and legislative framework written to challenge relentless corporate surveillance, continuous ad intrusion, and the illusion of digital ownership. This is the exact thinking that birthed the Sovereign Digital Identity (SDI) protocol.
        </p>
      </div>

      {/* Placeholder / Preview Block */}
      <div className="bg-obsidian border border-hairline rounded-lg p-8 space-y-6 text-center shadow-xl">
        <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto text-cyan">
          <FileText className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">
            Full Congressional Letter & Legislative Brief
          </h3>
          <p className="text-muted text-xs lg:text-sm max-w-lg mx-auto leading-relaxed">
            We are currently formatting the full text of the letter—covering property ownership, the right to enjoy purchased products without continuous ad intrusion, and strict legal boundaries on personal data harvesting.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenDraft}
            className="bg-gold hover:bg-gold/80 text-obsidian font-bold px-6 py-3 rounded text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,215,0,0.2)] flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>View SDI Act Master Draft ↗</span>
          </button>

          <button
            onClick={onOpenQuote}
            className="bg-panel hover:bg-surface text-slate-200 border border-hairline font-bold px-6 py-3 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <Lock className="w-4 h-4 text-cyan" />
            <span>Secure Your On-Premise Infrastructure</span>
          </button>
        </div>
      </div>

      {/* The 3 Pillars Summary Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-panel border border-hairline rounded-lg p-6 space-y-3">
          <div className="text-cyan font-mono font-bold text-xs">PILLAR 01</div>
          <h4 className="font-bold text-white text-sm">Right of Ownership</h4>
          <p className="text-muted text-xs leading-relaxed">
            If you buy physical hardware or software appliances, you own every trace and pulse. No remote disable switches or forced subscriptions.
          </p>
        </div>

        <div className="bg-panel border border-hairline rounded-lg p-6 space-y-3">
          <div className="text-gold font-mono font-bold text-xs">PILLAR 02</div>
          <h4 className="font-bold text-white text-sm">Right of Enjoyment</h4>
          <p className="text-muted text-xs leading-relaxed">
            Protection from relentless corporate tracking, forced telemetry loops, and continuous intrusive ads in private spaces.
          </p>
        </div>

        <div className="bg-panel border border-hairline rounded-lg p-6 space-y-3">
          <div className="text-emerald font-mono font-bold text-xs">PILLAR 03</div>
          <h4 className="font-bold text-white text-sm">Data Sovereignty</h4>
          <p className="text-muted text-xs leading-relaxed">
            You own the personal data residing on the internet and data centers. Corporations do not have an inherent right to sell or harvest your profile.
          </p>
        </div>
      </div>

    </div>
  )
}
