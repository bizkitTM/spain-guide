export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import { NextResponse } from 'next/server';

export async function GET() {
  const flightKey = process.env.AVIATIONSTACK_API_KEY;
  
  if (!flightKey) {
    // Return mock data so the app builds and shows the UI properly
    return NextResponse.json({
      isMock: true,
      flight: "DL63",
      status: "scheduled",
      departure: { gate: "TBD", terminal: "1", scheduled: "2026-07-03T14:45:00+00:00", estimated: "2026-07-03T14:45:00+00:00" },
      arrival: { gate: "E", terminal: "E", scheduled: "2026-07-03T16:44:00+00:00", estimated: "2026-07-03T16:44:00+00:00" }
    });
  }
  
  try {
    const res = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${flightKey}&flight_iata=DL63`, { cache: 'no-store' });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch live flight data" }, { status: 500 });
  }
}
