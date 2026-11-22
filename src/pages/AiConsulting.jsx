import { Brain, ChevronRight, Cpu, Lock, MessageSquare, Shield, Terminal, Wrench } from 'lucide-react'

const primaryBtn =
  'bg-cyan text-obsidian font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider hover:bg-cyan/80 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-2'
const secondaryBtn =
  'bg-panel hover:bg-panel/70 text-slate-200 border border-hairline font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-2'

export default function AiConsulting({ setActiveTab, onOpenQuote }) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-16">
      {/* Hero */}
      <div className="space-y-6 border-b border-hairline pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-semibold">
          <Brain className="w-3.5 h-3.5" />
          <span>STEELE AI // PRIVATE SYSTEMS CONSULTING</span>
        </div>

        <h1 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight uppercase text-white max-w-4xl">
          Strategy and implementation for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-cyan">
            private AI systems.
          </span>
        </h1>

        <p className="text-muted text-base leading-relaxed max-w-3xl">
          Steele AI helps individuals and small organizations design, deploy, and operate AI systems that
          run on hardware they own. No mandatory cloud dependency. No data leaving the premises unless
          you explicitly choose it. Fixed-scope engagements with clear deliverables.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button onClick={onOpenQuote} className={primaryBtn}>
            <span>Request a Consultation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button onClick={() => setActiveTab('tiers')} className={secondaryBtn}>
            <span>View Hardware Plans</span>
          </button>
        </div>
      </div>

      {/* What we do */}
      <section className="space-y-6">
        <SectionHead kicker="// SERVICES" title="What Steele AI delivers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ServiceCard
            icon={Cpu}
            title="Private Architecture"
            desc="Design local-first AI stacks sized to your hardware and use cases. Model selection, resource planning, and network isolation so inference stays under your roof."
          />
          <ServiceCard
            icon={Wrench}
            title="Deployment & Integration"
            desc="Install, configure, and wire local models into existing workflows — document tools, automation, internal knowledge bases, or custom applications."
          />
          <ServiceCard
            icon={MessageSquare}
            title="Training & Advisory"
            desc="Hands-on sessions and written runbooks so your team can operate, maintain, and expand the system independently after the engagement ends."
          />
        </div>
      </section>

      {/* How it fits */}
      <section className="bg-surface border border-hairline rounded-xl p-6 lg:p-8 space-y-6">
        <SectionHead kicker="// HOW IT FITS" title="Hardware and consulting work together" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted leading-relaxed">
          <p>
            Many clients begin with a Steele TECH. Desk Node, SOHO Vault, or Home Core system. Once the
            private cloud and compute are in place, Steele AI helps turn that capacity into working local
            AI capabilities — offline assistants, document analysis, or internal tools that never require
            a third-party API key.
          </p>
          <p>
            Others engage Steele AI first to define requirements and architecture, then select or upgrade
            hardware accordingly. Either sequence is supported. The goal remains the same: systems you
            own and control.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="space-y-6">
        <SectionHead kicker="// PRINCIPLES" title="How we work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Principle icon={Lock} title="Local by default" desc="Prefer on-prem inference and storage. Cloud services are used only when you explicitly request them." />
          <Principle icon={Shield} title="Fixed scope" desc="Engagements are defined with clear deliverables and pricing before work begins. No open-ended retainers required." />
          <Principle icon={Terminal} title="Practical delivery" desc="You receive working systems and documentation, not slide decks. The engagement ends when the system is operational." />
          <Principle icon={Brain} title="Ownership transfer" desc="Knowledge and access transfer to you. After the project, you should be able to run and extend the system yourself." />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-panel border border-cyan/30 rounded-xl p-8 lg:p-12 text-center space-y-5">
        <h2 className="text-2xl lg:text-3xl font-black uppercase text-white">
          Ready to discuss a private AI system?
        </h2>
        <p className="text-muted text-sm max-w-2xl mx-auto">
          Describe your use case and current hardware (or lack of it). We will respond with a clear
          scope recommendation and fixed pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={onOpenQuote} className={primaryBtn}>
            <span>Request a Consultation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button onClick={() => setActiveTab('home')} className={secondaryBtn}>
            <span>Back to Home</span>
          </button>
        </div>
      </section>
    </div>
  )
}

function SectionHead({ kicker, title }) {
  return (
    <div className="space-y-2">
      <div className="text-xs text-cyan font-bold uppercase tracking-widest">{kicker}</div>
      <h2 className="text-2xl lg:text-3xl font-bold uppercase text-white">{title}</h2>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-surface border border-hairline rounded-xl p-6 space-y-4">
      <Icon className="w-7 h-7 text-cyan" />
      <h3 className="text-sm font-bold text-white uppercase">{title}</h3>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </div>
  )
}

function Principle({ icon: Icon, title, desc }) {
  return (
    <div className="border-l-4 border-cyan bg-surface rounded p-4 space-y-2">
      <div className="flex items-center gap-2 text-white font-bold text-sm">
        <Icon className="w-4 h-4 text-emerald" />
        <span>{title}</span>
      </div>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </div>
  )
}
