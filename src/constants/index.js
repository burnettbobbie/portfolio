import {
  mobile,
  backend,
  creator,
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
  squarespace,
  express,
  sass,
  php,
  sql,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  otzi,
  ocs,
  hospital,
  theatre
} from "../assets";

export const navLinks = [
  {
    id: "skills",
    title: "Skills",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
  {
    name: "squarespace",
    icon: squarespace,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "sql",
    icon: sql,
  }

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "The Local Theatre Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    tags: [
      {
        name: "PHP",
        color: "white",
        icon: php
      },
      {
        name: "SQL",
        color: "white",
        icon: sql
      },
      {
        name: "css",
        color: "white",
        icon: css
      },
      {
        name: "HTML5",
        color: "white",
        icon: html
      },
      {
        name: "tailwind",
        color: "white",
        icon: tailwind
      }
    ],
    image: theatre,
    source_code_link: "https://github.com/",
  },
  {
    name: "Obanshire Cub Scouts",
    description:
      "Web-based platform that  I crafted a user-friendly website that serves as a hub for the Cub Scouts community. With a sleek design and intuitive navigation, visitors can easily explore and utilize its features. The site offers a comprehensive event management system, allowing users to view upcoming activities, register, and RSVP. An interactive calendar keeps families informed and helps them plan their involvement.",
    tags: [
      {
        name: "mongodb",
        color: "white",
        icon: mongodb
      },
      {
        name: "express.js",
        color: "white",
        icon: express
      },
      {
        name: "react",
        color: "white",
        icon: reactjs
      },
      {
        name: "node.js",
        color: "white",
        icon: nodejs
      },
      {
        name: "SCSS",
        color: "white",
        icon: sass
      },
    ],
    image: ocs,
    source_code_link: "https://github.com/",
  },

  {
    name: "OTZI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    tags: [
      {
        name: "git",
        color: "white",
        icon: git,
      },
      {
        name: "javascript",
        color: "white",
        icon: javascript,
      },
      
      {
        name: "squarespace",
        color: "white",
        icon: squarespace,
      },
      {
        name: "css3",
        color: "white",
        icon: css,
      },
    ],
    image: otzi,
    source_code_link: "https://github.com/",
  },

  {
    name: "Clydeside Children's Hospital Portal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    tags: [
      {
        name: "mongodb",
        color: "white",
        icon: mongodb
      },
      {
        name: "express.js",
        color: "white",
        icon: express
      },
      {
        name: "react",
        color: "white",
        icon: reactjs
      },
      {
        name: "node.js",
        color: "white",
        icon: nodejs
      },
      {
        name: "SCSS",
        color: "white",
        icon: sass
      }
    ],
    image: hospital,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
