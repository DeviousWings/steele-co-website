import { Shield, X } from 'lucide-react'

export default function QuoteModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Deployment request submitted successfully! A technician will send your published BOM directly.')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-surface border border-cyan rounded-xl max-w-md w-full p-6 space-y-6 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
        <div className="flex justify-between items-center border-b border-hairline pb-3">
          <div className="font-bold text-sm uppercase flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan" />
            <span>Secure Space // Deployment Intake</span>
          </div>
          <button onClick={onClose} className="text-muted hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-muted">
          Zero high-pressure sales calls. Submit your installation parameters to receive a published
          hardware bill of materials.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="text-[10px] font-bold text-muted uppercase">Contact Name / Business Title</label>
            <input required type="text" placeholder="John Doe" className="w-full mt-1 p-2 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-muted uppercase">Email Address (Secure Intake)</label>
            <input required type="email" placeholder="john@domain.com" className="w-full mt-1 p-2 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-muted uppercase">Deployment Target Environment</label>
            <select className="w-full mt-1 p-2 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none">
              <option>Tier 1: Sovereign Desk Node ($2,450)</option>
              <option>Tier 2: Enterprise SOHO Vault ($7,800)</option>
              <option>Tier 3: Omniscient Home Core ($18,500)</option>
            </select>
          </div>
          <button type="submit" className="w-full py-3 bg-cyan text-obsidian font-black uppercase text-xs rounded hover:bg-cyan/80 transition-all">
            Submit Direct Intake Request
          </button>
        </form>
      </div>
    </div>
  )
}
