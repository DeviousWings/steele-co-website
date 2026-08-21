import { useEffect, useState, useRef } from 'react'
import { TERMINAL_INITIAL_LOGS, TERMINAL_ROTATING_LOGS } from '../data/packetLogs'

export default function TerminalMonitor() {
  const [logs, setLogs] = useState(() => {
    return (TERMINAL_INITIAL_LOGS || []).map((log, index) => ({
      id: `init-${index}`,
      type: log.type || (typeof log === 'string' && log.includes('BLOCKED') ? 'warning' : 'cyan'),
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
      
      let logType = 'cyan'
      if (logText.includes('BLOCKED') || logText.includes('WARN')) {
        logType = 'warning'
      } else if (logText.includes('SECURITY') || logText.includes('complete')) {
        logType = 'success'
      }

      setLogs((prev) => {
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
      case 'cyan':
      case 'info':
        return 'text-cyan font-semibold'
      case 'success':
        return 'text-emerald'
      default:
        return 'text-slate-300'
    }
  }

  // Format key tags inside terminal strings to glow cyan
  const formatLogText = (text) => {
    const tags = ['LOCAL_CORE:', 'IDENTITY_VAULT:', 'LOCAL_AI:', 'NETWORK_AUDIT:', 'CYAN_LOG:', 'ZERO_CLOUD:']
    for (const tag of tags) {
      if (text.startsWith(tag)) {
        const rest = text.replace(tag, '')
        return (
          <span>
            <span className="text-cyan font-bold bg-cyan/10 px-1 py-0.5 rounded border border-cyan/30 mr-1.5">
              {tag}
            </span>
            <span>{rest}</span>
          </span>
        )
      }
    }
    return text
  }

  return (
    <div className="bg-surface border border-hairline rounded-lg overflow-hidden shadow-2xl">
      {/* Titlebar */}
      <div className="bg-panel px-4 py-3 border-b border-hairline flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-gold/80" />
          <div className="w-3 h-3 rounded-full bg-emerald/80" />
          <span className="text-xs font-bold text-slate-200 ml-2 tracking-wide font-mono flex items-center gap-2">
            <span className="text-cyan">STEELE_DEFENSE_MONITOR</span>
            <span className="text-hairline">//</span>
            <span className="text-muted hidden sm:inline">TERMINAL</span>
          </span>
        </div>
        <span className="text-[10px] text-cyan font-mono flex items-center gap-1.5 bg-cyan/10 border border-cyan/30 px-2 py-0.5 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          SIM // ON-PREM NODE
        </span>
      </div>

      {/* Terminal Output Area with auto-scroll */}
      <div 
        ref={logContainerRef}
        className="p-4 space-y-2.5 bg-obsidian text-xs font-mono h-64 overflow-y-auto scroll-smooth"
      >
        <div className="text-muted border-b border-hairline/60 pb-2 flex items-center gap-2">
          <span className="text-cyan font-bold">root@steele-rack-node:~#</span>
          <span className="text-slate-300">systemctl status sovereign-containment</span>
        </div>
        {logs.map((log) => (
          <div key={log.id} className="flex items-start gap-2 text-[11px] leading-relaxed">
            <span className="text-cyan font-bold select-none">&gt;</span>
            <span className={`${colorFor(log.type)}`}>
              {formatLogText(log.text)}
            </span>
          </div>
        ))}
      </div>

      {/* Hardware Status Footer with Cyan accents */}
      <div className="p-3 bg-panel border-t border-hairline grid grid-cols-2 gap-2 text-[11px]">
        <div className="bg-obsidian p-2 rounded border border-hairline">
          <div className="text-muted text-[10px] tracking-wider uppercase">CONTAINMENT</div>
          <div className="text-cyan font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            100% PHYSICAL
          </div>
        </div>
        <div className="bg-obsidian p-2 rounded border border-hairline">
          <div className="text-muted text-[10px] tracking-wider uppercase">OUTBOUND EGRESS</div>
          <div className="text-emerald font-bold">0.00 KB/s (ISOLATED)</div>
        </div>
      </div>
    </div>
  )
}
