'use client';
import React, { useEffect, useState } from 'react';
import { Plane, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function FlightStatus() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/flight')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load flight data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm animate-pulse mt-3">
        <div className="h-4 bg-neutral-200 rounded w-1/3 mb-4"></div>
        <div className="h-10 bg-neutral-100 rounded w-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center text-red-600 text-sm mt-3">
        <AlertCircle className="w-4 h-4 mr-2" />
        {error}
      </div>
    );
  }

  const isMock = data?.isMock;
  
  // Lock onto the specific July 3rd flight
  let flightInfo = null;
  if (isMock) {
    flightInfo = data;
  } else if (data?.data && Array.isArray(data.data)) {
    // Try to find tomorrow's flight specifically
    flightInfo = data.data.find((f: any) => 
      f.flight_date === '2026-07-03' || 
      (f.departure?.scheduled && f.departure.scheduled.includes('2026-07-03'))
    );
  }

  // If tomorrow's flight isn't in the API response yet (since it's tracking today's active flight)
  const isFutureFallback = !isMock && !flightInfo;
  
  const depTime = flightInfo?.departure?.estimated || flightInfo?.departure?.scheduled || '2026-07-03T14:45:00Z';
  const arrTime = flightInfo?.arrival?.estimated || flightInfo?.arrival?.scheduled || '2026-07-03T16:44:00Z';
  
  const depGate = flightInfo?.departure?.gate || 'TBD';
  const depTerminal = flightInfo?.departure?.terminal || '1';
  
  const status = isFutureFallback ? 'scheduled' : (flightInfo?.flight_status || 'scheduled');
  
  const formatTime = (isoString: string) => {
    try {
      // Very simple formatter so we don't mess up timezones locally
      const d = new Date(isoString);
      return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="bg-white border border-blue-100 rounded-xl overflow-hidden shadow-sm mt-3">
      <div className="bg-blue-50/50 border-b border-blue-100 p-3 flex justify-between items-center">
        <div className="flex items-center text-blue-900 font-bold">
          <Plane className="w-4 h-4 mr-1.5 text-blue-600" />
          Delta DL63
        </div>
        <div className="flex items-center text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
          {status === 'active' ? <Clock className="w-3 h-3 mr-1" /> : <CheckCircle2 className="w-3 h-3 mr-1" />}
          {status.toUpperCase()}
        </div>
      </div>
      
      <div className="p-4 flex items-center justify-between">
        <div className="text-center">
          <div className="text-3xl font-black text-neutral-800">MAD</div>
          <div className="text-xs font-bold text-neutral-500 mb-1">MADRID</div>
          <div className="text-lg font-bold text-blue-600">{isMock || isFutureFallback ? "2:45 PM" : formatTime(depTime)}</div>
          <div className="text-xs text-neutral-500 mt-1">Terminal {depTerminal} • Gate {depGate}</div>
        </div>

        <div className="flex-1 px-4 flex flex-col items-center justify-center relative">
          <div className="w-full h-px border-t-2 border-dashed border-neutral-300 relative top-1"></div>
          <Plane className="w-5 h-5 text-neutral-400 absolute top-1/2 -translate-y-1/2" />
          <div className="text-[10px] uppercase font-bold text-neutral-400 mt-3 bg-white px-2">8h 59m</div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-black text-neutral-800">BOS</div>
          <div className="text-xs font-bold text-neutral-500 mb-1">BOSTON</div>
          <div className="text-lg font-bold text-blue-600">{isMock || isFutureFallback ? "4:44 PM" : formatTime(arrTime)}</div>
          <div className="text-xs text-neutral-500 mt-1">Terminal E</div>
        </div>
      </div>
      
      {isMock && (
        <div className="bg-amber-50 border-t border-amber-100 p-2 text-[10px] text-amber-700 font-medium text-center flex items-center justify-center">
          <AlertCircle className="w-3 h-3 mr-1" />
          LIVE DATA PAUSED: Add AVIATIONSTACK_API_KEY in Vercel to activate
        </div>
      )}
    </div>
  );
}
