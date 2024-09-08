'use client'
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import skillsData from "@/data/skillsData";
import Image from "next/image";
import { useEffect } from "react";
import { getSupabaseBrowserClient } from "@/app/supabase-utils/browserClient";

export default function Home() {
  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.storage.listBuckets().then((value) => {
      console.log("Bucket List", value)
      return value;
    }
  )}, []);

  return (
    <>
      <div className="mt-10">
        <div className="flex min-h-screen flex-col items-center sm:p-24 px-4">
          <Image
            src="/dre-headshot.jpeg"
            alt="Andre's head shot"
            width={400}
            height={400}
            priority={true}
            className="xl:size-1/5 lg:size-2/5 md:size-96 size-60 rounded-full"
          />

          <hr className="mb-10"></hr>

          <SocialLinks opacity={100} />

          <p className="mb-10 text-3xl">ANDRE THOMAS</p>
          <h1>Full Stack Engineer</h1>

          <p className="mt-8 lg:text-2xl md:text-xl text-center">
            Building the Future with .NET: Passionate Engineer, Proven Results
          </p>

          <a
            href="mailto:drethedevjs@gmail.com?subject=Dev%20Opportunity"
            className="btn-lg mt-20"
          >
            Contact Me
          </a>
        </div>

        <Experience />
        <Skills skills={skillsData} />
        <Education />
        <Portfolio />
      </div>
    </>
  );
}
