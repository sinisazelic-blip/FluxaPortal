"use client";

import React from "react";
import { CreditCard, ShieldCheck, FileText, Radio, ArrowRight } from "lucide-react";
import { ProductType } from "./ProductDetailModal";

interface PillarsSectionProps {
  onSelectProduct?: (product: ProductType) => void;
}

export default function PillarsSection({ onSelectProduct }: PillarsSectionProps) {
  const handleCardClick = (product: ProductType) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    }
  };

  return (
    <section
      id="pillars"
      className="py-20 md:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/60"
    >
      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        
        {/* Authoritative Centered Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold tracking-wide mb-4 shadow-xs">
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
            Sveobuhvatna i dokazana rješenja prilagođena terenskim uslovima. Kliknite na bilo koji proizvod za detaljan prikaz, ekrane i mogućnosti.
          </p>
        </div>

        {/* Bento Grid: 5 Pillars Layout (Left Vertical Tall + 2x2 Right Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* ===================================================================
              STUB 1: Krajnje lijevo - Vertikalni Hero Card (FluxaPOS & FluxaR)
              Slika 2 tačka 1: Maloprodaja, ulaznice, butici, pekare, servisi.
          =================================================================== */}
          <div
            onClick={() => handleCardClick("fluxapos")}
            className="md:col-span-4 rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[520px] sm:min-h-[620px] lg:min-h-[680px]"
          >
            {/* Visokokvalitetna fotografija maloprodaje i modernog prodajnog mjesta */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.05] contrast-[1.05]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85')`,
              }}
            />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="relative z-10 p-5 sm:p-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-sm">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <span>100% Autonomna Maloprodaja & Ulaznice</span>
              </div>
            </div>

            {/* Frosted Glass Card Body at Bottom */}
            <div className="relative z-10 m-3 sm:m-4 p-5 sm:p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 shadow-lg">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 font-mono mb-1">
                Univerzalni Retail & Ticketing Shell
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                FluxaPOS & FluxaR
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                Univerzalna kasa i sistem prodaje ulaznica koji u istom shell-u pokriva sve djelatnosti — pozorišta, koncerte, radionice, sportske centre, butike, pekare, autoservise i trgovine. 100% offline rad bez zastoja uz automatski KIF knjigovodstveni most.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 pt-3 border-t border-slate-200/60">
                <span>Istražite mogućnosti kase</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* ===================================================================
              DESNA STRANA: 4 Boxa u 2x2 Mreži
          =================================================================== */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {/* STUB 2 (GORE LIJEVO): FluxaX Net - Slika 2 tačka 2 (AV Session, mikrofon, vertikalni tekst desno) */}
            <div
              onClick={() => handleCardClick("fluxax")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden min-h-[310px] sm:min-h-[330px] flex flex-col justify-between"
            >
              <div
                className="absolute inset-0 bg-cover bg-left sm:bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.1] contrast-[1.05]"
                style={{
                  backgroundImage: `url('/photo/studio-vocal-recording.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60 pointer-events-none" />

              {/* Badge na vrhu */}
              <div className="relative z-10 p-3.5 sm:p-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <Radio className="w-3.5 h-3.5 text-purple-600" />
                  <span>02 • Live AV Session</span>
                </div>
              </div>

              {/* Vertikalni tekst boks orjentisan na DESNU stranu (po žutoj skici korisnika) */}
              <div className="relative z-10 m-3 sm:m-3.5 ml-auto max-w-[260px] sm:max-w-[280px] p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors mb-1">
                  FluxaX Net
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-2.5">
                  Daljinska audio snimanja i video screening montiranog materijala (DaVinci, Premiere Pro). Zero-bleed komunikacija.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-purple-700 pt-2 border-t border-slate-200/60">
                  <span>StudioBridge & Client HUB</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* STUB 3 (GORE DESNO): DokumentArt DMS */}
            <div
              onClick={() => handleCardClick("dokumentart")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[310px] sm:min-h-[330px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.05] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

              <div className="relative z-10 p-3.5 sm:p-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <FileText className="w-3.5 h-3.5 text-amber-600" />
                  <span>03 • Poslovni Protokoli & Digitalni Arhiv</span>
                </div>
              </div>

              <div className="relative z-10 m-3 p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                  DokumentArt DMS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-2.5">
                  Cjelovit centar: sjednice Skupštine i NO, djelovodnik sa praćenjem fizičke lokacije akata, ugovori, javne nabavke i kripto arhiv.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-amber-700 pt-2 border-t border-slate-200/60">
                  <span>DMS & Upravljanje</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* STUB 4 (DOLE LIJEVO): EnterSYS & Argus - Slika 2 tačka 3 (Elektronska kontrola, vertikalni boks LIJEVO da se vide tripodi) */}
            <div
              onClick={() => handleCardClick("entersys")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden min-h-[310px] sm:min-h-[330px] flex flex-col justify-between"
            >
              {/* Slika tripoda i kontrole pristupa orjentisana desno */}
              <div
                className="absolute inset-0 bg-cover bg-[center_right] transition-transform duration-700 group-hover:scale-105 filter saturate-[1.05] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1760020884550-f706e361528b?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Badge sa traženim nazivom "Elektronska kontrola" */}
              <div className="relative z-10 p-3.5 sm:p-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>04 • Elektronska kontrola</span>
                </div>
              </div>

              {/* Vertikalni tekst boks orjentisan na LIJEVU stranu (tako da se vide tripodi desno) */}
              <div className="relative z-10 m-3 sm:m-3.5 mr-auto max-w-[260px] sm:max-w-[280px] p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  EnterSYS & Argus
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-2.5">
                  Platforma za upravljanje kompleksima: bazeni, dvorane, pametni ormarići, zakupi, automatske rampe i tripodi.
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-blue-700 pt-2 border-t border-slate-200/60">
                  <span>Kontrola pristupa & 13 modula</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* STUB 5 (DOLE DESNO): Swiss Timing - Slika 2 tačka 4 (Tekst boks na vrhu/manji, plivač u bazenu potpuno vidljiv) */}
            <div
              onClick={() => handleCardClick("swisstiming")}
              className="rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden min-h-[310px] sm:min-h-[330px]"
            >
              {/* Plivač u vodi */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter saturate-[1.15] contrast-[1.05]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85')`,
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

              {/* Kompaktni tekst boks na VRHU (tako da plivač u vodi ostaje potpuno nepokriven) */}
              <div className="relative z-10 m-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                    Swiss Timing SOCCS & SwimVoice
                  </h3>
                  <span className="text-[#C4001A] font-serif font-black text-sm">Ω</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug font-normal">
                  Službeno vođenje borilišta i automatizacija takmičenja uz direktnu integraciju sa Quantum Timerom.
                </p>
              </div>

              {/* Pill na dnu (vertikalno zamijenjena mjesta) */}
              <div className="relative z-10 p-3.5 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  <span>05 • Švicarska Preciznost • 15+ Godina</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-red-700 shadow-sm group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
