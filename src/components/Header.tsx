
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: isHomePage ? '#home' : '/', isRoute: !isHomePage },
    { name: 'ABOUT', href: isHomePage ? '#about' : '/#about', isRoute: !isHomePage },
    { name: 'EXPERTISE', href: isHomePage ? '#expertise' : '/#expertise', isRoute: !isHomePage },
    { name: 'EXPERIENCE', href: isHomePage ? '#experience' : '/#experience', isRoute: !isHomePage },
    { name: 'SUPPORT', href: isHomePage ? '#support' : '/#support', isRoute: !isHomePage },
    { name: 'CONTACT', href: isHomePage ? '#contact' : '/#contact', isRoute: !isHomePage },
    { name: 'PORTFOLIO', href: '/profile', isRoute: true },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-primary font-poppins font-semibold text-xl">
          Freelance | PLM | MES | ERP CONSULTANT
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className="font-poppins text-sm font-medium hover-link"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="font-poppins text-sm font-medium hover-link"
              >
                {item.name}
              </a>
            )
          ))}

          <a
            href="/resume.pdf"
            download
            className="font-poppins text-sm font-medium px-4 py-2 bg-accent text-black shadow-md rounded-md hover:bg-accent/80 transition-colors"
            onClick={() => alert('The resume has been downloaded!')}
          >
            RESUME
          </a>

        </nav>

        {/* Tablet Navigation - Compact menu */}
        <nav className="hidden md:flex lg:hidden items-center">
          <button
            className="text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile and Tablet Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-poppins text-sm font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-poppins text-sm font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="/resume.pdf"
                download
                className="font-poppins text-sm flex justify-center font-medium px-4 py-2 bg-accent text-black shadow-md rounded-md hover:bg-accent/80 transition-colors"
                onClick={() => alert('The resume has been downloaded!')}
              >
                RESUME
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
