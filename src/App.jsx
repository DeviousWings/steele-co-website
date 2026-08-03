import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronRight, FileText, Shield, AlertTriangle, 
  CheckCircle, Server, Check, DollarSign, 
  Send, X, SlidersHorizontal, Activity, 
  Copy, BookOpen, Download 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contractModalOpen, setContractModalOpen] = useState(false);
  const [sdiModalOpen, setSdiModalOpen] = useState(false);
  const [directiveModalOpen, setDirectiveModalOpen] = useState(false);
  const [pdfNoticeOpen, setPdfNoticeOpen] = useState(false);

  // Home Terminal Simulation
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
      setTerminalLogs(prev => [...prev.slice(-5), { id: Date.now(), type: logType, text: randomLog }]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Configurator State
  const [customBuild, setCustomBuild] = useState({
    tier: 'tier2',
    upsUpgrade: true,
    dualGpu: true,
    liquidCooling: true,
    acousticPanels: true,
    tenGbSwitch: true,
    storageCapacity: '32TB'
  });

  const buildPrice = useMemo(() => {
    let base = 2450;
    if (customBuild.tier === 'tier2') base = 7800;
    if (customBuild.tier === 'tier3') base = 18500;
    let extras = 0;
    if (customBuild.upsUpgrade) extras += 650;
    if (customBuild.dualGpu) extras += 2200;
    if (customBuild.liquidCooling) extras += 1200;
    if (customBuild.acousticPanels) extras += 450;
    if (customBuild.tenGbSwitch) extras += 850;
    const storagePrices = { '16TB': 0, '32TB': 550, '64TB': 1400, '128TB': 3200 };
    return base + extras + (storagePrices[customBuild.storageCapacity] || 0);
  }, [customBuild]);

  // Constituent Form
  const [constituentForm, setConstituentForm] = useState({
    name: 'Nathanael King',
    district: 'Utah Congressional District',
    representative: 'Congressional Representative',
    tradeRole: 'IT Network Technician'
  });
  const [copiedLetter, setCopiedLetter] = useState(false);

  // ROI Calculator State
  const [roiInputs, setRoiInputs] = useState({
    cloudStorageMonthly: 45,
    saasAImonthly: 60,
    securityCloudMonthly: 35,
    businessCloudServers: 250,
    years: 3
  });

  const roiCalculations = useMemo(() => {
    const monthlyBleed = Number(roiInputs.cloudStorageMonthly) + Number(roiInputs.saasAImonthly) + Number(roiInputs.securityCloudMonthly) + Number(roiInputs.businessCloudServers);
    const totalBleed = monthlyBleed * 12 * Number(roiInputs.years);
    const netSavings = totalBleed - 7800;
    return { monthlyBleed, totalBleed, netSavings, breakEvenMonths: Math.ceil(7800 / (monthlyBleed || 1)) };
  }, [roiInputs]);

  const letterText = useMemo(() => {
    return `Dear ${constituentForm.representative},

My name is ${constituentForm.name}, a constituent and active voter working as a ${constituentForm.tradeRole}.

I am writing to outline key legislative priorities regarding digital consumer sovereignty and product property rights:

1. RE-ESTABLISHING TRUE PRODUCT OWNERSHIP: Outlawing software paywalls on factory-installed hardware.
2. DEFENDING AGAINST DIGITAL TRESPASS: Prohibiting corporate ad-injection on privately owned hardware and bandwidth.
3. INALIENABLE DATA SOVEREIGNTY: Establishing that consumer data is permanent personal property, with a statutory 10% royalty framework.

Respectfully submitted,
${constituentForm.name}`;
  }, [constituentForm]);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e2e8f0]">
      {/* Top Banner */}
      <div className="bg-[#121216] border-b border-[#262630] text-xs py-2 px-4 flex justify-between items-center text-[#94a3b8] overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#10b981]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            SYSTEM STATUS: ON-PREM SOVEREIGN
          </span>
          <span className="text-[#262630]">|</span>
          <span>ZERO THIRD-PARTY TRACKERS</span>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <button onClick={() => setSdiModalOpen(true)} className="text-[#f59e0b] hover:underline flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" /> SDI ACT ↗
          </button>
          <button onClick={() => setDirectiveModalOpen(true)} className="text-[#00e5ff] hover:underline flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" /> CONSUMER DIRECTIVE ↗
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#262630] px-4 lg:px-8 py-3.5 flex justify-between items-center">
        <div onClick={() => setActiveTab('home')} className="cursor-pointer flex items-center gap-2">
          <div className="p-2 bg-[#181820] border border-[#262630] rounded">
            <Server className="w-5 h-5 text-[#00e5ff]" />
          </div>
          <div>
            <div className="font-bold text-base tracking-wider text-[#e2e8f0]">STEELE CO.</div>
            <div className="text-[10px] text-[#94a3b8] tracking-widest uppercase">Sovereign Data Infrastructure</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs">
          {[
            { id: 'home', label: 'Home // Positioning' },
            { id: 'tiers', label: 'Sovereign Tiers & BOM' },
            { id: 'vault', label: 'Statutory Vault Hub' },
            { id: 'expose', label: 'Tech Exposé & Inspector' },
            { id: 'roi', label: 'Cloud Bleed Calculator' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded transition-all uppercase font-medium ${
                activeTab === tab.id ? 'bg-[#181820] text-[#00e5ff] border border-[#00e5ff]/40' : 'text-[#94a3b8] hover:text-[#e2e8f0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button onClick={() => setQuoteModalOpen(true)} className="bg-[#00e5ff] text-[#0a0a0c] font-bold px-4 py-2.5 rounded text-xs uppercase flex items-center gap-2">
          <Shield className="w-4 h-4" /> Secure Space
        </button>
      </nav>

      {/* PAGE 1: HOME */}
      {activeTab === 'home' && (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#262630] pb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" /> ANTI-CLOUD // PHYSICAL PROPERTY ADVOCACY
              </div>
              <h1 className="text-3xl lg:text-5xl font-black uppercase text-white">
                If your data lives on their cloud, <span className="text-[#00e5ff]">you don’t really own your life.</span>
              </h1>
              <p className="text-[#94a3b8] text-base leading-relaxed">
                Elite physical infrastructure builds for the data sovereignty era. Private server racks, armored local firewalls, and self-hosted storage vaults. Zero predatory subscriptions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button onClick={() => setActiveTab('tiers')} className="bg-[#00e5ff] text-[#0a0a0c] font-bold px-6 py-3.5 rounded text-xs uppercase">
                  View Sovereign Tiers
                </button>
                <button onClick={() => setActiveTab('vault')} className="bg-[#181820] text-white border border-[#262630] font-bold px-6 py-3.5 rounded text-xs uppercase">
                  Open Statutory Vault
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#121216] border border-[#262630] rounded-lg p-4 font-mono text-xs space-y-2 h-64 overflow-y-auto">
                <div className="text-[#94a3b8]">STEELE_DEFENSE_MONITOR // ACTIVE</div>
                {terminalLogs.map(l => (
                  <div key={l.id} className={l.type === 'warning' ? 'text-[#f59e0b]' : 'text-[#10b981]'}>{'>'} {l.text}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 2: TIERS */}
      {activeTab === 'tiers' && (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8">
          <h1 className="text-3xl font-black uppercase text-white">Sovereign Deployment Tiers & BOM</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#121216] border border-[#262630] rounded-xl p-6 space-y-4">
              <div className="font-bold text-white text-sm uppercase">1. Select Chassis Platform</div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {['tier1', 'tier2', 'tier3'].map(t => (
                  <button key={t} onClick={() => setCustomBuild(prev => ({ ...prev, tier: t }))} className={`p-3 rounded border text-left ${customBuild.tier === t ? 'border-[#00e5ff] bg-[#181820] text-white' : 'border-[#262630] bg-[#0a0a0c] text-[#94a3b8]'}`}>
                    <div className="font-bold uppercase">{t}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-[#181820] border-2 border-[#00e5ff] rounded-xl p-6 space-y-6">
              <div className="text-xs text-[#00e5ff] font-bold uppercase">ESTIMATED INVESTMENT</div>
              <div className="text-3xl font-black text-white">${buildPrice.toLocaleString()}</div>
              <button onClick={() => setQuoteModalOpen(true)} className="w-full py-3 bg-[#00e5ff] text-[#0a0a0c] font-bold text-xs uppercase rounded">Book Installation</button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 3: DUAL-NODE STATUTORY VAULT HUB */}
      {activeTab === 'vault' && (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-12">
          <div className="border-b border-[#262630] pb-6">
            <div className="text-xs text-[#f59e0b] font-bold uppercase tracking-widest">// REPOSITORY HUB</div>
            <h1 className="text-3xl font-black uppercase text-white">Statutory Legislative Vault & Bill Repository</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NODE 01: SDI ACT */}
            <div className="bg-[#121216] border-2 border-[#f59e0b] rounded-xl p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs text-[#f59e0b] font-bold uppercase">[ NODE 01 // CONSTITUTIONAL EXTENDER ]</div>
                <h2 className="text-xl font-bold text-white uppercase">The Sovereign Digital Identity Act (2026)</h2>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Establishes that personal digital footprints and telemetry are unalienable extensions of the human body under Fourth Amendment property law. Creates the Zero-Copy Homomorphic Grid and mandatory 10% gross data royalty.
                </p>
              </div>
              <button onClick={() => setSdiModalOpen(true)} className="w-full py-3 bg-[#f59e0b] text-[#0a0a0c] font-black text-xs uppercase rounded flex justify-center items-center gap-2">
                <BookOpen className="w-4 h-4" /> Read SDI Act Master Text
              </button>
            </div>

            {/* NODE 02: CONSUMER DIRECTIVE */}
            <div className="bg-[#121216] border-2 border-[#00e5ff] rounded-xl p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs text-[#00e5ff] font-bold uppercase">[ NODE 02 // STATUTORY PROPERTY ACT ]</div>
                <h2 className="text-xl font-bold text-white uppercase">Consumer Sovereignty & Digital Property Rights Directive</h2>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Establishes product ownership finality. Outlaws software locks on factory-installed physical components (heated seats, thermostats), bans digital ad-trespass on paid bandwidth/RAM, and holds tech monopolies liable for directory fraud.
                </p>
              </div>
              <button onClick={() => setDirectiveModalOpen(true)} className="w-full py-3 bg-[#00e5ff] text-[#0a0a0c] font-black text-xs uppercase rounded flex justify-center items-center gap-2">
                <BookOpen className="w-4 h-4" /> Read Consumer Directive Text
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 4: EXPOSÉ */}
      {activeTab === 'expose' && (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8">
          <h1 className="text-3xl font-black uppercase text-white">Tech Exposé & Network Packet Inspector</h1>
          <div className="bg-[#121216] border border-[#262630] p-6 rounded-xl space-y-2 text-xs font-mono">
            <div className="text-[#10b981]">[CONTAINED] Smart TV Telemetry Packet Intercepted</div>
            <div className="text-[#00e5ff]">[LOCAL ROUTE] Camera Stream Confined to On-Prem NAS</div>
          </div>
        </div>
      )}

      {/* PAGE 5: ROI CALCULATOR */}
      {activeTab === 'roi' && (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8">
          <h1 className="text-3xl font-black uppercase text-white">Cloud Bleed Calculator</h1>
          <div className="bg-[#181820] border border-[#00e5ff] p-6 rounded-xl text-xs space-y-4">
            <div>Total Bleed ({roiInputs.years} Yrs): <span className="text-[#ef4444] font-bold">${roiCalculations.totalBleed.toLocaleString()}</span></div>
            <div>Net Saved with Steele Rack: <span className="text-[#10b981] font-bold">${roiCalculations.netSavings.toLocaleString()}</span></div>
          </div>
        </div>
      )}

      {/* MODAL 1: SDI ACT READER */}
      {sdiModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-md flex justify-center items-center p-6 overflow-y-auto">
          <div className="bg-[#121216] border-2 border-[#f59e0b] rounded-xl max-w-4xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto text-xs">
            <div className="flex justify-between items-center border-b border-[#262630] pb-3">
              <span className="font-bold text-[#f59e0b] uppercase">NODE 01: SDI ACT OF 2026 (UNABRIDGED)</span>
              <button onClick={() => setSdiModalOpen(false)} className="text-[#94a3b8] hover:text-white"><X className="w-5 h-5"/></button>
            </div>
            <div className="space-y-4 text-[#94a3b8]">
              <h2 className="text-base font-bold text-white uppercase">TITLE I — DECLARATION OF DIGITAL SOVEREIGNTY</h2>
              <p><strong className="text-white">SECTION 101: SHORT TITLE.</strong> Sovereign Digital Identity and Resource Nationalization Act.</p>
              <p><strong className="text-white">SECTION 102: DIGITAL BODY.</strong> Codifies biometrics and telemetry as physical extensions of the human body.</p>
              <p><strong className="text-white">SECTION 103: IDENTITY TRESPASS.</strong> Establishes $10,000 statutory fine per unauthorized tracking query.</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: CONSUMER DIRECTIVE READER */}
      {directiveModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0c]/95 backdrop-blur-md flex justify-center items-center p-6 overflow-y-auto">
          <div className="bg-[#121216] border-2 border-[#00e5ff] rounded-xl max-w-4xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto text-xs">
            <div className="flex justify-between items-center border-b border-[#262630] pb-3">
              <span className="font-bold text-[#00e5ff] uppercase">NODE 02: CONSUMER SOVEREIGNTY & DIGITAL PROPERTY RIGHTS DIRECTIVE</span>
              <button onClick={() => setDirectiveModalOpen(false)} className="text-[#94a3b8] hover:text-white"><X className="w-5 h-5"/></button>
            </div>
            <div className="space-y-4 text-[#94a3b8]">
              <h2 className="text-base font-bold text-white uppercase">PILLAR I: RE-ESTABLISHING TRUE PRODUCT OWNERSHIP</h2>
              <p><strong className="text-white">HARDWARE FREEDOM:</strong> Outlaws subscriptions on factory-installed vehicle/appliance components.</p>
              <h2 className="text-base font-bold text-white uppercase">PILLAR II: DEFENDING AGAINST DIGITAL TRESPASS</h2>
              <p><strong className="text-white">RESOURCE SOVEREIGNTY:</strong> Prohibits using consumer internet bandwidth or device RAM for ad delivery.</p>
              <h2 className="text-base font-bold text-white uppercase">PILLAR III: INALIENABLE DATA SOVEREIGNTY</h2>
              <p><strong className="text-white">ROYALTY STRUCTURE:</strong> Mandates secure Personal Data Wallet Infrastructure enforcing a continuous 10% gross royalty dividend back to citizens.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
