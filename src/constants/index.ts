import codiea from "../assets/codiea.png";
import heapware from "../assets/heapware.png";
import lms from "../assets/lms.png";
import mall from "../assets/mall.png";
import crm from "../assets/crm.png";
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  // mobile,
  // backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  backend,
  // git,
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  
  // threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer Intern",
    companyName: "Codiea.io",
    icon: codiea,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Developed responsive web pages and user interfaces using HTML, CSS, Bootstrap, and JavaScript.",
      "Implemented interactive components, dynamic layouts, and optimized forms to enhance user experience.",
      "Collaborated with designers and backend developers to ensure seamless integration and consistent design.",
      "Focused on cross-browser compatibility and mobile responsiveness for a smooth user journey.",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Heapware Technologies",
    icon: heapware,
    iconBg: "#E6DEDD",
    date: "june 2025 - September 2025",
    points: [
      "Developed responsive and interactive web applications using React.js, Next.js, and Tailwind CSS.",
      "Built reusable UI components and dynamic layouts to deliver seamless and engaging user experiences.",
      "Integrated APIs and managed state efficiently using React Hooks and Context API.",
      "Collaborated with designers and backend developers to ensure consistency, scalability, and clean architecture.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Learning Management System",
    description:
      "Built a full-featured LMS with Admin, Teacher, Student, and Staff modules.Implemented course management, quizzes, and attendance tracking with a responsive UI designed in Tailwind CSS and secure role-based access using Node.js and MongoDB.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: lms,
    sourceCodeLink: "https://github.com/xDanial5959",
  },
  {
    name: "Emaan-Mall",
    description:
      "Developed a responsive e-commerce web app with product listings, dynamic carts, and secure checkout. Built a modern UI using Tailwind CSS and integrated Node.js APIs for authentication, product management, and order handling.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: mall,
    sourceCodeLink: "https://github.com/xDanial5959/imaan-mall",
  },
  {
    name: "Real Estate CRM Web Application",
    description:
      "Developed a dynamic web platform integrating real estate listings with CRM functionalities. Implemented property management, client tracking, and lead management features with a responsive and modern UI built in Tailwind CSS, leveraging Next.js for performance, SEO, and TypeScript for scalable, maintainable code.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    sourceCodeLink: "https://github.com/xDanial5959",
  },
];

export { services, technologies, experiences, testimonials, projects };
