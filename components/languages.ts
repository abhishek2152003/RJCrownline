
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

const COOKIE_NAME = "googtrans";
const PRODUCTION_DOMAIN = "rjcrownline.com";

function isLocalhost(): boolean {
  const hostname = window.location.hostname;

  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local")
  );
}

/**
 * Read the Google Translate target language.
 */
export function getCurrentLanguageCode(): string {
  if (typeof document === "undefined") return "en";

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_NAME}=`));

  if (!cookie) return "en";

  try {
    const value = decodeURIComponent(
      cookie.substring(COOKIE_NAME.length + 1)
    );

    const parts = value.split("/");
    const target = parts[2];

    return SUPPORTED_LANGUAGES.some((lang) => lang.code === target)
      ? target
      : "en";
  } catch {
    return "en";
  }
}

/**
 * Delete googtrans cookies across the relevant domain scopes.
 */
function clearGoogleTransCookies(): void {
  if (typeof document === "undefined") return;

  const hostname = window.location.hostname;

  const domains = new Set<string>([
    hostname,
    `.${hostname}`,
  ]);

  // Clear cookies previously created for both production hostnames.
  if (
    hostname === PRODUCTION_DOMAIN ||
    hostname === `www.${PRODUCTION_DOMAIN}` ||
    hostname.endsWith(`.${PRODUCTION_DOMAIN}`)
  ) {
    domains.add(PRODUCTION_DOMAIN);
    domains.add(`.${PRODUCTION_DOMAIN}`);
    domains.add(`www.${PRODUCTION_DOMAIN}`);
    domains.add(`.www.${PRODUCTION_DOMAIN}`);
  }

  // First clear host-only cookies (no domain attribute).
  document.cookie =
    `${COOKIE_NAME}=; Max-Age=0; path=/; SameSite=Lax`;

  // Then clear cookies for each matching domain scope.
  for (const domain of domains) {
    document.cookie =
      `${COOKIE_NAME}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
  }
}

/**
 * Set one consistent cookie for non-English languages.
 */
export function setGoogleTransCookie(targetCode: string): void {
  if (typeof window === "undefined") return;

  clearGoogleTransCookies();

  // English is the original language, so remove the preference.
  if (targetCode === "en") return;

  const isSupported = SUPPORTED_LANGUAGES.some(
    (lang) => lang.code === targetCode
  );

  if (!isSupported) return;

  const hostname = window.location.hostname;
  const isProductionDomain =
    hostname === PRODUCTION_DOMAIN ||
    hostname === `www.${PRODUCTION_DOMAIN}`;

  const domainAttribute =
    !isLocalhost() && isProductionDomain
      ? `; domain=.${PRODUCTION_DOMAIN}`
      : "";

  document.cookie =
    `${COOKIE_NAME}=/en/${targetCode}; path=/; max-age=31536000; SameSite=Lax${domainAttribute}`;
}

/**
 * Change language and restore the original page when English is selected.
 */
export function changeLanguage(targetCode: string): void {
  if (typeof window === "undefined") return;

  const isSupported = SUPPORTED_LANGUAGES.some(
    (lang) => lang.code === targetCode
  );

  if (!isSupported) return;

  // Persist or clear the preference before updating the UI.
  setGoogleTransCookie(targetCode);

  window.dispatchEvent(
    new CustomEvent("app:languageChanged", {
      detail: targetCode,
    })
  );

  // English must restore the original DOM, not translate it to "en".
  if (targetCode === "en") {
    window.location.reload();
    return;
  }

  const triggerTranslation = (): boolean => {
    const select =
      document.querySelector<HTMLSelectElement>(".goog-te-combo");

    if (!select) return false;

    if (select.value !== targetCode) {
      select.value = targetCode;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    return true;
  };

  if (triggerTranslation()) return;

  // Wait briefly for the Google Translate widget to initialize.
  let attempts = 0;

  const timer = window.setInterval(() => {
    attempts++;

    if (triggerTranslation()) {
      window.clearInterval(timer);
    } else if (attempts >= 20) {
      window.clearInterval(timer);

      // The saved cookie lets the widget apply the target after reload.
      window.location.reload();
    }
  }, 100);
}
