
import React from 'react';
import ScrollReveal from './ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-pink-200 -z-10"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-lg md:text-xl font-medium text-gray-600 mb-4">
              Hello, I am
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
              KUMARESAN RAMASAMY
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <h2 className="text-xl md:text-2xl font-semibold text-sky-500 uppercase tracking-wider mb-8">
              PLM BUSINESS PROCESS TRANSFORMATION | SPECIALIST
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#expertise"
                className="px-8 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-colors"
              >
                My Expertise
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
