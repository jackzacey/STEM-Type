import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  const { error } = await supabase.rpc("increment_terms", { amount: 1 });

  if (error) return Response.json({ error }, { status: 500 });
  return Response.json({ success: true });
}
