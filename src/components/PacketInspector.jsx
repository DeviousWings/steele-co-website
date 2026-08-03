import React, { useState } from 'react';
import { Activity, Shield, AlertTriangle } from 'lucide-react';
import { packetLogs } from '../data/packetLogs';

export default function PacketInspector() {
  const [selectedPacket, setSelectedPacket] = useState(packetLogs[0]);
  const [containmentMode, setContainmentMode] = useState('steele');

  return (
    <div className="bg-[#121216] border border-[#262630] rounded-xl p-6 space-y-6">
      <div className="flex justify-between items-center border-b border-[#262630] pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase">
          <Activity className="w-4 h-4 text-[#00e5ff]" />
          <span>Real-Time Network Telemetry Inspector</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setContainmentMode('commercial')}
            className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${
              containmentMode === 'commercial' ? 'bg-[#ef4444] text-white' : 'bg-[#181820] text-[#94a3b8]'
            }`}
          >
            Unsecured Router
          </button>
          <button
            onClick={() => setContainmentMode('steele')}
            className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${
              containmentMode === 'steele' ? 'bg-[#10b981] text-black' : 'bg-[#181820] text-[#94a3b8]'
            }`}
          >
            Steele Armored
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Packet List */}
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-[#94a3b8] uppercase">Captured Inbound/Outbound Packets</div>
          {packetLogs.map((packet) => (
            <button
              key={packet.id}
              onClick={() => setSelectedPacket(packet)}
              className={`w-full p-2.5 rounded border text-left text-xs font-mono transition-all ${
                selectedPacket.id === packet.id
                  ? 'bg-[#181820] border-[#00e5ff] text-white'
                  : 'bg-[#0a0a0c] border-[#262630] text-[#94a3b8]'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold">{packet.device}</span>
                <span className="text-[10px] text-[#00e5ff]">{packet.protocol}</span>
              </div>
              <div className="text-[10px] text-[#94a3b8] truncate mt-1">{packet.destination}</div>
            </button>
          ))}
        </div>

        {/* Selected Packet Detail */}
        <div className="bg-[#0a0a0c] border border-[#262630] rounded p-4 space-y-3 font-mono text-xs">
          <div className="text-[10px] text-[#94a3b8] uppercase border-b border-[#262630] pb-2">
            Payload Inspection: {selectedPacket.device}
          </div>
          <div className="space-y-1">
            <div><span className="text-[#94a3b8]">Target:</span> <span className="text-white">{selectedPacket.destination}</span></div>
            <div><span className="text-[#94a3b8]">Payload Data:</span> <span className="text-[#f59e0b]">{selectedPacket.payload}</span></div>
          </div>

          <div className="pt-2 border-t border-[#262630]">
            <span className="text-[10px] text-[#94a3b8] block mb-1">CONTAINMENT STATUS:</span>
            {containmentMode === 'steele' ? (
              <div className="p-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded text-[#10b981] font-bold text-[11px] flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" />
                <span>INTERCEPTED & CONTAINERIZED ON-PREM</span>
              </div>
            ) : (
              <div className="p-2 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded text-[#ef4444] font-bold text-[11px] flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>EGRESS GRANTED → VENDOR CLOUD SERVER</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
