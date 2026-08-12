import React from 'react'
import { X, Terminal, Cpu, Layers, Wrench, Shield, CheckCircle } from 'lucide-react'
import { PARENT_ECOSYSTEM, BUILD_LOG_ENTRIES } from '../data/devLogData'

export default function BuildLogDrawer({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden no-print">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
      />

      {/* Slide-Over Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-panel border-l border-hairline shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-hairline bg-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan" />
              <div>
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider font-mono">
                  LIVE DEV LOG // STEELE CO.
                </h3>
                <div className="text-[10px] text-muted">Ecosystem Roadmap & Build Ledger</div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded bg-obsidian text-muted hover:text-slate-100 hover:bg-hairline transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Scroll Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-8 font-sans text-xs">
            
            {/* Parent Organization Box */}
            <div className="bg-obsidian border border-hairline rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-cyan font-mono font-bold tracking-widest uppercase flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  {PARENT_ECOSYSTEM.parent}
                </span>
                <span className="text-[9px] bg-cyan/10 text-cyan border border-cyan/30 px-1.5 py-0.5 rounded font-mono">
                  PARENT ENTITY
                </span>
              </div>
              
              <p className="text-muted text-xs leading-relaxed">
                {PARENT_ECOSYSTEM.tagline}
              </p>

              {/* Child Divisions: Steele Tech & The Black Forge */}
              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {PARENT_ECOSYSTEM.divisions.map((div, i) => (
                  <div key={i} className={`p-3 rounded border bg-panel/60 ${div.color}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-100 text-xs flex items-center gap-1.5">
                        {div.name === 'The Black Forge' ? (
                          <Wrench className="w-3 h-3 text-gold" />
                        ) : (
                          <Cpu className="w-3 h-3 text-cyan" />
                        )}
                        {div.name}
                      </span>
                      <span className="text-[9px] font-mono opacity-80">{div.badge}</span>
                    </div>
                    <p className="text-[11px] text-muted leading-tight mb-2">{div.desc}</p>
                    <div className="text-[9px] font-mono font-bold tracking-wider opacity-90">{div.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Build Log Feed Timeline */}
            <div className="space-y-4">
              <div className="text-[11px] font-mono font-bold text-muted uppercase tracking-widest flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-gold" />
                <span>CHRONOLOGICAL BUILD LEDGER</span>
              </div>

              <div className="space-y-4 relative border-l border-hairline/80 ml-2 pl-4">
                {BUILD_LOG_ENTRIES.map((entry) => (
                  <div key={entry.id} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-cyan border-2 border-obsidian" />
                    
                    <div className="bg-obsidian border border-hairline rounded p-3.5 space-y-2 group-hover:border-cyan/40 transition-colors">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-cyan font-bold">{entry.category}</span>
                        <span className="text-muted">{entry.date}</span>
                      </div>

                      <h4 className="font-bold text-slate-200 text-xs">{entry.title}</h4>
                      <p className="text-[11px] text-muted leading-relaxed">{entry.summary}</p>

                      {/* Bullet points */}
                      <ul className="space-y-1 pt-1 border-t border-hairline/40">
                        {entry.bullets.map((b, idx) => (
                          <li key={idx} className="text-[10px] text-slate-300 flex items-start gap-1.5">
                            <CheckCircle className="w-3 h-3 text-emerald shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-hairline bg-surface text-center font-mono text-[10px] text-muted">
            STEELE CO. ECOSYSTEM // SOVEREIGN ENGINE 2026
          </div>

        </div>
      </div>
    </div>
  )
}
