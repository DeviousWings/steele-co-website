import React, { useState, useEffect } from 'react';

export default function TerminalMonitor() {
  const [terminalLogs, setTerminalLogs] = useState([
    { id: 1, type: 'info', text: 'STEELE_CO Local Firewall Engine v4.12 initialized.' },
    { id: 2, type: 'success', text: 'On-premise NAS vault mounted on 10Gbps isolated VLAN.' },
    { id: 3, type: 'warning', text: 'BLOCKED: Smart TV attempted outbound telemetry sync.' },
    { id: 4, type: 'success', text: 'Local LLM Inference Sandbox ready. Zero cloud network egress.' }
  ]);

  useEffect(() => {
    const intervals = [
      'Encrypted backup verification complete (0 errors, 100% data integrity).',
      'Homomorphic compute sandbox: 14 encrypted packets processed locally.',
      'BLOCKED: Cloud Ring doorbell attempt to upload unencrypted stream packet.',
      'UPS Status: Nominal (100% capacity, 48 min runtime on grid failure).'
    ];

    const timer = setInterval(() => {
      const randomLog = intervals[Math.floor(Math.random() * intervals.length)];
      const logType = randomLog.includes('BLOCKED') ? 'warning' : 'success';
      setTerminalLogs(prev => [
        ...prev.slice(-5),
        { id: Date.now(), type: logType, text: randomLog }
      ]);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#121216] border border-[#262630] rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-[#181820] px-4 py-3 border-b border-[#262630] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
          <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
          <span className="text-xs font-bold text-[#94a3b8] ml-2">STEELE_DEFENSE_MONITOR</span>
        </div>
        <span className="text-[10px] text-[#10b981] font-mono uppercase">ON-PREM ACTIVE</span>
      </div>

      <div className="p-4 space-y-3 bg-[#06080a] text-xs font-mono h-64 overflow-y-auto">
        <div className="text-[#94a3b8] border-b border-[#181820] pb-2">
          <span className="text-[#00e5ff]">root@steele-rack-node:~#</span> systemctl status sovereign-containment
        </div>
        {terminalLogs.map((log) => (
          <div key={log.id} className="flex items-start gap-2 text-[11px] leading-relaxed">
            <span className="text-[#94a3b8] text-[10px]">{'>'}</span>
            <span className={log.type === 'warning' ? 'text-[#f59e0b]' : log.type === 'info' ? 'text-[#00e5ff]' : 'text-[#10b981]'}>
              {log.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
