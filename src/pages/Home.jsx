import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/layout/PageTransition';
import HeroSection from '../components/sections/HeroSection';
import CategoryGrid from '../components/sections/CategoryGrid';
import ServicesCards from '../components/sections/ServicesCards';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Helmet>
        <title>Robin B R | Wedding & Child Photographer in Kerala</title>
        <meta name="description" content="Robin B R is Kerala's finest wedding, child, and portrait photographer. Serving Calicut, Kochi, Thrissur and all of Kerala. Book your session today." />
      </Helmet>
      <main className="bg-luxury-bg">
        <HeroSection />
        {/* About Section */}
        <section id="about" className="py-32 bg-luxury-bg">
          <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl shadow-black/10 border border-black/5"
            >
              <img 
                src="/assets/images/artist/robin_br_portrait.png" 
                alt="Robin B R - Photographer" 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100 font-display"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-accent text-sm uppercase tracking-[0.5em] font-semibold mb-6 block">The Artist</span>
              <h2 className="text-4xl md:text-6xl font-display leading-[1.1] mb-8">Capturing the <br /> <span className="italic font-light text-luxury-primary/40">Unspoken Poetry</span></h2>
              <p className="text-luxury-primary/60 text-lg leading-relaxed mb-10 font-body">
                With a decade of experience in visual storytelling, I focus on the authentic, the raw, and the deeply emotional. My mission is to preserve your heritage through a lens of timeless elegance.
              </p>
              <Link to="/about" className="text-[11px] uppercase tracking-[0.4em] font-semibold border-b border-gold-accent pb-2 hover:text-gold-accent transition-colors">Discover My Story</Link>
            </motion.div>
          </div>
        </section>

        <CategoryGrid />
        <ServicesCards />
        
        <TestimonialsSection />

        {/* Final CTA Section */}
        <section className="py-48 bg-luxury-bg text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <h2 className="text-[8rem] md:text-[20rem] font-display select-none whitespace-nowrap">ROBIN</h2>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-display text-luxury-primary mb-16 leading-tight">
                Ready to tell <br /> <span className="italic font-light text-gold-accent">your story?</span>
              </h2>
              <Link 
                to="/contact" 
                className="inline-block bg-luxury-primary text-white text-[12px] uppercase tracking-[0.4em] font-semibold px-12 py-6 hover:bg-gold transition-colors duration-500"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;
