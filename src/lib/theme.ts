import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
}

const STORAGE_KEY = "qualitysphere-theme";

function apply(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export const useTheme = create<ThemeState>((set, get) => ({
  theme: "light",
  setTheme: (theme) => {
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, theme);
    apply(theme);
    set({ theme });
  },
  toggle: () => get().setTheme(get().theme === "dark" ? "light" : "dark"),
}));

export function initTheme() {
  if (typeof window === "undefined") return;
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  const theme: Theme =
    stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  apply(theme);
  useTheme.setState({ theme });
}
