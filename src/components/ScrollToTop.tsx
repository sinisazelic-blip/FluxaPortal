"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Prikazuj dugme čim korisnik skroluje dalje od Hero sekcije (preko 320px)
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.footer.backToTop}
      title={t.footer.backToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 sm:p-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white shadow-xl hover:shadow-2xl border border-sky-400/40 flex items-center justify-center cursor-pointer transition-all duration-300 transform group ${
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
