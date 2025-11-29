import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'menu':
        return <Menu />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <main>
            <Hero 
              onOrderClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              onMenuClick={() => {
                setCurrentView('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            
            {/* Intro Blurb */}
            <section className="py-20 px-4 max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl italic text-stone-800">Welcome to The Flour & Fern.</h2>
              <p className="text-lg text-stone-600 leading-loose">
                We believe butter is a food group and that every celebration deserves a centerpiece 
                that tastes as good as it looks. Whether you’re walking down the aisle or just need 
                a Tuesday pick-me-up, our oven is on and the coffee is brewing.
              </p>
            </section>

            <Featured />
            <About />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900">
      <Navigation currentView={currentView} onChangeView={setCurrentView} />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
};

export default App;