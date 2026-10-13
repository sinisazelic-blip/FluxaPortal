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
    <footer className="bg-sky-950 border-t border-sky-900 pt-14 sm:pt-16 pb-10 sm:pb-12 relative text-sky-200/90">
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-sky-900/80">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1 shadow-xs">
                <img src="/logos/Fluxa_Icon_green.png" alt="Fluxa" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                FLUXA<span className="text-emerald-400 font-light">.ba</span>
              </span>
            </div>
            <p className="text-sky-200/80 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              {t.footer.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-sky-300 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>info@fluxa.ba</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Solutions */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.solutionsTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-sky-200">
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.solutionsLinks.cloud}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.solutionsLinks.pos}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.solutionsLinks.entersys}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.solutionsLinks.dokumentart}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.solutionsLinks.soccs}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("solutions")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.solutionsLinks.basepcb}
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Studio TAF & Heritage */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.studioTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-sky-200">
              <li>
                <button onClick={() => scrollTo("studio-taf")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.studioLinks.taf}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("studio-taf")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.studioLinks.cortana}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("studio-taf")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.studioLinks.refs}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("philosophy")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.studioLinks.heritage}
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Portal */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.portalTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-sky-200">
              <li>
                <button onClick={() => scrollTo("tenant-portal")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.portalLinks.login}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tenant-portal")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.portalLinks.renewal}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("tenant-portal")} className="hover:text-white transition-colors cursor-pointer text-left">
                  {t.footer.portalLinks.updates}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-xs text-sky-300/80">
          <div className="text-center sm:text-left">
            © 2006 – 2026 <span className="font-semibold text-white">Fluxa.ba & Studio TAF</span>. {t.footer.allRightsReserved}
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="text-[11px] sm:text-xs">{t.footer.craftsmanship}</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
