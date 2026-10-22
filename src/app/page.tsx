"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import SoftwareSection from "@/components/SoftwareSection";
import StudioTafSection from "@/components/StudioTafSection";
import PhilosophySection from "@/components/PhilosophySection";
import TenantPortalSection from "@/components/TenantPortalSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import LoginModal from "@/components/LoginModal";
import TenantDashboardModal from "@/components/TenantDashboardModal";
import SectionNavigator from "@/components/SectionNavigator";
import ScrollToTop from "@/components/ScrollToTop";
import FluxaxShowcaseModal from "@/components/FluxaxShowcaseModal";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("fluxa");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [dashboardModalOpen, setDashboardModalOpen] = useState(false);
  const [fluxaxModalOpen, setFluxaxModalOpen] = useState(false);
  const [activeTenantIdentifier, setActiveTenantIdentifier] = useState("");

  const handleOpenContact = (service?: string) => {
    if (service) setSelectedService(service);
    setContactModalOpen(true);
  };

  const handleOpenTenantDashboard = (identifier: string) => {
    setActiveTenantIdentifier(identifier);
    setDashboardModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Fixed Header */}
      <Header
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenContact={() => handleOpenContact("fluxa")}
      />

      {/* Hero Section */}
      <Hero
        onOpenContact={handleOpenContact}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* 3 Pillars Overview */}
      <PillarsSection />

      {/* Pillar 2: Software & Hardware Solutions */}
      <SoftwareSection
        onOpenContact={handleOpenContact}
        onOpenFluxaxShowcase={() => setFluxaxModalOpen(true)}
      />

      {/* Pillar 1: Studio TAF Heritage & References */}
      <StudioTafSection />

      {/* Pillar 3: Tenant Self-Service Portal */}
      <TenantPortalSection
        onOpenLogin={(identifier) => handleOpenTenantDashboard(identifier || "aquana")}
        onOpenContact={() => handleOpenContact("portal")}
      />

      {/* Founder's Philosophy & Heritage Story */}
      <PhilosophySection />

      {/* Floating Section Navigator */}
      <SectionNavigator />

      {/* Floating Back to Top Button (activates after Hero) */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <FluxaxShowcaseModal
        isOpen={fluxaxModalOpen}
        onClose={() => setFluxaxModalOpen(false)}
        onOpenContact={() => handleOpenContact("fluxax")}
      />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedService}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onOpenContact={() => {
          setLoginModalOpen(false);
          handleOpenContact("support");
        }}
        onSuccessLogin={(identifier) => {
          setLoginModalOpen(false);
          handleOpenTenantDashboard(identifier);
        }}
      />
      <TenantDashboardModal
        isOpen={dashboardModalOpen}
        onClose={() => setDashboardModalOpen(false)}
        initialTenantName={activeTenantIdentifier}
      />
    </main>
  );
}

