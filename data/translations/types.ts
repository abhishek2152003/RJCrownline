export type LanguageCode = "en" | "mr" | "hi" | "ur" | "de" | "ru";

export interface NavTranslations {
  home: string;
  about: string;
  certifications: string;
  services: string;
  gallery: string;
  products: string;
  contact: string;
  allProducts: string;
}

export interface ButtonTranslations {
  requestQuote: string;
  contactUs: string;
  contactOurTeam: string;
  viewAll: string;
  viewProducts: string;
  viewDetails: string;
  close: string;
  sendInquiry: string;
  submit: string;
  sending: string;
  exploreMore: string;
  downloadBrochure: string;
}

export interface CategoryTranslations {
  dryFruits: string;
  fruits: string;
  freshFruits: string;
  vegetables: string;
  freshVegetables: string;
  spices: string;
  premiumSpices: string;
  millets: string;
  wholesomeMillets: string;
  pulses: string;
  premiumPulses: string;
  seafood: string;
  premiumSeafood: string;
}

export interface SpecTranslations {
  title: string;
  variety: string;
  color: string;
  taste: string;
  origin: string;
  packing: string;
  availability: string;
  grade: string;
  moisture: string;
  purity: string;
  shelfLife: string;
  exportQuality: string;
  count: string;
  form: string;
  size?: string;
  quality?: string;
  grain?: string;
  aroma?: string;
  flavor?: string;
  type?: string;
  curcumincontent?: string;
}

export interface SpecValueTranslations {
  india: string;
  maharashtraIndia: string;
  throughoutYear: string;
  seasonal: string;
  corrugatedBoxes: string;
  cartonBoxes: string;
  juteBags: string;
  vacuumPack: string;
  sweetAndAromatic: string;
  sweetAndJuicy: string;
  richAndEarthy: string;
  pungentAndAromatic: string;
  goldenYellow: string;
  deepRed: string;
  green: string;
  white: string;
}

export interface HomeTranslations {
  hero: {
    badge: string;
    saffronTitle: string;
    saffronDesc: string;
    turmericTitle: string;
    turmericDesc: string;
    cinnamonTitle: string;
    cinnamonDesc: string;
    dryFruitsTitle: string;
    dryFruitsDesc: string;
    blackTurmericTitle: string;
    blackTurmericDesc: string;
    fishTitle: string;
    fishDesc: string;
    milletsTitle: string;
    milletsDesc: string;
    grainsTitle: string;
    grainsDesc: string;
    pulsesTitle: string;
    pulsesDesc: string;
  };
  welcome: {
    badge: string;
    titlePrefix: string;
    companyName: string;
    p1Founder: string;
    p1Text: string;
    p2Text: string;
    highlightQuote: string;
    trustedTitle: string;
    trustedSubtitle: string;
  };
  productsSection: {
    badge: string;
    title: string;
    subtitle: string;
    exploreCategory: string;
  };
  exportProcess: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  cta: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    buttonText: string;
  };
}

export interface ModalTranslations {
  titlePrefix: string;
  generalTitle: string;
  subtitle: string;
  fullName: string;
  companyName: string;
  emailAddress: string;
  phoneWhatsApp: string;
  quantity: string;
  additionalMessage: string;
  fullNamePlaceholder: string;
  companyPlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  quantityPlaceholder: string;
  messagePlaceholder: string;
  submitButton: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
}

export interface FooterTranslations {
  tagline: string;
  productsHeading: string;
  companyHeading: string;
  contactHeading: string;
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
  addressHeading: string;
}

export interface ContactPageTranslations {
  title: string;
  subtitle: string;
  getInTouch: string;
  emailUs: string;
  callUs: string;
  headquarters: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  sendMessageHeading: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  sendButton: string;
  messageSentAlert: string;
}

export interface CertificationsPageTranslations {
  title: string;
  subtitle: string;
  fssaiTitle: string;
  fssaiDesc: string;
  spicesBoardTitle: string;
  spicesBoardDesc: string;
  apedaTitle: string;
  apedaDesc: string;
  mpedaTitle: string;
  mpedaDesc: string;
  iecTitle: string;
  iecDesc: string;
  msmeTitle: string;
  msmeDesc: string;
  gstTitle: string;
  gstDesc: string;
}

export interface AboutPageTranslations {
  title: string;
  subtitle: string;
  companyProfileBadge: string;
  companyProfileTitle: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  missionTitle: string;
  missionDesc: string;
  visionTitle: string;
  visionDesc: string;
  valuesBadge: string;
  valuesTitle: string;
  val1Title: string;
  val1Desc: string;
  val2Title: string;
  val2Desc: string;
  val3Title: string;
  val3Desc: string;
  val4Title: string;
  val4Desc: string;
}

export interface ServicesPageTranslations {
  headerTitle: string;
  headerSubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  overviewBadge: string;
  overviewTitle: string;
  overviewSubtitle: string;
  card1Title: string;
  card1Desc: string;
  card2Title: string;
  card2Desc: string;
  card3Title: string;
  card3Desc: string;
  qualityBadge: string;
  qualityTitle: string;
  qualityDesc: string;
  qualityItem1: string;
  qualityItem2: string;
  qualityItem3: string;
  qualityItem4: string;
  qualityItem5: string;
  qualityItem6: string;
  qualityCaptionBadge: string;
  qualityCaptionTitle: string;
  whyBadge: string;
  whyTitle: string;
  whySubtitle: string;
  why1Title: string;
  why1Text: string;
  why2Title: string;
  why2Text: string;
  why3Title: string;
  why3Text: string;
  why4Title: string;
  why4Text: string;
}

export interface CommonTranslations {
  language: string;
  selectLanguage: string;
  pureFlavorsGlobalReach: string;
  exportExcellence: string;
}

export interface TranslationDictionary {
  nav: NavTranslations;
  buttons: ButtonTranslations;
  categories: CategoryTranslations;
  specs: SpecTranslations;
  specValues: SpecValueTranslations;
  home: HomeTranslations;
  modal: ModalTranslations;
  footer: FooterTranslations;
  contact: ContactPageTranslations;
  certificationsPage: CertificationsPageTranslations;
  aboutPage: AboutPageTranslations;
  servicesPage: ServicesPageTranslations;
  productsPage?: any;
  common: CommonTranslations;
}
