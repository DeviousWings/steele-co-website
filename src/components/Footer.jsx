import React from 'react'
import { Server, Shield, Terminal, Cpu, FileText } from 'lucide-react'

export default function Footer({ onOpenDraft, onOpenContract, setActiveTab, onOpenDevLog }) {
  const handleNav = (tabId) => {
    if (setActiveTab) {
      setActiveTab(tabId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="no-print bg-slate-950 border-t border-slate-800 pt-16 pb-12 px-4 lg:px-8 text-xs font-sans text-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Brand Thesis & Family/Trade Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-slate-900 border border-slate-800 rounded">
                <Server className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="font-bold text-base tracking-wider text-slate-100 flex items-center gap-2">
                 STEELE TECH.
                  <span className="text-cyan-400 text-xs px-1.5 py-0.5 border border-cyan-500/30 rounded bg-cyan-950/40">HARDWARE</span>
                </div>
                <div className="text-[10px] text-slate-400 tracking-widest uppercase">Sovereign Data Infrastructure</div>
              </div>
            </div>
            
            {/* Radical Transparency & Family Focus Note */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg leading-relaxed text-slate-300">
              <span className="text-cyan-400 font-bold">🤖 Radical Transparency Note:</span> This site was built
              using a mix of AI assistance and my expert web dev skills. Look, I&apos;m just a guy on a budget with
              very little free time, and every hour saved wrestling with React code at 2 AM is an extra hour I
              get to spend playing with my kids and hanging out with my family. Hardware is my trade—AI was
              just my shortcut home for dinner!
              <br/>
              <br/>
              Steele Tech. is a division of Steele Co. Pioneering data sovereignty and secure infrastructure.
              <span className="text-slate-400 font-mono text-[11px] block mt-2">
                Website status: Work in progress, August 2026.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
            {/* Future Vision Callout */}
            <div 
              onClick={() => handleNav('vision')}
              className="cursor-pointer bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-lg transition-all group w-full max-w-sm"
            >
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Next Era // Roadmap</span>
              </div>
              <div className="font-bold text-slate-100 text-xs group-hover:text-cyan-400 transition-colors">
                Explore Future Vision & Decentralized AI Clusters ↗
              </div>
            </div>

            <button 
              onClick={onOpenDraft} 
              className="text-amber-400 hover:underline font-mono text-xs text-left lg:text-right pt-2"
            >
              View Full SDI Act Master Text (July 2026 Edition) ↗
            </button>
          </div>
        </div>

        {/* 3-Column Structured Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-slate-300">
          
          {/* Column 1: Infrastructure */}
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5" />
              <span>Infrastructure (Revenue Engine)</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-white transition-colors text-left">
                  Deployment Tiers <span className="text-[10px] text-cyan-400 font-mono">(Desk Node, SOHO, Core)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-white transition-colors text-left">
                  BOM Configurator <span className="text-[10px] text-slate-400 font-mono">(/tiers#configurator)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-white transition-colors text-left">
                  Managed Care Plans <span className="text-[10px] text-emerald-400 font-mono">($0, $49, $149)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tiers')} className="hover:text-white transition-colors text-left text-cyan-400 font-medium">
                  Request Installation & Consultation ↗
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Advocacy & Protocol */}
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-amber-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Advocacy & Protocol</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('consumer-rights')} className="hover:text-white transition-colors text-left">
                  Consumer Rights <span className="text-[10px] text-slate-400 font-mono">(Ownership & Enjoyment)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sdi-act')} className="hover:text-white transition-colors text-left">
                  SDI Protocol <span className="text-[10px] text-amber-400 font-mono">(Sovereign Digital Identity Act)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('expose')} className="hover:text-white transition-colors text-left">
                  The Pipe vs. Payload Guarantee <span className="text-[10px] text-slate-400 font-mono">(FAQ)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors text-left">
                  FAQ & Security Standalone Answers
                </button>
              </li>
              <li>
                <button onClick={onOpenContract} className="hover:text-white transition-colors text-left flex items-center gap-1.5">
                  <FileText className="w-3 h-3 text-cyan-400" />
                  <span>"No Data, No Fee" Code</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand & Directives */}
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-slate-100 font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Brand & Directives</span>
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  About STEELE TECH. <span className="text-[10px] text-slate-400 font-mono">(Trade Skills & Family)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors text-left">
                  Substack Field Notes & Articles <span className="text-[10px] text-slate-400 font-mono">(Guides)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  Contact & Secure Comms <span className="text-[10px] text-cyan-400 font-mono">(PGP & Inquiries)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  Contact & Secure Comms <span className="text-[10px] text-cyan-400 font-mono">(PGP & Inquiries)</span>
                </button>
              </li>
              {/* Added Link Block */}
              <li className="pt-2">
                <a 
                  href="https://black-forge-space-industries.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 font-bold transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Black Forge Industries ↗</span>
                </a>
                <p className="text-[10px] text-slate-500 mt-0.5">SLA Fabrication & Hardware Hub</p>
              </li>
              {/* End Added Link Block */}
            </ul>

            {/* External Links Section with Top Hairline Border */}
            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
            </ul>

            {/* External Links Section with Top Hairline Border */}
            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1">
                Field Media & Support
              </div>
              <div>
                <a 
                  href="https://youtube.com/@yourchannel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 text-slate-300 transition-colors flex items-center gap-1"
                >
                  <span>Watch: On-Prem Builds & Teardowns ↗</span>
                </a>
              </div>
              <div>
                <a 
                  href="https://buymeacoffee.com/deviouswings" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-400 hover:underline transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>☕ Support Independent Hardware Research</span>
                </a>
              </div>
              <div className="pt-1">
                <button 
                  onClick={onOpenDevLog} 
                  className="text-cyan-400 hover:underline transition-colors flex items-center gap-1"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>System Dev Log</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar with High-Visibility LED */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-slate-400 font-mono text-[10px] gap-4">
          <div>
            © {new Date().getFullYear()} STEELE CO. ALL RIGHTS RESERVED. ZERO THIRD-PARTY TRACKERS.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* High-Visibility Glowing LED Status Light */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
              </span>
              <span className="text-emerald-400 font-bold tracking-wider">ON-PREM CONTAINMENT ACTIVE</span>
            </div>
            <span>|</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">
              BACK TO TOP ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
