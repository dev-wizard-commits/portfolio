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

// Using Unsplash Source API for unique project images - each project has a different image
// To use your actual project screenshots, add them to public/projects/ and update the paths below
export const PROJECTS = [
  {
    title: "Healthcare Platform",
    description:
      "Developed an innovative healthcare platform catering to patient management and data analytics. Utilized React.js for the front-end to create an intuitive user interface, and .NET for robust backend processing. Implemented AWS services for scalable cloud infrastructure and Lambda for serverless computing, ensuring high availability and cost-efficiency.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["React.js", ".NET", "AWS", "Lambda", "PostgreSQL"],
    features: [
      "Patient management system",
      "Real-time data analytics",
      "Scalable cloud infrastructure",
      "Serverless computing",
    ],
    category: "Healthcare",
  },
  {
    title: "IoT Platform",
    description:
      "Created an IoT platform that seamlessly integrates with various sensors and devices for real-time data monitoring and analysis. Built with modern web technologies and cloud infrastructure to handle large-scale data processing and device management.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["Node.js", "Express.js", "MongoDB", "AWS", "Docker"],
    features: [
      "Real-time sensor data monitoring",
      "Device management system",
      "Large-scale data processing",
      "Cloud-based infrastructure",
    ],
    category: "IoT",
  },
  {
    title: "E-commerce MVPs",
    description:
      "Worked on three Minimum Viable Products (MVPs) for emerging e-commerce startups. Focused on performance optimization, implementing best practices in code efficiency and database management to speed up the applications. Used CI/CD pipelines to automate testing and deployment processes.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "CI/CD"],
    features: [
      "Fast MVP development",
      "Performance optimization",
      "Payment integration",
      "Automated deployment",
    ],
    category: "E-commerce",
  },
  {
    title: "SaaS CRM Platform",
    description:
      "Built a comprehensive Customer Relationship Management (CRM) system for enterprise clients. Implemented advanced features including lead management, sales pipeline tracking, automated workflows, and comprehensive reporting. Designed with scalability in mind to handle thousands of concurrent users.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "GraphQL", "Redis"],
    features: [
      "Lead management system",
      "Sales pipeline tracking",
      "Automated workflows",
      "Advanced analytics dashboard",
    ],
    category: "SaaS",
  },
  {
    title: "Fintech Payment Gateway",
    description:
      "Developed a secure payment processing platform with multi-currency support and fraud detection. Integrated with major payment providers and implemented real-time transaction monitoring. Built with security-first approach, including PCI-DSS compliance and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["React.js", "Nest.js", "PostgreSQL", "Stripe", "AWS"],
    features: [
      "Multi-currency support",
      "Fraud detection system",
      "Real-time transaction monitoring",
      "PCI-DSS compliant",
    ],
    category: "Fintech",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Created a powerful analytics dashboard with real-time data visualization and custom reporting. Implemented WebSocket connections for live updates and built interactive charts using D3.js. Supports multiple data sources and provides export functionality for reports.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["Angular", "Node.js", "MongoDB", "WebSocket", "D3.js"],
    features: [
      "Real-time data visualization",
      "Interactive charts and graphs",
      "Custom report generation",
      "Multi-source data integration",
    ],
    category: "Analytics",
  },
  {
    title: "Mobile E-commerce App",
    description:
      "Developed a cross-platform mobile application for e-commerce using React Native. Implemented features like product browsing, shopping cart, user authentication, and push notifications. Optimized for performance and integrated with payment gateways for seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe"],
    features: [
      "Cross-platform mobile app",
      "Product catalog & search",
      "Shopping cart & checkout",
      "Push notifications",
    ],
    category: "Mobile",
  },
  {
    title: "API Gateway & Microservices",
    description:
      "Architected and implemented a microservices-based system with API gateway for routing and authentication. Built scalable services using Docker and Kubernetes for orchestration. Implemented service discovery, load balancing, and centralized logging for better observability.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["Node.js", "Express.js", "Docker", "Kubernetes", "GraphQL"],
    features: [
      "Microservices architecture",
      "API gateway implementation",
      "Service discovery & load balancing",
      "Container orchestration",
    ],
    category: "Backend",
  },
  {
    title: "Content Management System",
    description:
      "Built a flexible CMS platform with role-based access control, content versioning, and multi-language support. Implemented a plugin architecture for extensibility and provided RESTful APIs for content delivery. Optimized for SEO and performance with caching strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "Vue.js"],
    features: [
      "Role-based access control",
      "Content versioning",
      "Multi-language support",
      "Plugin architecture",
    ],
    category: "CMS",
  },
  {
    title: "Task Management Platform",
    description:
      "Created a collaborative task management platform with real-time updates, team collaboration features, and project tracking. Implemented drag-and-drop functionality, file attachments, comments, and notifications. Built with focus on user experience and productivity.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["React.js", "Express.js", "MongoDB", "Socket.io", "Material-UI"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop interface",
      "File attachments & comments",
      "Project tracking & reporting",
    ],
    category: "Productivity",
  },
  {
    title: "Social Media Analytics Tool",
    description:
      "Developed a comprehensive social media analytics platform that aggregates data from multiple platforms. Provides sentiment analysis, engagement metrics, competitor analysis, and automated reporting. Built with machine learning capabilities for trend prediction.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["Next.js", "Python", "Django", "PostgreSQL", "TensorFlow"],
    features: [
      "Multi-platform data aggregation",
      "Sentiment analysis",
      "Engagement metrics tracking",
      "ML-based trend prediction",
    ],
    category: "Analytics",
  },
  {
    title: "Video Streaming Platform",
    description:
      "Built a video streaming platform with adaptive bitrate streaming, live broadcasting capabilities, and video on demand. Implemented CDN integration for global content delivery and user authentication with subscription management. Optimized for low latency and high quality.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&q=80",
    link: "#",
    technologies: ["React.js", "Node.js", "AWS", "CloudFront", "FFmpeg"],
    features: [
      "Adaptive bitrate streaming",
      "Live broadcasting",
      "Video on demand",
      "CDN integration",
    ],
    category: "Media",
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
