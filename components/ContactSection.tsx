
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Contact AuraVoice</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 leading-tight">
                Secure Your <br />
                <span className="gradient-text">Unfair Advantage.</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                Ready to transform your call operations? Our strategy team is standing by to design your first custom agent profile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">Direct Email</h4>
                  <p className="text-slate-500 text-sm">growth@auravoice.ai</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">Expert Line</h4>
                  <p className="text-slate-500 text-sm">+1 (555) 700-0199</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">Innovation Hub</h4>
                  <p className="text-slate-500 text-sm">Austin, TX, USA</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">Availability</h4>
                  <p className="text-slate-500 text-sm">24/7 Global Ops</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle size={20} />
                </div>
                <span className="font-bold text-slate-800">Priority Response System</span>
              </div>
              <p className="text-slate-500 text-sm italic">
                "All enterprise inquiries are addressed by a solutions engineer within 2 business hours."
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-50 relative">
            {isSuccess ? (
              <div className="py-20 text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-3xl font-black text-slate-950">Message Received</h4>
                <p className="text-slate-600 max-w-xs mx-auto text-lg">
                  An AuraVoice specialist will be in touch shortly to schedule your audit.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" 
                    placeholder="Enter your name" 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Work Email</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" 
                      placeholder="email@company.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Site</label>
                    <input 
                      type="url" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" 
                      placeholder="https://" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Automation Goals</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none" 
                    placeholder="Briefly describe your current call volume and goals..."
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-emerald-100 transition-all flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? 'Securing Connection...' : 'Get Audit Report'} 
                  {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
