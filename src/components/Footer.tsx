"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shadow-xs">
                <img src="/logos/Fluxa_Icon_blue.png" alt="Fluxa" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                FLUXA<span className="text-emerald-600 font-light">.ba</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-600" />
                <span>info@fluxa.ba</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Solutions */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t.nav.solutions}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-cyan-600 transition-colors cursor-pointer">
                  Fluxa Cloud & ERP
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-cyan-600 transition-colors cursor-pointer">
                  FluxaPOS Maloprodaja
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-cyan-600 transition-colors cursor-pointer">
                  EnterSYS & ARGUS Kontrola
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-cyan-600 transition-colors cursor-pointer">
                  DokumentArt Javne Nabavke
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-cyan-600 transition-colors cursor-pointer">
                  SOCCS & SwimVoice Timing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-cyan-600 transition-colors cursor-pointer">
                  BasePCB Elektronika
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Studio TAF & Heritage */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t.nav.studioTaf}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>
                <button onClick={() => scrollTo("studio-taf")} className="hover:text-purple-600 transition-colors cursor-pointer">
                  Turtle Audio Factory (2006)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("studio-taf")} className="hover:text-purple-600 transition-colors cursor-pointer">
                  Microsoft Cortana Dataset
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("studio-taf")} className="hover:text-purple-600 transition-colors cursor-pointer">
                  Reference & Klijenti
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("philosophy")} className="hover:text-amber-600 transition-colors cursor-pointer">
                  {t.nav.heritage}
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Portal */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {t.nav.portal}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>
                <button onClick={() => scrollTo("tenant-portal")} className="hover:text-emerald-600 transition-colors cursor-pointer">
                  Prijava za Tenante
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tenant-portal")} className="hover:text-emerald-600 transition-colors cursor-pointer">
                  Instant QR Produženje
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tenant-portal")} className="hover:text-emerald-600 transition-colors cursor-pointer">
                  Update Centar
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-xs text-slate-500">
          <div>
            © 2006 – 2026 <span className="font-semibold text-slate-700">Fluxa.ba & Studio TAF</span>. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-5">
            <span>Zanatstvo • Inženjering • Zvuk</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer"
              title="Nazad na vrh"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
