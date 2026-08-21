import React, { useState } from 'react'
import { ShieldCheck, Cpu, Key, HelpCircle, ChevronDown, Check, Terminal, Wrench } from 'lucide-react'

export default function ManagedCareAndFAQ({ onRequestQuote }) {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const FAQS = [
    {
      q: "If you have remote access to maintain my server, can you see my files or AI prompts?",
      a: "No. We separate system health (the hardware pipe) from user data (the encrypted payload). Your storage pools and databases are encrypted with keys that only you hold. Furthermore, remote access is disabled by default; you must manually toggle the encrypted tunnel open from your local dashboard whenever maintenance is scheduled."
    },
    {
      q: "What happens if a hard drive fails on my on-premise server?",
      a: "With Zero-Trust Managed Care, our outbound health telemetry alerts us to S.M.A.R.T. disk errors before the drive actually dies. Because your storage runs in a redundant ZFS array, zero data is lost. We dispatch a pre-configured replacement drive directly to your door or schedule an on-site hot-swap."
    },
    {
      q: "Can I cancel Managed Care and maintain the server myself later?",
      a: "Absolutely. You own the hardware outright from day one. There are no contract lock-ins or software kill-switches. If you decide to cancel care, we simply disconnect the health telemetry feed, hand over full root documentation, and your server continues running locally without interruption."
    },
    {
      q: "How do operating system and security patches get applied?",
      a: "We test all OS and container updates in our lab environment first to ensure zero regressions. Once verified, we schedule a maintenance window with you, you enable the support tunnel, and we push the updates cleanly without taking down your core local services."
    },
    {
      q: "Why pay for maintenance if I'm trying to avoid monthly subscriptions?",
      a: "Cloud SaaS subscriptions charge you rent forever just to access software and harvest your data. Steele TECH. Managed Care is optional human labor—like hiring a lawn care company or mechanic. You own the asset outright; you're simply paying for expert hands to keep the hardware running smoothly."
    }
  ]

  return (
    <section id="managed-care-section" className="bg-obsidian border-t border-hairline py-16 px-4 lg:px-8 text-slate-200">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* SECTION 1: MANAGED CARE SERVICES & PRICING */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-cyan font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-cyan/10 border border-cyan/30">
              <Wrench className="w-3.5 h-3.5" />
              <span>Zero-Trust Infrastructure Maintenance</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              We Maintain the Furnace. You Hold the Keys.
            </h2>
            <p className="text-xs lg:text-sm text-muted leading-relaxed">
              Physical ownership shouldn't mean taking on a second job as a sysadmin. Get enterprise-grade uptime with 100% data privacy.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Tier 1: Self-Care */}
            <div className="bg-panel border border-hairline p-6 rounded flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-mono text-muted uppercase">Option 01</div>
                <h3 className="text-lg font-bold text-white">Sovereign Self-Care</h3>
                <div className="text-2xl font-bold text-white font-mono">$0 <span className="text-xs font-normal text-muted">/ month</span></div>
                <p className="text-xs text-muted leading-relaxed">
                  For IT professionals and tinkerers who want total hands-on control over their OS, backups, and thermal tuning.
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-hairline text-xs font-sans">
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-emerald shrink-0" /> 100% Hardware & Data Ownership
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-emerald shrink-0" /> Local OS Monitoring Dashboard
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-emerald shrink-0" /> Full System Documentation
                  </li>
                  <li className="flex items-center gap-2 text-muted line-through">
                    Remote Health Telemetry
                  </li>
                  <li className="flex items-center gap-2 text-muted line-through">
                    Managed OS Security Patching
                  </li>
                </ul>
              </div>
              <div className="text-xs font-mono text-center text-muted py-2 bg-surface rounded border border-hairline">
                Included Free With All Hardware
              </div>
            </div>

            {/* Tier 2: Sentinel Managed Care (Featured) */}
            <div className="bg-panel border-2 border-cyan/50 p-6 rounded flex flex-col justify-between space-y-6 relative shadow-[0_0_20px_rgba(0,229,255,0.1)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan text-obsidian text-[10px] font-mono font-bold uppercase px-3 py-0.5 rounded-full">
                Most Popular
              </div>
              <div className="space-y-4">
                <div className="text-xs font-mono text-cyan uppercase">Option 02</div>
                <h3 className="text-lg font-bold text-white">Sentinel Managed Care</h3>
                <div className="text-2xl font-bold text-cyan font-mono">$49 <span className="text-xs font-normal text-muted">/ month</span></div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Proactive hardware health monitoring and client-gated patch management for single Desk Nodes or SOHO servers.
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-hairline text-xs font-sans">
                  <li className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-cyan shrink-0" /> Everything in Self-Care
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-cyan shrink-0" /> 24/7 Read-Only Thermal & Disk Telemetry
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-cyan shrink-0" /> Pre-Fail S.M.A.R.T. Drive Warnings
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-cyan shrink-0" /> Client-Gated Remote Patching Tunnels
                  </li>
                  <li className="flex items-center gap-2 text-slate-200">
                    <Check className="w-4 h-4 text-cyan shrink-0" /> Priority Hardware Swap Dispatch
                  </li>
                </ul>
              </div>
              <button
                onClick={onRequestQuote}
                className="w-full bg-cyan hover:bg-cyan/80 text-obsidian font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-all"
              >
                Add To Deployment
              </button>
            </div>

            {/* Tier 3: Enterprise Rack Care */}
            <div className="bg-panel border border-hairline p-6 rounded flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-mono text-gold uppercase">Option 03</div>
                <h3 className="text-lg font-bold text-white">Enterprise Sovereign Care</h3>
                <div className="text-2xl font-bold text-white font-mono">$149 <span className="text-xs font-normal text-muted">/ month</span></div>
                <p className="text-xs text-muted leading-relaxed">
                  Full white-glove support for multi-node clusters, enterprise local LLM rigs, and high-availability ZFS vaults.
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-hairline text-xs font-sans">
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-gold shrink-0" /> Everything in Sentinel Care
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-gold shrink-0" /> Multi-Node Cluster & IPMI Out-of-Band Care
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-gold shrink-0" /> Quarterly On-Site Physical Maintenance
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-gold shrink-0" /> 4-Hour Emergency Drive & Hardware Swap
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-gold shrink-0" /> Custom Local AI Model Pipeline Tuning
                  </li>
                </ul>
              </div>
              <button
                onClick={onRequestQuote}
                className="w-full border border-hairline hover:border-gold text-slate-300 hover:text-gold font-bold py-2.5 rounded text-xs uppercase tracking-wider transition-all"
              >
                Inquire Enterprise Care
              </button>
            </div>

          </div>
        </div>

        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <div id="faq-section" className="space-y-8 pt-10 border-t border-hairline">
          <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-panel border border-hairline rounded overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 text-sm font-bold text-white font-mono"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed font-sans border-t border-hairline/50 pt-4 bg-surface/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
