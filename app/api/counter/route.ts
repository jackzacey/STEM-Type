// app/api/counter/route.ts
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// GET: Fetch the current total
export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client not initialized (missing env vars?)' }, { status: 500 });
    }

    const { data, error } = await supabase
      .from('stats')
      .select('total_typed')
      .eq('id', 1)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message, details: error }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: 'No row found (table empty or wrong id)' }, { status: 500 });
    }

    return NextResponse.json({ total: data.total_typed });
  } catch (err: any) {
    return NextResponse.json({ error: 'Unexpected error in API route', message: err.message }, { status: 500 });
  }
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
