import { MutableSnapshot, atom } from "recoil";
interface DarkModeState {
  isDark: boolean;
}

const initializeTheme = () => {
  const isDark =
    localStorage.getItem("THEME") === null ||
    localStorage.theme === "dark" ||
    (!("THEME" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    return true;
  }
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  return false;
};

// 다크모드 기본 설정이 true.
export const darkModeState = atom<DarkModeState>({
  key: "toastState",
  default: {
    isDark: initializeTheme(),
  },
});

// 초기값 설정
export const initializeDarkModeState = (snapshot: MutableSnapshot): void => {
  snapshot.set(darkModeState, { isDark: initializeTheme() });
};
