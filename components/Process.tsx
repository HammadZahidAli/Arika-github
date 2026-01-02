
import React from 'react';
import { Mic, Code, Network, Rocket } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    title: "Strategic Discovery",
    description: "We audit your call logs to identify the highest ROI voice automation opportunities.",
    icon: <Mic size={28} />
  },
  {
    title: "Agent Engineering",
    description: "Our team designs custom conversation flows and guardrails for your brand.",
    icon: <Code size={28} />
  },
  {
    title: "Integration Sync",
    description: "Securely link your database, CRM, and communication stacks via AuraSync.",
    icon: <Network size={28} />
  },
  {
    title: "Full Launch",
    description: "Agents go live with real-time monitoring and automated performance tuning.",
    icon: <Rocket size={28} />
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Implementation Path</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6">Designed for Speed.</h3>
          <p className="text-slate-500 text-lg">From initial discovery to full global deployment in under 7 business days.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black shadow-lg border-4 border-white">
                  {index + 1}
                </div>
                <div className="mb-6 text-emerald-600 flex justify-center pt-4">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-950 text-center mb-4">{step.title}</h4>
                <p className="text-slate-500 text-center text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
