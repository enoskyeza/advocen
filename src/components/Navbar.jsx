import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Research Areas', href: '#research', id: 'research' },
    { name: 'Publications', href: '#publications', id: 'publications' },
    { name: 'Insights', href: '#insights', id: 'insights' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'publications', 'insights'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="/logo-icon-light.png" 
              alt="Advocen Logo" 
              className="h-12 w-12"
            />
            <div>
              <div className="text-2xl font-bold">Advocen Initiatives</div>
              <div className="text-xs text-accent">Shaping Policy. Empowering Lives.</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-gold'
                    : 'text-gray-200 hover:text-gold'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 bg-gold text-primary text-sm font-semibold hover:bg-gold-600 transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:text-gold transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-gold'
                    : 'text-gray-200 hover:text-gold'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 bg-gold text-primary text-base font-semibold hover:bg-gold-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
