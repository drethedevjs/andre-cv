import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./app/supabase-utils/reqResClient";

export async function middleware(req: NextRequest) {
  console.log("---- MIDDLEWARE -----");
  const { supabase, response } = getSupabaseReqResClient({ request: req });
  const sessionUser = await supabase.auth.getUser();
  const requestedPath = req.nextUrl.pathname;

  console.log("requestedPath", requestedPath);
  console.log("sessionUser", sessionUser.data.user?.email);
  console.error("session Error", sessionUser.error);

  // Allow access to `/login` path without being logged in
  if (requestedPath === "/login"){
    if (!sessionUser.data.user)
      return NextResponse.next();
    else
      return NextResponse.redirect(new URL("/", req.url));
  }

  if (requestedPath !== "/" && sessionUser.error)
    return NextResponse.redirect(new URL("/login", req.url));

  return response.value;
}

export const config = {
  // Apply middleware to all routes except `/login` and static files
  matcher: ["/((?!.*\\.).*)"]
};
