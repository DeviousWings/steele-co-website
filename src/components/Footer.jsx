import React from 'react'
import { Server, Shield, Terminal, BookOpen } from 'lucide-react'

export default function Footer({ onOpenDraft }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-obsidian border-t border-hairline pt-12 pb-8 px-4 lg:px-8 text-slate-400 text-xs no-print">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-hairline">
          
          {/* Brand & Mission Statement */}
          <div className="space-y-3 md:col-span-1">
            <div className="font-bold text-white tracking-wider flex items-center gap-2 font-mono text-sm">
              <Server className="w-4 h-4 text-cyan" />
              <span>STEELE CO.</span>
              <span className="text-cyan text-[10px] px-1.5 py-0.5 border border-cyan/30 rounded bg-cyan/10">HARDWARE</span>
            </div>
            <p className="text-[11px] text-muted leading-relaxed">
              Quiet, enterprise-grade on-premise hardware built for digital sovereignty. Zero third-party trackers. 100% physical ownership.
            </p>
          </div>

          {/* Quick Nav / Sections */}
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
              Infrastructure
            </div>
            <ul className="space-y-2 font-mono text-[11px]">
              <li>
                <button 
                  onClick={() => scrollToSection('managed-care-section')}
                  className="hover:text-cyan transition-colors text-left"
                >
                  // Managed Care Tiers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq-section')}
                  className="hover:text-cyan transition-colors text-left"
                >
                  // FAQ & Security
                </button>
              </li>
            </ul>
          </div>

          {/* Public Advocacy Links */}
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
              Public Advocacy
            </div>
            <ul className="space-y-2 font-mono text-[11px]">
              <li>
                <button 
                  onClick={onOpenDraft}
                  className="text-gold hover:underline flex items-center gap-1 text-left"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>SDI Act Master Draft ↗</span>
                </button>
              </li>
              <li className="text-muted">
                // "No Data, No Fee" Code
              </li>
            </ul>
          </div>

          {/* System Status Banner */}
          <div className="space-y-2 bg-panel border border-hairline p-3 rounded h-fit">
            <div className="flex items-center gap-1.5 text-emerald font-mono text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span>ON-PREM SOVEREIGN</span>
            </div>
            <p className="text-[10px] text-muted">
              Encrypted local containment enabled. No external analytics scripts loaded.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-muted">
          <div>
            © {new Date().getFullYear()} Steele Co. Hardware. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('faq-section')}
              className="hover:text-slate-200 transition-colors"
            >
              Zero-Trust Care
            </button>
            <span>•</span>
            <button 
              onClick={() => scrollToSection('faq-section')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy & Telemetry FAQ
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
