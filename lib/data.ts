import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ytImg from "../public/narayanayt.png";
import redditImg from "../public/reddit.png";
import chatImg from "../public/chat.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Journey",
    hash: "#journey",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData =  [
  {
    title: "Static Website",
    company_name: "⌚ 10 days",
    icon: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    iconBg: "#383E56",
    date: "June 2022",
    points: [
      "A tourism Website enables the user to browse through images of popular destinations",
      "Skills Learned : HTML Elements , Class Attribute , Text Properties , Bootstrap , Layout , Box Properties , FlexBox",
    ],
    link: "https://tourismapp.ccbp.tech/",
  },
  {
    title: "Responsive Website",
    company_name: "⌚ 12 days",
    icon: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    iconBg: "#E6DEDD",
    date: "July 2022",
    points: [
      "A Food Much Website is a user-centric food tech website",
      "Skills Learned : Responsive Wed Design , Multiple Layouts , Column Wrapping , Navbar , Designing Layouts , Inheritance , CSS Gradients ",
    ],
    link: "https://narayanafm.ccbp.tech/",
  },
  {
    title: "Dynamic Website",
    company_name: "⌚ 20 days",
    icon: "https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png",
    iconBg: "#383E56",
    date: "August 2022",
    points: [
      "A Todo app which helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.",
      "Skills Learned : Declaring Variables , Comparsion Operator , Functions , Object , DOM Manipulations , Loops , Local Storage",
    ],
    link: "https://todossapp.ccbp.tech/",
  },
  {
    title: "React Js",
    company_name: "⌚ 60 days",
    icon: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    iconBg: "#E6DEDD",
    date: "August 2022 - November 2022",
    points: [
      " A Nxt Trendz application which is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
      "Skills Learned : Components , Lists , Conditional Rendering , setState() , Updating Phase , Routing , API Calls , React Context , Hooks",
    ],
    link: "https://narayana806.ccbp.tech/",
  },
] as const;

export const projectsData = [
  {
    title: "Reddit Clone",
    description:
      "Created Upvotes , Down Votes for Posts, comments Secured user data with Next-Auth.Implemented Uploading Images , Codes, Links , and a Well designed Editor for Posting. Implemented Infinite Scrolling, Clean UI and Proper Loading and Error States",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","Mysql","Prisma"],
    imageUrl: redditImg,
  },
  {
    title: "Nxt Watch",
    description:
      "Developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories, such as Trending, Gaming, and Saved videos,and search for specific content while customising the visual theme.",
    tags: ["React", "React Context", "Rest Apis", "CSS","Bootstrap"],
    imageUrl: ytImg,
  },
  {
    title: "Nxt Trendz",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
    tags: ["React", "Bootstrap", "Rest Apis", "CSS", "JWT"],
    imageUrl: chatImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;