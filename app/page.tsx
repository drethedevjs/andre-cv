import Experience from "@/components/Experience";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div className="flex min-h-screen flex-col items-center p-24">
          <div className="bg-slate-500 size-80 rounded-full"></div>
          <hr className="mt-10 mb-10"></hr>
          <h1 className="mb-10">ANDRE THOMAS</h1>
          <h2 className="text-8xl">Full Stack Engineer</h2>
          <p className="mt-8">Building the Future with Full Stack .NET: Passionate Engineer, Proven Results</p>

          <button className="mt-20 bg-slate-600 hover:bg-slate-400 rounded-lg p-4 text-white">Contact Me</button>
        </div>
        
        <Experience />
      </main>
    </>
  );
}
