import React from 'react'
import { CheckCircle2, Circle, Clock, Target, Flag, ShieldCheck } from 'lucide-react'

export default function MissionRoadmapDrawer({ isOpen, onClose }) {
  if (!isOpen) return null

  const ROADMAP_ITEMS = [
    {
      category: "Phase 1: Core Web Engine & Deployment",
      status: "completed",
      tasks: [
        { label: "Vite + React single-page architecture", completed: true },
        { label: "Tailwind CSS integration & theme system", completed: true },
        { label: "Automated GitHub Actions CI/CD deployment pipeline", completed: true },
        { label: "Custom subpath routing for GitHub Pages", completed: true },
      ]
    },
    {
      category: "Phase 2: Platform Messaging & Value Calculators",
      status: "completed",
      tasks: [
        { label: "Productized Sovereign Hardware Tiers & BOM sheets", completed: true },
        { label: "Cloud Bleed ROI Calculator engine", completed: true },
        { label: "SDI Act Vault & legislative framework draft", completed: true },
        { label: "No-Data, No-Fee service code modal", completed: true },
      ]
    },
    {
      category: "Phase 3: Interactive Demos & Security Tools",
      status: "in-progress",
      tasks: [
        { label: "Live Security Packet Inspector & Exposé Tool", completed: true },
        { label: "Interactive Hardware Rack Builder / Configurator", completed: false },
        { label: "Printable SDI Act Legislative PDF Generator", completed: false },
      ]
    },
    {
      category: "Phase 4: Community & Open Source Advocacy",
      status: "planned",
      tasks: [
        { label: "Downloadable Sovereign Desk Node build blueprints", completed: false },
        { label: "Public SDI Act petition & feedback portal", completed: false },
      ]
    }
  ]

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm no-print">
      <div className="w-full max-w-2xl bg-obsidian border-l border-hairline h-full p-6 lg:p-8 overflow-y-auto text-slate-200 flex flex-col justify-between">
        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-start pb-4 border-b border-hairline">
            <div>
              <div className="flex items-center gap-2 text-cyan text-xs font-mono font-bold tracking-wider uppercase mb-1">
                <Target className="w-4 h-4" />
                <span>Project Mission & Roadmap</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-wide">
                Steele Co. Development Log
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-muted hover:text-white font-bold text-lg px-2 py-1 rounded bg-surface border border-hairline"
            >
              ✕
            </button>
          </div>

          {/* Mission Statement Box */}
          <div className="p-4 rounded bg-panel border border-cyan/30 space-y-2">
            <div className="flex items-center gap-2 text-cyan font-mono text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Core Mission Statement</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              To give individuals and local businesses full physical ownership over their digital infrastructure. Steele Co. builds quiet, secure, on-premise hardware to eliminate forced cloud subscriptions, intrusive corporate telemetry, and remote data harvesting.
            </p>
          </div>

          {/* Progress Overview Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-muted">
              <span>Platform Build Completion</span>
              <span className="text-cyan font-bold">75%</span>
            </div>
            <div className="w-full h-2 bg-surface rounded-full overflow-hidden border border-hairline">
              <div className="h-full bg-cyan w-[75%] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
            </div>
          </div>

          {/* Checklist Sections */}
          <div className="space-y-6 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted border-b border-hairline pb-2 flex items-center gap-2">
              <Flag className="w-3.5 h-3.5 text-gold" />
              <span>Implementation Checklist</span>
            </h3>

            {ROADMAP_ITEMS.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-mono">
                    {section.category}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    section.status === 'completed'
                      ? 'border-emerald/40 text-emerald bg-emerald/10'
                      : section.status === 'in-progress'
                      ? 'border-gold/40 text-gold bg-gold/10'
                      : 'border-hairline text-muted bg-surface'
                  }`}>
                    {section.status.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-1.5 pl-2 border-l border-hairline">
                  {section.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} className="flex items-center gap-2 text-xs">
                      {task.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                      ) : section.status === 'in-progress' ? (
                        <Clock className="w-4 h-4 text-gold shrink-0 animate-pulse" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted shrink-0" />
                      )}
                      <span className={task.completed ? "text-slate-300 line-through opacity-80" : "text-white"}>
                        {task.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="pt-6 mt-6 border-t border-hairline flex justify-between items-center text-xs font-mono text-muted">
          <span>Status: Active Build</span>
          <button
            onClick={onClose}
            className="border border-hairline hover:border-cyan text-slate-300 hover:text-cyan px-4 py-1.5 rounded transition-colors"
          >
            Close Roadmap
          </button>
        </div>
      </div>
    </div>
  )
}
