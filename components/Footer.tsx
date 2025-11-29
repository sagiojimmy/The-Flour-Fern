import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock, Fish } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-bakery-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-wide text-fern-200 border-b border-stone-700 pb-2 inline-block">Visit Us</h3>
            <div className="flex items-start space-x-3 text-stone-300">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-fern-400" />
              <p>
                123 Main Street, Suite B<br/>
                Riverdale, NY 10471<br/>
                <span className="text-sm italic text-stone-500">(Look for the blue door!)</span>
              </p>
            </div>
            <div className="flex items-center space-x-3 text-stone-300">
              <Phone className="w-5 h-5 text-fern-400" />
              <p>(555) 123-4567</p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-wide text-fern-200 border-b border-stone-700 pb-2 inline-block">Hours</h3>
            <div className="flex items-start space-x-3 text-stone-300">
              <Clock className="w-5 h-5 mt-1 shrink-0 text-fern-400" />
              <ul className="space-y-1">
                <li className="flex justify-between w-40"><span>Tue - Fri:</span> <span>7am - 3pm</span></li>
                <li className="flex justify-between w-40"><span>Sat:</span> <span>8am - 1pm</span></li>
                <li className="flex justify-between w-40 text-stone-500">
                  <span>Sun - Mon:</span> 
                  <span className="flex items-center">Closed <Fish className="w-3 h-3 ml-1" /></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social & Brand */}
          <div className="space-y-6 md:text-right">
             <div>
                <h2 className="font-serif text-2xl font-bold text-bakery-50">THE FLOUR & FERN</h2>
                <p className="text-sm text-stone-500 mt-1">Small-batch baking with heart.</p>
             </div>
             
             <div className="flex md:justify-end space-x-4">
               <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-fern-700 transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="p-2 bg-stone-800 rounded-full hover:bg-fern-700 transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
             </div>
             <p className="text-stone-400">@FlourAndFernBakery</p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-sm text-stone-600">
          <p>&copy; {new Date().getFullYear()} The Flour & Fern. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};