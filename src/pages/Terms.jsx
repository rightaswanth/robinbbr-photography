import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';

const Terms = () => {
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
              Terms & <span className="italic font-light">Conditions</span>
            </h1>
            
            <div className="space-y-12 text-luxury-primary/70 text-lg leading-relaxed font-body">
              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">Booking & Deposits</h2>
                <p>
                  A non-refundable deposit is required to secure your booking date. The remaining balance is due on or before the day of the photoshoot/event, as specified in your individual contract.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">Cancellations & Rescheduling</h2>
                <p>
                  Cancellations must be made at least 30 days prior to the event date. Rescheduling is subject to availability and may incur additional fees if requested within 14 days of the scheduled date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">Professional Standards</h2>
                <p>
                  We pride ourselves on maintaining the highest professional standards. We will deliver the final edited images within the timeframe specified in your contract, usually 4-6 weeks for weddings and 2 weeks for portrait sessions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-luxury-primary mb-6 italic">Client Responsibility</h2>
                <p>
                  The client is responsible for obtaining any necessary permits for locations. We are not responsible for delays caused by weather, third-party vendors, or late arrivals.
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

export default Terms;
