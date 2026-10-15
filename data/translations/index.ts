import { LanguageCode, TranslationDictionary } from "./types";
import { navTranslations } from "./nav";
import { buttonTranslations } from "./buttons";
import { categoryTranslations } from "./categories";
import { specTranslations } from "./specs";
import { specValueTranslations } from "./specValues";
import { homeTranslations } from "./home";
import { modalTranslations } from "./modal";
import { footerTranslations } from "./footer";
import { contactTranslations } from "./contact";
import { certificationsTranslations } from "./certifications";
import { aboutTranslations } from "./about";
import { servicesTranslations } from "./services";
import { commonTranslations } from "./common";
import { productsTranslations } from "./products";
import { phraseDictionary } from "./phrases";

export * from "./types";
export * from "./home";
export * from "./contact";
export * from "./about";
export * from "./services";
export * from "./certifications";
export * from "./nav";
export * from "./footer";
export * from "./buttons";
export * from "./categories";
export * from "./specs";
export * from "./specValues";
export * from "./modal";
export * from "./common";
export * from "./products";
export * from "./phrases";

const languages: LanguageCode[] = ["en", "mr", "hi", "ur", "de", "ru"];

export const translations: Record<LanguageCode, TranslationDictionary> = languages.reduce(
  (acc, lang) => {
    acc[lang] = {
      nav: navTranslations[lang],
      buttons: buttonTranslations[lang],
      categories: categoryTranslations[lang],
      specs: specTranslations[lang],
      specValues: specValueTranslations[lang],
      home: homeTranslations[lang],
      modal: modalTranslations[lang],
      footer: footerTranslations[lang],
      contact: contactTranslations[lang],
      certificationsPage: certificationsTranslations[lang],
      aboutPage: aboutTranslations[lang],
      servicesPage: servicesTranslations[lang],
      productsPage: productsTranslations[lang],
      common: commonTranslations[lang],
    };
    return acc;
  },
  {} as Record<LanguageCode, TranslationDictionary>
);

export function translatePhrase(
  phrase: string,
  lang: LanguageCode = "en"
): string {
  if (!phrase) return "";
  const entry = phraseDictionary[phrase.trim()];
  if (entry && entry[lang]) {
    return entry[lang];
  }
  return phrase;
}
