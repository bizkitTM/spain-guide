import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Late Night',
  description: 'Late night spots in Madrid',
  openGraph: {
    title: 'Late Night',
    siteName: 'Late Night',
  }
};

export default function MadridLateNight() {
  const options = [
    {
      id: "san-gines",
      name: "Chocolatería San Ginés",
      distance: "~12 min walk",
      address: "Pasadizo de San Ginés, 5",
      vibe: "Historic, bustling 24-hour institution.",
      why: "The most famous churro spot in Madrid, open 24 hours a day. Nothing beats thick Spanish hot chocolate and fresh churros at midnight.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg",
      mapUrl: "https://maps.apple.com/?q=Chocolateria+San+Gines+Madrid"
    },
    {
      id: "salmon-guru",
      name: "Salmon Guru",
      distance: "~4 min walk",
      address: "Calle de Echegaray, 21",
      vibe: "Neon-lit, eccentric, world-class mixology.",
      why: "One of the top 50 bars in the world. They serve incredibly creative cocktails and mocktails in crazy custom glasses. Perfect late-night vibe and it's right in your neighborhood. Open until 2:00 AM (2:30 AM weekends).",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Grease_Cocktail_Bar_Neon_Sign.jpg/960px-Grease_Cocktail_Bar_Neon_Sign.jpg",
      mapUrl: "https://maps.apple.com/?q=Salmon+Guru+Madrid"
    },
    {
      id: "cafe-central",
      name: "Café Central",
      distance: "~5 min walk",
      address: "Plaza del Ángel, 10",
      vibe: "Classic jazz cafe with a moody, artistic atmosphere.",
      why: "A legendary jazz club and cafe. Even if you don't stay for a full show, it's a great spot to grab a late-night coffee, dessert, or drink accompanied by great music. Open until 2:30 AM.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cafe_Central_-_Plaza_del_Angel_-_Madrid_01.jpg/960px-Cafe_Central_-_Plaza_del_Angel_-_Madrid_01.jpg",
      mapUrl: "https://maps.apple.com/?q=Cafe+Central+Madrid"
    },
    {
      id: "mercado-san-miguel",
      name: "Mercado de San Miguel",
      distance: "~12 min walk",
      address: "Plaza de San Miguel",
      vibe: "Bustling, beautiful, gourmet food hall.",
      why: "While famous for tapas, it's open until midnight (or 1 AM on weekends) and features dessert stalls like Rocambolesc (gourmet gelato). A fantastic place to wander late at night.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mercado_de_San_Miguel_-_Madrid_01.jpg/960px-Mercado_de_San_Miguel_-_Madrid_01.jpg",
      mapUrl: "https://maps.apple.com/?q=Mercado+de+San+Miguel+Madrid"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 pb-12">
      <div className="max-w-md mx-auto bg-neutral-800 min-h-screen shadow-sm md:shadow-md md:my-6 md:rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white p-6 pb-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Itinerary
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Late Night</h1>
          <p className="text-indigo-200 text-sm font-medium flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Confirmed open past 11:00 PM
          </p>
        </div>

        {/* Options List */}
        <div className="p-4 space-y-6 -mt-4">
          {options.map((opt) => (
            <div key={opt.id} className="bg-neutral-900 rounded-xl shadow-md border border-neutral-700 overflow-hidden">
              <div className="h-48 relative overflow-hidden bg-neutral-800 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={opt.imgUrl} 
                  alt={opt.name}
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute top-3 right-3 bg-neutral-900/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-neutral-200 shadow-sm flex items-center border border-neutral-700">
                  <MapPin className="w-3 h-3 mr-1 text-indigo-400" />
                  {opt.distance}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold text-neutral-100 mb-1">{opt.name}</h2>
                <a href={opt.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-indigo-400 flex items-center mb-3 hover:underline">
                  {opt.address} <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                
                <div className="bg-indigo-900/40 text-indigo-200 rounded-lg p-3 text-sm font-medium mb-4 border border-indigo-800/50">
                  <span className="font-bold text-indigo-300 mr-1">Vibe:</span> {opt.vibe}
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
        
        {/* Footer */}
        <div className="text-center p-6 text-neutral-500 text-xs font-medium">
          Madrid never sleeps! 🌙✨
        </div>
      </div>
    </div>
  );
}
