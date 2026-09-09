import { useMemo, useState } from 'react'
import { Send, Clock, HardDrive, ShieldCheck } from 'lucide-react'
import {
  LABOR_RATE,
  DESK_NODE_BASE,
  DESK_NODE_OPTIONS,
  DESK_NODE_STORAGE,
  DESK_NODE_ROUTER_NOTE,
} from '../data/deskNodeData'

export default function DeskNodeConfigurator({ onRequestQuote }) {
  const [selected, setSelected] = useState({ smartHome: false, surveillance: false })
  const [storage, setStorage] = useState(null) // null = no storage selected

  const toggleOption = (key) => setSelected((prev) => ({ ...prev, [key]: !prev[key] }))

  const calc = useMemo(() => {
    let hours = DESK_NODE_BASE.hours
    let hardwareCost = DESK_NODE_BASE.hardwareCost

    DESK_NODE_OPTIONS.forEach((opt) => {
      if (selected[opt.key]) {
        hours += opt.hours
        hardwareCost += opt.hardwareCost
      }
    })

    const storageItem = DESK_NODE_STORAGE.find((s) => s.size === storage)
    if (storageItem) hardwareCost += storageItem.drivePairCost

    const laborCost = hours * LABOR_RATE
    const total = laborCost + hardwareCost

    return { hours, laborCost, hardwareCost, total }
  }, [selected, storage])

  return (
    <div className="bg-surface border border-hairline rounded-xl p-6 space-y-6">
      <div className="border-b border-hairline pb-4">
        <div className="text-xs text-cyan font-bold uppercase tracking-widest">// TIER 1 CONFIGURATOR</div>
        <h2 className="text-xl font-black uppercase text-white mt-1">Desk Node</h2>
        <p className="text-xs text-muted mt-2 leading-relaxed">{DESK_NODE_BASE.desc}</p>
      </div>

      {/* Base always-included line */}
      <div className="p-3 bg-panel border border-hairline rounded flex justify-between items-start gap-3 text-xs">
        <div>
          <div className="font-bold text-white flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan" />
            <span>Base Build & Ad-Blocking Core</span>
          </div>
          <div className="text-muted mt-1">{DESK_NODE_BASE.hardwareDesc}</div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-cyan font-bold">{DESK_NODE_BASE.hours} hrs labor</div>
          <div className="text-muted">+${DESK_NODE_BASE.hardwareCost} hw</div>
        </div>
      </div>

      {/* Optional add-ons */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-muted uppercase">Optional Add-Ons</label>
        {DESK_NODE_OPTIONS.map((opt) => (
          <div
            key={opt.key}
            onClick={() => toggleOption(opt.key)}
            className={`p-3 rounded border cursor-pointer flex justify-between items-start gap-3 transition-all text-xs ${
              selected[opt.key] ? 'bg-panel border-cyan/60 text-white' : 'bg-obsidian border-hairline text-muted'
            }`}
          >
            <div>
              <div className="font-bold flex items-center gap-2">
                <span className={selected[opt.key] ? 'text-cyan' : 'text-muted'}>
                  {selected[opt.key] ? '[✓]' : '[ ]'}
                </span>
                <span>{opt.label}</span>
                {opt.isAverage && (
                  <span className="text-[9px] text-gold border border-gold/30 bg-gold/10 px-1.5 py-0.5 rounded">
                    AVG ESTIMATE
                  </span>
                )}
              </div>
              <div className="text-[10px] text-muted mt-1 leading-normal">{opt.desc}</div>
            </div>
            <div className="text-right shrink-0 font-bold text-cyan whitespace-nowrap">
              +{opt.hours} hrs
            </div>
          </div>
        ))}
      </div>

      {/* Storage selection */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-muted uppercase flex items-center gap-1.5">
          <HardDrive className="w-3.5 h-3.5 text-cyan" />
          <span>Cloud Storage (Optional, Mirrored NAS)</span>
        </label>
        <div className="grid grid-cols-4 gap-2 text-xs">
          <button
            type="button"
            onClick={() => setStorage(null)}
            className={`p-2 rounded text-center border transition-all cursor-pointer ${
              storage === null ? 'bg-cyan text-obsidian font-bold border-cyan' : 'bg-obsidian border-hairline text-muted'
            }`}
          >
            None
          </button>
          {DESK_NODE_STORAGE.map((s) => (
            <button
              key={s.size}
              type="button"
              onClick={() => setStorage(s.size)}
              className={`p-2 rounded text-center border transition-all cursor-pointer ${
                storage === s.size ? 'bg-cyan text-obsidian font-bold border-cyan' : 'bg-obsidian border-hairline text-muted'
              }`}
            >
              <div>{s.size}</div>
              <div className="text-[9px] mt-0.5">+${s.drivePairCost}</div>
            </button>
          ))}
        </div>
        <p className="text-[10px] text-muted">NAS enclosure cost not yet included — finalized per build during consultation.</p>
      </div>

      {/* Router note */}
      <div className="p-3 bg-obsidian border border-hairline rounded text-[10px] text-muted flex items-start gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
        <span>{DESK_NODE_ROUTER_NOTE}</span>
      </div>

      {/* Totals */}
      <div className="p-4 bg-panel border-2 border-cyan rounded-xl space-y-2">
        <div className="flex justify-between text-xs text-muted">
          <span>Total Labor ({calc.hours} hrs × ${LABOR_RATE}/hr)</span>
          <span className="text-white font-bold">${calc.laborCost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-xs text-muted">
          <span>Total Hardware</span>
          <span className="text-white font-bold">${calc.hardwareCost.toLocaleString()}</span>
        </div>
        <div className="border-t border-hairline pt-2 flex justify-between items-center">
          <span className="text-xs text-cyan font-bold uppercase">Estimated Total</span>
          <span className="text-2xl font-black text-white">${calc.total.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={() => onRequestQuote?.({ tier: 'Desk Node', ...selected, storage }, calc.total)}
        className="w-full py-3.5 bg-cyan hover:bg-cyan/80 text-obsidian font-black text-xs uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] flex justify-center items-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Request Desk Node Booking</span>
      </button>
    </div>
  )
}
