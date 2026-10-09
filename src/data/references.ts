export interface ReferenceItem {
  id: string;
  name: string;
  category: "global" | "retail" | "finance" | "agencies" | "institutions";
  highlight?: string;
  projectsCount?: string;
  description?: string;
}

export const referencesData: ReferenceItem[] = [
  // Global
  { id: "coca-cola", name: "Coca-Cola", category: "global", highlight: "Global Brand", description: "Broadcast audio & promo kampanje" },
  { id: "mercedes", name: "Mercedes-Benz", category: "global", highlight: "Automotive Leader", description: "TV & radio master audio produkcija" },
  { id: "pepsi", name: "Pepsi", category: "global", highlight: "Global Beverage", description: "Zvučni miks i voice-over adaptacije" },
  { id: "garnier", name: "Garnier", category: "global", highlight: "L'Oréal Group", projectsCount: "40+ projekata", description: "Lokalizacija i audio mastering" },
  { id: "staropramen", name: "Staropramen", category: "global", highlight: "International Beer", description: "Kampanje i radijski džinglovi" },
  { id: "microsoft", name: "Microsoft Cortana", category: "global", highlight: "Speech AI Dataset", projectsCount: "974 niza", description: "Fonetska segmentacija i akustička kalibracija" },

  // Retail
  { id: "kort", name: "Kort Marketi (Fructa Trade)", category: "retail", highlight: "Retail Titan", projectsCount: "1.400+ projekata", description: "Dugogodišnji krovni audio partner i produkcija" },
  { id: "konzum", name: "Konzum", category: "retail", highlight: "Regional Retailer", projectsCount: "620+ projekata", description: "Sedmične radijske i TV akcije" },
  { id: "centrum", name: "Centrum Trade", category: "retail", highlight: "Home & Garden", projectsCount: "600+ projekata", description: "Sezonske i prodajne audio kampanje" },
  { id: "tropic", name: "Tropic & Moj Market", category: "retail", highlight: "Supermarket Chain", projectsCount: "270+ projekata", description: "Radijske reklame i audio brending" },
  { id: "djuric", name: "Đurić MBB", category: "retail", highlight: "Retail Network", projectsCount: "130+ projekata", description: "Audio dizajn i radijski spotovi" },
  { id: "ledo", name: "Ledo", category: "retail", highlight: "Frozen Food Leader", projectsCount: "30+ projekata", description: "Dečiji glasovi, songovi i TV audio" },
  { id: "hemofarm", name: "Hemofarm", category: "retail", highlight: "Pharma Giant", projectsCount: "25+ projekata", description: "Zdravstveni i korporativni spotovi" },

  // Finance & Telecom
  { id: "mtel", name: "m:tel", category: "finance", highlight: "Telekomunikacije", projectsCount: "760+ projekata", description: "Krovne ponude, tarife i audio post-produkcija" },
  { id: "addiko", name: "Addiko Bank / Hypo", category: "finance", highlight: "Bankarski Sektor", projectsCount: "130+ projekata", description: "Finansijski paketi i krediti audio kampanje" },
  { id: "sberbank", name: "Sberbank / Atos", category: "finance", highlight: "Banking", projectsCount: "30+ projekata", description: "Promotivne finansijske poruke" },
  { id: "nlb", name: "NLB Banka", category: "finance", highlight: "Regional Banking", projectsCount: "25+ projekata", description: "Audio spotovi i PR poruke" },
  { id: "mikrofin", name: "Mikrofin", category: "finance", highlight: "Mikrokrediti", projectsCount: "35+ projekata", description: "Radijske i video kampanje" },
  { id: "eki", name: "MKF EKI", category: "finance", highlight: "Mikrokreditna Fondacija", projectsCount: "45+ projekata", description: "Kreditne i sezonske akcije" },
  { id: "lutrija", name: "Lutrija Republike Srpske", category: "finance", highlight: "Igre na Sreću", projectsCount: "35+ projekata", description: "TV izvlačenja i audio džinglovi" },

  // Agencies
  { id: "ovation", name: "Ovation BBDO (Beograd)", category: "agencies", highlight: "Creative Agency", description: "Strateško regionalno partnerstvo" },
  { id: "livada", name: "Livada Produkcija (Zagreb)", category: "agencies", highlight: "Film & Audio Production", description: "Koprodukcije i voice-over sinhronizacije" },
  { id: "publicis", name: "Publicis", category: "agencies", highlight: "Global Network", description: "Adaptacije internacionalnih kampanja" },
  { id: "aquarius", name: "Aquarius Ogilvy", category: "agencies", highlight: "Creative Powerhouse", description: "Autorski audio i sound dizajn" },
  { id: "communis", name: "Communis", category: "agencies", highlight: "Agency Partner", description: "Kreativni radijski koncepti" },
  { id: "mint", name: "Mint Agency", category: "agencies", highlight: "Branding Agency", description: "Zvučni identitet i kampanje" },
  { id: "ritem", name: "Studio Ritem (Slovenija)", category: "agencies", highlight: "Audio Studio", description: "Prekogranična audio saradnja" },

  // Institutions & Sports
  { id: "aquana", name: "JP Aquana Banja Luka", category: "institutions", highlight: "Javno Preduzeće", description: "Implementacija EnterSYS, DokumentArt & audio" },
  { id: "ksbih", name: "Košarkaški Savez BiH", category: "institutions", highlight: "Nacionalni Tim", description: "Službeni audio i promotivni materijali" },
  { id: "grad-bl", name: "Grad Banja Luka", category: "institutions", highlight: "Gradska Uprava", description: "Protokolarni, kulturni i javni audio projekti" },
  { id: "vlada-rs", name: "Vlada RS & Ministarstva", category: "institutions", highlight: "Institucionalno", description: "Javne kampanje i edukativni spotovi" },
  { id: "unhcr", name: "UNHCR & UNPROFOR", category: "institutions", highlight: "Međunarodne Misije", description: "Humanitarne i javne informativne poruke" },
  { id: "redcross", name: "Međunarodni Crveni Krst", category: "institutions", highlight: "Humanitarna Organizacija", description: "Audio kampanje za pomoć zajednici" },
  { id: "demofest", name: "Demofest", category: "institutions", highlight: "Muzički Festival", projectsCount: "30+ projekata", description: "Festivalski zvuk i audio produkcija" },
  { id: "banja-vrucica", name: "ZTC Banja Vrućica", category: "institutions", highlight: "Zdravstveni Turizam", projectsCount: "30+ projekata", description: "Turističke i banjske kampanje" },
];
