/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/common/CustomCursor';
import { FloatingActionPill } from './components/common/FloatingActionPill';
import { HeroSection } from './components/sections/HeroSection';
import { ClientTrustBar } from './components/sections/ClientTrustBar';
import { AboutSection } from './components/sections/AboutSection';
import { CareerJourneySection } from './components/sections/CareerJourneySection';
import { Footer } from './components/sections/Footer';
import { ProjectItem } from './data/portfolioData';

const ContactModal = lazy(() => import('./components/common/ContactModal').then((module) => ({ default: module.ContactModal })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then((module) => ({ default: module.ProjectsSection })));
const ProjectModal = lazy(() => import('./components/common/ProjectModal').then((module) => ({ default: module.ProjectModal })));
const CvModal = lazy(() => import('./components/common/CvModal').then((module) => ({ default: module.CvModal })));
const ShowreelModal = lazy(() => import('./components/common/ShowreelModal').then((module) => ({ default: module.ShowreelModal })));

function PortfolioContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [mountedModals, setMountedModals] = useState({ contact: false, cv: false, showreel: false });
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [loadProjects, setLoadProjects] = useState(false);
  const projectsAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anchor = projectsAnchorRef.current;
    if (!anchor || !('IntersectionObserver' in window)) {
      setLoadProjects(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadProjects(true);
        observer.disconnect();
      }
    }, { rootMargin: '800px 0px' });
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  const openContact = () => {
    setMountedModals((current) => ({ ...current, contact: true }));
    setIsContactOpen(true);
  };
  const openCv = () => {
    setMountedModals((current) => ({ ...current, cv: true }));
    setIsCvOpen(true);
  };
  const openShowreel = () => {
    setMountedModals((current) => ({ ...current, showreel: true }));
    setIsShowreelOpen(true);
  };
  const openProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsProjectOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#B600A8]/30 selection:text-white overflow-x-clip relative">
      {/* Custom Fluid Magnetic Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Action Pill: (CV | EN) */}
      <FloatingActionPill onCvClick={openCv} />

      {/* 1. Hero Section */}
      <HeroSection
        onContactClick={openContact}
        onShowreelClick={openShowreel}
      />

      {/* 2. Projects Section (كل الأعمال في البورتفوليو) */}
      <div id="projects" ref={projectsAnchorRef}>
        {loadProjects ? (
          <Suspense fallback={<div className="min-h-[40vh] bg-[#0C0C0C]" />}>
            <ProjectsSection onOpenProject={openProject} />
          </Suspense>
        ) : <div className="min-h-[40vh] bg-[#0C0C0C]" />}
      </div>

      {/* 3. Luxury Client & Government Trust Section */}
      <ClientTrustBar />

      {/* 4. About Section */}
      <AboutSection onContactClick={openContact} />

      {/* 5. Career Journey Section (مسيرتي الوظيفية بالتاريخ ومكان العمل) */}
      <CareerJourneySection />

      {/* 6. Footer */}
      <Footer onContactClick={openContact} />

      {/* Modals */}
      <Suspense fallback={null}>
        {mountedModals.contact && <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />}
        {mountedModals.cv && <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />}
        {mountedModals.showreel && <ShowreelModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isProjectOpen}
            onClose={() => setIsProjectOpen(false)}
            onOpenContact={openContact}
          />
        )}
      </Suspense>
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
