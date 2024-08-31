import Image from "next/image";
import portfolioData from "@/data/portfolioData";
import Website from "./Website";
import { WebsiteProps } from "@/interfaces/WebsiteProps";

const Portfolio = () => {
  return (
    <div className="container mx-auto sm:px-20 px-4 mb-10">
      <h2>Portfolio</h2>
      <div className="grid grid-cols-3 gap-10">
          {
            portfolioData.map((pd: WebsiteProps, idx: number) => {
              return <Website key={idx} website={pd} />
            })
          }
      </div>
    </div>
  );
}
 
export default Portfolio;