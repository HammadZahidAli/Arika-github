
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Testimonial } from '../types';

const data = [
  { name: 'M1', calls: 120 },
  { name: 'M2', calls: 890 },
  { name: 'M3', calls: 3400 },
  { name: 'M4', calls: 12500 },
  { name: 'M5', calls: 28000 },
  { name: 'M6', calls: 64000 },
];

const testimonials: Testimonial[] = [
  {
    name: "Mark Stevens",
    role: "Director of Ops",
    company: "SolarDirect",
    content: "The AuraVoice agent booked more meetings in its first day than our entire SDR team did in a week. Our CPA dropped by 40%.",
    image: "https://picsum.photos/id/105/100/100",
    stats: "+312% ROI"
  },
  {
    name: "Jessica Wu",
    role: "CEO",
    company: "SwiftLogistics",
    content: "We handled a sudden viral surge without adding a single support hire. AuraVoice is our most reliable 'employee'.",
    image: "https://picsum.photos/id/106/100/100",
    stats: "100% Coverage"
  }
];

const SocialProof: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-8 leading-tight">
              Evidence of <br />
              <span className="text-emerald-600">Pure Efficiency.</span>
            </h2>
            <div className="space-y-12">
              {testimonials.map((t, i) => (
                <div key={i} className="flex gap-6 bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                  <div>
                    <div className="text-emerald-600 font-bold mb-1">{t.stats}</div>
                    <p className="text-slate-700 italic mb-4 leading-relaxed">"{t.content}"</p>
                    <div>
                      <span className="font-bold text-slate-950">{t.name}</span>
                      <span className="text-slate-400 text-sm block">{t.role}, {t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 rounded-[3rem] p-8 md:p-12 shadow-2xl">
            <h3 className="text-white text-2xl font-bold mb-8">Call Capacity Growth</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="calls" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorCalls)" 
                    strokeWidth={4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 text-center text-slate-400 font-medium">
              Daily Conversations Managed by AuraVoice
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
