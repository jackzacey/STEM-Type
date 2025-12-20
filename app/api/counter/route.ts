// app/api/counter/route.ts
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// Force Node.js runtime for consistency (recommended)
export const runtime = 'nodejs';

export async function GET() {
  const { data, error } = await supabase
    .from('stats')
    .select('total_typed')
    .eq('id', 1)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Convert bigint to regular number for safe JSON serialization
  return NextResponse.json({ total: Number(data.total_typed) });
}

export async function POST() {
  const { error } = await supabase.rpc('increment_typed');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
