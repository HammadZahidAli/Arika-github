
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative">
      <Navbar onOpenContact={toggleModal} />
      
      <main>
        <Hero onOpenContact={toggleModal} />
        <ProblemSolution />
        <Services />
        <WhyChooseUs />
        <Process />
        <SocialProof />
        <FAQ />
        <ContactSection />
        <CTA onOpenContact={toggleModal} />
      </main>

      <Footer />

      {isModalOpen && <ContactModal onClose={toggleModal} />}
      
      {/* Decorative background blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="blob absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-200/40 rounded-full animate-pulse"></div>
        <div className="blob absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-purple-200/30 rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
