import { useMemo, useState } from 'react'
import { Send, SlidersHorizontal, ShieldCheck, Wrench, ZoomIn, ZoomOut } from 'lucide-react'
import { TIERS, UPGRADES, STORAGE_OPTIONS } from '../data/tiersData'
import homeServerImg from '../images/home_server.png'

const MAINTENANCE_OPTIONS = [
  { id: 'none', label: 'Self-Managed (No Plan)', monthly: 0, desc: 'Full root access. You handle OS updates & backups.' },
  { id: 'sentinel', label: 'Sentinel Care', monthly: 49, desc: '24/7 read-only thermals & client-gated patch tunnels.' },
  { id: 'enterprise', label: 'Enterprise Care', monthly: 149, desc: 'Priority drive swap, cluster care & local AI tuning.' },
]

export default function SovereignTiers({ onRequestQuote }) {
  const [build, setBuild] = useState({
    tier: 'tier2',
    upsUpgrade: true,
    dualGpu: true,
    liquidCooling: true,
    acousticPanels: true,
    tenGbSwitch: true,
    storageCapacity: '32TB',
    maintenancePlan: 'sentinel',
  })

  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  const toggle = (key) => setBuild((prev) => ({ ...prev, [key]: !prev[key] }))

  const price = useMemo(() => {
    const base = TIERS.find((t) => t.id === build.tier)?.base ?? 0
    const upgradeTotal = UPGRADES.reduce((sum, u) => (build[u.key] ? sum + u.price : sum), 0)
    const storageTotal = STORAGE_OPTIONS.find((s) => s.size === build.storageCapacity)?.price ?? 0
    return base + upgradeTotal + storageTotal
  }, [build])

  const selectedPlan = MAINTENANCE_OPTIONS.find((m) => m.id === build.maintenancePlan)
  const tierName = TIERS.find((t) => t.id === build.tier)?.name

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-hairline pb-6 space-y-2">
        <div className="text-xs text-cyan font-bold uppercase tracking-widest">// INFRASTRUCTURE CATALOG</div>
        <h1 className="text-3xl font-black uppercase text-white">Sovereign Deployment Tiers & Hardware BOM</h1>
        <p className="text-xs text-muted max-w-3xl">
          Transparent fixed-rate pricing. Every package includes custom length cable trimming, thermal
          testing, acoustic dampening, and full root hardware access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive BOM Configurator */}
        <div className="lg:col-span-7 bg-surface border border-hairline rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase text-white">
              <SlidersHorizontal className="w-4 h-4 text-cyan" />
              <span>Interactive Bill of Materials Configurator</span>
            </div>
            <span className="text-xs text-muted">Live Price Matrix</span>
          </div>

          {/* Step 1: Baseline Chassis Platform */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted uppercase">1. Select Baseline Chassis Platform</label>
            <div className="grid grid-cols-3 gap-3">
              {TIERS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setBuild((prev) => ({ ...prev, tier: t.id }))}
                  className={`p-3 rounded text-left border transition-all text-xs cursor-pointer ${
                    build.tier === t.id
                      ? 'bg-panel border-cyan text-white shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                      : 'bg-obsidian border-hairline text-muted hover:border-muted'
                  }`}
                >
                  <div className="font-bold">{t.label}</div>
                  <div className="text-[10px] text-cyan mt-1">Base: ${t.base.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Thermal, Power & Compute Upgrades */}
          <div className="space-y-3 border-t border-hairline pt-4">
            <label className="text-xs font-bold text-muted uppercase">2. Thermal, Power & Compute Upgrades</label>
            <div className="space-y-2">
              {UPGRADES.map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggle(item.key)}
                  className={`p-3 rounded border cursor-pointer flex justify-between items-center transition-all ${
                    build[item.key] ? 'bg-panel border-cyan/60 text-white' : 'bg-obsidian border-hairline text-muted'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold flex items-center gap-2">
                      <span className={build[item.key] ? 'text-cyan' : 'text-muted'}>
                        {build[item.key] ? '[✓]' : '[ ]'}
                      </span>
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[10px] text-muted">{item.desc}</div>
                  </div>
                  <span className="text-xs font-bold text-cyan whitespace-nowrap ml-2">+${item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Local Encrypted Storage Capacity */}
          <div className="space-y-2 border-t border-hairline pt-4">
            <label className="text-xs font-bold text-muted uppercase">3. Local Encrypted Storage Capacity</label>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {STORAGE_OPTIONS.map((s) => (
                <button
                  key={s.size}
                  type="button"
                  onClick={() => setBuild((prev) => ({ ...prev, storageCapacity: s.size }))}
                  className={`p-2 rounded text-center border transition-all cursor-pointer ${
                    build.storageCapacity === s.size
                      ? 'bg-cyan text-obsidian font-bold border-cyan'
                      : 'bg-obsidian border-hairline text-muted'
                  }`}
                >
                  <div>{s.size}</div>
                  <div className="text-[9px] mt-0.5">{s.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Maintenance Plan Sub-Tiers */}
          <div className="space-y-3 border-t border-hairline pt-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-muted uppercase flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-cyan" />
                <span>4. Optional Zero-Trust Maintenance Plan</span>
              </label>
              <span className="text-[10px] text-cyan font-mono font-bold uppercase">
                // Pipe vs. Payload Protected
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {MAINTENANCE_OPTIONS.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setBuild((prev) => ({ ...prev, maintenancePlan: plan.id }))}
                  className={`p-3 rounded text-left border transition-all text-xs cursor-pointer flex flex-col justify-between ${
                    build.maintenancePlan === plan.id
                      ? 'bg-panel border-cyan text-white shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                      : 'bg-obsidian border-hairline text-muted hover:border-muted'
                  }`}
                >
                  <div>
                    <div className="font-bold flex justify-between items-center">
                      <span>{plan.label}</span>
                      <span className="text-cyan text-[10px] font-mono">
                        {plan.monthly === 0 ? '$0/mo' : `$${plan.monthly}/mo`}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted mt-1 leading-normal">
                      {plan.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Live Price & Summary Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-panel border-2 border-cyan rounded-xl p-6 space-y-6 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
            <div className="border-b border-hairline pb-4 flex justify-between items-center">
              <div>
                <div className="text-xs text-cyan font-bold uppercase">ESTIMATED TOTAL HARDWARE INVESTMENT</div>
                <div className="text-3xl font-black text-white mt-1">${price.toLocaleString()}</div>
                {selectedPlan && selectedPlan.monthly > 0 && (
                  <div className="text-xs text-gold font-mono font-bold mt-1">
                    + ${selectedPlan.monthly}/mo ({selectedPlan.label})
                  </div>
                )}
              </div>
              <span className="text-[10px] px-2 py-1 rounded bg-emerald/20 text-emerald border border-emerald/40 font-bold">
                FIXED HARDWARE RATE
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="font-bold text-muted uppercase">Selected Configuration Breakdown:</div>
              <div className="space-y-1.5 text-[11px] text-slate-200">
                <div className="flex justify-between border-b border-hairline/60 pb-1">
                  <span>Baseline Platform:</span>
                  <span className="font-bold uppercase text-cyan">{tierName}</span>
                </div>
                <div className="flex justify-between border-b border-hairline/60 pb-1">
                  <span>Storage Vault:</span>
                  <span className="font-bold">{build.storageCapacity} Local ZFS Raid-Z2</span>
                </div>
                <div className="flex justify-between border-b border-hairline/60 pb-1">
                  <span>Maintenance Service:</span>
                  <span className="font-bold text-gold">
                    {selectedPlan?.label} ({selectedPlan?.monthly === 0 ? '$0/mo' : `$${selectedPlan?.monthly}/mo`})
                  </span>
                </div>
                {UPGRADES.filter((u) => build[u.key]).map((u) => (
                  <div key={u.key} className="flex justify-between text-emerald">
                    <span>• {u.title}</span>
                    <span>+${u.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-surface border border-hairline rounded flex items-start gap-2.5 text-[10px] text-muted">
              <ShieldCheck className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
              <span>
                <strong>Zero-Trust Guarantee:</strong> Managed Care only monitors read-only hardware thermals and disk S.M.A.R.T. logs. Remote updates require client-gated tunnel activation.
              </span>
            </div>

            {/* Blueprint Modal Trigger Button */}
            <button
              type="button"
              onClick={() => {
                setIsZoomed(false)
                setIsBlueprintOpen(true)
              }}
              className="w-full py-2.5 bg-obsidian hover:bg-panel text-cyan border border-cyan/40 hover:border-cyan font-bold text-xs uppercase tracking-wider rounded transition-all flex justify-center items-center gap-2 cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>View Architecture Blueprint</span>
            </button>

            <button
              onClick={() => onRequestQuote(build, price)}
              className="w-full py-3.5 bg-cyan hover:bg-cyan/80 text-obsidian font-black text-xs uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] flex justify-center items-center gap-2 cursor-pointer">
              <Send className="w-4 h-4" />
              <span>Request Installation Booking</span>
            </button>
          </div>
        </div>
      </div>

      {/* Blueprint Modal Overlay with Zoom Feature */}
      {isBlueprintOpen && (
        <div className="fixed inset-0 z-50 bg-obsidian/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface border-2 border-cyan rounded-xl max-w-5xl w-full p-6 space-y-4 shadow-[0_0_30px_rgba(0,229,255,0.2)] my-auto">
            <div className="flex justify-between items-center border-b border-hairline pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-cyan uppercase tracking-widest">
                  // SYSTEM BLUEPRINT & HARDWARE TOPOLOGY
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-obsidian border border-cyan/40 text-cyan rounded hover:bg-cyan hover:text-obsidian transition-all cursor-pointer"
                >
                  {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  <span>{isZoomed ? 'Zoom Out' : 'Click to Zoom'}</span>
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsZoomed(false)
                  setIsBlueprintOpen(false)
                }}
                className="text-muted hover:text-white text-xs font-bold px-2.5 py-1 border border-hairline rounded cursor-pointer"
              >
                [ESC / CLOSE]
              </button>
            </div>

            <div className="space-y-3">
              <div className="overflow-auto max-h-[70vh] rounded border border-hairline bg-obsidian flex justify-center items-center p-2">
                <img
                  src={homeServerImg}
                  alt="Sovereign Infrastructure Hardware Deployment Diagram"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`transition-transform duration-300 cursor-zoom-in ${
                    isZoomed ? 'scale-150 cursor-zoom-out w-full object-contain' : 'w-full object-cover max-h-[65vh]'
                  }`}
                />
              </div>
              <p className="text-[11px] text-muted text-center">
                Visual representation of a complete sovereign hardware build configured for your home or office space.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
