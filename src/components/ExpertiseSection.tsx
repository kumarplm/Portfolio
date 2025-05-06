
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Code, Briefcase, Users } from 'lucide-react';

const ExpertiseSection: React.FC = () => {
  const expertiseAreas = [
    {
      icon: Code,
      title: 'PLM CONFIGURATION',
      description:
        'Expertise in configuring and optimizing PLM systems including requirements, materials, design, BOM, documents, workflows, changes, service, and integration with other enterprise systems.',
      skills: [
        'Requirements Management',
        'Materials Management',
        'Design & Engineering',
        'BOM Management',
        'Document Management',
        'Workflow Configuration',
        'Change Management',
        'Service Integration',
      ],
    },
    {
      icon: Briefcase,
      title: 'BUSINESS PROCESS',
      description:
        'End-to-end business process optimization across product portfolio, CRM–PLM–CAD–ERP–MES–SCM integration, and time to market optimization strategies.',
      skills: [
        'Product Portfolio Management',
        'Enterprise System Integration',
        'Time to Market Optimization',
        'Process Standardization',
        'Cross-Functional Collaboration',
        'Data Governance',
        'Process Analysis & Design',
        'Change Management',
      ],
    },
    {
      icon: Users,
      title: 'PROJECT MANAGEMENT',
      description:
        'Certified project management professional with expertise in PMP, Agile, SAFe methodologies, and comprehensive risk & cost management and scrum practices.',
      skills: [
        'PMP Certification',
        'Agile Methodology',
        'SAFe Framework',
        'Risk Management',
        'Cost Management',
        'Scrum Practices',
        'Stakeholder Management',
        'Resource Planning',
      ],
    },
  ];

  return (
    <section id="expertise" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            My Expertise
          </h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 200}>
              <div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
                <div className="bg-primary/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <area.icon className="text-accent" size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{area.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-6">
                    {area.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
