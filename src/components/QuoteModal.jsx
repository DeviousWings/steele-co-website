import React, { useState } from 'react'
import { Shield, X, CheckCircle, AlertCircle, Cpu } from 'lucide-react'

export default function QuoteModal({ onClose, selectedConfig }) {
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.target
    const data = new FormData(form)

    // Dynamically inject all custom BOM configuration choices into the Formspree payload
    if (selectedConfig) {
      data.append('Selected_Tier', selectedConfig.tier || 'N/A')
      data.append('Storage_Capacity', selectedConfig.storage || 'N/A')
      data.append('Maintenance_Plan', selectedConfig.maintenance || 'N/A')
      data.append('Estimated_Price_USD', `$${selectedConfig.estimatedPrice?.toLocaleString()}` || 'N/A')
      data.append('Upgrade_UPS', selectedConfig.upsUpgrade)
      data.append('Upgrade_Dual_GPU', selectedConfig.dualGpu)
      data.append('Upgrade_Liquid_Cooling', selectedConfig.liquidCooling)
      data.append('Upgrade_Acoustic_Panels', selectedConfig.acousticPanels)
      data.append('Upgrade_10Gb_Switch', selectedConfig.tenGbSwitch)
    }

    try {
      const response = await fetch('https://formspree.io/f/xgawyenw', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSucceeded(true)
      } else {
        const dataJson = await response.json()
        setError(dataJson.error || 'Submission failed. Please try again.')
      }
    } catch (err) {
      setError('Network connection error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-obsidian/85 backdrop-blur-md flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-surface border border-cyan rounded-xl max-w-lg w-full p-6 space-y-6 shadow-[0_0_35px_rgba(0,229,255,0.25)] text-slate-200 my-8">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-hairline pb-3">
          <div className="font-bold text-sm uppercase flex items-center gap-2 text-white">
            <Shield className="w-4 h-4 text-cyan" />
            <span>Secure Space // Custom Deployment Booking</span>
          </div>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {succeeded ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Request Transmitted Successfully!</h3>
            <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
              Your complete hardware build configuration and requirements have been received. A technician will review and reach out directly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 py-2.5 px-6 bg-cyan text-obsidian font-black uppercase text-xs rounded hover:bg-cyan/80 transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form State */
          <div className="space-y-4">
            
            {/* Visual Summary Box of All Config Choices */}
            {selectedConfig && (
              <div className="p-3 bg-obsidian border border-cyan/40 rounded-lg space-y-2 font-mono text-[11px]">
                <div className="text-cyan font-bold uppercase flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Configured BOM Total: ${selectedConfig.estimatedPrice?.toLocaleString()}</span>
                </div>
                <div className="text-muted grid grid-cols-2 gap-1 text-[10px]">
                  <div>Platform: <span className="text-slate-200 uppercase">{selectedConfig.tier}</span></div>
                  <div>Storage: <span className="text-slate-200">{selectedConfig.storage}</span></div>
                  <div>Plan: <span className="text-gold capitalize">{selectedConfig.maintenance}</span></div>
                  <div>UPS Backup: <span className="text-slate-200">{selectedConfig.upsUpgrade}</span></div>
                  <div>Dual GPU: <span className="text-slate-200">{selectedConfig.dualGpu}</span></div>
                  <div>Liquid Cool: <span className="text-slate-200">{selectedConfig.liquidCooling}</span></div>
                </div>
              </div>
            )}

            <p className="text-xs text-muted leading-relaxed">
              Zero high-pressure sales calls. Fill out your details below to submit your custom build and installation booking request.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="text-[10px] font-bold text-muted uppercase">Contact Name / Business Title</label>
                <input 
                  id="name"
                  required 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  className="w-full mt-1 p-2.5 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none" 
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-[10px] font-bold text-muted uppercase">Email Address (Secure Intake)</label>
                <input 
                  id="email"
                  required 
                  type="email" 
                  name="email"
                  placeholder="john@domain.com" 
                  className="w-full mt-1 p-2.5 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none" 
                />
              </div>

              {/* Use Case & Data Storage Description */}
              <div>
                <label htmlFor="message" className="text-[10px] font-bold text-muted uppercase">
                  Use Case & Data Storage Requirements
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="3"
                  required
                  placeholder="Briefly describe what you plan to store (e.g., family media vault, legal documents, local AI/Ollama models) and any specific network constraints..." 
                  className="w-full mt-1 p-2.5 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none resize-none" 
                />
              </div>

              {/* Error Notification */}
              {error && (
                <div className="flex items-center gap-2 text-rose-400 bg-rose-950/30 border border-rose-900/50 p-2.5 rounded">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full py-3 bg-cyan text-obsidian font-black uppercase text-xs rounded hover:bg-cyan/80 transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] disabled:opacity-50 cursor-pointer"
              >
                {submitting ? 'Transmitting Secure Request...' : 'Submit Installation Booking Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
