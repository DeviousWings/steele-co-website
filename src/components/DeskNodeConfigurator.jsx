import { useMemo, useState } from 'react'
import { Send, Clock, HardDrive, ShieldCheck, Wrench } from 'lucide-react'
import {
  DESK_NODE_BASE,
  DESK_NODE_OPTIONS,
  DESK_NODE_STORAGE,
  DESK_NODE_CARE,
  SIMPLISAFE_INSTALL,
} from '../data/deskNodeData'

export default function DeskNodeConfigurator({ onRequestQuote }) {
  const [selected, setSelected] = useState({ router: false, smartHome: false })
  const [storage, setStorage] = useState(null)
  const [maintenancePlan, setMaintenancePlan] = useState('none')
  const [simpliSafe, setSimpliSafe] = useState(false)

  const toggleOption = (key) => setSelected((prev) => ({ ...prev, [key]: !prev[key] }))

  const storageItem = DESK_NODE_STORAGE.find((s) => s.size === storage) || null
  const care = DESK_NODE_CARE.find((plan) => plan.id === maintenancePlan)

  const calc = useMemo(() => {
    let total = DESK_NODE_BASE.price
    DESK_NODE_OPTIONS.forEach((opt) => {
      if (selected[opt.key]) total += opt.price
    })
    if (storageItem) total += storageItem.drivePairCost
    if (simpliSafe) total += SIMPLISAFE_INSTALL.price
    return { total }
  }, [selected, storageItem, simpliSafe])

  const selectedOptions = [
    ...DESK_NODE_OPTIONS.filter((opt) => selected[opt.key]),
    ...(simpliSafe ? [SIMPLISAFE_INSTALL] : []),
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 bg-surface border border-hairline rounded-xl p-6 space-y-6">
        <div className="border-b border-hairline pb-4">
          <div className="text-xs text-cyan font-bold uppercase tracking-widest">// TIER 1 CONFIGURATOR</div>
          <h2 className="text-xl font-black uppercase text-white mt-1">Desk Node</h2>
          <p className="text-xs text-muted mt-2 leading-relaxed">
            Minimum is the base build. Add a router, your own cloud, or smart home to reach the top of this tier. Prices are averages.
          </p>
        </div>

        <div className="p-3 bg-panel border border-cyan/60 rounded flex justify-between items-start gap-3 text-xs">
          <div>
            <div className="font-bold text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan" />
              <span>{DESK_NODE_BASE.label}</span>
            </div>
            <div className="text-muted mt-1">{DESK_NODE_BASE.desc}</div>
            <div className="text-[10px] text-muted mt-1">{DESK_NODE_BASE.hardwareDesc}</div>
          </div>
          <span className="text-xs font-bold text-cyan whitespace-nowrap">${DESK_NODE_BASE.price.toLocaleString()}</span>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-muted uppercase">Optional Add-Ons</label>
          {DESK_NODE_OPTIONS.map((opt) => (
            <div
              key={opt.key}
              onClick={() => toggleOption(opt.key)}
              className={`p-3 rounded border cursor-pointer flex justify-between items-center transition-all ${
                selected[opt.key] ? 'bg-panel border-cyan/60 text-white' : 'bg-obsidian border-hairline text-muted'
              }`}
            >
              <div className="space-y-0.5">
                <div className="text-xs font-bold flex items-center gap-2">
                  <span className={selected[opt.key] ? 'text-cyan' : 'text-muted'}>
                    {selected[opt.key] ? '[✓]' : '[ ]'}
                  </span>
                  <span>{opt.label}</span>
                </div>
                <div className="text-[10px] text-muted">{opt.desc}</div>
              </div>
              <span className="text-xs font-bold text-cyan whitespace-nowrap ml-2">±${opt.price.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-hairline pt-4">
          <label className="text-xs font-bold text-muted uppercase flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-cyan" />
            <span>Your Cloud — Mirrored NAS, reachable without Google or Microsoft</span>
          </label>
          <div className="grid grid-cols-4 gap-2 text-xs">
            <button
              type="button"
              onClick={() => setStorage(null)}
              className={`p-2 rounded text-center border transition-all cursor-pointer ${
                storage === null ? 'bg-cyan text-obsidian font-bold border-cyan' : 'bg-obsidian border-hairline text-muted'
              }`}
            >
              <div>None</div>
              <div className="text-[9px] mt-0.5">Included</div>
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
                <div className="text-[9px] mt-0.5">±${s.drivePairCost.toLocaleString()}</div>
              </button>
            ))}
          </div>
          <p className="text-[10px] text-muted">Drive-pair average only. NAS enclosure is finalized on the booking.</p>
        </div>

        <div className="space-y-3 border-t border-hairline pt-4">
          <label className="text-xs font-bold text-muted uppercase flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-cyan" />
            <span>Care Plan</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {DESK_NODE_CARE.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setMaintenancePlan(plan.id)}
                className={`p-3 rounded text-left border transition-all text-xs cursor-pointer ${
                  maintenancePlan === plan.id
                    ? 'bg-panel border-cyan text-white shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                    : 'bg-obsidian border-hairline text-muted hover:border-muted'
                }`}
              >
                <div className="font-bold flex justify-between items-center gap-2">
                  <span>{plan.label}</span>
                  <span className="text-cyan text-[10px] font-mono">{plan.monthly === 0 ? '$0/mo' : `$${plan.monthly}/mo`}</span>
                </div>
                <div className="text-[10px] text-muted mt-1 leading-normal">{plan.desc}</div>
              </button>
            ))}
          </div>

          <div
            onClick={() => setSimpliSafe((prev) => !prev)}
            className={`p-3 rounded border cursor-pointer flex justify-between items-center transition-all ${
              simpliSafe ? 'bg-panel border-cyan/60 text-white' : 'bg-obsidian border-hairline text-muted'
            }`}
          >
            <div className="space-y-0.5">
              <div className="text-xs font-bold flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
                <span>{SIMPLISAFE_INSTALL.label}</span>
              </div>
              <div className="text-[10px] text-muted">{SIMPLISAFE_INSTALL.desc}</div>
            </div>
            <span className="text-xs font-bold text-cyan whitespace-nowrap ml-2">±${SIMPLISAFE_INSTALL.price.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-panel border-2 border-cyan rounded-xl p-6 space-y-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
          <div className="border-b border-hairline pb-4 flex justify-between items-center">
            <div>
              <div className="text-xs text-cyan font-bold uppercase">Estimated Total Hardware Investment</div>
              <div className="text-3xl font-black text-white mt-1">±${calc.total.toLocaleString()}</div>
              {care && care.monthly > 0 && (
                <div className="text-xs text-gold font-mono font-bold mt-1">
                  + ${care.monthly}/mo ({care.label})
                </div>
              )}
            </div>
            <span className="text-[10px] px-2 py-1 rounded bg-emerald/20 text-emerald border border-emerald/40 font-bold">
              AVERAGE ESTIMATE
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="font-bold text-muted uppercase">Selected Configuration Breakdown:</div>
            <div className="space-y-1.5 text-[11px] text-slate-200">
              <div className="flex justify-between border-b border-hairline/60 pb-1">
                <span>Baseline Platform:</span>
                <span className="font-bold uppercase text-cyan">Desk Node</span>
              </div>
              <div className="flex justify-between border-b border-hairline/60 pb-1">
                <span>Storage Vault:</span>
                <span className="font-bold">{storageItem ? storageItem.label : 'None'}</span>
              </div>
              <div className="flex justify-between border-b border-hairline/60 pb-1">
                <span>Maintenance Service:</span>
                <span className="font-bold text-gold">
                  {care?.label} ({care?.monthly === 0 ? '$0/mo' : `$${care?.monthly}/mo`})
                </span>
              </div>
              <div className="flex justify-between text-emerald">
                <span>• {DESK_NODE_BASE.label}</span>
                <span>${DESK_NODE_BASE.price.toLocaleString()}</span>
              </div>
              {selectedOptions.map((opt) => (
                <div key={opt.key} className="flex justify-between text-emerald">
                  <span>• {opt.label}</span>
                  <span>±${opt.price.toLocaleString()}</span>
                </div>
              ))}
              {storageItem && (
                <div className="flex justify-between text-emerald">
                  <span>• Drive pair</span>
                  <span>±${storageItem.drivePairCost.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              onRequestQuote?.(
                {
                  tier: 'Desk Node',
                  router: selected.router,
                  smartHome: selected.smartHome,
                  surveillance: simpliSafe,
                  storage: storageItem ? storageItem.label : 'None',
                  maintenance: care?.label || 'Self-Managed (No Plan)',
                },
                calc.total,
              )
            }
            className="w-full py-3.5 bg-cyan hover:bg-cyan/80 text-obsidian font-black text-xs uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] flex justify-center items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Request Installation Booking</span>
          </button>
        </div>
      </div>
    </div>
  )
}
