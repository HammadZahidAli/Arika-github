
import React from 'react';
import { Clock, DollarSign, Ban, Users, CheckCircle, XCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    { text: "Predicting labor costs in scaling call centers", icon: <DollarSign className="text-red-400" /> },
    { text: "Revenue leaks from 10:1 unanswered call ratios", icon: <Clock className="text-red-400" /> },
    { text: "The 'Hiring Treadmill' - constant training overhead", icon: <Users className="text-red-400" /> },
    { text: "Disconnected data from manual call logging", icon: <Ban className="text-red-400" /> },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Automate the <span className="text-emerald-400">repetitive</span>. <br /> Elevate the <span className="text-teal-400">strategic</span>.</h2>
          <p className="text-slate-400 text-lg">Stop throwing more people at a process that can be mastered by AI. AuraVoice agents don't get tired, don't miss calls, and never stop improving.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <XCircle className="text-red-500" /> Current Roadblocks
            </h3>
            <ul className="space-y-6">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800/50">
                  <div className="mt-1">{p.icon}</div>
                  <span className="text-slate-300 font-medium">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-10 rounded-3xl relative overflow-hidden group shadow-2xl shadow-emerald-900/20">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle /> The AuraVoice Advantage
                </h3>
                <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
                  Our **Human-Sentient Engine** delivers sub-150ms latency. We capture intent, emotion, and nuance—ensuring your customers feel heard while your systems stay updated.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold">85%</div>
                    <div className="text-sm text-emerald-100">Lower Opex</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-emerald-100">Call Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
