"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { referencesData } from "@/data/references";
import { Volume2, Mic, Music2, Sparkles, Disc, Radio, CheckCircle, Building2 } from "lucide-react";

export default function StudioTafSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredReferences =
    activeCategory === "all"
      ? referencesData
      : referencesData.filter((r) => r.category === activeCategory);

  return (
    <section id="studio-taf" className="section-window section-raster py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold tracking-wide mb-4 shadow-xs">
            <Volume2 className="w-3.5 h-3.5 text-purple-600" />
            <span>{t.studioTaf.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            {t.studioTaf.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.studioTaf.subtitle}
          </p>
        </div>

        {/* 2-Column Story & Heritage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left: Studio & Personal Audio Heritage */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft-xl flex flex-col justify-between">
            <div>
              {/* Full Logo Display Header - Uncropped, High Resolution */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6 pb-6 border-b border-slate-100">
                <div className="bg-slate-900 p-2.5 rounded-2xl border border-slate-800 shadow-md inline-flex items-center justify-center shrink-0">
                  <img
                    src="/logos/taf-logo.jpg"
                    alt="Studio TAF Logo"
                    className="h-14 sm:h-16 w-auto max-w-[220px] object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t.studioTaf.storyTitle}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                      Muzička Produkcija (1982) • Studio TAF (2006)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>{t.studioTaf.storyP1}</p>
                <p>{t.studioTaf.storyP2}</p>
                <p className="text-slate-700 font-medium">{t.studioTaf.storyP3}</p>
              </div>
            </div>

            {/* Quick badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-slate-100">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="text-[11px] text-slate-500 font-medium">Početak Rada</div>
                <div className="text-sm font-bold text-slate-900">1982. Godina</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="text-[11px] text-slate-500 font-medium">Studio TAF</div>
                <div className="text-sm font-bold text-slate-900">2006. (20 God.)</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="text-[11px] text-slate-500 font-medium">Komercijalni Audio</div>
                <div className="text-sm font-bold text-purple-700">6.000+ Projekata</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="text-[11px] text-slate-500 font-medium">Baza Spikera</div>
                <div className="text-sm font-bold text-slate-900">80+ Talenata</div>
              </div>
            </div>
          </div>

          {/* Right: Music Era & Studio Discipline */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-50 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold mb-5">
                <Music2 className="w-3.5 h-3.5" />
                <span>{t.studioTaf.musicEraBadge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                {t.studioTaf.musicEraTitle}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                {t.studioTaf.musicEraDesc}
              </p>

              {/* Iconic Artists Roster Showcase */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Autori & Projekti Tokom Četiri Decenije:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Sanja Čolić Zelić",
                    "Massimo Savić",
                    "Đavoli (Neno Belan)",
                    "Dino Dvornik",
                    "Denis & Denis",
                    "Oliver Mandić",
                    "Revelation (Boris Relja)",
                    "Radio (Pop-Rock BL)",
                    "Kovalsky Project",
                    "BasDans",
                  ].map((artist) => (
                    <span
                      key={artist}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stat Pill */}
            <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-2xl p-5 border border-purple-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-slate-900">
                    {t.studioTaf.musicEraStat}
                  </div>
                  <div className="text-xs text-purple-800 font-semibold mt-0.5">
                    {t.studioTaf.musicEraStatLabel}
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Disc className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-purple-100 text-[11px] text-slate-600 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>99.9% komercijalni audio za radio, TV, audio branding i casting</span>
              </div>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight mb-2">
              {t.studioTaf.referencesTitle}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              {t.studioTaf.referencesSubtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "all", label: t.studioTaf.categories.all },
              { id: "music", label: t.studioTaf.categories.music },
              { id: "commercial", label: t.studioTaf.categories.commercial },
              { id: "retail", label: t.studioTaf.categories.retail },
              { id: "finance", label: t.studioTaf.categories.finance },
              { id: "institutions", label: t.studioTaf.categories.institutions },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dominant Brand Logo Reference Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredReferences.map((ref) => (
              <div
                key={ref.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-slate-300 hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Dominant Visual Logo or Artist Emblem */}
                  <div className="mb-4">
                    {ref.isLegalEntity ? (
                      <div
                        className={`w-full h-14 rounded-xl flex items-center justify-center px-3 shadow-xs ${
                          ref.logoBg || "bg-slate-100"
                        }`}
                      >
                        <span className={ref.logoColor || "text-slate-900 font-bold"}>
                          {ref.logoText || ref.name}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 flex items-center justify-between px-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-purple-200/70 text-purple-900 flex items-center justify-center font-black text-xs">
                            {ref.logoText || "♪"}
                          </div>
                          <span className="text-xs font-bold text-purple-950 truncate max-w-[130px]">
                            {ref.name}
                          </span>
                        </div>
                        <Music2 className="w-4 h-4 text-purple-600 shrink-0" />
                      </div>
                    )}
                  </div>

                  {/* Badges & Description */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {ref.highlight}
                    </span>
                    {ref.projectsCount && (
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                        {ref.projectsCount}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {ref.name}
                  </h4>
                  {ref.description && (
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {ref.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
