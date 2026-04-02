import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-primary text-white py-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center border-b border-white/10 pb-20">
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm uppercase tracking-[0.4em] text-gold-accent font-semibold">Studio</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Capturing timeless stories in Kerala and beyond. Specializing in luxury wedding, portrait, and lifestyle photography.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/assets/images/logo/logo.png" 
              alt="Robin B R Photography" 
              className="w-32 brightness-0 invert opacity-80 mb-6"
            />
            <div className="flex space-x-6 mt-8">
              <a href="https://www.instagram.com/robinbr_photography/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="mailto:robeebr@gmail.com" className="hover:text-gold-accent transition-colors"><Mail size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="flex flex-col items-start text-left md:items-end space-y-6">
            <h3 className="text-sm uppercase tracking-[0.4em] text-gold-accent font-semibold md:text-right">Navigation</h3>
            <div className="flex flex-col space-y-3 items-start md:items-end text-sm text-white/60">
              <Link to="/portfolio" className="hover:text-white transition-colors">Gallery</Link>
              <Link to="/about" className="hover:text-white transition-colors">The Artist</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/30 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Robin B R. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
