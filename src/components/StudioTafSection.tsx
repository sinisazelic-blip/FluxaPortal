"use client";

import React from "react";
import { Volume2, ShieldCheck, Award, Clock } from "lucide-react";

export default function StudioTafSection() {
  return (
    <section
      id="studio-taf"
      className="py-16 sm:py-24 relative overflow-hidden bg-white text-slate-900 border-t border-slate-200/80"
    >
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header - Minimalist, Focussed Guarantee */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold tracking-wide mb-4 shadow-2xs">
            <Volume2 className="w-3.5 h-3.5 text-slate-700" />
            <span>Četiri decenije inženjerske discipline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            Studio TAF • <span className="font-semibold text-slate-950">Garant Naše Istrajnosti i Fokusa</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Četiri decenije rada sa zvukom, akustikom i radiodifuzijom predstavljaju zanatski temelj cijele platforme. Ne pravimo reklamu za studio — Studio TAF je garancija da iza svakog našeg sistema stoji decenijama brušena posvećenost detaljima, pouzdanost i odgovornost.
          </p>
        </div>

        {/* Minimalist Credibility Box */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 text-center">
              <div className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-1">
                Početak Rada
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                1982.
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Analogni zanat
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 text-center">
              <div className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-1">
                Studio TAF
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                20+ Godina
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Prepoznatljiv brend
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 text-center">
              <div className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-1">
                Inženjerski Standard
              </div>
              <div className="text-lg sm:text-xl font-bold text-sky-700 flex items-center justify-center gap-1.5 font-mono">
                <span>100% autorski</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Vlastiti razvoj
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/70 text-center">
              <div className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-1">
                Swiss Timing
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono">
                15+ Godina
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Zvanični partner
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-normal max-w-2xl mx-auto pt-6 border-t border-slate-200/80">
            Od magnetofonskih traka do savremenih distribucionih servisa — ista inženjerska etika pokreće svaku liniju koda u Fluxa ekosistemu.
          </p>
        </div>

      </div>
    </section>
  );
}
