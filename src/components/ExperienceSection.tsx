
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Card, CardContent } from './ui/card';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'Business Process Transformation – Germany',
      role: 'Business Process Transformation Consultant',
      period: 'Jan 2025 – Present',
      location: 'Germany',
      responsibilities: [
        'Led the transformation of ETO, CTO, and MTO processes into Teamcenter (Design to Part).',
        'Defined BOM structures including DBOM, EBOM, CBOM, MBOM, AS BUILT, and SBOM.',
        'Initiated the transition from Project Management to full Product Lifecycle Management (PLM).'
      ]
    },
    {
      company: 'PITERION GMBH',
      role: 'Senior PLM Consultant',
      period: 'Apr 2023 – Dec 2024',
      location: 'Germany',
      responsibilities: [
        'Migrated metadata and CAD files to Teamcenter for the Daimler SMARAGD project.',
        'Integrated ADAS components into E-BOM and supported Digital Twin architecture.',
        'Configured complex product structures including NX Flex Parts and variant configurations.'
      ]
    },
    {
      company: 'Micron Technology',
      role: 'PLM / ALM Manager',
      period: 'Sep 2020 – Mar 2023',
      location: 'Hyderabad, India',
      responsibilities: [
        'Transformed Tagetik Finance and P2P applications using Agile and cross-functional leadership.',
        'Managed cloud-based ETL analytics for Connected Vehicles data.',
        'Oversaw BOM management and system integrations across SCM, CRM, MES using Teamcenter.'
      ]
    },
    {
      company: 'Tech Mahindra',
      role: 'Project Manager',
      period: 'Apr 2019 – Sep 2020',
      location: 'Thiruvananthapuram, India',
      responsibilities: [
        'Configured BOM structures and integrated Java apps with Teamcenter and SAP for Ford.',
        'Mapped SCADA/PLC data to MES and supported MOM resource planning.',
        'Led ASPICE/CMMI-based Product-Driven Organization boot camps.'
      ]
    },
    {
      company: 'TekSystem',
      role: 'Senior Business Analyst',
      period: 'Sep 2016 – Apr 2019',
      location: 'Chennai, India',
      responsibilities: [
        'Managed the Supplier Connect app lifecycle and API integration with Teamcenter.',
        'Performed POCs in Oracle Agile PLM and configured OPCENTER systems.',
        'Led SCF implementation and provided L3 support for Siemens projects.'
      ]
    },
    {
      company: 'Future Focus InfoTech',
      role: 'Team Leader',
      period: 'Mar 2014 – Nov 2014',
      location: 'Bangalore, India',
      responsibilities: [
        'Implemented Manufacturing Process Planner including plant and process structures.',
        'Supported internal logistics through routing and sequencing.',
        'Deployed Electronic Work Instructions and schedule planners.'
      ]
    },
    {
      company: 'Geometric Ltd',
      role: 'Senior Engineer',
      period: 'Sep 2010 – Oct 2013',
      location: 'Chennai, India',
      responsibilities: [
        'Configured E-BOM to M-BOM and implemented Virtual Process Planning for Caterpillar.',
        'Managed a 16-member team and ODC reporting for Caterpillar.',
        'Structured Super BOM for multiple vehicle variants; integrated PLM with SAP SCM.'
      ]
    },
    {
      company: 'Delphi TVS',
      role: 'Engineer',
      period: 'Aug 2007 – Sep 2010',
      location: 'Chennai, India',
      responsibilities: [
        'Led NPI, NPD, and TPM initiatives, saving ₹2.5 Cr by optimizing tooling.',
        'Used Six Sigma, 7QC tools, and APQP in quality planning.',
        'Developed Super Dry Cut Tool for advanced gear cutting.'
      ]
    },
    {
      company: 'Mitsubishi Heavy Industries India',
      role: 'Assistant Engineer',
      period: 'Aug 2005 – Jul 2007',
      location: 'India',
      responsibilities: [
        'Designed custom gear cutting tools using AutoCAD and simulations.',
        'Created specialized tools like Hobs, Shapers, and Shaving Cutters.',
        'Supported Production Planning with advanced tooling innovations.'
      ]
    }
  ];
  

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            Professional Experience
          </h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line - visible on all screens */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
              <ScrollReveal delay={index * 150}>
                <div className="flex flex-col md:flex-row items-start relative">
                  {/* Timeline dot - visible on all screens */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-accent bg-white z-10 mt-6"></div>
                  
                  {/* Content */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                  }`}>
                    <Card className="bg-gray-50 border-none shadow-sm">
                      <CardContent className="p-6">
                       
                        <h4 className="text-lg font-bold text-primary mb-2">
                          {exp.role}
                        </h4>
                        <p className="text-gray-500 mb-4">
                          {exp.period} • {exp.location}
                        </p>
                        <ul className={`text-gray-600 space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-start`}>
                              {(index % 2 !== 0) && (
                                <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0 md:hidden"></span>
                              )}
                              <span>{resp}</span>
                              {index % 2 === 0 && (
                                <span className="hidden md:inline-block w-1.5 h-1.5 bg-accent rounded-full ml-2 mt-2 flex-shrink-0"></span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
