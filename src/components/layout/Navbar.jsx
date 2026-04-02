import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Gallery', path: '/portfolio' },
  ];

  const isInternalPage = location.pathname !== '/';
  const isNavbarDark = isScrolled || isInternalPage;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'py-4 backdrop-blur-md bg-white/80 border-b border-black/5' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group overflow-hidden">
          <img 
            src="/assets/images/logo/logo.png" 
            alt="Robin B R Photography" 
            className={`transition-all duration-700 filter opacity-90 group-hover:opacity-100 ${
              isNavbarDark ? 'brightness-0' : 'brightness-0 invert'
            } ${
              isScrolled ? 'w-24 md:w-28' : 'w-32 md:w-40'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-[11px] uppercase tracking-[0.3em] font-medium transition-all duration-500 hover:text-gold-accent ${
                isNavbarDark ? 'text-luxury-primary' : 'text-white'
              } ${location.pathname === link.path ? 'text-gold-accent' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`text-[11px] uppercase tracking-[0.3em] font-semibold px-8 py-3 transition-all duration-500 border ${
              isNavbarDark 
                ? 'border-black/10 text-luxury-primary hover:bg-black hover:text-white' 
                : 'border-white/30 text-white hover:bg-white hover:text-luxury-primary'
            }`}
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors duration-500 ${
            isNavbarDark ? 'text-luxury-primary' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-[100dvh] bg-luxury-primary z-[100] flex flex-col items-center justify-center space-y-16 md:hidden"
          >
            <button 
              className="absolute top-10 right-10 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-4xl font-display italic text-white hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="inline-block bg-[#C5A021] text-black px-12 py-5 rounded-full text-sm uppercase tracking-[0.4em] font-bold shadow-2xl hover:bg-white transition-all transform active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
