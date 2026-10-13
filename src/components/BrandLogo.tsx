"use client";

import React from "react";

interface BrandLogoProps {
  id: string;
  name: string;
  className?: string;
}

export default function BrandLogo({ id, name, className = "h-9 w-auto" }: BrandLogoProps) {
  switch (id) {
    case "coca-cola":
      return (
        <div className="flex items-center justify-center h-10 px-3 bg-red-600 rounded-xl text-white shadow-xs">
          <svg viewBox="0 0 120 36" className="h-6 w-auto fill-current">
            <text x="50%" y="65%" textAnchor="middle" fontFamily="Brush Script MT, cursive, serif" fontSize="26" fontStyle="italic" fontWeight="bold">Coca-Cola</text>
          </svg>
        </div>
      );

    case "mercedes":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-slate-900 rounded-xl text-white shadow-xs gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2 L12 12 M12 12 L4 18 M12 12 L20 18" strokeLinecap="round" />
          </svg>
          <span className="font-sans tracking-wider text-xs font-bold uppercase">Mercedes-Benz</span>
        </div>
      );

    case "pepsi":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-blue-700 rounded-xl text-white shadow-xs gap-2">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <circle cx="12" cy="12" r="10" fill="#dc2626" />
            <path d="M2 12 Q7 4 12 12 Q17 20 22 12 A10 10 0 0 1 2 12 Z" fill="#ffffff" />
            <path d="M2 12 Q7 20 12 12 Q17 4 22 12 A10 10 0 0 1 2 12 Z" fill="#2563eb" />
          </svg>
          <span className="font-black text-sm tracking-tighter uppercase">pepsi</span>
        </div>
      );

    case "garnier":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-emerald-800 rounded-xl text-white shadow-xs gap-1.5">
          <span className="font-sans font-extrabold tracking-widest text-xs uppercase">GARNIER</span>
          <span className="text-[9px] text-emerald-200 font-light">L'ORÉAL</span>
        </div>
      );

    case "staropramen":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-amber-950 rounded-xl text-amber-400 shadow-xs border border-amber-900/50">
          <span className="font-serif font-bold text-sm tracking-wide">Staropramen</span>
        </div>
      );

    case "kort":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-red-600 rounded-xl text-white shadow-xs gap-2">
          <span className="font-black text-base tracking-tighter bg-white text-red-600 px-1.5 py-0.2 rounded font-sans">KORT</span>
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">MARKETI</span>
        </div>
      );

    case "konzum":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-red-600 rounded-xl text-white shadow-xs">
          <span className="font-black text-base tracking-tight uppercase">KONZUM</span>
        </div>
      );

    case "centrum":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-amber-500 rounded-xl text-slate-950 shadow-xs">
          <span className="font-black text-base tracking-tight">centrum</span>
          <span className="text-[9px] font-bold ml-1 uppercase">TRADE</span>
        </div>
      );

    case "tropic":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-emerald-600 rounded-xl text-white shadow-xs gap-1.5">
          <span className="font-black text-sm tracking-tight uppercase">TROPIC</span>
          <span className="text-[10px] text-emerald-100 font-medium">Moj Market</span>
        </div>
      );

    case "djuric":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-blue-800 rounded-xl text-white shadow-xs">
          <span className="font-bold text-sm tracking-wider uppercase">ĐURIĆ MBB</span>
        </div>
      );

    case "ledo":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-sky-600 rounded-xl text-white shadow-xs">
          <span className="font-black text-base tracking-widest uppercase">LEDO</span>
        </div>
      );

    case "hemofarm":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-slate-900 rounded-xl text-white shadow-xs gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
          <span className="font-bold text-xs tracking-wider uppercase">HEMOFARM</span>
          <span className="text-[9px] text-slate-400">STADA</span>
        </div>
      );

    case "mtel":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-red-600 rounded-xl text-white shadow-xs">
          <span className="font-black text-lg tracking-tighter lowercase">m:tel</span>
        </div>
      );

    case "addiko":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-red-700 rounded-xl text-white shadow-xs">
          <span className="font-bold text-sm tracking-tight">Addiko Bank</span>
        </div>
      );

    case "nlb":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-blue-900 rounded-xl text-white shadow-xs">
          <span className="font-black text-base tracking-widest">NLB</span>
          <span className="text-[10px] ml-1 font-medium text-blue-200">Banka</span>
        </div>
      );

    case "sberbank":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-emerald-700 rounded-xl text-white shadow-xs gap-1.5">
          <span className="font-bold text-xs tracking-wider uppercase">ATOS BANK</span>
        </div>
      );

    case "mikrofin":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-emerald-800 rounded-xl text-white shadow-xs">
          <span className="font-extrabold text-xs tracking-widest uppercase">MIKROFIN</span>
        </div>
      );

    case "eki":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-blue-700 rounded-xl text-yellow-300 shadow-xs">
          <span className="font-black text-lg tracking-widest">EKI</span>
        </div>
      );

    case "lutrija":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-amber-600 rounded-xl text-white shadow-xs">
          <span className="font-black text-xs tracking-wider uppercase">LUTRIJA RS</span>
        </div>
      );

    case "omega-sports":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-red-700 rounded-xl text-white shadow-xs gap-2">
          <span className="font-serif font-black text-lg">Ω</span>
          <span className="font-sans font-bold text-xs tracking-widest uppercase">SWISSTIMING</span>
        </div>
      );

    case "aquana":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-cyan-700 rounded-xl text-white shadow-xs gap-1.5">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
          <span className="font-black text-sm tracking-widest uppercase">AQUANA</span>
        </div>
      );

    case "ksbih":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-blue-900 rounded-xl text-amber-400 shadow-xs">
          <span className="font-black text-xs tracking-widest uppercase">KS BIH</span>
        </div>
      );

    case "ovation":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-slate-950 rounded-xl text-amber-400 shadow-xs">
          <span className="font-bold text-xs tracking-tight">ovation <strong className="text-white font-black">BBDO</strong></span>
        </div>
      );

    case "livada":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-lime-800 rounded-xl text-white shadow-xs">
          <span className="font-extrabold text-xs tracking-widest uppercase">LIVADA</span>
        </div>
      );

    case "aquarius":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-cyan-950 rounded-xl text-cyan-300 shadow-xs">
          <span className="font-bold text-xs tracking-tight">aquarius <strong className="text-white font-black">ogilvy</strong></span>
        </div>
      );

    case "grad-bl":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-slate-900 rounded-xl text-slate-100 shadow-xs">
          <span className="font-bold text-xs tracking-widest uppercase">GRAD BANJA LUKA</span>
        </div>
      );

    case "vlada-rs":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-blue-950 rounded-xl text-white shadow-xs">
          <span className="font-bold text-xs tracking-widest uppercase">VLADA RS</span>
        </div>
      );

    case "sanja-colic-zelic":
      return (
        <div className="flex items-center justify-between h-10 px-4 bg-gradient-to-r from-purple-900 to-slate-900 rounded-xl text-purple-100 shadow-xs border border-purple-800/60">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-serif text-sm">🎹</span>
            <span className="font-serif italic font-bold text-xs text-white tracking-wide">
              Sanja Čolić Zelić
            </span>
          </div>
          <span className="text-[9px] font-mono text-purple-300 uppercase tracking-widest font-semibold">
            Pijanista
          </span>
        </div>
      );

    case "big-bang":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-slate-950 rounded-xl text-amber-400 shadow-xs border border-amber-900/40">
          <span className="font-black text-sm tracking-widest uppercase">★ BIG BANG ★</span>
        </div>
      );

    case "demofest":
      return (
        <div className="flex items-center justify-center h-10 px-4 bg-amber-500 rounded-xl text-slate-950 shadow-xs">
          <span className="font-black text-sm tracking-tight uppercase">DEMOFEST</span>
        </div>
      );

    default:
      // Elegant Music Artist Emblem
      return (
        <div className="flex items-center justify-between h-10 px-3.5 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/80 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-purple-200 text-purple-900 flex items-center justify-center font-bold text-xs">
              ♪
            </span>
            <span className="font-bold text-xs text-purple-950 truncate max-w-[150px]">
              {name}
            </span>
          </div>
        </div>
      );
  }
}
