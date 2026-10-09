"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, Layers, Sun, Shield, Sparkles } from "lucide-react";

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wide mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.philosophy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            {t.philosophy.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-serif italic max-w-2xl mx-auto">
            „{t.philosophy.quote}“
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Card 1: 3 Disciplines */}
          <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {t.philosophy.point1Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.philosophy.point1Desc}
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-200/70 text-[11px] font-semibold text-amber-800">
              Mašinstvo • Muzika • Ekonomija
            </div>
          </div>

          {/* Card 2: 5 AM Creation */}
          <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {t.philosophy.point2Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.philosophy.point2Desc}
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-200/70 text-[11px] font-semibold text-cyan-800">
              Posvećenost bez prečica
            </div>
          </div>

          {/* Card 3: Real world resilience */}
          <div className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center mb-5">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                {t.philosophy.point3Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.philosophy.point3Desc}
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-200/70 text-[11px] font-semibold text-purple-800">
              Pouzdanost dokazana djelima
            </div>
          </div>
        </div>

        {/* Thought Callout Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900 text-white p-8 sm:p-10 text-center shadow-soft-2xl relative overflow-hidden">
          <p className="text-base sm:text-lg font-light leading-relaxed mb-4 text-slate-100">
            {t.philosophy.morningJoy}
          </p>
          <div className="text-xs font-semibold tracking-wider text-cyan-400">
            Siniša Zelić • Osnivač & Glavni Inženjer
          </div>
        </div>
      </div>
    </section>
  );
}
