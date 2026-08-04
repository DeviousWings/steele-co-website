import { BookOpen, Download, X } from 'lucide-react'

export default function MasterDraftModal({ onClose, onPrintClick }) {
  return (
    <div className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md flex justify-center items-center p-2 sm:p-6 overflow-y-auto">
      <div className="bg-surface border-2 border-gold rounded-xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-[0_0_50px_rgba(245,158,11,0.25)] print-box">
        <div className="no-print bg-panel border-b border-hairline p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div className="text-[10px] text-gold font-bold uppercase tracking-widest flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>UNABRIDGED CONGRESSIONAL RECORD & MASTER STATUTORY TEXT</span>
            </div>
            <div className="text-base font-black uppercase">SDI Act of 2026 (Full Draft)</div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onPrintClick} className="bg-gold hover:bg-gold/80 text-obsidian font-black px-3.5 py-2 rounded text-xs uppercase transition-all flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              <span>Download Master PDF</span>
            </button>
            <button onClick={onClose} className="p-2 text-muted hover:text-white bg-obsidian rounded border border-hairline">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8 text-xs text-slate-200 font-mono leading-relaxed overflow-y-auto">
          <div className="text-center border-b-2 border-gold pb-6 space-y-2">
            <div className="text-xs font-bold text-gold tracking-widest">MASTER LEGISLATIVE DRAFT & CONGRESSIONAL RECORD</div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase">
              SOVEREIGN DIGITAL IDENTITY AND RESOURCE NATIONALIZATION ACT
            </h1>
            <div className="text-xs text-muted font-bold">JULY 2026 EDITION // CONGRESSIONAL BRIEFING & STATUTORY TEXT</div>
          </div>

          <Section title="PART I: CONGRESSIONAL EXECUTIVE BRIEFING" accent="gold">
            <SubHeading>1. THE PROBLEM: CORPORATE DIGITAL ANARCHY</SubHeading>
            <p className="text-muted">
              For over three decades, the digital economy has operated in a state of corporate anarchy.
              Because the internet was built without a native identity or data-ownership layer, human
              behavior, location tracking, and financial metrics have been treated as unowned, raw
              commodities. Corporations extract these assets under the legal fiction of "implied consent"
              via unconscionable Terms of Service agreements. The Sovereign Digital Identity and Resource
              Nationalization Act fundamentally ends this era.
            </p>

            <SubHeading>2. THE CONSTITUTIONAL FOUNDATION (TITLE I)</SubHeading>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li><strong className="text-white">The Fourth Amendment Extension:</strong> A citizen's continuous digital footprint is legally formalized as "papers and effects." Unauthorized extraction is reclassified as Federal Identity Trespassing.</li>
              <li><strong className="text-white">The Fifth Amendment Protection:</strong> Corporate databases built on un-encrypted citizen tracking metrics are identified as stolen property, lawfully returned to their rightful owners.</li>
            </ul>

            <SubHeading>3. THE "ZERO-COPY" ARCHITECTURE (TITLE II)</SubHeading>
            <p className="text-muted">
              Citizen data is ingested into the Sovereign Data Core — a physically air-gapped, high-security
              infrastructure maintained by a designated Corporate Contractor under strict federal oversight.
            </p>
            <div className="p-4 bg-obsidian border border-hairline rounded space-y-2">
              <div className="text-cyan font-bold uppercase">The Container Upload Model & Homomorphic Grid:</div>
              <p className="text-muted">
                1. <strong>Algorithm Ingestion:</strong> Corporations upload code into secure sandboxes.<br />
                2. <strong>Blind Execution:</strong> Algorithms execute against homomorphically encrypted data: <span className="text-cyan">f(E(Data)) = E(f(Data))</span>.<br />
                3. <strong>Zero-Persistence:</strong> RAM nodes power-cycle immediately, vaporizing all query trails.
              </p>
            </div>

            <SubHeading>4. THE ECONOMIC ENGINE: THREE-TIER PARTICIPATION ROSTER (TITLE III)</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
              <TierBox title="TIER 1: Sovereign Purist" desc="Pure Opt-Out | ~$20/yr Baseline Subscription Dividend" />
              <TierBox title="TIER 2: Commonwealth Member" desc="Common Trust | ~$100/yr Collective Dividend" />
              <TierBox title="TIER 3: Sovereign Landowner" desc="Individual Lease | ~$250+/yr Dynamic Royalty" />
            </div>
          </Section>

          <Section title="PART II: STATUTORY LEGISLATIVE TEXT" accent="cyan">
            <SubHeading color="text-cyan">TITLE I — DECLARATION OF DIGITAL SOVEREIGNTY AND IDENTITY INVIOLABILITY</SubHeading>
            <div className="space-y-2 text-muted">
              <p><strong className="text-white">SECTION 101: SHORT TITLE.</strong> This Act may be cited as the "Sovereign Digital Identity and Resource Nationalization Act."</p>
              <p><strong className="text-white">SECTION 102: CODIFICATION OF THE DIGITAL BODY.</strong> Digital footprints, biometrics, and telemetry are declared an unalienable extension of the human body.</p>
              <p><strong className="text-white">SECTION 103: FEDERAL IDENTITY TRESPASSING.</strong> Unauthorized corporate tracking incurs statutory civil penalties of not less than $10,000 per query.</p>
            </div>

            <SubHeading color="text-cyan">TITLE II — TECHNICAL ARCHITECTURE, SECURE VAULTS, AND THE HOMOMORPHIC GRID</SubHeading>
            <div className="space-y-2 text-muted">
              <p><strong className="text-white">SECTION 201: SOVEREIGN DATA CORE.</strong> NIST and Department of Commerce establish the air-gapped SDC under federal defense integration mandates.</p>
              <p><strong className="text-white">SECTION 202: ZERO-COPY MANDATE.</strong> Citizen profiles are stored on RAM-only computational nodes physically decoupled from the internet.</p>
              <p><strong className="text-white">SECTION 206: SOVEREIGN ANALYTICAL MODULES.</strong> Private credit bureaus are liquidated; scores generated exclusively by open-source algorithms.</p>
            </div>

            <SubHeading color="text-cyan">TITLE III — EXTRACTION LEVY, SUBSCRIPTION INDEX, AND CITIZEN DIVIDENDS</SubHeading>
            <div className="space-y-2 text-muted">
              <p><strong className="text-white">SECTION 301: DYNAMIC EXTRACTION LEVY.</strong> Extraction Fee = Operational Base Cost (OBC) + Sovereign Citizen Premium (SCP).</p>
              <p><strong className="text-white">SECTION 304: ABSOLUTE DECOUPLING FROM GENERAL TREASURY.</strong> Structurally insulates citizen dividends from federal deficit allocation.</p>
              <p><strong className="text-white">SECTION 305: ANONYMOUS MICRO-ESCROW POOL.</strong> Mandates 30-to-45-day randomized payout latency.</p>
            </div>
          </Section>
        </div>

        <div className="no-print bg-panel border-t border-hairline p-4 flex justify-between items-center">
          <span className="text-[10px] text-muted">Official Master Congressional Briefing Record // July 2026</span>
          <button onClick={onClose} className="bg-obsidian hover:bg-panel text-cyan border border-cyan/40 px-4 py-2 rounded text-xs font-bold uppercase transition-all">
            Close Master Document Reader
          </button>
        </div>
      </div>
    </div>
  )
}

function Section({ title, accent, children }) {
  const accentClass = accent === 'gold' ? 'bg-gold/10 border-gold/40 text-gold' : 'bg-cyan/10 border-cyan/40 text-cyan'
  return (
    <div className="space-y-6">
      <div className={`p-3 rounded font-bold text-center uppercase border ${accentClass}`}>{title}</div>
      {children}
    </div>
  )
}

function SubHeading({ children, color = 'text-white' }) {
  return <h3 className={`text-sm font-bold uppercase ${color}`}>{children}</h3>
}

function TierBox({ title, desc }) {
  return (
    <div className="p-3 bg-obsidian border border-hairline rounded space-y-1">
      <div className="font-bold text-white">{title}</div>
      <div className="text-muted">{desc}</div>
    </div>
  )
}
