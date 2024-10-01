"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

/**
 * Renders the Experience component, displaying a vertical timeline of professional experiences.
 * @returns {JSX.Element} A section containing a vertical timeline of experiences.
 */
export default function Experience() {
  const { ref } = useSectionInView("Journey");
  const { theme } = useTheme();

  /**
   * Renders a list of experience items as VerticalTimelineElements
   * @param {Array} experiencesData - An array of experience objects containing details like title, company name, icon, link, and description points
   * @param {string} theme - The current theme ('light' or 'dark') to determine styling
   * @returns {ReactElement} A React Fragment containing VerticalTimelineElements for each experience item
   */
  return (
    <section id="journey" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Journey</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <div>
                <h3 className="text-[24px] font-bold">
                  {experience.title}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
                <a
                  href={experience.link}
                  className="no-underline text-blue-600 hover:underline text-[14px]"
                >
                  Visit
                </a>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                /**
                 * Renders a list of experience points
                 * @param {Object} experience - The experience object containing points
                 * @param {Array} experience.points - An array of experience points to be rendered
                 * @returns {JSX.Element} A list of rendered experience points as list items
                 */
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
