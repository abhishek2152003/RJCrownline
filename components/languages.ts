export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
];

/**
 * Reads the current target language code from the googtrans cookie.
 * Defaults to 'en'.
 */
export function getCurrentLanguageCode(): string {
  if (typeof document === "undefined") return "en";

  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith("googtrans=")) {
      const val = decodeURIComponent(trimmed.substring("googtrans=".length));
      // Format is typically /en/mr or /auto/mr
      const parts = val.split("/");
      if (parts.length >= 3 && parts[2]) {
        return parts[2];
      }
    }
  }
  return "en";
}

/**
 * Sets Google Translate cookie cleanly across localhost and domains.
 */
export function setGoogleTransCookie(targetCode: string): void {
  if (typeof document === "undefined") return;

  const hostname = window.location.hostname;
  const isLocal =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local");

  const clearCookie = (cookieName: string) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    if (!isLocal) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
    }
  };

  clearCookie("googtrans");

  if (targetCode === "en") {
    document.cookie = "googtrans=/en/en; path=/; max-age=31536000;";
    if (!isLocal) {
      document.cookie = `googtrans=/en/en; path=/; domain=${hostname}; max-age=31536000;`;
      if (hostname.includes(".")) {
        document.cookie = `googtrans=/en/en; path=/; domain=.${hostname}; max-age=31536000;`;
      }
    }
    return;
  }

  const cookieVal = `/en/${targetCode}`;
  document.cookie = `googtrans=${cookieVal}; path=/; max-age=31536000;`;
  document.cookie = `googtrans=/auto/${targetCode}; path=/; max-age=31536000;`;

  if (!isLocal) {
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${hostname}; max-age=31536000;`;
    if (hostname.includes(".")) {
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${hostname}; max-age=31536000;`;
    }
  }
}

/**
 * Changes the active language and triggers translation instantly in-place.
 */
export function changeLanguage(targetCode: string): void {
  if (typeof window === "undefined") return;

  const isEnglish = targetCode === "en";

  // 1. Set the cookie for persistence across pages and reloads
  setGoogleTransCookie(targetCode);

  // 2. Broadcast event for instant UI state update
  window.dispatchEvent(
    new CustomEvent("app:languageChanged", { detail: targetCode })
  );

  // 3. Helper to trigger Google Translate's select element in-place
  const triggerCombo = (): boolean => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = isEnglish ? "" : targetCode;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      select.dispatchEvent(new Event("input", { bubbles: true }));

      if (typeof select.onchange === "function") {
        try {
          select.onchange(new Event("change"));
        } catch {
          // ignore
        }
      }
      return true;
    }
    return false;
  };

  // Try applying immediately without any page reload
  if (triggerCombo()) {
    if (isEnglish) {
      // When resetting back to original English, a quick reload restores pristine DOM text
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
    return;
  }

  // If Google Translate hasn't finished loading into DOM yet, poll rapidly
  let retries = 0;
  const timer = setInterval(() => {
    retries++;
    if (triggerCombo() || retries >= 20) {
      clearInterval(timer);
      if (retries >= 20) {
        // Fallback only if widget never loaded
        window.location.reload();
      }
    }
  }, 50);
}
