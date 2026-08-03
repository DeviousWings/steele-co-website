import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SovereignTiers from './pages/SovereignTiers';
import SdiActVault from './pages/SdiActVault';
import TechExpose from './pages/TechExpose';
import CloudRoi from './pages/CloudRoi';

import QuoteModal from './components/QuoteModal';
import ContractModal from './components/ContractModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contractModalOpen, setContractModalOpen] = useState(false);
  const [sdiModalOpen, setSdiModalOpen] = useState(false);
  const [directiveModalOpen, setDirectiveModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e2e8f0] font-mono selection:bg-[#00e5ff] selection:text-[#0a0a0c] flex flex-col justify-between">
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setQuoteModalOpen={() => setQuoteModalOpen(true)}
          setSdiModalOpen={() => setSdiModalOpen(true)}
          setDirectiveModalOpen={() => setDirectiveModalOpen(true)}
        />

        <main>
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} setQuoteModalOpen={() => setQuoteModalOpen(true)} />}
          {activeTab === 'tiers' && <SovereignTiers setQuoteModalOpen={() => setQuoteModalOpen(true)} />}
          {activeTab === 'sdi-vault' && <SdiActVault setSdiModalOpen={() => setSdiModalOpen(true)} setDirectiveModalOpen={() => setDirectiveModalOpen(true)} />}
          {activeTab === 'expose' && <TechExpose />}
          {activeTab === 'roi' && <CloudRoi setQuoteModalOpen={() => setQuoteModalOpen(true)} />}
        </main>
      </div>

      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <ContractModal isOpen={contractModalOpen} onClose={() => setContractModalOpen(false)} />
    </div>
  );
}
