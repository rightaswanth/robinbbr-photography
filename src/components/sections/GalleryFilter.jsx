import React from 'react';

const GalleryFilter = ({ activeFilter, setFilter }) => {
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Weddings', value: 'weddings' },
    { label: 'Portraits', value: 'portraits' },
    { label: 'Maternity', value: 'maternity' },
    { label: 'Baby Shoots', value: 'baby' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setFilter(cat.value)}
          className={`px-8 py-2 font-accent text-xs uppercase tracking-widest transition-all duration-300 border ${
            activeFilter === cat.value
              ? 'bg-gold text-white border-gold'
              : 'border-luxury-primary/10 text-luxury-primary/40 hover:border-gold/50'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
