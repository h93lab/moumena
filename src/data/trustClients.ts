export interface TrustClient {
  nameEn: string;
  nameAr: string;
  code: string;
  categoryEn: string;
  categoryAr: string;
}

export const DEFAULT_TRUST_CLIENTS: TrustClient[] = [
  { nameEn: 'Ministry of Health & Prevention', nameAr: 'وزارة الصحة ووقاية المجتمع', code: 'UAE MOHAP', categoryEn: 'Federal Ministry', categoryAr: 'وزارة اتحادية' },
  { nameEn: 'Dubai Police General HQ', nameAr: 'القيادة العامة لشرطة دبي', code: 'DUBAI POLICE', categoryEn: 'Government Headquarters', categoryAr: 'قيادة أمنية حكومية' },
  { nameEn: 'Dubai Public Prosecution', nameAr: 'النيابة العامة بدبي', code: 'JUDICIAL GOV', categoryEn: 'Judicial Entity', categoryAr: 'جهة قضائية حكومية' },
  { nameEn: 'Emirates Health Services', nameAr: 'مؤسسة الإمارات للخدمات الصحية', code: 'EHS UAE', categoryEn: 'Healthcare Authority', categoryAr: 'مؤسسة صحية اتحادية' },
  { nameEn: 'Ajman Municipality & Planning', nameAr: 'دائرة البلدية والتخطيط بعجمان', code: 'AJMAN GOV', categoryEn: 'Municipal Government', categoryAr: 'دائرة حكومية' },
  { nameEn: 'Zabeel Ladies Club', nameAr: 'نادي زعبيل للسيدات', code: 'ROYAL PATRONAGE', categoryEn: 'VIP Royal Venue', categoryAr: 'رعاية ملكية كريمة' },
  { nameEn: 'Google Initiatives & Techmakers', nameAr: 'مبادرات Google العالمية', code: 'GLOBAL TECH', categoryEn: 'International Partner', categoryAr: 'شراكة دولية' },
  { nameEn: 'Islamic Health Ministers Summit', nameAr: 'المؤتمر الإسلامي لوزراء الصحة', code: '7TH SESSION', categoryEn: 'Ministerial Summit', categoryAr: 'قمة وزارية دولية' },
];
