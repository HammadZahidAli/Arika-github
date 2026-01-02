
import React from 'react';
import { Zap, Mic2, BarChart4, Globe2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const stats = [
    { label: "Cost Per Call", value: "$0.10" },
    { label: "Lead Win Rate", value: "+34%" },
    { label: "Uptime SLA", value: "99.9%" },
  ];

  const differentiators = [
    {
      title: "Contextual Intelligence",
      desc: "Our agents remember previous calls and understand context to avoid frustration.",
      icon: <Mic2 className="text-emerald-600" />
    },
    {
      title: "Linear Scaling",
      desc: "Add 100 concurrent lines in seconds. Scale your outreach with a button click.",
      icon: <Zap className="text-emerald-600" />
    },
    {
      title: "Localization",
      desc: "Perfect accents and native slang for 45+ languages. Relatable voice everywhere.",
      icon: <Globe2 className="text-emerald-600" />
    },
    {
      title: "ROI Dashboards",
      desc: "Visualize every dollar saved and every lead earned in real-time.",
      icon: <BarChart4 className="text-emerald-600" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-8">
              Reliability is our <br />
              <span className="text-emerald-600">North Star.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {differentiators.map((d, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    {d.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-950">{d.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-slate-950 rounded-[3rem] p-8 md:p-12 shadow-2xl relative text-white">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Relatable Performance.</h3>
                <p className="text-slate-400">Join elite brands that have moved from "Chatbots" to "Aura Agents."</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 bg-slate-900 rounded-2xl border border-slate-800">
                    <span className="text-lg font-medium text-slate-400">{stat.label}</span>
                    <span className="text-4xl font-black text-emerald-400">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-emerald-500/20">
                <p className="italic mb-2 text-emerald-50">"AuraVoice AI didn't just replace our call center; it transformed our customer experience."</p>
                <p className="font-bold">— Sarah Chen, CTO @ Global Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
