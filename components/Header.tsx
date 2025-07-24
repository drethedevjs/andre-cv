"use client";
import { getSupabaseBrowserClient } from "@/app/supabase-utils/browserClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const fetchAuthState = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    fetchAuthState();

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setIsAuthenticated(false);
        router.push("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, router]);

  return (
    <header className="flex flex-row-reverse p-5 m-5">
      <Link
        className="header-link font-semibold"
        href="https://drive.google.com/file/d/1nwLRBIDH2DdHdd9qMDSnSge1UvkBzoo4/view"
        target="_blank"
      >
        Download Resume
      </Link>
      {!isAuthenticated ? (
        <Link className="header-link" href="/login">
          Login
        </Link>
      ) : (
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
      )}
      <Link className="header-link" href="/">
        Home
      </Link>
    </header>
  );
}
