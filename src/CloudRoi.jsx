import CloudRoiCalculator from '../components/CloudRoiCalculator'

export default function CloudRoi({ setActiveTab }) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-hairline pb-6 space-y-2">
        <div className="text-xs text-cyan font-bold uppercase tracking-widest">// FINANCIAL TRANSITION MODEL</div>
        <h1 className="text-3xl font-black uppercase text-white">Cloud Bleed vs. Fixed On-Prem ROI Calculator</h1>
        <p className="text-xs text-muted max-w-3xl">
          Calculate how much revenue your household or business leaks into monthly cloud subscriptions
          versus a one-time Steele Co. sovereign rack purchase.
        </p>
      </div>

      <CloudRoiCalculator onBuildClick={() => setActiveTab('tiers')} />
    </div>
  )
}
