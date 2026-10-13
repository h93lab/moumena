/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/common/CustomCursor';
import { FloatingActionPill } from './components/common/FloatingActionPill';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { ClientTrustBar } from './components/sections/ClientTrustBar';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CareerJourneySection } from './components/sections/CareerJourneySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { Footer } from './components/sections/Footer';
import { ContactModal } from './components/common/ContactModal';
import { ProjectModal } from './components/common/ProjectModal';
import { CvModal } from './components/common/CvModal';
import { ShowreelModal } from './components/common/ShowreelModal';
import { ProjectItem } from './data/portfolioData';

function PortfolioContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#B600A8]/30 selection:text-white overflow-x-clip relative">
      {/* Custom Fluid Magnetic Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Action Pill: (CV | EN) */}
      <FloatingActionPill onCvClick={() => setIsCvOpen(true)} />

      {/* 1. Hero Section */}
      <HeroSection
        onContactClick={() => setIsContactOpen(true)}
        onShowreelClick={() => setIsShowreelOpen(true)}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. Luxury Client & Government Trust Section */}
      <ClientTrustBar />

      {/* 4. About Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 5. Services Section */}
      <ServicesSection />

      {/* 6. Career Journey Section (مسيرتي الوظيفية بالتاريخ ومكان العمل) */}
      <CareerJourneySection />

      {/* 7. Projects Section (كل الأعمال في البورتفوليو) */}
      <ProjectsSection onOpenProject={(proj) => setSelectedProject(proj)} />

      {/* Footer */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
