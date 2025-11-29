import React, { useState } from 'react';
import { Send, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    craving: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! Jake will get back to you shortly.");
    setFormData({ name: '', email: '', date: '', craving: '' });
  };

  return (
    <div className="pt-24 min-h-screen bg-bakery-50 animate-fade-in pb-20">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-stone-800 mb-6">Let's get baking.</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Ready to order a cake? Have a question about allergens? Just want to say hi? Drop us a line below.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-fern-700 bg-fern-50 inline-block px-4 py-2 rounded-full mx-auto">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Please allow 48 hours for custom quote responses (my hands are usually full of dough!)</span>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-fern-600">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-stone-500">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-stone-200 bg-transparent py-2 px-1 focus:border-fern-600 focus:outline-none transition-colors text-xl font-serif text-stone-800"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-stone-500">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-stone-200 bg-transparent py-2 px-1 focus:border-fern-600 focus:outline-none transition-colors text-xl font-serif text-stone-800"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-bold uppercase tracking-widest text-stone-500">Date of Event</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full md:w-1/3 border-b-2 border-stone-200 bg-transparent py-2 px-1 focus:border-fern-600 focus:outline-none transition-colors text-xl font-serif text-stone-800"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="craving" className="block text-sm font-bold uppercase tracking-widest text-stone-500">What are you craving?</label>
              <p className="text-xs text-stone-400 mb-2">Tell us about your event, flavor preferences, or serving size.</p>
              <textarea
                id="craving"
                name="craving"
                value={formData.craving}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-2 border-stone-200 rounded-md bg-stone-50 py-3 px-4 focus:border-fern-600 focus:outline-none transition-colors text-lg text-stone-800 resize-none"
                placeholder="I need a birthday cake for 20 people..."
              />
            </div>

            <div className="pt-6 text-center md:text-left">
              <button 
                type="submit"
                className="inline-flex items-center gap-3 bg-fern-700 text-white px-10 py-4 uppercase tracking-widest font-bold hover:bg-fern-800 transition-all shadow-md hover:shadow-lg"
              >
                Send Request <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};