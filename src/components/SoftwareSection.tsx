"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Boxes,
  CreditCard,
  ShieldCheck,
  FileText,
  Timer,
  CheckCircle2,
  Database,
  ArrowRight,
  Share2,
  AlertCircle,
  Sparkles,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Maximize2,
  X,
} from "lucide-react";

interface SoftwareSectionProps {
  onOpenContact?: (service?: string) => void;
}

export default function SoftwareSection({ onOpenContact }: SoftwareSectionProps) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<
    "pos" | "fluxar" | "dokumentart" | "entersys" | "fluxa" | "soccs" | "haas"
  >("pos");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const modules = [
    {
      id: "pos" as const,
      icon: CreditCard,
      shortName: "FluxaPOS",
      name: t.software.modules.pos.name,
      tagline: t.software.modules.pos.tagline,
      data: t.software.modules.pos,
      accent: "text-sky-600",
      slides: t.software.moduleSlides.pos,
    },
    {
      id: "fluxar" as const,
      icon: Share2,
      shortName: "FluxaR",
      name: t.software.modules.fluxar.name,
      tagline: t.software.modules.fluxar.tagline,
      data: t.software.modules.fluxar,
      accent: "text-violet-600",
      slides: t.software.moduleSlides.fluxar,
    },
    {
      id: "dokumentart" as const,
      icon: FileText,
      shortName: "DokumentArt",
      name: t.software.modules.dokumentart.name,
      tagline: t.software.modules.dokumentart.tagline,
      data: t.software.modules.dokumentart,
      accent: "text-amber-600",
      slides: t.software.moduleSlides.dokumentart,
    },
    {
      id: "entersys" as const,
      icon: ShieldCheck,
      shortName: "EnterSYS",
      name: t.software.modules.entersys.name,
      tagline: t.software.modules.entersys.tagline,
      data: t.software.modules.entersys,
      accent: "text-blue-600",
      slides: t.software.moduleSlides.entersys,
    },
    {
      id: "fluxa" as const,
      icon: Database,
      shortName: "Fluxa Core",
      name: t.software.modules.fluxa.name,
      tagline: t.software.modules.fluxa.tagline,
      data: t.software.modules.fluxa,
      accent: "text-indigo-600",
      slides: t.software.moduleSlides.fluxa,
    },
    {
      id: "soccs" as const,
      icon: Timer,
      shortName: "SOCCS Timing",
      name: t.software.modules.soccs.name,
      tagline: t.software.modules.soccs.tagline,
      data: t.software.modules.soccs,
      accent: "text-purple-600",
      slides: t.software.moduleSlides.soccs,
    },
    {
      id: "haas" as const,
      icon: Boxes,
      shortName: "HaaS Model",
      name: t.software.modules.haas.name,
      tagline: t.software.modules.haas.tagline,
      data: t.software.modules.haas,
      accent: "text-emerald-600",
      slides: t.software.moduleSlides.haas,
    },
  ];

  const current = modules.find((m) => m.id === activeTab) || modules[0];
  const totalSlides = current.slides?.length || 1;
  const sectionRef = useRef<HTMLElement | null>(null);
  const tabsScrollRef = useRef<HTMLDivElement | null>(null);
  const activeTabBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when Software section is visible in viewport so timers only run when user is looking at this section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0, 0.1, 0.5] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance modules every 10 seconds ONLY when visible on screen (pauses on hover or lightbox)
  useEffect(() => {
    if (!isVisible || isPaused || isLightboxOpen) return;
    const moduleTimer = setInterval(() => {
      setActiveTab((prev) => {
        const curIdx = modules.findIndex((m) => m.id === prev);
        const nextIdx = (curIdx + 1) % modules.length;
        return modules[nextIdx].id;
      });
      setActiveSlide(0);
    }, 10000);
    return () => clearInterval(moduleTimer);
  }, [isVisible, modules.length, isPaused, isLightboxOpen]);

  // Keep active tab smoothly scrolled inside horizontal bar ONLY (NEVER causes vertical window jumps!)
  useEffect(() => {
    if (activeTabBtnRef.current && tabsScrollRef.current) {
      const container = tabsScrollRef.current;
      const btn = activeTabBtnRef.current;
      const targetScroll = btn.offsetLeft - container.offsetLeft - (container.clientWidth - btn.clientWidth) / 2;
      container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
    }
  }, [activeTab]);

  // Auto-scroll slides within current module every 3.5 seconds ONLY when visible
  useEffect(() => {
    if (!isVisible || totalSlides <= 1 || isPaused || isLightboxOpen) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(timer);
  }, [isVisible, activeTab, totalSlides, isPaused, isLightboxOpen]);

  // Lightbox keyboard controls (Escape to close, Left/Right arrows to navigate)
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === "ArrowLeft") {
        setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, totalSlides]);

  const handleTabChange = (id: typeof activeTab) => {
    setActiveTab(id);
    setActiveSlide(0);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const activeSlideData = current.slides[activeSlide] || current.slides[0];

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-20 md:py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80"
    >
      {/* Full-width Container (Edge to Edge breadth) */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide mb-4 shadow-xs">
            <Boxes className="w-3.5 h-3.5 text-sky-600" />
            <span>{t.software.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-3 sm:mb-4">
            {t.software.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {t.software.subtitle}
          </p>
        </div>

        {/* Clear Interactive Indicator & Tabs Bar */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          {/* Subtle Prompt Hint to show user these are interactive clickable products */}
          <div className="flex items-center justify-between gap-3 px-2 mb-3 text-slate-500 text-xs">
            <div className="inline-flex items-center gap-2 font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>
                {lang === "sr"
                  ? "Kliknite na proizvod za pregled modula (automatska rotacija 10s):"
                  : "Click any product to explore features (auto-cycles every 10s):"}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 font-bold shrink-0">
              {modules.findIndex((m) => m.id === activeTab) + 1} / {modules.length}
            </span>
          </div>

          {/* Smooth Horizontal Scrollable Pills Menu */}
          <div
            ref={tabsScrollRef}
            className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 pt-1 px-1 no-scrollbar select-none"
          >
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = activeTab === m.id;
              return (
                <button
                  key={m.id}
                  ref={isActive ? activeTabBtnRef : null}
                  onClick={() => handleTabChange(m.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-sky-600 text-white shadow-md border border-sky-500 ring-2 ring-sky-300/40 scale-[1.03]"
                      : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-300/90 shadow-2xs hover:border-sky-300"
                  }`}
                  title={m.name}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-500"}`} />
                  <span>{m.shortName}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Module Showcase Card */}
        <div className="bg-slate-50/80 rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Problem -> Solution -> Features */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 shadow-xs max-w-full">
                <span className={`${current.accent} shrink-0`}>●</span>
                <span className="text-slate-700 truncate">{current.tagline}</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                {current.name}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                {current.data.description}
              </p>

              {/* Problem & Solution Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-rose-100 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 mb-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.software.problemLabel}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {current.data.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-sky-100 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{t.software.solutionLabel}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {current.data.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.software.featuresLabel}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.data.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-snug font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Application Window with Horizontal Scrolling Carousel */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 md:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {t.software.screenPreview}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                    {activeSlide + 1} / {totalSlides}
                  </span>
                </div>
                {/* Horizontal navigation controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={prevSlide}
                    className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
                    title={t.software.prevSlide}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
                    title={t.software.nextSlide}
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Framed Application Window Slot with Clean Neutral Finish & Single Slide View */}
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onMouseDown={() => setIsPaused(true)}
                onMouseUp={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="rounded-2xl bg-slate-50 text-slate-800 border border-slate-300/90 shadow-md overflow-hidden select-none transition-all"
              >
                {/* Window Title Bar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-200/80 border-b border-slate-300/80 text-[11px] font-mono text-slate-600">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="ml-2 font-semibold text-slate-800 truncate">
                      {current.shortName} • {activeSlideData?.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {activeSlideData?.image && (
                      <button
                        onClick={() => setIsLightboxOpen(true)}
                        className="text-slate-600 hover:text-sky-700 transition-colors p-1 rounded hover:bg-slate-300/70 cursor-pointer"
                        title={t.software.zoomScreenshot}
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <span className="text-[10px] text-sky-800 font-bold bg-sky-100 px-2 py-0.5 rounded border border-sky-300">
                      SLIDE {activeSlide + 1}
                    </span>
                  </div>
                </div>

                {/* Screenshot Display: Exactly ONE slide at a time (absolute stacking), neutral slate-100 background */}
                {current.slides?.length > 0 && current.slides[0]?.image ? (
                  <div className="relative overflow-hidden aspect-[16/10] bg-slate-100/90 border-b border-slate-300/80">
                    {current.slides.map((s, idx) => (
                      <div
                        key={idx}
                        onClick={() => setIsLightboxOpen(true)}
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          activeSlide === idx
                            ? "opacity-100 z-10 pointer-events-auto"
                            : "opacity-0 z-0 pointer-events-none"
                        } group cursor-zoom-in flex items-center justify-center p-2 sm:p-2.5`}
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="max-h-full max-w-full object-contain rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-semibold backdrop-blur border border-slate-300 shadow-md flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                            {t.software.zoomScreenshot}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 overflow-hidden aspect-[16/10] flex flex-col justify-between border-b border-slate-300/80 p-5 sm:p-6 text-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-bold font-mono uppercase tracking-wider">
                        Hardware as a Service
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">
                        OPEX MODEL
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 my-auto py-2">
                      <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 text-center shadow-xs">
                        <div className="text-base sm:text-lg font-bold text-emerald-700 font-mono">0 KM</div>
                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                          {lang === "sr" ? "Početno ulaganje" : "Zero Capex"}
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 text-center shadow-xs">
                        <div className="text-base sm:text-lg font-bold text-sky-700 font-mono">24/7</div>
                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                          {lang === "sr" ? "SLA zamjena" : "SLA On-Site"}
                        </div>
                      </div>
                      <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 text-center shadow-xs">
                        <div className="text-base sm:text-lg font-bold text-purple-700 font-mono">100%</div>
                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                          {lang === "sr" ? "Priznat trošak" : "Tax Deductible"}
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-600 flex items-center justify-between border-t border-slate-200 pt-2">
                      <span className="text-slate-800 font-medium truncate pr-2">
                        {activeSlideData?.title}
                      </span>
                      <span className="text-emerald-700 text-[10px] font-semibold shrink-0">
                        ● {lang === "sr" ? "Aktivan" : "Active"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Horizontal Slide Info Details */}
                <div className="p-4 sm:p-5 font-mono text-xs space-y-3 min-h-[140px] flex flex-col justify-between transition-all duration-300 bg-slate-50">
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-1">
                      {activeSlideData?.title}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                      {activeSlideData?.note}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                    <span className="flex items-center gap-2">
                      {activeSlideData?.image ? (
                        <ImageIcon className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      ) : (
                        <Boxes className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      )}
                      <span className="text-slate-700 font-sans font-medium">
                        {current.id === "haas"
                          ? lang === "sr"
                            ? `Stub Modela #${activeSlide + 1}`
                            : `Model Pillar #${activeSlide + 1}`
                          : `${t.software.slideSlot} #${activeSlide + 1}`}
                      </span>
                    </span>
                    {isPaused ? (
                      <span className="text-[10px] text-amber-700 font-mono font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {lang === "sr" ? "Pauzirano za pregled" : "Paused for inspection"}
                      </span>
                    ) : (
                      <span className="text-[10px] text-emerald-700 font-mono font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {t.software.autoScroll}
                      </span>
                    )}
                  </div>
                </div>

                {/* Dynamic Bottom Slide Progress Bars */}
                <div
                  className="grid gap-1 p-2 bg-slate-100 border-t border-slate-200"
                  style={{ gridTemplateColumns: `repeat(${totalSlides}, minmax(0, 1fr))` }}
                >
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeSlide === idx ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                      title={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Benefit Highlight */}
              <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-1">
                <div className="text-xs font-bold text-sky-900">
                  {t.software.benefitGain}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {current.data.benefit}
                </p>
              </div>

              {/* Model Description */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs text-slate-600">
                <div className="font-bold text-slate-800">
                  {t.software.modelTitles[current.id] || "Pouzdanost Sistema:"}
                </div>
                <p className="leading-relaxed">
                  {t.software.modelTexts[current.id]}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => onOpenContact && onOpenContact(current.id)}
                className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>{t.software.demoBtnForFacility}</span>
              </button>

              <button
                onClick={() => onOpenContact && onOpenContact(current.id)}
                className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold text-xs border border-sky-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{t.software.requestOfferFor} {current.shortName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full-Resolution Screenshot Zoom with Neutral Glass Finish */}
      {isLightboxOpen && activeSlideData?.image && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsLightboxOpen(false);
          }}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between text-slate-800 bg-white/95 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 border border-slate-200/90 shadow-lg max-w-7xl w-full mx-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-sky-600 text-white text-xs font-bold font-mono">
                {current.shortName}
              </span>
              <h4 className="text-sm sm:text-base font-bold truncate text-slate-900">
                {activeSlideData?.title}
              </h4>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                ({activeSlide + 1} / {totalSlides})
              </span>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
              title={t.software.closeZoom}
            >
              <span className="hidden sm:inline">{t.software.closeZoom}</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Center Viewport with Nav Buttons */}
          <div className="relative flex-1 flex items-center justify-center my-3 max-w-7xl w-full mx-auto overflow-hidden">
            {totalSlides > 1 && (
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 z-10 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white text-slate-800 backdrop-blur border border-slate-200 shadow-xl transition-all cursor-pointer hover:scale-105"
                title={t.software.prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <img
              src={activeSlideData.image}
              alt={activeSlideData.title}
              className="max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl border border-slate-200 bg-white p-1"
            />

            {totalSlides > 1 && (
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 z-10 p-2.5 sm:p-3 rounded-full bg-white/95 hover:bg-white text-slate-800 backdrop-blur border border-slate-200 shadow-xl transition-all cursor-pointer hover:scale-105"
                title={t.software.nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Modal Bottom Description & Indicators */}
          <div className="max-w-4xl w-full mx-auto text-center space-y-2">
            <p className="text-xs sm:text-sm text-slate-800 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-slate-200/90 shadow-lg inline-block font-medium">
              {activeSlideData?.note}
            </p>
            {totalSlides > 1 && (
              <div className="flex justify-center items-center gap-1.5 pt-1">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? "w-6 bg-sky-600" : "w-2 bg-white/70 hover:bg-white shadow-xs"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
