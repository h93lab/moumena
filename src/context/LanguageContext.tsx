import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface Translations {
  nav: {
    about: string;
    career: string;
    projects: string;
    contact: string;
    cv: string;
  };
  hero: {
    greeting: string;
    bio: string;
    contactBtn: string;
    showreelBtn: string;
  };
  trust: {
    heading: string;
  };
  about: {
    heading: string;
    text: string;
    clientsCount: string;
    projectsCount: string;
    experienceYears: string;
  };
  projects: {
    heading: string;
    liveProject: string;
    showAll: string;
    showLess: string;
  };
  projectDetail: {
    client: string;
    timeline: string;
    recognition: string;
    overview: string;
    artifacts: string;
    callout: string;
    close: string;
    inquire: string;
  };
  cv: {
    title: string;
    subtitle: string;
    downloadBtn: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    toolsTitle: string;
  };
  contact: {
    badge: string;
    title: string;
    nameLabel: string;
    emailLabel: string;
    msgLabel: string;
    sendBtn: string;
    sending: string;
    sendError: string;
    emailFallback: string;
    sentTitle: string;
    sentMsg: string;
  };
  footer: {
    rights: string;
    crafted: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      career: 'Career',
      projects: 'Projects',
      contact: 'Contact',
      cv: 'CV / Resume',
    },
    hero: {
      greeting: "I'm, Moumena",
      bio: 'An art director & senior designer driven by crafting striking brand identities and unforgettable visual experiences',
      contactBtn: 'Contact Me',
      showreelBtn: 'Watch Showreel',
    },
    trust: {
      heading: 'Trusted by Leading UAE Government Entities & Global Brands',
    },
    about: {
      heading: 'About me',
      text: "With more than 10 years of experience in graphic design and art direction, i focus on brand identity, motion graphics, and high-impact visual campaigns for top government entities and global brands. I truly enjoy turning bold visions into unforgettable visual stories. Let's build something extraordinary together!",
      clientsCount: '16+ Major Entities',
      projectsCount: '30+ Completed Campaigns',
      experienceYears: '10+ Years Experience',
    },
    projects: {
      heading: 'Projects',
      liveProject: 'Live Project',
      showAll: 'Explore all projects',
      showLess: 'Show featured projects',
    },
    projectDetail: {
      client: 'Client',
      timeline: 'Timeline',
      recognition: 'Recognition',
      overview: 'Project Overview & Impact',
      artifacts: 'Visual Artifacts & Deliverables',
      callout: 'Need a similar design for your brand?',
      close: 'Close',
      inquire: 'Inquire Project',
    },
    cv: {
      title: 'Curriculum Vitae',
      subtitle: 'Moumena Bahaa · Art Director & Senior Creative Designer',
      downloadBtn: 'Print / Save PDF',
      experienceTitle: 'Professional Experience',
      educationTitle: 'Education',
      skillsTitle: 'Core Capabilities',
      toolsTitle: 'Mastered Software',
    },
    contact: {
      badge: 'Get in Touch',
      title: "Let's Create Together",
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      msgLabel: 'Project Brief or Inquiry',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      sendError: 'Your message could not be sent. Please try again or email directly.',
      emailFallback: 'Email directly',
      sentTitle: 'Message Received!',
      sentMsg: 'Thank you for reaching out. Moumena will get back to you shortly.',
    },
    footer: {
      rights: 'All rights reserved.',
      crafted: 'H93Lab.com. All rights reserved.',
    },
  },
  ar: {
    nav: {
      about: 'عني',
      career: 'مسيرتي',
      projects: 'المشاريع',
      contact: 'تواصل معي',
      cv: 'السيرة الذاتية',
    },
    hero: {
      greeting: 'أنا، مؤمنة',
      bio: 'مخرجة إبداعية ومصممة أولى متخصصة في صناعة الهويات البصرية والحملات المؤثرة والتجارب البصرية الاستثنائية',
      contactBtn: 'تواصل معي',
      showreelBtn: 'شاهد الشو ريل',
    },
    trust: {
      heading: 'شريك إبداعي معتمد لأبرز الجهات الحكومية والمؤسسات في الإمارات',
    },
    about: {
      heading: 'عني',
      text: 'بخبرة تمتد لأكثر من 10 سنوات في الإخراج الفني وتصميم الجرافيك والموشن، أركز على بناء الهويات البصرية وصناعة الحملات الإعلانية للجهات الحكومية والشركات الرائدة. أسعد بتحويل الأفكار الكبرى إلى قصص بصرية ملهمة لا تُنسى. دعنا نبني شيئاً مبهراً معاً!',
      clientsCount: '16+ جهة حكومية وكبرى',
      projectsCount: '30+ حملة ومشروع منجز',
      experienceYears: '10+ سنوات خبرة عملية',
    },
    projects: {
      heading: 'المشاريع',
      liveProject: 'استعراض المشروع',
      showAll: 'استعرض كل المشاريع',
      showLess: 'اعرض المشاريع المختارة',
    },
    projectDetail: {
      client: 'العميل',
      timeline: 'التاريخ',
      recognition: 'التقدير',
      overview: 'نبذة عن المشروع وأثره',
      artifacts: 'نماذج من الأعمال',
      callout: 'تحتاج تصميمًا مشابهًا لعلامتك؟',
      close: 'إغلاق',
      inquire: 'استفسر عن مشروع',
    },
    cv: {
      title: 'السيرة الذاتية المهنية',
      subtitle: 'مؤمنة بهاء · Art Director & Senior Graphic Designer',
      downloadBtn: 'طباعة / حفظ PDF',
      experienceTitle: 'الخبرات المهنية',
      educationTitle: 'المؤهل العلمي',
      skillsTitle: 'المهارات والقدرات',
      toolsTitle: 'البرامج الاحترافية',
    },
    contact: {
      badge: 'تواصل مباشر',
      title: 'دعنا نبدأ مشروعك القادم',
      nameLabel: 'الاسم الكريم',
      emailLabel: 'البريد الإلكتروني',
      msgLabel: 'تفاصيل المشروع أو الاستفسار',
      sendBtn: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      sendError: 'تعذر إرسال الرسالة. حاول مرة أخرى أو راسلني عبر البريد مباشرةً.',
      emailFallback: 'راسلني بالبريد',
      sentTitle: 'تم استلام رسالتك بنجاح!',
      sentMsg: 'شكراً لتواصلك. ستقوم مؤمنة بالرد عليك في أقرب وقت ممكن.',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      crafted: 'H93Lab.com. All rights reserved.',
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('moumena_lang') as Language) || 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('moumena_lang', newLang);
  };

  const toggleLang = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    setLang(next);
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
