"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function SectionNavigator() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: t.sectionNav.hero },
    { id: "pillars", label: t.sectionNav.pillars },
    { id: "solutions", label: t.sectionNav.solutions },
    { id: "studio-taf", label: t.sectionNav.studioTaf },
    { id: "tenant-portal", label: t.sectionNav.portal },
    { id: "philosophy", label: t.sectionNav.philosophy },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentIndex = sections.findIndex((s) => s.id === activeSection);

  const goPrev = () => {
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].id);
    }
  };

  const goNext = () => {
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  };

  return (
    <aside aria-label={t.sectionNav.ariaLabel} className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-full border border-slate-300 shadow-md">
      <button
        onClick={goPrev}
        disabled={currentIndex === 0}
        className="p-1 rounded-full text-slate-500 hover:text-slate-900 disabled:opacity-30 cursor-pointer"
        title={t.sectionNav.prev}
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      <div className="flex flex-col items-center gap-2 py-1">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="group relative flex items-center justify-center cursor-pointer p-1"
              title={s.label}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-6 bg-emerald-600 shadow-xs"
                    : "w-2 h-2 bg-slate-300 group-hover:bg-slate-500"
                }`}
              />
              <span className="absolute right-8 px-2 py-1 rounded-md bg-slate-900 text-white text-[10px] font-semibold tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={goNext}
        disabled={currentIndex === sections.length - 1}
        className="p-1 rounded-full text-slate-500 hover:text-slate-900 disabled:opacity-30 cursor-pointer"
        title={t.sectionNav.next}
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </aside>
  );
}
