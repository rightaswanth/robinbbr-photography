import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';

const Privacy = () => {
  return (
    <PageTransition>
      <main className="pt-80 pb-32 bg-luxury-bg min-h-screen">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-accent text-sm uppercase tracking-[0.5em] mb-8 block font-medium text-center">Legal</span>
            <h1 className="text-5xl md:text-7xl font-display leading-tight text-luxury-primary mb-20 text-center">
              Privacy <span className="italic font-light">Policy</span>
            </h1>
            
            <div className="space-y-12 text-luxury-primary/70 text-lg leading-relaxed font-body">
              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us through our inquiry forms, including your name, email address, phone number, and any details about your event or project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">How We Use Your Information</h2>
                <p>
                  The information we collect is used solely to respond to your inquiries, provide our photography services, and maintain communication during our professional engagement. We do not sell or share your personal data with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">Image Rights</h2>
                <p>
                  Any images captured as part of our photography services are subject to a separate agreement regarding copyright and usage rights, which will be provided to you upon booking.
                </p>
              </section>

              <section className="pt-10 border-t border-black/5">
                <p className="text-sm font-medium text-luxury-primary/40 text-center">
                  Last Updated: April 2026
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Privacy;
