export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  categoryAr: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  summary: string;
  summaryAr: string;
  col1TopImage: string;
  col1BottomImage: string;
  col2Image: string;
  tags: string[];
  recognition?: string;
  recognitionAr?: string;
  year: string;
  customVisuals?: boolean;
  videoUrls?: string[];
}

export interface CareerMilestone {
  education?: boolean;
  period: string;
  periodAr: string;
  role: string;
  roleAr: string;
  company: string;
  companyAr: string;
  location: string;
  locationAr: string;
  type: string;
  typeAr: string;
  description: string;
  descriptionAr: string;
  achievements: string[];
  achievementsAr: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Moumena Bahaa",
    shortName: "Moumena",
    title: "Art Director & Senior Graphic Designer",
    heroGreeting: "I'm, Moumena",
    heroBio: "An art director & senior designer driven by crafting striking brand identities and unforgettable visual experiences",
    aboutText:
      "With more than 10 years of experience in graphic design and art direction, i focus on brand identity, motion graphics, and high-impact visual campaigns for top government entities and global brands. I truly enjoy turning bold visions into unforgettable visual stories. Let's build something extraordinary together!",
    location: "Dubai, United Arab Emirates",
    email: "moumena94@gmail.com",
    phone: "+971503071603",
    whatsapp: "https://wa.me/971503071603",
    avatarUrl: "",
    experienceYears: "10+",
    clientsCount: "16+",
    projectsCount: "30+",
    defaultAvatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    avatar3dFallback: "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png",
  },

  careerJourney: [
    {
      period: "Oct 2025 - Present",
      periodAr: "أكتوبر 2025 - حتى الآن",
      role: "Senior Creative & Graphic Designer",
      roleAr: "مصممة إبداعية وجرافيك أولى",
      company: "Housecall",
      companyAr: "هاوس كول",
      location: "Dubai, UAE",
      locationAr: "دبي، الإمارات",
      type: "Healthcare Tech",
      typeAr: "تكنولوجيا الرعاية الصحية",
      description: "Leading creative direction across social media, digital marketing, brand communication, and healthcare awareness initiatives.",
      descriptionAr: "قيادة التطوير الإبداعي عبر منصات التواصل والتسويق الرقمي والهوية المؤسسية وحملات التوعية الصحية.",
      achievements: [
        "Translate business goals into engaging, on-brand creative campaigns.",
        "Design full digital and product assets, app store visuals, and campaign materials.",
        "Direct visual storytelling and copy development for high-retention engagement.",
      ],
      achievementsAr: [
        "تحويل الأهداف التجارية إلى حملات إبداعية ملهمة تعزز الهوية.",
        "تصميم أصول المنتجات الرقمية وشاشات المتاجر والمواد الترويجية.",
        "توجيه السرد البصري وكتابة النصوص الإبداعية لزيادة التفاعل.",
      ],
    },
    {
      period: "Aug 2024 - Sep 2025",
      periodAr: "أغسطس 2024 - سبتمبر 2025",
      role: "Art Director",
      roleAr: "مخرجة فنية (Art Director)",
      company: "NFINITY8",
      companyAr: "إنفينيتي 8",
      location: "Dubai, UAE",
      locationAr: "دبي، الإمارات",
      type: "Creative Agency",
      typeAr: "وكالة إبداعية رائدة",
      description: "Headed social media design projects and creative themes for top UAE governmental and health accounts.",
      descriptionAr: "إدارة مشاريع التصميم لمنصات التواصل الاجتماعي وتطوير الثيمات الإبداعية للجهات الحكومية والصحية الكبرى.",
      achievements: [
        "Led social media design projects for Emirates Health Services (EHS).",
        "Crafted customized visual themes for major government events and special national occasions.",
      ],
      achievementsAr: [
        "قيادة مشاريع تصميم التواصل لمؤسسة الإمارات للخدمات الصحية.",
        "تصميم ثيمات وهوية الفعاليات والمناسبات الوطنية والرسمية الكبرى.",
      ],
    },
    {
      period: "May 2019 - Feb 2024",
      periodAr: "مايو 2019 - فبراير 2024",
      role: "Senior Graphic Designer",
      roleAr: "مصممة جرافيك أولى",
      company: "INFOCUS MEDIA",
      companyAr: "إنفوكس ميديا",
      location: "Dubai, UAE",
      locationAr: "دبي، الإمارات",
      type: "Media Production",
      typeAr: "إنتاج إعلامي وتسويقي",
      description: "Spearheaded design and production for premier national accounts, including the Ministry of Health & Prevention.",
      descriptionAr: "قيادة التصميم والإنتاج لكبار العملاء بما في ذلك وزارة الصحة ووقاية المجتمع ومؤسسة الإمارات للخدمات الصحية.",
      achievements: [
        "Led high-agility visual production during the COVID-19 pandemic.",
        "Produced motion video praised and tweeted by HH Sheikh Mohammed bin Rashid Al Maktoum on World Health Day.",
        "Awarded official Certificate of Appreciation by the UAE Ministry of Health & Prevention.",
      ],
      achievementsAr: [
        "قيادة الإنتاج البصري الاستثنائي خلال جائحة كوفيد-19.",
        "إنتاج فيديو موشن حظي بإشادة وتغريدة رسمية من سمو الشيخ محمد بن راشد في يوم الصحة العالمي.",
        "نيل شهادة شكر وتقدير رسمية من إدارة الاتصال الحكومي بوزارة الصحة.",
      ],
    },
    {
      period: "Apr 2018 - Apr 2019",
      periodAr: "أبريل 2018 - أبريل 2019",
      role: "Motion Graphic Designer",
      roleAr: "مصممة موشن جرافيك ومونتاج",
      company: "ZOOM STUDIO",
      companyAr: "زووم ستوديو",
      location: "Dubai, UAE",
      locationAr: "دبي، الإمارات",
      type: "Animation Studio",
      typeAr: "استوديو رسوم متحركة",
      description: "Created captivating static and motion graphics to amplify brand presence and visibility.",
      descriptionAr: "تصميم الرسوم المتحركة والجرافيك الثابت لتعزيز الوعي بالعلامات التجارية.",
      achievements: [
        "Orchestrated media coverage and social media campaigns for multi-sector clients.",
        "Demonstrated high proficiency in video editing and audio-visual synchronization.",
      ],
      achievementsAr: [
        "إدارة التغطيات الإعلامية وحملات التواصل لعملاء متعددي القطاعات.",
        "إتقان تقنيات المونتاج والمؤثرات البصرية وتنسيق الصوت والصورة.",
      ],
    },
    {
      period: "Apr 2017 - Apr 2018",
      periodAr: "أبريل 2017 - أبريل 2018",
      role: "Lead Graphic Designer",
      roleAr: "رئيسة قسم التصميم",
      company: "EMIRATES VISION MEDIA NETWORK",
      companyAr: "شبكة رؤية الإمارات الإعلامية",
      location: "Dubai, UAE",
      locationAr: "دبي، الإمارات",
      type: "Media Network",
      typeAr: "شبكة إعلامية وطنية",
      description: "Led the design department and maintained continuous communication with major media agencies.",
      descriptionAr: "إدارة قسم التصميم والتواصل المستمر مع الوكالات الإعلامية والإشراف على المنصات الرقمية.",
      achievements: [
        "Oversaw social media design across Twitter, Instagram, Facebook, and Telegram.",
        "Produced animated infographics, official invitations, advertisements, and live event coverage.",
      ],
      achievementsAr: [
        "الإشراف على تصاميم قنوات التواصل (تويتر، إنستغرام، فيسبوك، تيليغرام).",
        "إنتاج الإنفوجرافيك المتحرك والدعوات الرسمية والتغطيات المباشرة للفعاليات.",
      ],
    },
    {
      period: "Apr 2015 - Mar 2017",
      periodAr: "أبريل 2015 - مارس 2017",
      role: "Graphic Designer & Video Editor",
      roleAr: "مصممة جرافيك ومونتيرة فيديو",
      company: "AJMAN UNIVERSITY",
      companyAr: "جامعة عجمان",
      location: "Ajman, UAE",
      locationAr: "عجمان، الإمارات",
      type: "Higher Education",
      typeAr: "التعليم العالي والتدريب",
      description: "Mentored students in videography techniques and industry-standard creative software.",
      descriptionAr: "تدريب وتوجيه الطلبة على تقنيات التصوير والبرامج الاحترافية (After Effects, Premiere, Photoshop).",
      achievements: [
        "Provided training on After Effects, Premiere, Photoshop, and Illustrator.",
        "Produced dynamic motion videos for university advertisements and college events.",
      ],
      achievementsAr: [
        "تقديم التدريب على برامج أدوبي للموشن والتصميم والمونتاج.",
        "إنتاج مقاطع فيديو ترويجية لإعلانات وفعاليات الجامعة.",
      ],
    },
    {
      period: "2013 - 2017",
      education: true,
      periodAr: "2013 - 2017",
      role: "Bachelor's Degree",
      roleAr: "بكالوريوس التصميم الجرافيكي والإعلام",
      company: "Ajman University",
      companyAr: "جامعة عجمان",
      location: "Ajman, UAE",
      locationAr: "عجمان، الإمارات",
      type: "Academic Foundation",
      typeAr: "الدرجة العلمية الأكاديمية",
      description: "Bachelor's Degree in Graphic Design and Radio & TV Information and Mass Communications and Humanities.",
      descriptionAr: "بكالوريوس في التصميم الجرافيكي والإذاعة والتلفزيون والاتصال الجماهيري والعلوم الإنسانية (تقدير: جيد جداً B+).",
      achievements: [
        "Graduated with GPA: B+.",
        "Comprehensive training in media production, creative communication, and digital visual arts.",
      ],
      achievementsAr: [
        "التخرج بمعدل تراكمي متميز (B+).",
        "تأهيل شامل في الإنتاج الإعلامي، الاتصال الجماهيري، وفنون التصميم الرقمي.",
      ],
    },
  ] as CareerMilestone[],

  cornerIcons: {
    moon: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    object3d: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    lego: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    group3d: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
  },

  projects: [
    // 01. MOHAP COVID-19 & Royal Tweet
    {
      id: "mohap-uae",
      number: "01",
      category: "Government / Healthcare Campaign",
      categoryAr: "حملة حكومية وصحية وطنية",
      title: "Ministry of Health & Prevention",
      titleAr: "وزارة الصحة ووقاية المجتمع (كوفيد-19)",
      client: "UAE Ministry of Health & Prevention (MOHAP)",
      clientAr: "وزارة الصحة ووقاية المجتمع",
      summary:
        "Comprehensive visual identity and nation-wide health awareness campaign during COVID-19, including the official video tweeted by HH Sheikh Mohammed bin Rashid Al Maktoum on World Health Day and an official certificate of appreciation.",
      summaryAr:
        "الهوية البصرية المتكاملة وحملة التوعية الوطنية الكبرى خلال جائحة كوفيد-19، وتتضمن فيديو اليوم العالمي للصحة الذي غرد به صاحب السمو الشيخ محمد بن راشد آل مكتوم، مع شهادة شكر وتقدير رسمية.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
      tags: ["Motion Graphics", "Awareness Campaign", "Government Leadership"],
      recognition: "Honored with Official Certificate of Appreciation & Royal Tweet",
      recognitionAr: "شهادة شكر وتقدير رسمية وتغريدة صاحب السمو الشيخ محمد بن راشد",
      year: "2020 - 2024",
    },

    // 02. Emirates Health Services (EHS)
    {
      id: "ehs-healthcare",
      number: "02",
      category: "Healthcare Brand Direction",
      categoryAr: "إخراج الحملات الصحية والمؤسسية",
      title: "Emirates Health Services (EHS)",
      titleAr: "مؤسسة الإمارات للخدمات الصحية",
      client: "Emirates Health Services (EHS)",
      clientAr: "مؤسسة الإمارات للخدمات الصحية",
      summary:
        "Art direction and multi-campaign social media coverage for Emirates Health Services, including Smart Nutrition, Nursing and Midwifery frontline campaigns, World Drug Day, and World Family Doctors Day.",
      summaryAr:
        "الإخراج الفني وتغطية الحملات لمنصات التواصل لمؤسسة الإمارات للخدمات الصحية، ومنها التغذية الذكية، وأبطال التمريض، واليوم العالمي لمكافحة المخدرات، وطبيب الأسرة.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
      tags: ["Creative Direction", "Healthcare Campaigns", "Social Media Suites"],
      recognition: "Federal Healthcare Strategic Partner",
      recognitionAr: "شراكة استراتيجية مع القطاع الصحي الاتحادي",
      year: "2022 - 2025",
    },

    // 03. Zabeel Ladies Club x Google (#IAmRemarkable)
    {
      id: "zabeel-remarkable",
      number: "03",
      category: "Event Branding / Spatial Design",
      categoryAr: "تصميم الفعاليات والمطبوعات الفاخرة",
      title: "Zabeel Ladies Club -- #IAmRemarkable",
      titleAr: "نادي زعبيل للسيدات (#IAmRemarkable)",
      client: "Zabeel Ladies Club x Google Initiative",
      clientAr: "نادي زعبيل للسيدات ومبادرة Google",
      summary:
        "Full-scale production of all visual and physical assets for the high-profile #IAmRemarkable event under the patronage of HH Sheikha Latifa bint Hamdan Al Maktoum, featuring custom stage typography, media popups, ID systems, and inspirational walls.",
      summaryAr:
        "الإنتاج الكامل لكافة المواد المطبوعة والرقمية لحدث #IAmRemarkable برعاية سمو الشيخة لطيفة بنت حمدان آل مكتوم، متضمناً جدار التصوير الإعلامي (Google, Atasay, Dhamani) وباجات المنظمين وأعمدة التحفيز.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
      tags: ["Event Architecture", "VIP Print", "Spatial Typography"],
      recognition: "Held at Zabeel Ladies Club with Google Partnership",
      recognitionAr: "رعاية سمو الشيخة لطيفة بنت حمدان وشراكة Google",
      year: "2022 - 2024",
    },

    // 04. Dubai Police & Public Prosecution
    {
      id: "dubai-police-prosecution",
      number: "04",
      category: "Public Sector / Smart Services",
      categoryAr: "القطاع الحكومي والخدمات الذكية",
      title: "Dubai Police & Public Prosecution",
      titleAr: "شرطة دبي والنيابة العامة",
      client: "Dubai Police & Dubai Public Prosecution",
      clientAr: "القيادة العامة لشرطة دبي والنيابة العامة",
      summary:
        "Strategic motion graphic presentations and interactive infographic systems for Dubai smart public initiatives including the Marhous initiative, Smart Bail service, and customer journey transformations.",
      summaryAr:
        "عروض الموشن جرافيك التفاعلية وأنظمة الإنفوجرافيك لمبادرات حكومة دبي الذكية بما في ذلك مبادرة مرخوص، الكفالة الذكية، ونظم رحلة المتعامل.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
      tags: ["Infographics", "Smart Government", "UI/UX Flow"],
      recognition: "Dubai Police Certificate of Appreciation",
      recognitionAr: "شهادة تقدير رسمية من القيادة العامة لشرطة دبي",
      year: "2021 - 2023",
    },

    // 05. Islamic Conference of Health Ministers
    {
      id: "islamic-health-conference",
      number: "05",
      category: "Ministerial Summit / Global Media",
      categoryAr: "مؤتمرات وزارية وتغطية إعلامية",
      title: "Islamic Conference of Health Ministers",
      titleAr: "المؤتمر الإسلامي لوزراء الصحة",
      client: "7th Session Islamic Conference of Health Ministers",
      clientAr: "الدورة السابعة للمؤتمر الإسلامي لوزراء الصحة",
      summary:
        "Comprehensive branding, digital coverage, and real-time social media templates for the 7th Session of the Islamic Conference of Health Ministers, including ministerial keynotes and diplomatic delegations.",
      summaryAr:
        "الهوية والتغطية الرقمية المباشرة للدورة السابعة للمؤتمر الإسلامي لوزراء الصحة، متضمنةً تصاميم الكلمة الافتتاحية لمعالي الوزير عبدالرحمن العويس والوفود الوزارية.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
      tags: ["Summit Media", "Diplomatic Coverage", "Digital Templates"],
      recognition: "Official Diplomatic Summit Design",
      recognitionAr: "تغطية المؤتمر الوزاري الإسلامي الرسمي",
      year: "2021",
    },

    // 06. Ajman Municipality & Planning Dept
    {
      id: "ajman-municipality",
      number: "06",
      category: "Motion Graphic & Digital Innovation",
      categoryAr: "موشن جرافيك وابتكار رقمي حكومي",
      title: "Ajman Municipality & Planning Dept",
      titleAr: "دائرة البلدية والتخطيط بعجمان",
      client: "Ajman Municipality & Planning Dept",
      clientAr: "بلدية عجمان ومبادرة AjmanX",
      summary:
        "Motion graphic promotional and educational video series for the Smart E-Services Portal, the 1 Million Arab Coders initiative with AjmanX, and community public safety animated campaigns.",
      summaryAr:
        "سلسلة أفلام موشن جرافيك ترويجية وتوعوية لبوابة الخدمات الإلكترونية الذكية، ومبادرة مليون مبرمج عربي عبر AjmanX، والتوعية بالسلامة ومخاطر الحريق.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
      tags: ["Motion Graphics", "AjmanX Coding", "Public Safety Animation"],
      recognition: "Smart Government Digital Transformation",
      recognitionAr: "التحول الرقمي لحكومة عجمان الذكية",
      year: "2019 - 2021",
    },

    // 07. Housecall Mobile Healthcare Tech App
    {
      id: "housecall-healthtech",
      number: "07",
      category: "Healthcare Tech & Mobile App UI",
      categoryAr: "تكنولوجيا الرعاية الصحية وتطبيقات الهواتف",
      title: "Housecall On-Demand Doctor App",
      titleAr: "تطبيق هاوس كول (طبيبك في منزلك)",
      client: "Housecall Healthcare",
      clientAr: "هاوس كول دبي",
      summary:
        "Comprehensive visual branding, app store graphics, performance marketing campaigns, and patient onboarding creative suites for the leading on-demand healthcare platform in Dubai.",
      summaryAr:
        "الهوية الإعلانية المتكاملة وتصاميم واجهات متجر التطبيقات وحملات الاستحواذ الرقمي لمنصة هاوس كول الرائدة في الرعاية الصحية وخدمات الطبيب المنزلي الفورية بدبي.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
      tags: ["HealthTech", "App UI Graphics", "Social Marketing", "Patient Onboarding"],
      recognition: "Premier Dubai On-Demand Health Brand",
      recognitionAr: "العلامة الرائدة لخدمات الرعاية الصحية المنزلية في دبي",
      year: "2025 - Present",
    },

    // 08. NFINITY8 Creative Agency & UAE National Celebrations
    {
      id: "nfinity8-campaigns",
      number: "08",
      category: "National Day & Creative Agency Direction",
      categoryAr: "المناسبات الوطنية والهويات الحكومية الكبرى",
      title: "UAE National Day & Federal Themes",
      titleAr: "احتفالات عيد الاتحاد ويوم العلم الإماراتي",
      client: "NFINITY8 & Federal UAE Entities",
      clientAr: "وكالة إنفينيتي 8 والجهات الحكومية",
      summary:
        "High-impact art direction and customized celebratory themes for UAE National Day, UAE Flag Day, and premier governmental campaigns combining heritage with contemporary luxury design.",
      summaryAr:
        "الإخراج الفني المتقدم وتصميم الثيمات البصرية لاحتفالات عيد الاتحاد ويوم العلم الإماراتي والمناسبات الحكومية الكبرى التي تمزج بين الأصالة التراثية والفخامة المعاصرة.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
      tags: ["Art Direction", "National Day Campaigns", "Event Themes", "Visual Identity"],
      recognition: "Official UAE Celebrations Visual Direction",
      recognitionAr: "الإخراج البصري لاحتفالات المناسبات الوطنية الرسمية",
      year: "2024 - 2025",
    },

    // 09. ZOOM Studio Motion Graphics & Commercial Campaigns
    {
      id: "zoom-motion-media",
      number: "09",
      category: "Motion Graphics & Video Storytelling",
      categoryAr: "الموشن جرافيك والإنتاج الإعلاني المرئي",
      title: "Commercial Motion Graphics & 3D Video",
      titleAr: "إعلانات الموشن جرافيك والمؤثرات البصرية",
      client: "Zoom Studio Commercial Clients",
      clientAr: "استوديو زووم والشركات التجارية",
      summary:
        "Dynamic 2D/3D kinetic animations, motion infographics, commercial promos, and video editing for high-growth commercial brands across the UAE and GCC.",
      summaryAr:
        "تصميم الرسوم المتحركة الحركية ثنائية وثلاثية الأبعاد والإعلانات الترويجية ومونتاج الفيديو لشركات وعلامات تجارية كبرى في الإمارات ودول الخليج.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
      tags: ["2D/3D Animation", "Kinetic Typography", "Video Editing", "Commercial Ads"],
      recognition: "Broadcast & Digital Video Excellence",
      recognitionAr: "التميز في إنتاج الفيديو الرقمي والإعلاني",
      year: "2018 - 2019",
    },

    // 10. Emirates Vision Media Network
    {
      id: "emirates-vision-network",
      number: "10",
      category: "Digital Media Network & News Infographics",
      categoryAr: "شبكات الأخبار الرقمية والإنفوجرافيك الإعلامي",
      title: "Emirates Vision Media Network Identity",
      titleAr: "شبكة رؤية الإمارات الإعلامية",
      client: "Emirates Vision Media Network",
      clientAr: "شبكة رؤية الإمارات",
      summary:
        "Art direction and visual design leadership for the nationwide news network across Twitter, Instagram, and Telegram, producing animated news cards, live events coverage, and diplomatic infographics.",
      summaryAr:
        "قيادة الإخراج الفني وقسم التصميم للشبكة الإعلامية الوطنية عبر تويتر وإنستغرام وتيليغرام، وإنتاج كروت الأخبار العاجلة المتحركة والتغطيات الحية للفعاليات والإنفوجرافيك التفاعلي.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
      tags: ["Digital Media", "Breaking News Design", "Infographics", "Live Events"],
      recognition: "Top UAE Media Network Leadership",
      recognitionAr: "قيادة الهوية البصرية لأكبر الشبكات الإعلامية الإماراتية",
      year: "2017 - 2018",
    },

    // 11. Ajman University Academic Media
    {
      id: "ajman-university-media",
      number: "11",
      category: "Higher Education & Academic Media",
      categoryAr: "التعليم العالي والإنتاج الإعلامي والأكاديمي",
      title: "Ajman University Commencements & Student Lab",
      titleAr: "جامعة عجمان وحفلات التخرج وورش التدريب",
      client: "Ajman University",
      clientAr: "جامعة عجمان",
      summary:
        "Production of official university commencement visual assets, student recruitment promotional motion videos, and hands-on media training programs for undergraduate designers in Adobe Suite.",
      summaryAr:
        "إنتاج الهوية البصرية لحفلات التخرج الرسمية، وفيديوهات الترويج الأكاديمي، وقيادة ورش العمل التدريبية لطلبة الإعلام والتصميم على حزمة برامج أدوبي الاحترافية.",
      col1TopImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1BottomImage:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2Image:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
      tags: ["Academic Identity", "Commencement Branding", "Mentorship", "Video Production"],
      recognition: "Dean's & University Recognition",
      recognitionAr: "تكريم رسمي من رئاسة الجامعة وإدارة الاتصال",
      year: "2015 - 2017",
    },
  ] as ProjectItem[],
};
