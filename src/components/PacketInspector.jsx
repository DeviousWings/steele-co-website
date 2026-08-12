import { useState } from 'react'
import { Activity } from 'lucide-react'
import { PACKET_LOGS } from '../data/packetLogs'

export default function PacketInspector() {
  const [packetMode, setPacketMode] = useState('steele')
  const [inspectedPacket, setInspectedPacket] = useState(null)

  const rows = PACKET_LOGS[packetMode]

  return (
    <div className="bg-surface border border-hairline rounded-xl p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-hairline pb-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold uppercase">
            <Activity className="w-4 h-4 text-cyan" />
            <span>Real-Time Network Packet Capture Simulator</span>
          </div>
          <div className="text-xs text-muted mt-0.5">Toggle network boundary to inspect raw packet telemetry</div>
        </div>

        <div className="flex items-center gap-2 bg-obsidian p-1 rounded border border-hairline text-xs">
          <button
            onClick={() => setPacketMode('cloud')}
            className={`px-3 py-1.5 rounded font-bold transition-all ${
              packetMode === 'cloud' ? 'bg-alert text-white' : 'text-muted hover:text-white'
            }`}
          >
            Unsecure Cloud Appliance
          </button>
          <button
            onClick={() => setPacketMode('steele')}
            className={`px-3 py-1.5 rounded font-bold transition-all ${
              packetMode === 'steele' ? 'bg-emerald text-obsidian' : 'text-muted hover:text-white'
            }`}
          >
            Steele Co. Armored Firewall
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-obsidian border border-hairline rounded overflow-hidden">
          <div className="bg-panel px-3 py-2 text-[10px] text-muted border-b border-hairline grid grid-cols-12 font-bold">
            <span className="col-span-2">TIME</span>
            <span className="col-span-3">DEVICE</span>
            <span className="col-span-4">DESTINATION</span>
            <span className="col-span-3">ACTION</span>
          </div>
          <div className="divide-y divide-panel text-[11px] font-mono h-64 overflow-y-auto">
            {rows.map((p) => (
              <div
                key={p.id}
                onClick={() => setInspectedPacket(p)}
                className="px-3 py-2 grid grid-cols-12 hover:bg-surface cursor-pointer items-center transition-colors"
              >
                <span className="col-span-2 text-muted">{p.time}</span>
                <span className="col-span-3 text-white font-bold">{p.device}</span>
                <span className="col-span-4 text-muted truncate">{p.dest}</span>
                <span className={`col-span-3 font-bold ${p.color}`}>{p.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-panel border border-hairline rounded p-4 space-y-3">
          <div className="text-xs font-bold uppercase border-b border-hairline pb-2 flex justify-between">
            <span>Packet Payload Inspection</span>
            <span className="text-[10px] text-cyan">RAW HEX / JSON</span>
          </div>

          {inspectedPacket ? (
            <div className="space-y-2 text-xs font-mono">
              <div>
                <span className="text-muted">Target Device:</span>{' '}
                <span className="text-white font-bold">{inspectedPacket.device}</span>
              </div>
              <div>
                <span className="text-muted">Payload Description:</span>
                <div className="p-2 bg-obsidian border border-hairline rounded text-cyan text-[10px] mt-1">
                  {inspectedPacket.payload}
                </div>
              </div>
              <div>
                <span className="text-muted">Boundary Result:</span>
                <div className={`font-bold mt-0.5 ${inspectedPacket.color}`}>{inspectedPacket.status}</div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-muted py-8 text-center">
              Click any packet on the left table to inspect the decrypted telemetry payload.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
