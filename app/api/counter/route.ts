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
    return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
  }

  return NextResponse.json({ total: data.total_typed });
}

// POST: Increment the counter by 1 (called when someone perfectly types a term)
export async function POST() {
  const { error } = await supabase.rpc('increment_typed');

  if (error) {
    return NextResponse.json({ error: 'Failed to increment' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
