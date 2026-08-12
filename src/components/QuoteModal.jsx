import React, { useState } from 'react'
import { Shield, X, CheckCircle, AlertCircle, Cpu, Zap, Wind } from 'lucide-react'

export default function QuoteModal({ isOpen, onClose, selectedConfig }) {
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.target
    const data = new FormData(form)

    // Append custom BOM configuration data if passed from the configurator
    if (selectedConfig) {
      data.append('configured_tier', selectedConfig.tier || 'Custom Build')
      data.append('configured_compute', selectedConfig.compute || 'Standard')
      data.append('configured_power', selectedConfig.power || 'Standard UPS')
      data.append('configured_thermal', selectedConfig.thermal || 'Standard Air')
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
            <span>Secure Space // Custom BOM Booking Intake</span>
          </div>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors font-mono text-xs">
            [ESC]
          </button>
        </div>

        {/* Success State */}
        {succeeded ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Custom Specification Transmitted!</h3>
            <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
              Your selected BOM configuration and use-case requirements have been securely received. A technician will reach out directly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 py-2.5 px-6 bg-cyan text-obsidian font-black uppercase text-xs rounded hover:bg-cyan/80 transition-all"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form State */
          <div className="space-y-4">
            
            {/* Summary Box: Displays what the user selected in the BOM Configurator */}
            {selectedConfig && (
              <div className="p-3 bg-obsidian border border-cyan/40 rounded-lg space-y-2 text-xs font-mono">
                <div className="text-[10px] text-cyan font-bold uppercase tracking-wider flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Attached Configuration Summary</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-muted text-[11px]">
                  <div><strong className="text-slate-200">Tier:</strong> {selectedConfig.tier || 'Standard'}</div>
                  <div><strong className="text-slate-200">Compute:</strong> {selectedConfig.compute || 'Standard'}</div>
                  <div><strong className="text-slate-200">Power:</strong> {selectedConfig.power || 'Standard'}</div>
                  <div><strong className="text-slate-200">Thermal:</strong> {selectedConfig.thermal || 'Standard'}</div>
                </div>
              </div>
            )}

            <p className="text-xs text-muted leading-relaxed">
              Zero high-pressure sales calls. Complete your contact details and use-case specifications below to route this custom build request.
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

              {/* Error Message Notification */}
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
                className="w-full py-3 bg-cyan text-obsidian font-black uppercase text-xs rounded hover:bg-cyan/80 transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] disabled:opacity-50"
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
