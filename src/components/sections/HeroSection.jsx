import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { heroImages, heroTitles } from '../../data/gallery';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-primary">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-white/60 text-[10px] uppercase tracking-[0.6em] mb-6 font-medium">
                {heroTitles[currentImageIndex].subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-display text-white leading-[0.9] mb-10">
                {heroTitles[currentImageIndex].top} <br />
                <span className="italic font-light font-serif text-gold ml-12 md:ml-16">
                  {heroTitles[currentImageIndex].bottom}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 mt-2"
          >
            <Link 
              to="/portfolio" 
              className="text-[11px] uppercase tracking-[0.4em] text-white border-b border-white/30 pb-2 hover:border-gold transition-colors duration-500"
            >
              The Gallery
            </Link>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <Link 
              to="/contact" 
              className="text-[11px] uppercase tracking-[0.4em] text-gold border-b border-gold/30 pb-2 hover:border-gold transition-colors duration-500"
            >
              Book Your Session
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -track-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
