"use client"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"
import { BsBriefcase } from "react-icons/bs"


export default function Experience() {
  const { ref } = useSectionInView("Experience")
  const { theme } = useTheme()

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <div className="mt-8 relative border-l border-gray-200 dark:border-gray-700">
        <ExperienceItem
          title="Software Development Engineer Intern"
          company="Blackbucks Education Pvt. Ltd."
          date="June 2024 – Nov 2024"
          location="Hyderabad, India"
          description={[
            "Developed TapTap Enterprise Dashboard for real-time student performance metrics.",
            "Built an email sender tool with a customizable email editor for automated communication.",
            "Designed and optimized PostgreSQL database schemas for scalable and efficient data storage.",
            "Contributed to Skillbuilder, enabling students to select courses aligned with their budget.",
          ]}
        />
      </div>
    </section>
  )
}

function ExperienceItem({
  title,
  company,
  date,
  location,
  description,
}: {
  title: string
  company: string
  date: string
  location: string
  description: string[]
}) {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10 ml-6"
    >
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <BsBriefcase className="w-3 h-3 text-blue-800 dark:text-blue-300" />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {title}{" "}
        
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
      <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
        {company} | {location}
      </p>
      <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

