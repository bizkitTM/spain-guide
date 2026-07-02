import React from 'react';
import { MapPin, Info, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brunch',
  description: 'Madrid brunch recommendations',
  openGraph: {
    title: 'Brunch',
    siteName: 'Brunch',
  }
};

export default function MadridBrunch() {
  const options = [
    {
      id: "plenti-retiro",
      name: "Plenti",
      distance: "~2 min walk",
      address: "Calle Moreto, 17",
      vibe: "Cozy specialty coffee and eatery near the park.",
      why: "Located in the Jerónimos neighborhood just off Paseo del Prado, this highly-rated spot is perfect for excellent coffee, baked eggs, and artisan toasts.",
      imgUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Plenti+Calle+Moreto+Madrid"
    },
    {
      id: "murillo-brunch",
      name: "Café Murillo",
      distance: "~2 min walk",
      address: "Calle Ruiz de Alarcón, 27",
      vibe: "Elegant bistro-style brunch behind the Prado.",
      why: "A fantastic, stylish cafe just east of the Prado. They have a great weekend brunch menu, outdoor seating, and a chic ambiance.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Cafe+Murillo+Ruiz+de+Alarcon+Madrid"
    },
    {
      id: "harina-retiro",
      name: "[h]arina",
      distance: "~3 min walk",
      address: "Plaza de la Independencia, 10",
      vibe: "Bright, airy artisanal bakery with park views.",
      why: "Just a short walk up Alfonso XII, they offer incredible fresh bread, pastries, sandwiches, and coffee right across from the Puerta de Alcalá and El Retiro.",
      imgUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Harina+Plaza+Independencia+Madrid"
    },
    {
      id: "sucre-salon",
      name: "Sucre Salón de Té",
      distance: "~1 min walk",
      address: "Calle Casado del Alisal, 16",
      vibe: "Charming tearoom with homemade cakes.",
      why: "Practically next door to your location. It's a lovely, quiet spot offering specialty teas, coffee, and homemade pastries in the Jerónimos neighborhood.",
      imgUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Sucre+Salon+de+Te+Madrid"
    },
    {
      id: "osom",
      name: "Osom Coffee",
      distance: "~1 min walk",
      address: "Calle de Moratín, 38",
      vibe: "Modern, minimalist, specialty coffee house.",
      why: "It's practically right outside your door on the same street. They serve top-tier specialty coffee, incredible avocado toasts, pancakes, and healthy brunch bowls.",
      imgUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Osom+Coffee+Atelier+Madrid"
    },
    {
      id: "brunchit",
      name: "Brunchit Las Letras",
      distance: "~2 min walk",
      address: "Plaza de Matute, 5",
      vibe: "Bright, vibrant, and extremely popular for a big brunch.",
      why: "Just a few steps away around the corner. They have a massive, beautiful brunch menu—think loaded brioche toasts, eggs benedict, and great smoothies.",
      imgUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Brunchit+Las+Letras+Madrid"
    },
    {
      id: "chocolat",
      name: "Chocolat Madrid",
      distance: "~2 min walk",
      address: "Calle de Santa María, 30",
      vibe: "Traditional, cozy Spanish chocolatería.",
      why: "If you want a classic local experience rather than a modern brunch, head one street over for some of the best authentic churros (or porras) and thick, dark hot chocolate in the neighborhood.",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/960px-Chocolate_con_churros_%2827343655726%29.jpg",
      mapUrl: "https://maps.apple.com/?q=Chocolat+Madrid"
    },
    {
      id: "gosto",
      name: "Gosto Café",
      distance: "~4 min walk",
      address: "Calle del León, 30",
      vibe: "Warm, local, and intimate specialty coffee shop.",
      why: "Located right in the heart of Barrio de las Letras. Known for exceptional coffee, amazing toasts, and homemade pastries in a very relaxed setting.",
      imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Gosto+Cafe+Madrid"
    },
    {
      id: "plantate",
      name: "Plántate Café",
      distance: "~6 min walk",
      address: "Calle del Mesón de Paños, 28",
      vibe: "Green, plant-filled, healthy sanctuary.",
      why: "A gorgeous little cafe filled with plants. They serve top-notch avocado toasts, great matcha, and have plenty of vegan-friendly healthy brunch options.",
      imgUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Plantate+Cafe+Madrid"
    },
    {
      id: "acid",
      name: "Acid Café",
      distance: "~7 min walk",
      address: "Calle de la Magdalena, 27",
      vibe: "Hip, minimalist foodie favorite.",
      why: "Just down toward Antón Martín, this spot is famous for its incredible sourdough bread, seasonal small plates, and some of the best specialty coffee in the city.",
      imgUrl: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=1000",
      mapUrl: "https://maps.apple.com/?q=Acid+Cafe+Madrid"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pb-12">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-sm md:shadow-md md:my-6 md:rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-6 pb-8">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Itinerary
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Madrid Brunch</h1>
          <p className="text-white/90 text-sm font-medium flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Just steps from your location
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
                  <MapPin className="w-3 h-3 mr-1 text-orange-500" />
                  {opt.distance}
                </div>
              </div>
              
              <div className="p-5">
                <h2 className="text-xl font-bold text-neutral-800 mb-1">{opt.name}</h2>
                <a href={opt.mapUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-orange-600 flex items-center mb-3 hover:underline">
                  {opt.address} <span className="ml-2 inline-flex items-center border border-current rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold"><ExternalLink className="w-3 h-3 mr-1" /> Map</span>
                </a>
                
                <div className="bg-orange-50 text-orange-800 rounded-lg p-3 text-sm font-medium mb-4 border border-orange-100/50">
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
          Enjoy! 🥐☕️
        </div>
      </div>
    </div>
  );
}
