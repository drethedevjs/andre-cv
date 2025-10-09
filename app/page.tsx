// 'use client'
import Education from "@/components/Education";
import ExperienceSection from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import skillsData from "@/data/skillsData";
import { Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex min-h-screen flex-col items-center sm:p-24 px-4">
        <Image
          src="/dre-headshot.jpeg"
          alt="Andre's head shot"
          width={500}
          height={500}
          priority={true}
          className="xl:size-2/5 lg:size-2/5 md:size-96 size-60 rounded-full"
        />

        <hr className="mb-10"></hr>

        <SocialLinks
          opacity={100}
          color={"text-secondary"}
          hoverColor={"hover:text-primary"}
        />

        <p className="mb-10 text-3xl">ANDRE THOMAS</p>
        <h1 className="cv-gradient">Full Stack Engineer</h1>

        <p className="mt-8 lg:text-2xl md:text-xl text-center">
          Building the Future with JavaScript and .NET: Passionate Engineer,
          Proven Results
        </p>
        <div className="flex flex-row gap-4">
          <a
            href="mailto:drethedevjs@gmail.com?subject=Dev%20Opportunity"
            className="btn-lg mt-20"
          >
            Contact Me
          </a>
          <Link href="/chat" className="btn-lg mt-20 flex flex-row gap-3">
            <Bot size={24} />
            AI Chatbot
          </Link>
        </div>
      </div>

      <ExperienceSection />
      <Skills skills={skillsData} />
      <Education />
      <Portfolio />
    </section>
  );
}
