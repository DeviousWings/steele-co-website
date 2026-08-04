import { useState } from 'react'

// Layout & Section Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BuildLogDrawer from './components/BuildLogDrawer'

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

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  
  // Modal & Drawer State
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [contractOpen, setContractOpen] = useState(false)
  const [draftOpen, setDraftOpen] = useState(false)
  const [pdfNoticeOpen, setPdfNoticeOpen] = useState(false)
  const [isDevLogOpen, setIsDevLogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 flex flex-col font-sans">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenDraft={() => setDraftOpen(true)}
        onOpenContract={() => setContractOpen(true)}
        onOpenDevLog={() => setIsDevLogOpen(true)}
      />

      {/* Main Page Views */}
      <main className="flex-1">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'tiers' && <SovereignTiers onRequestQuote={() => setQuoteOpen(true)} />}
        {activeTab === 'sdi-act' && <SdiActVault onOpenDraft={() => setDraftOpen(true)} />}
        {activeTab === 'expose' && <TechExpose />}
        {activeTab === 'roi' && <CloudRoi setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'faq' && <Faq />}
      </main>

      {/* Footer */}
      <Footer 
        onOpenDraft={() => setDraftOpen(true)} 
        setActiveTab={setActiveTab} 
      />

      {/* Dev Log / Roadmap Slide-Over Drawer */}
      <BuildLogDrawer
        isOpen={isDevLogOpen}
        onClose={() => setIsDevLogOpen(false)}
      />

      {/* Modals */}
      {draftOpen && (
        <MasterDraftModal 
          onClose={() => setDraftOpen(false)} 
          onPrintClick={() => setPdfNoticeOpen(true)} 
        />
      )}
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
      {contractOpen && <ContractModal onClose={() => setContractOpen(false)} />}
      {pdfNoticeOpen && <PdfNoticeModal onClose={() => setPdfNoticeOpen(false)} />}

    </div>
  )
}
