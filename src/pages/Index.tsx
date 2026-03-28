import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import ScrollProgress from '@/components/ScrollProgress';
import CursorGlow from '@/components/CursorGlow';
import Scene from '@/components/canvas/Scene';
import TechBackground from '@/components/TechBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <TechBackground />

      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>

      <Popup />
    </div>
  );
};

export default Index;
