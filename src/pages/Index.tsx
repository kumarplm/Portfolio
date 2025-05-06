
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import StatsSection from '@/components/StatsSection';
import ExperienceSection from '@/components/ExperienceSection';
import SupportSection from '@/components/SupportSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Kumaresan Ramasamy | PLM Specialist';
  }, []);

  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <StatsSection />
      <ExperienceSection />
      <SupportSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};  

export default Index;
