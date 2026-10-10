"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Boxes,
  CreditCard,
  ShieldCheck,
  FileText,
  Timer,
  CheckCircle2,
  Database,
  ArrowRight,
  Share2,
  Tv,
  Radio,
} from "lucide-react";

export default function SoftwareSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<
    "haas" | "entersys" | "pos" | "fluxar" | "fluxa" | "soccs" | "dokumentart"
  >("haas");

  const modules = [
    {
      id: "haas" as const,
      icon: Boxes,
      name: t.software.modules.haas.name,
      tagline: t.software.modules.haas.tagline,
      data: t.software.modules.haas,
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
      accent: "text-emerald-700",
      badge: "Turnkey & Zero Capex",
    },
    {
      id: "entersys" as const,
      icon: ShieldCheck,
      name: t.software.modules.entersys.name,
      tagline: t.software.modules.entersys.tagline,
      data: t.software.modules.entersys,
      color: "text-blue-700 bg-blue-50 border-blue-200",
      accent: "text-blue-700",
      badge: "ARGUS & Objekti",
    },
    {
      id: "pos" as const,
      icon: CreditCard,
      name: t.software.modules.pos.name,
      tagline: t.software.modules.pos.tagline,
      data: t.software.modules.pos,
      color: "text-cyan-700 bg-cyan-50 border-cyan-200",
      accent: "text-cyan-700",
      badge: "Fiskalni POS",
    },
    {
      id: "fluxar" as const,
      icon: Share2,
      name: t.software.modules.fluxar.name,
      tagline: t.software.modules.fluxar.tagline,
      data: t.software.modules.fluxar,
      color: "text-violet-700 bg-violet-50 border-violet-200",
      accent: "text-violet-700",
      badge: "Knjigovodstveni Most",
    },
    {
      id: "fluxa" as const,
      icon: Database,
      name: t.software.modules.fluxa.name,
      tagline: t.software.modules.fluxa.tagline,
      data: t.software.modules.fluxa,
      color: "text-indigo-700 bg-indigo-50 border-indigo-200",
      accent: "text-indigo-700",
      badge: "Cloud ERP",
    },
    {
      id: "soccs" as const,
      icon: Timer,
      name: t.software.modules.soccs.name,
      tagline: t.software.modules.soccs.tagline,
      data: t.software.modules.soccs,
      color: "text-purple-700 bg-purple-50 border-purple-200",
      accent: "text-purple-700",
      badge: "Omega / SwissTiming",
    },
    {
      id: "dokumentart" as const,
      icon: FileText,
      name: t.software.modules.dokumentart.name,
      tagline: t.software.modules.dokumentart.tagline,
      data: t.software.modules.dokumentart,
      color: "text-amber-700 bg-amber-50 border-amber-200",
      accent: "text-amber-700",
      badge: "Javne Nabavke",
    },
  ];

  const current = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-4">
            <Boxes className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.software.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            {t.software.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.software.subtitle}
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {modules.map((m) => {
            const Icon = m.icon;
            const isActive = activeTab === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-soft-xl"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                <span>{m.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200/60 text-slate-600"
                  }`}
                >
                  {m.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 shadow-xs">
                <span className={current.accent}>●</span>
                <span className="text-slate-700">{current.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {current.name}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                {current.data.description}
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ključne funkcionalnosti & prednosti:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.data.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Architecture Box */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Model Isporuke
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Ključ u Ruke • HaaS & SaaS
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="text-xs font-bold text-slate-800">
                  {current.id === "haas"
                    ? "Inženjerska HaaS Garancija:"
                    : current.id === "fluxar"
                    ? "Knjigovodstveni Tunel:"
                    : current.id === "soccs"
                    ? "SwissTiming / Omega Standard:"
                    : "Tehnička Arhitektura:"}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.id === "haas"
                    ? "Klijent ne kupuje opremu niti brine o kvarovima. Montiramo tripode, POS opremu, MojRadio i MojTV, uz 24/7 zamjenu i podršku."
                    : current.id === "fluxar"
                    ? "Eksterna knjigovodstva dobijaju digitalni tunel sa autorizacionim tokenom — sve evidencije, KIF i pazari se povlače jednim klikom."
                    : current.id === "soccs"
                    ? "15+ godina specijalizovanog iskustva na Omega sistemima, FINA/Lenex usklađenost i SwimVoice robotska zvučna najava."
                    : current.id === "pos"
                    ? "Nativni Windows drajveri, fiskalni štampači, barkod čitači i rad bez interneta sa automatskom sinhronizacijom."
                    : current.id === "entersys"
                    ? "ARGUS Master industrijska kontrola, RFID narukvice, bazenski i dvoranski menadžeri te pametni ormarići."
                    : current.id === "dokumentart"
                    ? "Striktno praćenje zakonskih procedura javnih nabavki, tenderskih rokova i bankarskih garancija."
                    : "Multi-tenant MySQL baza, automatsko bankarsko rasknjižavanje i planiranje likvidnosti."}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Status: <span className="font-semibold text-emerald-600">Spremno za rad</span>
              </span>
              <a
                href="#tenant-portal"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
              >
                <span>Provjeri licencu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
