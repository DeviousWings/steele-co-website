import React from 'react'
import { Wrench, ShieldCheck, Terminal, Cpu, HardDrive, CpuIcon, AlertTriangle } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-8 py-12 space-y-16 text-slate-200">
      {/* Hero Header */}
      <div className="space-y-4 border-b border-hairline pb-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>Origin & Mission // Radical Transparency</span>
          </div>
          <div className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-surface border border-hairline text-muted">
            Website still developing: <span className="text-gold font-bold">August 4, 2026</span>
          </div>
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Hardware is my trade. <br />
          <span className="text-cyan">Digital sovereignty</span> is the mission.
        </h1>
        <p className="text-base text-muted max-w-3xl leading-relaxed">
          Inspired by the practical, no-BS ethos of pioneers like <a href="https://rossmanngroup.com/louis-rossmann">Louis Rossmann</a> and the <a href="https://consumerrights.wiki/w/Main_Page">Right to Repair</a> movement, Steele Co. wasn't built in a corporate boardroom—it was built out of necessity, frustration with cloud tethers, and a fundamental belief in physical ownership.
        </p>
      </div>


      {/* Main Philosophy Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Who I Am */}
        <div className="space-y-6 bg-panel border border-hairline p-6 rounded">
          <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase">
            <Wrench className="w-4 h-4" />
            <span>The Practitioner, Not a Corporate Buzzword</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Who I Am & How I Work
          </h2>
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
            <p>
              I’m an IT practitioner, systems security guy, and hands-on hardware operator. I spend my days working with networks, enterprise hardware, and secure systems—not writing slick marketing copy or trying to lock customers into endless SaaS subscriptions.
            </p>
            <p>
              When I'm off the clock, I'm a family man on a budget with limited free time. Every hour saved wrestling with broken software or remote cloud dependencies is an extra hour spent with my kids. That practical focus drives everything built here: systems must be robust, self-contained, quiet, and just work—without needing a monthly cloud tether to stay alive.
            </p>
          </div>
        </div>

        {/* Right Column: The Problem */}
        <div className="space-y-6 bg-panel border border-hairline p-6 rounded">
          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem We're Fighting</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            The Death of Physical Ownership
          </h2>
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
            <p>
              We live in an era where you pay thousands of dollars for hardware, yet Big Tech retains ultimate control over it. Smart home hubs brick overnight because a company shuts down a server. Local AI features get locked behind monthly paywalls. Your personal files live on someone else's computer, scanned for corporate monetization.
            </p>
            <p>
              If your equipment requires an active internet connection and a third-party server just to turn on or run a local AI model, <strong>you don't own it—you're just renting permission to use it.</strong>
            </p>
          </div>
        </div>

      </div>

      {/* Core Principles (The Rossmann Ethos) */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2 border-b border-hairline pb-3">
          <ShieldCheck className="w-5 h-5 text-emerald" />
          <span>The Steele Co. Operational Guarantees</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-5 bg-surface border border-hairline rounded space-y-2">
            <div className="text-cyan font-mono text-xs font-bold">01 / FIXED-PRICE, NO RENT</div>
            <h3 className="text-sm font-bold text-white">No Monthly Tethers</h3>
            <p className="text-xs text-muted leading-relaxed">
              We sell fixed-price, on-premise hardware deployments. Once it's installed in your rack or on your desk, you own it outright. Zero subscriptions, zero remote kill-switches.
            </p>
          </div>

          <div className="p-5 bg-surface border border-hairline rounded space-y-2">
            <div className="text-cyan font-mono text-xs font-bold">02 / LOCAL CONTAINMENT</div>
            <h3 className="text-sm font-bold text-white">Data Stays Under Your Roof</h3>
            <p className="text-xs text-muted leading-relaxed">
              Local LLMs, local storage vaults, and local automation hubs. Your sensitive family and business data never leaves your local network unless you explicitly route it.
            </p>
          </div>

          <div className="p-5 bg-surface border border-hairline rounded space-y-2">
            <div className="text-cyan font-mono text-xs font-bold">03 / ADVOCACY FUNDING</div>
            <h3 className="text-sm font-bold text-white">Commercial Tech Funds Open Rights</h3>
            <p className="text-xs text-muted leading-relaxed">
              Revenue from our commercial deployments directly funds our public advocacy: drafting open-source consumer policy (The Sovereign Digital Identity Act) and educating the public on digital ownership.
            </p>
          </div>

        </div>
      </div>

      {/* The Rossmann Connection Banner */}
      <div className="p-6 bg-panel border border-cyan/30 rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-cyan font-bold uppercase tracking-wider">
            Public Advocacy & Policy Work
          </div>
          <h3 className="text-base font-bold text-white">
            Looking for the Sovereign Digital Identity (SDI) Act Master Draft?
          </h3>
          <p className="text-xs text-muted max-w-2xl">
            Read our complete model legislative framework aimed at outlawing forced cloud tethering, remote bricking, and intrusive hardware telemetry.
          </p>
        </div>
        <a
          href="#sdi-act"
          className="shrink-0 bg-cyan hover:bg-cyan/80 text-obsidian font-bold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-all"
        >
          View Master Draft ↗
        </a>
      </div>

    </div>
  )
}
