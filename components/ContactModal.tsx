
import React, { useState } from 'react';
import { X, Send, Calendar, CheckCircle, Mic } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-950 transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div className="p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-black text-slate-950">Pilot Requested!</h3>
            <p className="text-slate-600">
              An AuraVoice solutions engineer will reach out to initialize your custom agent prototype.
            </p>
            <button 
              onClick={onClose}
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-600/20"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-3xl font-black text-slate-950 mb-2">Initialize Your Pilot</h3>
              <p className="text-slate-500">Experience a live agent trained on your company data.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Website</label>
                <input required type="url" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="https://yourwebsite.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Agent Focus</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                  <option>Complex Inbound Resolution</option>
                  <option>High-Intensity Outbound Sales</option>
                  <option>Global Appointment Setting</option>
                  <option>Custom Enterprise Workflow</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-emerald-100 transition-all flex items-center justify-center gap-2"
              >
                Request Custom Demo <Mic size={18} />
              </button>

              <div className="flex items-center justify-center gap-4 pt-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1"><Calendar size={12} /> Same-Day Setup</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Security Audited</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
