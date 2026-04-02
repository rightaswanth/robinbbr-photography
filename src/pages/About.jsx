import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/layout/PageTransition';
import { Camera, Award, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>About Robin B R | Kerala Wedding Photographer</title>
        <meta name="description" content="Discover the story of Robin B R, Kerala's premier wedding and portrait photographer with over a decade of experience in visual storytelling." />
      </Helmet>
      <main className="pt-80 pb-32 bg-luxury-bg overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <span className="text-gold-accent text-sm uppercase tracking-[0.5em] mb-8 block font-medium">The Artist</span>
              <h1 className="text-6xl md:text-8xl font-display leading-[0.9] text-luxury-primary mb-12">
                Robin <span className="italic font-light">B R</span>
              </h1>
              <div className="space-y-8 text-lg text-luxury-primary/70 leading-relaxed font-body max-w-xl">
                <p>
                  With a deep-rooted passion for visual storytelling and over a decade of experience, I've dedicated my life to capturing the most intimate and profound moments of human connection.
                </p>
                <p>
                  Based in the heart of Kerala, my style is a blend of cinematic elegance and raw authenticity. I believe that every frame should tell a story, preserving heritage and emotion for generations to come.
                </p>
                <p>
                  My approach is unobtrusive yet intentional, allowing for natural moments to unfold while ensuring every detail is captured with technical precision and artistic flair.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl shadow-black/10 border border-black/5"
            >
              <img 
                src="/assets/images/artist/robin_br_portrait.png" 
                alt="Robin B R photographing in Kerala" 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Camera size={32} />, title: "Precision", desc: "Using state-of-the-art equipment to ensure unrivaled clarity." },
              { icon: <Award size={32} />, title: "Excellence", desc: "Recognized for artistic vision and technical mastery." },
              { icon: <Heart size={32} />, title: "Emotion", desc: "Focusing on the soul of every moment we capture." },
              { icon: <Shield size={32} />, title: "Trust", desc: "Your memories are safe in our professional hands." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white/40 border border-white/60 backdrop-blur-xl rounded-3xl"
              >
                <div className="text-gold-accent mb-6">{feature.icon}</div>
                <h3 className="text-xl font-display mb-4">{feature.title}</h3>
                <p className="text-luxury-primary/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default About;
