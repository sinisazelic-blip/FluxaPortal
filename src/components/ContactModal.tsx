"use client";

import React, { useState } from "react";
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("fluxa");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-3xl p-8 bg-white border border-slate-200 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Hvala vam na javljanju!</h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
              Vaš upit je uspješno proslijeđen. Odgovorićemo vam u najkraćem roku.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs"
            >
              Zatvori
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Stupite u Kontakt</h3>
              <p className="text-xs text-slate-500 mt-1">
                Pošaljite nam upit za softversku prezentaciju, licence ili audio produkciju.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ime i Prezime / Organizacija
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="npr. Marko Marković"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Adresa
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kompanija.ba"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefon / Kontakt
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+387 65..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Zainteresovani za modul
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-600"
                  >
                    <option value="fluxa">Fluxa Cloud & ERP</option>
                    <option value="pos">FluxaPOS Kasa</option>
                    <option value="entersys">EnterSYS & Kontrola Prolaza</option>
                    <option value="dokumentart">DokumentArt Javne Nabavke</option>
                    <option value="soccs">SOCCS / SwimVoice Mjerenje</option>
                    <option value="studio-taf">Studio TAF Audio Produkcija</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Vaša Poruka / Detalji Projekta
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Opišite vaše potrebe ili postavite pitanje..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-cyan-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Pošaljite Upit</span>
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Banja Luka, BiH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>info@fluxa.ba</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
