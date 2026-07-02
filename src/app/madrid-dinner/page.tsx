import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink, Wine } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dinner Spots',
  description: 'Highly rated dinner spots near Barrio de las Letras',
  openGraph: {
    title: 'Dinner Spots',
    siteName: 'Dinner Spots',
  }
};

export default function MadridDinner() {
  const options = [
    {
      id: "triciclo",
      name: "Triciclo",
      rating: "⭐️ 4.7/5",
      distance: "~2 min walk",
      address: "Calle Santa María, 28",
      vibe: "Contemporary, foodie-favorite, vibrant.",
      why: "One of the most acclaimed modern tapas spots in the neighborhood. They take classic Spanish flavors and elevate them beautifully.",
      imgUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Triciclo+Madrid"
    },
    {
      id: "casa-alberto",
      name: "Casa Alberto",
      rating: "⭐️ 4.5/5",
      distance: "~4 min walk",
      address: "Calle de las Huertas, 18",
      vibe: "Historic, traditional, classic tavern.",
      why: "An absolute Madrid institution open since 1827. It’s perfect for a traditional, high-quality Spanish sit-down dinner. Their vermouth on tap and traditional stew dishes are legendary.",
      imgUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Casa+Alberto+Madrid"
    },
    {
      id: "taberna-el-sur",
      name: "Taberna El Sur",
      rating: "⭐️ 4.6/5",
      distance: "~4 min walk",
      address: "Calle de la Torrecilla del Leal, 12",
      vibe: "Vibrant, lively atmosphere with incredible food.",
      why: "Stellar reputation for amazing tapas. Their Ropa Vieja (shredded beef) and croquetas are incredible. Very popular, so arriving early is key.",
      imgUrl: "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Taberna+El+Sur+Madrid"
    },
    {
      id: "el-caldero",
      name: "El Caldero",
      rating: "⭐️ 4.3/5",
      distance: "~3 min walk",
      address: "Calle de las Huertas, 15",
      vibe: "Authentic Murcian cuisine & paella.",
      why: "Specializing in Murcian cuisine, their seafood paellas are considered some of the absolute best in the center of Madrid.",
      imgUrl: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=El+Caldero+Madrid"
    },
    {
      id: "matute-12",
      name: "Matute 12",
      rating: "⭐️ 4.2/5",
      distance: "~5 min walk",
      address: "Plaza de Matute, 12",
      vibe: "Modern, chic, atmospheric lounge.",
      why: "A gorgeous space inside with an eclectic, modern Spanish menu and a great terrace/lounge vibe. Excellent if you want a stylish sit-down experience.",
      imgUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Matute+12+Madrid"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 pb-12">
      <div className="max-w-md mx-auto bg-neutral-800 min-h-screen shadow-sm md:shadow-md md:my-6 md:rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-red-800 text-white p-6 pb-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Itinerary
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Dinner Spots</h1>
          <p className="text-rose-200 text-sm font-medium flex items-center">
            <Wine className="w-4 h-4 mr-1" />
            Highly rated restaurants nearby
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
                  <MapPin className="w-3 h-3 mr-1 text-rose-400" />
                  {opt.distance}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold text-neutral-100 mb-1">{opt.name}</h2>
                <a href={opt.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-rose-400 flex items-center mb-3 hover:underline">
                  {opt.address} <span className="ml-2 inline-flex items-center border border-current rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold"><ExternalLink className="w-3 h-3 mr-1" /> Map</span>
                </a>
                
                {opt.rating && (
                  <div className="text-sm font-bold text-amber-500 mb-3">
                    {opt.rating}
                  </div>
                )}
                
                <div className="bg-rose-900/40 text-rose-200 rounded-lg p-3 text-sm font-medium mb-4 border border-rose-800/50">
                  <span className="font-bold text-rose-300 mr-1">Vibe:</span> {opt.vibe}
                </div>
                
                <div className="flex gap-2">
                  <Info className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    <span className="font-bold text-neutral-400">Why: </span>
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
