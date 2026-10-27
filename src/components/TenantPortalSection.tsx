"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { QrCode, Download, BookOpen, KeyRound, ArrowRight, Lock } from "lucide-react";

interface TenantPortalSectionProps {
  onOpenLogin: (identifier?: string, tenantData?: any) => void;
  onOpenContact: () => void;
}

export default function TenantPortalSection({ onOpenLogin, onOpenContact }: TenantPortalSectionProps) {
  const { t } = useLanguage();
  const [tenantUsername, setTenantUsername] = useState("");
  const [tenantPassword, setTenantPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInlineLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/tenant/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: tenantUsername.trim(), password: tenantPassword.trim() }),
      });

      const data = await res.json();
      if (data.ok && data.tenant) {
        setLoading(false);
        onOpenLogin(data.tenant.naziv || tenantUsername, data.tenant);
      } else {
        setLoading(false);
        setError(data.error || "Prijava nije uspjela. Provjerite pristupne podatke.");
      }
    } catch {
      setLoading(false);
      setError("Greška u povezivanju sa serverom.");
    }
  };

  return (
    <section
      id="tenant-portal"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white border-t border-sky-900/60"
    >
      {/* Subtle Technical Radial Grid Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-5 sm:px-10 md:px-16 lg:px-20 xl:px-28 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.portal.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-3 sm:mb-4">
            {t.portal.titlePrefix} <span className="font-semibold text-sky-400">{t.portal.titleHighlight}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {t.portal.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left: 4 Client Operational Hub Modules */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-sky-800/40 hover:border-sky-600/50 transition-all flex items-start gap-3.5 sm:gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 border border-sky-500/30">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  {t.portal.feature1Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {t.portal.feature1Desc}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-emerald-800/40 hover:border-emerald-600/50 transition-all flex items-start gap-3.5 sm:gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  {t.portal.feature2Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {t.portal.feature2Desc}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-purple-800/40 hover:border-purple-600/50 transition-all flex items-start gap-3.5 sm:gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-500/30">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  {t.portal.feature3Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {t.portal.feature3Desc}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-amber-800/40 hover:border-amber-600/50 transition-all flex items-start gap-3.5 sm:gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  {t.portal.feature4Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {t.portal.feature4Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tenant Login Box (Secure Glass Terminal) */}
          <div className="lg:col-span-5 bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-sky-700/50 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {t.portal.loginCardTitle}
                </h3>
                <p className="text-xs text-slate-300">
                  {t.portal.loginCardHint}
                </p>
              </div>
            </div>

            <form onSubmit={handleInlineLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.portal.usernameLabel}
                </label>
                <input
                  type="text"
                  value={tenantUsername}
                  onChange={(e) => setTenantUsername(e.target.value)}
                  placeholder={t.portal.usernamePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 shadow-inner transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  {t.portal.passwordLabel}
                </label>
                <input
                  type="password"
                  value={tenantPassword}
                  onChange={(e) => setTenantPassword(e.target.value)}
                  placeholder={t.portal.passwordPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 shadow-inner transition-colors"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-xs text-rose-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg shadow-sky-950/50 flex items-center justify-center gap-2 group transition-all cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? t.portal.verifying : t.portal.loginBtn}</span>
                {!loading && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-700/80 text-center">
              <p className="text-xs text-slate-400 mb-2">
                {t.portal.demoNote}
              </p>
              <button
                onClick={onOpenContact}
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-4 cursor-pointer transition-colors"
              >
                {t.portal.requestDemoLink}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
