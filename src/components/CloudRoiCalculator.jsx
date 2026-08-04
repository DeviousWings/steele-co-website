import { useMemo, useState } from 'react'
import { DollarSign } from 'lucide-react'

const STEELE_INVESTMENT = 7800

export default function CloudRoiCalculator({ onBuildClick }) {
  const [inputs, setInputs] = useState({
    cloudStorageMonthly: 45,
    saasAImonthly: 60,
    securityCloudMonthly: 35,
    businessCloudServers: 250,
    years: 3,
  })

  const set = (key) => (e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }))

  const calc = useMemo(() => {
    const monthlyBleed =
      Number(inputs.cloudStorageMonthly) +
      Number(inputs.saasAImonthly) +
      Number(inputs.securityCloudMonthly) +
      Number(inputs.businessCloudServers)
    const totalBleed = monthlyBleed * 12 * Number(inputs.years)
    const netSavings = totalBleed - STEELE_INVESTMENT
    const breakEvenMonths = Math.ceil(STEELE_INVESTMENT / (monthlyBleed || 1))
    return { monthlyBleed, totalBleed, netSavings, breakEvenMonths }
  }, [inputs])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 bg-surface border border-hairline rounded-xl p-6 space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold uppercase border-b border-hairline pb-3">
          <DollarSign className="w-4 h-4 text-cyan" />
          <span>Monthly Cloud Subscription Audit Inputs</span>
        </div>

        <div className="space-y-4 text-xs">
          <Slider label="Cloud Storage (iCloud, Google One, Dropbox):" value={inputs.cloudStorageMonthly} max={200} onChange={set('cloudStorageMonthly')} />
          <Slider label="SaaS AI & API Subscriptions (ChatGPT, Claude):" value={inputs.saasAImonthly} max={300} onChange={set('saasAImonthly')} />
          <Slider label="Smart Home Cloud Cameras (Ring, Nest, Arlo):" value={inputs.securityCloudMonthly} max={150} onChange={set('securityCloudMonthly')} />
          <Slider label="Business Cloud Servers (AWS / Azure / Egress fees):" value={inputs.businessCloudServers} max={1000} onChange={set('businessCloudServers')} />
          <div>
            <div className="flex justify-between font-bold">
              <span>Projection Timeline (Years):</span>
              <span className="text-gold font-bold">{inputs.years} Years</span>
            </div>
            <input type="range" min="1" max="5" value={inputs.years} onChange={set('years')} className="w-full mt-2 accent-gold" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 bg-panel border-2 border-cyan rounded-xl p-6 lg:p-8 space-y-6 shadow-[0_0_20px_rgba(0,229,255,0.15)] flex flex-col justify-between">
        <div className="space-y-6">
          <div className="text-xs text-cyan font-bold uppercase tracking-widest">// FINANCIAL MATRIX COMPARISON</div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-obsidian p-4 rounded border border-alert/40">
              <div className="text-[10px] text-alert font-bold uppercase">Total Cloud Bleed ({inputs.years} Yrs)</div>
              <div className="text-2xl font-black text-alert mt-1">${calc.totalBleed.toLocaleString()}</div>
              <div className="text-[10px] text-muted mt-1">${calc.monthlyBleed}/month perpetual cost</div>
            </div>
            <div className="bg-obsidian p-4 rounded border border-emerald/40">
              <div className="text-[10px] text-emerald font-bold uppercase">SOHO Vault Rack Cost</div>
              <div className="text-2xl font-black text-emerald mt-1">${STEELE_INVESTMENT.toLocaleString()}</div>
              <div className="text-[10px] text-muted mt-1">One-time capital expense (100% owned)</div>
            </div>
          </div>

          <div className="p-4 bg-obsidian border border-hairline rounded space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted">Net Capital Saved ({inputs.years} Years):</span>
              <span className={`font-black text-sm ${calc.netSavings >= 0 ? 'text-emerald' : 'text-alert'}`}>
                ${calc.netSavings.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted">Break-Even Timeline:</span>
              <span className="font-bold text-cyan">{calc.breakEvenMonths} Months</span>
            </div>
          </div>

          <p className="text-xs text-muted leading-relaxed">
            By transitioning to localized hardware, you stop paying monthly rent for your own life while
            gaining 10x faster 10Gbps local network speeds and absolute data sovereignty.
          </p>
        </div>

        <button
          onClick={onBuildClick}
          className="w-full py-3 bg-cyan hover:bg-cyan/80 text-obsidian font-black text-xs uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]"
        >
          Build Your Fixed-Rate Rack
        </button>
      </div>
    </div>
  )
}

function Slider({ label, value, max, onChange }) {
  return (
    <div>
      <div className="flex justify-between font-bold text-slate-200">
        <span>{label}</span>
        <span className="text-cyan">${value}/mo</span>
      </div>
      <input type="range" min="0" max={max} value={value} onChange={onChange} className="w-full mt-2 accent-cyan" />
    </div>
  )
}
