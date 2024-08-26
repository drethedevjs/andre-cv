import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";
import skillsData from "@/data/skillsData";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div className="flex min-h-screen flex-col items-center sm:p-24 px-4">
          <img 
            src="/dre-headshot.jpeg"
            alt="Andre's Headshot"
            className="flex-initial max-w-sm max-h-sm rounded-full"
            // className="xl:size-1/5 lg:size-2/5 md:size-96 rounded-full"
          />

          <hr className="mt-10 mb-10"></hr>

          <SocialLinks opacity={100} />

          <p className="mb-10 text-3xl">ANDRE THOMAS</p>
          <h1>Full Stack Engineer</h1>

          <p className="mt-8 lg:text-2xl md:text-xl text-center">
            Building the Future with Full Stack .NET: Passionate Engineer, Proven Results
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
        <Footer opacity={30} />
      </main>
    </>
  );
}
