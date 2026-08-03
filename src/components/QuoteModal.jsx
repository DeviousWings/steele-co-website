import React, { useState } from 'react';
import { X, Shield, Check } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-md flex justify-center items-center p-4">
      <div className="bg-[#121216] border border-[#00e5ff] rounded-xl max-w-md w-full p-6 space-y-4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#94a3b8] hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#262630] pb-2">
          <span className="text-sm font-bold text-white uppercase flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00e5ff]" />
            <span>Hardware Deployment Intake</span>
          </span>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <Check className="w-8 h-8 text-[#10b981] mx-auto" />
            <div className="text-sm font-bold text-white uppercase">Intake Request Received</div>
            <p className="text-xs text-[#94a3b8]">Our physical deployment team will contact you directly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <p className="text-[#94a3b8]">Submit your parameter requirements to receive a published hardware bill of materials.</p>
            <input
              type="text"
              required
              placeholder="Contact Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 bg-[#0a0a0c] border border-[#262630] text-white rounded outline-none focus:border-[#00e5ff]"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 bg-[#0a0a0c] border border-[#262630] text-white rounded outline-none focus:border-[#00e5ff]"
            />
            <textarea
              placeholder="System Requirements or Property Notes"
              rows="3"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full p-2 bg-[#0a0a0c] border border-[#262630] text-white rounded outline-none focus:border-[#00e5ff]"
            ></textarea>
            <button type="submit" className="w-full py-2.5 bg-[#00e5ff] text-[#0a0a0c] font-bold text-xs uppercase rounded hover:bg-[#00b8cc] transition-all">
              Submit Deployment Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
