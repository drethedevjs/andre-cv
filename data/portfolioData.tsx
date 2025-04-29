import { WebsiteProps } from "@/interfaces/WebsiteProps";

const portfolioData: Array<WebsiteProps> = [
  {
    imageSrc: "/portfolio/nam-site.png",
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
    imageSrc: "/portfolio/drecv-site.png",
    alt: "Screenshot of the Andre CV Website",
    classes: "overlay",
    width: 320,
    height: 221,
    link: "/",
    name: "Andre CV",
    target: "_self",
    technologies: ["Next.js", "TypeScript", "React.js", "JavaScript"]
  },
  {
    imageSrc: "/portfolio/npp-site.png",
    alt: "Screenshot of the Next Play Project Website",
    classes: "overlay",
    width: 320,
    height: 221,
    link: "https://nextplayproject.com",
    name: "The Next Play Project",
    target: "_blank",
    technologies: [
      "Vue.js",
      "Axios",
      "Vite",
      "Yup",
      "Tailwind",
      "Vee Validate",
      "TypeScript",
      "Express"
    ]
  },
  {
    imageSrc: "/portfolio/over-the-river.png",
    alt: "Screenshot of a family reunion website",
    classes: "overlay",
    width: 320,
    height: 221,
    link: "https://over-the-river.vercel.app/",
    name: "Over the River",
    target: "_blank",
    technologies: [
      "Vue.js",
      "Tailwind",
      "Vee Validate",
      "TypeScript",
      "Flowbite"
    ]
  },
  {
    imageSrc: "/portfolio/billow-site.png",
    alt: "Screenshot of Billow's website",
    classes: "overlay",
    width: 320,
    height: 221,
    link: "https://github.com/drethedevjs/billow/",
    name: "Billow",
    target: "_blank",
    technologies: [
      "Next.js",
      "React.js",
      "Redux",
      "Tailwind",
      "Vee Validate",
      "TypeScript",
      "Flowbite"
    ]
  },
  {
    imageSrc: "/portfolio/ep-site.png",
    alt: "Screenshot of the Eleventh & Pemberton site Website",
    classes: "overlay",
    width: 320,
    height: 221,
    link: "https://eleventhandpemberton.com",
    name: "Eleventh & Pemberton",
    target: "_blank",
    technologies: [
      "Vue.js",
      "Tailwind",
      "Vee Validate",
      "TypeScript",
      "dasiyUI",
      "Axios",
      "Express.js"
    ]
  }
];

export default portfolioData;
