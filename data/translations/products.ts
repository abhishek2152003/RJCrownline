import { LanguageCode } from "./types";

export interface CategoryPageHeader {
  title: string;
  subtitle: string;
}

export interface ProductsPageTranslations {
  allProducts: CategoryPageHeader;
  dryFruits: CategoryPageHeader;
  fruits: CategoryPageHeader;
  vegetables: CategoryPageHeader;
  spices: CategoryPageHeader;
  millets: CategoryPageHeader;
  pulses: CategoryPageHeader;
  seafood: CategoryPageHeader;
}

export const productsTranslations: Record<LanguageCode, ProductsPageTranslations> = {
  en: {
    allProducts: {
      title: "Our Products",
      subtitle: "Explore our premium range of export-quality agricultural commodities, sourced directly from reliable agro vendors.",
    },
    dryFruits: {
      title: "Premium Dry Fruits",
      subtitle: "Discover our exclusive range of export-quality dry fruits, sourced directly from the finest farms. Hand-picked, perfectly processed, and hygienically packed to retain their natural crunch, flavor, and immense nutritional value.",
    },
    fruits: {
      title: "Fresh Export Fruits",
      subtitle: "Experience the natural sweetness and premium quality of our hand-picked, farm-fresh fruits. Carefully sourced, graded, and packed to preserve freshness and quality during global transit.",
    },
    vegetables: {
      title: "Farm Fresh Vegetables",
      subtitle: "Procured from trusted farms across India, our fresh vegetables are carefully sorted, graded, and packed to preserve freshness, quality, and shelf life for international markets.",
    },
    spices: {
      title: "Authentic Indian Spices",
      subtitle: "Known as the spice bowl of the world, India produces spices with rich aromas and intense flavors. Our spices are unadulterated, expertly processed, and tested for supreme purity.",
    },
    millets: {
      title: "Nutritious Millets & Grains",
      subtitle: "Embrace the superfoods of the future. Our export-quality millets and grains are nutrient-dense, sustainably grown, and processed to meet global healthy living standards.",
    },
    pulses: {
      title: "Premium Pulses & Dals",
      subtitle: "As a staple protein source, our pulses are carefully sourced, processed, and sortex-cleaned to meet international quality requirements. We supply premium lentils, chickpeas, dals, and peas for global markets.",
    },
    seafood: {
      title: "Premium Fish & Seafood",
      subtitle: "We supply quality Indian fish and seafood sourced from trusted fisheries and aquaculture partners. Our range includes frozen shrimp, finfish, cephalopods, and other seafood products prepared for international markets.",
    },
  },
  mr: {
    allProducts: {
      title: "आमची उत्पादने",
      subtitle: "विश्वासू कृषी उत्पादकांकडून थेट मिळवलेली आमची निर्यात-गुणवत्तेची दर्जेदार कृषी उत्पादने आणि वस्तू पहा.",
    },
    dryFruits: {
      title: "उत्कृष्ट सुका मेवा",
      subtitle: "उत्कृष्ट बागांमधून थेट मिळवलेला निर्यात-गुणवत्तेचा आमचा सुका मेवा. नैसर्गिक कुरकुरीतपणा, चव आणि पोषण टिकवून ठेवण्यासाठी हाताने निवडलेला व स्वच्छ पॅक केलेला.",
    },
    fruits: {
      title: "ताजी निर्यातक्षम फळे",
      subtitle: "आमच्या शेतातून थेट काढलेल्या ताज्या फळांची नैसर्गिक गोडी आणि उत्तम दर्जा अनुभवा. जागतिक वाहतुकीदरम्यान ताजेपणा टिकवून ठेवण्यासाठी योग्य प्रतवारी आणि पॅकिंग.",
    },
    vegetables: {
      title: "शेतातून ताज्या भाज्या",
      subtitle: "भारतातील नामांकित शेतांमधून मिळवलेल्या आमच्या ताज्या भाज्या, आंतरराष्ट्रीय बाजारपेठेसाठी ताजेपणा आणि टिकाऊपणा टिकवून ठेवण्यासाठी काळजीपूर्वक निवडल्या व पॅक केल्या जातात.",
    },
    spices: {
      title: "अस्सल भारतीय मसाले",
      subtitle: "मसाल्यांचे माहेरघर म्हणून ओळखल्या जाणाऱ्या भारतातील समृद्ध सुगंध आणि तीव्र चवीचे अस्सल मसाले. भेसळमुक्त, तज्ज्ञांच्या देखरेखीखाली प्रक्रिया केलेले आणि १००% शुद्ध.",
    },
    millets: {
      title: "पौष्टिक तृणधान्ये व धान्य",
      subtitle: "भविष्यातील सुपरफूडचा अंगीकार करा. आमची निर्यात दर्जाची तृणधान्ये पोषक घटकांनी समृद्ध, शाश्वतपणे पिकवलेली आणि जागतिक मानकांनुसार स्वच्छ केलेली आहेत.",
    },
    pulses: {
      title: "दर्जेदार कडधान्ये व डाळी",
      subtitle: "प्रथिनांचा मुख्य स्रोत म्हणून, आमची कडधान्ये व डाळी सॉर्टेक्स-क्लीन करून आंतरराष्ट्रीय गुणवत्तेनुसार तयार केली जातात. आम्ही जागतिक बाजारासाठी मसूर, हरभरा, तूरडाळ व मटार पुरवतो.",
    },
    seafood: {
      title: "ताजे मासे व सागरी अन्न",
      subtitle: "आम्ही विश्वासू मत्स्यपालन व सागरी केंद्रांकडून दर्जेदार भारतीय मासे आणि सीफूड पुरवतो. यामध्ये आंतरराष्ट्रीय बाजारासाठी फ्रोजन कोळंबी, मासे आणि इतर सागरी उत्पादनांचा समावेश आहे.",
    },
  },
  hi: {
    allProducts: {
      title: "हमारे उत्पाद",
      subtitle: "विश्वसनीय कृषि उत्पादकों से सीधे प्राप्त हमारे निर्यात-गुणवत्ता वाले प्रीमियम कृषि उत्पादों की विस्तृत श्रृंखला देखें।",
    },
    dryFruits: {
      title: "प्रीमियम सूखे मेवे",
      subtitle: "सर्वोत्तम बागानों से सीधे प्राप्त हमारे निर्यात-गुणवत्ता वाले सूखे मेवे। प्राकृतिक स्वाद, कुरकुरापन और पोषण बनाए रखने के लिए हाथ से चुने और स्वच्छ रूप से पैक किए गए।",
    },
    fruits: {
      title: "ताजे निर्यात फल",
      subtitle: "खेतों से सीधे चुने गए ताजे फलों की प्राकृतिक मिठास और बेहतरीन गुणवत्ता का अनुभव करें। वैश्विक पारगमन में ताजगी बनाए रखने के लिए विशेष रूप से वर्गीकृत और पैक किए गए।",
    },
    vegetables: {
      title: "खेतों से ताजी सब्जियां",
      subtitle: "भारत के विश्वसनीय खेतों से प्राप्त ताजी सब्जियां, अंतरराष्ट्रीय बाजारों के लिए ताजगी और गुणवत्ता बनाए रखने के लिए सावधानीपूर्वक छांटी और पैक की जाती हैं।",
    },
    spices: {
      title: "प्रामाणिक भारतीय मसाले",
      subtitle: "मसालों की भूमि भारत से समृद्ध सुगंध और गहरे स्वाद वाले असली मसाले। मिलावट रहित, विशेषज्ञ रूप से प्रसंस्कृत और सर्वोच्च शुद्धता के साथ प्रमाणित।",
    },
    millets: {
      title: "पौष्टिक मोटे अनाज (मिलेट्स)",
      subtitle: "भविष्य के सुपरफूड को अपनाएं। हमारे निर्यात-गुणवत्ता वाले मोटे अनाज पोषक तत्वों से भरपूर, पर्यावरण-अनुकूल और वैश्विक स्वास्थ्य मानकों के अनुरूप प्रसंस्कृत हैं।",
    },
    pulses: {
      title: "प्रीमियम दालें व दलहन",
      subtitle: "प्रोटीन का प्रमुख स्रोत, हमारी दालें और दलहन अंतरराष्ट्रीय गुणवत्ता मानकों के अनुसार सॉर्टेक्स-क्लीन किए जाते हैं। हम वैश्विक बाजारों के लिए सर्वोत्तम दालें और चने प्रदान करते हैं।",
    },
    seafood: {
      title: "प्रीमियम मछली व समुद्री खाद्य",
      subtitle: "हम प्रमाणित मत्स्य केंद्रों से गुणवत्तापूर्ण भारतीय मछली और सीफूड की आपूर्ति करते हैं। अंतरराष्ट्रीय बाजारों के लिए फ्रोजन झींगा, विभिन्न मछलियां और अन्य समुद्री उत्पाद उपलब्ध हैं।",
    },
  },
  ur: {
    allProducts: {
      title: "ہماری مصنوعات",
      subtitle: "معتبر زرعی شراکت داروں سے براہ راست حاصل کردہ ہماری برآمدی معیار کی زرعی مصنوعات کا جائزہ لیں۔",
    },
    dryFruits: {
      title: "اعلیٰ خشک میوہ جات",
      subtitle: "بہترین فارمز سے حاصل کردہ برآمدی معیار کے خشک میوہ جات۔ قدرتی ذائقہ اور غذائیت برقرار رکھنے کے لیے ہاتھوں سے منتخب اور حفظان صحت کے اصولوں کے مطابق پیک۔",
    },
    fruits: {
      title: "تازہ برآمدی پھل",
      subtitle: "ہمارے تازہ چنے ہوئے پھلوں کی قدرتی مٹھاس اور اعلیٰ معیار کا تجربہ کریں۔ بین الاقوامی نقل و حمل کے دوران تازگی برقرار رکھنے کے لیے خصوصی طور پر پیک کردہ۔",
    },
    vegetables: {
      title: "کھیتوں سے تازہ سبزیاں",
      subtitle: "بھارت کے معتبر فارمز سے حاصل کردہ تازہ سبزیاں، عالمی منڈیوں کے لیے تازگی اور پائیداری برقرار رکھنے کے لیے معیاری طریقے سے پیک کی گئی ہیں۔",
    },
    spices: {
      title: "خالص اور روایتی مصالحہ جات",
      subtitle: "دنیا بھر میں مشہور بھرپور خوشبو اور لاجواب ذائقے کے حامل بھارتی مصالحے۔ ملاوٹ سے پاک، انتہائی محفوظ اور خالص ترین معیار کے ساتھ تیار کردہ۔",
    },
    millets: {
      title: "مفید اور غذائیت سے بھرپور اناج",
      subtitle: "مستقبل کے بہترین سپرفوڈز۔ ہمارا برآمدی اناج غذائیت سے بھرپور، قدرتی اور بین الاقوامی صحت کے معیارات کے عین مطابق پروسیس کیا گیا ہے۔",
    },
    pulses: {
      title: "اعلیٰ دالیں اور اناج",
      subtitle: "پروٹین کا بہترین ذریعہ، ہماری دالیں بین الاقوامی معیار کے مطابق صاف اور پروسیس کی جاتی ہیں۔ ہم عالمی منڈی کے لیے اعلیٰ ترین دالیں اور اناج فراہم کرتے ہیں۔",
    },
    seafood: {
      title: "تازہ سمندری خوراک اور مچھلی",
      subtitle: "ہم معتبر فشریز سے معیاری بھارتی مچھلی اور سمندری خوراک فراہم کرتے ہیں، بشمول منجمد جھینگا اور مچھلی جو بین الاقوامی معیارات پر پوری اترتی ہے۔",
    },
  },
  de: {
    allProducts: {
      title: "Unsere Produkte",
      subtitle: "Entdecken Sie unser erstklassiges Sortiment an Agrarrohstoffen in Exportqualität, bezogen direkt von zuverlässigen Erzeugern.",
    },
    dryFruits: {
      title: "Premium Trockenfrüchte",
      subtitle: "Entdecken Sie unsere erlesenen Trockenfrüchte in Exportqualität. Handverlesen, sorgfältig verarbeitet und hygienisch verpackt für vollen Geschmack und Nährwert.",
    },
    fruits: {
      title: "Frische Exportfrüchte",
      subtitle: "Erleben Sie die natürliche Süße und Premium-Qualität unserer erntefrischen Früchte. Sorgfältig sortiert und verpackt für optimale Frische weltweit.",
    },
    vegetables: {
      title: "Erntefrisches Gemüse",
      subtitle: "Von vertrauenswürdigen Farmen in Indien: Unser frisches Gemüse wird sorgfältig sortiert und verpackt, um Frische und Haltbarkeit zu garantieren.",
    },
    spices: {
      title: "Authentische Indische Gewürze",
      subtitle: "Indien ist weltbekannt für reiche Aromen und intensive Gewürze. Unsere Gewürze sind unverfälscht, fachmännisch verarbeitet und auf höchste Reinheit geprüft.",
    },
    millets: {
      title: "Nahrhafte Hirse & Getreide",
      subtitle: "Entdecken Sie die Superfoods der Zukunft. Unsere Hirse- und Getreidesorten in Exportqualität sind reich an Nährstoffen und nachhaltig angebaut.",
    },
    pulses: {
      title: "Premium Hülsenfrüchte & Linsen",
      subtitle: "Als wertvolle Proteinquelle werden unsere Hülsenfrüchte sorgfältig verarbeitet und sortiert gereinigt für anspruchsvolle internationale Märkte.",
    },
    seafood: {
      title: "Premium Fisch & Meeresfrüchte",
      subtitle: "Wir liefern indischen Fisch und Meeresfrüchte aus vertrauenswürdiger Aquakultur und Fischerei. Gefrorene Garnelen, Speisefische und mehr.",
    },
  },
  ru: {
    allProducts: {
      title: "Наша Продукция",
      subtitle: "Ознакомьтесь с нашим ассортиментом сельскохозяйственной продукции экспортного качества напрямую от проверенных производителей.",
    },
    dryFruits: {
      title: "Премиальные Сухофрукты",
      subtitle: "Эксклюзивные сухофрукты экспортного качества с лучших плантаций. Отобраны вручную и упакованы для сохранения хруста, вкуса и ценных веществ.",
    },
    fruits: {
      title: "Свежие Фрукты на Экспорт",
      subtitle: "Натуральная сладость и высочайшее качество свежих фруктов. Тщательная калибровка и надежная упаковка для безупречной сохранности при транспортировке.",
    },
    vegetables: {
      title: "Свежие Овощи с Ферм",
      subtitle: "Свежие овощи с проверенных ферм Индии. Тщательно сортируются и упаковываются для сохранения свежести на мировых рынках.",
    },
    spices: {
      title: "Подлинные Индийские Специи",
      subtitle: "Индия — мировая колыбель пряностей. Наши специи обладают насыщенным ароматом, не содержат примесей и проходят строгий контроль чистоты.",
    },
    millets: {
      title: "Питательные Злаки и Просо",
      subtitle: "Суперфуды будущего: полезные злаки экспортного качества, выращенные с заботой об экологии и обработанные по мировым стандартам.",
    },
    pulses: {
      title: "Бобовые и Чечевица Высшего Сорта",
      subtitle: "Ценный источник растительного белка. Наша продукция проходит машинную и оптическую очистку для удовлетворения мировых стандартов.",
    },
    seafood: {
      title: "Рыба и Морепродукты Премиум",
      subtitle: "Качественная индийская рыба и морепродукты: замороженные креветки, промысловая рыба и головоногие моллюски для международных рынков.",
    },
  },
};
