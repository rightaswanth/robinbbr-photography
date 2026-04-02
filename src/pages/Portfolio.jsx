import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/layout/PageTransition';
import ImageReveal from '../components/ui/ImageReveal';
import { galleryItems } from '../data/gallery';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (filter === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === filter);
  }, [filter]);

  return (
    <PageTransition>
      <Helmet>
        <title>Gallery | Robin B R Photography Kerala</title>
        <meta name="description" content="Browse our curated portfolio of wedding, portrait, baby, and maternity photography by Robin B R, captured across Kerala." />
      </Helmet>
      <main className="pt-72 pb-32 bg-luxury-bg min-h-screen">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mb-20">
            <span className="text-gold-accent text-sm uppercase tracking-[0.5em] font-medium mb-6 block">Our Gallery</span>
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9]">A Legacy <br /> <span className="italic font-light">In Every Frame</span></h1>
          </div>

          <div className="mb-20">
            <div className="flex flex-wrap gap-12 border-b border-luxury-primary/5 pb-8">
              {['all', 'weddings', 'portraits', 'baby', 'maternity'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs uppercase tracking-[0.4em] transition-all duration-500 hover:text-gold-accent ${
                    filter === cat ? 'text-gold-accent' : 'text-luxury-primary/40'
                  }`}
                >
                  {cat === 'all' ? 'Everything' : cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index % 3 * 0.1 }}
                  className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-3xl border border-black/5 shadow-xl shadow-black/[0.02]"
                  onClick={() => setSelectedImage(item.thumbnail)}
                  whileHover={{ y: -10 }}
                >
                  <ImageReveal 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full grayscale-0"
                  />
                  <div className="absolute inset-0 bg-luxury-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent mb-3 font-semibold">{item.category}</span>
                    <h3 className="text-2xl font-display text-white mb-2">{item.title}</h3>
                    <div className="w-12 h-px bg-gold-accent mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-100" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center border-t border-luxury-primary/5 pt-32"
          >
            <span className="text-gold-accent text-sm uppercase tracking-[0.5em] font-medium mb-8 block">Social Gallery</span>
            <h2 className="text-4xl md:text-6xl font-display mb-12">Looking for <br /> <span className="italic font-light">more inspiration?</span></h2>
            <p className="text-luxury-primary/60 text-lg font-body mb-12 max-w-xl mx-auto leading-relaxed">
              We update our Instagram daily with recent stories, behind-the-scenes glimpses, and new masterpieces.
            </p>
            <a 
              href="https://www.instagram.com/robinbr_photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 md:space-x-6 bg-white border border-black/10 px-6 md:px-12 py-5 md:py-6 hover:bg-luxury-primary hover:text-white transition-all duration-500 rounded-full group shadow-xl shadow-black/[0.02]"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold">Explore @robinbr_photography</span>
            </a>
          </motion.div>
        </div>

        {/* Simple Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-luxury-primary/95 flex items-center justify-center p-8 md:p-20"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-[10px] uppercase tracking-[0.4em]">Close</span>
              </button>
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage} 
                alt="Selected" 
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
};

export default Portfolio;
