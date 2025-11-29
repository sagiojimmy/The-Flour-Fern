import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-bakery-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-stone-800 rounded-lg z-0 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
              alt="Jake" 
              className="relative z-10 rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4] grayscale-[10%] hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-serif text-4xl text-stone-800 italic">The hands behind the flour.</h2>
            
            <div className="prose text-stone-700 leading-loose">
              <p className="font-bold">Hi! I’m Jake.</p>
              
              <p>
                I started The Flour & Fern because I missed the taste of my Grandmother’s kitchen. 
                After a few years in corporate finance, I traded my spreadsheets for spatulas.
              </p>
              
              <p>
                I believe in real butter, fair wages, and that a cookie can fix almost anything. 
                When I’m not covered in flour, I’m usually hiking the local trails with my dog, Barnaby.
              </p>
            </div>

            <div className="pt-4">
              <p className="font-serif text-xl text-stone-800">Thanks for supporting local.</p>
              <p className="font-handwriting text-3xl mt-2 text-fern-700 font-serif italic">Cheers, Jake</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};