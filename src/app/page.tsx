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

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [dashboardModalOpen, setDashboardModalOpen] = useState(false);
  const [activeTenantIdentifier, setActiveTenantIdentifier] = useState("aquana");

  const handleOpenTenantDashboard = (identifier?: string) => {
    if (identifier) setActiveTenantIdentifier(identifier);
    setDashboardModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-cyan-600 selection:text-white">
      {/* Fixed Header */}
      <Header
        onOpenLogin={() => handleOpenTenantDashboard("aquana")}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenContact={() => setContactModalOpen(true)}
        onOpenLogin={() => handleOpenTenantDashboard("aquana")}
      />

      {/* 3 Pillars Overview */}
      <PillarsSection />

      {/* Pillar 2: Software & Hardware Solutions */}
      <SoftwareSection />

      {/* Pillar 1: Studio TAF Heritage & References */}
      <StudioTafSection />

      {/* Pillar 3: Tenant Self-Service Portal */}
      <TenantPortalSection
        onOpenLogin={(identifier) => handleOpenTenantDashboard(identifier || "aquana")}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Founder's Philosophy & Heritage Story */}
      <PhilosophySection />

      {/* Floating Section Navigator */}
      <SectionNavigator />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onOpenContact={() => {
          setLoginModalOpen(false);
          setContactModalOpen(true);
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

