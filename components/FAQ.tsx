
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Do Aura agents sound indistinguishable from humans?",
    answer: "Yes. We use neural prosody models that mimic human breathing patterns and emotional cadence, achieving a 99% 'Human-Like' rating in blind testing."
  },
  {
    question: "How does AuraVoice handle barge-ins?",
    answer: "Our ultra-low latency technology supports full-duplex conversation. If a user interrupts, the agent stops speaking immediately to listen and respond to the new context."
  },
  {
    question: "Is our customer data secure?",
    answer: "AuraVoice is built for enterprise security. We are SOC2 Type II and HIPAA compliant, providing full PII redaction and end-to-end encryption for every interaction."
  },
  {
    question: "Can we integrate with custom APIs?",
    answer: "Absolutely. Our platform is 'API-First.' You can link any internal database or CRM to feed real-time information to your agents during live calls."
  },
  {
    question: "What is the implementation timeline?",
    answer: "A standard deployment takes 5-7 business days. This includes flow engineering, voice testing, and integration with your communication stack."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-extrabold text-slate-950 text-center mb-16">Technical FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                {activeIndex === index ? <ChevronUp className="text-emerald-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {activeIndex === index && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
