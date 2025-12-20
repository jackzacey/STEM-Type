import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Force Node runtime

export async function GET() {
  const { data, error } = await supabase
    .from('stats')
    .select('total_typed')
    .eq('id', 1)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    total: Number(data.total_typed), // Fix BigInt serialization
  });
}

export async function POST() {
  const { error } = await supabase.rpc('increment_typed');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
