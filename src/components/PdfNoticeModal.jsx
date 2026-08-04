export default function PdfNoticeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-md flex justify-center items-center p-4">
      <div className="bg-surface border border-gold rounded-xl max-w-md w-full p-6 space-y-6 shadow-[0_0_30px_rgba(245,158,11,0.2)] text-center">
        <div className="text-sm font-bold text-gold uppercase tracking-wider">
          [ SYSTEM NOTICE // CODING IN PROGRESS ]
        </div>
        <p className="text-xs text-muted leading-relaxed font-mono">
          The statutory PDF compilation system is currently offline for remote rendering parameters. The
          comprehensive physical document download repository will be linked directly to this node shortly.
        </p>
        <button
          onClick={onClose}
          className="w-full py-2.5 bg-panel hover:bg-gold hover:text-obsidian text-slate-200 border border-hairline font-bold text-xs uppercase rounded transition-all"
        >
          Return to Core Data Core
        </button>
      </div>
    </div>
  )
}
