import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { Heart, User, Star, Baby } from 'lucide-react';

const iconMap = {
  Heart: Heart,
  User: User,
  Star: Star,
  Baby: Baby
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative p-10 bg-surface border border-border overflow-hidden hover:border-gold/50 transition-colors"
    >
      <div className="relative z-10">
        <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
          <Icon size={40} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-accent text-luxury-primary mb-4 uppercase tracking-wider">{service.title}</h3>
        <p className="text-gold-accent text-sm font-body italic mb-6">{service.tagline}</p>
        <p className="text-luxury-primary/70 text-sm mb-8 leading-relaxed">{service.description}</p>
        
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="text-xs text-luxury-primary/60 flex items-center">
              <span className="w-1.5 h-px bg-gold mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover background fill */}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-teal/20 group-hover:h-full transition-all duration-700 ease-in-out z-0" />
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-32 bg-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-accent text-gold-accent uppercase tracking-[0.5em] mb-4">Crafting Memories</h2>
          <p className="text-4xl md:text-6xl font-display text-luxury-primary">Services Offered</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
