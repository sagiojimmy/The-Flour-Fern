import React from 'react';
import { Download, Star, Coffee, Cake, PartyPopper } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FlavorStat } from '../types';

const flavorData: FlavorStat[] = [
  { name: 'Earl Grey & Honey', popularity: 95, description: 'Sophisticated & Floral' },
  { name: 'Dark Choc Raspberry', popularity: 88, description: 'Rich & Tart' },
  { name: 'Classic Vanilla', popularity: 75, description: 'Timeless' },
  { name: 'Lemon Elderflower', popularity: 60, description: 'Zesty' },
];

export const Menu: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-bakery-50 animate-fade-in">
      
      {/* Header */}
      <div className="bg-stone-800 text-bakery-50 py-16 text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Baking for every milestone.</h1>
        <p className="max-w-2xl mx-auto text-stone-300 text-lg font-light">
          We don’t do frozen. We don’t do box mixes. Everything is made from scratch using eggs from the farm down the road.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        
        {/* Service 1: Weddings */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-fern-700">
               <Cake className="w-6 h-6" />
               <span className="uppercase tracking-widest font-bold text-sm">Service 01</span>
            </div>
            <h2 className="font-serif text-4xl text-stone-800">The Big Day</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              From naked cakes adorned with fresh flowers to elegant fondant masterpieces. 
              We schedule a private tasting for every couple to ensure your flavor profile is perfect.
            </p>
            
            {/* Chart Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 mt-8">
              <h4 className="font-serif text-xl mb-4 text-stone-800 border-b pb-2">Top Wedding Flavors This Season</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={flavorData} layout="vertical" margin={{ left: 40 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={140} tick={{fill: '#44403c', fontSize: 12}} />
                    <Tooltip 
                      cursor={{fill: '#f5f5f4'}}
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e7e5e4', fontFamily: 'serif' }}
                    />
                    <Bar dataKey="popularity" radius={[0, 4, 4, 0]} barSize={20}>
                      {flavorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#4a8553' : '#a8a29e'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-stone-400 mt-2 text-right">*Based on 2024 Orders</p>
            </div>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=2305&auto=format&fit=crop" alt="Wedding Cake" className="rounded-md shadow-xl w-full object-cover h-[600px]" />
          </div>
        </div>

        {/* Service 2: Celebrations */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-fern-700">
               <PartyPopper className="w-6 h-6" />
               <span className="uppercase tracking-widest font-bold text-sm">Service 02</span>
            </div>
            <h2 className="font-serif text-4xl text-stone-800">Birthdays, Babies & Promotions</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Custom cakes that steal the show. You dream up the theme, we whip up the frosting.
              <br/>
              <span className="text-stone-400 italic text-base block mt-2">(Includes: Smash cakes, sheet cakes, and tiered designs).</span>
            </p>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1888&auto=format&fit=crop" alt="Birthday Cake" className="rounded-md shadow-lg w-full object-cover" />
          </div>
        </div>

        {/* Service 3: Morning Counter */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-fern-700">
               <Coffee className="w-6 h-6" />
               <span className="uppercase tracking-widest font-bold text-sm">Service 03</span>
            </div>
            <h2 className="font-serif text-4xl text-stone-800">The Morning Counter</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Pop in for our rotating selection of daily Pastries consisting of croissants, muffins, and artisanal breads.
            </p>
            <div className="bg-fern-50 p-4 border-l-4 border-fern-600">
              <p className="text-fern-800 italic">Interested in wholesale for your cafe? We do that too.</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=1935&auto=format&fit=crop" alt="Croissant" className="rounded-md shadow-md w-full object-cover aspect-square" />
             <img src="https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?q=80&w=2069&auto=format&fit=crop" alt="Muffin" className="rounded-md shadow-md w-full object-cover aspect-square mt-8" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <button className="inline-flex items-center gap-2 bg-stone-800 text-bakery-50 px-8 py-4 uppercase tracking-widest font-bold hover:bg-fern-700 transition-all transform hover:-translate-y-1 shadow-lg">
            <Download className="w-5 h-5" />
            Download Full Price List (PDF)
          </button>
        </div>

      </div>
    </div>
  );
};