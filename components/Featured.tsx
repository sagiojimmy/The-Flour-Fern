import React from 'react';
import { FeaturedItem } from '../types';

const items: FeaturedItem[] = [
  {
    id: '1',
    title: 'Sourdough Loaves',
    description: 'Crusty, tangy, and perfect. Fermented for 48 hours.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=2070&auto=format&fit=crop',
    availability: 'Wednesdays Only!'
  },
  {
    id: '2',
    title: '"I\'m Sorry" Ganache Cake',
    description: 'Rich dark chocolate that forgives all mistakes.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Lemon Lavender Scones',
    description: 'Light, floral, and drizzled with honey glaze.',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=1887&auto=format&fit=crop',
  }
];

export const Featured: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-fern-600 font-bold tracking-widest uppercase text-sm">Fresh From The Oven</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mt-3">Daily Favorites</h2>
          <div className="w-24 h-1 bg-bakery-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-md shadow-sm aspect-[4/3] mb-4">
                 <img 
                   src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 {item.availability && (
                   <div className="absolute top-4 right-4 bg-fern-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg">
                     {item.availability}
                   </div>
                 )}
              </div>
              <h3 className="font-serif text-2xl text-stone-800 group-hover:text-fern-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 mt-2 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};