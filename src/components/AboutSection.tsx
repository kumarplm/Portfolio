
import React from 'react';
import { Briefcase, Mail, Phone, Calendar, Home } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import kumaresanImage from '../img/kumaresan.jpeg';

const AboutSection: React.FC = () => {
  const personalInfo = [

    {
      icon: Mail,
      label: 'Email',
      value: 'kumaresan.plm@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+49-174-272-3667',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91-7200566721',
    },
    {
      icon: Calendar,
      label: 'Education',
      value: 'B.E. Mechanical Engineering, MBA in operations, Phd PLM in progress',
    },
    {
      icon: Home,
      label: 'Address',
      value: 'Nürnberg, Germany',
    },
  ];

  const socialLinks = [
    { name: 'Twitter', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'LinkedIn', url: '#' },

  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            Who am I?
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="prose max-w-none ">
                <p className="text-lg mb-4">
                  I am a seasoned PLM Business Process Transformation Specialist with extensive experience in analyzing As-Is to To-Be processes within 3 months for various production types including ETO, CTO, MTO, and MTS.
                </p>
                <p className="text-lg mb-4">
                  My expertise includes comprehensive documentation of business scenarios, use cases, taxonomy, tools, and data models. I excel at bridging the gap between business requirements and technical implementation, ensuring seamless integration across enterprise systems.
                </p>
                <p className="text-lg mb-4">
                  With over 18 years of experience in PLM and IT integration, I have successfully delivered transformation projects across multiple industries, focusing on optimizing processes, reducing time to market, and enhancing cross-functional collaboration.
                </p>

                <p className='text-lg mb-4'>
                  I Can also work with my external Support for Customization of fools, Coding, Interface Solutions, Integration, testing and so on, I will take responsible for completion of above Work with help of her Recept Supporting externals.
                </p>
              </div>
            </ScrollReveal>

            {/* <ScrollReveal delay={200}>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      aria-label={link.name}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal> */}
          </div>

          <div className="flex w-full flex-col items-cente">
            <ScrollReveal delay={400}>
              <Avatar className="w-64 ml-20 h-64 mb-6 shadow-lg">
                <AvatarImage
                  src={kumaresanImage}
                  alt="Kumaresan Ramasamy Profile Picture"
                />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm w-full">
                <h3 className="text-xl font-semibold mb-6 text-center">Personal Info</h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-0.5 mr-4 text-accent">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700">{info.label}</h4>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
