import React, { useState, useMemo } from 'react';
import { Send, Copy, Check } from 'lucide-react';

export default function ConstituentGenerator() {
  const [form, setForm] = useState({
    name: 'Nathanael King',
    district: 'Utah Congressional District',
    representative: 'Congressional Representative',
    tradeRole: 'IT Network Technician'
  });
  const [copied, setCopied] = useState(false);

  const letterText = useMemo(() => {
    return `Dear ${form.representative},

My name is ${form.name}, a constituent in ${form.district} working as a ${form.tradeRole}.

I am writing to formally present key legislative frameworks regarding constitutional property rights and digital sovereignty: The Sovereign Digital Identity Act (2026).

I request a brief meeting during the upcoming recess to deliver technical documentation.

Respectfully submitted,
${form.name}
${form.tradeRole}`;
  }, [form]);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#121216] border border-[#262630] rounded-xl p-6 space-y-4">
      <div className="text-sm font-bold text-[#f59e0b] uppercase flex items-center gap-2">
        <Send className="w-4 h-4" />
        <span>Constituent Outreach Generator</span>
      </div>

      <div className="space-y-2 text-xs">
        <input 
          type="text" 
          value={form.name} 
          onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Your Name"
          className="w-full p-2 bg-[#0a0a0c] border border-[#262630] rounded text-white outline-none focus:border-[#f59e0b]"
        />
        <input 
          type="text" 
          value={form.district} 
          onChange={(e) => setForm(prev => ({ ...prev, district: e.target.value }))}
          placeholder="District"
          className="w-full p-2 bg-[#0a0a0c] border border-[#262630] rounded text-white outline-none focus:border-[#f59e0b]"
        />
      </div>

      <div className="p-3 bg-[#0a0a0c] border border-[#262630] rounded text-[10px] text-[#94a3b8] font-mono h-36 overflow-y-auto whitespace-pre-wrap">
        {letterText}
      </div>

      <button
        onClick={handleCopy}
        className="w-full py-2 bg-[#181820] hover:bg-[#22222e] border border-[#f59e0b]/40 text-[#f59e0b] font-bold text-xs uppercase rounded transition-all flex justify-center items-center gap-2"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? 'Letter Copied to Clipboard' : 'Copy Briefing Draft'}</span>
      </button>
    </div>
  );
}
