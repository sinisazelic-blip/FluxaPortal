"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, Layers, Sun, Shield, SlidersHorizontal, BookOpen, X, Quote } from "lucide-react";

export default function PhilosophySection() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="philosophy"
      className="py-20 md:py-32 relative overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200/80"
    >
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        {/* Header with Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.philosophy.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-3 sm:mb-4">
            {t.philosophy.title}
          </h2>
          <p className="text-slate-700 text-sm sm:text-base md:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed">
            „{t.philosophy.quote}“
          </p>
        </div>

        {/* 4 Story Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {/* Card 1: Operational Relief & Executive Control */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-4 sm:mb-5 shadow-xs">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {t.philosophy.point1Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {t.philosophy.point1Desc}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-emerald-700">
              {t.philosophy.card1Tag}
            </div>
          </div>

          {/* Card 2: 3 Disciplines */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center mb-4 sm:mb-5 shadow-xs">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {t.philosophy.point2Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {t.philosophy.point2Desc}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-amber-800">
              {t.philosophy.card2Tag}
            </div>
          </div>

          {/* Card 3: Dedication to Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center mb-4 sm:mb-5 shadow-xs">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {t.philosophy.point3Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {t.philosophy.point3Desc}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-sky-700">
              {t.philosophy.card3Tag}
            </div>
          </div>

          {/* Card 4: Field Resilience */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center mb-4 sm:mb-5 shadow-xs">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {t.philosophy.point4Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {t.philosophy.point4Desc}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-purple-700">
              {t.philosophy.card4Tag}
            </div>
          </div>
        </div>

        {/* Founder Wisdom Card - Moto Grupacije */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50/70 text-slate-900 p-6 sm:p-8 md:p-11 text-center border border-slate-200/90 shadow-lg relative overflow-hidden">
          <Quote className="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-sky-500/40 mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base md:text-xl font-light leading-relaxed mb-5 sm:mb-6 text-slate-800 italic">
            „Najveći mir i zadovoljstvo donosi pošteno završen posao i svijest da smo napravili alat koji nekome olakšava svaki radni dan.”
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            <span>Fluxa Group</span>
          </div>
        </div>
      </div>
    </section>
  );
}
