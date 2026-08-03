import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ContractModal from './components/ContractModal';

// Pages
import Home from './pages/Home';
import SovereignTiers from './pages/SovereignTiers';
import SdiActVault from './pages/SdiActVault';
import TechExpose from './pages/TechExpose';
import CloudRoi from './pages/CloudRoi';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contractModalOpen, setContractModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e2e8f0]">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onOpenQuote={() => setQuoteModalOpen(true)} />

      <main>
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} onOpenContract={() => setContractModalOpen(true)} />}
        {activeTab === 'tiers' && <SovereignTiers onOpenQuote={() => setQuoteModalOpen(true)} />}
        {activeTab === 'sdi-act' && <SdiActVault />}
        {activeTab === 'expose' && <TechExpose />}
        {activeTab === 'roi' && <CloudRoi setActiveTab={setActiveTab} />}
      </main>

      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />

      {quoteModalOpen && <QuoteModal onClose={() => setQuoteModalOpen(false)} />}
      {contractModalOpen && <ContractModal onClose={() => setContractModalOpen(false)} />}
    </div>
  );
}
