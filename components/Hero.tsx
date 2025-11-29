import React from 'react';
import { PageView } from '../types';

interface HeroProps {
  onOrderClick: () => void;
  onMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onMenuClick }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=2070&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent sm:from-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bakery-50 leading-tight drop-shadow-md">
            Life is short.<br/>
            <span className="italic text-fern-200">Eat the good cake.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-100 font-light max-w-lg leading-relaxed drop-shadow-sm">
            Small-batch baking, local ingredients, and sweet memories made daily right here in Riverdale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onOrderClick}
              className="px-8 py-4 bg-fern-700 text-bakery-50 uppercase tracking-widest font-bold text-sm hover:bg-fern-600 transition-all border border-transparent shadow-lg"
            >
              Order Your Cake &rarr;
            </button>
            <button 
              onClick={onMenuClick}
              className="px-8 py-4 bg-transparent border border-bakery-50 text-bakery-50 uppercase tracking-widest font-bold text-sm hover:bg-bakery-50 hover:text-stone-900 transition-all backdrop-blur-sm"
            >
              View Today's Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};