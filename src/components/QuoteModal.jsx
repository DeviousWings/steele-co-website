import React from 'react'
import { Shield, X, Cpu } from 'lucide-react'

export default function QuoteModal({ onClose, selectedConfig }) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-cyan-400 rounded-xl max-w-lg w-full p-6 space-y-6 shadow-[0_0_35px_rgba(0,229,255,0.25)] text-slate-200 my-8 relative">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="font-bold text-sm uppercase flex items-center gap-2 text-white">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Secure Space // Custom Deployment Booking</span>
          </div>
          <button 
            type="button"
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formspree Native Action Endpoint */}
        <form action="https://formspree.io/f/xgawyenw" method="POST" className="space-y-4 text-xs">
          
          {/* Visual Summary Box of All Config Choices */}
          {selectedConfig && (
            <div className="p-3 bg-slate-950 border border-cyan-500/40 rounded-lg space-y-2 font-mono text-[11px]">
              <div className="text-cyan-400 font-bold uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Configured BOM Total: ${selectedConfig.estimatedPrice?.toLocaleString()}</span>
              </div>
              <div className="text-slate-400 grid grid-cols-2 gap-1 text-[10px]">
                <div>Platform: <span className="text-slate-200 uppercase">{selectedConfig.tier}</span></div>
                <div>Storage: <span className="text-slate-200">{selectedConfig.storage}</span></div>
                <div>Plan: <span className="text-amber-400 capitalize">{selectedConfig.maintenance}</span></div>
                <div>UPS Backup: <span className="text-slate-200">{selectedConfig.upsUpgrade}</span></div>
                <div>Dual GPU: <span className="text-slate-200">{selectedConfig.dualGpu}</span></div>
                <div>Liquid Cool: <span className="text-slate-200">{selectedConfig.liquidCooling}</span></div>
                <div>Acoustic Panel: <span className="text-slate-200">{selectedConfig.acousticPanels}</span></div>
                <div>10Gb Switch: <span className="text-slate-200">{selectedConfig.tenGbSwitch}</span></div>
              </div>

              {/* Hidden Inputs to Pass Every Single Config Choice to Formspree */}
              <input type="hidden" name="Selected_Tier" value={selectedConfig.tier || 'N/A'} />
              <input type="hidden" name="Storage_Capacity" value={selectedConfig.storage || 'N/A'} />
              <input type="hidden" name="Maintenance_Plan" value={selectedConfig.maintenance || 'N/A'} />
              <input type="hidden" name="Estimated_Price" value={`$${selectedConfig.estimatedPrice?.toLocaleString()}` || 'N/A'} />
              <input type="hidden" name="Upgrade_UPS" value={selectedConfig.upsUpgrade || 'No'} />
              <input type="hidden" name="Upgrade_Dual_GPU" value={selectedConfig.dualGpu || 'No'} />
              <input type="hidden" name="Upgrade_Liquid_Cooling" value={selectedConfig.liquidCooling || 'No'} />
              <input type="hidden" name="Upgrade_Acoustic_Panels" value={selectedConfig.acousticPanels || 'No'} />
              <input type="hidden" name="Upgrade_10Gb_Switch" value={selectedConfig.tenGbSwitch || 'No'} />
            </div>
          )}

          <p className="text-xs text-slate-400 leading-relaxed">
            Zero high-pressure sales calls. Fill out your details below to submit your custom build and installation booking request.
          </p>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Contact Name / Business Title</label>
            <input 
              id="name"
              required 
              type="text" 
              name="name"
              placeholder="John Doe" 
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded text-white focus:border-cyan-400 outline-none" 
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Email Address (Secure Intake)</label>
            <input 
              id="email"
              required 
              type="email" 
              name="email"
              placeholder="john@domain.com" 
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded text-white focus:border-cyan-400 outline-none" 
            />
          </div>

          {/* Use Case & Data Storage Description */}
          <div>
            <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Use Case & Data Storage Requirements
            </label>
            <textarea 
              id="message"
              name="message"
              rows="3"
              required
              placeholder="Briefly describe what you plan to store (e.g., family media vault, legal documents, local AI/Ollama models) and any specific network constraints..." 
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded text-white focus:border-cyan-400 outline-none resize-none" 
            />
          </div>

          {/* Native HTML Submit Button */}
          <button 
            type="submit"
            className="w-full py-3 bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-black uppercase text-xs rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] cursor-pointer"
          >
            Submit Installation Booking Request
          </button>
        </form>

      </div>
    </div>
  )
}
