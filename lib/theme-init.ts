export const THEME_STORAGE_KEY = "technest-theme";

/** FOUC-prevention script injected in <head> before hydration (server-safe). */
export function themeInitScript() {
  return `
    (function () {
      try {
        var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
        var theme = stored === "dark" || stored === "light"
          ? stored
          : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        var root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
      } catch (e) {}
    })();
  `;
}
