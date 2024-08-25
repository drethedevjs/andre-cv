import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import skillsData from "@/data/skillsData";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div className="flex min-h-screen flex-col items-center p-24">
          <img src="/dre-headshot.jpeg" alt="Andre's Headshot" className="size-1/5 rounded-full" />

          <hr className="mt-10 mb-10"></hr>

          <p className="mb-10 text-3xl">ANDRE THOMAS</p>
          <h1 className="text-7xl">Full Stack Engineer</h1>

          <p className="mt-8 text-2xl">Building the Future with Full Stack .NET: Passionate Engineer, Proven Results</p>

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
      </main>
    </>
  );
}
