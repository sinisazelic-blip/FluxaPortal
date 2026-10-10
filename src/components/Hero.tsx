"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Volume2, ShieldCheck, CreditCard, Boxes, Timer } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
  onOpenLogin: () => void;
}

export default function Hero({ onOpenContact, onOpenLogin }: HeroProps) {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-window section-raster relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Refined Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-semibold tracking-wide mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline - Editorial, Artistic & Industrial */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.15] mb-6">
            {t.hero.title1}{" "}
            <span className="font-serif italic font-normal text-emerald-800">
              {t.hero.titleHighlight}
            </span>{" "}
            <span className="font-semibold text-slate-900 block sm:inline">
              {t.hero.title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-9">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <button
              onClick={() => scrollTo("solutions")}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md hover:shadow-lg flex items-center justify-center gap-2 group transition-all cursor-pointer"
            >
              <span>{t.hero.ctaSolutions}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("studio-taf")}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs border border-slate-200 shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-purple-600" />
              <span>{t.hero.ctaStudio}</span>
            </button>
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 font-semibold text-xs border border-emerald-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.hero.ctaPortal}</span>
            </button>
          </div>

          {/* Interactive Floating Product & Sound Visualizer Canvas */}
          <div className="relative max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-soft-2xl p-6 sm:p-8 mb-14">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="text-[11px] font-mono text-slate-600 ml-2">
                  ecosystem.fluxa.ba • HaaS, SaaS & Sound Heritage
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ● Model „Ključ u Ruke” (Zero Capex)
              </span>
            </div>

            {/* 4 Architectural Visual Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {/* Card 1: Studio TAF Sound */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/60 to-white border border-purple-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Sound Lab</span>
                    <Volume2 className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-sm font-bold text-slate-800 mb-1">Studio TAF</div>
                  <div className="text-xs text-slate-500 mb-3">6.000+ Komercijalnih Djela</div>
                </div>
                {/* Visual sound bars */}
                <div className="flex items-end gap-1 h-8 pt-2">
                  <span className="w-1.5 h-4 bg-purple-400 rounded-full animate-pulse" />
                  <span className="w-1.5 h-7 bg-purple-600 rounded-full" />
                  <span className="w-1.5 h-3 bg-purple-300 rounded-full" />
                  <span className="w-1.5 h-6 bg-purple-500 rounded-full animate-pulse" />
                  <span className="w-1.5 h-8 bg-purple-700 rounded-full" />
                  <span className="w-1.5 h-5 bg-purple-400 rounded-full" />
                  <span className="w-1.5 h-2 bg-purple-300 rounded-full" />
                </div>
              </div>

              {/* Card 2: HaaS Turnkey System */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Turnkey HaaS</span>
                    <Boxes className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-sm font-bold text-slate-800 mb-1">Ključ u Ruke</div>
                  <div className="text-xs text-slate-500 mb-3">Zero Capex Oprema & SLA</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-emerald-100 text-[11px] font-mono text-emerald-700 font-semibold flex items-center justify-between">
                  <span>MojRadio & TV</span>
                  <span>Uključeni</span>
                </div>
              </div>

              {/* Card 3: EnterSYS Access */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/60 to-white border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Objekti & Pristup</span>
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-sm font-bold text-slate-800 mb-1">ARGUS Master</div>
                  <div className="text-xs text-slate-500 mb-3">Tripodi, Bazen & Ormarići</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-blue-100 text-[11px] font-mono text-blue-700 font-semibold flex items-center justify-between">
                  <span>Pool / Gym Pass</span>
                  <span className="text-emerald-600">● Valid</span>
                </div>
              </div>

              {/* Card 4: SwissTiming & Sports Timing */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/60 to-white border border-amber-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Sportski Tajming</span>
                    <Timer className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-sm font-bold text-slate-800 mb-1">SOCCS & SwimVoice</div>
                  <div className="text-xs text-slate-500 mb-3">15+ God. Omega Ekspertize</div>
                </div>
                <div className="bg-white rounded-lg p-2 border border-amber-100 text-[11px] font-mono text-amber-700 font-semibold flex items-center justify-between">
                  <span>SwissTiming</span>
                  <span>Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Metric Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-0.5">
                {t.hero.stats.stat1Number}
              </div>
              <div className="text-xs font-medium text-slate-600">
                {t.hero.stats.stat1Label}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-0.5">
                {t.hero.stats.stat2Number}
              </div>
              <div className="text-xs font-medium text-slate-600">
                {t.hero.stats.stat2Label}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-0.5">
                {t.hero.stats.stat3Number}
              </div>
              <div className="text-xs font-medium text-slate-600">
                {t.hero.stats.stat3Label}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-0.5">
                {t.hero.stats.stat4Number}
              </div>
              <div className="text-xs font-medium text-slate-600">
                {t.hero.stats.stat4Label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
