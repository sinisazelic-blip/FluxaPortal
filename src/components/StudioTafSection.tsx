"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { referencesData } from "@/data/references";
import { Volume2, Mic, Award, CheckCircle, Sparkles, Sliders, Radio } from "lucide-react";

export default function StudioTafSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredReferences = activeCategory === "all"
    ? referencesData
    : referencesData.filter((r) => r.category === activeCategory);

  return (
    <section id="studio-taf" className="py-24 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold tracking-wide mb-4">
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

        {/* Story & Microsoft Cortana Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Studio Heritage Story Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                  <Mic className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t.studioTaf.storyTitle}
                  </h3>
                  <span className="text-xs font-medium text-purple-600">
                    Turtle Audio Factory (TAF) • Founded 2006
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>{t.studioTaf.storyP1}</p>
                <p>{t.studioTaf.storyP2}</p>
              </div>
            </div>

            {/* Quick badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-slate-100">
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="text-[11px] text-slate-500 font-medium">Baza Spikera</div>
                <div className="text-base font-bold text-slate-900">80+ Talenata</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="text-[11px] text-slate-500 font-medium">Standard</div>
                <div className="text-base font-bold text-slate-900">EBU R128 Master</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-500 font-medium">Završeni Projekti</div>
                <div className="text-base font-bold text-slate-900">6.000+ Naslova</div>
              </div>
            </div>
          </div>

          {/* Microsoft Cortana Milestone Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-soft-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-[11px] font-semibold uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.studioTaf.cortanaBadge}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {t.studioTaf.cortanaTitle}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {t.studioTaf.cortanaDesc}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    {t.studioTaf.cortanaStat}
                  </div>
                  <div className="text-xs text-purple-200 mt-0.5">
                    {t.studioTaf.cortanaStatLabel}
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-300 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                <span>Mikro-segmentacija, spektralna čistoća i tonalna uniformnost</span>
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
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "all", label: t.studioTaf.categories.all },
              { id: "global", label: t.studioTaf.categories.global },
              { id: "retail", label: t.studioTaf.categories.retail },
              { id: "finance", label: t.studioTaf.categories.finance },
              { id: "agencies", label: t.studioTaf.categories.agencies },
              { id: "institutions", label: t.studioTaf.categories.institutions },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Clean Reference Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredReferences.map((ref) => (
              <div
                key={ref.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-slate-300 hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {ref.highlight}
                    </span>
                    {ref.projectsCount && (
                      <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                        {ref.projectsCount}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
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
