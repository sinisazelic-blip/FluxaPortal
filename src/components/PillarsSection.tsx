"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CreditCard, ShieldCheck, FileText, Radio, Timer, ArrowRight, Video } from "lucide-react";

export default function PillarsSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pillars"
      className="py-20 md:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/60"
    >
      {/* Full-width Container */}
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        {/* Authoritative Centered Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold tracking-wide mb-4 sm:mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-sky-600" />
            <span>Pet stubova tehnološkog ekosistema</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.2]">
            Gradimo Vaš oslonac za{" "}
            <span className="font-semibold text-sky-600">
              sigurnu poslovnu transformaciju
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            Sveobuhvatna i dokazana rješenja prilagođena terenskim uslovima. Svaki modul radi pouzdano i samostalno, bez zastoja.
          </p>
        </div>

        {/* Bento Grid: 5 Pillars Layout (Left Vertical Tall + 2x2 Right Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* ===================================================================
              STUB 1: Krajnje lijevo - Vertikalni Hero Card (FluxaPOS & FluxaR)
          =================================================================== */}
          <div
            onClick={() => scrollTo("solutions")}
            className="md:col-span-4 rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[520px] sm:min-h-[620px] lg:min-h-[680px]"
          >
            {/* Real Crisp Restaurant & Retail POS Photography */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.1] contrast-[1.05]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=85')`,
              }}
            />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="relative z-10 p-5 sm:p-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-sm">
                <CreditCard className="w-4 h-4 text-sky-600" />
                <span>100% Autonomna Maloprodaja</span>
              </div>
            </div>

            {/* Frosted Glass Card Body at Bottom */}
            <div className="relative z-10 m-3 sm:m-4 p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/70 shadow-lg">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-600 font-mono mb-1">
                Univerzalni Retail Shell & KIF Most
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                FluxaPOS & FluxaR
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                Maloprodajni i ugostiteljski softver koji u istom shell-u pokriva sve djelatnosti — od restorana, kafića i butika, do pekara, autoservisa i trgovina (sve sem apoteka). 100% offline rad bez zastoja uz automatski KIF knjigovodstveni most.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-600 pt-3 border-t border-slate-200/60">
                <span>Istražite kasu i most</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* ===================================================================
              DESNA STRANA: 4 Boxa u 2x2 Mreži (FluxaX, DokumentART, EnterSYS, SwissTiming)
          =================================================================== */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* STUB 2 (GORE LIJEVO): FluxaX Net Audio & Video Screening */}
            <div
              onClick={() => scrollTo("solutions")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[300px] sm:min-h-[320px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.1] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

              <div className="relative z-10 p-4 sm:p-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <Radio className="w-3.5 h-3.5 text-purple-600" />
                  <span>02 • Broadcast Audio & Video Screening</span>
                </div>
              </div>

              <div className="relative z-10 m-3 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/70 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-1">
                  FluxaX Net
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                  Profesionalna platforma ultra-niske latencije za daljinska audio snimanja i video screening montiranog materijala (DaVinci, Premiere Pro). Zero-bleed mix-minus komunikacija.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-purple-700 pt-2 border-t border-slate-200/60">
                  <span>StudioBridge & Client HUB</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* STUB 3 (GORE DESNO): DokumentArt DMS & 2FA */}
            <div
              onClick={() => scrollTo("solutions")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[300px] sm:min-h-[320px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.05] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

              <div className="relative z-10 p-4 sm:p-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <FileText className="w-3.5 h-3.5 text-amber-600" />
                  <span>03 • Poslovni Protokoli & Digitalni Arhiv</span>
                </div>
              </div>

              <div className="relative z-10 m-3 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/70 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                  DokumentArt DMS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                  Cjelovit dokumentacioni centar: sjednice Skupštine, Nadzornog odbora i Revizije, djelovodnik sa praćenjem fizičke lokacije akata, registar ugovora i pravilnika, javne nabavke, kripto potpis i arhiv.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-amber-700 pt-2 border-t border-slate-200/60">
                  <span>DMS & Upravljanje</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* STUB 4 (DOLE LIJEVO): EnterSYS & ARGUS Master */}
            <div
              onClick={() => scrollTo("solutions")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[300px] sm:min-h-[320px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-[center_bottom] transition-transform duration-700 group-hover:scale-105 filter saturate-[1.05] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1760020884550-f706e361528b?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

              <div className="relative z-10 p-4 sm:p-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>04 • Upravljanje & Nadzorni Centar</span>
                </div>
              </div>

              <div className="relative z-10 m-3 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/70 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  EnterSYS & Argus
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                  Sveobuhvatna platforma sa 13 kompleksnih modula za upravljanje kompleksima (bazeni, dvorane, ormarići, zakupi) uz Argus dinamički operativni panel za live nadzor radnih mjesta.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-blue-700 pt-2 border-t border-slate-200/60">
                  <span>13 modula & Argus panel</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* STUB 5 (DOLE DESNO): Swiss Timing / Omega (SOCCS & SwimVoice) */}
            <div
              onClick={() => scrollTo("solutions")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[300px] sm:min-h-[320px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.1] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

              <div className="relative z-10 p-4 sm:p-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <span className="text-[#C4001A] font-serif font-black text-xs leading-none">Ω</span>
                  <span>05 • Švicarska Preciznost • 15+ Godina</span>
                </div>
              </div>

              <div className="relative z-10 m-3 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/70 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors mb-1">
                  Swiss Timing SOCCS & SwimVoice
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                  Specijalizovano vođenje borilišta i automatizacija plivačkih i sportskih takmičenja uz direktnu integraciju sa zvaničnom Swiss Timing Omega opremom.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-red-700 pt-2 border-t border-slate-200/60">
                  <span>Sportska borilišta</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
