import React, { useState } from 'react'
import { HelpCircle, ChevronDown, ShieldCheck, Key, Lock, Wrench, Terminal } from 'lucide-react'

export default function Faq() {
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
      a: "Cloud SaaS subscriptions charge you rent forever just to access software and harvest your data. Steele Co. Managed Care is optional human labor—like hiring a lawn care company or mechanic. You own the asset outright; you're simply paying for expert hands to keep the hardware running smoothly."
    },
    {
      q: "How does Steele Co. handle hardware warranties?",
      a: "All commercial tier builds use enterprise-grade components with individual manufacturer warranties (typically 3 to 5 years). We handle all RMA warranty claims directly on your behalf so you don't have to deal with component manufacturers."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 space-y-12 text-slate-200">
      
      {/* Header */}
      <div className="space-y-4 border-b border-hairline pb-8">
        <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Knowledge Base // Zero-Trust Security & Privacy</span>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-muted leading-relaxed max-w-2xl">
          Everything you need to know about physical hardware ownership, encrypted local containment, and how our optional zero-trust maintenance model operates.
        </p>
      </div>

      {/* Security Architecture Callout */}
      <div className="bg-panel border border-cyan/30 p-6 rounded space-y-4">
        <div className="flex items-center gap-2 text-cyan font-mono text-xs font-bold uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>The Pipe vs. Payload Guarantee</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          Steele Co. maintains a strict architectural separation between <strong>System Health</strong> (CPU temperatures, RAID array health, OS security patches) and <strong>User Data</strong> (files, databases, AI prompt history). We monitor hardware health only—your data remains encrypted under keys that never leave your premises.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
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

      {/* Footer Banner */}
      <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted">
        <div>Have a technical question not answered here?</div>
        <a 
          href="mailto:contact@steele-tech.com" 
          className="text-cyan hover:underline flex items-center gap-1 font-bold"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Contact Technical Operations ↗</span>
        </a>
      </div>

    </div>
  )
}
