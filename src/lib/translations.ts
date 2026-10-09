export type Language = "sr" | "en";

export interface Translations {
  nav: {
    solutions: string;
    studioTaf: string;
    heritage: string;
    portal: string;
    contact: string;
    tenantLogin: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    ctaSolutions: string;
    ctaStudio: string;
    ctaPortal: string;
    stats: {
      stat1Number: string;
      stat1Label: string;
      stat2Number: string;
      stat2Label: string;
      stat3Number: string;
      stat3Label: string;
      stat4Number: string;
      stat4Label: string;
    };
  };
  pillars: {
    title: string;
    subtitle: string;
    p1Title: string;
    p1Sub: string;
    p1Desc: string;
    p2Title: string;
    p2Sub: string;
    p2Desc: string;
    p3Title: string;
    p3Sub: string;
    p3Desc: string;
  };
  studioTaf: {
    badge: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    cortanaBadge: string;
    cortanaTitle: string;
    cortanaDesc: string;
    cortanaStat: string;
    cortanaStatLabel: string;
    referencesTitle: string;
    referencesSubtitle: string;
    categories: {
      all: string;
      global: string;
      retail: string;
      finance: string;
      agencies: string;
      institutions: string;
    };
  };
  software: {
    badge: string;
    title: string;
    subtitle: string;
    modules: {
      fluxa: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
      pos: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
      entersys: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
      dokumentart: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
      soccs: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
      hardware: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
    };
  };
  philosophy: {
    badge: string;
    title: string;
    quote: string;
    intro: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    morningJoy: string;
  };
  portal: {
    badge: string;
    title: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    loginCardTitle: string;
    loginCardHint: string;
    usernamePlaceholder: string;
    passwordPlaceholder: string;
    loginBtn: string;
    demoNote: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    location: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  sr: {
    nav: {
      solutions: "Softverska Rješenja",
      studioTaf: "Studio TAF",
      heritage: "O Nama & Nasljeđe",
      portal: "Tenant Portal",
      contact: "Kontakt",
      tenantLogin: "Prijava Klijenta",
    },
    hero: {
      badge: "Tehnološko & Kreativno Nasljeđe • 2006 – 2026",
      title1: "Gdje se susreću",
      titleHighlight: "dvije decenije zanatstva",
      title2: "i moderna digitalna arhitektura.",
      subtitle:
        "Sinergija visokotehnoloških poslovnih platformi, nativnih hardverskih kontrolera i 20 godina vrhunske audio produkcije. Rješenja krojena po mjeri stvarnog poslovanja, sportskih borilišta i javnih preduzeća.",
      ctaSolutions: "Istražite Softverska Rješenja",
      ctaStudio: "Studio TAF Nasljeđe",
      ctaPortal: "Korisnički Portal",
      stats: {
        stat1Number: "20+",
        stat1Label: "Godina Kontinuiteta",
        stat2Number: "6.000+",
        stat2Label: "Realizovanih Projekata",
        stat3Number: "100+",
        stat3Label: "Brendova & Agencija",
        stat4Number: "99.9%",
        stat4Label: "Pouzdanost Sistema",
      },
    },
    pillars: {
      title: "Tri Stuba Našeg Ekosistema",
      subtitle: "Spoj decenijskog audio inženjeringa, robusnog softvera i automatizovanog klijentskog servisa.",
      p1Title: "Studio TAF (The Audio Factory)",
      p1Sub: "20 Godina Vrhunskog Zvuka",
      p1Desc:
        "Audio branding, radio/TV produkcija, mikrofonska i fonetska preciznost. Od 80-ih i pionirskih dana MIDI tehnologije do kompleksnih datasetova za AI govorne asistente.",
      p2Title: "Poslovna & Hardverska Rješenja",
      p2Sub: "ERP, POS, Kontrola Prolaza & Sport",
      p2Desc:
        "Fluxa Cloud ERP, FluxaPOS maloprodaja, EnterSYS kontrola pristupa i menadžeri objekata, DokumentArt javne nabavke i SOCCS/SwimVoice sportski tajming.",
      p3Title: "Tenant Samoposlužni Portal",
      p3Sub: "Automatizovano Licenciranje & Podrška",
      p3Desc:
        "Centralno mjesto za klijente: uvid u module, automatsko produženje licenci putem instant uplatnica/QR kodova, preuzimanje zvaničnih update paketa i baza znanja.",
    },
    studioTaf: {
      badge: "Turtle Audio Factory • 2006 – Danas",
      title: "Dve Decenije Zvuka Koji Ostavlja Trag",
      subtitle:
        "Nakon višedecenijskog studijskog i muzičkog rada širom kontinenata, 2006. godine stvoren je Studio TAF — sinonim za beskompromisan audio inženjering, dizajn zvuka i produkciju.",
      storyTitle: "Od Atari 1040ST i Steinberg 24 do Globalnih Kampanja",
      storyP1:
        "Priča počinje 80-ih godina prošlog vijeka, u ranim danima digitalizacije kada su prvi MIDI sekvenceri i 486 platforme otvarali nove horizonte. Kroz rad u najvećim studijima regiona, saradnju sa vrhunskim muzičarima i autorima, stvorena je filozofija rada koja zvuk ne posmatra kao prolazni efekat, već kao preciznu umjetnost.",
      storyP2:
        "Danas, sa preko 6.000 završenih projekata, stalnom bazom od preko 80 spikera i talenata, Studio TAF je pouzdan partner vodećim regionalnim tržnim lancima, bankama, multinacionalnim brendovima i kreativnim agencijama.",
      cortanaBadge: "Specijalni Inženjerski Projekat",
      cortanaTitle: "Microsoft Cortana — Fonetska Lokalizacija",
      cortanaDesc:
        "Za potrebe razvoja Microsoft Cortana glasovnog asistenta, Studio TAF je realizovao višemjesečni laboratorijski proces snimanja, segmentacije i akustičke kalibracije fonetskog dataseta od 974 niza govornih semplova, osiguravajući besprekoran tonalni kontinuitet i spektralnu čistoću.",
      cortanaStat: "974",
      cortanaStatLabel: "Akustički kalibrisana govorna niza",
      referencesTitle: "Prestižne Reference & Partneri",
      referencesSubtitle: "Institucije, multinacionalne kompanije i agencije koje nam vjeruju decenijama.",
      categories: {
        all: "Sve Reference",
        global: "Globalni Brendovi",
        retail: "Tržni Lanci",
        finance: "Banke & Finansije",
        agencies: "Kreativne Agencije",
        institutions: "Institucije & Sport",
      },
    },
    software: {
      badge: "Softverski & Hardverski Proizvodi",
      title: "Modularna Rješenja za Stvarni Svijet",
      subtitle:
        "Arhitektura izgrađena na realnim operativnim potrebama — stabilna, brza, otporna na prekide interneta i prilagođena specifičnostima svake industrije.",
      modules: {
        fluxa: {
          name: "Fluxa Cloud & ERP",
          tagline: "Agencijski & Preduzetnički Menadžment",
          description:
            "Sveobuhvatna platforma za upravljanje projektima, automatsko fakturisanje, bankarsko rasknjižavanje, analitiku troškova saradnika i operativni plan likvidnosti.",
          features: [
            "Project Lifecycle: od ponude i iniciacije do gotove isporuke",
            "Automatsko bankarsko rasknjižavanje sa tolerancijama",
            "Modul Operativni Plan: cashflow projekcija, računi i planirane obaveze",
            "Izdvojeno praćenje troškova domaćinstva (Home Fond)",
            "Generisanje e-faktura, KUF evidencija i fiskalizacija",
          ],
        },
        pos: {
          name: "FluxaPOS",
          tagline: "Maloprodajna & Ugostiteljska Kasa",
          description:
            "Moderna, brza kasa za touch i tastaturni rad. Nativna kontrola nad hardverom uz punu podršku za fiskalne uređaje i offline-first pouzdanost.",
          features: [
            "Optimizovan rad za touch ekrane i brzi numerički unos",
            "Direktna komunikacija sa fiskalnim printerima i barkod skenerima",
            "Offline-first arhitektura: rad bez interneta sa auto-sinhronizacijom",
            "Povezanost sa zalihama, normativima i centralnim sistemom",
            "Mogućnost samostalnog rada ili kao dio ARGUS mreže",
          ],
        },
        entersys: {
          name: "EnterSYS & ARGUS",
          tagline: "Kontrola Pristupa & Upravljanje Objektima",
          description:
            "Krovni sistem za sportske dvorane, bazene, fitnes centre, stadione i manifestacije. Od tripoda i RFID narukvica do pametnih ormarića.",
          features: [
            "ARGUS Master: centralni hub za hardversku kontrolu i mrežne tripode",
            "Enter Web: online prodaja karata, članarine, QR i RFID propusnice",
            "PoolManager: specijalizovano vođenje bazena i plivačkih škola",
            "GymManager, HallManager & FieldManager: rezervacije termina i borilišta",
            "Locker: pametni ormarići sinhronizovani sa pristupnim narukvicama",
            "MojRadio & MojTV: automatizovano emitovanje interne muzike i reklama",
          ],
        },
        dokumentart: {
          name: "DokumentArt",
          tagline: "Javne Nabavke & Upravljanje Ugovorima",
          description:
            "Namjenski softver za javna preduzeća, ustanove i tenderske timove koji zahtijevaju striktno praćenje zakonskih procedura i ugovornih obaveza.",
          features: [
            "Praćenje tenderske dokumentacije, žalbenih rokova i objava",
            "Evidencija bankarskih garancija, rokova isporuke i garancija",
            "Praćenje realizacije ugovora i aneksa u realnom vremenu",
            "Centralizovano arhiviranje dokumentacije uz brzu pretragu",
          ],
        },
        soccs: {
          name: "SOCCS & SwimVoice",
          tagline: "Plivačka Takmičenja & Zvučna Najava",
          description:
            "Zvanični sistem za plivačke mitinge i sportska borilišta. Obrada trka po svetskim standardima uz automatizovanu glasovnu najavu.",
          features: [
            "SOCCS: mjerenje vremena, obrada trka po FINA / Lenex standardima",
            "Direktna kontrola LED semafora i startnih tabli",
            "SwimVoice: robotski akustički engine za glasovnu najavu takmičara",
            "Generisanje zvaničnih zapisnika, startnih i rezultatnih lista",
          ],
        },
        hardware: {
          name: "BasePCB & Hardverska Laboratorija",
          tagline: "Namjenska Elektronika & Kontroleri",
          description:
            "Sopstveni razvoj i projektovanje štampanih elektronskih ploča, relejnih kontrolera i telemetrijskih modula za besprekornu komunikaciju hardvera i softvera.",
          features: [
            "Projektovane BasePCB i Omega ploče za tripode i prolaze",
            "Opto-izolovani ulazi i robusna zaštita od prenapona",
            "Nativna RS485, USB i TCP/IP komunikacija",
            "Razvijeno i testirano u realnim, zahtjevnim terenskim uslovima",
          ],
        },
      },
    },
    philosophy: {
      badge: "Zanatstvo & Pogled na Život",
      title: "Stvaranje Kao Životna Filozofija",
      quote:
        "Iza nas ne stoje prazne floskule. Ime nije važno — važno je šta ostaje iza nas, ko nas je prepoznao kao kompetentne i vraćao nam se decenijama.",
      intro:
        "Ova platforma nije nastala u sterilnim marketinškim laboratorijama, već iz 62 godine životnog iskustva, rada i učenja.",
      point1Title: "Spoj Mašinstva, Akustike i Ekonomije",
      point1Desc:
        "Formalno obrazovanje kroz mašinski fakultet, višu muzičku školu i ekonomiju, uz decenijsko rukovodno iskustvo u marketingu novina i upravljanju javnim preduzećima, ugrađeno je u svaku liniju koda i svaki relej.",
      point2Title: "Mir Završenog Posla",
      point2Desc:
        "Ustajanje u 5 ujutro sa nestrpljenjem da se stvara nešto opipljivo i korisno. Rad koji ne traži prečice, već se bori sa svakim tehničkim problemom do konačnog, besprekornog rješenja.",
      point3Title: "Otpornost i Rješavanje Nemogućeg",
      point3Desc:
        "Od spasavanja i podizanja uništenih računarskih mreža u rekordnom roku do programiranja sistema koji rade bez prekida godinama — povjerenje se stiče samo djelima na terenu.",
      morningJoy:
        "„Radost stvaranja i mir kada se na kraju dana okreneš i vidiš završen ogroman posao — to je ono što nas pokreće svakog jutra.”",
    },
    portal: {
      badge: "Korisnička Zona",
      title: "Tenant Samoposlužni Portal",
      subtitle:
        "Potpuna kontrola nad vašim softverskim licencama, modulima, automatskim uplatama i nadogradnjama.",
      feature1Title: "Uvid u Aktivne Module",
      feature1Desc:
        "Pregled vašeg paketa (ENTERSYS, FLUXAPOS, JAVNENABAVKE, SOCCS) i tačan broj preostalih dana zakupa.",
      feature2Title: "Instant Produženje & QR Plaćanje",
      feature2Desc:
        "Generisanje uplatnice sa instant IPS/QR kodom za banku. Licenca se automatski produžava u sekundi po evidentiranoj uplati.",
      feature3Title: "Distribucija Nadogradnji",
      feature3Desc:
        "Direktno preuzimanje zvaničnih instalacija i paketa bez potrebe za tehničkim posjetama i složenim procedurama.",
      feature4Title: "Baza Znanja & Podrška",
      feature4Desc:
        "Video tutorijali, PDF korisnička uputstva i direktna veza sa inženjerskim timom za brzu tehničku pomoć.",
      loginCardTitle: "Pristup za Tenante",
      loginCardHint: "Unesite korisničko ime vaše organizacije i lozinku.",
      usernamePlaceholder: "npr. aquana, fructatrade, sc_borik",
      passwordPlaceholder: "Vaša pristupna lozinka",
      loginBtn: "Prijavite se na Portal",
      demoNote: "Zahtijevate novu licencu ili demonstraciju sistema? Kontaktirajte nas.",
    },
    footer: {
      tagline:
        "Tehnološko-kreativni ekosistem: 20 godina vrhunske audio produkcije i moderna softverska rješenja za poslovanje, sport i javni sektor.",
      copyright: "Fluxa.ba & Studio TAF. Sva prava zadržana.",
      location: "Banja Luka, Bosna i Hercegovina",
      allRightsReserved: "Sva prava zadržana.",
    },
  },
  en: {
    nav: {
      solutions: "Software Solutions",
      studioTaf: "Studio TAF",
      heritage: "About & Heritage",
      portal: "Tenant Portal",
      contact: "Contact",
      tenantLogin: "Client Login",
    },
    hero: {
      badge: "Engineering & Creative Heritage • 2006 – 2026",
      title1: "Where two decades of",
      titleHighlight: "dedicated craftsmanship",
      title2: "meets modern software architecture.",
      subtitle:
        "A seamless synergy of enterprise management platforms, native hardware controllers, and 20 years of premier sound engineering. Solutions engineered for real-world enterprise, arenas, and public institutions.",
      ctaSolutions: "Explore Software Solutions",
      ctaStudio: "Studio TAF Heritage",
      ctaPortal: "Client Portal",
      stats: {
        stat1Number: "20+",
        stat1Label: "Years of Heritage",
        stat2Number: "6,000+",
        stat2Label: "Completed Projects",
        stat3Number: "100+",
        stat3Label: "Brands & Agencies",
        stat4Number: "99.9%",
        stat4Label: "System Reliability",
      },
    },
    pillars: {
      title: "The Three Pillars of Our Ecosystem",
      subtitle: "Uniting decades of acoustic mastery, resilient software, and automated client operations.",
      p1Title: "Studio TAF (The Audio Factory)",
      p1Sub: "20 Years of Sound Excellence",
      p1Desc:
        "Audio branding, broadcast production, acoustic precision. From 1980s MIDI pioneering to comprehensive phonetic speech synthesis datasets for conversational AI.",
      p2Title: "Enterprise & Hardware Platforms",
      p2Sub: "ERP, POS, Access Control & Sports",
      p2Desc:
        "Fluxa Cloud ERP, FluxaPOS retail, EnterSYS access & facility managers, DokumentArt procurement, and SOCCS/SwimVoice competition timing engines.",
      p3Title: "Tenant Self-Service Portal",
      p3Sub: "Automated Licensing & Support",
      p3Desc:
        "Unified hub for client organizations: real-time module scopes, instant license extension via QR payments, release updates, and interactive knowledge base.",
    },
    studioTaf: {
      badge: "Turtle Audio Factory • 2006 – Present",
      title: "Two Decades of Sound That Endures",
      subtitle:
        "Built on multi-continental studio performance and pioneering digital audio engineering, Studio TAF was established in 2006 as a benchmark of uncompromising sound design.",
      storyTitle: "From Atari 1040ST & Steinberg 24 to Global Campaigns",
      storyP1:
        "Our journey began in the 1980s during the early dawn of digital sequencing and DSPs on 486 architectures. Decades of working across major regional recording studios forged a philosophy where sound is not an afterthought, but an exact science and an art form.",
      storyP2:
        "Today, with over 6,000 completed audio productions, a permanent voice talent roster exceeding 80 professional artists, Studio TAF remains a trusted partner to retail leaders, financial institutions, global brands, and advertising agencies.",
      cortanaBadge: "Special Engineering Milestone",
      cortanaTitle: "Microsoft Cortana — Phonetic Localization",
      cortanaDesc:
        "For Microsoft's Cortana AI assistant development, Studio TAF engineered a rigorous 6-month laboratory phonetic recording and acoustic dataset consisting of 974 calibrated speech sample sequences, ensuring flawless tonal uniformity and spectral clarity.",
      cortanaStat: "974",
      cortanaStatLabel: "Calibrated phonetic speech sequences",
      referencesTitle: "Prestigious References & Partners",
      referencesSubtitle: "Global brands, retail titans, and regional creative agencies that have trusted us for decades.",
      categories: {
        all: "All References",
        global: "Global Brands",
        retail: "Retail Giants",
        finance: "Banking & Finance",
        agencies: "Creative Agencies",
        institutions: "Institutions & Sports",
      },
    },
    software: {
      badge: "Software & Hardware Ecosystem",
      title: "Modular Solutions Built for the Real World",
      subtitle:
        "Architected around real operational demands — highly resilient, offline-first capable, and finely tuned to specific industry workflows.",
      modules: {
        fluxa: {
          name: "Fluxa Cloud & ERP",
          tagline: "Enterprise & Agency Operations",
          description:
            "All-in-one operations engine covering project lifecycles, automated multi-currency invoicing, bank statement auto-reconciliation, and cashflow liquidity forecasting.",
          features: [
            "Project Lifecycle: from client briefing to final delivery",
            "Automated bank statement reconciliation with tolerance matching",
            "Operative Liquidity: real-time bank balances, payables, and forecasts",
            "Isolated domestic accounting tracking (Home Fund)",
            "Integrated electronic invoicing and fiscal compliance",
          ],
        },
        pos: {
          name: "FluxaPOS",
          tagline: "Modern Retail & Hospitality POS",
          description:
            "Lightning-fast touch and keyboard point-of-sale. Native hardware control with full fiscal printer support and offline-first data integrity.",
          features: [
            "Optimized for high-throughput touchscreens and numeric keypads",
            "Native driver control for fiscal printers and barcode scanners",
            "Offline-first architecture: uninterrupted selling with auto-sync",
            "Real-time inventory decrementing and central synchronization",
            "Operates standalone or integrated within the ARGUS network",
          ],
        },
        entersys: {
          name: "EnterSYS & ARGUS",
          tagline: "Access Control & Facility Management",
          description:
            "Comprehensive management platform for aquatic centers, sports halls, gyms, arenas, and events. From turnstiles and RFID wristbands to smart locker hubs.",
          features: [
            "ARGUS Master: central network hub for turnstiles and gates",
            "Enter Web: online ticketing, memberships, QR and RFID passes",
            "PoolManager: specialized aquatic facility and swim school manager",
            "GymManager, HallManager & FieldManager: automated court bookings",
            "Locker: electronic smart lockers synchronized with wristbands",
            "MojRadio & MojTV: automated in-venue background music & commercial scheduling",
          ],
        },
        dokumentart: {
          name: "DokumentArt",
          tagline: "Public Procurement & Contract Lifecycle",
          description:
            "Specialized governance software for public enterprises and institutions requiring strict tender tracking, warranty deadlines, and compliance audits.",
          features: [
            "Tender lifecycle tracking, appeal deadlines, and public notices",
            "Bank guarantee tracking, delivery timelines, and performance bonds",
            "Real-time contract and appendix execution tracking",
            "Centralized document archival with instant full-text retrieval",
          ],
        },
        soccs: {
          name: "SOCCS & SwimVoice",
          tagline: "Sports Meet Timing & Acoustic Engine",
          description:
            "Official competition timing and management system for swimming championships, combining FINA/Lenex data processing with automated audio race announcements.",
          features: [
            "SOCCS: high-precision timing, touchpad processing, FINA/Lenex standard",
            "Direct scoreboard, start console, and LED lane matrix control",
            "SwimVoice: automated acoustic speech synthesis for race calls",
            "Official meet reports, start lists, and certified result generation",
          ],
        },
        hardware: {
          name: "BasePCB Hardware Lab",
          tagline: "Custom Electronics & Controllers",
          description:
            "In-house PCB circuit design, relay controller manufacturing, and telemetry boards delivering seamless hardware-to-cloud reliability.",
          features: [
            "Custom BasePCB and Omega controller boards for physical access barriers",
            "Optocoupled inputs and surge-protected industrial components",
            "Native RS485, USB, and TCP/IP telemetry",
            "Battle-tested in high-traffic commercial environments",
          ],
        },
      },
    },
    philosophy: {
      badge: "Craftsmanship & Heritage",
      title: "Creation as a Way of Life",
      quote:
        "Behind us stand no empty buzzwords. Names don't matter — what matters is what remains when the day is done, and the clients who return for decades.",
      intro:
        "This platform was not invented in a corporate think-tank, but born from 62 years of life, relentless work, and multidisciplinary practice.",
      point1Title: "Mechanical Engineering, Sound & Economics",
      point1Desc:
        "A rare polymath foundation: formal engineering education, higher music academy, and business economics, paired with executive leadership in media and public enterprises.",
      point2Title: "The Peace of Work Well Done",
      point2Desc:
        "Waking up before the alarm at 5 AM with the genuine eagerness to build something tangible. Refusing shortcuts and solving complex technical challenges down to the core.",
      point3Title: "Resilience & Engineering Stamina",
      point3Desc:
        "From reviving entire devastated network backbones in record time to crafting systems that run uninterrupted for years — trust is forged exclusively through action.",
      morningJoy:
        "“The sheer joy of creation and the quiet satisfaction of looking back at the end of the day to see a monumental job completed — that is what moves us forward every morning.”",
    },
    portal: {
      badge: "Client Hub",
      title: "Tenant Self-Service Portal",
      subtitle:
        "Complete autonomous control over your organization's software licenses, modules, billing, and updates.",
      feature1Title: "Active Scope Overview",
      feature1Desc:
        "Instant view of your active profile (ENTERSYS, FLUXAPOS, JAVNENABAVKE, SOCCS) and days remaining.",
      feature2Title: "Instant Renewal & QR Billing",
      feature2Desc:
        "Automated proforma generation with instant bank QR codes. Licenses extend automatically the second payment is verified.",
      feature3Title: "Official Update Center",
      feature3Desc:
        "Direct authenticated download of official distribution packages (.zip) without cumbersome manual intervention.",
      feature4Title: "Knowledge Base & Helpdesk",
      feature4Desc:
        "Access video walkthroughs, system manuals, and direct engineering support tickets.",
      loginCardTitle: "Tenant Login",
      loginCardHint: "Enter your organization's tenant identifier and password.",
      usernamePlaceholder: "e.g. aquana, fructatrade, sc_borik",
      passwordPlaceholder: "Your access password",
      loginBtn: "Sign In to Portal",
      demoNote: "Looking to deploy a new installation or schedule a demo? Get in touch with us.",
    },
    footer: {
      tagline:
        "Technological & creative ecosystem: 20 years of premier sound engineering paired with modern software systems for enterprise, sports, and public institutions.",
      copyright: "Fluxa.ba & Studio TAF. All rights reserved.",
      location: "Banja Luka, Bosnia and Herzegovina",
      allRightsReserved: "All rights reserved.",
    },
  },
};
