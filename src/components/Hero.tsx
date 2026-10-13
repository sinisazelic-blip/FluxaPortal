"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CalendarCheck } from "lucide-react";

interface HeroProps {
  onOpenContact: (service?: string) => void;
  onOpenLogin: () => void;
}

export default function Hero({ onOpenContact, onOpenLogin }: HeroProps) {
  const { t } = useLanguage();
  const [projectCount, setProjectCount] = useState<number | null>(6004);

  useEffect(() => {
    fetch("/api/stats/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.ok && typeof data.count === "number") {
          setProjectCount(data.count);
        }
      })
      .catch(() => {});
  }, []);

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 overflow-hidden bg-slate-50 text-slate-900">
      {/* Real, Solid, Crisp Architectural Photography Foundation */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center pointer-events-none filter saturate-[1.05] contrast-[1.03]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2560&q=90')`
        }}
      />
      
      {/* Asymmetric Left Daylight Cushion */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-slate-50 via-slate-50/92 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-transparent to-slate-50 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none" />

      {/* FULL-WIDTH CONTAINER (Lanaco Style - Edge to Edge with Generous Margins) */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        <div className="max-w-4xl text-left">
          {/* Subtle Continuity Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-semibold tracking-wide mb-6 sm:mb-8 shadow-xs max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="truncate">{t.hero.continuityBadge}</span>
          </div>

          {/* Headline - Elegant 3-line shape that stays strictly inside the daylight zone */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.14] sm:leading-[1.12] mb-5 sm:mb-6 max-w-2xl">
            {t.hero.title1}{" "}
            <span className="font-semibold text-sky-600">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.title2}
          </h1>

          {/* Sub-headline - Crisp, Authoritative, High Readability on White Cushion */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-12">
            {t.hero.subtitle}
          </p>

          {/* Actions & Metrics Row */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-8 xl:gap-10 pt-2">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 shrink-0">
              <button
                onClick={() => scrollTo("pillars")}
                className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 group transition-all cursor-pointer"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenContact("demo")}
                className="px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.demoBtn}</span>
              </button>
            </div>

            {/* Metrics Flex Row - Explicit whitespace between 6.004 and 20 */}
            <div className="flex flex-wrap sm:flex-nowrap items-start gap-6 sm:gap-7 md:gap-8 lg:border-l lg:border-slate-300/80 lg:pl-6 xl:pl-8">
              <div className="shrink-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                  40+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-tight">
                  {t.hero.metrics.continuity}
                </div>
              </div>

              <div className="shrink-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                  <span>{projectCount ? projectCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "6.004"}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-tight">
                  {t.hero.metrics.projects}
                </div>
              </div>

              <div className="shrink-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                  20
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-tight">
                  {t.hero.metrics.studioTaf}
                </div>
              </div>

              <div className="shrink-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                  15+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-tight">
                  {t.hero.metrics.swissTiming}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
