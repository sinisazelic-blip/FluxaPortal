"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Volume2, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

export default function PillarsSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pillars" className="section-window section-raster py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight mb-3">
            {t.pillars.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Studio TAF */}
          <div
            onClick={() => scrollTo("studio-taf")}
            className="cursor-pointer bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-purple-300 hover:shadow-soft-xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Volume2 className="w-6 h-6" />
              </div>
              <div className="text-[11px] uppercase font-bold tracking-wider text-purple-700 mb-1.5">
                {t.pillars.p1Sub}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                {t.pillars.p1Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                {t.pillars.p1Desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 pt-4 border-t border-slate-200/60">
              <span>Saznajte više</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Software & Hardware */}
          <div
            onClick={() => scrollTo("solutions")}
            className="cursor-pointer bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-cyan-300 hover:shadow-soft-xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="text-[11px] uppercase font-bold tracking-wider text-cyan-700 mb-1.5">
                {t.pillars.p2Sub}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                {t.pillars.p2Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                {t.pillars.p2Desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-700 pt-4 border-t border-slate-200/60">
              <span>Pregledajte module</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Tenant Portal */}
          <div
            onClick={() => scrollTo("tenant-portal")}
            className="cursor-pointer bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-emerald-300 hover:shadow-soft-xl transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-[11px] uppercase font-bold tracking-wider text-emerald-700 mb-1.5">
                {t.pillars.p3Sub}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {t.pillars.p3Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                {t.pillars.p3Desc}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 pt-4 border-t border-slate-200/60">
              <span>Korisnički centar</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
