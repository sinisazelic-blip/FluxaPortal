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
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shadow-xs group-hover:scale-105 transition-transform duration-300">
            <img src="/logos/Fluxa_Icon_blue.png" alt="Fluxa" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                FLUXA<span className="text-emerald-600 font-light">.ba</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                PRO
              </span>
            </div>
            <span className="text-[10px] text-slate-600 tracking-wider font-medium">
              Enterprise & Sound Heritage
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollTo("solutions")}
            className="text-xs font-semibold text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            {t.nav.solutions}
          </button>
          <button
            onClick={() => scrollTo("studio-taf")}
            className="text-xs font-semibold text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            {t.nav.studioTaf}
          </button>
          <button
            onClick={() => scrollTo("philosophy")}
            className="text-xs font-semibold text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            {t.nav.heritage}
          </button>
          <button
            onClick={() => scrollTo("tenant-portal")}
            className="text-xs font-semibold text-slate-600 hover:text-cyan-600 transition-colors cursor-pointer"
          >
            {t.nav.portal}
          </button>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg bg-slate-100/90 border border-slate-200 p-0.5">
            <button
              onClick={() => setLang("sr")}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                lang === "sr"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/80"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              SR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                lang === "en"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200/80"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              EN
            </button>
          </div>

          {/* Tenant Login Button */}
          <button
            onClick={onOpenLogin}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t.nav.tenantLogin}</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === "sr" ? "en" : "sr")}
            className="px-2 py-1 text-[11px] font-bold text-slate-700 rounded bg-slate-100 border border-slate-200"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white text-slate-700 hover:text-slate-900 border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-5 mt-3 space-y-2.5 shadow-xl">
          <button
            onClick={() => scrollTo("solutions")}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-cyan-600"
          >
            {t.nav.solutions}
          </button>
          <button
            onClick={() => scrollTo("studio-taf")}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-cyan-600"
          >
            {t.nav.studioTaf}
          </button>
          <button
            onClick={() => scrollTo("philosophy")}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-cyan-600"
          >
            {t.nav.heritage}
          </button>
          <button
            onClick={() => scrollTo("tenant-portal")}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-cyan-600"
          >
            {t.nav.portal}
          </button>
          <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-600" />
              {t.nav.tenantLogin}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2 rounded-lg bg-slate-900 text-white font-bold text-xs"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
