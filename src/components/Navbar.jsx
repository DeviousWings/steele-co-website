import React, { useState, useEffect, useRef } from 'react'
import { Server, Shield, BookOpen, Terminal, ChevronDown, ChevronUp } from 'lucide-react'

const NAV_STRUCTURE = [
  { id: 'home', type: 'link', label: 'Home // Positioning', mobileLabel: 'Home' },
  {
    id: 'services',
    label: 'Services',
    items: [
      { id: 'tiers', label: 'Sovereign Deployment Tiers & BOM', mobileLabel: 'Tiers & BOM' },
      { id: 'expose', label: 'Tech Exposé & Inspector', mobileLabel: 'Exposé' },
      { id: 'roi', label: 'Cloud Bleed vs On-Prem ROI Calculator', mobileLabel: 'Cloud ROI' },
    ],
  },
  {
    id: 'movement',
    label: 'Learn // Movement',
    items: [
      { id: 'consumer-rights', label: 'Consumer Rights (Ownership & Enjoyment)', mobileLabel: 'Consumer Rights' },
      { id: 'sdi-act', label: 'The SDI Vault & Act (2026)', mobileLabel: 'SDI Vault' },
      { id: 'vision', label: 'Future Vision', mobileLabel: 'Vision' },
      { id: 'about', label: 'About Steele Co.', mobileLabel: 'About' },
    ],
  },
]

export default function Navbar({ activeTab, setActiveTab, onOpenQuote, onOpenDraft, onOpenContract, onOpenDevLog }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)

  // Close dropdown if user clicks outside the navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id))
  }

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId)
    setOpenDropdown(null)
  }

  // Helper to check if any child item inside a dropdown is active
  const isDropdownActive = (items) => {
    return items.some((item) => item.id === activeTab)
  }

  return (
    <>
      {/* Status ticker */}
      <div className="top-banner bg-panel border-b border-hairline text-xs py-2 px-4 flex justify-between items-center text-muted overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            SYSTEM STATUS: ON-PREM SOVEREIGN
          </span>
          <span className="text-hairline">|</span>
          <span className="text-gold font-bold">ZERO THIRD-PARTY TRACKERS</span>
          <span className="text-hairline">|</span>
          <span className="text-cyan font-bold">ENCRYPTED LOCAL CONTAINMENT</span>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <button onClick={onOpenDevLog} className="text-cyan hover:underline flex items-center gap-1 transition-colors">
            <Terminal className="w-3.5 h-3.5" />
            <span>LIVE DEV LOG</span>
          </button>
          <span className="text-hairline">|</span>
          <button onClick={onOpenDraft} className="text-gold hover:underline flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SDI ACT MASTER DRAFT: JULY 2026 ↗</span>
          </button>
          <button onClick={onOpenContract} className="hover:text-cyan underline transition-colors">
            "NO DATA, NO FEE" CODE
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav ref={navRef} className="no-print sticky top-0 z-40 bg-obsidian/90 backdrop-blur-md border-b border-hairline px-4 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => handleSelectTab('home')} className="cursor-pointer flex items-center gap-2 group">
          <div className="p-2 bg-panel border border-hairline rounded group-hover:border-cyan transition-colors">
            <Server className="w-5 h-5 text-cyan" />
          </div>
          <div>
            <div className="font-bold text-base tracking-wider flex items-center gap-2 text-slate-100">
              STEELE CO.
              <span className="text-cyan text-xs px-1.5 py-0.5 border border-cyan/30 rounded bg-cyan/10">HARDWARE</span>
            </div>
            <div className="text-[10px] text-muted tracking-widest uppercase">Sovereign Data Infrastructure</div>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 text-xs">
          {NAV_STRUCTURE.map((group) => {
            if (group.type === 'link') {
              return (
                <button
                  key={group.id}
                  onClick={() => handleSelectTab(group.id)}
                  className={`px-3 py-2 rounded transition-all uppercase tracking-wide font-medium ${
                    activeTab === group.id
                      ? 'bg-panel text-cyan border border-cyan/40 shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                      : 'text-muted hover:text-slate-200 hover:bg-surface'
                  }`}
                >
                  {group.label}
                </button>
              )
            }

            const isOpen = openDropdown === group.id
            const hasActiveChild = isDropdownActive(group.items)

            return (
              <div key={group.id} className="relative">
                <button
                  onClick={() => toggleDropdown(group.id)}
                  className={`px-3 py-2 rounded transition-all uppercase tracking-wide font-medium flex items-center gap-1.5 ${
                    isOpen || hasActiveChild
                      ? 'bg-panel text-cyan border border-cyan/40'
                      : 'text-muted hover:text-slate-200 hover:bg-surface'
                  }`}
                >
                  <span>{group.label}</span>
                  {isOpen ? (
                    <ChevronUp className="w-3.5 h-3.5 text-cyan" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-muted group-hover:text-slate-200" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-panel border border-hairline rounded shadow-2xl py-2 z-50 animate-in fade-in duration-150">
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelectTab(item.id)}
                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors flex items-center justify-between ${
                          activeTab === item.id
                            ? 'bg-surface text-cyan font-bold border-l-2 border-cyan'
                            : 'text-muted hover:text-slate-100 hover:bg-surface'
                        }`}
                      >
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenDevLog}
            className="hidden sm:flex border border-cyan/40 text-cyan hover:bg-cyan/10 font-mono px-3 py-2.5 rounded text-xs uppercase tracking-wider transition-all items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Dev Log</span>
          </button>

          <button
            onClick={onOpenQuote}
            className="bg-cyan hover:bg-cyan/80 text-obsidian font-bold px-4 py-2.5 rounded text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)] flex items-center gap-2"
          >
            <Shield className="w-4 h-4" />
            <span>Secure Space</span>
          </button>
        </div>
      </nav>

      {/* Mobile Bar - Flattened items for easy mobile tap navigation */}
      <div className="no-print md:hidden bg-panel border-b border-hairline p-2 flex overflow-x-auto gap-2 text-xs items-center">
        {NAV_STRUCTURE.flatMap((group) => (group.items ? group.items : [group])).map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleSelectTab(tab.id)}
            className={`px-3 py-1.5 rounded whitespace-nowrap text-[11px] ${
              activeTab === tab.id ? 'bg-cyan text-obsidian font-bold' : 'bg-surface text-muted'
            }`}
          >
            {tab.mobileLabel || tab.label}
          </button>
        ))}
        <button
          onClick={onOpenDevLog}
          className="px-3 py-1.5 rounded whitespace-nowrap text-[11px] bg-surface text-cyan border border-cyan/30 font-bold flex items-center gap-1"
        >
          <Terminal className="w-3 h-3" />
          Dev Log
        </button>
      </div>
    </>
  )
}
