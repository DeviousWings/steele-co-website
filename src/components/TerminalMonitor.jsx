import { useEffect, useState } from 'react'
import { TERMINAL_INITIAL_LOGS, TERMINAL_ROTATING_LOGS } from '../data/packetLogs'

export default function TerminalMonitor() {
  const [logs, setLogs] = useState(TERMINAL_INITIAL_LOGS)

  useEffect(() => {
    const timer = setInterval(() => {
      const randomLog = TERMINAL_ROTATING_LOGS[Math.floor(Math.random() * TERMINAL_ROTATING_LOGS.length)]
      const logType = randomLog.includes('BLOCKED') ? 'warning' : 'success'
      setLogs((prev) => [...prev.slice(-5), { id: Date.now(), type: logType, text: randomLog }])
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const colorFor = (type) =>
    type === 'warning' ? 'text-gold' : type === 'info' ? 'text-cyan' : 'text-emerald'

  return (
    <div className="bg-surface border border-hairline rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-panel px-4 py-3 border-b border-hairline flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-alert" />
          <div className="w-3 h-3 rounded-full bg-gold" />
          <div className="w-3 h-3 rounded-full bg-emerald" />
          <span className="text-xs font-bold text-muted ml-2">STEELE_DEFENSE_MONITOR // TERMINAL</span>
        </div>
        <span className="text-[10px] text-emerald font-mono">LIVE // SIMULATED ON-PREM LOGS</span>
      </div>

      <div className="p-4 space-y-3 bg-black text-xs font-mono h-64 overflow-y-auto">
        <div className="text-muted border-b border-panel pb-2">
          <span className="text-cyan">root@steele-rack-node:~#</span> systemctl status sovereign-containment
        </div>
        {logs.map((log) => (
          <div key={log.id} className="flex items-start gap-2 text-[11px] leading-relaxed">
            <span className="text-muted text-[10px]">{'>'}</span>
            <span className={colorFor(log.type)}>{log.text}</span>
          </div>
        ))}
      </div>

      <div className="p-3 bg-panel border-t border-hairline grid grid-cols-2 gap-2 text-[11px]">
        <div className="bg-obsidian p-2 rounded border border-hairline">
          <div className="text-muted text-[10px]">CONTAINMENT</div>
          <div className="text-emerald font-bold">100% PHYSICAL</div>
        </div>
        <div className="bg-obsidian p-2 rounded border border-hairline">
          <div className="text-muted text-[10px]">OUTBOUND EGRESS</div>
          <div className="text-cyan font-bold">0.00 KB/s (ISOLATED)</div>
        </div>
      </div>
    </div>
  )
}
