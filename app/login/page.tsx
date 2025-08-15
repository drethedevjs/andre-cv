'use client'
import { FormEvent, useRef, useState } from "react";
import { getSupabaseBrowserClient } from "../supabase-utils/browserClient";
import { useRouter } from "next/navigation";

const Login = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const supabase = getSupabaseBrowserClient();
  const [ loggedIn, setLoggedIn ] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email!,
        password: password!
      });

      if (error) throw error;
      
      if (data?.user) {
        setInterval(() => router.push("/"), 3000);
        setLoggedIn(true);
      }
      else
        alert("Could not sign in");
    } catch (error:any) {
      console.error("Failed to Log In:", error.message)
    }
  }

  return loggedIn ?
    <>
      <h1>You</h1>
      <h1>Logged</h1>
      <h1>In!</h1>
      <p>You will be navigated to the home page shortly.</p>
      <small>If not, something went wrong 😬</small>
    </>
  :
    <>
      <h1 className="mb-10 text-center">Login</h1>
      <form 
        className="flex flex-col w-1/2 mx-auto" 
        onSubmit={handleLogin}
        action="/auth/pw-login"
        method="POST"
      >
        <label>Email:</label>
        <input type="email" ref={emailInputRef} required />

        <label>Password:</label>
        <input type="password" ref={passwordInputRef} required />

        <input className="btn" type="submit" value="Login" required />
      </form>
    </>
}
 
export default Login;