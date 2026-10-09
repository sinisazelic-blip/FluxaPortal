"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Cpu, 
  CreditCard, 
  ShieldCheck, 
  FileText, 
  Activity, 
  CheckCircle2, 
  Database,
  ArrowRight
} from "lucide-react";

export default function SoftwareSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<
    "fluxa" | "pos" | "entersys" | "dokumentart" | "soccs" | "hardware"
  >("fluxa");

  const modules = [
    {
      id: "fluxa" as const,
      icon: Database,
      name: t.software.modules.fluxa.name,
      tagline: t.software.modules.fluxa.tagline,
      data: t.software.modules.fluxa,
      color: "text-cyan-700 bg-cyan-50 border-cyan-200",
      accent: "text-cyan-700",
      badge: "ERP & Finance",
    },
    {
      id: "pos" as const,
      icon: CreditCard,
      name: t.software.modules.pos.name,
      tagline: t.software.modules.pos.tagline,
      data: t.software.modules.pos,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      accent: "text-emerald-700",
      badge: "Retail POS",
    },
    {
      id: "entersys" as const,
      icon: ShieldCheck,
      name: t.software.modules.entersys.name,
      tagline: t.software.modules.entersys.tagline,
      data: t.software.modules.entersys,
      color: "text-blue-700 bg-blue-50 border-blue-200",
      accent: "text-blue-700",
      badge: "Access & Venues",
    },
    {
      id: "dokumentart" as const,
      icon: FileText,
      name: t.software.modules.dokumentart.name,
      tagline: t.software.modules.dokumentart.tagline,
      data: t.software.modules.dokumentart,
      color: "text-amber-700 bg-amber-50 border-amber-200",
      accent: "text-amber-700",
      badge: "Public Tenders",
    },
    {
      id: "soccs" as const,
      icon: Activity,
      name: t.software.modules.soccs.name,
      tagline: t.software.modules.soccs.tagline,
      data: t.software.modules.soccs,
      color: "text-purple-700 bg-purple-50 border-purple-200",
      accent: "text-purple-700",
      badge: "Timing & Audio",
    },
    {
      id: "hardware" as const,
      icon: Cpu,
      name: t.software.modules.hardware.name,
      tagline: t.software.modules.hardware.tagline,
      data: t.software.modules.hardware,
      color: "text-indigo-700 bg-indigo-50 border-indigo-200",
      accent: "text-indigo-700",
      badge: "Custom PCBs",
    },
  ];

  const current = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold tracking-wide mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.software.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            {t.software.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.software.subtitle}
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = activeTab === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-4 shadow-xs">
                <span>{current.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1.5">
                {current.data.name}
              </h3>
              <div className={`text-sm font-semibold ${current.accent} mb-5`}>
                {current.data.tagline}
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {current.data.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5">
                {current.data.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 ${current.accent} shrink-0 mt-0.5`} />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Architecture Widget */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-soft-xl">
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {current.id}.fluxa.ba
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Režim Rada</span>
                  <span className="font-bold text-slate-900">
                    {current.id === "pos" ? "Offline-First + SQLite Sync" : "Cloud Native + Multi-Tenant"}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Hardver & Drajveri</span>
                  <span className="font-bold text-cyan-700">
                    {current.id === "hardware" ? "Custom PCB / RS485 / Relays" : "Nativni Electron & TCP/IP"}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Licencni Obuhvat</span>
                  <span className="font-bold text-purple-700">
                    {current.id === "pos" ? "FLUXAPOS Profile" : current.id === "dokumentart" ? "JAVNENABAVKE Profile" : "ENTERSYS Master Suite"}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100/70 text-[11px] text-slate-600 leading-relaxed">
                  💡 <b className="text-slate-800">Dokazano u praksi:</b> Pouzdana rješenja koja bez greške obrađuju svakodnevne transakcije i prolaze.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
