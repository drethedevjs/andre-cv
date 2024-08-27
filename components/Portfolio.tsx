import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="container mx-auto sm:px-20 px-4 mb-10">
      <h2>Portfolio</h2>
      <div className="relative group w-80 m-5">
        <Image
            src="/nam-home-page.png"
            alt="screenshot of Not Another Mug Website"
            className="hover:bg-slate-600 rounded-lg"
            width={320}
            height={221}
          />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
          <a href="https://not-another-mug.vercel.app/" target="_blank">
            <span className="text-xl">Not Another Mug</span>
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Portfolio;