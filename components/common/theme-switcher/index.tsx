"use client";

import { useTheme } from "next-themes";
import { PiMoonStarsLight, PiSunLight } from "react-icons/pi";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mr-4 flex rounded-md bg-primary-400 p-1 dark:bg-primary-600 sm:mr-0">
      <button
        className="rounded-md bg-primary-300 p-1 dark:bg-primary-600"
        type="button"
        title="Light"
        onClick={() => setTheme("light")}
      >
        <PiSunLight size={20} />
      </button>
      <button
        className="rounded-md p-1 dark:bg-primary-700/80"
        type="button"
        title="Dark"
        onClick={() => setTheme("dark")}
      >
        <PiMoonStarsLight size={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
