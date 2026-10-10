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
    storyP3: string;
    musicEraBadge: string;
    musicEraTitle: string;
    musicEraDesc: string;
    musicEraStat: string;
    musicEraStatLabel: string;
    referencesTitle: string;
    referencesSubtitle: string;
    categories: {
      all: string;
      commercial: string;
      music: string;
      retail: string;
      finance: string;
      institutions: string;
    };
  };
  software: {
    badge: string;
    title: string;
    subtitle: string;
    modules: {
      haas: {
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
      pos: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
      fluxar: {
        name: string;
        tagline: string;
        description: string;
        features: string[];
      };
      fluxa: {
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
      dokumentart: {
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
    point4Title: string;
    point4Desc: string;
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
      badge: "Inženjersko & Kreativno Nasljeđe • Od 1982. do Danas",
      title1: "Gdje se susreću",
      titleHighlight: "preko četiri decenije zanatstva",
      title2: "i moderna SaaS/HaaS arhitektura.",
      subtitle:
        "Sinergija robusnih poslovnih platformi po modelu „ključ u ruke”, ekspertize u sportskim mjerenjima (SwissTiming/Omega) i 20 godina vodeće komercijalne audio produkcije Studio TAF.",
      ctaSolutions: "Istražite Rješenja (HaaS & SaaS)",
      ctaStudio: "Studio TAF Nasljeđe",
      ctaPortal: "Korisnički Portal",
      stats: {
        stat1Number: "40+",
        stat1Label: "Godina Zvučnog Zanata",
        stat2Number: "6.000+",
        stat2Label: "Komercijalnih Projekata",
        stat3Number: "15+",
        stat3Label: "God. SwissTiming / Omega Ekspertize",
        stat4Number: "100%",
        stat4Label: "Model „Ključ u Ruke” (Zero Capex)",
      },
    },
    pillars: {
      title: "Tri Stuba Našeg Ekosistema",
      subtitle: "Autentičan inženjerski rad, rješenja po sistemu „ključ u ruke” i automatizovano upravljanje licencama.",
      p1Title: "Studio TAF (The Audio Factory)",
      p1Sub: "20 Godina Komercijalnog Zvuka & 6.000+ Projekata",
      p1Desc:
        "Od muzičkog producenta i studijskog rada 80-ih (Massimo, Dino Dvornik, Đavoli, Denis & Denis) do osnivanja Studio TAF 2006. godine kao lidera komercijalnog audio dizajna (99.9% radijske i TV reklame).",
      p2Title: "HaaS & SaaS Poslovna Rješenja",
      p2Sub: "Sistem „Ključ u Ruke” Bez Velikih Investicija",
      p2Desc:
        "Kompletan zakup hardvera i softvera (Zero Capex): tripodi, fiskalni POS, menadžeri objekata (ARGUS, PoolManager), FluxaR knjigovodstveni most, MojRadio & MojTV, DokumentArt i profesionalni sportski tajming (SOCCS/SwimVoice).",
      p3Title: "Tenant Samoposlužni Portal",
      p3Sub: "Automatizovano Licenciranje & Podrška",
      p3Desc:
        "Centralno mjesto za klijente: uvid u module, automatsko produženje licenci putem instant uplatnica/QR kodova, preuzimanje zvaničnih update paketa i baza znanja.",
    },
    studioTaf: {
      badge: "Studio TAF • 2006 – Danas",
      title: "Od Zlatnog Doba Muzičke Produkcije do Komercijalnog Lidera",
      subtitle:
        "Priča o četiri decenije autentičnog audio zanatstva — od analognih i ranih digitalnih studija 80-ih do preko 6.000 realizovanih komercijalnih projekata u Studio TAF-u.",
      storyTitle: "Od Studijskog Producenta 1982. do Specijalizovanog Audio Centra",
      storyP1:
        "Put Siniše Zelića u audio svijetu započeo je davne 1982. godine, još u srednjoškolskim danima i tokom studija mašinstva. Kao aktivni muzičar (bas i gitara), audio tehničar i muzički producent u banjalučkim i regionalnim studijima, provodio je mjesece u kreiranju aranžmana, snimanju živih instrumenata i vokala, te analogno-digitalnom miksu i postprodukciji.",
      storyP2:
        "To zlatno doba obilježile su saradnje na projektima regionalnih muzičkih velikana — Massimo Savić, Đavoli, Dino Dvornik, Denis & Denis, Oliver Mandić, Kovalsky project, BasDans, Revelation (Boris Relja project), banjalučki pop-rock bend Radio, kao i cjelokupna urbana scena regiona. Bili su to pionirski dani digitalizacije kada su Atari 1040ST, Steinberg 24 i prve 486 audio kartice postavljale temelje moderne produkcije.",
      storyP3:
        "Preko 20 godina kasnije, 2006. godine, rođen je Studio TAF (Turtle Audio Factory). Studio TAF se u 99.9% svog rada fokusira na vrhunski komercijalni audio — radio i TV reklame, audio brending, voiceover casting sa bazom od 80+ profesionalnih spikera i audio postprodukciju, sa više od 6.000 uspješno isporučenih projekata za vodeće brendove i agencije.",
      musicEraBadge: "Muzička & Komercijalna Istorija",
      musicEraTitle: "Autentičan Zanat i Zvuk Bez Kompromisa",
      musicEraDesc:
        "Mjesečni studijski rad sa najvećim izvođačima regiona izgradio je disciplinu i osjećaj za akustičku savršenost koji danas garantuje neprikosnovenu dinamiku i kristalnu čistoću svake reklame i zvučnog identiteta.",
      musicEraStat: "6.000+",
      musicEraStatLabel: "Realizovanih komercijalnih audio kampanja",
      referencesTitle: "Referentna Lista Klijenata & Saradnika",
      referencesSubtitle: "Institucije, multinacionalne kompanije, vodeći tržni lanci, banke i agencije.",
      categories: {
        all: "Sve Reference",
        commercial: "Komercijalni Brendovi",
        music: "Muzički Projekti & Autori",
        retail: "Tržni Lanci",
        finance: "Banke & Finansije",
        institutions: "Institucije & Sport",
      },
    },
    software: {
      badge: "SaaS & HaaS Rješenja („Ključ u Ruke”)",
      title: "Kompletna Infrastruktura Bez Kapitalnih Troškova",
      subtitle:
        "Mi ne prodajemo skupe kutije. Pružamo kompletan sistem po principu pretplate i zakupa opreme — mi donosimo, montiramo, konfigurišemo i održavamo, a vi vodite svoje poslovanje bez stresa.",
      modules: {
        haas: {
          name: "HaaS & SaaS „Ključ u Ruke”",
          tagline: "Hardver kao Servis • Nula Kapitalnih Ulaganja (Zero Capex)",
          description:
            "Preduzeće ne mora investirati 100.000 € u nabavku opreme. Kroz naš integrisani model zakupa, klijent po niskoj mjesečnoj tarifi dobija kompletan hardver (tripodi, POS terminali, zvučni sistemi, digitalni ekrani) i softver sa uključenim 24/7 održavanjem.",
          features: [
            "Nula kapitalnih ulaganja (Zero Capex) — niska mjesečna pretplata",
            "Isporuka „ključ u ruke”: hardver, softver, montaža, mrežni ring i konfiguracija",
            "Uključeno preventivno i interventno održavanje, zamjena opreme i rezervni dijelovi",
            "Povezivanje sa MojRadio (interni audio streaming) i MojTV (digital signage ekranima)",
            "Centralizovano upravljanje kroz novi namjenski pravni i licencni model",
          ],
        },
        entersys: {
          name: "EnterSYS & ARGUS Master",
          tagline: "Kontrola Pristupa & Upravljanje Sportsko-Rekreativnim Objektima",
          description:
            "Robusni krovni sistem za bazene, stadione, sportske dvorane, teretane i manifestacije. Od upravljanja mrežnim tripodima i RFID narukvicama do pametnih ormarića.",
          features: [
            "ARGUS Master: industrijski kontroler za mrežne tripode, barijere i kapije",
            "PoolManager: specijalizovano upravljanje vodenim parkovima i plivačkim školama",
            "GymManager, HallManager & FieldManager: rezervacije termina, članarine i tereni",
            "Locker: pametni elektronski ormarići sinhronizovani sa pristupnim narukvicama",
            "MojRadio & MojTV: automatizovano emitovanje interne muzike i marketinških poruka",
            "DoorMan & CCTV: integrisano video praćenje prolaza i sigurnosna telemetrija",
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
            "Offline-first arhitektura: rad bez interneta sa automatskom sinhronizacijom",
            "Povezanost sa zalihama, normativima i centralnim sistemom",
            "Mogućnost samostalnog rada ili kao integrisani dio ARGUS sistema",
          ],
        },
        fluxar: {
          name: "FluxaR (Knjigovodstveni Most)",
          tagline: "Sve „Na Tanjiru” za Eksterna Knjigovodstva",
          description:
            "Automatizovani digitalni most između maloprodajnih kasa (FluxaPOS), Cloud ERP-a i eksternih računovodstvenih agencija. Nema više nošenja fascikli, ručnog prekucavanja niti USB fleševa — knjigovodstvo preuzima sve podatke jednim klikom.",
          features: [
            "Jedan klik za knjigovođe: automatski izvoz KIF evidencije, pazara i računa",
            "Direktan digitalni tunel sa bezbjednim autorizacionim tokenom",
            "Potpuna eliminacija ručnog prekucavanja i ljudskih grešaka u knjigovodstvu",
            "Automatsko preuzimanje dnevnih fiskalnih Z-izvještaja i bankovnih izvoda",
            "Puna podrška za korisnike FluxaPOS maloprodaje i Fluxa Cloud ERP sistema",
          ],
        },
        fluxa: {
          name: "Fluxa Cloud & ERP",
          tagline: "Agencijski & Preduzetnički Menadžment",
          description:
            "Sveobuhvatna platforma za upravljanje projektima, automatsko fakturisanje, bankarsko rasknjižavanje, analitiku troškova saradnika i operativni plan likvidnosti.",
          features: [
            "Project Lifecycle: od ponude i inicijacije do gotove isporuke",
            "Automatsko bankarsko rasknjižavanje sa tolerancijama",
            "Modul Operativni Plan: cashflow projekcija, računi i planirane obaveze",
            "Izdvojeno praćenje troškova domaćinstva (Home Fond)",
            "Generisanje e-faktura, KUF evidencija i fiskalizacija",
          ],
        },
        soccs: {
          name: "SOCCS & SwimVoice",
          tagline: "Sportska Mjerenja • 15+ Godina SwissTiming / Omega Ekspertize",
          description:
            "Vodeći regionalni inženjerski tim za elektronska mjerenja na Omega i SwissTiming opremi. Zvanični softverski sistemi SOCCS i SwimVoice razvijeni su direktno iz 15 godina rada na međunarodnim plivačkim i atletskim borilištima.",
          features: [
            "15+ godina vrhunske terenske ekspertize na Omega / SwissTiming opremi",
            "Regionalni inženjerski lideri i servisna podrška za rješavanje problema na opremi",
            "SOCCS: obrada trka, startne liste i rezultati po zvaničnim FINA / Lenex standardima",
            "SwimVoice: napredni robotski akustički engine za automatizovanu glasovnu najavu",
            "Direktna sinhronizacija sa LED semaforima, startnim blokovima i video zidovima",
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
      },
    },
    philosophy: {
      badge: "Zanatstvo & Pogled na Život",
      title: "Rješenja Rođena u Prašini Realnog Posla",
      quote:
        "Ništa, bukvalno ništa nismo izmislili za radnim stolom. Svaka naša ideja rođena je u prašini, tamo gdje se stvarni problemi dešavaju. Rješavamo operativni problem na terenu, a upravi pružamo 100% kontrolu u realnom vremenu.",
      intro:
        "Ova platforma nije nastala u sterilnim marketinškim agencijama, već iz 62 godine životnog iskustva, stvarnih havarija, neprekidnog učenja i borbe sa realnim problemima.",
      point1Title: "Olakšanje Operativi, Potpuna Kontrola Upravi",
      point1Desc:
        "Naša misija je da rasteretimo najniži operativni nivo — radnike na blagajnama, recepcionere, tehničare i operatere na terenu, dok uprava i menadžment u realnom vremenu dobijaju tačne, filtrirane i kristalno jasne podatke za donošenje odluka.",
      point2Title: "Spoj Mašinstva, Akustike i Ekonomije",
      point2Desc:
        "Formalno obrazovanje kroz mašinski fakultet, višu muzičku školu i ekonomiju, uz decenijsko rukovodno iskustvo u marketingu novina i upravljanju javnim preduzećima, ugrađeno je u svaku liniju koda i svaki sistem.",
      point3Title: "Mir Završenog Posla u 5 Ujutro",
      point3Desc:
        "Ustajanje u 5 ujutro sa istinskim nestrpljenjem i radovanjem što stvaramo nešto opipljivo i korisno. Rad koji ne traži prečice, već se bori sa svakim tehničkim problemom do konačnog, besprekornog rješenja.",
      point4Title: "Otpornost i Rješavanje Nemogućeg",
      point4Desc:
        "Od spasavanja uništene serverske i mrežne infrastrukture u rekordnom roku do programiranja sistema koji rade bez prekida godinama — povjerenje se stiče samo djelima na terenu.",
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
        "Tehnološko-kreativni ekosistem: 20 godina komercijalnog audio inženjeringa i cjelovita HaaS/SaaS rješenja za poslovanje, sport i javni sektor.",
      copyright: "Fluxa.ba & Studio TAF. Sva prava zadržana.",
      location: "Banja Luka, Bosna i Hercegovina",
      allRightsReserved: "Sva prava zadržana.",
    },
  },
  en: {
    nav: {
      solutions: "Software & HaaS Solutions",
      studioTaf: "Studio TAF",
      heritage: "About & Heritage",
      portal: "Tenant Portal",
      contact: "Contact",
      tenantLogin: "Client Login",
    },
    hero: {
      badge: "Engineering & Creative Heritage • 1982 to Present",
      title1: "Where four decades of",
      titleHighlight: "authentic craftsmanship",
      title2: "meets turnkey SaaS/HaaS architecture.",
      subtitle:
        "A powerhouse synergy of turnkey enterprise infrastructure (Zero Capex), 15+ years of SwissTiming/Omega sports timing mastery, and 20 years of commercial audio leadership at Studio TAF.",
      ctaSolutions: "Explore Turnkey HaaS & SaaS",
      ctaStudio: "Studio TAF Heritage",
      ctaPortal: "Client Portal",
      stats: {
        stat1Number: "40+",
        stat1Label: "Years in Audio Craft",
        stat2Number: "6,000+",
        stat2Label: "Commercial Audio Works",
        stat3Number: "15+",
        stat3Label: "Yrs SwissTiming / Omega Mastery",
        stat4Number: "100%",
        stat4Label: "Turnkey Model (Zero Capex)",
      },
    },
    pillars: {
      title: "The Three Pillars of Our Ecosystem",
      subtitle: "Uniting decades of sound engineering, turnkey enterprise deployment, and automated client operations.",
      p1Title: "Studio TAF (The Audio Factory)",
      p1Sub: "20 Years of Commercial Sound & 6,000+ Works",
      p1Desc:
        "From 1980s music production & studio session work (Massimo, Dino Dvornik, Đavoli, Denis & Denis) to founding Studio TAF in 2006 as a dedicated commercial audio powerhouse (99.9% radio & TV ads).",
      p2Title: "Turnkey HaaS & SaaS Solutions",
      p2Sub: "Complete System Deployment Without Large Capital Expenditure",
      p2Desc:
        "Full hardware and software rental (Zero Capex): turnstiles, POS hardware, facility managers (ARGUS, PoolManager), FluxaR accounting bridge, MojRadio background audio, MojTV signage, and SwissTiming-grade sports timing (SOCCS/SwimVoice).",
      p3Title: "Tenant Self-Service Portal",
      p3Sub: "Automated Licensing & Support",
      p3Desc:
        "Unified hub for client organizations: real-time module scopes, instant license extension via QR/Wire payments, release updates, and interactive knowledge base.",
    },
    studioTaf: {
      badge: "Studio TAF • 2006 – Present",
      title: "From the Golden Era of Music Production to Commercial Audio Leadership",
      subtitle:
        "A journey across four decades of authentic sound craftsmanship — from 1980s analog recording studios to over 6,000 commercial audio productions delivered by Studio TAF.",
      storyTitle: "From 1982 Studio Producer to Specialized Commercial Audio Hub",
      storyP1:
        "Siniša Zelić's journey in audio engineering began in 1982 while studying mechanical engineering. As an active studio musician (bass and guitar), technician, and music producer in Banja Luka and regional studios, he spent months crafting arrangements, recording live acoustic and electric instruments, tracking vocals, and completing analog-to-digital post-production.",
      storyP2:
        "That golden era featured collaborations with iconic regional music legends — Massimo Savić, Đavoli, Dino Dvornik, Denis & Denis, Oliver Mandić, Kovalsky project, BasDans, Revelation (Boris Relja project), Banja Luka pop-rock band Radio, and the vibrant regional music scene. Those were the pioneering days of digital audio when the Atari 1040ST, Steinberg 24, and early 486 sound cards laid the groundwork for modern audio workstations.",
      storyP3:
        "Over 20 years later, in 2006, Studio TAF (Turtle Audio Factory) was established. Studio TAF focuses 99.9% of its work on premier commercial audio — radio and TV commercials, sonic branding, professional voiceover casting with 80+ permanent talents, and audio post-production, delivering over 6,000 successful projects for leading global and regional brands.",
      musicEraBadge: "Music & Commercial Audio Heritage",
      musicEraTitle: "Authentic Craftsmanship with Zero Compromise",
      musicEraDesc:
        "Decades of studio session discipline with legendary artists forged the acoustic precision and dynamic power that ensures every commercial and sonic identity stands out with unmatched clarity.",
      musicEraStat: "6,000+",
      musicEraStatLabel: "Commercial audio campaigns delivered",
      referencesTitle: "Prestigious References & Partners",
      referencesSubtitle: "Institutions, global brands, retail leaders, and top creative agencies.",
      categories: {
        all: "All References",
        commercial: "Commercial Brands",
        music: "Music Productions & Artists",
        retail: "Retail Giants",
        finance: "Banking & Finance",
        institutions: "Institutions & Sports",
      },
    },
    software: {
      badge: "SaaS & HaaS Solutions (Turnkey Model)",
      title: "Complete Enterprise Infrastructure with Zero Capex",
      subtitle:
        "We do not sell expensive boxes. We deliver complete systems on a subscription and equipment lease basis — we configure, install, deploy, and maintain 24/7 so you can run your business stress-free.",
      modules: {
        haas: {
          name: "HaaS & SaaS Turnkey Solutions",
          tagline: "Hardware as a Service • Zero Capital Expenditure (Zero Capex)",
          description:
            "Enterprises do not need to invest €100,000 upfront in expensive equipment. Through our turnkey HaaS model, clients receive complete hardware (turnstiles, POS terminals, audio systems, digital screens) and software for a low monthly tenant fee, fully maintained by our team.",
          features: [
            "Zero Capital Expenditure (Zero Capex) — low monthly subscription",
            "Complete turnkey delivery: hardware, software, installation, and network rings",
            "Included preventative and emergency maintenance with on-site equipment replacement",
            "Integrated with MojRadio (background audio/ads) and MojTV (digital signage screens)",
            "Centralized governance via our dedicated licensing and operational legal structure",
          ],
        },
        entersys: {
          name: "EnterSYS & ARGUS Master",
          tagline: "Access Control & Sports Facility Management",
          description:
            "Robust ecosystem for swimming complexes, arenas, fitness centers, stadiums, and events. From network turnstiles and RFID wristbands to smart locker controllers.",
          features: [
            "ARGUS Master: industrial controller for network turnstiles, gates, and barriers",
            "PoolManager: specialized operations for aquatic centers and swim academies",
            "GymManager, HallManager & FieldManager: court reservations, memberships, and fields",
            "Locker: electronic smart lockers synchronized with access wristbands",
            "MojRadio & MojTV: automated in-venue background music and commercial broadcasting",
            "DoorMan & CCTV: integrated gate visual monitoring and telemetry telemetry",
          ],
        },
        pos: {
          name: "FluxaPOS",
          tagline: "Retail & Hospitality POS System",
          description:
            "Modern, fast touchscreen and keyboard POS. Direct native hardware control with full fiscal printer support and offline-first reliability.",
          features: [
            "Optimized for touchscreen operation and high-speed numeric input",
            "Direct native interface with fiscal printers and barcode scanners",
            "Offline-first architecture: uninterrupted operations with auto-sync",
            "Real-time inventory, recipe tracking, and ERP integration",
            "Standalone operation or fully integrated with the ARGUS ecosystem",
          ],
        },
        fluxar: {
          name: "FluxaR (Accounting Bridge)",
          tagline: "Instant Ledger & Z-Report Export for Accounting Bureaus",
          description:
            "Automated digital bridge between retail POS checkouts, Cloud ERP, and external accounting agencies. No physical document folders or manual data entry — accounting firms receive daily turnovers, invoices, and bank statements on a silver platter with a single click.",
          features: [
            "One-click accounting export: sales books (KIF), daily Z-reports, and bank records",
            "Secure digital tunnel powered by authorization tokens",
            "Zero manual retyping and complete elimination of accounting human errors",
            "Instant daily turnover sync across all retail terminals",
            "Seamless compatibility with FluxaPOS, Fluxa ERP, and EnterSYS platforms",
          ],
        },
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
        soccs: {
          name: "SOCCS & SwimVoice",
          tagline: "Sports Timing • 15+ Years SwissTiming / Omega Mastery",
          description:
            "Leading regional engineering authority for precision electronic timing on Omega and SwissTiming equipment. The SOCCS and SwimVoice systems were engineered directly from 15 years of real-world sports timing on international championship tracks.",
          features: [
            "15+ years of specialist field expertise on Omega / SwissTiming systems",
            "Regional engineering leaders for diagnostics, troubleshooting, and repairs",
            "SOCCS: championship race processing and start lists adhering to FINA / Lenex standards",
            "SwimVoice: advanced robotic acoustic engine for automated race announcements",
            "Direct synchronization with LED scoreboards, touchpads, and stadium video walls",
          ],
        },
        dokumentart: {
          name: "DokumentArt",
          tagline: "Public Procurement & Contract Management",
          description:
            "Dedicated compliance software for public institutions and procurement teams requiring strict tracking of legal procedures, tenders, and contracts.",
          features: [
            "Tracking of tender dossiers, appeal deadlines, and official announcements",
            "Bank guarantee tracking, delivery timelines, and performance bonds",
            "Real-time contract execution and annex monitoring",
            "Centralized document archive with instant search",
          ],
        },
      },
    },
    philosophy: {
      badge: "Craftsmanship & Life Philosophy",
      title: "Solutions Born in the Dust of Real Operations",
      quote:
        "Nothing, absolutely nothing was invented in ivory towers. Every idea we built was born in the dust where real problems happen. We solve the operational headache on the ground, while giving management 100% real-time insight and control.",
      intro:
        "This platform did not originate in sterile marketing agencies, but from 62 years of lived experience, network recoveries, relentless learning, and tackling impossible technical challenges.",
      point1Title: "Operational Relief, Total Executive Control",
      point1Desc:
        "Our core mission is to unburden the frontline workers — cashiers, receptionists, technicians, and stadium operators — while providing executive leadership with pristine, filtered, real-time data for strategic decisions.",
      point2Title: "A Synthesis of Engineering, Acoustics & Economics",
      point2Desc:
        "Formal degrees in mechanical engineering, higher music school, and economics — combined with decades in newspaper marketing and public enterprise leadership — are embedded in every line of code and every system.",
      point3Title: "The Peace of Finished Work at 5 AM",
      point3Desc:
        "Waking up at 5 AM eager to create something tangible and meaningful. Work that rejects shortcuts, tackling every technical obstacle until reaching an uncompromising solution.",
      point4Title: "Resilience & Solving the Impossible",
      point4Desc:
        "From reviving destroyed network infrastructures in record time to engineering platforms that run uninterrupted for years — true trust is earned exclusively on the field.",
      morningJoy:
        "“The joy of creating and the peace when looking back at the end of the day at massive work completed — that is what drives us every single morning.”",
    },
    portal: {
      badge: "Client Zone",
      title: "Tenant Self-Service Portal",
      subtitle:
        "Complete visibility and control over your software licenses, active modules, instant renewals, and downloads.",
      feature1Title: "Active Module Insights",
      feature1Desc:
        "Overview of your active license profile (ENTERSYS, FLUXAPOS, JAVNENABAVKE, SOCCS) and remaining subscription days.",
      feature2Title: "Instant Renewal & QR Payments",
      feature2Desc:
        "Generate payment slips with instant IPS QR codes for mobile banking. Licenses renew automatically upon payment.",
      feature3Title: "Official Updates Distribution",
      feature3Desc:
        "Direct access to certified system installations and update packages without complex manual setup.",
      feature4Title: "Knowledge Base & Support",
      feature4Desc:
        "Video walkthroughs, operator manuals, and direct contact with our engineering team for instant technical assistance.",
      loginCardTitle: "Tenant Access",
      loginCardHint: "Enter your organization identifier and password.",
      usernamePlaceholder: "e.g. aquana, fructatrade, sc_borik",
      passwordPlaceholder: "Your access password",
      loginBtn: "Sign In to Portal",
      demoNote: "Looking for a new license or turnkey demo? Contact us.",
    },
    footer: {
      tagline:
        "Engineering & creative ecosystem: 20 years of commercial audio production and turnkey HaaS/SaaS enterprise solutions for business, sports, and the public sector.",
      copyright: "Fluxa.ba & Studio TAF. All rights reserved.",
      location: "Banja Luka, Bosnia and Herzegovina",
      allRightsReserved: "All rights reserved.",
    },
  },
};
