export interface ReferenceItem {
  id: string;
  name: string;
  highlight?: string;
  projectsCount?: string;
  description: string;
  scopeType?:
    | "Direktan Klijent"
    | "Agencijska Produkcija"
    | "Direktna & Agencijska Saradnja"
    | "Sportski Inženjering & Mjerenja"
    | "Autorski / Muzički Rad"
    | "Pozorišna & Filmska Produkcija"
    | "Institucionalno Partnerstvo";
  role?: string;
}

export interface ReferenceCategory {
  id: "retail" | "finance" | "agencies" | "institutions" | "music";
  title: string;
  subtitle: string;
  badge: string;
  colorClass: string;
  accentClass: string;
  bgGradient: string;
  flagship: ReferenceItem[];
  allItems: ReferenceItem[];
}

export const referenceCategories: ReferenceCategory[] = [
  // 1. Retail & Supermarkets
  {
    id: "retail",
    title: "Tržni Lanci & Maloprodaja",
    subtitle: "Dugogodišnji krovni audio partneri za sedmične i sezonske prodajne kampanje.",
    badge: "3.000+ Realizovanih Kampanja",
    colorClass: "text-red-700 bg-red-50 border-red-200",
    accentClass: "text-red-700",
    bgGradient: "from-red-50/50 to-white",
    flagship: [
      {
        id: "kort",
        name: "KORT Marketi (Fructa Trade)",
        highlight: "Krovni Audio Partner",
        projectsCount: "1.400+ kampanja",
        description: "Dugogodišnji direktni krovni audio partner, sedmične prodajne akcije i audio brending svih marketa.",
        scopeType: "Direktan Klijent",
        role: "Kompletna audio produkcija, spikerski casting i master miks",
      },
      {
        id: "konzum",
        name: "Konzum",
        highlight: "Regionalni Lanac",
        projectsCount: "620+ kampanja",
        description: "Sedmične radijske i TV akcije, akcijske ponude i dinamične reklamne poruke realizovane kroz agencijska partnerstva.",
        scopeType: "Agencijska Produkcija",
        role: "Audio adaptacija, snimanje spikera i zvučni dizajn",
      },
    ],
    allItems: [
      {
        id: "kort",
        name: "KORT Marketi (Fructa Trade)",
        highlight: "Krovni Audio Partner",
        projectsCount: "1.400+ kampanja",
        description: "Dugogodišnji direktni krovni audio partner, sedmične prodajne akcije i audio brending svih marketa.",
        scopeType: "Direktan Klijent",
        role: "Kompletna audio produkcija, spikerski casting i master miks",
      },
      {
        id: "konzum",
        name: "Konzum",
        highlight: "Regionalni Lanac",
        projectsCount: "620+ kampanja",
        description: "Sedmične radijske i TV akcije, akcijske ponude i dinamične reklamne poruke kroz agencijska partnerstva.",
        scopeType: "Agencijska Produkcija",
        role: "Audio adaptacija, snimanje spikera i zvučni dizajn",
      },
      {
        id: "centrum",
        name: "Centrum Trade",
        highlight: "Home & Garden",
        projectsCount: "600+ kampanja",
        description: "Sezonske, proljećne i novogodišnje audio kampanje za sve prodajne centre.",
        scopeType: "Direktan Klijent",
        role: "Audio koncept, voiceover i radijski master",
      },
      {
        id: "tropic",
        name: "Tropic & Moj Market",
        highlight: "Supermarketi",
        projectsCount: "270+ kampanja",
        description: "Radijske reklame, brending vikend akcija i zvučne najave u marketima (direktna i agencijska realizacija).",
        scopeType: "Direktna & Agencijska Saradnja",
        role: "Audio produkcija i voiceover casting",
      },
      {
        id: "djuric",
        name: "Đurić MBB",
        highlight: "Trgovačka Mreža",
        projectsCount: "130+ kampanja",
        description: "Radijski spotovi, audio dizajn i promocija otvaranja novih marketa.",
        scopeType: "Direktan Klijent",
        role: "Kreiranje zvučnog identiteta i spikerske dionice",
      },
      {
        id: "ledo",
        name: "Ledo",
        highlight: "Multinacionalni Brend",
        projectsCount: "30+ kampanja",
        description: "Dječiji glasovi, songovi, sladoledi i TV audio adaptacije kroz vodeće kreativne agencije.",
        scopeType: "Agencijska Produkcija",
        role: "Specijalizovani dječiji casting i audio postprodukcija",
      },
      {
        id: "hemofarm",
        name: "Hemofarm STADA",
        highlight: "Farmaceutska Grupa",
        projectsCount: "25+ kampanja",
        description: "Zdravstveni, edukativni i korporativni audio spotovi realizovani putem agencija.",
        scopeType: "Agencijska Produkcija",
        role: "Tonsko snimanje i prilagođavanje zakonskim standardima",
      },
    ],
  },

  // 2. Finance & Telecom
  {
    id: "finance",
    title: "Banke & Telekomunikacije",
    subtitle: "Precizna i profesionalna audio postprodukcija za finansijski i telekom sektor.",
    badge: "1.000+ Realizovanih Kampanja",
    colorClass: "text-blue-700 bg-blue-50 border-blue-200",
    accentClass: "text-blue-700",
    bgGradient: "from-blue-50/50 to-white",
    flagship: [
      {
        id: "mtel",
        name: "m:tel",
        highlight: "Telekomunikacije",
        projectsCount: "760+ kampanja",
        description: "Krovne ponude, pretplatničke tarife, optički internet i audio postprodukcija realizovana putem agencijskih partnerstava.",
        scopeType: "Agencijska Produkcija",
        role: "Audio produkcija krovnih TV i radijskih poruka",
      },
      {
        id: "addiko",
        name: "Addiko Bank",
        highlight: "Bankarski Sektor",
        projectsCount: "130+ kampanja",
        description: "Brzi krediti, paketi računa i promotivne finansijske kampanje vođene kroz agencije.",
        scopeType: "Agencijska Produkcija",
        role: "Glasovno snimanje, dinamičan audio miks i adaptacije",
      },
    ],
    allItems: [
      {
        id: "mtel",
        name: "m:tel",
        highlight: "Telekomunikacije",
        projectsCount: "760+ kampanja",
        description: "Krovne ponude, pretplatničke tarife, optički internet i audio postprodukcija realizovana putem agencijskih partnerstava.",
        scopeType: "Agencijska Produkcija",
        role: "Audio produkcija krovnih TV i radijskih poruka",
      },
      {
        id: "addiko",
        name: "Addiko Bank",
        highlight: "Bankarski Sektor",
        projectsCount: "130+ kampanja",
        description: "Brzi krediti, paketi računa i promotivne finansijske kampanje vođene kroz agencije.",
        scopeType: "Agencijska Produkcija",
        role: "Glasovno snimanje, dinamičan audio miks i adaptacije",
      },
      {
        id: "nlb",
        name: "NLB Banka",
        highlight: "Banka",
        projectsCount: "25+ kampanja",
        description: "Stambeni krediti, kartice i institucionalne audio poruke realizovane agencijski.",
        scopeType: "Agencijska Produkcija",
        role: "Voiceover snimanje i audio miks",
      },
      {
        id: "sberbank",
        name: "ATOS Bank / Sberbank",
        highlight: "Bankarstvo",
        projectsCount: "30+ kampanja",
        description: "Promotivne finansijske poruke i depozitne akcije realizovane putem agencija.",
        scopeType: "Agencijska Produkcija",
        role: "Audio produkcija i emitovanje",
      },
      {
        id: "mikrofin",
        name: "Mikrofin",
        highlight: "Mikrokrediti",
        projectsCount: "35+ kampanja",
        description: "Radijske i video kampanje za poljoprivredne i preduzetničke kredite (direktni angažmani i agencijski projekti).",
        scopeType: "Direktna & Agencijska Saradnja",
        role: "Tonska obrada i mastering",
      },
      {
        id: "eki",
        name: "MKF EKI",
        highlight: "Mikrokreditna Fondacija",
        projectsCount: "45+ kampanja",
        description: "Kreditne i sezonske akcije za domaćinstva i privredu.",
        scopeType: "Direktan Klijent",
        role: "Audio dizajn i radijski spotovi",
      },
      {
        id: "lutrija",
        name: "Lutrija RS",
        highlight: "Igre na Sreću",
        projectsCount: "35+ kampanja",
        description: "TV izvlačenja, džinglovi i audio najave nagradnih igara kroz agencijska partnerstva.",
        scopeType: "Agencijska Produkcija",
        role: "Zvučni efekti i produkcija džinglova",
      },
    ],
  },

  // 3. Creative Agencies & Global Brands
  {
    id: "agencies",
    title: "Kreativne Agencije & Brendovi",
    subtitle: "Dugogodišnja regionalna agencijska audio partnerstva i produkcija za vodeće brendove.",
    badge: "Regionalne Koprodukcije",
    colorClass: "text-amber-700 bg-amber-50 border-amber-200",
    accentClass: "text-amber-700",
    bgGradient: "from-amber-50/50 to-white",
    flagship: [
      {
        id: "ovation",
        name: "Ovation BBDO (Beograd)",
        highlight: "Kreativna Agencija",
        description: "Dugogodišnje regionalno audio partnerstvo, snimanje spikera i audio postprodukcija za regionalne kampanje.",
        scopeType: "Agencijska Produkcija",
        role: "Regionalni audio partner, voiceover casting i audio postprodukcija",
      },
      {
        id: "aquarius",
        name: "Aquarius Ogilvy (Banja Luka)",
        highlight: "Kreativna Agencija",
        description: "Zajednička realizacija audio spotova, sound dizajna i TV reklama za vodeće klijente.",
        scopeType: "Agencijska Produkcija",
        role: "Autorski audio inženjering i broadcast miks",
      },
    ],
    allItems: [
      {
        id: "ovation",
        name: "Ovation BBDO (Beograd)",
        highlight: "Kreativna Agencija",
        description: "Dugogodišnje regionalno audio partnerstvo, snimanje spikera i audio postprodukcija za regionalne kampanje.",
        scopeType: "Agencijska Produkcija",
        role: "Regionalni audio partner, voiceover casting i audio postprodukcija",
      },
      {
        id: "aquarius",
        name: "Aquarius Ogilvy (Banja Luka)",
        highlight: "Kreativna Agencija",
        description: "Zajednička realizacija audio spotova, sound dizajna i TV reklama za vodeće klijente.",
        scopeType: "Agencijska Produkcija",
        role: "Autorski audio inženjering i broadcast miks",
      },
      {
        id: "livada",
        name: "Livada Produkcija (Zagreb)",
        highlight: "Produkcijska Kuća",
        description: "Koprodukcije, glasovne sinhronizacije i audio adaptacije za međunarodne formate.",
        scopeType: "Agencijska Produkcija",
        role: "Glasovne sinhronizacije i audio mastering",
      },
      {
        id: "coca-cola",
        name: "Projekti za Coca-Cola kampanje",
        highlight: "Broadcast Audio",
        description: "Audio adaptacije, lokalizacija glasova i emiterski miks za promotivne kampanje (kroz agencijska partnerstva).",
        scopeType: "Agencijska Produkcija",
        role: "Voiceover tracking i broadcast mastering",
      },
      {
        id: "mercedes",
        name: "Projekti za Mercedes-Benz",
        highlight: "TV & Radio Audio",
        description: "Lokalizacija spikera i precizan zvučni miks za premijerne modele i sajamske promocije.",
        scopeType: "Agencijska Produkcija",
        role: "Spikerski casting i precizni zvučni dizajn",
      },
      {
        id: "garnier",
        name: "Projekti za Garnier (L'Oréal)",
        highlight: "40+ Kampanja",
        description: "Glasovna lokalizacija, čišćenje dijaloga i miks za TV i digitalne video formate.",
        scopeType: "Agencijska Produkcija",
        role: "Vokalna obrada i dinamički mastering",
      },
      {
        id: "staropramen",
        name: "Projekti za Staropramen",
        highlight: "Pivski Brend",
        description: "Radijski spotovi, zvučni efekti i kreiranje prepoznatljive zvučne atmosfere.",
        scopeType: "Agencijska Produkcija",
        role: "Sound dizajn i radijska produkcija",
      },
    ],
  },

  // 4. Institutions & Sports Timing
  {
    id: "institutions",
    title: "Institucije & Sportski Tajming",
    subtitle: "Javna preduzeća, sportska borilišta i elektronska mjerenja vremena.",
    badge: "15+ Godina Tajminga",
    colorClass: "text-cyan-700 bg-cyan-50 border-cyan-200",
    accentClass: "text-cyan-700",
    bgGradient: "from-cyan-50/50 to-white",
    flagship: [
      {
        id: "aquana",
        name: "JP Aquana Banja Luka",
        highlight: "Javno Preduzeće",
        description: "Kompletna implementacija EnterSYS kontrole pristupa, tripoda, fiskalnog POS-a, DokumentArt platforme i internog radija.",
        scopeType: "Direktan Klijent",
        role: "Inženjering, HaaS/SaaS sistem po sistemu „ključ u ruke” i svakodnevno održavanje",
      },
      {
        id: "omega-sports",
        name: "SwissTiming / Omega Sportska Mjerenja",
        highlight: "Elektronska Mjerenja Vremena",
        description: "Licencirani rukovalac opremom i inženjer elektronskih mjerenja vremena na plivačkim i atletskim borilištima (15+ godina rada uz softvere SOCCS i SwimVoice).",
        scopeType: "Sportski Inženjering & Mjerenja",
        role: "Elektronska mjerenja vremena, obrada trka, automatizovana najava i servis opreme",
      },
    ],
    allItems: [
      {
        id: "aquana",
        name: "JP Aquana Banja Luka",
        highlight: "Javno Preduzeće",
        description: "Kompletna implementacija EnterSYS kontrole pristupa, tripoda, fiskalnog POS-a, DokumentArt platforme i internog radija.",
        scopeType: "Direktan Klijent",
        role: "Inženjering, HaaS/SaaS sistem po sistemu „ključ u ruke” i svakodnevno održavanje",
      },
      {
        id: "omega-sports",
        name: "SwissTiming / Omega Sportska Mjerenja",
        highlight: "Elektronska Mjerenja Vremena",
        description: "Licencirani rukovalac opremom i inženjer elektronskih mjerenja vremena na plivačkim i atletskim borilištima (15+ godina rada uz softvere SOCCS i SwimVoice).",
        scopeType: "Sportski Inženjering & Mjerenja",
        role: "Elektronska mjerenja vremena, obrada trka, automatizovana najava i servis opreme",
      },
      {
        id: "grad-bl",
        name: "Grad Banja Luka",
        highlight: "Gradska Uprava",
        description: "Protokolarni, kulturni i javni audio projekti, manifestacije i zvučne objave (direktni poslovi i agencijska realizacija).",
        scopeType: "Direktna & Agencijska Saradnja",
        role: "Zvučni dizajn i produkcija zvaničnih poruka",
      },
      {
        id: "ksbih",
        name: "Košarkaški Savez BiH",
        highlight: "Nacionalni Savez",
        description: "Službeni promotivni audio materijali i zvučna podrška za reprezentativne utakmice kroz agencije.",
        scopeType: "Agencijska Produkcija",
        role: "Audio produkcija i promotivni spotovi",
      },
      {
        id: "vlada-rs",
        name: "Vlada RS & Ministarstva",
        highlight: "Institucije",
        description: "Javne edukativne kampanje, saobraćajne akcije i zvanična audio saopštenja realizovana putem agencija.",
        scopeType: "Agencijska Produkcija",
        role: "Tonsko snimanje i broadcast adaptacija",
      },
      {
        id: "demofest",
        name: "Demofest",
        highlight: "Muzički Festival",
        projectsCount: "30+ kampanja",
        description: "Festivalske radijske i TV najave, zvučni identitet i tonska produkcija.",
        scopeType: "Direktan Klijent",
        role: "Kreativna produkcija zvuka za najveći demo festival",
      },
    ],
  },

  // 5. Music Era & Authors
  {
    id: "music",
    title: "Muzička Produkcija & Autori",
    subtitle: "Četiri decenije rada sa stotinama bendova, kompozitora, pozorišta i filmova.",
    badge: "1982 – Danas",
    colorClass: "text-purple-700 bg-purple-50 border-purple-200",
    accentClass: "text-purple-700",
    bgGradient: "from-purple-50/50 to-white",
    flagship: [
      {
        id: "sanja-colic-zelic",
        name: "Sanja Čolić Zelić",
        highlight: "Profesor Klavira & Pijanista",
        description: "Profesor klavira • Rock Simfonija • Vanja the Frog • Libertango • Studijske sesije, klavirske dionice i vokalna saradnja.",
        scopeType: "Autorski / Muzički Rad",
        role: "Studijski klavir, aranžmani i trajno muzičko stvaralaštvo",
      },
      {
        id: "theatre-audio",
        name: "Pozorišna Muzika & Teatri",
        highlight: "Narodno & Dječije Pozorište RS",
        description: "Komponovanje i produkcija namjenske muzike za pozorišne predstave, kreiranje scenskog zvučnog ambijenta i scenskih efekata.",
        scopeType: "Pozorišna & Filmska Produkcija",
        role: "Komponovanje, scenski zvučni dizajn i audio miks",
      },
    ],
    allItems: [
      {
        id: "theatre-audio",
        name: "Pozorišna Muzika (Narodno & Dječije Pozorište RS)",
        highlight: "Scenska Muzika",
        description: "Autorska muzika za brojne pozorišne predstave, scenski audio dizajn i zvučne kulise.",
        scopeType: "Pozorišna & Filmska Produkcija",
        role: "Komponovanje, scenska muzika i audio produkcija",
      },
      {
        id: "film-sound",
        name: "Filmski Sound Design & TV Serije",
        highlight: "Igrani & Dokumentarni Filmovi",
        description: "Kompletan zvučni dizajn, foley, tonski miks i muzika za veći broj filmova i televizijskih serija.",
        scopeType: "Pozorišna & Filmska Produkcija",
        role: "Sound design, miks dijaloga i postprodukcija",
      },
      {
        id: "classical-symp",
        name: "Klasična & Simfonijska Muzika",
        highlight: "Nagrađivani Kompozitori",
        description: "Studijska saradnja sa istaknutim živim kompozitorima klasične muzike, simfonijskim orkestrima i solistima.",
        scopeType: "Autorski / Muzički Rad",
        role: "Akustičko snimanje, mastering i tonski inženjering",
      },
      {
        id: "sports-anthems",
        name: "Zvanične Himne Sportskih Klubova",
        highlight: "Sportske Manifestacije",
        description: "Autorske himne sportskih klubova, stadionske navijačke teme i zvučni identiteti velikih takmičenja.",
        scopeType: "Autorski / Muzički Rad",
        role: "Muzička produkcija, aranžmani i horski miks",
      },
      {
        id: "sanja-colic-zelic",
        name: "Sanja Čolić Zelić",
        highlight: "Profesor Klavira & Pijanista",
        description: "Profesor klavira • Rock Simfonija • Vanja the Frog • Libertango • Studijske sesije, klavirske dionice i vokalna saradnja.",
        scopeType: "Autorski / Muzički Rad",
        role: "Studijski klavir, aranžmani i trajno muzičko stvaralaštvo",
      },
      {
        id: "big-bang",
        name: "Big Bang",
        highlight: "Kultni Banjalučki Rock",
        description: "Kultni banjalučki rock bend • Siniša Zelić kao muzički producent, aranžmani i studijsko snimanje.",
        scopeType: "Autorski / Muzički Rad",
        role: "Muzički producent, tonski snimatelj i aranžer",
      },
      {
        id: "massimo",
        name: "Massimo Savić",
        highlight: "Pop / Art Ikona",
        description: "Studijski rad, aranžmani i snimanje vokala tokom 80-ih godina.",
        scopeType: "Autorski / Muzički Rad",
        role: "Studijski inženjering i tonske sesije",
      },
      {
        id: "dino-dvornik",
        name: "Dino Dvornik",
        highlight: "Funk / Pop Zvuk",
        description: "Pionirski studijski rad, tonski miks i rana muzička saradnja.",
        scopeType: "Autorski / Muzički Rad",
        role: "Miks sesije i analogno-digitalna produkcija",
      },
      {
        id: "djavoli",
        name: "Đavoli (Neno Belan)",
        highlight: "Pop-Rock Scena",
        description: "Muzička produkcija, aranžmani i studijsko snimanje instrumenata.",
        scopeType: "Autorski / Muzički Rad",
        role: "Snimanje i tonska obrada",
      },
      {
        id: "denis-denis",
        name: "Denis & Denis",
        highlight: "Synth-Pop Pioniri",
        description: "Elektronska muzika, rani sintisajzeri i studijski miks.",
        scopeType: "Autorski / Muzički Rad",
        role: "Tonska produkcija i rad na prvim digitalnim sekvencerima",
      },
      {
        id: "oliver-mandic",
        name: "Oliver Mandić",
        highlight: "Autorski Zvuk",
        description: "Studijska saradnja, instrumentalne dionice i tonski miks.",
        scopeType: "Autorski / Muzički Rad",
        role: "Studijske instrumentalne sesije",
      },
      {
        id: "revelation",
        name: "Revelation (Boris Relja)",
        highlight: "Progresivni Rock",
        description: "Dizajn zvuka, ton majstor i muzička produkcija projekta.",
        scopeType: "Autorski / Muzički Rad",
        role: "Muzički producent i miks inženjer",
      },
      {
        id: "radio-band",
        name: "Radio (Pop-Rock BL)",
        highlight: "Banjalučki Sastav",
        description: "Autorska muzika, snimanje i gitarske dionice.",
        scopeType: "Autorski / Muzički Rad",
        role: "Bas/gitara i produkcija",
      },
      {
        id: "kovalsky",
        name: "Kovalsky Project",
        highlight: "Studijski Rad",
        description: "Muzički aranžmani, snimanje i mastering.",
        scopeType: "Autorski / Muzički Rad",
        role: "Tonska produkcija i postprodukcija",
      },
      {
        id: "basdans",
        name: "BasDans",
        highlight: "Urbana Scena",
        description: "Kompletna studijska produkcija, miks i mastering.",
        scopeType: "Autorski / Muzički Rad",
        role: "Muzička produkcija",
      },
      {
        id: "political-campaigns",
        name: "Društvene & Izborne Kampanje",
        highlight: "Preko 100+ Kampanja",
        description: "Krovni audio identiteti, kompozicije i tonska produkcija za brojne političke i javne kampanje.",
        scopeType: "Autorski / Muzički Rad",
        role: "Autorska muzika, spikeri i master miks",
      },
    ],
  },
];

