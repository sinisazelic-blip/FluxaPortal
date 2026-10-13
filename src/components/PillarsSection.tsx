"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CreditCard, ShieldCheck, FileText, Volume2, ArrowRight } from "lucide-react";

export default function PillarsSection() {
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
    <section id="pillars" className="py-20 md:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      {/* Full-width Container (Lanaco Breadth - Edge to Edge) */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        {/* Authoritative Centered Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold tracking-wide mb-4 sm:mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            <span>{t.pillars.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.2]">
            {t.pillars.title1}{" "}
            <span className="font-semibold text-sky-600">
              {t.pillars.titleHighlight}
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* Lanaco-Style Bento Grid: 100% Consistent, Every Card Has Authentic Photography & Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Tall Hero Card on the Left (POS & Retail - Solid Crisp Photography Foundation) */}
          <div
            onClick={() => scrollTo("solutions")}
            className="md:col-span-4 rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[480px] sm:min-h-[580px] lg:min-h-[640px]"
          >
            {/* Real Crisp Restaurant / Retail POS Photography */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.1] contrast-[1.05]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=85')`
              }}
            />
            {/* Subtle top shade for badge contrast */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="relative z-10 p-5 sm:p-7">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-[11px] sm:text-xs font-bold shadow-sm">
                <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600" />
                <span>{t.pillars.card1.badge}</span>
              </div>
            </div>

            {/* Solid Frosted Glass Card Body at Bottom for 100% Crisp Legibility */}
            <div className="relative z-10 m-3 sm:m-4 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-600 font-mono mb-1">
                {t.pillars.card1.tag}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                {t.pillars.card1.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3 sm:mb-4">
                {t.pillars.card1.desc}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-600 pt-2.5 sm:pt-3 border-t border-slate-100">
                <span>{t.pillars.card1.link}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Center & Right Column Grid */}
          <div className="md:col-span-8 flex flex-col gap-5 sm:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 2: ARGUS & Facilities (Real Automated Turnstiles & Access Control Gates) */}
              <div
                onClick={() => scrollTo("solutions")}
                className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[290px] sm:min-h-[310px] lg:min-h-[340px]"
              >
                {/* Tripodi i turnstiles u punom planu u donjem dijelu slike */}
                <div 
                  className="absolute inset-0 bg-cover bg-[center_bottom] transition-transform duration-700 group-hover:scale-105 filter saturate-[1.05] contrast-[1.05]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1760020884550-f706e361528b?auto=format&fit=crop&w=1200&q=85')`
                  }}
                />

                {/* Oblak sa tekstom GORE na stropu, tako da tripodi DOLJE iskaču u prvi plan */}
                <div className="relative z-10 m-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t.pillars.card2.badge}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {t.pillars.card2.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {t.pillars.card2.desc}
                  </p>
                </div>

                {/* Donji dio kartice je potpuno otvoren za tripode, sa malom diskretnom prečicom */}
                <div className="relative z-10 p-3 flex justify-end">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-semibold text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <span>{t.pillars.card2.link}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 3: DokumentArt DMS (Real Corporate Document Review & Legal Workflow) */}
              <div
                onClick={() => scrollTo("solutions")}
                className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[290px] sm:min-h-[310px] lg:min-h-[340px]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.05] contrast-[1.05]"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85')`
                  }}
                />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

                <div className="relative z-10 p-4 sm:p-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    <span>{t.pillars.card3.badge}</span>
                  </div>
                </div>

                <div className="relative z-10 m-3 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                    {t.pillars.card3.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    {t.pillars.card3.desc}
                  </p>
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-700 pt-2 border-t border-slate-100">
                    <span>{t.pillars.card3.link}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Wide Horizontal Card with Studio Microphone on LEFT and Portrait Text Card on RIGHT */}
            <div
              onClick={() => scrollTo("studio-taf")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row justify-end items-stretch group cursor-pointer relative overflow-hidden min-h-[300px] lg:min-h-[320px]"
            >
              {/* Mikrofon pozicioniran lijevo tako da ponosno iskače u prvi plan */}
              <div 
                className="absolute inset-0 bg-cover bg-[15%_center] md:bg-[20%_center] transition-transform duration-700 group-hover:scale-105 filter saturate-[1.1] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30 pointer-events-none sm:hidden" />

              {/* Kompaktni PORTRETNI tekstualni oblak sa desne strane */}
              <div className="relative z-10 m-3 sm:m-4 p-5 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md flex flex-col justify-between w-full sm:w-[420px] lg:w-[460px] shrink-0">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100 text-[11px] font-mono font-bold w-fit">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{t.pillars.card4.badge}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {t.pillars.card4.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t.pillars.card4.desc}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                      <span>{projectCount ? projectCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "6.004"}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                      {t.pillars.card4.numberLabel}
                    </div>
                  </div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white group-hover:bg-purple-700 flex items-center justify-center transition-colors shrink-0 shadow-sm">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
