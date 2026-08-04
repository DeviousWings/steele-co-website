import React from 'react'

export default function Footer({ onOpenDraft, setActiveTab }) {
  const handleNav = (tabId) => {
    if (setActiveTab) {
      setActiveTab(tabId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="no-print border-t border-hairline bg-obsidian py-12 mt-20 text-xs text-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
        
        {/* Your Radical Transparency Note */}
        <div className="p-4 bg-surface border border-hairline rounded-lg leading-relaxed">
          <span className="text-cyan font-bold">🤖 Radical Transparency Note:</span> This site was built
          using a mix of AI assistance and my expert web dev skills. Look, I'm just a guy on a budget with
          very little free time, and every hour saved wrestling with React code at 2 AM is an extra hour I
          get to spend playing with my kids and hanging out with my family. Hardware is my trade—AI was
          just my shortcut home for dinner!
          <br/> 
          <span className="text-slate-400 font-mono text-[11px]">
            Website status: Work in progress, August 4, 2026.
          </span>
        </div>
        
        {/* Navigation & Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          
          <button onClick={onOpenDraft} className="text-gold hover:underline font-mono text-xs">
            View Full SDI Act Master Text (July 2026 Edition) ↗
          </button>

          {/* Quick Tab Switches */}
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <button 
              type="button"
              onClick={() => handleNav('tiers')}
              className="hover:text-cyan transition-colors"
            >
              // Managed Care Tiers
            </button>
            <span>•</span>
            <button 
              type="button"
              onClick={() => handleNav('faq')}
              className="hover:text-cyan transition-colors"
            >
              // FAQ & Security
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="flex justify-between items-center text-[10px] font-mono border-t border-hairline/50 pt-3">
          <div>© 2026 STEELE CO. All Rights Reserved.</div>
          <div>Sovereign Infrastructure & Managed Care</div>
        </div>

      </div>
    </footer>
  );
}
