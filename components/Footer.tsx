
import React from 'react';
import { Twitter, Linkedin, Mail, MapPin, Phone, Mic } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-900 pb-16 mb-10">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Mic className="text-white" size={16} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Aura<span className="text-emerald-400">Voice</span>
            </span>
          </div>
          <p className="leading-relaxed">
            Pioneering the next era of sentient voice automation. Human emotion at machine scale.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Capabilities</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">AuraSync Integration</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Neural Cloning</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sentiment Analytics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Vault</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Verticals</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Enterprise Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Inbound Sales</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Healthcare Ops</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Finance & Legal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><Mail size={18} className="text-emerald-400" /> growth@auravoice.ai</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-emerald-400" /> +1 (555) 700-0199</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-emerald-400" /> Austin, TX</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <p>© 2024 AuraVoice AI. Built for the future of conversation.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Security SLA</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
