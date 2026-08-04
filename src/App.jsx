import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import ContractModal from './components/ContractModal'
import MasterDraftModal from './components/MasterDraftModal'
import PdfNoticeModal from './components/PdfNoticeModal'
import Home from './pages/Home'
import SovereignTiers from './pages/SovereignTiers'
import SdiActVault from './pages/SdiActVault'
import TechExpose from './pages/TechExpose'
import CloudRoi from './pages/CloudRoi'
import MissionRoadmapDrawer from './components/MissionRoadmapDrawer'
import About from './pages/About'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [contractOpen, setContractOpen] = useState(false)
  const [draftOpen, setDraftOpen] = useState(false)
  const [pdfNoticeOpen, setPdfNoticeOpen] = useState(false)
  const [isDevLogOpen, setIsDevLogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 flex flex-col">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={() => setQuoteOpen(true)}
        onOpenDraft={() => setDraftOpen(true)}
        onOpenContract={() => setContractOpen(true)}
        onOpenDevLog={() => setIsDevLogOpen(true)} 
        
      />

      <main className="flex-1">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'tiers' && <SovereignTiers onRequestQuote={() => setQuoteOpen(true)} />}
        {activeTab === 'sdi-act' && <SdiActVault onOpenDraft={() => setDraftOpen(true)} />}
        {activeTab === 'expose' && <TechExpose />}
        {activeTab === 'roi' && <CloudRoi setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <About />}
      </main>

      <Footer onOpenDraft={() => setDraftOpen(true)} />

      {/* Slide-Over README / Dev Log Drawer */}
      <MissionRoadmapDrawer
        isOpen={isDevLogOpen}
        onClose={() => setIsDevLogOpen(false)}
      />

      {draftOpen && (
        <MasterDraftModal onClose={() => setDraftOpen(false)} onPrintClick={() => setPdfNoticeOpen(true)} />
      )}
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
      {contractOpen && <ContractModal onClose={() => setContractOpen(false)} />}
      {pdfNoticeOpen && <PdfNoticeModal onClose={() => setPdfNoticeOpen(false)} />}
    </div>
  )
}
