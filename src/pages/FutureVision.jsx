import React from 'react'
import { Construction, Terminal, Shield, ArrowRight } from 'lucide-react'

export default function FutureVision({ onOpenQuote }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-obsidian">
      {/* Centered Construction Block */}
      <div className="max-w-2xl w-full bg-panel border border-hairline rounded-lg p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gold/10 border border-gold/30 text-gold text-xs font-mono mb-6 uppercase tracking-wider">
          <Construction className="w-4 h-4 animate-bounce" />
          <span>Node Initializing // Future Vision Under Construction</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
          BUILDING THE NEXT PHASE OF <span className="text-cyan">DIGITAL SOVEREIGNTY</span>
        </h1>

        {/* Description */}
        <p className="text-muted text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          We are currently drafting the strategic roadmap for localized AI neural clusters, decentralized identity vaults, and localized sovereign grid integrations.
        </p>

        {/* Terminal Status Box */}
        {/* EDITABLE SECTION: Replace these placeholder status lines with real updates later */}
        <div className="bg-obsidian border border-hairline rounded p-4 text-left font-mono text-xs text-muted mb-8 space-y-2">
          <div className="flex items-center gap-2 text-cyan">
            <Terminal className="w-3.5 h-3.5" />
            <span>[SYS_LOG]: Roadmap drafting in progress...</span>
          </div>
          <div>&gt; Architectural Specs: Pending publication</div>
          <div>&gt; SDI Act Integration: Active</div>
          <div>&gt; Expected Launch: Q4 2026</div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-cyan hover:bg-cyan/80 text-obsidian font-bold px-6 py-3 rounded text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
          >
            <Shield className="w-4 h-4" />
            <span>Request Infrastructure Consultation</span>
          </button>
        </div>

      </div>
    </div>
  )
}
