import { useMemo, useState } from 'react'
import { Send, Copy, Check } from 'lucide-react'

export default function ConstituentGenerator() {
  const [form, setForm] = useState({
    name: 'J. Steele',
    district: 'Utah 3rd District',
    representative: 'Representative John Curtis / Senator',
    tradeRole: 'On-Premises Infrastructure Technician & Constituent',
  })
  const [copied, setCopied] = useState(false)

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const letterText = useMemo(() => {
    return `Dear ${form.representative},

My name is ${form.name}, and I am a constituent in ${form.district} working as a ${form.tradeRole}.

I am writing to formally present a critical legislative policy framework regarding constitutional property rights, digital sovereignty, and consumer device protection: The Sovereign Digital Identity and Resource Nationalization Act (SDI Act of 2026).

Currently, corporate entities exploit statutory loopholes in software licensing to deprive American consumers of true personal property ownership. Devices we purchase are degraded remotely behind forced micro-subscriptions, and our personal, business, and biometric data is harvested without warrant or equitable compensation.

The SDI Act establishes three key conservative property pillars:
1. STATUTORY DATA PROPERTY RIGHTS: Establishing that personal and business data generated on physical devices remains the unalienable property of the user. If third-party platforms monetize user metrics under valid agreement, the user is entitled to a mandatory 10% gross dividend.
2. CONSUMER ENJOYMENT & SUBSCRIPTION LOCK PROTECTION: Outlawing remote software degradation, forced ad-injection, or retroactively placing physical hardware features behind subscription paywalls after point-of-sale.
3. ON-PREMISE ENCLAVE RIGHTS: Guaranteeing the right of individuals and small-to-mid-sized businesses to operate air-gapped, sovereign infrastructure without remote cloud killswitches or forced vendor telemetry.

As your constituent, I request an in-district briefing meeting with your senior legislative director during the upcoming congressional recess to deliver the complete statutory text and technical brief.

Respectfully submitted,

${form.name}
${form.tradeRole}
Contact: constituent-sovereign@steele-infrastructure.org`
  }, [form])

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="bg-surface border border-hairline rounded-xl p-6 space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm font-bold text-gold uppercase">
          <Send className="w-4 h-4" />
          <span>Constituent Outreach Generator</span>
        </div>
        <p className="text-xs text-muted mt-1">
          Deliver a cited, professional legislative demand directly to your Congressional Representative.
        </p>
      </div>

      <div className="space-y-3 text-xs">
        <Field label="Your Name / Trade Title" value={form.name} onChange={update('name')} />
        <Field label="Congressional District" value={form.district} onChange={update('district')} />
        <Field label="Representative / Senator Name" value={form.representative} onChange={update('representative')} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-[10px] text-muted">
          <span>GENERATED DRAFT BRIEF:</span>
          <button onClick={handleCopy} className="text-cyan hover:underline flex items-center gap-1 font-bold">
            {copied ? <Check className="w-3 h-3 text-emerald" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY LETTER'}</span>
          </button>
        </div>
        <div className="p-3 bg-obsidian border border-hairline rounded text-[10px] text-muted h-48 overflow-y-auto whitespace-pre-wrap font-mono">
          {letterText}
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="text-[10px] font-bold text-muted uppercase">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none"
      />
    </div>
  )
}
