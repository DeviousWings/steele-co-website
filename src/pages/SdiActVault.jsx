import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import ConstituentGenerator from '../components/ConstituentGenerator'

const SECTIONS = [
  { id: 'exec-summary', label: 'Executive Brief' },
  { id: 'title-1', label: 'Title I: Property Rights' },
  { id: 'title-2', label: 'Title II: Zero-Copy Grid' },
  { id: 'title-3', label: 'Title III: 3-Tier Roster' },
]

export default function SdiActVault({ onOpenDraft }) {
  const [section, setSection] = useState('exec-summary')

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12 space-y-12">
      <div className="border-b border-hairline pb-6 space-y-2">
        <div className="text-xs text-gold font-bold uppercase tracking-widest">// PUBLIC READING ROOM // BILL DRAFT</div>
        <h1 className="text-3xl font-black uppercase text-white">The Sovereign Digital Identity Act (2026)</h1>
        <p className="text-xs text-muted max-w-3xl">
          Commercial infrastructure services exist to shield citizens today. This statutory bill draft is
          our open-source movement to outlaw corporate data harvesting and software paywalls tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-surface border border-hairline rounded-xl overflow-hidden flex flex-col justify-between">
          <div>
            <div className="bg-panel border-b border-hairline p-2 flex overflow-x-auto gap-2 text-xs">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSection(s.id)}
                  className={`px-3 py-1.5 rounded font-bold text-[11px] whitespace-nowrap ${
                    section === s.id ? 'bg-gold text-obsidian' : 'text-muted hover:bg-surface'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-200 leading-relaxed overflow-y-auto max-h-[500px] font-mono">
              {section === 'exec-summary' && <ExecSummary />}
              {section === 'title-1' && <TitleOne />}
              {section === 'title-2' && <TitleTwo />}
              {section === 'title-3' && <TitleThree />}
            </div>
          </div>

          <div className="p-4 bg-panel border-t border-hairline flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-[11px] text-muted">
              <span className="text-white font-bold">Complete Legislative Draft:</span> 8 Pages, Titles I-III, Sections 101-305
            </div>
            <button
              onClick={onOpenDraft}
              className="bg-gold hover:bg-gold/80 text-obsidian font-black px-4 py-2 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Expand Unabridged Bill & PDF</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ConstituentGenerator />
        </div>
      </div>
    </div>
  )
}

function ExecSummary() {
  return (
    <div className="space-y-4">
      <div className="p-3 bg-gold/10 border border-gold/30 rounded text-gold text-[11px]">
        PART I: CONGRESSIONAL EXECUTIVE BRIEFING — JULY 2026
      </div>
      <h3 className="text-base font-bold text-white uppercase">1. The Problem: Corporate Digital Anarchy</h3>
      <p className="text-muted">
        For over three decades, the digital economy has operated in a state of corporate anarchy. Because
        the internet was built without a native identity or data-ownership layer, human behavior, location
        tracking, and financial metrics have been treated as unowned raw commodities extracted under
        unconscionable Terms of Service.
      </p>
      <h3 className="text-base font-bold text-white uppercase mt-4">2. Constitutional Foundation</h3>
      <ul className="list-disc pl-5 space-y-1 text-muted">
        <li><strong className="text-white">Fourth Amendment Extension:</strong> Continuous digital footprints are legally formalized as "papers and effects." Unauthorized extraction is reclassified as Federal Identity Trespassing.</li>
        <li><strong className="text-white">Fifth Amendment Protection:</strong> Un-encrypted tracking databases are identified as stolen property. Returning custody to citizens is a lawful restitution of converted chattel.</li>
      </ul>
      <h3 className="text-base font-bold text-white uppercase mt-4">3. Strategic Summary for Congress</h3>
      <p className="text-muted">
        • Universal Citizen Inclusion: Guarantees baseline dividends to Opt-Out users.<br />
        • Absolute Budgetary Isolation: Citizen Dividend Pool is insulated from the General Treasury.<br />
        • Zero-Cost Public Assurances: Free identity and credit verification modules for essential utilities.
      </p>
    </div>
  )
}

function TitleOne() {
  return (
    <div className="space-y-4">
      <div className="text-[10px] text-cyan font-bold">STATUTORY STATUTE // TITLE I</div>
      <h3 className="text-base font-bold text-white uppercase">Title I — Declaration of Digital Sovereignty & Identity Inviolability</h3>
      <StatuteBlock label="SECTION 101: SHORT TITLE">
        This Act may be cited as the "Sovereign Digital Identity and Resource Nationalization Act."
      </StatuteBlock>
      <StatuteBlock label="SECTION 102: CODIFICATION OF THE DIGITAL BODY">
        (a) Digital footprints, biometrics, and transaction records are declared an unalienable, physical
        extension of the human body. (b) Every citizen holds an absolute, lifetime, indivisible fee simple
        property right in their digital identity.
      </StatuteBlock>
      <StatuteBlock label="SECTION 103: FEDERAL IDENTITY TRESPASSING">
        Unauthorized extraction incurs statutory damages of $10,000 per query, payable directly to the
        national Citizen Dividend Pool.
      </StatuteBlock>
    </div>
  )
}

function TitleTwo() {
  return (
    <div className="space-y-4">
      <div className="text-[10px] text-cyan font-bold">STATUTORY STATUTE // TITLE II</div>
      <h3 className="text-base font-bold text-white uppercase">Title II — Technical Architecture & Sovereign Homomorphic Grid</h3>
      <StatuteBlock label="SECTION 202: ZERO-COPY MANDATE & AIR-GAPPED VAULTS" accent="emerald">
        Citizen data is stored in air-gapped RAM-only computational nodes. No third party or federal agency
        shall copy, clone, or export raw unencrypted citizen data.
      </StatuteBlock>
      <StatuteBlock label="SECTION 203: HOMOMORPHIC COMPUTE GRID (SHCG)" accent="emerald">
        <span className="text-cyan font-mono text-[11px] block mb-1">Formula: f(E(Data)) = E(f(Data))</span>
        Corporate algorithms run against homomorphically encrypted data inside sandboxes. RAM nodes
        power-cycle immediately after generating blind tokens, vaporizing all query trails.
      </StatuteBlock>
      <StatuteBlock label="SECTION 206: CREDIT BUREAU LIQUIDATION" accent="emerald">
        Private credit bureaus are stripped of private data custody. Scores are generated exclusively by
        open-source algorithms inside Sovereign Analytical Modules (SAMs).
      </StatuteBlock>
    </div>
  )
}

function TitleThree() {
  return (
    <div className="space-y-4">
      <div className="text-[10px] text-gold font-bold">STATUTORY STATUTE // TITLE III</div>
      <h3 className="text-base font-bold text-white uppercase">Title III — Economic Engine & Citizen Dividend Roster</h3>
      <div className="p-3 bg-obsidian border-l-2 border-gold space-y-2">
        <span className="font-bold text-white">SECTION 303: THREE-TIER SELECTION</span>
        <ul className="space-y-1 text-muted">
          <li>• <strong className="text-white">Tier 1 (Sovereign Purist):</strong> Absolute commercial opt-out + baseline subscription dividend (~$20/yr).</li>
          <li>• <strong className="text-white">Tier 2 (Commonwealth Member):</strong> Aggregated pool, uniform egalitarian dividend (~$100/yr).</li>
          <li>• <strong className="text-white">Tier 3 (Sovereign Landowner):</strong> 100% direct dynamic royalty yield (~$250+/yr) routed through 30-45 day anonymous escrow.</li>
        </ul>
      </div>
      <StatuteBlock label="SECTION 304: FISCAL TREASURY INSULATION" accent="gold">
        Dividend funds are legally and cryptographically insulated from the General Treasury. Congress
        cannot raid or freeze funds to offset federal deficits.
      </StatuteBlock>
    </div>
  )
}

function StatuteBlock({ label, children, accent = 'cyan' }) {
  const borderClass = accent === 'emerald' ? 'border-emerald' : accent === 'gold' ? 'border-gold' : 'border-cyan'
  return (
    <div className={`p-3 bg-obsidian border-l-2 ${borderClass} space-y-1`}>
      <span className="font-bold text-white block">{label}</span>
      <p className="text-muted">{children}</p>
    </div>
  )
}
