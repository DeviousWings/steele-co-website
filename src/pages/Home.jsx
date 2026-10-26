import { CheckCircle, ChevronRight, HardDrive, Home as HomeIcon, Lock, Server, ShieldCheck, Wrench } from 'lucide-react'
import TerminalMonitor from '../components/TerminalMonitor'
import CloudRoiCalculator from '../components/CloudRoiCalculator'

const primaryBtn =
  'bg-cyan text-obsidian font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider hover:bg-cyan/80 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-2'
const secondaryBtn =
  'bg-panel hover:bg-panel/70 text-slate-200 border border-hairline font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-2'

export default function Home({ setActiveTab }) {
  const scrollToHow = () => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-16">
      {/* Hero: offer + primary CTA above the fold */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-hairline pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-semibold">
            <HomeIcon className="w-3.5 h-3.5" />
            <span>PRIVATE HOME CLOUD // BUILT & INSTALLED FOR YOU</span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight uppercase text-white">
            Your own private cloud, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-white to-cyan">
              installed in your home.
            </span>
          </h1>

          <p className="text-muted text-base leading-relaxed">
            Steele TECH. builds and installs on-prem personal cloud hardware — private backup, network-wide
            ad blocking, and local smart home control — so your photos, files, and camera feeds stay on your
            property instead of someone else's servers. One-time, published pricing. No required subscription.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button onClick={() => setActiveTab('tiers')} className={primaryBtn}>
              <span>See Plans & Pricing</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={scrollToHow} className={secondaryBtn}>
              <span>How It Works</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-hairline/60 text-xs">
            <Guarantee title="Fixed Pricing" desc="Published hardware BOM & labor sheets." />
            <Guarantee title="No Data, No Fee" desc="Zero charge if recovery test fails." />
            <Guarantee title="100% On-Prem" desc="Zero external telemetry reliance." />
          </div>
        </div>

        <div className="lg:col-span-5">
          <TerminalMonitor />
        </div>
      </div>

      {/* Who it's for */}
      <section className="space-y-6">
        <SectionHead kicker="// WHO IT'S FOR" title="For households that want their data at home" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Families" desc="Keep photos, videos, and important documents backed up on a drive you own — not in a monthly cloud plan." />
          <Card title="Home offices" desc="Small office / home office setups that need private file storage and a segmented, ad-free network." />
          <Card title="Privacy-minded tinkerers" desc="People who want local smart home control and even private, offline AI — without cloud logins." />
        </div>
      </section>

      {/* What you get */}
      <section className="space-y-6">
        <SectionHead kicker="// WHAT YOU GET" title="Real hardware, set up and working" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Benefit icon={HardDrive} title="Private backup" desc="Mirrored drive storage (4TB–16TB) in your home, so one drive failing doesn't lose your files." />
          <Benefit icon={ShieldCheck} title="Ad & tracker blocking" desc="Every Desk Node includes a Raspberry Pi 5 running AdGuard Home that blocks ads network-wide." />
          <Benefit icon={HomeIcon} title="Local smart home" desc="Optional Home Assistant hub that runs your devices locally with zero cloud telemetry." />
          <Benefit icon={Server} title="Room to grow" desc="Step up to SOHO Vault (multi-VLAN office infrastructure) or Home Core (local AI / LLMs)." />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-surface border border-hairline rounded-xl p-6 lg:p-8 space-y-6 scroll-mt-24">
        <SectionHead kicker="// HOW IT WORKS" title="Three steps to a private home cloud" />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Step n="1" title="Pick a plan" desc="Choose Desk Node, SOHO Vault, or Home Core and configure storage and add-ons with live pricing." />
          <Step n="2" title="Request a quote" desc="Send your configuration. You get a fixed price based on published hardware and labor rates." />
          <Step n="3" title="We build & install" desc="We assemble, configure, and test the system on-site. It's yours — hardware, data, and keys." />
        </ol>
        <button onClick={() => setActiveTab('tiers')} className={primaryBtn + ' w-fit'}>
          <span>Configure Your System</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </section>

      {/* Proof / pricing transparency */}
      <section className="space-y-6">
        <SectionHead kicker="// WHY TRUST IT" title="Transparent by design" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Proof icon={Wrench} title="Published plans" desc="Desk Node from $1,850 · SOHO Vault from $5,500 · Home Core from $14,500." />
          <Proof icon={CheckCircle} title="Itemized labor" desc="Flat $150/hr with average hours listed per task — no hidden line items." />
          <Proof icon={Lock} title="You own it" desc="The hardware lives on your property and your data never leaves unless you send it." />
          <Proof icon={ShieldCheck} title="No Data, No Fee" desc="If the recovery test fails, you aren't charged." />
        </div>
      </section>

      {/* ROI calculator */}
      <section className="bg-surface border border-cyan/30 rounded-xl p-6 lg:p-8 space-y-6 shadow-[0_0_30px_rgba(0,229,255,0.05)]">
        <div className="border-b border-hairline pb-4 space-y-2">
          <div className="text-xs text-cyan font-bold uppercase tracking-widest">// COST COMPARISON</div>
          <h2 className="text-2xl lg:text-3xl font-black uppercase text-white">Monthly Cloud Fees vs. One-Time Hardware</h2>
          <p className="text-xs text-muted max-w-3xl">
            See how your current cloud subscriptions compare to a one-time Steele TECH. system.
          </p>
        </div>
        <CloudRoiCalculator onBuildClick={() => setActiveTab('tiers')} />
      </section>

      {/* Closing CTA */}
      <section className="bg-panel border border-cyan/30 rounded-xl p-8 lg:p-12 text-center space-y-5">
        <h2 className="text-2xl lg:text-4xl font-black uppercase text-white">Keep your data on your property.</h2>
        <p className="text-muted text-sm max-w-2xl mx-auto">
          Pick a plan, get a fixed quote, and we'll install a private home cloud you fully own.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setActiveTab('tiers')} className={primaryBtn}>
            <span>See Plans & Pricing</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button onClick={() => setActiveTab('faq')} className={secondaryBtn}>
            <span>Read the FAQ</span>
          </button>
        </div>
      </section>
    </div>
  )
}

