export interface ReferenceItem {
  id: string;
  name: string;
  category: "commercial" | "music" | "retail" | "finance" | "institutions";
  highlight?: string;
  projectsCount?: string;
  description?: string;
}

export const referencesData: ReferenceItem[] = [
  // Music Productions & Legendary Artists (1982 - 2005)
  { id: "massimo", name: "Massimo Savić", category: "music", highlight: "Muzička Produkcija", description: "Studijski rad, aranžmani i snimanje" },
  { id: "dino-dvornik", name: "Dino Dvornik", category: "music", highlight: "Pop / Funk Ikona", description: "Studijske sesije i saradnja" },
  { id: "djavoli", name: "Đavoli (Neno Belan)", category: "music", highlight: "Legendarni Pop-Rock", description: "Muzička produkcija i tonske sesije" },
  { id: "denis-denis", name: "Denis & Denis", category: "music", highlight: "Synth-Pop Pioniri", description: "Muzički projekti i miks" },
  { id: "oliver-mandic", name: "Oliver Mandić", category: "music", highlight: "Autorski Zvuk", description: "Studijska saradnja i postprodukcija" },
  { id: "revelation", name: "Revelation (Boris Relja)", category: "music", highlight: "Progresivni Rock / Art", description: "Dizajn zvuka, ton majstor i producent" },
  { id: "radio-band", name: "Radio (Pop-Rock BL)", category: "music", highlight: "Banjalučki Sastav", description: "Autorska muzika, snimanje i gitarske dionice" },
  { id: "kovalsky", name: "Kovalsky Project", category: "music", highlight: "Studijski Projekat", description: "Muzički aranžmani, snimanje i mastering" },
  { id: "basdans", name: "BasDans", category: "music", highlight: "Urbana Scena", description: "Kompletna studijska produkcija" },

  // Commercial Brands (Studio TAF)
  { id: "coca-cola", name: "Coca-Cola", category: "commercial", highlight: "Globalni Brend", description: "Broadcast audio & promo kampanje" },
  { id: "mercedes", name: "Mercedes-Benz", category: "commercial", highlight: "Automobilski Lider", description: "TV & radio master audio produkcija" },
  { id: "pepsi", name: "Pepsi", category: "commercial", highlight: "Globalno Piće", description: "Zvučni miks i voiceover adaptacije" },
  { id: "garnier", name: "Garnier (L'Oréal)", category: "commercial", highlight: "Kozmetički Gigant", projectsCount: "40+ projekata", description: "Lokalizacija i audio mastering" },
  { id: "staropramen", name: "Staropramen", category: "commercial", highlight: "Internacionalni Brend", description: "Kampanje i radijski džinglovi" },
  { id: "microsoft", name: "Microsoft", category: "commercial", highlight: "Govorni Dataset", projectsCount: "974 niza", description: "Fonetska segmentacija i akustička kalibracija" },
  { id: "ovation", name: "Ovation BBDO (Beograd)", category: "commercial", highlight: "Kreativna Agencija", description: "Dugogodišnje regionalno audio partnerstvo" },
  { id: "livada", name: "Livada Produkcija (Zagreb)", category: "commercial", highlight: "Film & Audio Produkcija", description: "Koprodukcije i glasovne sinhronizacije" },
  { id: "aquarius", name: "Aquarius Ogilvy", category: "commercial", highlight: "Agencijska Mreža", description: "Autorski audio i sound dizajn" },

  // Retail Giants
  { id: "kort", name: "Kort Marketi (Fructa Trade)", category: "retail", highlight: "Retail Titan", projectsCount: "1.400+ projekata", description: "Dugogodišnji krovni audio partner i produkcija" },
  { id: "konzum", name: "Konzum", category: "retail", highlight: "Regionalni Trgovački Lanac", projectsCount: "620+ projekata", description: "Sedmične radijske i TV akcije" },
  { id: "centrum", name: "Centrum Trade", category: "retail", highlight: "Home & Garden Centar", projectsCount: "600+ projekata", description: "Sezonske i prodajne audio kampanje" },
  { id: "tropic", name: "Tropic & Moj Market", category: "retail", highlight: "Supermarket Lanac", projectsCount: "270+ projekata", description: "Radijske reklame i audio brending" },
  { id: "djuric", name: "Đurić MBB", category: "retail", highlight: "Trgovačka Mreža", projectsCount: "130+ projekata", description: "Audio dizajn i radijski spotovi" },
  { id: "ledo", name: "Ledo", category: "retail", highlight: "Smrznuta Hrana", projectsCount: "30+ projekata", description: "Dječiji glasovi, songovi i TV audio" },
  { id: "hemofarm", name: "Hemofarm", category: "retail", highlight: "Farmaceutski Lider", projectsCount: "25+ projekata", description: "Zdravstveni i korporativni spotovi" },

  // Finance & Telecom
  { id: "mtel", name: "m:tel", category: "finance", highlight: "Telekomunikacije", projectsCount: "760+ projekata", description: "Krovne ponude, tarife i audio postprodukcija" },
  { id: "addiko", name: "Addiko Bank / Hypo", category: "finance", highlight: "Bankarski Sektor", projectsCount: "130+ projekata", description: "Finansijski paketi i krediti audio kampanje" },
  { id: "sberbank", name: "Sberbank / Atos", category: "finance", highlight: "Bankarstvo", projectsCount: "30+ projekata", description: "Promotivne finansijske poruke" },
  { id: "nlb", name: "NLB Banka", category: "finance", highlight: "Regionalna Banka", projectsCount: "25+ projekata", description: "Audio spotovi i PR poruke" },
  { id: "mikrofin", name: "Mikrofin", category: "finance", highlight: "Mikrokrediti", projectsCount: "35+ projekata", description: "Radijske i video kampanje" },
  { id: "eki", name: "MKF EKI", category: "finance", highlight: "Mikrokreditna Fondacija", projectsCount: "45+ projekata", description: "Kreditne i sezonske akcije" },
  { id: "lutrija", name: "Lutrija Republike Srpske", category: "finance", highlight: "Igre na Sreću", projectsCount: "35+ projekata", description: "TV izvlačenja i audio džinglovi" },

  // Institutions & Sports Timing
  { id: "omega-sports", name: "Omega / SwissTiming Savezi", category: "institutions", highlight: "15+ God. Tajming Specijalisti", description: "Elektronska mjerenja, servis i SOCCS integracija" },
  { id: "aquana", name: "JP Aquana Banja Luka", category: "institutions", highlight: "Javno Preduzeće", description: "Implementacija EnterSYS HaaS/SaaS, DokumentArt & audio" },
  { id: "ksbih", name: "Košarkaški Savez BiH", category: "institutions", highlight: "Nacionalni Savez", description: "Službeni audio i promotivni materijali" },
  { id: "grad-bl", name: "Grad Banja Luka", category: "institutions", highlight: "Gradska Uprava", description: "Protokolarni, kulturni i javni audio projekti" },
  { id: "vlada-rs", name: "Vlada RS & Ministarstva", category: "institutions", highlight: "Institucionalno", description: "Javne kampanje i edukativni spotovi" },
  { id: "demofest", name: "Demofest", category: "institutions", highlight: "Muzički Festival", projectsCount: "30+ projekata", description: "Festivalski zvuk i audio produkcija" },
  { id: "banja-vrucica", name: "ZTC Banja Vrućica", category: "institutions", highlight: "Zdravstveni Turizam", projectsCount: "30+ projekata", description: "Turističke i banjske kampanje" },
];
