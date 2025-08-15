"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row-reverse p-5">
      <Link
        className="header-link font-semibold text-primary"
        href="https://drive.google.com/file/d/1nwLRBIDH2DdHdd9qMDSnSge1UvkBzoo4/view"
        target="_blank"
      >
        Download Resume
      </Link>
      <Link className="header-link" href="/">
        Home
      </Link>
    </header>
  );
}
