import React, { useState, useEffect } from 'react';
import { Menu, X, Wheat, Leaf } from 'lucide-react';
import { PageView, NavItem } from '../types';

interface NavigationProps {
  currentView: PageView;
  onChangeView: (view: PageView) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu & Services' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView) => {
    onChangeView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bakery-50/95 shadow-md py-2 backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-stone-800 text-bakery-50 rounded-full transition-transform group-hover:scale-105">
              <Wheat className="w-5 h-5 absolute -translate-x-1" />
              <Leaf className="w-5 h-5 absolute translate-x-1 rotate-45 text-fern-300" />
            </div>
            <div>
              <h1 className={`font-serif text-xl font-bold tracking-wider ${isScrolled ? 'text-stone-800' : 'text-stone-900'}`}>
                THE FLOUR & FERN
              </h1>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-500">Est. 2024</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-widest uppercase font-sans transition-colors duration-200 hover:text-fern-600 ${
                  currentView === item.id 
                    ? 'text-fern-700 font-bold border-b-2 border-fern-600' 
                    : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('menu')}
              className="px-5 py-2 bg-stone-800 text-bakery-50 text-xs uppercase tracking-widest font-bold hover:bg-fern-700 transition-colors shadow-sm"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-800 hover:text-fern-600 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bakery-50 border-t border-bakery-200 shadow-xl p-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-lg font-serif py-2 text-left px-4 rounded-lg ${
                currentView === item.id ? 'bg-fern-50 text-fern-800' : 'text-stone-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};