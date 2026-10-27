"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, ShieldCheck, Lock, User, ArrowRight, AlertCircle } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  onSuccessLogin?: (identifier: string, tenantData?: any) => void;
}

export default function LoginModal({ isOpen, onClose, onOpenContact, onSuccessLogin }: LoginModalProps) {
  const { t } = useLanguage();
  const [tenant, setTenant] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/tenant/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: tenant.trim(), password: password.trim() }),
      });

      const data = await res.json();

      if (data.ok && data.tenant) {
        setLoading(false);
        if (onSuccessLogin) {
          onSuccessLogin(data.tenant.naziv || tenant, data.tenant);
        }
      } else {
        setLoading(false);
        setError(data.error || "Prijava nije uspjela. Provjerite podatke.");
      }
    } catch {
      setLoading(false);
      setError("Greška u povezivanju sa serverom. Pokušajte ponovo.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">{t.loginModal.title}</h3>
            <p className="text-xs text-slate-500">{t.loginModal.subtitle}</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.loginModal.usernameLabel}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={tenant}
                onChange={(e) => setTenant(e.target.value)}
                placeholder={t.loginModal.usernamePlaceholder}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-600 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.loginModal.passwordLabel}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-600 transition-colors"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>{t.loginModal.checking}</span>
            ) : (
              <>
                <span>{t.loginModal.loginBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500 mb-1.5">
            {t.loginModal.forgotText}
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 underline underline-offset-4 cursor-pointer"
          >
            {t.loginModal.supportLink}
          </button>
        </div>
      </div>
    </div>
  );
}
