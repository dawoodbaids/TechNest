import type {
  AboutPageContent,
  AreaPageContent,
  ContactPageContent,
  CtaContent,
  FooterContent,
  HeroContent,
  MetaContent,
  NavContent,
  NotFoundContent,
  ServiceCardContent,
  ServiceDetailContent,
  ServiceMetaContent,
  SolutionsContent,
  VisualsContent,
  WhatsAppFormContent,
  WhyUsContent,
} from "./types";

export const arMeta: MetaContent = {
  title: "TechNest | حلول NFC والذكاء الاصطناعي والبرمجيات",
  titleTemplate: "%s | TechNest",
  description:
    "تصمّم TechNest وتبني منتجات NFC الذكية ومساعدي الذكاء الاصطناعي والمواقع والتطبيقات والبرمجيات المخصصة — تقنية حديثة لأعمال حديثة.",
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
    "منتجات NFC ذكية ومساعدو ذكاء اصطناعي ومواقع وتطبيقات وأتمتة — من فريق واحد.",
  brandHome: "الصفحة الرئيسية لـ TechNest",
};

export const arServiceMeta: ServiceMetaContent = {
  nfcTitle: "حلول NFC الذكية",
  nfcDescription:
    "منتجات مدعومة بتقنية NFC — بطاقات أعمال، قوائم طعام، بطاقات مراجعات، علامات ومنتجات مخصصة — تفتح تجربة رقمية على أي هاتف بلمسة واحدة.",
  aiTitle: "حلول الذكاء الاصطناعي",
  aiDescription:
    "روبوتات دردشة ذكية، أتمتة دعم العملاء، مساعدون وأدوات أعمال مخصصة — مصممة حول نشاطك التجاري وتُطرح حيث تحقق أقصى قيمة.",
  softwareTitle: "خدمات البرمجيات",
  softwareDescription:
    "تطوير المواقع، تطبيقات الجوال، البرمجيات المخصصة وأتمتة الأعمال — برمجيات حديثة وموثوقة تدفع أعمالك إلى الأمام.",
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
    { label: "من نحن", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  aria: "التنقل الرئيسي",
  letsTalk: "لنتحدث",
  toggleMenu: "تبديل قائمة التنقل",
  language: "اللغة",
  theme: "المظهر",
};

export const arFooter: FooterContent = {
  tagline:
    "منتجات NFC الذكية ومساعدو الذكاء الاصطناعي والبرمجيات — من فريق واحد تتواصل معه مباشرة.",
  solutions: "الحلول",
  company: "الشركة",
  contact: "التواصل",
  rights: "جميع الحقوق محفوظة.",
  contactNote: "تواصل معنا عبر واتساب أو الهاتف أو وسائل التواصل الاجتماعي.",
  whatsappChat: "تواصل معنا عبر واتساب",
};

export const arHero: HeroContent = {
  badge: "NFC · الذكاء الاصطناعي · البرمجيات — شريك واحد",
  titleStart: "تقنية ذكية لـ",
  titleHighlight: "أعمال حديثة",
  description:
    "من منتجات NFC التي تُفتح بلمسة، إلى مساعدي الذكاء الاصطناعي والمواقع والأتمتة — نصمّم ونبني ونطلق تقنية تعمل من أجل أعمالك.",
  primaryCta: "استكشف الحلول",
  secondaryCta: "تحدث عبر واتساب",
  pillars: [
    "منتجات NFC الذكية",
    "مساعدو الذكاء الاصطناعي",
    "المواقع والتطبيقات",
    "أتمتة الأعمال",
  ],
};

export const arSolutions: SolutionsContent = {
  eyebrow: "ما نقوم به",
  title: "ثلاث طرق لمساعدتك",
  description:
    "منتجات NFC وحلول الذكاء الاصطناعي وبرمجيات مخصصة — تُحدَّد وتُبنى وتُسلَّم من فريق واحد.",
  explore: "استكشف",
  more: "أكثر",
};

export const arWhyUs: WhyUsContent = {
  eyebrow: "لماذا TechNest",
  title: "شريك يمكنك التواصل معه فعلًا",
  description: "لا أنظمة تذاكر ولا تعقيد. تصل إلينا مباشرة وتحصل على إجابات صريحة.",
  reasons: [
    {
      title: "فريقان من الخبراء",
      description:
        "متخصصون في أجهزة NFC ومهندسو ذكاء اصطناعي وبرمجيات — كل مشروع يُبنى على يد من يمارس هذا العمل يوميًا.",
    },
    {
      title: "تقنية حديثة",
      description:
        "أحدث الأطر والأدوات ونماذج الذكاء الاصطناعي — سريعة وآمنة ومصممة لتدوم.",
    },
    {
      title: "تسليم سريع",
      description:
        "مراحل واضحة وجداول زمنية صادقة. تُسلَّم معظم المشاريع في أسابيع لا في أشهر.",
    },
    {
      title: "دعم حقيقي",
      description:
        "نبقى متاحين بعد الإطلاق — عبر واتساب والهاتف والبريد الإلكتروني.",
    },
  ],
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
  relatedEyebrow: "استكشف المزيد",
  relatedTitle: "حلول أخرى",
  relatedDescription: "نبني في مجالات NFC والذكاء الاصطناعي والبرمجيات — ألقِ نظرة على الباقي.",
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
  instagramTitle: "انستغرام",
  instagramDesc: "تابع أعمالنا وآخر المستجدات",
  facebookTitle: "فيسبوك",
  facebookDesc: "تواصل معنا عبر فيسبوك",
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
