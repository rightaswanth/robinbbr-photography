import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    const interval = setInterval(() => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += 1;
        // Reset to start when reaching the duplicate set
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 3000); // Resume auto-scroll after 3s
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsPaused(true);
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Button scroll
  const scrollBy = (direction) => {
    setIsPaused(true);
    scrollRef.current.scrollBy({ left: direction * 480, behavior: 'smooth' });
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section className="py-32 bg-luxury-primary overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <span className="text-gold-accent text-sm uppercase tracking-[0.5em] font-semibold mb-6 block">Kind Words</span>
        <h2 className="text-4xl md:text-6xl font-display text-white">Refined <span className="italic font-light">Experiences</span></h2>
      </div>

      {/* Scrollable strip with drag + auto-scroll */}
      <div className="relative group">
        {/* Left/Right Arrows */}
        <button 
          onClick={() => scrollBy(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => scrollBy(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>

        <div 
          ref={scrollRef}
          className="flex space-x-8 px-6 pb-12 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
            <div 
              key={i} 
              className="w-[400px] md:w-[450px] shrink-0 p-12 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[2rem] group/card hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex mb-8">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className="text-gold-accent text-[10px] mr-1">★</span>
                ))}
              </div>
              <p className="text-white/80 font-body text-xl italic mb-10 leading-relaxed min-h-[120px]">
                "{item.quote}"
              </p>
              <div className="border-t border-white/10 pt-8">
                <p className="text-gold-accent font-display text-lg tracking-wide group-hover/card:text-gold transition-colors">{item.name}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2 font-medium">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="text-center mt-4">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.4em]">Drag to explore · Auto-scrolling</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
