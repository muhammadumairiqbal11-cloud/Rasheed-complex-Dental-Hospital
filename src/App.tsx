import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { CommunityHighlights } from './components/CommunityHighlights';
import { PatientCareSection } from './components/PatientCareSection';
import { ServicesSection } from './components/ServicesSection';
import { MissionSection } from './components/MissionSection';
import { GalleryPreview } from './components/GalleryPreview';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PatientGuidelinesModal } from './components/PatientGuidelinesModal';
import { FullGalleryModal } from './components/FullGalleryModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCFCFC] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] text-[#2D3436] selection:bg-[#0A3D62] selection:text-white">
      {/* 01 — Top Information Bar */}
      <TopBar />

      {/* 02 — Main Header & Navigation */}
      <Navbar
        onOpenGuidelines={() => setIsGuidelinesOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 03 — Hero Section */}
        <HeroSection />

        {/* 04 — Welcome / Introduction */}
        <WelcomeSection />

        {/* 05 — Community Care Highlights */}
        <CommunityHighlights />

        {/* 06 — Patient Care Section */}
        <PatientCareSection />

        {/* 07 — Services (Verified Only) */}
        <ServicesSection />

        {/* 08 — Affordable Care / Community Mission */}
        <MissionSection />

        {/* 09 — Gallery Preview */}
        <GalleryPreview onOpenFullGallery={() => setIsGalleryOpen(true)} />

        {/* 10 — Contact & Location */}
        <ContactSection />
      </main>

      {/* 11 — Footer */}
      <Footer onOpenGuidelines={() => setIsGuidelinesOpen(true)} />

      {/* Modals for Patient Experience */}
      <PatientGuidelinesModal
        isOpen={isGuidelinesOpen}
        onClose={() => setIsGuidelinesOpen(false)}
      />

      <FullGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
