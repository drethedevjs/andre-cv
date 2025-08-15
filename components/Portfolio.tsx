import portfolioData from "@/data/portfolioData";
import { WebsiteProps } from "@/interfaces/WebsiteProps";
import Website from "./Website";

const Portfolio = () => {
  return (
    <div className="container mx-auto lg:px-20 px-4 mb-10">
      <h2>Portfolio</h2>
      <div className="sm:grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-32 gap-10">
        {portfolioData.map((pd: WebsiteProps) => {
          return <Website key={pd.id} website={pd} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
