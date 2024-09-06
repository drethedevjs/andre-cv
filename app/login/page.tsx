'use client'
import { FormEvent, useRef } from "react";

const Login = () => {
  window.location.href = "/";

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    alert("logged in!");
  }

  return (
    <main className="container mx-auto mt-10">
      <h1 className="mb-10 text-center">Login</h1>
      <form className="flex flex-col w-1/2 mx-auto" onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" ref={emailInputRef} required />

        <label>Password:</label>
        <input type="password" />

        <input className="btn-invert" type="submit" value="Login" ref={passwordInputRef} required />
      </form>
    </main>
  );
}
 
export default Login;