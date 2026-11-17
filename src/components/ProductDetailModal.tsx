"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Radio,
  FileText,
  Timer,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export type ProductType = "fluxapos" | "fluxax" | "dokumentart" | "entersys" | "swisstiming" | "logistix";

interface ProductDetailModalProps {
  product: ProductType | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: (service: string) => void;
}

interface ProductInfo {
  id: ProductType;
  badge: string;
  title: string;
  subtitle: string;
  themeColor: string;
  bgGradient: string;
  badgeColor: string;
  tagline: string;
  description: string[];
  keyFeatures: { title: string; desc: string }[];
  screenshots: { url: string; title: string }[];
  stats: { value: string; label: string }[];
}

const productsData: Record<ProductType, ProductInfo> = {
  fluxapos: {
    id: "fluxapos",
    badge: "Autonomna maloprodaja robe, usluga i ulaznica",
    title: "FluxaPOS & FluxaR",
    subtitle: "Univerzalni Retail Shell & Automatski KIF Most",
    themeColor: "text-emerald-700",
    bgGradient: "from-emerald-50 via-teal-50/40 to-white",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    tagline: "Univerzalna, autonomna kasa i sistem prodaje robe, usluga i ulaznica koji u istom shell-u pokriva sve djelatnosti.",
    description: [
      "Univerzalna, autonomna kasa i sistem prodaje robe, usluga i ulaznica koji u istom shell-u pokriva sve djelatnosti — ugostiteljstvo, trgovinu, pozorišta, koncerte, radionice, sportske centre, butike, pekare i servise. 100% offline rad bez zastoja uz automatski most prema vašem računovodstvu.",
      "FluxaPOS funkcioniše potpuno nezavisno od stabilnosti interneta (100% offline autonomija), garantujući da prodaja i izdavanje računa nikada ne staju, uz trenutnu fiskalizaciju i sinhronizaciju sa FluxaR mostom.",
    ],
    keyFeatures: [
      {
        title: "Ticketing & Prodaja Karata",
        desc: "Brzo izdavanje numerisanih i parter ulaznica za pozorišta, koncerte, dvorane i sportska borilišta.",
      },
      {
        title: "Univerzalni Shell",
        desc: "Prilagođava se buticima, pekarama, autoservisima, maloprodajnim trgovinama i uslužnim radnjama.",
      },
      {
        title: "100% Offline Autonomija",
        desc: "Nastavlja normalan rad i štampu fiskalnih računa čak i pri potpunom prekidu mrežne veze.",
      },
      {
        title: "Automatski KIF Most",
        desc: "FluxaR automatski obrađuje sve dnevne promete i sinhronizuje ih sa knjigovodstvenim softverom.",
      },
    ],
    screenshots: [
      { url: "/photo/FluxaPOS/Caffe-restoran.png", title: "Caffe & Restoran režim rada" },
      { url: "/photo/FluxaPOS/RetailShop.png", title: "Maloprodaja & Retail Shop terminal" },
      { url: "/photo/FluxaPOS/biletarnica.png", title: "Biletarnica & prodaja ulaznica" },
      { url: "/photo/FluxaPOS/FluxaPOS01.png", title: "Prijava operatera & PIN zaštita" },
      { url: "/photo/FluxaPOS/FluxaPOS02.png", title: "2D grafička mapa stolova" },
      { url: "/photo/FluxaR/FluxaR01.png", title: "FluxaR knjigovodstveni most i KIF generator" },
    ],
    stats: [
      { value: "0 ms", label: "Kašnjenje pri kucanju računa" },
      { value: "100%", label: "Lokalna autonomija rada" },
      { value: "Automatski", label: "KIF knjigovodstveni izvoz" },
    ],
  },
  fluxax: {
    id: "fluxax",
    badge: "Live AV Session & Daljinska Režija",
    title: "FluxaX Net",
    subtitle: "StudioBridge & Client HUB Platforma",
    themeColor: "text-purple-700",
    bgGradient: "from-purple-50 via-amber-50/30 to-white",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    tagline: "Daljinski monitoring snimanja, video preview montiranog materijala i direktna komunikacija.",
    description: [
      "FluxaX Net povezuje režijski hardverski StudioBridge sa klijentskim web HUB-om. Pruža kristalno čistu audio vezu ultra-niske latencije, istovremeni video screening za videografe i montažere (DaVinci Resolve, Adobe Premiere Pro), te zero-bleed mix-minus komunikaciju.",
      "StudioBridge poseduje vintage analogne kontrole inspirisane legendarnim Chris Lord-Alge konzolama, dok Client HUB klijentima, režiserima i spikerima nudi kalendar, uvid u današnje sesije i trenutni pregled snimljenog materijala.",
    ],
    keyFeatures: [
      {
        title: "Live AV Session & Video Screening",
        desc: "Istovremeni prenos kristalnog zvuka i video preview-a iz Premier-a i DaVinci-ja za direktne režijske sugestije.",
      },
      {
        title: "Vintage StudioBridge Dugmići",
        desc: "Taktilne CLA backlit kontrole sa podesivim loopback kanalima i hardverskim skeniranjem RME/audio kartica.",
      },
      {
        title: "Client HUB & Raspored Sesija",
        desc: "Pregledan kalendar, današnje sesije i višestruki učesnici (naručilac, lektor, agencija) u istoj sesiji.",
      },
      {
        title: "Project Share Folder",
        desc: "Direktan upload gotovih odobrenih tejkova i preuzimanje master audio/video materijala.",
      },
    ],
    screenshots: [
      { url: "/photo/StudioBridge/StudioBridge UI.png", title: "StudioBridge Režijska Konzola" },
      { url: "/photo/ClientHUB/ClientHUB studio.png", title: "Client HUB Režijski Prikaz" },
      { url: "/photo/ClientHUB/ClientHUB guest.png", title: "Client HUB Pregled za Naručioce" },
      { url: "/photo/StudioBridge/StudioBridge settings.png", title: "Hardversko mapiranje kanala" },
    ],
    stats: [
      { value: "< 20 ms", label: "Latencija u zvučnoj vezi" },
      { value: "4K / HD", label: "Video screening pregled" },
      { value: "Zero-bleed", label: "Mix-minus režijska izolacija" },
    ],
  },
  dokumentart: {
    id: "dokumentart",
    badge: "Poslovni Protokoli & Digitalni Arhiv",
    title: "DokumentArt DMS",
    subtitle: "Upravljanje Dokumentima, Javne Nabavke & Kripto Potpis",
    themeColor: "text-amber-700",
    bgGradient: "from-amber-50 via-yellow-50/30 to-white",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    tagline: "Elektronski djelovodnik sa evidencijom fizičke lokacije, registar ugovora i sjednice organa.",
    description: [
      "DokumentArt je sveobuhvatan sistem za upravljanje tokovima dokumenata u javnim preduzećima, ustanovama i korporacijama. Obuhvata elektronski djelovodnik koji tačno bilježi u kojoj kancelariji i registratoru se fizički nalazi originalni akt.",
      "Sistem posjeduje specijalizovane module za pripremu sjednica Skupštine, Nadzornog odbora i Odbora za reviziju, vođenje procedura javnih nabavki, evidenciju ugovora i pravilnika, uz dvofaktorsku autentifikaciju (2FA) i kriptografski digitalni potpis.",
    ],
    keyFeatures: [
      {
        title: "Elektronski Djelovodnik",
        desc: "Automatsko zavođenje, dodjela protokola i precizno praćenje kretanja fizičkog dokumenta.",
      },
      {
        title: "Organi Upravljanja & Sjednice",
        desc: "Paketi materijala za Skupštinu, Nadzorni odbor i Reviziju sa verzionisanjem i digitalnim glasanjem.",
      },
      {
        title: "Javne Nabavke & Ugovori",
        desc: "Registar postupaka nabavki, praćenje rokova žalbi, realizacija ugovora i aneksi.",
      },
      {
        title: "2FA & Kripto Arhiv",
        desc: "Maksimalna pravna i informaciona sigurnost uz kriptografsku zaštitu i revizorski trag.",
      },
    ],
    screenshots: [
      { url: "/photo/DokumentArt/doc01.png", title: "Glavni panel djelovodnika i protokola" },
      { url: "/photo/DokumentArt/doc02.png", title: "Pregled predmeta i fizičke lokacije akata" },
    ],
    stats: [
      { value: "100%", label: "Revizorski trag svake radnje" },
      { value: "2FA", label: "Zaštita pristupa podacima" },
      { value: "e-Arhiv", label: "Trajno digitalno čuvanje" },
    ],
  },
  entersys: {
    id: "entersys",
    badge: "Elektronska Kontrola & Upravljanje",
    title: "EnterSYS & Argus",
    subtitle: "13 Kompleksnih Modula & Centralizovani Nadzor",
    themeColor: "text-blue-700",
    bgGradient: "from-sky-50 via-blue-50/40 to-white",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    tagline: "Upravljanje sportskim kompleksima, bazenima, dvoranama, tripodima i pametnim ormarićima.",
    description: [
      "EnterSYS je modularna platforma projektovana za vođenje složenih objekata i sportsko-rekreativnih centara. Kroz 13 integrisanih modula, sistem pokriva kontrolu pristupa, elektronske tripode i barijere, RFID narukvice i pametne garderobne ormariće.",
      "Argus panel predstavlja operativno komandno mjesto za rukovodioce — pruža pregled stanja po zonama, trenutnu popunjenost objekta, rad blagajni i automatsku detekciju zastoja bez potrebe za prekidom radnog procesa.",
    ],
    keyFeatures: [
      {
        title: "Kontrola Pristupa & Tripodi",
        desc: "Hardverska integracija sa automatskim barijerama, tripodima i RFID/bar-kod čitačima.",
      },
      {
        title: "Pametni Ormarići & Narukvice",
        desc: "Automatsko dodjeljivanje ormarića na ulazu i beskontaktno otključavanje narukvicama.",
      },
      {
        title: "Zakupi Terena & Dvorana",
        desc: "Grafički kalendar fiksnih i periodičnih zakupa sa evidencijom uplata i izdavanjem računa.",
      },
      {
        title: "13 Povezanih Modula",
        desc: "PoolManager, HallManager, GymManager, FieldManager, Rentals i blagajnički pultovi u jednoj bazi.",
      },
    ],
    screenshots: [
      { url: "/photo/Argus/Argus01.png", title: "Argus operativni nadzorni centar" },
      { url: "/photo/Argus/Argus02.png", title: "Kontrola radnih mjesta i ulaza" },
      { url: "/photo/Argus/Argus03.png", title: "Pregled propusnosti i statusa barijera" },
      { url: "/photo/Argus/Argus04.png", title: "Izvještaji i statistika po zonama" },
    ],
    stats: [
      { value: "13", label: "Namjenskih modula" },
      { value: "< 0.3s", label: "Očitavanje i propuštanje na tripodima" },
      { value: "Live", label: "Nadzor popunjenosti objekta" },
    ],
  },
  swisstiming: {
    id: "swisstiming",
    badge: "Švicarska Preciznost • 15+ Godina",
    title: "Swiss Timing SOCCS & SwimVoice",
    subtitle: "Zvanični Mjerni Sistemi i Vođenje Sportska Borilišta",
    themeColor: "text-red-700",
    bgGradient: "from-cyan-50 via-sky-50/40 to-white",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
    tagline: "Elektronsko mjerenje stotinki, integracija sa Quantum Timer-om i automatske zvučne najave.",
    description: [
      "Swiss Timing SOCCS je vodeće softversko rješenje na Balkanu za obradu rezultata i vođenje međunarodnih plivačkih takmičenja. Povezan je direktno sa Swiss Timing Quantum Timerom, dodirnim tablama (touchpads) i startnim blokovima.",
      "Platforma omogućava automatski dvosmjerni uvoz i izvoz Lenex datoteka za World Aquatics, live semafor u realnom vremenu, te SwimVoice zvučni sistem za automatsku najavu plivača i plasmana.",
    ],
    keyFeatures: [
      {
        title: "Quantum Timer & Touchpads Integracija",
        desc: "Direktno binarno očitavanje hiljaditinki sekunde i automatska verifikacija rekorda.",
      },
      {
        title: "Meet Manager",
        desc: "Besprijekorna Lenex razmjena sa bazama evropskih i svjetskih plivačkih federacija.",
      },
      {
        title: "SwimVoice Audio Automatizacija",
        desc: "Sintetizovane ili snimljene najave startnih lista i rezultata direktno na razglas bazena.",
      },
      {
        title: "World Aquatics & LEN Standardi",
        desc: "Puna usklađenost sa međunarodnim pravilima sudačkog i elektronskog mjerenja.",
      },
    ],
    screenshots: [
      { url: "/photo/SOCCS/SOCCS01.png", title: "Glavni operativni prozor SOCCS sistema" },
      { url: "/photo/SOCCS/SOCCS02.png", title: "Obrada trka i vremena po stazama" },
      { url: "/photo/SOCCS/SOCCS03.png", title: "Live rezultati i sinhronizacija sa semaforom" },
    ],
    stats: [
      { value: "1/10.000s", label: "Preciznost mjerenja vremena" },
      { value: "15+ god", label: "Iskustva na prvenstvima i mitinzima" },
      { value: "100%", label: "Usklađenost sa FINA/WA pravilima" },
    ],
  },
  logistix: {
    id: "logistix",
    badge: "Transport & Upravljanje Flotom",
    title: "LogistiX Enterprise",
    subtitle: "Dispečerski Kokpit, CMR, Fiskalizacija i Vozački QR Tunel",
    themeColor: "text-indigo-700",
    bgGradient: "from-indigo-50 via-sky-50/40 to-white",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    tagline: "Kompletan transportni ciklus od prijema narudžbe i GPS praćenja do ovjerenog CMR-a, PURS fakture i obračuna vozača.",
    description: [
      "LogistiX Enterprise objedinjuje dispečerski kokpit sa live GPS mapom, transportne naloge, automatsku provjeru kompatibilnosti tereta, štampu CMR tovarnih listova i putnih naloga, te 3-korak fakturisanje za domaće (17% PDV) i ino tržište (0% PDV) sa LPFR/PURS QR kodom i KIF izvozom.",
      "Preko ugrađenog Vozačkog i Vlasničkog QR tunela, vozač sa terena šalje sliku ovjerenog CMR-a, ažurira saldo Euro-paleta i komunicira u realnom vremenu sa dispečerom, dok sistem automatski prati DKV/UTA gorivo, dangubu na rampama, obračun dnevnica i isteke dokumenata (registracija, tahograf, ADR, CEMT).",
    ],
    keyFeatures: [
      {
        title: "Flota & Live GPS Kokpit",
        desc: "Praćenje vozila u realnom vremenu kroz sve faze ture (Slobodan → Utovar → Pod teretom → Granica → Rampa → Istovar → Ovjeren CMR).",
      },
      {
        title: "Nalozi, CMR & Fiskalizacija",
        desc: "Štampa CMR i putnih naloga, 3-step fakturisanje (BiH/INO) sa PURS QR kodom, arhiva dosijea i KIF izvoz.",
      },
      {
        title: "Vozački & Vlasnički QR Tunel",
        desc: "Bez instalacije na telefonu: QR povezivanje za slanje ovjerenog CMR-a sa rampe, evidenciju paleta i dvosmjerni chat.",
      },
      {
        title: "Troškovnik, Gorivo & Alarmi",
        desc: "Uvoz DKV/UTA CSV izvoda goriva, obračun dnevnica vozača, praćenje dangube i semafor isteka ADR/CEMT/tahografa.",
      },
    ],
    screenshots: [
      { url: "/photo/LogisticX/UI.png", title: "LogistiX Enterprise — glavni interfejs" },
      { url: "/photo/LogisticX/centralni ekran.png", title: "Centralni dispečerski ekran" },
      { url: "/photo/LogisticX/flota.png", title: "Flota & Live GPS praćenje" },
      { url: "/photo/LogisticX/nalozi i CMR.png", title: "Transportni nalozi, CMR & PURS fakturisanje" },
      { url: "/photo/LogisticX/sistem praćenja paleta.png", title: "Sistem praćenja Euro-paleta" },
      { url: "/photo/LogisticX/tunel uprave za praćenje.png", title: "Vlasnički & vozački QR tunel" },
    ],
    stats: [
      { value: "8 Modula", label: "Od narudžbe do KIF-a i plata" },
      { value: "QR Tunel", label: "Direktna veza dispečer ↔ vozač" },
      { value: "BiH / INO", label: "LPFR/PURS fiskalizacija & CMR" },
    ],
  },
};

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onOpenContact,
}: ProductDetailModalProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!isOpen || !product) return null;

  const data = productsData[product];
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-5xl bg-gradient-to-b ${data.bgGradient} rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-slate-900`}
      >
        {/* TOP ACCENT LINE */}
        <div
          className={`h-2 w-full ${
            product === "fluxapos"
              ? "bg-emerald-500"
              : product === "fluxax"
              ? "bg-purple-600"
              : product === "dokumentart"
              ? "bg-amber-500"
              : product === "entersys"
              ? "bg-blue-600"
              : product === "logistix"
              ? "bg-indigo-600"
              : "bg-red-600"
          }`}
        />

        {/* MODAL HEADER */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-200/80 bg-white/80 backdrop-blur-md flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${data.badgeColor}`}>
                {data.badge}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {data.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {data.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            title="Zatvori prozor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8 bg-white/50">
          
          {/* Tagline Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-slate-800">
              {data.tagline}
            </p>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3 text-slate-700 text-xs sm:text-sm sm:leading-relaxed">
            {data.description.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Features Grid */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
              Ključne Mogućnosti & Prednosti
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
              Prikaz Ekrana & Terenski Izgled Softvera
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.screenshots.map((s, idx) =>
                s.url ? (
                  <div
                    key={idx}
                    onClick={() => setSelectedImg(s.url)}
                    className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950/5 hover:shadow-lg transition-all cursor-pointer aspect-[16/10]"
                  >
                    <img
                      src={s.url}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-[11px] font-medium">
                      {s.title}
                    </div>
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 flex flex-col items-center justify-center p-4 text-center aspect-[16/10]"
                  >
                    <span className="text-[11px] font-semibold text-slate-700">{s.title}</span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      Mjesto za sliku #{idx + 1}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Key Metrics Pill Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-slate-200">
            {data.stats.map((st, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                  {st.value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* MODAL FOOTER */}
        <div className="px-6 sm:px-8 py-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {product === "swisstiming"
              ? "Zvanični mjerni sistem za plivačka prvenstva, mitinge i automatsku obradu rezultata."
              : "Imate specifične zahtjeve za implementaciju u vašem preduzeću?"}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Zatvori
            </button>

            {onOpenContact && product !== "swisstiming" && (
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(product);
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs tracking-wide shadow-md flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Zakažite Prezentaciju</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Full Image Lightbox */}
        {selectedImg && (
          <div
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <img
                src={selectedImg}
                alt="Enlarged screenshot"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              />
              <div className="text-center text-white text-xs mt-2 font-mono">
                Kliknite bilo gdje za zatvaranje
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
