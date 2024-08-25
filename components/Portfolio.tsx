const Portfolio = () => {
  return (
    <div className="container mx-auto px-20 mb-10">
      <h2>Portfolio</h2>
      <div className="relative group w-80 m-5">
        <img
            src="/nam-home-page.png"
            alt="screenshot of Not Another Mug Website"
            className="hover:bg-slate-600 rounded-lg"
          />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
          <span className="text-xl">Not Another Mug</span>
        </div>
      </div>
    </div>
  );
}
 
export default Portfolio;