"use client";

import { useTheme } from "next-themes";
import { PiMoonStarsLight, PiSunLight } from "react-icons/pi";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-caritabox-400 dark:bg-caritabox-600 mr-4 flex rounded-md p-1 sm:mr-0">
      <button
        className="bg-caritabox-300 dark:bg-caritabox-600 rounded-md p-1"
        type="button"
        title="Light"
        onClick={() => setTheme("light")}
      >
        <PiSunLight size={20} />
      </button>
      <button
        className="dark:bg-caritabox-700/80 rounded-md p-1"
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
