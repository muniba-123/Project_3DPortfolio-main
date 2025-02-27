export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX Developer",
    icon: "/backend.webp",
  },
  {
    title: "Full Stack Web Developer",
    icon: "/web.webp",
  },
  {
    title: "Software Engineer",
    icon: "/creator.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.JS",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
];

const experiences = [
  {
    title: "Front end engineer",
    company_name: "TEO",
    icon: "",
    iconBg: "#383E56",
    date: "2020 -  Present",
    points: [
      "Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
      "Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
      "Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Upwork",
    icon: "",
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
      "Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
      "Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Muniba Hina",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/muniba-hina-22342b111/",
  },
  {
    id: 4,
    testimonial:
      "Also do check out my UI/UX Portfolio where I have shared by design studies.",
    name: "Muniba Hina",
    image: "/socialmedia/portfolio.svg",
    link: "",
  },
  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Muniba Hina",
    image: "/tech/github.webp",
    link: "https://github.com/muniba-123",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Web";
}[] = [
  {
    name: "Sparkbright Engineering Portfolio",
    description:
      " Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
    tags: [
      {
        name: "next",
        color: "red-text-gradient",
      },
      {
        name: "Next UI",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/sparkbright.png",
    source_code_link: "https://github.com/muniba-123/React-Admin-DashBoard",
    platform: "Web",
    deploy_link: "https://sparkbright.in/",
  },
  {
    name: "HooBank",
    description:
      "A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
    tags: [
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/hoobank.webp",
    source_code_link: "https://github.com/muniba-123/hoobank",
    platform: "Vercel",
    deploy_link: "https://hoobankbyom.netlify.app/",
  },
  {
    name: "MERN Dashboard",
    description:
      " Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/mern.png",
    source_code_link: "https://github.com/muniba-123/Project_MERN-Dashboard",
    platform: "Web",
    deploy_link: "https://admin-frontend-r705.onrender.com/",
  },
  {
    name: "Metaverse Web 3.0",
    description:
      "A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/metaverse.png",
    source_code_link: "https://github.com/muniba-123/Project_Metaverse",
    platform: "Vercel",
    deploy_link: "https://project-metaverse-beta.vercel.app/",
  },
  {
    name: "Issue Tracker",
    description:
      "A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "shadCN",
        color: "orange-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/issuetracker.png",
    source_code_link: "https://github.com/muniba-123/Project_Issue-Tracker",
    platform: "Vercel",
    deploy_link: "https://project-issue-tracker.vercel.app/",
  },
  {
    name: "3D Portfolio",
    description: "A modern 3D Developer Portfolio made using Three.js",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/portfolio.png",
    source_code_link: "https://github.com/muniba-123/Project_3DPortfolio-main",
    platform: "Vercel",
    deploy_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
