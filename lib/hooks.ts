import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/**
 * Custom React hook for tracking section visibility and updating active section
 * @param {SectionName} sectionName - The name of the section to track
 * @param {number} [threshold=0.75] - The visibility threshold for the section (0 to 1)
 * @returns {Object} An object containing the ref to be attached to the section element
 */
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  /**
   * Updates the active section based on viewport visibility and click timing
   * @param {boolean} inView - Indicates if the section is currently in view
   * @param {function} setActiveSection - Function to update the active section
   * @param {number} timeOfLastClick - Timestamp of the last click event
   * @param {string} sectionName - Name of the current section
   * @returns {void} This effect does not return a value
   */
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
