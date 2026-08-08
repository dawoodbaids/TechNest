import { LOCALE_COOKIE, LOCALE_STORAGE_KEY } from "./locale";

/** FOUC-prevention script injected in <head> before hydration (server-safe). */
export function localeInitScript() {
  return `
    (function () {
      try {
        var value = null;
        try { value = localStorage.getItem("${LOCALE_STORAGE_KEY}"); } catch (e) {}
        if (!value) {
          var match = document.cookie.match(/(?:^|;\\s*)${LOCALE_COOKIE}=([^;]*)/);
          if (match) value = match[1];
        }
        var root = document.documentElement;
        if (value === "ar") {
          root.lang = "ar";
          root.dir = "rtl";
        } else if (value === "en") {
          root.lang = "en";
          root.dir = "ltr";
        }
      } catch (e) {}
    })();
  `;
}
