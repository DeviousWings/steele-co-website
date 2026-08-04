import { useMemo, useState } from 'react'
import { Send, SlidersHorizontal, ShieldCheck, Wrench } from 'lucide-react'
import { TIERS, UPGRADES, STORAGE_OPTIONS } from '../data/tiersData'

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
    maintenancePlan: 'sentinel', // Default to Sentinel Care
  })

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
                  onClick={() => setBuild((prev) => ({ ...prev, storageCapacity: s.size }))}
                  className={`p-2 rounded text-center border transition-all cursor-pointer ${
                    build.storageCapacity === s.size
                      ? 'bg-cyan text-obsidian font-bold border-cyan'
                      : 'bg-obsidian border-hairline text-muted'
                  }`}
                >
                  <div>{s.size}</div>
                  <div className="text-[9px] mt-0.
