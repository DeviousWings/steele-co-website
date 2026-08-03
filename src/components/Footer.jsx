import React from 'react';
import { Server } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="border-t border-[#262630] bg-[#0a0a0c] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold text-lg text-white uppercase flex items-center gap-2">
              <Server className="w-5 h-5 text-[#00e5ff]" />
              <span>STEELE CO. // SOVEREIGN HARDWARE</span>
            </div>
            <p className="text-xs text-[#94a3b8] mt-1">
              No sales calls. No predatory scripts. Just elite physical trade engineering.
            </p>
          </div>
          <button onClick={onOpenQuote} className="bg-[#00e5ff] text-[#0a0a0c] font-bold px-6 py-3 rounded text-xs uppercase">
            Request Deployment Intake
          </button>
        </div>

        {/* --- UPLIFTING DISCLAIMER --- */}
        <div className="p-4 bg-[#121216] border border-[#262630] rounded-lg text-xs text-[#94a3b8] leading-relaxed">
          <span className="text-[#00e5ff] font-bold">🤖 Radical Transparency Note:</span> This site was built using a mix of AI assistance and my expert web dev skills. Look, I’m just a guy on a budget with very little free time, and every hour saved wrestling with React code at 2 AM is an extra hour I get to spend playing with my kids and hanging out with my family. Hardware is my trade—AI was just my shortcut home for dinner!
        </div>

        <div className="border-t border-[#262630]/60 pt-6 flex justify-between text-[10px] text-[#94a3b8]">
          <div>Zero third-party trackers. Absolute physical speed.</div>
          <div>© 2026 STEELE CO. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
