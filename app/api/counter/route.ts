// app/api/counter/route.ts
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// GET: Fetch the current total
export async function GET() {
  const { data, error } = await supabase
    .from('stats')
    .select('total_typed')
    .eq('id', 1)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // FIX: Convert bigint to number (safe for your counter range)
  return NextResponse.json({ total: Number(data.total_typed) });
}

// POST: Increment
export async function POST() {
  try {
    const { error } = await supabase.rpc('increment_typed');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: 'Unexpected error in POST', message: err.message }, { status: 500 });
  }
}
