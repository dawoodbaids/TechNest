import type {
  AboutHomeContent,
  AboutPageContent,
  AiServicesContent,
  AreaPageContent,
  BuildingFutureContent,
  ContactPageContent,
  CtaContent,
  DigitalShowcaseContent,
  FooterContent,
  HeroContent,
  MetaContent,
  NavContent,
  NfcShowcaseContent,
  NotFoundContent,
  PortfolioPageContent,
  PortfolioPreviewContent,
  ServiceCardContent,
  ServiceDetailContent,
  ServiceMetaContent,
  SolutionsContent,
  TechStackContent,
  VisualsContent,
  WhatsAppFormContent,
  WhyUsContent,
} from "./types";

export const arMeta: MetaContent = {
  title: "TechNest | حلول NFC والذكاء الاصطناعي والبرمجيات",
  titleTemplate: "%s | TechNest",
  description:
    "TechNest شركة تقنية ناشئة تقدم حلولًا رقمية مبتكرة — منتجات NFC الذكية، حلول الذكاء الاصطناعي، المواقع، تطبيقات الجوال، البرمجيات المخصصة وأتمتة الأعمال — لمساعدة الشركات على تبني التقنية الحديثة.",
  keywords: [
    "بطاقات أعمال NFC",
    "حلول NFC الذكية",
    "روبوتات الدردشة الذكية",
    "تطوير المواقع",
    "تطبيقات الجوال",
    "برمجيات مخصصة",
    "أتمتة الأعمال",
    "وكالة برمجيات",
  ],
  ogLocale: "ar_SA",
  twitterTitle: "TechNest | حلول NFC والذكاء الاصطناعي والبرمجيات",
  twitterDescription:
    "منتجات NFC ذكية، مساعدون بالذكاء الاصطناعي، مواقع، تطبيقات وأتمتة للأعمال الحديثة.",
  brandHome: "الصفحة الرئيسية لـ TechNest",
};

export const arServiceMeta: ServiceMetaContent = {
  nfcTitle: "حلول NFC الذكية",
  nfcDescription:
    "منتجات مدعومة بتقنية NFC — بطاقات أعمال، قوائم طعام، بطاقات مراجعات، علامات وحلول مخصصة — تفتح تجربة رقمية على أي هاتف بلمسة واحدة.",
  aiTitle: "حلول الذكاء الاصطناعي",
  aiDescription:
    "روبوتات دردشة ذكية، أتمتة دعم العملاء، مساعدون وأدوات أعمال مخصصة — مصممة حول نشاطك التجاري وتُطرح حيث تحقق أقصى قيمة.",
  softwareTitle: "خدمات البرمجيات",
  softwareDescription:
    "تطوير المواقع، تطبيقات الجوال، البرمجيات المخصصة وأتمتة الأعمال — برمجيات حديثة وموثوقة تدفع أعمالك إلى الأمام.",
  portfolioTitle: "أعمالنا",
  portfolioDescription:
    "أعمال مفهومية وعروض حية من TechNest في منتجات NFC وروبوتات الذكاء الاصطناعي والمواقع وتطبيقات الجوال والبرمجيات المخصصة والأتمتة.",
  aboutTitle: "عن TechNest",
  aboutDescription:
    "تعرّف على TechNest — استوديو تقني يبني منتجات NFC الذكية ومساعدي الذكاء الاصطناعي والمواقع والتطبيقات والأتمتة، مع تواصل صادق وعمل متقن.",
  contactTitle: "تواصل معنا",
  contactDescription:
    "تواصل مع TechNest عبر واتساب أو الهاتف أو البريد الإلكتروني أو وسائل التواصل الاجتماعي. نرد خلال ساعتي عمل.",
  notFoundTitle: "الصفحة غير موجودة",
};

