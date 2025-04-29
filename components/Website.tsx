import { WebsiteProps } from "@/interfaces/WebsiteProps";
import Image from "next/image";

const Website: React.FC<{ website: WebsiteProps }> = ({ website }) => {
  return (
    <div>
      <div className="relative group w-80 m-5 shadow-lg rounded-md">
        <Image
          src={website.imageSrc}
          alt={website.alt}
          className="rounded-lg"
          width={website.width}
          height={website.height}
        />
        <a href={website.link} target={website.target}>
          <div className="overlay">
            <span className="text-xl font-bold">{website.name}</span>
          </div>
        </a>
      </div>
      <div className="flex flex-wrap gap-1 ml-5 sm:w-96">
        {website.technologies.map((t: string, idx: number) => {
          return (
            <span key={idx} className="tech-used">
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Website;
