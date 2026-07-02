import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink, Utensils } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brunch Near the Park',
  description: 'Full brunch menus near El Retiro and Prado',
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
      vibe: "Modern, cozy, and highly rated.",
      why: "Tucked right by El Retiro Park and the Prado. Their menu is fantastic—famous for baked eggs, loaded avocado artisan toasts, and hearty brunch bowls.",
      imgUrl: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Plenti+Calle+Moreto+Madrid"
    },
    {
      id: "cafe-murillo",
      name: "Café Murillo",
      distance: "~2 min walk",
      address: "Calle Ruiz de Alarcón, 27",
      vibe: "Chic bistro right behind the Prado.",
      why: "A stylish spot with a dedicated weekend brunch menu featuring eggs benedict, fluffy pancakes, and proper breakfast plates right near the park gates.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cafe+Murillo+Ruiz+de+Alarcon+Madrid"
    },
    {
      id: "bumpgreen",
      name: "BumpGreen",
      distance: "~12 min walk",
      address: "Calle de Velázquez, 11",
      vibe: "Green, botanical, and sustainable.",
      why: "Just north of the park. If you want a massive, healthy, and creative brunch menu with incredible sweet potato pancakes, artisan toasts, and superfood bowls, this is the spot.",
      imgUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=BumpGreen+Madrid"
    },
    {
      id: "magasand-retiro",
      name: "Magasand Columela",
      distance: "~10 min walk",
      address: "Calle Columela, 4",
      vibe: "Hip, casual, and food-forward.",
      why: "A block away from El Retiro. They are famous for their giant loaded bagels, thick healthy toasts, savory bowls, and fantastic sweet brunch options.",
      imgUrl: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Magasand+Columela+Madrid"
    },
    {
      id: "cappuccino-grand",
      name: "Cappuccino Grand Café",
      distance: "~8 min walk",
      address: "Plaza de la Independencia, 5",
      vibe: "Luxurious and expansive.",
      why: "Located right at the Puerta de Alcalá park gates. They offer a huge, luxurious full breakfast and brunch menu with everything from cooked English breakfasts to fruit platters and pastries.",
      imgUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cappuccino+Grand+Cafe+Madrid"
    },
    {
      id: "cristina-oria",
      name: "Cristina Oria",
      distance: "~11 min walk",
      address: "Calle del Conde de Aranda, 6",
      vibe: "Elegant, gourmet, and Parisian-inspired.",
      why: "A short walk from the park, offering a stunning brunch menu. Think gourmet waffles, incredible loaded toasts, and perfectly cooked eggs in a beautiful setting.",
      imgUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cristina+Oria+Conde+de+Aranda+Madrid"
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
            Full menus & hearty plates
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
                  {opt.address} <span className="ml-2 inline-flex items-center border border-current rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold"><ExternalLink className="w-3 h-3 mr-1" /> Map</span>
                </a>
                
                <div className="bg-emerald-900/40 text-emerald-200 rounded-lg p-3 text-sm font-medium mb-4 border border-emerald-800/50">
                  <span className="font-bold text-emerald-300 mr-1">Vibe:</span> {opt.vibe}
                </div>
                
                <div className="flex gap-2">
                  <Info className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    <span className="font-bold text-neutral-400">Menu: </span>
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
