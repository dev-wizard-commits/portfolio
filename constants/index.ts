import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/milan-kremic-615a4b35a",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/dev-wizard-commits",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material-UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GraphQL",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Healthcare Platform",
    description:
      "Developed an innovative healthcare platform catering to patient management and data analytics. Utilized React.js for the front-end to create an intuitive user interface, and .NET for robust backend processing. Implemented AWS services for scalable cloud infrastructure and Lambda for serverless computing, ensuring high availability and cost-efficiency.",
    image: "/projects/project-1.png",
    link: "#",
    technologies: ["React.js", ".NET", "AWS", "Lambda", "PostgreSQL"],
    features: [
      "Patient management system",
      "Real-time data analytics",
      "Scalable cloud infrastructure",
      "Serverless computing",
    ],
  },
  {
    title: "IoT Platform",
    description:
      "Created an IoT platform that seamlessly integrates with various sensors and devices for real-time data monitoring and analysis. Built with modern web technologies and cloud infrastructure to handle large-scale data processing and device management.",
    image: "/projects/project-2.png",
    link: "#",
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "Docker"],
    features: [
      "Real-time sensor data monitoring",
      "Device management system",
      "Large-scale data processing",
      "Cloud-based infrastructure",
    ],
  },
  {
    title: "E-commerce MVPs",
    description:
      "Worked on three Minimum Viable Products (MVPs) for emerging e-commerce startups. Focused on performance optimization, implementing best practices in code efficiency and database management to speed up the applications. Used CI/CD pipelines to automate testing and deployment processes.",
    image: "/projects/project-3.png",
    link: "#",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "CI/CD"],
    features: [
      "Fast MVP development",
      "Performance optimization",
      "Payment integration",
      "Automated deployment",
    ],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/dev-wizard-commits",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/milan-kremic-615a4b35a",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: null,
        link: "mailto:milankremic8@gmail.com",
      },
      {
        name: "Location",
        icon: null,
        link: "#",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Portfolio",
        icon: null,
        link: "#",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/dev-wizard-commits",
};

export const EXPERIENCE = [
  {
    title: "Full Stack Developer",
    company: "Self Employed",
    period: "07/2024 – Present",
    location: "Belgrade, Serbia",
    description: [
      "Successfully optimized multiple web applications, resulting in significant improvements in load times and overall performance.",
      "Developed and launched scalable and secure digital solutions for healthcare, IoT, and e-commerce sectors.",
      "Maintained high standards of code quality and efficiency, leading to robust and maintainable software solutions.",
      "Developed an innovative healthcare platform, catering to patient management and data analytics using React.js and .NET.",
      "Implemented AWS services for scalable cloud infrastructure and Lambda for serverless computing.",
      "Created an IoT platform that seamlessly integrates with various sensors and devices for real-time data monitoring.",
      "Worked on three Minimum Viable Products (MVPs) for emerging e-commerce startups.",
      "Used Continuous Integration/Continuous Deployment (CI/CD) pipelines to automate testing and deployment processes.",
    ],
    technologies: ["React.js", ".NET", "AWS", "Lambda", "IoT", "CI/CD"],
  },
  {
    title: "Full Stack Developer",
    company: "PatternAl",
    period: "09/2021 – 06/2024",
    location: "Remote",
    description: [
      "Led front-end and back-end development with React.js and Express.js, ensuring seamless integration and project success.",
      "Designed and implemented a responsive UI in React, adaptable for Microsoft Azure and Google Cloud APIs.",
      "Utilized React, Redux, and immutable data structures for enhanced UI performance.",
      "Revamped the checkout workflow using Angular, improving user experience and application responsiveness.",
      "Overhauled continuous integration processes, optimizing workflows and sharing improvements across projects.",
    ],
    technologies: ["React.js", "Express.js", "Redux", "Angular", "Azure", "GCP"],
  },
  {
    title: "Full Stack Developer",
    company: "Dental Sleep",
    period: "07/2018 – 08/2021",
    location: "Remote",
    description: [
      "Worked as a Senior Full stack Developer on both Vue.js Frontend and Node Backend.",
      "Created a responsive application UI using React and component libraries with support for switching between Microsoft Azure and Google Cloud APIs.",
      "Proposed using React, Redux, and immutable data structures for creating the UI.",
      "Built the entire new checkout workflow in Angular with asynchronous Ajax-based updates.",
      "Refactored and upgraded the continuous integration code of the main repository.",
    ],
    technologies: ["Vue.js", "Node.js", "React", "Redux", "Angular", "Azure", "GCP"],
  },
  {
    title: "Full Stack Developer",
    company: "Apoddo",
    period: "09/2015 – 06/2018",
    location: "Remote",
    description: [
      "Maintained and evolved two Angular applications and a JavaScript library.",
      "Led initiatives to drastically improve Angular application performance.",
      "Implemented efficient project builds with Webpack and set up comprehensive test suites.",
      "Authored documentation and managed code review, release, and change processes.",
      "Represented the company at conferences and meetups, enhancing brand visibility.",
    ],
    technologies: ["Angular", "JavaScript", "Webpack", "Testing"],
  },
] as const;

export const EDUCATION = {
  degree: "Bachelor's Degree in Computer Engineering",
  university: "University of Belgrade",
  period: "10/2011 – 07/2015",
  location: "Belgrade, Serbia",
} as const;

export const STATISTICS = [
  {
    number: "10+",
    label: "Years Experience",
    description: "Building scalable web applications",
  },
  {
    number: "50+",
    label: "Projects Completed",
    description: "Across various industries",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description: "Delivering exceptional results",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Always ready to help",
  },
] as const;
