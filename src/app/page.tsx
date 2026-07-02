import React from 'react';
import { MapPin, Train, Utensils, Wine, Music, Plane, Castle, Anchor, Grape, Home, Coffee, ArrowRight, ShoppingBag, Moon } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spain 2026 Itinerary',
  description: 'Spain trip itinerary and details',
  openGraph: {
    title: 'Spain 2026 Itinerary',
    siteName: 'Spain 2026 Itinerary',
  }
};

export default function SpainItinerary() {
  const days = [
    {
      date: "Wed, Jun 24",
      location: "Burgos",
      icon: <Castle className="w-5 h-5" />,
      events: [
        { time: "9:25 AM", title: "Train Madrid → Burgos", detail: "Renfe from Madrid Chamartin" },
        { time: "Afternoon", title: "Explore Historic Burgos", detail: "Plaza Mayor & Burgos Cathedral" },
        { time: "8:00 PM", title: "Tapas & Views", detail: "Mirador Castillo panoramic view & evening tapas crawl" }
      ]
    },
    {
      date: "Thu, Jun 25",
      location: "San Sebastián",
      icon: <Anchor className="w-5 h-5" />,
      events: [
        { time: "1:24 PM", title: "Train to San Sebastián", detail: "Arrives at 4:46 PM" },
        { time: "5:00 PM", title: "Check-in", detail: "Apartment near La Bretxa Market" },
        { time: "Evening", title: "Legendary Bar Antonio", detail: "1 minute away from apartment" }
      ]
    },
    {
      date: "Fri, Jun 26",
      location: "San Sebastián",
      icon: <Utensils className="w-5 h-5" />,
      events: [
        { time: "11:00 AM", title: "Basque Cooking Class", detail: "La Bretxa Market" },
        { time: "Menu", title: "Local Specialties", detail: "Tortilla, Bacalao, Txuleta, Basque Cheesecake" }
      ]
    },
    {
      date: "Sat, Jun 27",
      location: "Getaria Day Trip",
      icon: <Wine className="w-5 h-5" />,
      events: [
        { time: "2:00 AM", title: "World Cup Watch Party", detail: "Sports Bar for Spain match" },
        { time: "Day Trip", title: "Getaria Adventures", detail: "Balenciaga Museum, Txakoli wine tasting, famous grilled seafood" }
      ]
    },
    {
      date: "Sun, Jun 28",
      location: "Logroño",
      icon: <Coffee className="w-5 h-5" />,
      events: [
        { time: "12:45 PM", title: "Bus to Logroño", detail: "Arrives at 3:00 PM" },
        { time: "Afternoon", title: "Settle In", detail: "Check into Calle San Bartolomé apartment" },
        { time: "8:30 PM", title: "Pincho Crawl", detail: "Calle Laurel & Calle San Juan" }
      ]
    },
    {
      date: "Mon, Jun 29",
      location: "Logroño",
      icon: <Grape className="w-5 h-5" />,
      events: [
        { time: "All Day", title: "Grapegrower for a Day", detail: "Riojatrek vineyards tour" }
      ]
    },
    {
      date: "Tue, Jun 30",
      location: "Madrid",
      icon: <Music className="w-5 h-5" />,
      events: [
        { time: "6:25 AM", title: "Train Logroño → Madrid", detail: "Arrives at 10:18 AM" },
        { time: "3:00 PM", title: "Check-in", detail: "Madrid apartment" },
        { time: "7:00 PM", title: "Flamenco & Drinks", detail: "Lecuvadelola" }
      ]
    },
    {
      date: "Wed, Jul 1",
      location: "Madrid",
      icon: <MapPin className="w-5 h-5" />,
      events: [
        { time: "3:00 PM - 6:00 PM", title: "Madrid Rooftop Bars Tour", detail: "Meet at Starbucks Gran Vía" }
      ]
    },
    {
      date: "Fri, Jul 3",
      location: "Heading Home",
      icon: <Plane className="w-5 h-5" />,
      events: [
        { time: "2:45 PM", title: "Flight MAD → BOS", detail: "Arrives at 4:44 PM in Boston" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pb-12">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-sm md:shadow-md md:my-6 md:rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-amber-500 text-white p-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Spain 2026</h1>
          <p className="text-white/90 text-sm font-medium">
            Burgos • San Sebastián • Logroño • Madrid
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="bg-amber-50 px-6 py-5 border-b border-amber-100">
          <h3 className="text-sm font-bold text-amber-900 mb-3 uppercase tracking-wider">Local Guides</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/madrid-brunch" className="bg-white hover:bg-orange-50 transition-colors border border-amber-200 rounded-lg p-3 shadow-sm flex items-center justify-between group">
              <div className="flex items-center">
                <Coffee className="w-4 h-4 text-orange-500 mr-2" />
                <span className="font-semibold text-neutral-800 text-sm">Brunch</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-orange-500 transition-colors" />
            </Link>
            <Link href="/madrid-desserts" className="bg-white hover:bg-purple-50 transition-colors border border-amber-200 rounded-lg p-3 shadow-sm flex items-center justify-between group">
              <div className="flex items-center">
                <Utensils className="w-4 h-4 text-purple-500 mr-2" />
                <span className="font-semibold text-neutral-800 text-sm">Desserts</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-purple-500 transition-colors" />
            </Link>
            <Link href="/madrid-shopping" className="bg-white hover:bg-pink-50 transition-colors border border-amber-200 rounded-lg p-3 shadow-sm flex items-center justify-between group">
              <div className="flex items-center">
                <ShoppingBag className="w-4 h-4 text-pink-500 mr-2" />
                <span className="font-semibold text-neutral-800 text-sm">Shopping</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-pink-500 transition-colors" />
            </Link>
            <Link href="/madrid-late-night" className="bg-white hover:bg-indigo-50 transition-colors border border-amber-200 rounded-lg p-3 shadow-sm flex items-center justify-between group">
              <div className="flex items-center">
                <Moon className="w-4 h-4 text-indigo-500 mr-2" />
                <span className="font-semibold text-neutral-800 text-sm">Late Night</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-indigo-500 transition-colors" />
            </Link>
            <Link href="/madrid-coffee-parks" className="bg-white hover:bg-emerald-50 transition-colors border border-amber-200 rounded-lg p-3 shadow-sm flex items-center justify-between group">
              <div className="flex items-center">
                <Coffee className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="font-semibold text-neutral-800 text-sm">Coffee / Parks</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-emerald-500 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-6">
          <div className="space-y-8">
            {days.map((day, i) => (
              <div key={i} className="relative">
                {/* Connecting line (if not last) */}
                {i !== days.length - 1 && (
                  <div className="absolute top-8 left-[19px] w-px h-[calc(100%+32px)] bg-neutral-200" />
                )}
                
                {/* Day Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-sm">
                    {day.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-neutral-800">{day.location}</h2>
                    <p className="text-sm font-semibold text-red-600">{day.date}</p>
                  </div>
                </div>

                {/* Events list */}
                <div className="pl-14 space-y-4">
                  {day.events.map((event, j) => (
                    <div key={j} className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
                      <div className="text-xs font-bold text-neutral-500 mb-1">{event.time}</div>
                      <div className="font-semibold text-neutral-800 mb-0.5">{event.title}</div>
                      <div className="text-sm text-neutral-600 leading-snug">{event.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center p-6 text-neutral-400 text-xs font-medium">
          Buen viaje! 🇪🇸
        </div>
      </div>
    </div>
  );
}
