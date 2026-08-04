import { Server, Shield, BookOpen } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'home', label: 'Home // Positioning', mobileLabel: 'Home' },
  { id: 'tiers', label: 'Sovereign Tiers & BOM', mobileLabel: 'Tiers & Config' },
  { id: 'sdi-act', label: 'The SDI Act Vault', mobileLabel: 'SDI Act Vault' },
  { id: 'expose', label: 'Tech Exposé & Inspector', mobileLabel: 'Exposé & Packets' },
  { id: 'roi', label: 'Cloud Bleed Calculator', mobileLabel: 'Cloud ROI' },
]

export default function Navbar({ activeTab, setActiveTab, onOpenQuote, onOpenDraft, onOpenContract }) {
  return (
    <>
      {/* Status ticker */}
      <div className="top-banner bg-panel border-b border-hairline text-xs py-2 px-4 flex justify-between items-center text-muted overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            SYSTEM STATUS: ON-PREM SOVEREIGN
          </span>
          <span className="text-hairline">|</span>
          <span>ZERO THIRD-PARTY TRACKERS</span>
          <span className="text-hairline">|</span>
          <span className="text-cyan">ENCRYPTED LOCAL CONTAINMENT</span>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <button
            onClick={onClose}
            className="border border-hairline hover:border-cyan text-xs text-muted hover:text-cyan px-4 py-1.5 rounded transition-colors"
          >
            Close Dev Log
          </button>

          <button onClick={onOpenDraft} className="text-gold hover:underline flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SDI ACT MASTER DRAFT: JULY 2026 ↗</span>
          </button>
          <button onClick={onOpenContract} className="hover:text-cyan underline transition-colors">
            "NO DATA, NO FEE" CODE
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav className="no-print sticky top-0 z-40 bg-obsidian/90 backdrop-blur-md border-b border-hairline px-4 lg:px-8 py-3.5 flex justify-between items-center">
        <div onClick={() => setActiveTab('home')} className="cursor-pointer flex items-center gap-2 group">
          <div className="p-2 bg-panel border border-hairline rounded group-hover:border-cyan transition-colors">
            <Server className="w-5 h-5 text-cyan" />
          </div>
          <div>
            <div className="font-bold text-base tracking-wider flex items-center gap-2">
              STEELE CO.
              <span className="text-cyan text-xs px-1.5 py-0.5 border border-cyan/30 rounded bg-cyan/10">HARDWARE</span>
            </div>
            <div className="text-[10px] text-muted tracking-widest uppercase">Sovereign Data Infrastructure</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 lg:gap-2 text-xs">
          {NAV_ITEMS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded transition-all uppercase tracking-wide font-medium ${
                activeTab === tab.id
                  ? 'bg-panel text-cyan border border-cyan/40 shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                  : 'text-muted hover:text-slate-200 hover:bg-surface'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={onOpenQuote}
          className="bg-cyan hover:bg-cyan/80 text-obsidian font-bold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)] flex items-center gap-2"
        >
          <Shield className="w-4 h-4" />
          <span>Secure Space</span>
        </button>
      </nav>

      {/* Mobile tabs */}
      <div className="no-print md:hidden bg-panel border-b border-hairline p-2 flex overflow-x-auto gap-2 text-xs">
        {NAV_ITEMS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded whitespace-nowrap text-[11px] ${
              activeTab === tab.id ? 'bg-cyan text-obsidian font-bold' : 'bg-surface text-muted'
            }`}
          >
            {tab.mobileLabel}
          </button>
        ))}
      </div>
      
    </>
  )
}

          <button
            onClick={onClose}
            className="border border-hairline hover:border-cyan text-xs text-muted hover:text-cyan px-4 py-1.5 rounded transition-colors"
          >
            Close Dev Log
          </button>

