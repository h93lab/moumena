import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { DEFAULT_TRUST_CLIENTS, type TrustClient } from '../data/trustClients';
import type { Language, Translations } from './LanguageContext';
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from '../lib/supabaseConfig';

export interface SiteContent {
  profile: typeof PORTFOLIO_DATA.profile;
  careerJourney: typeof PORTFOLIO_DATA.careerJourney;
  cornerIcons: typeof PORTFOLIO_DATA.cornerIcons;
  projects: typeof PORTFOLIO_DATA.projects;
  trustClients: TrustClient[];
  copy?: Record<Language, Translations>;
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  profile: PORTFOLIO_DATA.profile,
  careerJourney: PORTFOLIO_DATA.careerJourney,
  cornerIcons: PORTFOLIO_DATA.cornerIcons,
  projects: PORTFOLIO_DATA.projects,
  trustClients: DEFAULT_TRUST_CLIENTS,
};

export function mergeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    ...DEFAULT_SITE_CONTENT,
    ...value,
    profile: { ...DEFAULT_SITE_CONTENT.profile, ...value?.profile },
    cornerIcons: { ...DEFAULT_SITE_CONTENT.cornerIcons, ...value?.cornerIcons },
    careerJourney: Array.isArray(value?.careerJourney) ? value.careerJourney : DEFAULT_SITE_CONTENT.careerJourney,
    projects: Array.isArray(value?.projects) ? value.projects : DEFAULT_SITE_CONTENT.projects,
    trustClients: Array.isArray(value?.trustClients) ? value.trustClients : DEFAULT_SITE_CONTENT.trustClients,
  };
}

interface SiteContentContextValue {
  content: SiteContent;
  ready: boolean;
  refresh: () => Promise<void>;
}

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [overrides, setOverrides] = useState<Partial<SiteContent>>({});
  const [ready, setReady] = useState(false);

  const refresh = async () => {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/site_content?id=eq.1&select=data`, {
        headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Accept: 'application/json' },
      });
      if (!response.ok) return;
      const rows = await response.json() as Array<{ data: Partial<SiteContent> }>;
      if (rows[0]?.data) setOverrides(rows[0].data);
    } catch {
      // Built-in content remains available when the free project is paused or offline.
    } finally {
      setReady(true);
    }
  };

  useEffect(() => { void refresh(); }, []);
  const content = useMemo(() => mergeSiteContent(overrides), [overrides]);

  useEffect(() => {
    if (!content.profile.avatarUrl) return;
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (icon) { icon.href = content.profile.avatarUrl; icon.removeAttribute('type'); }
  }, [content.profile.avatarUrl]);

  return <SiteContentContext.Provider value={{ content, ready, refresh }}>{children}</SiteContentContext.Provider>;
};

export function useSiteContent() {
  const value = useContext(SiteContentContext);
  if (!value) throw new Error('useSiteContent must be used within SiteContentProvider');
  return value;
}
