"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * Provides a theme context for the application, managing theme state and toggling functionality.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeContextProvider.
 * @returns {JSX.Element} A ThemeContext.Provider component wrapping the children with theme context.
 */
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  /**
   * Toggles the application theme between light and dark modes.
   * @param {void} - This function doesn't take any parameters.
   * @returns {void} This function doesn't return a value.
   */
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      /**
       * Sets the theme based on local storage or system preferences
       * @param {void} None - This useEffect hook doesn't take any parameters
       * @returns {void} This hook doesn't return anything, it updates the theme state and applies CSS classes
       */
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access the theme context
 * @returns {Object} The current theme context
 * @throws {Error} If used outside of a ThemeContextProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
