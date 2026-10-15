import { useState } from 'react'

// Layout & Section Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
import CloudRoi from './pages/CloudRoi'
import About from './pages/About'
import Faq from './pages/Faq'
import FutureVision from './pages/FutureVision'
import ConsumerRights from './pages/ConsumerRights'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

<<<<<<< HEAD
  // Modal state
=======
  // Modal & Drawer State
>>>>>>> origin/dev
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [contractOpen, setContractOpen] = useState(false)
  const [draftOpen, setDraftOpen] = useState(false)
  const [pdfNoticeOpen, setPdfNoticeOpen] = useState(false)

  // Configuration state passed from SovereignTiers
  const [currentConfig, setCurrentConfig] = useState(null)

<<<<<<< HEAD
  const handleOpenQuoteWithConfig = (buildData, calculatedPrice) => {
    setCurrentConfig({
      tier: buildData.tier,
      storage: buildData.storageCapacity,
      maintenance: buildData.maintenancePlan,
      estimatedPrice: calculatedPrice,
      // Pass all step 2 toggle upgrades explicitly
      upsUpgrade: buildData.upsUpgrade ? 'Yes' : 'No',
      dualGpu: buildData.dualGpu ? 'Yes' : 'No',
      liquidCooling: buildData.liquidCooling ? 'Yes' : 'No',
      acousticPanels: buildData.acousticPanels ? 'Yes' : 'No',
      tenGbSwitch: buildData.tenGbSwitch ? 'Yes' : 'No',
    })
=======
  // Handles quote requests from BOTH configurators:
  // - Desk Node (DeskNodeConfigurator): passes { tier: 'Desk Node', smartHome, surveillance, storage }
  // - SOHO Vault / Home Core (legacy BOM configurator): passes { tier: 'tier2'|'tier3', upsUpgrade, dualGpu, ... }
  const handleOpenQuoteWithConfig = (buildData, calculatedPrice) => {
    const isDeskNode = buildData.tier === 'Desk Node'

    if (isDeskNode) {
      setCurrentConfig({
        tier: 'Desk Node',
        storage: buildData.storage || 'None',
        maintenance: 'N/A (labor-based quote)',
        estimatedPrice: calculatedPrice,
        smartHome: buildData.smartHome ? 'Yes' : 'No',
        surveillance: buildData.surveillance ? 'Yes' : 'No',
        // Keep these keys present so QuoteModal's optional fields don't break
        upsUpgrade: 'N/A',
        dualGpu: 'N/A',
        liquidCooling: 'N/A',
        acousticPanels: 'N/A',
        tenGbSwitch: 'N/A',
      })
    } else {
      setCurrentConfig({
        tier: buildData.tier,
        storage: buildData.storageCapacity,
        maintenance: buildData.maintenancePlan,
        estimatedPrice: calculatedPrice,
        upsUpgrade: buildData.upsUpgrade ? 'Yes' : 'No',
        dualGpu: buildData.dualGpu ? 'Yes' : 'No',
        liquidCooling: buildData.liquidCooling ? 'Yes' : 'No',
        acousticPanels: buildData.acousticPanels ? 'Yes' : 'No',
        tenGbSwitch: buildData.tenGbSwitch ? 'Yes' : 'No',
        smartHome: 'N/A',
        surveillance: 'N/A',
      })
    }
>>>>>>> origin/dev
    setQuoteOpen(true)
  }

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 flex flex-col font-sans">

      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={() => { setCurrentConfig(null); setQuoteOpen(true); }}
        onOpenDraft={() => setDraftOpen(true)}
        onOpenContract={() => setContractOpen(true)}
      />

      {/* Main Page Views */}
      <main className="flex-1">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'tiers' && <SovereignTiers onRequestQuote={handleOpenQuoteWithConfig} />}
        {activeTab === 'sdi-act' && <SdiActVault onOpenDraft={() => setDraftOpen(true)} />}
        {activeTab === 'expose' && <TechExpose />}
        {activeTab === 'roi' && <CloudRoi setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'faq' && <Faq />}
        {activeTab === 'vision' && <FutureVision onOpenQuote={() => { setCurrentConfig(null); setQuoteOpen(true); }} />}
        {activeTab === 'consumer-rights' && (
          <ConsumerRights
            onOpenDraft={() => setDraftOpen(true)}
            onOpenQuote={() => { setCurrentConfig(null); setQuoteOpen(true); }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenDraft={() => setDraftOpen(true)}
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
