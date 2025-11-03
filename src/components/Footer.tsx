import { Mail, Phone, MapPin, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section - Full width on mobile */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src="/logo-icon-light.png" 
              alt="Advocen Logo" 
              className="h-12 w-12"
            />
            <div>
              <div className="text-xl font-bold">Advocen Initiatives</div>
              <div className="text-[10px] text-accent">Shaping Policy. Empowering Lives.</div>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            A research and advocacy organisation advancing evidence-based policy for a just, healthy and prosperous Uganda.
          </p>
        </div>

        {/* Grid for Quick Links, Contact, and Follow Us - 2 cols on mobile for first two items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Research Areas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Publications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-gold" />
                <span className="text-gray-300">Kamwokya I, Kampala, Uganda<br />P.O. Box 197800 Kampala</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <span className="text-gray-300">+256 752 363 939</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <div className="text-gray-300">
                  <a href="mailto:advoceninitiatives@gmail.com" className="hover:text-gold transition-colors">advoceninitiatives@gmail.com</a>
                  <br />
                  <a href="mailto:inquiries@advocen.org" className="hover:text-gold transition-colors">inquiries@advocen.org</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/advocen29313" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors" aria-label="Follow us on X (Twitter)">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/advocen-initiatives/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors" aria-label="Follow us on LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm bg-primary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="mt-2 w-full bg-gold text-primary px-4 py-2 text-sm font-semibold hover:bg-gold-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Advocen Initiatives. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
          </div>
          <div className="mt-4 text-xs">
            <p>Designed by <a href="https://tamiti.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Tamiti Tech Uganda</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
