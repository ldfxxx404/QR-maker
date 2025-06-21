import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme };
};
