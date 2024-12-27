import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pingPandaImg from "../public/ping.png";
import redditImg from "../public/queri.png";
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
    title: "PingPanda",
    description:
      "Built a SaaS platform for real-time event notifications with a clean dashboard, Discord alerts, and Stripe payments. Designed a modern UI using shadcn-ui and implemented Clerk for secure authentication.",
    tags: ["Next.js", "Clerk", "Stripe", "Discord", "TypeScript", "shadcn-ui"],
    imageUrl: pingPandaImg,
  },
  {
    title: "Queri",
    description:
      "Developed an AI-driven platform for querying PDFs with Pinecode for vector storage, LangChain for AI memory, and Stripe integration. Deployed on Vercel with tRPC and ReactQuery for seamless handling.",
    tags: ["Next.js", "Prisma", "LangChain", "tRPC", "OpenAI"],
    imageUrl: redditImg,
  },
  {
    title: "TranslateChat",
    description:
      "Created a multilingual chat app using Whisper for Speech-to-Text, Edge-TTS for Text-to-Speech, and Google Translate API. Designed a simple, user-friendly interface for smooth communication.",
    tags: ["Next.js", "Whisper", "GoogleTrans", "Edge-TTS"],
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
  "MongoDB",
  "tRPC",
  "LangChain",
  "OpenAI",
  "Stripe",
  "shadcn-ui",
  "Pinecone",
] as const;
