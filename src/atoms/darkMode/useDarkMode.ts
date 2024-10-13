import { useRecoilState } from "recoil";
import { darkModeState } from "./darkModeState";
import React from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = React.useCallback(() => {
    setDarkMode((prev) => {
      return { isDark: !prev.isDark };
    });
    updateDarkMode(!darkMode.isDark);
  }, [darkMode]);

  return { toggleDarkMode, darkMode };
};

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
