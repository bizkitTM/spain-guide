import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping',
  description: 'Women\'s fashion in Madrid',
  openGraph: {
    title: 'Shopping',
    siteName: 'Shopping',
  }
};

export default function MadridShopping() {
  const options = [
    {
      id: "mango",
      name: "Mango (Flagship)",
      distance: "~15 min walk",
      address: "Calle de Preciados, 8",
      vibe: "The actual brand you are looking for!",
      why: "If you're looking for something like Mango, there is actually a huge multi-story Mango flagship store located on Madrid's most famous shopping street.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Calle_de_Preciados_-_Madrid_-_01.jpg/960px-Calle_de_Preciados_-_Madrid_-_01.jpg",
      mapUrl: "https://maps.apple.com/?q=Mango+Calle+Preciados+Madrid"
    },
    {
      id: "zara",
      name: "Zara",
      distance: "~10 min walk",
      address: "Calle Carretas, 6",
      vibe: "The ultimate Spanish fast-fashion staple.",
      why: "If you like Mango, Zara is the natural next stop. This huge location is just a short 10-minute walk towards Puerta del Sol.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Zara_Storefront_%2848155639387%29.jpg/960px-Zara_Storefront_%2848155639387%29.jpg",
      mapUrl: "https://maps.apple.com/?q=Zara+Calle+Carretas+Madrid"
    },
    {
      id: "massimo-dutti",
      name: "Massimo Dutti",
      distance: "~12 min walk",
      address: "Calle Mayor, 16",
      vibe: "Slightly more elevated and sophisticated.",
      why: "Owned by the same parent company as Zara, but hits a slightly higher-end tone similar to Mango's premium pieces. Fantastic for quality basics, linen, and silk.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Massimo_Dutti_store%2C_%5E118_Kensington_High_Street_-_geograph.org.uk_-_3336702.jpg",
      mapUrl: "https://maps.apple.com/?q=Massimo+Dutti+Calle+Mayor+Madrid"
    },
    {
      id: "sfera",
      name: "Sfera",
      distance: "~15 min walk",
      address: "Calle de Preciados, 4",
      vibe: "Affordable, contemporary Spanish fashion.",
      why: "Owned by the famous El Corte Inglés department store, Sfera hits the exact same sweet spot of stylish, affordable women's clothing as Mango.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Logo_Corte_Ingl%C3%A9s.svg/960px-Logo_Corte_Ingl%C3%A9s.svg.png",
      mapUrl: "https://maps.apple.com/?q=Sfera+Calle+Preciados+Madrid"
    },
    {
      id: "stradivarius",
      name: "Stradivarius",
      distance: "~12 min walk",
      address: "Calle de Galdo, 2",
      vibe: "Trend-focused and vibrant.",
      why: "Another gem from the Inditex group (Zara's parent). A bit more focused on current trends, making it a great place to look for casual daywear and dresses.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/HK_Central_Queen%27s_Road_H%26M_Department_Store_clothing_fashion_figures_night_Aug-2012.JPG/960px-HK_Central_Queen%27s_Road_H%26M_Department_Store_clothing_fashion_figures_night_Aug-2012.JPG",
      mapUrl: "https://maps.apple.com/?q=Stradivarius+Calle+Galdo+Madrid"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pb-12">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-sm md:shadow-md md:my-6 md:rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white p-6 pb-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Itinerary
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Madrid Shopping</h1>
          <p className="text-white/90 text-sm font-medium flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Women&apos;s Fashion Near You
          </p>
        </div>

        {/* Options List */}
        <div className="p-4 space-y-6 -mt-4">
          {options.map((opt) => (
            <div key={opt.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
              <div className="h-48 relative overflow-hidden bg-neutral-200 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={opt.imgUrl} 
                  alt={opt.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-neutral-800 shadow-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-pink-500" />
                  {opt.distance}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold text-neutral-800 mb-1">{opt.name}</h2>
                <a href={opt.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-pink-600 flex items-center mb-3 hover:underline">
                  {opt.address} <span className="ml-2 inline-flex items-center border border-current rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold"><ExternalLink className="w-3 h-3 mr-1" /> Map</span>
                </a>
                
                <div className="bg-pink-50 text-pink-800 rounded-lg p-3 text-sm font-medium mb-4 border border-pink-100/50">
                  <span className="font-bold mr-1">Vibe:</span> {opt.vibe}
                </div>
                
                <div className="flex gap-2">
                  <Info className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    <span className="font-bold text-neutral-700">Why go: </span>
                    {opt.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center p-6 text-neutral-400 text-xs font-medium">
          Happy Shopping! 👗🛍️
        </div>
      </div>
    </div>
  );
}
