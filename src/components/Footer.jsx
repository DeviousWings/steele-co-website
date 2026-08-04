export default function Footer({ onOpenDraft }) {
  return (
    <footer className="no-print border-t border-hairline bg-obsidian py-12 mt-20 text-xs text-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-4">
        <div className="p-4 bg-surface border border-hairline rounded-lg">
          <span className="text-cyan font-bold">🤖 Radical Transparency Note:</span> This site was built
          using a mix of AI assistance and my expert web dev skills. Look, I'm just a guy on a budget with
          very little free time, and every hour saved wrestling with React code at 2 AM is an extra hour I
          get to spend playing with my kids and hanging out with my family. Hardware is my trade—AI was
          just my shortcut home for dinner!
        </div>
        <div className="flex justify-between items-center text-[10px]">
          <div>© 2026 STEELE CO. All Rights Reserved.</div>
          <button onClick={onOpenDraft} className="text-gold hover:underline">
            View Full SDI Act Master Text (July 2026 Edition)
          </button>
        </div>
      </div>
    </footer>
  )
}
