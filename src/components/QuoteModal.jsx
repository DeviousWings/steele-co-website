import React, { useState } from 'react'
import { Shield, X, Cpu } from 'lucide-react'

export default function QuoteModal({ onClose, selectedConfig }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('message', formData.message)

    if (selectedConfig) {
      data.append('Selected_Tier', selectedConfig.tier || 'N/A')
      data.append('Storage_Capacity', selectedConfig.storage || 'N/A')
      data.append('Maintenance_Plan', selectedConfig.maintenance || 'N/A')
      data.append('Estimated_Price', `$${selectedConfig.estimatedPrice?.toLocaleString()}` || 'N/A')
      data.append('Upgrade_UPS', selectedConfig.upsUpgrade || 'No')
      data.append('Upgrade_Dual_GPU', selectedConfig.dualGpu || 'No')
      data.append('Upgrade_Liquid_Cooling', selectedConfig.liquidCooling || 'No')
      data.append('Upgrade_Acoustic_Panels', selectedConfig.acousticPanels || 'No')
      data.append('Upgrade_10Gb_Switch', selectedConfig.tenGbSwitch || 'No')
    }

    try {
      const response = await fetch('https://formspree.io/f/xgawyenw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        setSuccess(true)
      } else {
        alert('Submission failed. Please check your connection.')
      }
    } catch (err) {
      alert('Network error connecting to Formspree.')
    } finally {
      setSubmitting(false)
    }
  }

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

        {success ? (
          <div className="py-8 text-center space-y-3">
            <h3 className="text-base font-bold text-emerald-400 uppercase">Booking Request Transmitted!</h3>
            <p className="text-xs text-slate-400">Your custom BOM and details have been sent successfully via Formspree.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-cyan-400 text-slate-950 font-bold uppercase text-xs rounded hover:bg-cyan-500 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Configured BOM Summary Box */}
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe what you plan to store (e.g., family media vault, legal documents, local AI/Ollama models) and any specific network constraints..." 
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded text-white focus:border-cyan-400 outline-none resize-none" 
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-black uppercase text-xs rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] cursor-pointer disabled:opacity-50"
            >
              {submitting ? 'Transmitting Request...' : 'Submit Installation Booking Request'}
            </button>
          </form>
        )}

      </div>
    </div>
  )
}
