import React from 'react'
import { Server, Shield, Terminal, Cpu } from 'lucide-react'

export default function Footer({ onOpenDraft, setActiveTab, onOpenDevLog }) {
  const handleNav = (tabId) => {
    if (setActiveTab) {
      setActiveTab(tabId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="no-print bg-obsidian border-t border-hairline pt-16 pb-12 px-4 lg:px-8 text-xs font-sans text-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Brand Thesis & Family/Trade Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-hairline/80 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-panel border border-hairline rounded">
                <Server className="w-5 h-5 text-cyan" />
              </div>
              <div>
                <div className="font-bold text-base tracking-wider text-slate-100 flex items-center gap-2">
                  STEELE CO.
                  <span className="text-cyan text-xs px-1.5 py-0.5 border border-cyan/30 rounded bg-cyan/10">HARDWARE</span>
                </div>
                <div className="text-[10px] text-muted tracking-widest uppercase">Sovereign Data Infrastructure</div>
              </div>
            </div>
            
            {/* Radical Transparency & Family Focus Note */}
            <div className="p-4 bg-surface border border-hairline rounded-lg leading-relaxed text-muted">
              <span className="text-cyan font-bold">🤖 Radical Transparency Note:</span> This site was built
              using a mix of AI assistance and my expert web dev skills. Look, I&apos;m just a guy on a budget with
              very little free time, and every hour saved wrestling with React code at 2 AM is an extra hour I
              get to spend playing with my kids and hanging out with my family. Hardware is my trade—AI was
              just my shortcut home for dinner!
              <br/>
              <span className="text-slate-400 font-mono text-[11px]">
                Website status: Work in progress, August 2026.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
            {/* Future Vision Callout */}
            <div 
              onClick={() => handleNav('vision')}
              className="cursor-pointer bg-panel border border-hairline hover:border-cyan/50 p-4 rounded-lg transition-all group w-full max-w-sm"
            >
              <div className="text-[10px] font-mono text-cyan uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Next Era // Roadmap</span>
              </div>
              <div className="font-bold text-slate-100 text-xs group-hover:text-cyan transition-colors">
                Explore Future Vision & Decentralized AI Clusters ↗
              </div>
            </div>

            <button 
              onClick={onOpenDraft} 
              className="text-gold hover:underline font-mono text-xs text-left lg:text-right pt-2"
            >
              View Full SDI Act Master Text (July 2026 Edition) ↗
            </button>
          </div>
        </div>

        {/* 3-Column Structured Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-muted">
          
          {/* Column 1: Infrastructure */}
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-cyan font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              <span>Infrastructure (Revenue Engine)</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-slate-100 transition-colors text-left">
                  Deployment Tiers <span className="text-[10px] text-cyan font-mono">(Desk Node, SOHO, Core)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-slate-100 transition-colors text-left">
                  BOM Configurator <span className="text-[10px] text-muted font-mono">(/tiers#configurator)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-slate-100 transition-colors text-left">
                  Managed Care Plans <span className="text-[10px] text-emerald font-mono">($0, $49, $149)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-slate-100 transition-colors text-left text-cyan font-medium">
                  Request Installation & Consultation ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Advocacy & Protocol */}
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-gold font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Advocacy & Protocol</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('consumer-rights')} className="hover:text-slate-100 transition-colors text-left">
                  Consumer Rights <span className="text-[10px] text-muted font-mono">(Ownership & Enjoyment)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sdi-act')} className="hover:text-slate-100 transition-colors text-left">
                  SDI Protocol <span className="text-[10px] text-gold font-mono">(Sovereign Digital Identity Act)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('expose')} className="hover:text-slate-100 transition-colors text-left">
                  The Pipe vs. Payload Guarantee <span className="text-[10px] text-muted font-mono">(FAQ)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-slate-100 transition-colors text-left">
                  FAQ & Security Standalone Answers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand, Directives & Field Comms */}
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-slate-100 font-bold tracking-widest uppercase flex items-center gap-1.5">
              <span>Brand & Directives</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-slate-100 transition-colors text-left">
                  About Steele Co. & Ethics
                </button>
              </li>
              <li>
                <button onClick={onOpenDraft} className="hover:text-slate-100 transition-colors text-left">
                  {/* https://substack.com/@natdeviouswings */}
                  Substack Field Notes ↗
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-slate-100 transition-colors text-left">
                  PGP & Secure Comms Directory
                </button>
              </li>
            </ul>

            {/* External Links Section with Top Hairline Border */}
            <div className="pt-4 border-t border-hairline space-y-2 text-xs">
              <div className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-1">
                Field Media & Support
              </div>
              <div>
                <a 
                  href="https://youtube.com/@yourchannel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan transition-colors flex items-center gap-1"
                >
                  <span>Watch: On-Prem Builds & Teardowns ↗</span>
                </a>
              </div>
              <div>
                <a 
                  href="https://buymeacoffee.com/deviouswings" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gold hover:underline transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>☕ Support Independent Hardware Research</span>
                </a>
              </div>
              <div className="pt-1">
                <button 
                  onClick={onOpenDevLog} 
                  className="text-cyan hover:underline transition-colors flex items-center gap-1"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>System Dev Log</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between items-center text-muted font-mono text-[10px] gap-4">
          <div>
            © {new Date().getFullYear()} STEELE CO. ALL RIGHTS RESERVED. ZERO THIRD-PARTY TRACKERS.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald">● ON-PREM CONTAINMENT ACTIVE</span>
            <span>|</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-cyan transition-colors">
              BACK TO TOP ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
