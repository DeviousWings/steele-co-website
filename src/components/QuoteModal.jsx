import { Shield, X, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

export default function QuoteModal({ onClose }) {
  const [state, handleSubmit] = useForm('xgawyenw')

  return (
    <div className="fixed inset-0 z-50 bg-obsidian/80 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-surface border border-cyan rounded-xl max-w-md w-full p-6 space-y-6 shadow-[0_0_30px_rgba(0,229,255,0.2)] text-slate-200">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-hairline pb-3">
          <div className="font-bold text-sm uppercase flex items-center gap-2 text-white">
            <Shield className="w-4 h-4 text-cyan" />
            <span>Secure Space // Deployment Intake</span>
          </div>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {state.succeeded ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Request Transmitted Successfully!</h3>
            <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
              A technician will review your parameters and send your published BOM directly via secure channel.
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
          <>
            <p className="text-xs text-muted leading-relaxed">
              Zero high-pressure sales calls. Submit your installation parameters to receive a published
              hardware bill of materials.
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
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rose-400 text-[10px] mt-1" />
              </div>

              {/* Deployment Tier Selection */}
              <div>
                <label htmlFor="tier" className="text-[10px] font-bold text-muted uppercase">Deployment Target Environment</label>
                <select 
                  id="tier"
                  name="tier"
                  className="w-full mt-1 p-2.5 bg-obsidian border border-hairline rounded text-white focus:border-cyan outline-none font-mono text-xs"
                >
                  <option value="Tier 1: Sovereign Desk Node ($2,450)">Tier 1: Sovereign Desk Node ($2,450)</option>
                  <option value="Tier 2: Enterprise SOHO Vault ($7,800)">Tier 2: Enterprise SOHO Vault ($7,800)</option>
                  <option value="Tier 3: Omniscient Home Core ($18,500)">Tier 3: Omniscient Home Core ($18,500)</option>
                </select>
              </div>

              {/* NEW: Use Case & Data Storage Description */}
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
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rose-400 text-[10px] mt-1" />
              </div>

              {/* General Submission Error Notification */}
              {state.errors && state.errors.length > 0 && (
                <div className="flex items-center gap-2 text-rose-400 bg-rose-950/30 border border-rose-900/50 p-2.5 rounded">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Please check required fields before submitting.</span>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full py-3 bg-cyan text-obsidian font-black uppercase text-xs rounded hover:bg-cyan/80 transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] disabled:opacity-50"
              >
                {state.submitting ? 'Transmitting Secure Request...' : 'Submit Direct Intake Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
