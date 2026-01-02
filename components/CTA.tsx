
import React from 'react';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';

interface CTAProps {
  onOpenContact: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 px-4 py-2 rounded-full text-emerald-400 font-bold text-sm backdrop-blur-md">
              <Sparkles size={16} /> Schedule an Aura Prototype
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to claim <br /> your voice?
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl">
              Stop settling for Tier-1 hold times. Deploy an Aura agent today and capture every single lead with human-level intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={onOpenContact}
                className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-emerald-600/20"
              >
                Start Free Pilot <ArrowRight />
              </button>
            </div>
            <p className="text-slate-500 text-sm font-medium flex items-center justify-center gap-2">
              <Phone size={14} /> Powering 2M+ monthly conversations globally.
            </p>
          </div>
          
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
