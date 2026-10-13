"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, Layers, Sun, Shield, SlidersHorizontal, BookOpen, X, Quote } from "lucide-react";

export default function PhilosophySection() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="philosophy" className="py-20 md:py-32 relative overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200/80">
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

        {/* Read More Button */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <button
            onClick={() => setModalOpen(true)}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-300 shadow-xs flex items-center gap-2 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>{t.philosophy.readMoreBtn}</span>
          </button>
        </div>

        {/* Founder Wisdom Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50/70 text-slate-900 p-6 sm:p-8 md:p-11 text-center border border-slate-200/90 shadow-lg relative overflow-hidden">
          <Quote className="w-7 h-7 sm:w-8 sm:h-8 mx-auto text-sky-500/40 mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base md:text-xl font-light leading-relaxed mb-5 sm:mb-6 text-slate-800 italic">
            {t.philosophy.morningJoy}
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{t.philosophy.founderTitle}</span>
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl relative max-h-[85vh] overflow-y-auto text-slate-900">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.philosophy.modalTitle}
                </h3>
                <span className="text-xs text-slate-500">{t.philosophy.modalSubtitle}</span>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>{t.philosophy.fullStoryP1}</p>
              <p>{t.philosophy.fullStoryP2}</p>
              <p>{t.philosophy.fullStoryP3}</p>
              <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {t.philosophy.fullStoryP4}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs cursor-pointer hover:bg-slate-800 transition-colors"
              >
                {t.philosophy.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
