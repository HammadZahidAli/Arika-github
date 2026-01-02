
import React from 'react';
import { Play, Mic, Headphones, Volume2 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 font-semibold text-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
            Enterprise-Grade AI Voice Agents
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 leading-[1.1]">
            Automate Growth <br />
            <span className="gradient-text">Through Voice.</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            AuraVoice AI deploys hyper-realistic agents that handle support, sales, and bookings with zero latency. Turn every call into a revenue opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenContact}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-100 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              See It In Action <Play size={20} fill="currentColor" />
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-600 hover:text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              View Use Cases
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <Mic className="text-emerald-500" size={20} /> Human Emotion
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <Headphones className="text-emerald-500" size={20} /> Multi-Channel Sync
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <Volume2 className="text-emerald-500" size={20} /> 45+ Languages
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 bg-slate-950 p-8 rounded-[3rem] shadow-2xl border border-slate-900 rotate-1">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Mic className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold">Aura Support Agent</div>
                  <div className="text-emerald-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Operational
                  </div>
                </div>
              </div>
              <div className="waveform text-emerald-400">
                <div className="wave-bar" style={{animationDelay: '0.1s'}}></div>
                <div className="wave-bar" style={{animationDelay: '0.3s'}}></div>
                <div className="wave-bar" style={{animationDelay: '0.2s'}}></div>
                <div className="wave-bar" style={{animationDelay: '0.5s'}}></div>
                <div className="wave-bar" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-slate-900 p-4 rounded-2xl text-slate-300 border border-slate-800">
                "Hello! Thanks for calling AuraVoice. Are you looking to scale your outbound efforts today?"
              </div>
              <div className="bg-emerald-600 p-4 rounded-2xl text-white ml-8 shadow-lg shadow-emerald-600/10">
                "Yes, I need an agent that can handle lead qualification for my sales team."
              </div>
              <div className="bg-slate-900 p-4 rounded-2xl text-slate-300 border border-slate-800">
                "Perfect. I can deploy an agent with your specific CRM logic. Shall we set up a trial?"
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-900 flex justify-between items-center text-xs text-slate-500">
              <span>Latency: 110ms</span>
              <span>Human Accuracy: 99.1%</span>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-emerald-500/10 rounded-full -z-10 blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
