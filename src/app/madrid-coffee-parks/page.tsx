import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink, Utensils } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brunch Near the Park',
  description: 'Great brunch spots near Madrid parks with outdoor seating and food',
  openGraph: {
    title: 'Brunch Near the Park',
    siteName: 'Brunch Near the Park',
  }
};

export default function MadridCoffeeParks() {
  const options = [
    {
      id: "plenti",
      name: "Plenti",
      distance: "~2 min walk",
      address: "Calle Moreto, 17",
      vibe: "Cozy specialty coffee and eatery.",
      why: "Tucked right by El Retiro Park. Famous for their baked eggs, artisan toasts, and hearty brunch bowls.",
      imgUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Plenti+Calle+Moreto+Madrid"
    },
    {
      id: "cafeteria-prado",
      name: "Cafetería Prado",
      distance: "~2 min walk",
      address: "Paseo del Prado, 16",
      vibe: "Classic local Spanish cafeteria.",
      why: "Perfect if you just want a quick, inexpensive 'tostada con tomate' (tomato toast) and a coffee right on the main avenue without any fuss.",
      imgUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cafeteria+Prado+Madrid"
    },
    {
      id: "expressio-cafe",
      name: "Expressio Café",
      distance: "~4 min walk",
      address: "Calle Espalter, 9",
      vibe: "Casual, relaxed cafe by the gardens.",
      why: "Right next to the Botanical Garden. It's a great, unpretentious spot for a quick morning coffee, fresh orange juice, and a breakfast sandwich.",
      imgUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Expressio+Cafe+Espalter+Madrid"
    },
    {
      id: "qrico",
      name: "Qrico",
      distance: "~3 min walk",
      address: "Plaza de la Lealtad",
      vibe: "Relaxed coffee and snack stop.",
      why: "A very casual grab-and-go or quick-sit spot right off the Paseo near the Ritz. Excellent for a fast coffee and a quick pastry.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Qrico+Plaza+Lealtad+Madrid"
    },
    {
      id: "vait-alcala",
      name: "Vait Alcalá Pastelería",
      distance: "~8 min walk",
      address: "Calle de Alcalá, 54",
      vibe: "Beautiful Spanish bakery and cafe.",
      why: "Located near the park's north gates. It's fantastic for sweet pastries, savory croissants, and traditional Spanish breakfast combos.",
      imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Vait+Alcala+Madrid"
    },
    {
      id: "cafe-murillo",
      name: "Café Murillo",
      distance: "~2 min walk",
      address: "Calle Ruiz de Alarcón, 27",
      vibe: "Chic bistro right behind the Prado.",
      why: "Elegant bistro serving a full brunch menu—think eggs benedict, pancakes, and Spanish tortillas, right near the park gates.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cafe+Murillo+Ruiz+de+Alarcon+Madrid"
    },
    {
      id: "cafeteria-prado",
      name: "Cafetería Prado",
      distance: "~2 min walk",
      address: "Paseo del Prado, 16",
      vibe: "Classic local Spanish cafeteria.",
      why: "Perfect if you just want a quick, inexpensive 'tostada con tomate' (tomato toast) and a coffee right on the main avenue without any fuss.",
      imgUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cafeteria+Prado+Madrid"
    },
    {
      id: "expressio-cafe",
      name: "Expressio Café",
      distance: "~4 min walk",
      address: "Calle Espalter, 9",
      vibe: "Casual, relaxed cafe by the gardens.",
      why: "Right next to the Botanical Garden. It's a great, unpretentious spot for a quick morning coffee, fresh orange juice, and a breakfast sandwich.",
      imgUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Expressio+Cafe+Espalter+Madrid"
    },
    {
      id: "qrico",
      name: "Qrico",
      distance: "~3 min walk",
      address: "Plaza de la Lealtad",
      vibe: "Relaxed coffee and snack stop.",
      why: "A very casual grab-and-go or quick-sit spot right off the Paseo near the Ritz. Excellent for a fast coffee and a quick pastry.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Qrico+Plaza+Lealtad+Madrid"
    },
    {
      id: "vait-alcala",
      name: "Vait Alcalá Pastelería",
      distance: "~8 min walk",
      address: "Calle de Alcalá, 54",
      vibe: "Beautiful Spanish bakery and cafe.",
      why: "Located near the park's north gates. It's fantastic for sweet pastries, savory croissants, and traditional Spanish breakfast combos.",
      imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Vait+Alcala+Madrid"
    },
    {
      id: "harina",
      name: "[h]arina",
      distance: "~3 min walk",
      address: "Plaza de la Independencia, 10",
      vibe: "Bright artisanal bakery with park views.",
      why: "Perfect for a hearty bite. They offer incredible fresh sandwiches, quiches, and artisanal pastries right across from El Retiro.",
      imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Harina+Plaza+Independencia+Madrid"
    },
    {
      id: "cafeteria-prado",
      name: "Cafetería Prado",
      distance: "~2 min walk",
      address: "Paseo del Prado, 16",
      vibe: "Classic local Spanish cafeteria.",
      why: "Perfect if you just want a quick, inexpensive 'tostada con tomate' (tomato toast) and a coffee right on the main avenue without any fuss.",
      imgUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cafeteria+Prado+Madrid"
    },
    {
      id: "expressio-cafe",
      name: "Expressio Café",
      distance: "~4 min walk",
      address: "Calle Espalter, 9",
      vibe: "Casual, relaxed cafe by the gardens.",
      why: "Right next to the Botanical Garden. It's a great, unpretentious spot for a quick morning coffee, fresh orange juice, and a breakfast sandwich.",
      imgUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Expressio+Cafe+Espalter+Madrid"
    },
    {
      id: "qrico",
      name: "Qrico",
      distance: "~3 min walk",
      address: "Plaza de la Lealtad",
      vibe: "Relaxed coffee and snack stop.",
      why: "A very casual grab-and-go or quick-sit spot right off the Paseo near the Ritz. Excellent for a fast coffee and a quick pastry.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Qrico+Plaza+Lealtad+Madrid"
    },
    {
      id: "vait-alcala",
      name: "Vait Alcalá Pastelería",
      distance: "~8 min walk",
      address: "Calle de Alcalá, 54",
      vibe: "Beautiful Spanish bakery and cafe.",
      why: "Located near the park's north gates. It's fantastic for sweet pastries, savory croissants, and traditional Spanish breakfast combos.",
      imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Vait+Alcala+Madrid"
    },
    {
      id: "el-botanico",
      name: "El Botánico",
      distance: "~2 min walk",
      address: "Calle Ruiz de Alarcón, 27",
      vibe: "Classic restaurant with a beautiful terrace.",
      why: "Fantastic for a substantial brunch or lunch. They serve excellent traditional Spanish dishes and hearty meals with a view of the Botanical Garden.",
      imgUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=El+Botanico+Madrid"
    },
    {
      id: "cafeteria-prado",
      name: "Cafetería Prado",
      distance: "~2 min walk",
      address: "Paseo del Prado, 16",
      vibe: "Classic local Spanish cafeteria.",
      why: "Perfect if you just want a quick, inexpensive 'tostada con tomate' (tomato toast) and a coffee right on the main avenue without any fuss.",
      imgUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cafeteria+Prado+Madrid"
    },
    {
      id: "expressio-cafe",
      name: "Expressio Café",
      distance: "~4 min walk",
      address: "Calle Espalter, 9",
      vibe: "Casual, relaxed cafe by the gardens.",
      why: "Right next to the Botanical Garden. It's a great, unpretentious spot for a quick morning coffee, fresh orange juice, and a breakfast sandwich.",
      imgUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Expressio+Cafe+Espalter+Madrid"
    },
    {
      id: "qrico",
      name: "Qrico",
      distance: "~3 min walk",
      address: "Plaza de la Lealtad",
      vibe: "Relaxed coffee and snack stop.",
      why: "A very casual grab-and-go or quick-sit spot right off the Paseo near the Ritz. Excellent for a fast coffee and a quick pastry.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Qrico+Plaza+Lealtad+Madrid"
    },
    {
      id: "vait-alcala",
      name: "Vait Alcalá Pastelería",
      distance: "~8 min walk",
      address: "Calle de Alcalá, 54",
      vibe: "Beautiful Spanish bakery and cafe.",
      why: "Located near the park's north gates. It's fantastic for sweet pastries, savory croissants, and traditional Spanish breakfast combos.",
      imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Vait+Alcala+Madrid"
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
          <h1 className="text-3xl font-bold tracking-tight mb-2">Brunch Near the Park</h1>
          <p className="text-emerald-200 text-sm font-medium flex items-center">
            <Utensils className="w-4 h-4 mr-1" />
            Great food & coffee by the greenery
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