export const arNav: NavContent = {
  items: [
    { label: "حلول NFC", href: "/nfc-solutions" },
    { label: "حلول الذكاء الاصطناعي", href: "/ai-solutions" },
    { label: "البرمجيات", href: "/software" },
    { label: "أعمالنا", href: "/portfolio" },
    { label: "من نحن", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  aria: "التنقل الرئيسي",
  letsTalk: "لنتحدث",
  toggleMenu: "تبديل قائمة التنقل",
};

export const arFooter: FooterContent = {
  tagline:
    "نبني منتجات NFC والبرمجيات التي تساعد الشركات على التواصل والأتمتة والنمو.",
  solutions: "الحلول",
  company: "الشركة",
  contact: "التواصل",
  rights: "جميع الحقوق محفوظة.",
  contactNote: "تواصل معنا عبر واتساب أو الهاتف أو وسائل التواصل الاجتماعي.",
  whatsappChat: "تواصل معنا عبر واتساب",
};

export const arHero: HeroContent = {
  badge: "حلول رقمية ذكية للأعمال الحديثة",
  titleStart: "تواصل وأتمت ونمُ مع",
  titleHighlight: "تقنية ذكية",
  description:
    "من منتجات NFC التي يحب عملاؤك لمسها، إلى مساعدي الذكاء الاصطناعي والمواقع والتطبيقات والأتمتة — تصوّم TechNest وتبني وتطلق تقنية تعمل من أجل أعمالك.",
  primaryCta: "استكشف الحلول",
  secondaryCta: "تحدث عبر واتساب",
  pillars: ["منتجات NFC الذكية", "حلول الذكاء الاصطناعي", "المواقع والتطبيقات", "أتمتة الأعمال"],
};

export const arAbout: AboutHomeContent = {
  badge: "عن TechNest",
  titleStart: "فريق واحد لمنتجات",
  titleHighlight: "NFC والبرمجيات",
  paragraphs: [
    "TechNest استوديو تقني يربط بين العالمين المادي والرقمي. نصمّم وننتج منتجات NFC الذكية — بطاقات الأعمال، قوائم الطعام، بطاقات المراجعات والمنتجات المخصصة — ونبني البرمجيات التي تقوّي الأعمال الحديثة: روبوتات الذكاء الاصطناعي، المواقع، التطبيقات، الأنظمة المخصصة والأتمتة.",
  ],
  highlights: [
    "تصميم وبناء وبرمجة وتسليم في فريق واحد",
    "تواصل مباشر مع من ينفّذ العمل فعليًا",
    "تقنيات NFC والذكاء الاصطناعي الحديثة منذ اليوم الأول",
    "جداول زمنية صادقة وأسعار واضحة ودعم حقيقي",
  ],
  badgeCardTitle: "أُطلقنا حديثًا",
  badgeCardSub: "بطموحات كبيرة",
  chipTitle: "NFC + AI",
  chipSub: "حديثة بطبيعتها",
  footerTitle: "نحن في البداية فقط",
  footerText:
    "نحن في بداية مشوارنا — وكل مشروع نسلّمه فرصة لإثبات مدى روعة التقنية المصنوعة بعناية.",
  imageAlt: "فريق TechNest أثناء العمل",
};

export const arSolutions: SolutionsContent = {
  eyebrow: "حلولنا",
  title: "ثلاثة مجالات حلول، وشريك واحد",
  description:
    "اكتشف ما نبني — منتجات NFC اللاتلامسية، حلول الذكاء الاصطناعي والبرمجيات المخصصة — وكلها من فريق واحد مكرّس.",
  explore: "استكشف",
  more: "أكثر",
};

export const arNfcShowcase: NfcShowcaseContent = {
  eyebrow: "عرض منتجات NFC",
  title: "المس العالم المادي بلمسة",
  description:
    "منتجات NFC لاتلامسية متميزة تفتح تجربة رقمية على أي هاتف — دون الحاجة إلى تطبيق.",
  images: [
    { src: "/media/images/nfc/nfc-business-card-01.svg", alt: "بطاقة أعمال NFC من TechNest على مكتب", rotate: -3 },
    { src: "/media/images/nfc/nfc-smart-menu-01.svg", alt: "قائمة طعام NFC ذكية من TechNest على طاولة مطعم", rotate: 2.5 },
    { src: "/media/images/nfc/nfc-digital-profile-01.svg", alt: "هاتف يعرض الملف الرقمي لـ TechNest عبر NFC", rotate: -1 },
  ],
  phoneName: "TechNest",
  phoneProfile: "تم فتح الملف",
  phoneSave: "حفظ جهة الاتصال",
  phoneWebsite: "فتح الموقع",
  learnMore: "اعرف المزيد",
};

export const arAiServices: AiServicesContent = {
  eyebrow: "خدمات الذكاء الاصطناعي والبرمجيات",
  title: "برمجيات تؤتمت وتتوسع",
  description:
    "مساعدون ذكيون ومواقع وتطبيقات وأنظمة وأتمتة مخصصة، مبنية بتقنية حديثة قابلة للصيانة.",
  learnMore: "اعرف المزيد",
  chatbotImageAlt: "واجهة روبوت دردشة ذكي من TechNest",
  chatbotLabel: "روبوت الدردشة الذكي",
  dashboardImageAlt: "لوحة تحليلات من TechNest",
  assistantLabel: "المساعد الذكي",
  assistantText: "دعم آلي على مدار الساعة",
  helpTitle: "لست متأكدًا أي حل يناسبك؟",
  helpText: "أخبرنا عن مشروعك وسنرشح لك النهج المناسب.",
  helpButton: "احصل على استشارة مجانية",
};

export const arDigitalShowcase: DigitalShowcaseContent = {
  eyebrow: "التطبيقات والمواقع",
  title: "منتجات رقمية مصممة للأداء",
  description:
    "تطبيقات جوال حديثة ومواقع عالية الأداء — تُصمّم وتُطوّر وتُطلق من فريق واحد.",
  headingStart: "كل شاشة مصممة لتحوّل الزائر إلى",
  headingHighlight: "عميل",
  features: [
    "واجهات سلسة بملمس أصلي",
    "مواقع سريعة التحميل وتحقق نتائج",
    "مصممة بنهج الجوال أولًا وتعمل على كل الأجهزة",
  ],
  paragraph:
    "من منصات الحجز إلى تطبيقات العملاء، نحوّل الأفكار إلى منتجات رقمية مصقولة يستمتع عملاؤك باستخدامها.",
  mobileBadge: "تطبيق جوال",
  mobileImageAlt: "نموذج تطبيق جوال من TechNest",
  websiteImageAlt: "موقع TechNest على شاشة حاسوب محمول",
  responsiveBadge: "سريع ومتجاوب",
};

export const arWhyUs: WhyUsContent = {
  eyebrow: "لماذا TechNest",
  title: "شريك يمكنك التواصل معه فعلًا",
  description: "لا أنظمة تذاكر ولا تعقيد. تصل إلينا مباشرة وتحصل على إجابات صريحة.",
  reasons: [
    {
      title: "فريقان من الخبراء",
      description:
        "متخصصون في أجهزة NFC وفي الذكاء الاصطناعي والبرمجيات — فيُبنى كل مشروع على يد من يمارس هذا العمل يوميًا.",
    },
    {
      title: "تقنية حديثة",
      description:
        "نبني بأحدث الأطر والأدوات ونماذج الذكاء الاصطناعي — سريعة وآمنة ومصممة لتدوم.",
    },
    {
      title: "فريق واحد مكرّس",
      description:
        "يعمل المصممون والمطورون ومهندسو NFC معًا على مشروعك من الفكرة حتى الإطلاق.",
    },
    {
      title: "تسليم سريع",
      description:
        "مراحل واضحة وجداول زمنية صادقة. تُسلَّم معظم المشاريع في أسابيع لا في أشهر.",
    },
    {
      title: "جودة تثق بها",
      description:
        "كل منتج NFC يُختبَر باللمس، وكل سطر برمجي يُراجع — نسلّم عملًا نفخر به.",
    },
    {
      title: "دعم حقيقي",
      description:
        "نبقى متاحين بعد الإطلاق — عبر واتساب والهاتف والبريد الإلكتروني — متى احتجت إلينا.",
    },
  ],
};

export const arPortfolioPreview: PortfolioPreviewContent = {
  eyebrow: "أعمال ومشاهد تجريبية",
  title: "نظرة على ما نبني",
  description: "أعمال مفهومية وعروض حية لمنتجات NFC ومساعدي الذكاء الاصطناعي والتطبيقات والمواقع.",
  viewAll: "عرض جميع المشاريع",
};

export const arBuildingFuture: BuildingFutureContent = {
  eyebrow: "رؤيتنا",
  title: "نبني المستقبل بالتقنية",
  description:
    "TechNest شركة ناشئة أُطلقت حديثًا بفكرة بسيطة: كل عمل يستحق تقنية حديثة وصادقة ومتقنة.",
  cards: [
    {
      title: "حلول رقمية مبتكرة",
      description: "تقنية عملية مبنية حول احتياجات العمل الحقيقية — لا موضات عابرة.",
    },
    {
      title: "تجارب NFC ذكية",
      description: "منتجات لمس-للاتصال تربط العالمين المادي والرقمي بلمسة واحدة.",
    },
    {
      title: "خدمات مدعومة بالذكاء الاصطناعي",
      description: "مساعدون وأتمتة تجيب وتؤهل وتنجز بينما يركز فريقك على ما يهم.",
    },
    {
      title: "تطوير برمجيات مخصصة",
      description: "مواقع وتطبيقات وأنظمة مصممة ومبنية ومطروحة حول طريقة عمل نشاطك الفعلية.",
    },
  ],
};

export const arTechStack: TechStackContent = {
  eyebrow: "مجموعة التقنيات",
  title: "مبني على تقنية حديثة موثوقة",
  description:
    "الأدوات والمنصات التي نستخدمها لتسليم منتجات موثوقة — من أجهزة NFC إلى برمجيات بمستوى الإنتاج.",
  groups: ["الواجهات والتصميم", "الخوادم والبيانات", "الذكاء الاصطناعي والأتمتة", "البنية التحتية والسحابة"],
};

export const arCta: CtaContent = {
  eyebrow: "هيا نبدأ البناء",
  titleStart: "لديك مشروع في ذهنك؟",
  titleHighlight: "هيا نبنيه معًا.",
  description:
    "أخبرنا بفكرتك عبر واتساب واحصل على استشارة وعرض سعر مجاني — دون أي التزام، فقط نصيحة صادقة.",
  primaryCta: "ابدأ عبر واتساب",
  secondaryCta: "تواصل معنا",
};

export const arServiceCard: ServiceCardContent = {
  viewDetails: "عرض التفاصيل",
  explore: "استكشف",
};

export const arServiceDetail: ServiceDetailContent = {
  featuresTitle: "المميزات",
  howWeWorkTitle: "كيف نعمل",
  whatYouGetTitle: "ماذا تحصل عليه",
  techStackTitle: "التقنيات المستخدمة",
  ctaTitle: "مستعد للبدء؟",
  ctaText: "أخبرنا عن مشروعك وسنرد عليك بخطة وجدول زمني واضح.",
  ctaButton: "تحدث عبر واتساب",
  ctaContact: "تواصل معنا",
  relatedEyebrow: "تابع الاستكشاف",
  relatedTitle: "خدمات ذات صلة",
  relatedDescription: "المزيد من الطرق التي يمكننا بها مساعدة أعمالك على النمو.",
  heroEyebrowSuffix: "بالشرح",
  whatsappPrefill: "مرحبًا TechNest! أنا مهتم بخدمة ",
};

export const arAreaPage: AreaPageContent = {
  heroEyebrowPrefix: "TechNest",
  heroTitleHighlight: "بإتقان",
  heroCta: "ابدأ مشروعًا",
  heroSecondary: "تصفح الخدمات",
  useCasesEyebrow: "مصمم لكل قطاع",
  useCasesTitle: "حالات استخدام NFC",
  useCasesDescription:
    "تتكيف تقنية NFC مع أي نشاط — اختر قطاعك لترى كيف تغيّر اللمسة الواحدة التجربة.",
  useCasesSub: "تجارب لمس-للاتصال",
  offerEyebrow: "حلول",
  offerTitle: "ماذا نقدم",
  offerDescription:
    "كل حل مصمم خصيصًا حول نشاطك التجاري — يُحدَّد نطاقه ويُبنى ويُسلَّم بواسطة فريق واحد مكرّس.",
  helpTitle: "لست متأكدًا أي خدمة تناسبك؟",
  helpText: "أخبرنا بما تحتاجه وسنرشدك إلى النهج الصحيح.",
  helpCta: "تواصل معنا",
  helpSecondary: "شاهد أعمالنا",
  relatedEyebrow: "استكشف المزيد",
  relatedTitle: "حلول أخرى",
  relatedDescription: "نبني في مجالات NFC والذكاء الاصطناعي والبرمجيات — ألقِ نظرة على الباقي.",
  seeAll: "عرض جميع المشاريع",
  seeAllText: "أعمال مفهومية ومشاهد عرضية سلّمناها.",
  nfcVisualAlt1: "بطاقة ملف رقمي",
  nfcVisualAlt2: "علامات NFC ذكية",
  aiVisualCaption:
    "ذكاء اصطناعي يجيب ويؤهل ويؤتمت — ثم يرفع تقارير في لوحة معلومات تقرأها فعلًا.",
};

export const arContactPage: ContactPageContent = {
  eyebrow: "تواصل معنا",
  title: "هيا نبدأ",
  titleHighlight: "محادثة",
  description:
    "لا نماذج بلا استجابة — تواصل معنا مباشرة عبر واتساب أو الهاتف أو البريد الإلكتروني. نرد عادةً خلال ساعتي عمل.",
  whatsappTitle: "واتساب",
  whatsappDesc: "أسرع وسيلة للوصول إلينا",
  callTitle: "اتصل بنا",
  callDesc: "تحدث إلى الفريق مباشرة",
  emailTitle: "البريد الإلكتروني",
  emailDesc: "للملخصات التفصيلية والمستندات",
  hoursTitle: "ساعات العمل",
  locationTitle: "الموقع",
  socialTitle: "تابعنا على وسائل التواصل الاجتماعي",
};

export const arWhatsAppForm: WhatsAppFormContent = {
  title: "أرسل لنا رسالة عبر واتساب",
  nameLabel: "اسمك",
  namePlaceholder: "أدخل اسمك",
  messageLabel: "كيف يمكننا مساعدتك؟",
  messagePlaceholder: "أخبرنا عن مشروعك أو الخدمة التي تهتم بها أو الإطار الزمني...",
  submit: "فتح واتساب",
  openText: "إرسال عبر واتساب",
  responseTime: "نرد عادةً خلال ساعتي عمل.",
};

export const arAboutPage: AboutPageContent = {
  eyebrow: "عن TechNest",
  title: "استوديو تقني مبني حول",
  titleHighlight: "فكرة واحدة: نجاحك",
  description:
    "نحن فريق من مهندسي NFC والمصممين والمطورين والاستراتيجيين نؤمن أن التقنية العظيمة يجب أن تكون متاحة وعملية وسهلة التعامل.",
  h2: "نجعل التقنية بسيطة وإنسانية وفعّالة",
  paragraphs: [
    "تأسست TechNest على إحباط بسيط: كثير من الشركات تعاني من تقنية باهظة ومعقدة وغير شخصية. انطلقنا لتغيير ذلك ببناء استوديو يتواصل فيه العملاء مباشرة مع من ينفّذ العمل.",
    "اليوم نصمّم منتجات NFC الذكية — بطاقات الأعمال، قوائم الطعام، بطاقات المراجعات والمنتجات المخصصة — ونبني روبوتات الذكاء الاصطناعي والمواقع وتطبيقات الجوال والأنظمة المخصصة والأتمتة. دائمًا بنفس الوعد: تواصل واضح، ونصيحة صادقة، وعمل نفخر بوضع اسمنا عليه.",
  ],
  highlights: [
    { title: "تقنية حديثة", description: "NFC والذكاء الاصطناعي والبرمجيات الحديثة منذ اليوم الأول." },
    { title: "حلول إبداعية", description: "أفكار مخصصة مصاغة حول نشاطك التجاري." },
    { title: "نهج يركز على العميل", description: "تتحدث مباشرة مع من ينفّذ العمل." },
    { title: "ابتكار مستمر", description: "نتحسن دائمًا ونتعلم دائمًا ونسلّم دائمًا." },
  ],
  imageAlt: "فريق TechNest أثناء العمل",
  valuesEyebrow: "قيمنا",
  valuesTitle: "ما نؤمن به",
  valuesDescription: "المبادئ التي تقف خلف كل مشروع نقبله.",
  values: [
    {
      title: "الابتكار أولًا",
      description:
        "نبقى في طليعة التطور ليعود نشاطك التجاري بأحدث تقنيات NFC والذكاء الاصطناعي، لا بموضات العام الماضي.",
    },
    {
      title: "شراكة لا مجرد مشاريع",
      description: "نفكر على المدى البعيد. نجاحك هو المقياس الذي نقيس أنفسنا به.",
    },
    {
      title: "الصدق والشفافية",
      description:
        "أسعار واضحة وجداول زمنية صادقة بلا مفاجآت خفية. تعرف دائمًا أين يقف مشروعك.",
    },
    {
      title: "جودة تصل إلى الإطلاق",
      description:
        "الأفكار العظيمة لا تعني شيئًا ما لم تُطلق. نوازن بين الجودة والسرعة لنحقق نتائج حقيقية.",
    },
  ],
};

export const arPortfolioPage: PortfolioPageContent = {
  eyebrow: "أعمال ومشاهد تجريبية",
  title: "نظرة على ما نبني",
  titleHighlight: "عمليًا",
  description: "مشاريع مفهومية وعروض حية بنيناها — صفِّ حسب الخدمة لاستكشاف ما نجيده.",
};

export const arNotFound: NotFoundContent = {
  code: "خطأ 404",
  title: "الصفحة غير موجودة",
  text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  back: "العودة إلى الرئيسية",
};

export const arVisuals: VisualsContent = {
  nfcCard: {
    brand: "TechNest",
    chip: "NFC · المس",
    tapToConnect: "المس للاتصال",
    url: "technest.app/u/company",
    name: "TechNest",
    title: "حلول ذكية",
  },
  heroVisual: {
    appName: "TapConnect",
    appSub: "ملف رقمي",
    live: "مباشر",
    tagline: "حلول رقمية ذكية",
    actions: ["مشاركة", "اتصال", "حفظ"],
    rows: [
      { label: "الموقع", value: "technest.app" },
      { label: "واتساب", value: "متاح" },
      { label: "الموقع الجغرافي", value: "مقر TechNest" },
    ],
    tapDetected: "تم رصد اللمس",
    cardLinked: "تم ربط البطاقة",
    chatMessages: [
      { from: "user", text: "المس بطاقتي للاتصال!" },
      { from: "ai", text: "تم حفظ الملف. سعداء بلقائك!" },
    ],
  },
  phoneMockup: {
    profileOpened: "تم فتح الملف",
    byNfcTap: "عبر لمسة NFC",
    contactSaved: "تم حفظ جهة الاتصال",
    welcome: "مرحبًا بك في TechNest — سعداء بلقائك.",
    open: "فتح",
    saveContact: "حفظ جهة الاتصال",
    openWebsite: "فتح الموقع",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",
  },
  browserMockup: {
    nav: ["الرئيسية", "NFC", "AI", "التطبيقات"],
    websiteHero: "نبني منتجات NFC والبرمجيات",
    websiteText: "بطاقات لمس-للاتصال، مساعدون ذكيون، تطبيقات وأتمتة — فريق واحد، هدف واحد.",
    explore: "استكشف",
    contact: "تواصل",
    tags: ["NFC", "AI", "التطبيقات"],
    menuName: "مائدة الحي",
    dishes: [
      { name: "سلمون مشوي", price: "24.00" },
      { name: "طاجين لحم", price: "21.50" },
      { name: "سلطة سيزر", price: "12.00" },
      { name: "تشيز كيك", price: "8.50" },
    ],
    tapToOrder: "المس للطلب",
  },
  chatInterface: {
    title: "مساعد TechNest",
    online: "متصل · مدعوم بالذكاء الاصطناعي",
    aiBadge: "AI",
    placeholder: "اسأل عن NFC أو الذكاء الاصطناعي أو البرمجيات...",
    messages: [
      { from: "user", text: "ما الخدمات التي تقدمونها؟" },
      {
        from: "ai",
        text: "نبني منتجات NFC ومساعدي الذكاء الاصطناعي والمواقع والتطبيقات والأتمتة — كلها مصممة خصيصًا لنشاطك.",
      },
      { from: "user", text: "هل يمكنكم أتمتة دعم عملائنا؟" },
      {
        from: "ai",
        text: "نعم — مساعدنا الذكي يجيب عن الأسئلة الشائعة ويؤهل العملاء المحتملين ويوجّه الحالات المعقدة لفريقك على مدار الساعة.",
      },
    ],
  },
  dashboardMockup: {
    url: "dashboard.technest.app",
    nav: ["نظرة عامة", "التحليلات", "جهات الاتصال", "التقارير", "الإعدادات"],
    team: "فريق TN",
    stats: [
      { label: "اللمسات", value: "1,284" },
      { label: "جهات الاتصال", value: "312" },
      { label: "عمليات الحفظ", value: "96" },
    ],
    weeklyTaps: "اللمسات الأسبوعية",
    growth: "+18%",
    campaign: "حملة NFC نشطة",
    active: "نشطة",
  },
};
