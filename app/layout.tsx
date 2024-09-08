import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Engineer | Andre Thomas",
  description: "The CV for Full Stack Engineer, Andre Thomas."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="container mx-auto mt-10 flex-grow">
          {children}
        </main>
        <Footer opacity={30} />
      </body>
    </html>
  );
}
