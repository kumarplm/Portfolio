
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Support', href: '#support' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold font-poppins mb-4 md:mb-0">
            KUMARESAN
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm text-white/70">
          <p>© {currentYear} Kumaresan Ramasamy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
