import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { 
    id: 'weddings', 
    title: 'Weddings', 
    image: '/assets/images/categories/wedding.jpg',
    description: 'Timeless moments that last forever.'
  },
  { 
    id: 'portraits', 
    title: 'Portraits', 
    image: '/assets/images/categories/portrait.jpg',
    description: 'Capturing the soul behind the lens.'
  },
  { 
    id: 'baby', 
    title: 'Baby', 
    image: '/assets/images/categories/baby.jpg',
    description: 'Pure innocence and fleeting joy.'
  },
  { 
    id: 'maternity', 
    title: 'Maternity', 
    image: '/assets/images/categories/maternity.jpg',
    description: 'The beautiful journey of life.'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-32 bg-luxury-bg">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <span className="text-gold-accent text-sm uppercase tracking-[0.5em] font-medium mb-6 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-display leading-[1.1]">Collections of <br /><span className="italic font-light">Refined Artistry</span></h2>
          </div>
          <Link to="/portfolio" className="text-[11px] uppercase tracking-[0.4em] text-luxury-primary/40 hover:text-gold-accent transition-colors mt-8 md:mt-0 pb-2 border-b border-luxury-primary/10">View Full Gallery</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden cursor-pointer rounded-3xl border border-black/5"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${cat.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-primary/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-2xl font-display text-white mb-2">{cat.title}</h3>
                <p className="text-white/60 text-sm mb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">{cat.description}</p>
                <div className="w-12 h-[1px] bg-gold-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
