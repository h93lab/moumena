import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const servicesAr = [
    {
      number: '01',
      title: 'الإخراج الفني والاستراتيجية الإبداعية',
      description: 'قيادة إبداعية استراتيجية لتحويل أهداف العلامات الكبرى والجهات الرسمية إلى رؤى بصرية موحدة عبر كافة المنصات.',
      skills: ['الإخراج الفني', 'السرد البصري', 'بناء الحملات'],
    },
    {
      number: '02',
      title: 'الموشن جرافيك والإنتاج المرئي',
      description: 'تصميم رسوم متحركة 2D/3D احترافية وتحريك طبوغرافي ومونتاج فيديو فائق الدقة مناسب للمنصات الرقمية والبث التلفزيوني.',
      skills: ['After Effects', 'Premiere Pro', '3D Motion', 'Kinetic Typography'],
    },
    {
      number: '03',
      title: 'الهوية البصرية وأنظمة التصميم',
      description: 'بناء هويات بصرية متكاملة تبدأ من الشعار ونظم الألوان والخطوط وصولاً إلى أدلة الهوية الصارمة التي تضمن حضوراً استثنائياً.',
      skills: ['أدلة الهوية', 'Design Systems', 'الأيقونات', 'الخطوط'],
    },
    {
      number: '04',
      title: 'حملات التواصل الاجتماعي والإنفوجرافيك',
      description: 'تصميم حزم المحتوى الرقمي والمنشورات التفاعلية والإنفوجرافيك الميسر لعرض البيانات المعقدة بكفاءة وجاذبية.',
      skills: ['إدارة المنصات', 'إنفوجرافيك البيانات', 'التوعية الصحية'],
    },
    {
      number: '05',
      title: 'تصميم الفعاليات والمطبوعات الفاخرة',
      description: 'تصميم جدران التصوير الإعلامي ومنصات المؤتمرات والباجات والكتيبات الرسمية والمواد الإعلانية المكانية لأرقى المناسبات.',
      skills: ['تصميم الفعاليات', 'الطباعة الفاخرة', 'الهندسة المكانية', 'التغليف'],
    },
  ];

  const currentServices = lang === 'ar' ? servicesAr : PORTFOLIO_DATA.services;

  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: "Services" */}
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {t.services.heading}
          </h2>
        </FadeIn>

        {/* 5 Service items list */}
        <div className="w-full flex flex-col">
          {currentServices.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className={`w-full py-8 sm:py-10 md:py-12 ${
                index !== 0 ? 'border-t border-[rgba(12,12,12,0.15)]' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 md:gap-16">
                {/* Number on the left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 select-none tracking-tighter"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Name + description stacked vertically on the right */}
                <div className="flex flex-col justify-center sm:pt-2 md:pt-4 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C]/60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mt-3 pt-2">
                    {service.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs uppercase tracking-wider text-[#0C0C0C]/70 font-medium"
                      >
                        {skill} {sIdx < service.skills.length - 1 ? '·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
