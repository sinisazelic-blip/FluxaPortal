"use client";

import React, { useState } from "react";
import {
  Radio,
  Headphones,
  Mic,
  Sliders,
  ShieldCheck,
  Sparkles,
  Zap,
  CheckCircle2,
  ExternalLink,
  X,
  Play,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";

interface FluxaxShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export default function FluxaxShowcaseModal({
  isOpen,
  onClose,
  onOpenContact,
}: FluxaxShowcaseModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "bridge" | "hub" | "specs">("overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0e1218] border border-amber-500/30 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] text-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* TOP ACCENT HOOD (CLA WINE-RED / CHERRY METALLIC GLOW) */}
        <div className="h-2 w-full bg-gradient-to-r from-red-900 via-amber-500 to-red-900" />

        {/* MODAL HEADER */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-800/80 flex items-center justify-between bg-gradient-to-b from-[#161b24] to-[#0e1218]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500/20 to-red-500/10 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/10">
              <Radio className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                  FluxaX Audio Suite
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold">
                  v1.2.0 Broadcast
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>FluxaX StudioBridge & Client HUB</span>
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NAVIGATION TABS */}
        <div className="px-6 sm:px-8 bg-[#12161f] border-b border-slate-800/60 flex gap-2 sm:gap-4 overflow-x-auto py-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "overview"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            01 • Pregled Sistema
          </button>
          <button
            onClick={() => setActiveTab("bridge")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "bridge"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            02 • StudioBridge (Režija)
          </button>
          <button
            onClick={() => setActiveTab("hub")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "hub"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            03 • Client HUB (Klijentski Pult)
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "specs"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
            }`}
          >
            04 • Audio Arhitektura & RME OSC
          </button>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Hero Banner inside Modal */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#181d27] via-[#12161f] to-[#0c0e14] border border-amber-500/20 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-2xl relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tehnologija 40 Godina Studijskog Iskustva</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Daljinska audio režija bez kompresije i bez kašnjenja.
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    FluxaX premošćuje tonski studio i klijenta: naručilac i advertajzing agencija sa bilo koje lokacije u svijetu slušaju sirov master zvuk iz režije sa <strong>18ms latencije</strong>, razgovaraju sa spikerom u gluvovoj sobi i biraju tejkove uživo.
                  </p>
                </div>
              </div>

              {/* Two Core Pillars Side-by-Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: StudioBridge */}
                <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 hover:border-amber-500/40 transition-all space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      DESKTOP ELECTRON (PORT 4040)
                    </span>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white">FluxaX StudioBridge</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Hardverski rack kontroler za režiju. Nativno komunicira sa RME TotalMix audio interfejsom preko OSC protokola na portu 7001.
                    </p>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Zero-Bleed DSP matrica bez internog odjeka</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Vintage Chris Lord-Alge rek sa Fender krom logotipom</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Hardverski Talkback Mute i direktan link ka Client HUB-u</span>
                    </li>
                  </ul>
                </div>

                {/* Card 2: Client HUB */}
                <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 hover:border-amber-500/40 transition-all space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      ZERO-INSTALL WEB (PORT 1991)
                    </span>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white">FluxaX Client HUB</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Klijentski interaktivni pult. Naručilac ulazi jednim klikom preko sigurnog linka sa računara, tableta ili telefona.
                    </p>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Autentični analogni VU metri povezani na zvuk iz studija</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Izolovani Talkback mikrofoni za Naručioca i Klijenta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Auto-Duck stišavanje muzike, DIM (-20dB) i glasanje za tejkove (★)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STUDIO BRIDGE */}
          {activeTab === "bridge" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Režijski Procesor sa Nativnim OSC Povezivanjem</h4>
                    <p className="text-xs text-slate-400">Direktna hardverska integracija sa RME TotalMix FX zvučnim karticama</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Za razliku od amaterskih streaming rješenja, <strong>StudioBridge</strong> ne koristi virtuelne drajvere niti Windows mikser. Povezan je direktno na RME TotalMix digitalni mikser putem <strong>OSC (Open Sound Control)</strong> protokola preko internog UDP socketa. 
                </p>

                {/* Screenshot Placeholder Slot */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090b0e] p-8 text-center relative">
                  <div className="text-amber-400/80 mb-2 font-mono text-xs font-bold flex items-center justify-center gap-2">
                    <Radio className="w-4 h-4 animate-pulse" />
                    <span>FOTOGRAFIJA APLIKACIJE: STUDIOBRIDGE CONSOLE</span>
                  </div>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Kompaktni fiksni 620px prozor sa CLA zakrivljenim tamno-crvenim krovom, Fender kromiranim logotipom, matrix audio ruterom i OSC statusom.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">UDP Port 7001</div>
                    <div className="text-xs font-bold text-white mt-0.5">RME OSC Client</div>
                    <div className="text-[11px] text-slate-400 mt-1">Upravlja Talkback, Dim i Master Volume parametrima u hardveru.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Zero-Bleed DSP</div>
                    <div className="text-xs font-bold text-white mt-0.5">Interni Bus Ruter</div>
                    <div className="text-[11px] text-slate-400 mt-1">Klijent nikada ne čuje sopstveni glas sa zakašnjenjem kroz slušalice.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Electron Native</div>
                    <div className="text-xs font-bold text-white mt-0.5">Setup.exe Installer</div>
                    <div className="text-[11px] text-slate-400 mt-1">Čista Windows instalacija sa automatskim tihim ažuriranjem bez gita.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CLIENT HUB */}
          {activeTab === "hub" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Chris Lord-Alge (CLA) Klijentska Rek Konzola</h4>
                    <p className="text-xs text-slate-400">Autentični analogni studio osjećaj direktno u web pretraživaču</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Klijent ne mora instalirati nikakve programe niti podešavati audio drajvere. Dobija enkriptovani link za svoju sesiju, stavlja slušalice i ima potpunu kontrolu nad slušanjem spikera i matrice.
                </p>

                {/* Screenshot Placeholder Slot */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090b0e] p-8 text-center relative">
                  <div className="text-teal-400/80 mb-2 font-mono text-xs font-bold flex items-center justify-center gap-2">
                    <Radio className="w-4 h-4 animate-pulse" />
                    <span>FOTOGRAFIJA APLIKACIJE: CLIENT HUB CLA CONSOLE</span>
                  </div>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Dvostruki stereo LED VU metri vezani na stvarni audio signal iz režije, klizač za slušalice, osjetljivost mikrofona i tasteri za Talkback i Auto-Duck.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-teal-400 font-bold uppercase">Stvarni VU Metar</div>
                    <div className="text-xs font-bold text-white mt-0.5">Live Hardware Feeds</div>
                    <div className="text-[11px] text-slate-400 mt-1">Nema lažne animacije — LED diode reaguju tačno na zvuk iz studija.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-purple-400 font-bold uppercase">Uloge & Izolacija</div>
                    <div className="text-xs font-bold text-white mt-0.5">Naručilac & Klijent</div>
                    <div className="text-[11px] text-slate-400 mt-1">Zasebni nivoi, tasteri i mikrofoni za agenciju i klijenta gosta.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-amber-400 font-bold uppercase">Odabir Tejkova</div>
                    <div className="text-xs font-bold text-white mt-0.5">Scenario & Zvjezdice</div>
                    <div className="text-[11px] text-slate-400 mt-1">Klijent tokom snimanja ocjenjuje tejkove koji se odmah bilježe u režiji.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SPECS & ARCHITECTURE */}
          {activeTab === "specs" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-[#131720] border border-slate-800 space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>Tehničke Specifikacije i Protokoli</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <span className="font-mono text-amber-400 font-bold">AUDIO STRIMING & KVALITET</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• <strong>Format:</strong> 48.000 Hz, 24-Bit Stereo PCM / Opus</li>
                      <li>• <strong>Latencija:</strong> ~18 ms u regionalnoj mreži (P2P WebRTC)</li>
                      <li>• <strong>Kompresija:</strong> Lossless režim za profesionalni monitoring</li>
                      <li>• <strong>Zaštita:</strong> DTLS-SRTP end-to-end enkripcija prenosa</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <span className="font-mono text-teal-400 font-bold">HARDVERSKA KOMUNIKACIJA</span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• <strong>RME TotalMix FX:</strong> OSC kontrola preko UDP 7001</li>
                      <li>• <strong>Komande:</strong> /1/talkback, /1/volume, /1/mastervolume</li>
                      <li>• <strong>Digitalni Bus:</strong> 8-kanalna virtualna matrica sabiranja</li>
                      <li>• <strong>Licenciranje:</strong> Automatska provjera preko Fluxa Cloud servisa</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="px-6 sm:px-8 py-4 bg-[#12161f] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FluxaX StudioBridge & Client HUB je spreman za produkcijski rad.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                if (onOpenContact) onOpenContact();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 cursor-pointer flex items-center gap-2"
            >
              <span>Zatražite Ponudu za Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
