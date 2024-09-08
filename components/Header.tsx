'use client'
import { getSupabaseBrowserClient } from "@/app/supabase-utils/browserClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT")
        router.push("/");
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="flex flex-row-reverse p-5 m-5">
        <Link
          className="header-link"
          href="https://drive.google.com/file/d/1nwLRBIDH2DdHdd9qMDSnSge1UvkBzoo4/view?usp=sharing"
          target="_blank"
        >
          Download Resume
        </Link>
        <Link
          className="header-link"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="header-link"
          href="/logout"
          prefetch={false}
          onClick={(e) => {
            e.preventDefault();
            supabase.auth.signOut();
          }}
        >
          Log Out
        </Link>
        <Link
          className="header-link"
          href="/"
        >
          Home
        </Link>
    </header>
   );
}