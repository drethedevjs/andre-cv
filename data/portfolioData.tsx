import { WebsiteProps } from "@/interfaces/WebsiteProps";

const portfolioData: Array<WebsiteProps> = [
  {
    imageSrc: "/nam-home-page.png",
    alt: "Screenshot of Not Another Mug Website",
    classes: "hover:bg-primary rounded-lg",
    width: 320,
    height: 221,
    link: "https://not-another-mug.vercel.app/",
    name: "Not Another Mug",
    target: "_blank",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript"
    ]
  },
  {
    imageSrc: "/andre-cv-ss.png",
    alt: "Screenshot of the Andre CV Website",
    classes: "overlay",
    width: 320,
    height: 221,
    link: "/",
    name: "Andre CV",
    target: "_self",
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "JavaScript"
    ]
  },
  {
    imageSrc: "/nextplayproject-screenshot.png",
    alt: "Screenshot of the Next Play Project Website",
    classes: "overlay",
    width: 320,
    height: 221,
    link: "https://nextplayproject.com",
    name: "The Next Play Project",
    target: "_blank",
    technologies: [
      "Vue.js",
      "Tailwind"
    ]
  }
]

export default portfolioData;