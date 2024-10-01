"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Renders a vertical section divider with animation
 * @returns {JSX.Element} A motion div element representing a section divider
 */
export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
