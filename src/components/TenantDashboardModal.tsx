"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  QrCode,
  Download,
  BookOpen,
  Printer,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  CreditCard,
  FileText,
  Clock,
  HardDrive,
  Copy,
} from "lucide-react";

interface TenantDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTenantName?: string;
}

interface TenantData {
  id: number;
  naziv: string;
  status: string;
  profile: string;
  modules: string[];
  subscriptionEndsAt: string;
  daysUntilEnd: number;
  token: string;
  brojBlagajni: number;
}

interface SlipData {
  receiver: {
    name: string;
    address: string;
    account: string;
    rawAccount?: string;
    bankName: string;
    swift?: string;
    iban?: string;
    jib?: string;
  };
  payer: {
    name: string;
    token: string;
  };
  purpose: string;
  amount: number;
  currency: string;
  referenceNumber: string;
  months: number;
  validUntil: string;
  qrCode: string;
}

interface PackageItem {
  id: string;
  name: string;
  version: string;
  releaseDate: string;
  size: string;
  description: string;
  downloadUrl: string;
  profileRequired: string;
  changelog: string[];
}

export default function TenantDashboardModal({
  isOpen,
  onClose,
  initialTenantName = "",
}: TenantDashboardModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "renew" | "updates" | "docs">("overview");
  const [searchTerm, setSearchTerm] = useState(initialTenantName || "aquana");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tenant, setTenant] = useState<TenantData | null>(null);

  // Renewal slip state
  const [selectedMonths, setSelectedMonths] = useState<number>(12);
  const [slipLoading, setSlipLoading] = useState(false);
  const [slip, setSlip] = useState<SlipData | null>(null);
  const [copiedAccount, setCopiedAccount] = useState(false);

  // Updates packages state
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [loadingPackages, setLoadingPackages] = useState(false);

  // Fetch tenant on open
  useEffect(() => {
    if (isOpen) {
      fetchTenant(initialTenantName || "aquana");
    }
  }, [isOpen, initialTenantName]);

  const fetchTenant = async (nameOrToken: string) => {
    if (!nameOrToken.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/tenant/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: nameOrToken, password: "Aquana01+" }),
      });
      const data = await res.json();
      if (data.ok && data.tenant) {
        setTenant(data.tenant);
        // also fetch slip and updates for this tenant
        fetchSlip(data.tenant.naziv, data.tenant.profile, selectedMonths);
        fetchPackages(data.tenant.profile);
      } else {
        setError(data.error || "Organizacija nije pronađena.");
      }
    } catch (e: any) {
      setError("Greška u povezivanju sa serverom.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSlip = async (tenantName: string, profile: string, months: number) => {
    setSlipLoading(true);
    try {
      const res = await fetch("/api/tenant/qr-slip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tenantName, profile, months }),
      });
      const data = await res.json();
      if (data.ok && data.slip) {
        setSlip(data.slip);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSlipLoading(false);
    }
  };

  const fetchPackages = async (profile: string) => {
    setLoadingPackages(true);
    try {
      const res = await fetch(`/api/tenant/updates?profile=${encodeURIComponent(profile)}`);
      const data = await res.json();
      if (data.ok && data.packages) {
        setPackages(data.packages);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPackages(false);
    }
  };

  const handleMonthChange = (m: number) => {
    setSelectedMonths(m);
    if (tenant) {
      fetchSlip(tenant.naziv, tenant.profile, m);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-white border border-slate-200/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {tenant ? tenant.naziv : "Tenant Korisnički Portal"}
                </h3>
                {tenant && (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {tenant.status}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">
                Licencni profil: <span className="font-semibold text-slate-700">{tenant?.profile || "ENTERSYS"}</span> • 
                ID: <span className="font-mono text-slate-600">{tenant?.token ? `${tenant.token.slice(0, 12)}...` : "N/A"}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-slate-200 bg-white flex items-center gap-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "overview"
                ? "border-emerald-600 text-emerald-700 font-bold"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Pregled Licence & Modula</span>
          </button>

          <button
            onClick={() => setActiveTab("renew")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "renew"
                ? "border-emerald-600 text-emerald-700 font-bold"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Obnova & Uplatnica (IPS QR)</span>
          </button>

          <button
            onClick={() => setActiveTab("updates")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "updates"
                ? "border-emerald-600 text-emerald-700 font-bold"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Download Centar & Paketi</span>
          </button>

          <button
            onClick={() => setActiveTab("docs")}
            className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === "docs"
                ? "border-emerald-600 text-emerald-700 font-bold"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Dokumentacija & Podrška</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
          {/* Lookup Bar */}
          <div className="mb-6 bg-white p-3 rounded-2xl border border-slate-200 flex items-center gap-2 shadow-xs">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Unesite naziv organizacije ili licenčni kod..."
              className="flex-1 px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-500"
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchTenant(searchTerm);
              }}
            />
            <button
              onClick={() => fetchTenant(searchTerm)}
              disabled={loading}
              className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Provjeri</span>
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && tenant && (
            <div className="space-y-6">
              {/* Status Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
                    <span>Status Pretplate</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    {tenant.status}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Važi do: <span className="font-semibold text-slate-700">{tenant.subscriptionEndsAt}</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
                    <span>Preostalo Vremena</span>
                    <Clock className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    {tenant.daysUntilEnd > 0 ? `${tenant.daysUntilEnd} dana` : "Isteklo"}
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full"
                      style={{ width: `${Math.min(100, Math.max(10, (tenant.daysUntilEnd / 365) * 100))}%` }}
                    />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
                    <span>Blagajne & Tačke</span>
                    <HardDrive className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    {tenant.brojBlagajni} aktivne POS kase
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Hardverska kontrola tripoda: <span className="font-semibold text-emerald-600">Aktivna</span>
                  </div>
                </div>
              </div>

              {/* Scope & Active Modules */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-sm font-bold text-slate-900">
                      Obuhvat Aktiviranih Softverskih Modula
                    </h4>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">soccs_platform_scope</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: "argus", name: "ARGUS Master", desc: "Kontrola pristupa i tripodi" },
                    { id: "fluxaPos", name: "FluxaPOS Kasa", desc: "Maloprodajna kasa i printer" },
                    { id: "poolManager", name: "PoolManager", desc: "Bazen i posjetioci" },
                    { id: "gymManager", name: "GymManager", desc: "Teretana i članarine" },
                    { id: "hallManager", name: "HallManager", desc: "Sportska dvorana" },
                    { id: "rentals", name: "Rentals", desc: "Iznajmljivanje opreme" },
                    { id: "locker", name: "Locker", desc: "Elektronski ormarići" },
                    { id: "dokumentArt", name: "DokumentArt", desc: "Javne nabavke i ugovori" },
                  ].map((m) => {
                    const isIncluded =
                      tenant.modules.includes(m.id) ||
                      tenant.profile === "ENTERSYS" ||
                      (tenant.profile === "FLUXAPOS" && m.id === "fluxaPos") ||
                      (tenant.profile === "JAVNENABAVKE" && m.id === "dokumentArt");

                    return (
                      <div
                        key={m.id}
                        className={`p-3 rounded-xl border transition-all ${
                          isIncluded
                            ? "bg-emerald-50/50 border-emerald-200 text-emerald-900"
                            : "bg-slate-50 border-slate-200/60 text-slate-400 opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold">{m.name}</span>
                          {isIncluded && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] leading-tight text-slate-600">
                          {m.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Fast Action CTA */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">
                    Želite produžiti licencu ili dodati novu kasu/modul?
                  </h5>
                  <p className="text-xs text-slate-600">
                    Generišite zvaničnu uplatnicu sa IPS QR kodom za trenutno produženje.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("renew")}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Kreiraj Uplatnicu</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: RENEWAL & QR SLIP */}
          {activeTab === "renew" && (
            <div className="space-y-6">
              {/* Payment Type and Period selection */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <label className="text-xs font-bold text-slate-800">
                    Način Plaćanja:
                  </label>
                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => handleMonthChange(selectedMonths)}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-white text-slate-900 shadow-xs cursor-pointer"
                    >
                      Domaće Plaćanje (BAM • Uplatnica / IPS QR)
                    </button>
                    <button
                      onClick={() => handleMonthChange(selectedMonths)}
                      className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Inostrani Prenos (EUR • IBAN & SWIFT)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Izaberite Period Produženja Licence:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { m: 6, label: "6 Mjeseci", desc: "Standardna polugodišnja tarifa" },
                      { m: 12, label: "12 Mjeseci (Preporučeno)", desc: "15% popusta na godišnji paket" },
                      { m: 24, label: "24 Mjeseca", desc: "25% maksimalni popust" },
                    ].map((p) => (
                      <button
                        key={p.m}
                        onClick={() => handleMonthChange(p.m)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          selectedMonths === p.m
                            ? "bg-emerald-50 border-emerald-500 shadow-xs"
                            : "bg-white border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-900">{p.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{p.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Uplatnica Visual View */}
              {slip && (
                <div className="bg-white rounded-3xl p-6 border border-slate-300 shadow-md relative print:shadow-none">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700">
                        Nalog za Plaćanje / Uplatnica
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        Softverska Licenca: {slip.payer.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Iznos za uplatu</div>
                      <div className="text-2xl font-black text-slate-900">
                        {slip.amount},00 {slip.currency}
                        <span className="text-xs font-normal text-slate-500 ml-2">
                          (~{(slip.amount / 1.95583).toFixed(2)} EUR)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Left: Slip Details */}
                    <div className="md:col-span-7 space-y-3 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Primalac / Beneficiary</span>
                        <span className="font-bold text-slate-900 text-sm">{slip.receiver.name}</span>
                        <div className="text-slate-500 text-xs">{slip.receiver.address}</div>
                      </div>

                      {/* Primary Domestic Account (Unicredit) */}
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">
                            Domaći Žiro Račun ({slip.receiver.bankName})
                          </span>
                          <span className="font-mono font-bold text-slate-900 text-sm">
                            {slip.receiver.account}
                          </span>
                        </div>
                        <button
                          onClick={() => copyToClipboard(slip.receiver.account)}
                          className="p-2 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                          title="Kopiraj broj računa"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>

                      {/* INO Wire Transfer Box */}
                      <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200/80 flex items-center justify-between">
                        <div>
                          <span className="text-emerald-800 block text-[10px] uppercase font-bold">
                            Inostrano Plaćanje (IBAN & SWIFT)
                          </span>
                          <div className="font-mono text-slate-900 text-xs font-bold mt-0.5">
                            IBAN: {slip.receiver.iban || "BA39 3383 5048 5748 1313"}
                          </div>
                          <div className="font-mono text-slate-700 text-[11px]">
                            SWIFT / BIC: <span className="font-bold">{slip.receiver.swift || "UNCRBA22"}</span> • Bank: {slip.receiver.bankName}
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(slip.receiver.iban || "BA393383504857481313")}
                          className="p-2 rounded-lg hover:bg-emerald-100 text-emerald-700 transition-colors cursor-pointer"
                          title="Kopiraj IBAN"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>

                      {copiedAccount && (
                        <div className="text-[11px] text-emerald-600 font-semibold">
                          ✓ Podatak uspješno kopiran u clipboard!
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Svrha Doznake</span>
                          <span className="text-slate-800 font-medium">{slip.purpose}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Poziv na Broj</span>
                          <span className="font-mono font-bold text-slate-900">{slip.referenceNumber}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: QR Code Visualizer */}
                    <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs mb-2">
                        <img
                          src={slip.qrCode}
                          alt="IPS QR Code"
                          className="w-44 h-44 object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1">
                          <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                          Skenirajte mBanking Aplikacijom
                        </span>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          Standardizovan IPS QR kod za sve domaće i regionalne banke
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                    <button
                      onClick={() => window.print()}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Štampaj Uplatnicu</span>
                    </button>

                    <a
                      href={slip.qrCode}
                      download={`IPS-QR-${slip.referenceNumber}.png`}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Preuzmi QR Kod</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: UPDATES & DOWNLOADS */}
          {activeTab === "updates" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-900 flex items-center justify-between">
                <div>
                  <span className="font-bold block">Fluxa Update Servis (Bezbedna Distribucija)</span>
                  <p className="text-[11px] text-cyan-700">
                    Svi paketi su digitalno verifikovani i sadrže automatsku Prisma migraciju i Next.js optimizaciju.
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-cyan-200/80 rounded-lg text-cyan-900 font-mono font-bold text-[11px]">
                  v2.0.x Release
                </span>
              </div>

              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900">{pkg.name}</h4>
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-100 text-slate-800">
                          {pkg.version}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">{pkg.description}</p>
                    </div>

                    <div className="text-right sm:shrink-0">
                      <div className="text-xs text-slate-500">{pkg.size} • {pkg.releaseDate}</div>
                      <a
                        href={`https://app.studiotaf.xyz/api/public/update-file?product=${pkg.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Preuzmi Paket (.zip)</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                    <span className="font-bold text-slate-700 block mb-1">Šta donosi ova verzija:</span>
                    <ul className="space-y-1 text-slate-600 list-disc list-inside text-[11px]">
                      {pkg.changelog.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: DOCS & SUPPORT */}
          {activeTab === "docs" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Uputstva za Operatere Kase</h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Vodič za izdavanje fiskalnih računa, storniranje, zaključak dana (Z-izvještaj) i rad u offline režimu.
                  </p>
                  <a
                    href="#docs"
                    className="text-xs font-semibold text-purple-700 hover:text-purple-800 flex items-center gap-1"
                  >
                    <span>Otvori PDF Vodič</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">ARGUS Hardverska Integracija</h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Povezivanje BasePCB Omega kontrolera, RFID čitača kartica i tripoda u mrežni ring.
                  </p>
                  <a
                    href="#docs"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Mrežna Šema & Uputstvo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Support Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Hitna Tehnička Podrška 24/7</h4>
                  <p className="text-xs text-slate-600">
                    Za incidente na terenu, hardverske zastoje i baze podataka: Studio TAF inženjering tim.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:podrska@studiotaf.xyz"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-xs"
                  >
                    podrska@studiotaf.xyz
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
