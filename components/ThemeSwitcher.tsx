"use client";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onToggleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <button className="text-xl text-gray-700 dark:text-[#A7A7A7]" onClick={onToggleTheme}>
      {theme === "light" ? (
        <i className="uil uil-moon"></i>
      ) : (
        <i className="uil uil-sun"></i>
      )}
    </button>
  );
};
