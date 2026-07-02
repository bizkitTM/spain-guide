import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desserts',
  description: 'Madrid dessert recommendations',
  openGraph: {
    title: 'Desserts',
    siteName: 'Desserts',
  }
};

export default function MadridDesserts() {
  const options = [
    {
      id: "gioelia",
      name: "Gioelia Cremería",
      distance: "~3 min walk",
      address: "Calle de Atocha, 42",
      vibe: "Authentic, high-quality Italian gelato.",
      why: "It's just a couple blocks from you and stays open late. Perfect for a warm June night.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/CafeMia.jpg",
      mapUrl: "https://maps.apple.com/?q=Gioelia+Cremeria+Madrid"
    },
    {
      id: "ragazzi",
      name: "Heladería Ragazzi",
      distance: "~5 min walk",
      address: "Calle de Santa Isabel, 7",
      vibe: "Fantastic artisan ice cream.",
      why: "Located right next to the Mercado de Antón Martín. Excellent flavors and very close by.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/960px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
      mapUrl: "https://maps.apple.com/?q=Ragazzi+Madrid"
    },
    {
      id: "san-gines",
      name: "Chocolatería San Ginés",
      distance: "~10-12 min walk",
      address: "Pasadizo de San Ginés, 5",
      vibe: "Historic churros and chocolate.",
      why: "The absolute undisputed king of Madrid dessert. Open 24 hours a day since 1894. If you want the quintessential Madrid late-night dessert experience, it's worth the short walk!",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg",
      mapUrl: "https://maps.apple.com/?q=Chocolateria+San+Gines+Madrid"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pb-12">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-sm md:shadow-md md:my-6 md:rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-6 pb-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Itinerary
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Madrid Desserts</h1>
          <p className="text-white/90 text-sm font-medium flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Late-night treats near you
          </p>
        </div>

        {/* Options List */}
        <div className="p-4 space-y-6 -mt-4">
          {options.map((opt) => (
            <div key={opt.id} className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
              <div className="h-48 relative overflow-hidden bg-neutral-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={opt.imgUrl} 
                  alt={opt.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-neutral-800 shadow-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-indigo-500" />
                  {opt.distance}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold text-neutral-800 mb-1">{opt.name}</h2>
                <a href={opt.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-indigo-600 flex items-center mb-3 hover:underline">
                  {opt.address} <span className="ml-2 inline-flex items-center border border-current rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold"><ExternalLink className="w-3 h-3 mr-1" /> Map</span>
                </a>
                
                <div className="bg-indigo-50 text-indigo-800 rounded-lg p-3 text-sm font-medium mb-4 border border-indigo-100/50">
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
          Enjoy! 🍦🍫
        </div>
      </div>
    </div>
  );
}