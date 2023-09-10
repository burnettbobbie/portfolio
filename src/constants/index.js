import { fadeIn } from "../utils/motion";


import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  squarespace,
  express,
  sass,
  php,
  sql,
  otzi,
  otzi1,
  otzi2,
  otzi3,
  otzi4,
  otzi5,
  otzi6,
  ocs,
  ocs1,
  ocs2,
  ocs3,
  ocs4,
  ocs5,
  ocs6,
  hospital,
  hosp1,
  hosp2,
  hosp3,
  hosp4,
  hosp5,
  hosp6,
  hosp7,
  theatre,
  ltclogin,
  ltcregister,
  ltcadmin,
  ltcusers,
  ltcblogman,
  ltcblogex,
  skillsjs,
  skillscss,
  skillshtml,
  skillsreact,
  skillstailwind,
  skillsexpress,
  skillsmongo,
  skillsnode,
  skillsSQL,
  skillsPHP,
  skillsgit,
  skillsfigma,
  skillsnpm

} from "../assets";

export const navLinks = [
  {
    id: "skills",
    title: "SKiLLS",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "Fullstack Developer"
  },
  {
    title: "React Developer"
  },
  {
    title: "UI Designer"
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
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



const projects = [
  {
    name: "OTZI",
    description: "This was my first paid role after completing my course. The client wanted a website which was easy to maintain and update in the future, as well as seamless integration with their administrative system making the choice of a CMS most logical. It was useful to gain an understanding of using other content management systems, having previously worked with WordPress and modifying the Squarespace template code to afford a more engaging user experience. I particularly enjoyed the combining of custom code with Squarespace’s drag-and-drop interface, which facilitated a swift and streamlined development process, resulting in a fully responsive outcome that met and surpassed the client’s requirements. ",
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
    images: [otzi2, otzi1, otzi,otzi3, otzi4,otzi5, otzi6],
    source_code_link: "https://github.com/burnettbobbie/otzi",
    view_site: "https://otzi.ltd/"
  },
  {
    name: "The Local Theatre Company",
    description:
    "I designed and developed a dynamic prototype for 'The Local Theatre Company,' featuring a blog-style platform for theatre enthusiasts to engage through comments on production articles. The project includes user sessions, registrations, logins, and distinct admin privileges. Admins oversee comments, manage user data, and create, update, and delete articles. The use of PHP and an SQL database managed via PhpMyAdmin ensured data storage efficiency and smooth integration whilst the interface boasts a clean, intuitive design focused on simplicity, placing theatre comments, writing and engagement at the forefront of the site.",
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
    images:[ theatre, ltclogin, ltcregister, ltcadmin, ltcusers, ltcblogman, ltcblogex],
    source_code_link: "https://github.com/burnettbobbie/theatre-blog-prototype",
    view_site: "https://rburnett.student-hosting.college/TheLocalTheatreCompany/"
  },
  {
    name: "Obanshire Cub Scouts",
    description: "In accordance with an SQA brief, I built a comprehensive website serving Obanshire Club Scouts—a local Scouts branch and their cub members, guardians, and staff. The site's multifaceted purpose covers crucial club info, supporting activity coordination through a helper scheme. Central to its goal is providing general club, Cub Scouts, and badge details, including printing and search features. It's also a resource for guardian helpers, guiding disclosure procedures and registration. Once registered, helpers gain access using dedicated credentials to manage contacts, disclosures, and availability. Event, activity info, training resources, and photo uploads enhance the site. Staff can securely login to manage events and view volunteer information and availability. The project's aim is an informative, interactive, secure platform for effective coordination and engagement.",
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
    images: [ocs6, ocs1, ocs3, ocs4, ocs5],
    source_code_link: "https://github.com/burnettbobbie/ObanshireCubScouts",
    view_site: "https://ocs-client.netlify.app/"
  },

  {
    name: "Clydeside Children's Hospital Portal",
    description: " For my first MERN project, I developed an interactive prototype targeting child patients aged 7 to 12. The focus was on usability, education, and engagement. The application ensures cross-device functionality, incorporating user registration and login. It provides patient profiles, offering appointment and medication details. Featuring animations, graphics, games, videos, and a children's wing map, the app engages users with both entertainment and informative content. Admin privileges encompass patient data management and a bulletin board. It was a substantial learning curve with potential for enhancements, and served as a solid foundation for future endeavours.",
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
    images: [hospital, hosp1, hosp2, hosp4, hosp5, hosp6, hosp7],
    source_code_link: "https://github.com/burnettbobbie/childrens-hospital-portal",
    view_site: 'https://clydeside-childrens-hospital-portal.netlify.app/'
  }
];
const skills = [
  {
    skillImage: skillshtml,
    skillAlt: "HTML icon",
    skillDescription: "HTML5",
    variants: fadeIn("right", "spring", 0.1),
    detailedDescription:
      "I've employed HTML5 to craft well-structured web content, optimizing it for accessibility, search engines, and mobile devices. Additionally, I've explored its capabilities in creating responsive web components and semantic layouts.",

  },
  {
    skillImage: skillscss,
    skillAlt: "CSS icon",
    skillDescription: "CSS3",
    variants: fadeIn("right", "spring", 0.2),
    detailedDescription:"Beyond styling, I've mastered advanced CSS techniques such as custom properties and animations to maintain consistent design themes across websites. I've also employed CSS preprocessors like Sass to streamline my stylesheets and boost development efficiency.",
  },
  {
    skillImage: skillsjs,
    skillAlt: "JavaScript icon",
    skillDescription: "JavaScript",
    variants: fadeIn("right", "spring", 0.3),
    detailedDescription:"JavaScript has been a cornerstone for me when it comes to developing interactive web applications. I've implemented advanced features like asynchronous programming, custom event handling, and dynamic content loading, enhancing user engagement and site performance.",
  },
  {
    skillImage: skillsreact,
    skillAlt: "React.js icon",
    skillDescription: "React.js",
    variants: fadeIn("right", "spring", 0.4),
    detailedDescription:"React.js has streamlined my development workflow through component-based architecture, using hooks to build more complex UIs effectively. I'm currently learning how to incorporate state management with Redux to further the efficiency of my builds.",
  },
  {
    skillImage: skillstailwind,
    skillAlt: "Tailwind CSS icon",
    skillDescription: "Tailwind CSS",
    variants: fadeIn("right", "spring", 0.5),  
    detailedDescription:"Tailwind CSS has been instrumental in achieving rapid prototyping and maintaining design consistency. I've customized utility classes, applied JIT compilation for faster builds, and created a custom Tailwind configuration for project-specific needs.",  
  },
  {
    skillImage: skillsexpress,
    skillAlt: "Express.js icon",
    skillDescription: "Express.js",
    variants: fadeIn("right", "spring", 0.6),    
    detailedDescription:"In addition to basic routing, I've implemented middleware for authentication, data validation, and error handling in Express.js. I've also built RESTful APIs, integrating them with databases and third-party services.",
  },
  {
    skillImage: skillsnode,
    skillAlt: "Node.js icon",
    skillDescription: "Node.js",
    variants: fadeIn("right", "spring", 0.7),    
    detailedDescription:"I've leveraged Node.js as a key component of the MERN stack. Its event-driven architecture has been instrumental in creating real-time features, facilitating efficient server-side scripting, and enabling smooth communication between the front end and back end.",
  },
  {
    skillImage: skillsmongo,
    skillAlt: "MongoDB icon",
    skillDescription: "MongoDB",
    variants: fadeIn("right", "spring", 0.8), 
    detailedDescription:"MongoDB has served as a versatile NoSQL database for me. I've employed its document-oriented structure to design efficient data models that accommodate complex data relationships. In addition to standard use cases, I've utilized MongoDB's robust querying capabilities for advanced data retrieval. I particularly enjoy the flexibility it affords.",   
  },
  {
    skillImage: skillsSQL,
    skillAlt: "SQL icon",
    skillDescription: "SQL",
    variants: fadeIn("right", "spring", 0.9),    
    detailedDescription:"Beyond basic queries, I've employed SQL to design normalized database schemas, optimize queries for large datasets, and implement stored procedures and triggers for enhanced data management.",
  },
  {
    skillImage: skillsPHP,
    skillAlt: "PHP icon",
    skillDescription: "PHP",
    variants: fadeIn("right", "spring", 1),    
    detailedDescription:"PHP has enabled me to create dynamic websites with user authentication systems and RESTful API endpoints. I've also integrated it with various databases for data-driven applications.",
  },
  {
    skillImage: skillsgit,
    skillAlt: "Git icon",
    skillDescription: "Git",
    variants: fadeIn("right", "spring", 1.1),   
    detailedDescription:"Git has been my tool of choice for version control, but I've also explored its advanced features like rebasing, interactive staging, and creating custom Git hooks for automating tasks.", 
  },
  {
    skillImage: skillsfigma,
    skillAlt: "Figma icon",
    skillDescription: "Figma",
    variants: fadeIn("right", "spring", 1.2),   
    detailedDescription:"Not only have I found Figma to be an excellent design tool but also a collaborative platform for user testing, design handoff, and interactive prototyping, improving the entire design-to-development workflow.", 
  },
  {
    skillImage: skillsnpm,
    skillAlt: "npm icon",
    skillDescription: "npm",
    variants: fadeIn("right", "spring", 1.3),    
    detailedDescription:"Npm has been a crucial tool in my projects, simplifying package management, aiding version control and facilitating the integration of external libraries. Whilst I haven't contributed to open source projects yet, I continue to leverage npm's capabilities to enhance project efficiency and deliver innovative solutions.",
  }
];


export { services, technologies, projects, skills };