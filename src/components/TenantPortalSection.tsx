"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, QrCode, Download, BookOpen, KeyRound, ArrowRight, Lock } from "lucide-react";

interface TenantPortalSectionProps {
  onOpenLogin: (identifier?: string) => void;
  onOpenContact: () => void;
}

export default function TenantPortalSection({ onOpenLogin, onOpenContact }: TenantPortalSectionProps) {
  const { t } = useLanguage();
  const [tenantUsername, setTenantUsername] = useState("");
  const [tenantPassword, setTenantPassword] = useState("");

  const handleInlineLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenLogin(tenantUsername || "aquana");
  };

  return (
    <section id="tenant-portal" className="py-24 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.portal.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            {t.portal.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.portal.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 4 Features */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-soft-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {t.portal.feature1Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t.portal.feature1Desc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-soft-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {t.portal.feature2Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t.portal.feature2Desc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-soft-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {t.portal.feature3Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t.portal.feature3Desc}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-soft-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {t.portal.feature4Title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t.portal.feature4Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tenant Login Box */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t.portal.loginCardTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.portal.loginCardHint}
                </p>
              </div>
            </div>

            <form onSubmit={handleInlineLogin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tenant Identifikator
                </label>
                <input
                  type="text"
                  value={tenantUsername}
                  onChange={(e) => setTenantUsername(e.target.value)}
                  placeholder={t.portal.usernamePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Lozinka
                </label>
                <input
                  type="password"
                  value={tenantPassword}
                  onChange={(e) => setTenantPassword(e.target.value)}
                  placeholder={t.portal.passwordPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md flex items-center justify-center gap-2 group transition-all cursor-pointer"
              >
                <span>{t.portal.loginBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500 mb-2">
                {t.portal.demoNote}
              </p>
              <button
                onClick={onOpenContact}
                className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 underline underline-offset-4 cursor-pointer"
              >
                Zatražite instalaciju ili demo pristup →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
