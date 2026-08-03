import React from 'react';
import { Activity, Shield, AlertTriangle, Server } from 'lucide-react';
import PacketInspector from '../components/PacketInspector';

export default function TechExpose() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-[#262630] pb-6 space-y-2">
        <div className="text-xs text-[#00e5ff] font-bold uppercase tracking-widest">// FIELD TEARDOWNS & AUDITS</div>
        <h1 className="text-3xl font-black uppercase text-white">The Tech Exposé & Network Packet Inspector</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Packet Inspector Component */}
        <div className="lg:col-span-7">
          <PacketInspector />
        </div>

        {/* Right Column: Teardown Briefings */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#121216] border border-[#262630] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#f59e0b] font-bold uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>Teardown Report #041</span>
            </div>
            
            <h3 className="text-base font-bold text-white uppercase">Smart Home Cloud Appliance Telemetry Egress</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Standard commercial IoT devices continually stream unencrypted telemetry data, ambient microphone samples, and local IP routing maps back to vendor advertising servers without user consent.
            </p>

            <div className="p-3 bg-[#0a0a0c] border border-[#262630] rounded text-[11px] font-mono space-y-1">
              <div className="text-[#ef4444]">UNCONTAINED: 142 packets/min → vendor-analytics.cloud</div>
              <div className="text-[#10b981]">STEELE ARMORED: 0 packets/min (LOCAL ISOLATED)</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
