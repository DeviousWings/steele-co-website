import React from 'react';
import { Server, Shield, BookOpen } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, setQuoteModalOpen, setSdiModalOpen, setDirectiveModalOpen }) {
  const tabs = [
    { id: 'home', label: 'Home // Positioning' },
    { id: 'tiers', label: 'Sovereign Tiers & BOM' },
    { id: 'sdi-vault', label: 'Statutory Vault Hub' },
    { id: 'expose', label: 'Tech Exposé & Inspector' },
    { id: 'roi', label: 'Cloud Bleed Calculator' }
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#121216] border-b border-[#262630] text-xs py-2 px-4 flex justify-between items-center text-[#94a3b8] overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#10b981]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            SYSTEM STATUS: ON-PREM SOVEREIGN
          </span>
          <span className="text-[#262630]">|</span>
          <span>ZERO THIRD-PARTY TRACKERS</span>
          <span className="text-[#262630]">|</span>
          <span className="text-[#00e5ff]">ENCRYPTED LOCAL CONTAINMENT</span>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <button onClick={() => setSdiModalOpen(true)} className="text-[#f59e0b] hover:underline flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SDI ACT MASTER DRAFT ↗</span>
          </button>
          <button onClick={() => setDirectiveModalOpen(true)} className="text-[#00e5ff] hover:underline flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CONSUMER DIRECTIVE ↗</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#262630] px-4 lg:px-8 py-3.5 flex justify-between items-center">
        <div onClick={() => setActiveTab('home')} className="cursor-pointer flex items-center gap-2 group">
          <div className="p-2 bg-[#181820] border border-[#262630] rounded group-hover:border-[#00e5ff] transition-colors">
            <Server className="w-5 h-5 text-[#00e5ff]" />
          </div>
          <div>
            <div className="font-bold text-base tracking-wider text-[#e2e8f0] flex items-center gap-2">
              STEELE CO. <span className="text-[#00e5ff] text-xs px-1.5 py-0.5 border border-[#00e5ff]/30 rounded bg-[#00e5ff]/10">HARDWARE</span>
            </div>
            <div className="text-[10px] text-[#94a3b8] tracking-widest uppercase">Sovereign Data Infrastructure</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 lg:gap-2 text-xs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded transition-all uppercase tracking-wide font-medium ${
                activeTab === tab.id
                  ? 'bg-[#181820] text-[#00e5ff] border border-[#00e5ff]/40 shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                  : 'text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#121216]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setQuoteModalOpen(true)} 
          className="bg-[#00e5ff] hover:bg-[#00b8cc] text-[#0a0a0c] font-bold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)] flex items-center gap-2"
        >
          <Shield className="w-4 h-4" />
          <span>Secure Space</span>
        </button>
      </nav>
    </>
  );
}
