// Added React import to fix namespace errors for React.ReactNode
import React from 'react';

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  stats?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}