import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink, Coffee } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coffee & Parks',
  description: 'Great coffee spots near Madrid parks with outdoor seating',
  openGraph: {
    title: 'Coffee & Parks',
    siteName: 'Coffee & Parks',
  }
};

export default function MadridCoffeeParks() {
  const options = [
    {
      id: "la-vega",
      name: "La Vega",
      distance: "~3 min walk from Prado",
      address: "Calle de Lope de Vega",
      vibe: "Relaxed cafe with outdoor seating.",
      why: "A great spot to grab a coffee and sit outside after visiting the Prado Museum or wandering near the Botanical Gardens.",
      imgUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=La+Vega+Calle+de+Lope+de+Vega+Madrid"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 pb-12">
      <div className="max-w-md mx-auto bg-neutral-800 min-h-screen shadow-sm md:shadow-md md:my-6 md:rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white p-6 pb-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Itinerary
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Coffee & Parks</h1>
          <p className="text-emerald-200 text-sm font-medium flex items-center">
            <Coffee className="w-4 h-4 mr-1" />
            Outdoor seating near the greenery
          </p>
        </div>

        {/* Options List */}
        <div className="p-4 space-y-6 -mt-4">
          {options.map((opt) => (
            <div key={opt.id} className="bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden">
              <div className="h-48 relative overflow-hidden bg-neutral-800 flex items-center justify-center">
                <img 
                  src={opt.imgUrl} 
                  alt={opt.name}
                  className="w-full h-full opacity-90 object-cover"
                />
                <div className="absolute top-3 right-3 bg-neutral-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-neutral-200 shadow-sm flex items-center border border-neutral-700">
                  <MapPin className="w-3 h-3 mr-1 text-emerald-400" />
                  {opt.distance}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold text-neutral-100 mb-1">{opt.name}</h2>
                <a href={opt.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-emerald-400 flex items-center mb-3 hover:underline">
                  {opt.address} <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                
                <div className="bg-emerald-900/40 text-emerald-200 rounded-lg p-3 text-sm font-medium mb-4 border border-emerald-800/50">
                  <span className="font-bold text-emerald-300 mr-1">Vibe:</span> {opt.vibe}
                </div>
                
                <div className="flex gap-2">
                  <Info className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    <span className="font-bold text-neutral-400">Why go: </span>
                    {opt.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
