import { useState, useEffect } from 'react'

// Layout & Section Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { TIERS, UPGRADES } from './data/tiersData'


// Modals
import QuoteModal from './components/QuoteModal'
import ContractModal from './components/ContractModal'
import MasterDraftModal from './components/MasterDraftModal'
import PdfNoticeModal from './components/PdfNoticeModal'

// Pages
import Home from './pages/Home'
import SovereignTiers from './pages/SovereignTiers'
import SdiActVault from './pages/SdiActVault'
import TechExpose from './pages/TechExpose'
import About from './pages/About'
import Faq from './pages/Faq'
import FutureVision from './pages/FutureVision'
import ConsumerRights from './pages/ConsumerRights'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  // Jump to top whenever the visitor switches pages (SPA has no real routes).
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [activeTab])

  // Modal & Drawer State
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [contractOpen, setContractOpen] = useState(false)
  const [draftOpen, setDraftOpen] = useState(false)
  const [pdfNoticeOpen, setPdfNoticeOpen] = useState(false)

  // Configuration state passed from SovereignTiers
  const [currentConfig, setCurrentConfig] = useState(null)

  // Handles quote requests from BOTH configurators:
  // - Desk Node (DeskNodeConfigurator): passes { tier: 'Desk Node', smartHome, surveillance, storage }
  // - SOHO Vault / Home Core (legacy BOM configurator): passes { tier: 'tier2'|'tier3', upsUpgrade, dualGpu, ... }
  const handleOpenQuoteWithConfig = (buildData, calculatedPrice) => {
    const isDeskNode = buildData.tier === 'Desk Node'

    if (buildData.planOnly) {
      // Plan card "Get a Quote": only send the plan + starting price, no add-ons.
      setCurrentConfig({ tier: buildData.tier, estimatedPrice: calculatedPrice, planOnly: true })
    } else if (isDeskNode) {
      setCurrentConfig({
        tier: 'Desk Node',
        storage: buildData.storage || 'None',
        maintenance: buildData.maintenance || 'Self-Managed (No Plan)',
        estimatedPrice: calculatedPrice,
        router: buildData.router ? 'Yes' : 'No',
        smartHome: buildData.smartHome ? 'Yes' : 'No',
        surveillance: buildData.surveillance ? 'Yes' : 'No',
      })
    } else {
      // Only report upgrades that actually exist in the configurator.
      const upgrades = UPGRADES.filter((u) => buildData[u.key]).map((u) => u.title)
      setCurrentConfig({
        tier: TIERS.find((t) => t.id === buildData.tier)?.name || buildData.tier,
        storage: buildData.storageCapacity,
        maintenance: buildData.maintenancePlan,
        estimatedPrice: calculatedPrice,
        upgrades: upgrades.length ? upgrades.join(', ') : 'None',
      })
    }
    setQuoteOpen(true)
  }

  const openQuote = () => { setCurrentConfig(null); setQuoteOpen(true) }

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 flex flex-col font-sans">

      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={openQuote}
        onOpenDraft={() => setDraftOpen(true)}
        onOpenContract={() => setContractOpen(true)}
      />

      {/* Main Page Views */}
      <main className="flex-1">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'tiers' && <SovereignTiers onRequestQuote={handleOpenQuoteWithConfig} />}
        {activeTab === 'sdi-act' && <SdiActVault onOpenDraft={() => setDraftOpen(true)} />}
        {activeTab === 'expose' && <TechExpose />}
        {activeTab === 'about' && <About setActiveTab={setActiveTab} onOpenQuote={openQuote} onOpenDraft={() => setDraftOpen(true)} />}
        {activeTab === 'faq' && <Faq setActiveTab={setActiveTab} onOpenQuote={openQuote} />}
        {activeTab === 'vision' && <FutureVision onOpenQuote={openQuote} />}
        {activeTab === 'consumer-rights' && (
          <ConsumerRights
            onOpenDraft={() => setDraftOpen(true)}
            onOpenQuote={openQuote}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenDraft={() => setDraftOpen(true)}
        onOpenContract={() => setContractOpen(true)}
        onOpenQuote={openQuote}
        setActiveTab={setActiveTab}
      />

      
      {/* Modals */}
      {draftOpen && (
        <MasterDraftModal
          onClose={() => setDraftOpen(false)}
          onPrintClick={() => setPdfNoticeOpen(true)}
        />
      )}
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} selectedConfig={currentConfig} />}
      {contractOpen && <ContractModal onClose={() => setContractOpen(false)} />}
      {pdfNoticeOpen && <PdfNoticeModal onClose={() => setPdfNoticeOpen(false)} />}

    </div>
  )
}
