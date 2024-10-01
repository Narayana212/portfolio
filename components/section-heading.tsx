import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

/**
 * Renders a section heading component with centered, capitalized text.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed within the heading.
 * @returns {JSX.Element} A styled h2 element containing the provided children.
 */
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
