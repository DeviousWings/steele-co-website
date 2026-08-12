import { useEffect, useState, useRef } from 'react'
import { TERMINAL_INITIAL_LOGS, TERMINAL_ROTATING_LOGS } from '../data/packetLogs'

export default function TerminalMonitor() {
  const [logs, setLogs] = useState(() => {
    // Ensure initial logs have unique IDs and default types if missing
    return (TERMINAL_INITIAL_LOGS || []).map((log, index) => ({
      id: `init-${index}`,
      type: log.type || (typeof log === 'string' && log.includes('BLOCKED') ? 'warning' : 'success'),
      text: typeof log === 'string' ? log : log.text || log,
    }))
  })

  const logContainerRef = useRef(null)

  // Auto-scroll terminal log to bottom on new log additions
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
  }, [logs])

  useEffect(() => {
    if (!TERMINAL_ROTATING_LOGS || TERMINAL_ROTATING_LOGS.length === 0) return

    const timer = setInterval(() => {
      const randomLog = TERMINAL_ROTATING_LOGS[Math.floor(Math.random() * TERMINAL_ROTATING_LOGS.length)]
      const logText = typeof randomLog === 'string' ? randomLog : randomLog.text || ''
      const logType = logText.includes('BLOCKED') || logText.includes('WARN') ? 'warning' : 'success'

      setLogs((prev) => {
        // Keep the last 8 logs so the terminal feed stays clean without lagging
        const updated = [...prev.slice(-7), { id: Date.now(), type: logType, text: logText }]
        return updated
      })
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const colorFor = (type) => {
    switch (type) {
      case 'warning':
      case 'alert':
        return 'text-gold'
      case 'info':
      case 'cyan':
        return 'text-cyan'
      default:
        return 'text-emerald'
    }
  }

  return (
    <div className="bg-surface border border-hairline rounded-lg overflow-hidden shadow-2xl">
      {/* Titlebar */}
      <div className="bg-panel px-4 py-3 border-b border-hairline flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-alert/80" />
          <div className="w-3 h-3 rounded-full bg-gold/80" />
          <div className="w-3 h-3 rounded-full bg-emerald/80" />
          <span className="text-xs font-bold text-muted ml-2 tracking-wide font-mono">
            STEELE_DEFENSE_MONITOR // TERMINAL
          </span>
        </div>
        <span className="text-[10px] text-emerald font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
          LIVE // SIMULATED ON-PREM LOGS
        </span>
      </div>

      {/* Terminal Output Area with fixed height & smooth auto-scroll */}
      <div 
        ref={logContainerRef}
        className="p-4 space-y-2.5 bg-obsidian text-xs font-mono h-64 overflow-y-auto scroll-smooth"
      >
        <div className="text-muted border-b border-hairline/60 pb-2">
          <span className="text-cyan font-bold">root@steele-rack-node:~#</span> systemctl status sovereign-containment
        </div>
        {logs.map((log) => (
          <div key={log.id} className="flex items-start gap-2 text-[11px] leading-relaxed">
            <span className="text-cyan font-bold select-none">&gt;</span>
            <span className={`${colorFor(log.type)} font-medium`}>{log.text}</span>
          </div>
        ))}
      </div>

      {/* Hardware Status Footer */}
      <div className="p-3 bg-panel border-t border-hairline grid grid-cols-2 gap-2 text-[11px]">
        <div className="bg-obsidian p-2 rounded border border-hairline">
          <div className="text-muted text-[10px] tracking-wider uppercase">CONTAINMENT</div>
          <div className="text-emerald font-bold">100% PHYSICAL</div>
        </div>
        <div className="bg-obsidian p-2 rounded border border-hairline">
          <div className="text-muted text-[10px] tracking-wider uppercase">OUTBOUND EGRESS</div>
          <div className="text-cyan font-bold">0.00 KB/s (ISOLATED)</div>
        </div>
      </div>
    </div>
  )
}
