import { AlertTriangle, CheckCircle, ChevronRight, FileText, Shield } from 'lucide-react'
import TerminalMonitor from '../components/TerminalMonitor'

export default function Home({ setActiveTab }) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-16">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-hairline pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ANTI-CLOUD // PHYSICAL PROPERTY ADVOCACY // TEST SITE</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight uppercase text-white">
            If your data lives on their cloud, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-cyan">
              you don't really own your life.
            </span>
          </h1>

          <p className="text-muted text-base leading-relaxed">
            Elite physical infrastructure builds for the data sovereignty era. We design, wire, and deploy
            whisper-quiet private server racks, armored local firewalls, and self-hosted storage vaults.
            Zero predatory subscriptions. Zero corporate tracking loops. Absolute physical containment.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveTab('tiers')}
              className="bg-cyan text-obsidian font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider hover:bg-cyan/80 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-2"
            >
              <span>View Flat-Rate Sovereign Tiers</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('sdi-act')}
              className="bg-panel hover:bg-panel/70 text-slate-200 border border-hairline font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-gold" />
              <span>Read SDI Act Vault (2026)</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-hairline/60 text-xs">
            <Guarantee title="Fixed Pricing" desc="Published hardware BOM & labor sheets." />
            <Guarantee title="No Data, No Fee" desc="Zero charge if recovery test fails." />
            <Guarantee title="100% On-Prem" desc="Zero external telemetry reliance." />
          </div>
        </div>

        <div className="lg:col-span-5">
          <TerminalMonitor />
        </div>
      </div>

      {/* Manifesto */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-4 sticky top-24">
          <div className="text-xs text-cyan font-bold uppercase tracking-widest">// THE MANIFESTO</div>
          <h2 className="text-2xl lg:text-3xl font-bold uppercase text-white">
            Digital Feudalism and the Illusion of Ownership
          </h2>
          <div className="p-4 bg-surface border-l-4 border-cyan rounded text-xs text-muted leading-relaxed">
            "If you buy a car, a server, or a smart home array, you should own every electrical pulse,
            copper trace, and data packet inside it. Silicon Valley treats your life as unowned inventory.
            We build physical hardware to take it back."
          </div>
        </div>

        <div className="lg:col-span-8 bg-surface border border-hairline rounded-xl p-6 lg:p-8 space-y-6">
          <p className="text-slate-200 text-sm lg:text-base leading-relaxed">
            Modern consumer and business technology has been hijacked by continuous digital trespass. You
            spend thousands of dollars on network hardware, smart devices, or office infrastructure, only
            to find your privacy held hostage behind mandatory cloud logins, invasive telemetry syncs, and
            predatory micro-subscriptions.
          </p>

          <p className="text-muted text-sm leading-relaxed">
            Big Tech treats your private habits, purchasing indices, legal records, and family media as
            raw, unowned commodities to be harvested, refined, and sold for corporate attention algorithms.
            When cloud providers decide to shut down a service or alter terms of service, your access
            vanishes overnight.
          </p>

          <div className="p-5 bg-panel border border-hairline rounded-lg space-y-3">
            <h4 className="text-sm font-bold text-gold uppercase flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>The Steele Co. Physical Boundary Principle</span>
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              We apply strict constitutional property rights to the digital self. Your smart home commands,
              legal document summaries, camera feeds, and client databases must never leave your property
              line unless you explicitly transmit them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Guarantee({ title, desc }) {
  return (
    <div>
      <div className="text-white font-bold flex items-center gap-1.5">
        <CheckCircle className="w-3.5 h-3.5 text-emerald" />
        <span>{title}</span>
      </div>
      <div className="text-[11px] text-muted mt-0.5">{desc}</div>
    </div>
  )
}
