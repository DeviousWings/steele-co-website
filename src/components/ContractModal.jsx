import { FileText, X } from 'lucide-react'

export default function ContractModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-surface border border-hairline rounded-xl max-w-lg w-full p-6 space-y-6 shadow-2xl">
        <div className="flex justify-between items-center border-b border-hairline pb-3">
          <div className="font-bold text-sm uppercase flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald" />
            <span>Steele Co. Trade Code & "No Data, No Fee" Policy</span>
          </div>
          <button onClick={onClose} className="text-muted hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-muted space-y-3 font-mono leading-relaxed">
          <p className="text-white font-bold">UNYIELDING SERVICE CONTRACT GUARANTEE:</p>
          <p>
            1. <strong className="text-slate-200">NO HIDDEN RETAINERS:</strong> Every diagnostic check, cable
            routing, and server build is executed under a published flat-rate matrix.
          </p>
          <p>
            2. <strong className="text-slate-200">NO DATA, NO FEE GUARANTEE:</strong> If Steele Co. deploys a
            localized backup remediation vault or failover array, and your system fails to restore during
            final verification testing, labor costs are $0.
          </p>
          <p>
            3. <strong className="text-slate-200">ROOT HARDWARE ACCESS:</strong> Clients receive complete
            administrative root credentials for all firewalls, NAS vaults, and AI containers.
          </p>
        </div>

        <button onClick={onClose} className="w-full py-2.5 bg-panel hover:bg-panel/70 text-cyan border border-cyan/40 font-bold text-xs uppercase rounded transition-all">
          Acknowledge Trade Code
        </button>
      </div>
    </div>
  )
}
