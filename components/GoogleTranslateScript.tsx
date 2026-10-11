"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Observer to continuously remove Google Translate top banner and reset body offset
    const cleanupBanner = () => {
      // 1. Reset body top offset if Google Translate sets it inline
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.setProperty("top", "0px", "important");
      }
      if (document.documentElement.style.top && document.documentElement.style.top !== "0px") {
        document.documentElement.style.setProperty("top", "0px", "important");
      }

      // 2. Hide banner frames and containers
      const bannerElements = document.querySelectorAll<HTMLElement>(
        ".VIpgJd-ZVi9od-ORHb-OEVmcd, .VIpgJd-ZVi9od-aZ2wEe-wOHMyf, .goog-te-banner-frame, iframe[id*='container'], body > .skiptranslate"
      );
      bannerElements.forEach((el) => {
        if (el.id !== "google_translate_element") {
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("visibility", "hidden", "important");
          el.style.setProperty("height", "0", "important");
        }
      });
    };

    cleanupBanner();

    const observer = new MutationObserver(() => {
      cleanupBanner();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
      childList: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Invisible container where Google Translate attaches its widget */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      />

      {/* Global callback defined inline on window */}
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googleTranslateElementInit = function() {
              if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            };
          `,
        }}
      />

      {/* Google Translate External Script */}
      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
    </>
  );
}
