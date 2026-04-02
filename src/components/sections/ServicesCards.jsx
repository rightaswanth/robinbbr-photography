import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Baby, Star } from 'lucide-react';

const services = [
  {
    title: "Wedding Stories",
    icon: <Heart strokeWidth={1} />,
    description: "Cinematic wedding coverage that captures the soul and heritage of your union.",
    price: "Starting from ₹25,000"
  },
  {
    title: "Artistic Portraits",
    icon: <Camera strokeWidth={1} />,
    description: "Intimate and professional portraiture focused on character and lighting.",
    price: "Starting from ₹5,000"
  },
  {
    title: "Newborn Grace",
    icon: <Baby strokeWidth={1} />,
    description: "Delicate and safe newborn sessions to preserve those fleeting early days.",
    price: "Starting from ₹8,000"
  },
  {
    title: "Maternity Essence",
    icon: <Star strokeWidth={1} />,
    description: "Elegant maternity photography celebrating the radiant glow of motherhood.",
    price: "Starting from ₹6,000"
  }
];

const ServicesCards = () => {
  return (
    <section className="py-32 bg-beige/30">
      <div className="container mx-auto px-8 text-center mb-20">
        <span className="text-gold-accent text-sm uppercase tracking-[0.5em] font-semibold mb-6 block">Services</span>
        <h2 className="text-4xl md:text-6xl font-display">Bespoke <span className="italic font-light">Experiences</span></h2>
      </div>

      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-12 flex flex-col items-center text-center group hover:bg-luxury-primary transition-colors duration-700"
          >
            <div className="text-gold mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:text-gold">
              {React.cloneElement(service.icon, { size: 48 })}
            </div>
            <h3 className="text-xl font-display mb-6 group-hover:text-white transition-colors">{service.title}</h3>
            <p className="text-luxury-primary/60 text-sm leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
              {service.description}
            </p>
            <div className="w-12 h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-auto" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
