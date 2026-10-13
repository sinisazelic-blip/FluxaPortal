"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ShieldCheck, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenContact: () => void;
}

export default function Header({ onOpenLogin, onOpenContact }: HeaderProps) {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-3 text-slate-900"
          : "bg-slate-50/85 backdrop-blur-md border-b border-slate-200/50 py-3.5 sm:py-4 text-slate-900"
      }`}
    >
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (window.location.hash) {
              window.history.pushState(null, "", "/");
            }
          }}
          className="cursor-pointer flex items-center gap-2.5 sm:gap-3 group"
          title="FLUXA.ba"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
            <img src="/logos/Fluxa_Icon_blue.png" alt="Fluxa" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                FLUXA<span className="text-sky-600 font-light">.ba</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-sky-50 text-sky-700 border border-sky-200">
                PRO
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-500 tracking-wider font-medium truncate max-w-[140px] sm:max-w-none">
              Enterprise & Sound Heritage
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => scrollTo("solutions")}
            className="text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
          >
            {t.nav.solutions}
          </button>
          <button
            onClick={() => scrollTo("studio-taf")}
            className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors cursor-pointer"
          >
            {t.nav.studioTaf}
          </button>
          <button
            onClick={() => scrollTo("philosophy")}
            className="text-xs font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
          >
            {t.nav.heritage}
          </button>
          <button
            onClick={() => scrollTo("tenant-portal")}
            className="text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
          >
            {t.nav.portal}
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher - ALWAYS VISIBLE ON BOTH DESKTOP AND MOBILE */}
          <div className="flex items-center rounded-lg bg-white border border-slate-200 p-0.5 shadow-xs">
            <button
              onClick={() => setLang("sr")}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                lang === "sr"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              SR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EN
            </button>
          </div>

          {/* Client Portal Link (Desktop) */}
          <button
            onClick={onOpenLogin}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors cursor-pointer shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.nav.tenantLogin}</span>
          </button>

          {/* Contact / Offer CTA (Desktop) */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-sm items-center gap-1.5 transition-all cursor-pointer"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 cursor-pointer shadow-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => scrollTo("solutions")}
              className="text-left text-sm font-semibold text-slate-800 hover:text-sky-600 py-1 cursor-pointer"
            >
              {t.nav.solutions}
            </button>
            <button
              onClick={() => scrollTo("studio-taf")}
              className="text-left text-sm font-semibold text-slate-800 hover:text-purple-600 py-1 cursor-pointer"
            >
              {t.nav.studioTaf}
            </button>
            <button
              onClick={() => scrollTo("philosophy")}
              className="text-left text-sm font-semibold text-slate-800 hover:text-amber-600 py-1 cursor-pointer"
            >
              {t.nav.heritage}
            </button>
            <button
              onClick={() => scrollTo("tenant-portal")}
              className="text-left text-sm font-semibold text-slate-800 hover:text-sky-600 py-1 cursor-pointer"
            >
              {t.nav.portal}
            </button>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.nav.tenantLogin}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.nav.contact}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