function SectionHead({ kicker, title }) {
  return (
    <div className="space-y-2">
      <div className="text-xs text-cyan font-bold uppercase tracking-widest">{kicker}</div>
      <h2 className="text-2xl lg:text-3xl font-bold uppercase text-white">{title}</h2>
    </div>
  )
}

function Card({ title, desc }) {
  return (
    <div className="bg-surface border border-hairline rounded-xl p-5 space-y-2">
      <h3 className="text-sm font-bold text-gold uppercase">{title}</h3>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </div>
  )
}

function Benefit({ icon: Icon, title, desc }) {
  return (
    <div className="bg-surface border border-hairline rounded-xl p-5 space-y-3">
      <Icon className="w-6 h-6 text-cyan" />
      <h3 className="text-sm font-bold text-white uppercase">{title}</h3>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </div>
  )
}

function Step({ n, title, desc }) {
  return (
    <li className="bg-panel border border-hairline rounded-lg p-5 space-y-2">
      <div className="text-cyan font-mono font-black text-2xl">{n}</div>
      <h3 className="text-sm font-bold text-white uppercase">{title}</h3>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </li>
  )
}

function Proof({ icon: Icon, title, desc }) {
  return (
    <div className="border-l-4 border-cyan bg-surface rounded p-4 space-y-2">
      <div className="flex items-center gap-2 text-white font-bold text-sm">
        <Icon className="w-4 h-4 text-emerald" />
        <span>{title}</span>
      </div>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </div>
  )
}

function Guarantee({ title, desc }) {
  return (
    <div>
      <div className="text-white font-bold flex items-center gap-1.5">
        <CheckCircle className="w-3.5 h-3.5 text-emerald" />
        <span>{title}</span>
      </div>
      <div className="text-[11px] text-muted mt-0.5">{desc}</div>
    </div>
  )
}
