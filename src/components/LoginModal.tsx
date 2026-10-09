"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Lock, User, ArrowRight, AlertCircle } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  onSuccessLogin?: (identifier: string) => void;
}

export default function LoginModal({ isOpen, onClose, onOpenContact, onSuccessLogin }: LoginModalProps) {
  const [tenant, setTenant] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (onSuccessLogin) {
        onSuccessLogin(tenant || "aquana");
      } else {
        window.location.href = `https://app.studiotaf.xyz`;
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-3xl p-8 bg-white border border-slate-200 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Tenant Korisnički Portal</h3>
            <p className="text-xs text-slate-500">Siguran pristup licencama i modulima</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tenant Identifikator
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={tenant}
                onChange={(e) => setTenant(e.target.value)}
                placeholder="npr. aquana, fructatrade, sc_borik"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-600 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Lozinka
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
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Provjera licence...</span>
            ) : (
              <>
                <span>Prijavite se na Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500 mb-1.5">
            Zaboravili ste pristupne podatke ili trebate novu licencu?
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 underline underline-offset-4 cursor-pointer"
          >
            Kontaktirajte tehničku podršku →
          </button>
        </div>
      </div>
    </div>
  );
}
