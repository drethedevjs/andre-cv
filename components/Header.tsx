"use client";
import Link from "next/link";
import ResumeDownloadButton from "@/components/pdf/ResumeDownloadButton";

export default function Header() {
  return (
    <header className="flex flex-row-reverse p-5">
      <ResumeDownloadButton />
      <Link className="header-link" href="/chat">
        Chat with Me
      </Link>
      <Link className="header-link" href="/">
        Home
      </Link>
    </header>
  );
}
