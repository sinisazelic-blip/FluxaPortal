"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { referenceCategories, ReferenceCategory, ReferenceItem } from "@/data/references";
import {
  Volume2,
  Music2,
  Disc,
  ArrowRight,
  ShoppingBag,
  Landmark,
  Megaphone,
  Building2,
  X,
} from "lucide-react";

export default function StudioTafSection() {
  const { t } = useLanguage();
  const [activeCategoryModal, setActiveCategoryModal] = useState<ReferenceCategory | null>(null);
  const [liveProjects, setLiveProjects] = useState<number | null>(6004);
  const [activeCard, setActiveCard] = useState<0 | 1>(0);
  const [isTafPaused, setIsTafPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    fetch("/api/stats/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.ok && typeof data.count === "number") {
          setLiveProjects(data.count);
        }
      })
      .catch(() => {});
  }, []);

  // Detect when Studio TAF section is in viewport
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

  // Izmjenjivanje 2 kontejnera svakih 15s (samo kad je sekcija vidljiva, i pauzirano kada je miš iznad kartice)
  useEffect(() => {
    if (!isVisible || isTafPaused || activeCategoryModal) return;
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev === 0 ? 1 : 0));
    }, 15000);
    return () => clearInterval(timer);
  }, [isVisible, isTafPaused, activeCategoryModal]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "retail":
        return <ShoppingBag className="w-5 h-5 text-rose-600" />;
      case "finance":
        return <Landmark className="w-5 h-5 text-blue-600" />;
      case "agencies":
        return <Megaphone className="w-5 h-5 text-amber-600" />;
      case "institutions":
        return <Building2 className="w-5 h-5 text-cyan-600" />;
      case "music":
      default:
        return <Music2 className="w-5 h-5 text-purple-600" />;
    }
  };

  const getCategoryTitle = (cat: ReferenceCategory) => {
    if (cat.id === "agencies") return t.studioTaf.categories.agencies || cat.title;
    if (cat.id in t.studioTaf.categories) {
      return (t.studioTaf.categories as any)[cat.id] || cat.title;
    }
    return cat.title;
  };

  return (
    <section
      ref={sectionRef}
      id="studio-taf"
      className="py-20 md:py-32 relative overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200/80"
    >
      {/* Real, Solid, Relaxed Studio Photography Foundation ("Drugi Homepage") */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center pointer-events-none filter saturate-[1.05] contrast-[1.02]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=2560&q=90')`
        }}
      />
      
      {/* Seamless Section Transitions (Soft white fade only at top and bottom) */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-purple-200/25 rounded-full blur-[130px] pointer-events-none" />

      {/* Full-width Container */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-800 text-xs font-semibold tracking-wide mb-4 shadow-xs">
            <Volume2 className="w-3.5 h-3.5 text-purple-600" />
            <span>{t.studioTaf.badgeHeader}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-3 sm:mb-4">
            {t.studioTaf.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {t.studioTaf.subtitle}
          </p>
        </div>

        {/* 2-Pill Switcher & Auto-Rotate Indicator */}
        <div className="max-w-2xl mx-auto mb-8 flex flex-col items-center gap-2.5">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveCard(0)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 0
                  ? "bg-purple-700 text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span>🎙️</span>
              <span>1. Audio Centar & Istorijat</span>
            </button>

            <button
              onClick={() => setActiveCard(1)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeCard === 1
                  ? "bg-purple-700 text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span>🎸</span>
              <span>2. Muzička Era & Zanat</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>
              {isTafPaused
                ? "Pauzirano (čitanje u toku)"
                : "Automatska izmjena svakih 15s • prelazak mišem pauzira"}
            </span>
          </div>
        </div>

        {/* Single Centered Airy Container (Allows guitar photography on sides to breathe) */}
        <div
          onMouseEnter={() => setIsTafPaused(true)}
          onMouseLeave={() => setIsTafPaused(false)}
          className="max-w-3xl lg:max-w-4xl mx-auto mb-16 sm:mb-20"
        >
          {activeCard === 0 ? (
            /* Container 1: Studio & Personal Audio Heritage */
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/60 shadow-xl flex flex-col justify-between transition-all duration-500 animate-fadeIn">
              <div>
                {/* Studio TAF Original Logo */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-6 pb-6 border-b border-slate-100/80">
                  <div className="inline-flex items-center justify-start shrink-0 bg-white/90 backdrop-blur-xs p-2 rounded-2xl shadow-xs border border-slate-200 w-fit">
                    <img
                      src="/logos/taf-logo.jpg"
                      alt="Studio TAF Logo"
                      className="h-12 sm:h-16 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                      {t.studioTaf.storyTitle}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] sm:text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                        {t.studioTaf.storySubBadge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story Paragraphs */}
                <div className="space-y-4 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-8">
                  <p>{t.studioTaf.storyP1}</p>
                  <p>{t.studioTaf.storyP2}</p>
                  <p className="text-slate-800 font-medium bg-white/70 backdrop-blur-xs p-4 rounded-2xl border border-slate-200/80">
                    {t.studioTaf.storyP3}
                  </p>
                </div>
              </div>

              {/* Metric Pills - Continuity & Heritage */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-slate-100/80">
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Početak Rada</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">1982. godina</div>
                </div>
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Studio TAF</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">20+ godina</div>
                </div>
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Inženjerski Standard</div>
                  <div className="text-xs sm:text-sm font-bold text-purple-700 flex items-center gap-1.5">
                    <span>100% autorski</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
                <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-slate-200/70">
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Swiss Timing Partner</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">15+ godina</div>
                </div>
              </div>
            </div>
          ) : (
            /* Container 2: Music Era & Studio Discipline */
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/60 shadow-xl flex flex-col justify-between transition-all duration-500 animate-fadeIn">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold mb-4">
                  <Music2 className="w-3.5 h-3.5" />
                  <span>{t.studioTaf.musicEraBadge}</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {t.studioTaf.musicEraTitle}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {t.studioTaf.musicEraDesc}
                </p>

                {/* Iconic Artists Roster Showcase */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {t.studioTaf.artistsTitle}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sanja Čolić Zelić",
                      "Narodno & Dječije Pozorište",
                      "Filmski Sound Design",
                      "Klasična & Simfonijska Muzika",
                      "Big Bang",
                      "Massimo Savić",
                      "Đavoli (Neno Belan)",
                      "Dino Dvornik",
                      "Denis & Denis",
                      "Oliver Mandić",
                      "Sportske Himne",
                      "Revelation (Boris Relja)",
                      "Radio (Pop-Rock BL)",
                      "Kovalsky Project",
                      "BasDans",
                    ].map((artist) => (
                      <span
                        key={artist}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-[11px] sm:text-xs font-semibold shadow-2xs hover:border-purple-300 transition-colors"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stat Pill */}
              <div className="bg-white/75 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-purple-100/80 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
                      <span>{liveProjects ? liveProjects.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "6.004"}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-xs text-purple-700 font-semibold mt-0.5">
                      {t.studioTaf.musicEraStatLabel}
                    </div>
                  </div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-purple-700 flex items-center justify-center border border-purple-200 shadow-xs">
                    <Disc className="w-5 h-5 sm:w-6 sm:h-6 animate-[spin_8s_linear_infinite]" />
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-slate-500">
                  {t.studioTaf.statNote}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* References Browser Section */}
        <div className="mt-10 sm:mt-14">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {t.studioTaf.referencesTitle}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              {t.studioTaf.referencesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {referenceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryModal(cat)}
                className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 hover:border-purple-300 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer shadow-2xs"
              >
                <div>
                  <div className="mb-2.5 sm:mb-3">{getCategoryIcon(cat.id)}</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {getCategoryTitle(cat)}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    {cat.id === "music" ? "Stotine autora i projekata" : `${cat.allItems.length} ${t.studioTaf.partnersAndCampaigns}`}
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center gap-1 text-[11px] font-semibold text-purple-600 group-hover:translate-x-0.5 transition-transform">
                  <span>{t.studioTaf.viewBtn}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reference Category Modal */}
      {activeCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveCategoryModal(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                {getCategoryIcon(activeCategoryModal.id)}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {getCategoryTitle(activeCategoryModal)}
                </h3>
                <span className="text-xs text-slate-500">
                  {activeCategoryModal.id === "music"
                    ? `Reprezentativni izvod iz stotina projekata (1982 – ${new Date().getFullYear()})`
                    : `${activeCategoryModal.allItems.length} ${t.studioTaf.referencesInArchive}`}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCategoryModal.allItems.map((item: ReferenceItem, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-purple-200 transition-colors"
                >
                  <div className="text-xs font-bold text-slate-900 mb-0.5">
                    {item.name}
                  </div>
                  {item.scopeType && (
                    <div className="text-[11px] text-purple-700 font-medium mb-1">
                      {item.scopeType}
                    </div>
                  )}
                  {item.description && (
                    <div className="text-[11px] text-slate-600 leading-snug">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {activeCategoryModal.id === "music" && (
              <div className="mt-5 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs text-purple-950 leading-relaxed">
                <strong className="font-semibold block mb-1">
                  Napomena o obuhvatu autorskog i studijskog rada:
                </strong>
                Prikazani spisak je samo mali reprezentativni fragment iz četiri decenije rada (1982 – {new Date().getFullYear()}) koji obuhvata stotine muzičara, bendova, nagrađivanih kompozitora klasične muzike, pozorišnih predstava (Narodno i Dječije pozorište RS), filmova i TV serija. U FLUXA ekosistemu, Studio TAF služi kao inženjerski i zanatski temelj i garant posvećenosti i dugovječnosti svakog softverskog rješenja.
              </div>
            )}

            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveCategoryModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs cursor-pointer hover:bg-slate-800 transition-colors"
              >
                {t.studioTaf.closePreview}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
