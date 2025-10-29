import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', to: '/', id: 'home' },
    { name: 'About Us', to: '/about-us', id: 'about' },
    { name: 'Research Areas', to: '#', id: 'research' },
    { name: 'Publications', to: '#', id: 'publications' },
    { name: 'Insights', to: '#', id: 'insights' },
  ];


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
            {navItems.map((item) => {
              const isRoute = item.to !== '#';
              const isActive = isRoute && location.pathname === item.to;
              const baseClass = 'px-4 py-2 text-sm font-medium transition-colors ';
              const activeClass = isActive ? 'text-gold' : 'text-gray-200 hover:text-gold';
              if (isRoute) {
                return (
                  <Link key={item.name} to={item.to} className={baseClass + activeClass}>
                    {item.name}
                  </Link>
                );
              }
              return (
                <a key={item.name} href="#" className={baseClass + 'text-gray-200 hover:text-gold'}>
                  {item.name}
                </a>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-gold text-primary text-sm font-semibold hover:bg-gold-600 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
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
            {navItems.map((item) => {
              const isRoute = item.to !== '#';
              const isActive = isRoute && location.pathname === item.to;
              const baseClass = 'block px-3 py-2 text-base font-medium transition-colors ';
              const activeClass = isActive ? 'text-gold' : 'text-gray-200 hover:text-gold';
              if (isRoute) {
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={baseClass + activeClass}
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <a
                  key={item.name}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className={baseClass + 'text-gray-200 hover:text-gold'}
                >
                  {item.name}
                </a>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 bg-gold text-primary text-base font-semibold hover:bg-gold-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
