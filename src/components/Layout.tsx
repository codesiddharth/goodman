import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, HeartPulse, MessageCircle, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Ground Ambulance', path: '/ground-ambulance' },
        { name: 'Air Ambulance', path: '/air-ambulance' },
        { name: 'Standby Medical', path: '/standby-medical' },
        { name: 'EMS Training', path: '/ems-training' },
        { name: 'Goodmans Privé', path: '/goodmans_prive_web.html' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        <a 
          href="https://wa.me/919810012126" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a 
          href="tel:+919810012126" 
          className="bg-primary-600 text-white p-4 rounded-full shadow-xl hover:bg-primary-700 transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary-300" />
              <span>+91 9810012126 (24/7 Emergency)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary-300" />
              <span>emsindia@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary-300" />
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      > 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
            <img 
              src="/logoheader.jpg" 
              alt="Goodmans Rescue Logo"
              className="h-12 md:h-14 w-auto object-contain"
              />
</Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="relative group">
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors hover:text-primary-600 flex items-center ${
                        location.pathname.startsWith(link.path) ? 'text-primary-600' : 'text-gray-600'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                      <div className="py-2">
                        {link.dropdown.map(sub => (
                          sub.path.endsWith('.html') ? (
                            <a
                              key={sub.name}
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                            >
                              {sub.name}
                            </a>
                          ) : (
                            <Link key={sub.name} to={sub.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                              {sub.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                      location.pathname === link.path ? 'text-primary-600' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
              >
                Book Ambulance
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-primary-600"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t mt-4"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      className={`block px-3 py-3 rounded-md text-base font-medium ${
                        location.pathname === link.path
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                      }`}
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 space-y-1 mt-1 mb-2 border-l-2 border-gray-100 ml-3">
                        {link.dropdown.map(sub => (
                          sub.path.endsWith('.html') ? (
                            <a
                              key={sub.name}
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </a>
                          ) : (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700"
                  >
                    Book Ambulance Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-primary-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <HeartPulse className="w-8 h-8 text-primary-400" />
                <span className="font-heading font-bold text-2xl">Goodmans Rescue</span>
              </Link>
              <p className="text-gray-400 mb-6">
                30+ years of excellence in emergency medical assistance and air ambulance services. Doctor-led, globally trusted.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons Placeholders */}
                <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center hover:bg-primary-800 cursor-pointer transition-colors">
                  <span className="text-primary-400 font-bold">in</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center hover:bg-primary-800 cursor-pointer transition-colors">
                  <span className="text-primary-400 font-bold">tw</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center hover:bg-primary-800 cursor-pointer transition-colors">
                  <span className="text-primary-400 font-bold">fb</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navLinks.slice(1, 5).map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-4 text-gray-400">
                <li>Ground Ambulance</li>
                <li>Air Ambulance</li>
                <li>Standby Medical Services</li>
                <li>EMS Training</li>
                <li>Home Care / COVID Services</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                  <span>New Delhi, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                  <span>+91 9810012126</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                  <span>+91 01145531665</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                  <span>emsindia@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Goodmans Rescue. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white">Privacy Policy</Link>
              <Link to="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
