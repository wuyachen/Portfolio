import {
  mobile,
  backend,
  student,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  gdsc,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Master Student",
    icon: student,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  
];

const technologies = [
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
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Arcelormittal Dofasco",
    icon: gdsc,
    date: "Jan 2021 - Dec 2021",
    points: [
      "Modernized 3 Full-stack web applications using Angular and .NET Core, having a by-weekly demonstration with the Users to gain feedback and work on improvement",
      "Deployed features and bug fixes in an agile environment for production release, Reworked pagination, business logic, and builds for multiple projects to speed up application load times and RESTful API requests by up to 70%.",
      "Integrated SonarQube and achieved over 95% of test Coverage to aid the inspection of code quality.",
      "Utilized JIRA and CI/CD pipelines in Azure DevOps to code, verify, build new app to facilitate a successful parallel launch to production.",
    ],
  },
  {
    title: "Web Development Core Team Lead",
    company_name: "Google Developer Student Club",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Sep 2021",
    points: [
      " Led a team of 7 members to develop the official DSC McMaster University landing page by following an agile development cycle utilizing GatsbyJs and TailwindCSS.",
      " Deployed the website using Google Firebase and GCP to support the visualization of real-time data and target the audiences to check user-stats.",
      " Implemented the Headless Neftlify CMS feature to the site and created a platform to assist people with no coding experience to update the site events and content dynamically."
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Bidmii",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Jul 2020 - Oct 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Responsible for implementing the category search engine of the company website which accepts the user's input and automatically filters out related options by retrieving the RESTFUL API endpoints."
    ],
  },
 
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
