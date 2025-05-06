
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Code, Users, Briefcase } from 'lucide-react';

const SupportSection: React.FC = () => {
  const supportCards = [
    {
      icon: Code,
      title: 'Sub Contract',
      description:
        'Providing expert sub-contracting services across Mechanical, Electrical, PCB, Civil, PLM, and IT domains including Java, Python, and Cybersecurity.',
      buttonText: 'Contact Me',
    },
    {
      icon: Users,
      title: 'Outsourcing',
      description:
        'Connecting top talent from India to global firms with comprehensive onboarding support and visa assistance.',
      buttonText: 'Contact Me',
    },
    {
      icon: Briefcase,
      title: 'Consultation',
      description:
        'Offering strategic tool selection advice with detailed pros and cons analysis based on specific business requirements.',
      buttonText: 'Contact Me',
    },
  ];

  return (
    <section id="support" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            How Can I also support ?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 200}>
              <div className="bg-white rounded-lg shadow-sm p-8 text-center h-full flex flex-col">
                <div className="mx-auto bg-primary/5 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <card.icon className="text-accent" size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{card.description}</p>
                
                <a
                  href="#contact"
                  className="mt-auto inline-block px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors mx-auto"
                >
                  {card.buttonText}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
