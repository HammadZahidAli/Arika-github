
import React from 'react';
import { PhoneIncoming, PhoneOutgoing, Calendar, ShieldCheck, Database, Languages, Check } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Omni-Inbound Support",
    description: "Empower your customer experience with agents that handle complex resolutions instantly.",
    benefits: ["Tier 1 & 2 Automation", "Smart Queue Management", "Real-time ticket logging"],
    icon: <PhoneIncoming className="text-white" size={24} />
  },
  {
    title: "High-Volume Outbound",
    description: "Scale your prospecting without the headcount. Human-like calls that qualify leads.",
    benefits: ["Objection handling", "Sentiment tracking", "Instant lead scoring"],
    icon: <PhoneOutgoing className="text-white" size={24} />
  },
  {
    title: "Intelligent Scheduling",
    description: "Fully automated calendar management. Syncs directly with your team's availability.",
    benefits: ["Conflict resolution", "SMS Reminders", "No-show automation"],
    icon: <Calendar className="text-white" size={24} />
  },
  {
    title: "Neural Voice Cloning",
    description: "Own your brand's voice. Clone executive voices for a consistent, premium experience.",
    benefits: ["Custom Vocal Profiles", "Brand Consistency", "High-fidelity audio"],
    icon: <Languages className="text-white" size={24} />
  },
  {
    title: "Enterprise Ecosystem",
    description: "Deep-link integrations with Salesforce, HubSpot, and proprietary API hooks.",
    benefits: ["Real-time data sync", "Full Transcripts", "Workflow triggers"],
    icon: <Database className="text-white" size={24} />
  },
  {
    title: "Regulatory Guardrails",
    description: "Built for sensitive industries. HIPAA, SOC2, and GDPR compliant voice agents.",
    benefits: ["PII Redaction", "Secure Vaulting", "Audit-ready logs"],
    icon: <ShieldCheck className="text-white" size={24} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Core Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight">
              One Engine. <br />
              <span className="text-slate-400">Total Call Sovereignty.</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
            Deploy specialized agents designed for the specific rigors of your business vertical.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-100">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
              
              <ul className="space-y-3 mb-4">
                {service.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Check size={16} className="text-emerald-500" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
