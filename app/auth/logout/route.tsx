import { getSupabaseBrowserClient } from "@/app/supabase-utils/browserClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = getSupabaseBrowserClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL("/", request.url));
}
