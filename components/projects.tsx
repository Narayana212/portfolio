"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

/**
 * Renders the Projects section of a portfolio or website
 * @param {void} - This function doesn't accept any parameters
 * @returns {JSX.Element} A section element containing a heading and a list of projects
 */
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
```
/**
 * Renders a list of projects using the Project component
 * @param {Array} projectsData - An array of project objects containing project information
 * @returns {Array} An array of React elements, each representing a Project component wrapped in a React.Fragment
 */
```

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
