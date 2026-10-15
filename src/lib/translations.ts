export type Language = "sr" | "en";

export interface SlideItem {
  title: string;
  note: string;
  image?: string;
}

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
    continuityBadge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    exploreBtn: string;
    demoBtn: string;
    metrics: {
      continuity: string;
      projects: string;
      studioTaf: string;
      swissTiming: string;
    };
  };
  pillars: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    card1: {
      badge: string;
      tag: string;
      title: string;
      desc: string;
      link: string;
    };
    card2: {
      badge: string;
      title: string;
      desc: string;
      link: string;
    };
    card3: {
      badge: string;
      title: string;
      desc: string;
      link: string;
    };
    card4: {
      badge: string;
      title: string;
      desc: string;
      numberLabel: string;
    };
  };
  software: {
    badge: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    featuresLabel: string;
    screenPreview: string;
    prevSlide: string;
    nextSlide: string;
    slideSlot: string;
    autoScroll: string;
    benefitGain: string;
    demoBtnForFacility: string;
    requestOfferFor: string;
    zoomScreenshot: string;
    closeZoom: string;
    modelTitles: {
      haas: string;
      fluxar: string;
      soccs: string;
      pos: string;
      dokumentart: string;
      entersys: string;
      fluxa: string;
    };
    modelTexts: {
      haas: string;
      fluxar: string;
      soccs: string;
      pos: string;
      dokumentart: string;
      entersys: string;
      fluxa: string;
    };
    moduleSlides: {
      pos: SlideItem[];
      fluxar: SlideItem[];
      dokumentart: SlideItem[];
      entersys: SlideItem[];
      fluxa: SlideItem[];
      soccs: SlideItem[];
      haas: SlideItem[];
    };
    modules: {
      haas: {
        name: string;
        tagline: string;
        problem: string;
        solution: string;
        benefit: string;
        description: string;
        features: string[];
      };
      entersys: {
        name: string;
        tagline: string;
        problem: string;
        solution: string;
        benefit: string;
        description: string;
        features: string[];
      };
      pos: {
        name: string;
        tagline: string;
        problem: string;
        solution: string;
        benefit: string;
        description: string;
        features: string[];
      };
      fluxar: {
        name: string;
        tagline: string;
        problem: string;
        solution: string;
        benefit: string;
        description: string;
        features: string[];
      };
      fluxa: {
        name: string;
        tagline: string;
        problem: string;
        solution: string;
        benefit: string;
        description: string;
        features: string[];
      };
      soccs: {
        name: string;
        tagline: string;
        problem: string;
        solution: string;
        benefit: string;
        description: string;
        features: string[];
      };
      dokumentart: {
        name: string;
        tagline: string;
        problem: string;
        solution: string;
        benefit: string;
        description: string;
        features: string[];
      };
    };
  };
  studioTaf: {
    badgeHeader: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storySubBadge: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    metricStart: string;
    metricStartVal: string;
    metricTaf: string;
    metricTafVal: string;
    metricComm: string;
    metricRoster: string;
    metricRosterVal: string;
    musicEraBadge: string;
    musicEraTitle: string;
    musicEraDesc: string;
    artistsTitle: string;
    musicEraStatLabel: string;
    statNote: string;
    referencesTitle: string;
    referencesSubtitle: string;
    partnersAndCampaigns: string;
    viewBtn: string;
    referencesInArchive: string;
    closePreview: string;
    categories: {
      all: string;
      commercial: string;
      agencies: string;
      music: string;
      retail: string;
      finance: string;
      institutions: string;
    };
  };
  philosophy: {
    badge: string;
    title: string;
    quote: string;
    founderTitle: string;
    card1Tag: string;
    card2Tag: string;
    card3Tag: string;
    card4Tag: string;
    readMoreBtn: string;
    modalTitle: string;
    modalSubtitle: string;
    closeBtn: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    point4Title: string;
    point4Desc: string;
    morningJoy: string;
    fullStoryP1: string;
    fullStoryP2: string;
    fullStoryP3: string;
    fullStoryP4: string;
  };
  portal: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
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
    usernameLabel: string;
    usernamePlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    loginBtn: string;
    verifying: string;
    demoNote: string;
    requestDemoLink: string;
  };
  contactModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    moduleLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    thanksTitle: string;
    thanksDesc: string;
    closeBtn: string;
    city: string;
  };
  loginModal: {
    title: string;
    subtitle: string;
    usernameLabel: string;
    usernamePlaceholder: string;
    passwordLabel: string;
    loginBtn: string;
    checking: string;
    forgotText: string;
    supportLink: string;
  };
  sectionNav: {
    hero: string;
    pillars: string;
    solutions: string;
    studioTaf: string;
    portal: string;
    philosophy: string;
    ariaLabel: string;
    prev: string;
    next: string;
  };
  footer: {
    tagline: string;
    location: string;
    allRightsReserved: string;
    solutionsTitle: string;
    studioTitle: string;
    portalTitle: string;
    solutionsLinks: {
      cloud: string;
      pos: string;
      entersys: string;
      dokumentart: string;
      soccs: string;
      basepcb: string;
    };
    studioLinks: {
      taf: string;
      cortana: string;
      refs: string;
      heritage: string;
    };
    portalLinks: {
      login: string;
      renewal: string;
      updates: string;
    };
    craftsmanship: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  sr: {
    nav: {
      solutions: "Poslovna Rješenja",
      studioTaf: "Studio TAF Audio",
      heritage: "O Nama & Iskustvo",
      portal: "Korisnički Portal",
      contact: "Kontakt",
      tenantLogin: "Prijava Klijenta",
    },
    hero: {
      continuityBadge: "Četiri decenije inženjeringa i kontinuiteta • 1982 – 2026",
      title1: "Inženjerska rješenja i",
      titleHighlight: "tehnologija iza Vašeg",
      title2: "poslovanja.",
      subtitle:
        "Sveobuhvatna rješenja: od offline fiskalnih kasa i kontrole pristupa objektima, do digitalnih dokumenata i vrhunske audio produkcije.",
      exploreBtn: "Istražite Šta Radimo",
      demoBtn: "Zakažite Prezentaciju",
      metrics: {
        continuity: "godina kontinuiteta",
        projects: "završenih projekata",
        studioTaf: "godina Studio TAF",
        swissTiming: "godina SwissTiming",
      },
    },
    pillars: {
      badge: "Četiri stuba tehnološkog ekosistema",
      title1: "Gradimo Vaš oslonac za",
      titleHighlight: "sigurnu poslovnu transformaciju",
      subtitle:
        "Sveobuhvatna i dokazana rješenja prilagođena terenskim uslovima. Svaki modul radi pouzdano i samostalno, bez zastoja.",
      card1: {
        badge: "100% Autonomna Maloprodaja",
        tag: "Fiskalni POS & KIF Most",
        title: "FluxaPOS & FluxaR",
        desc: "Offline fiskalna kasa koja nikada ne staje čak i pri nestanku interneta, uz automatski knjigovodstveni most bez ručnog prekucavanja računa.",
        link: "Istražite kasu i most",
      },
      card2: {
        badge: "02 • Kontrola Pristupa & Tripodi",
        title: "EnterSYS / ARGUS Master",
        desc: "Mrežni tripodi, bazeni, dvorane i pametni ormarići povezani u industrijski ring visoke pouzdanosti.",
        link: "Mrežni prsten & prolazi",
      },
      card3: {
        badge: "03 • Poslovni Dokumenti & DMS",
        title: "DokumentArt DMS & 2FA",
        desc: "Elektronski djelovodnik, sjednice odbora i javne nabavke uz dvofaktorski kripto potpis sa QR pečatom.",
        link: "DMS & 2FA biometrija",
      },
      card4: {
        badge: "04 • Četiri decenije zvuka & borilišta",
        title: "Studio TAF & SOCCS Mjerenja",
        desc: "Preko 6.000 realizovanih komercijalnih audio projekata, 20 godina kontinuiteta Studio TAF-a i 15+ godina specijalizovanog vođenja SwissTiming borilišta na međunarodnim takmičenjima.",
        numberLabel: "komercijalna projekta",
      },
    },
    software: {
      badge: "FLUXA Softverska & Hardverska Rješenja",
      title: "Tehnologija Koja Rješava Realne Operativne Probleme",
      subtitle:
        "Ne prodajemo skupe kutije. Nudimo cjelovit sistem uz mjesečni zakup — isporučujemo opremu, konfigurišemo softver i obezbjeđujemo redovno održavanje.",
      problemLabel: "Problem na terenu:",
      solutionLabel: "Naše inženjersko rješenje:",
      featuresLabel: "Ključne funkcionalnosti:",
      screenPreview: "Prikaz Ekrana Sistema",
      prevSlide: "Prethodni prikaz",
      nextSlide: "Sljedeći prikaz",
      slideSlot: "Ekran sistema",
      autoScroll: "● Automatski Prikaz",
      benefitGain: "Šta vaše preduzeće dobija:",
      demoBtnForFacility: "Zakažite demonstraciju za vaš objekat",
      requestOfferFor: "Zatražite ponudu za",
      zoomScreenshot: "Uvećaj prikaz ekrana",
      closeZoom: "Zatvori",
      modelTitles: {
        haas: "Inženjerski HaaS Model:",
        fluxar: "Knjigovodstveni Tunel:",
        soccs: "SwissTiming Standard:",
        pos: "Pouzdanost Kase:",
        dokumentart: "DMS & Kripto Potpis:",
        entersys: "Kontrola Objekata:",
        fluxa: "Pouzdanost Sistema:",
      },
      modelTexts: {
        haas: "Ne kupujete opremu niti brinete o kvarovima. Isporučujemo hardver, montiramo i održavamo uz mjesečni zakup.",
        fluxar: "Knjigovodstvena agencija preuzima podatke bez nošenja fascikli i ručnog prekucavanja računa.",
        soccs: "15+ godina specijalizovanog iskustva na međunarodnim borilištima i FINA/Lenex takmičenjima.",
        pos: "Izdavanje računa i rad bez interneta sa direktnom fiskalizacijom i sinhronizacijom zaliha.",
        entersys: "Povezivanje mrežnih tripoda, bazena, dvorana i ormarića u jedan pregledan menadžerski centar.",
        dokumentart: "Objedinjeni dokument centar, sjednice NO/Skupštine, javne nabavke i dvofaktorski kripto potpis sa pravom opoziva.",
        fluxa: "Pregledno finansijsko upravljanje, cashflow likvidnost i automatsko rasknjižavanje.",
      },
      moduleSlides: {
        pos: [
          {
            title: "Prijava Operatera & PIN Zaštita",
            note: "Brza identifikacija operatera i konobara pomoću numeričkog PIN koda i nivoa ovlaštenja.",
            image: "/photo/FluxaPOS/FluxaPOS01.png",
          },
          {
            title: "2D Grafička Mapa Stolova & Džepni Konobar",
            note: "Interaktivni tlocrt sale sa statusom stolova, reonima i QR kodom za mobilno naručivanje.",
            image: "/photo/FluxaPOS/FluxaPOS02.png",
          },
          {
            title: "Glavni Touch Terminal & Brza Naplata",
            note: "Touchscreen izbor artikala, brza pretraga, prenos na stolove i trenutna fiskalizacija.",
            image: "/photo/FluxaPOS/FluxaPOS03.png",
          },
          {
            title: "Operativne Funkcije, Polog & Dnevni Z-Izvještaj",
            note: "Upravljanje smjenama, polog gotovine (F8), presjek stanja (X) i dnevni Z-kraj.",
            image: "/photo/FluxaPOS/FluxaPOS04.png",
          },
          {
            title: "Konfiguracija Profila & Režimi Rada",
            note: "Prilagođavanje za ugostiteljstvo, maloprodaju, biletarnice (karte), događaje ili hibridne objekte.",
            image: "/photo/FluxaPOS/FluxaPOS05.png",
          },
          {
            title: "TUNEL — Nadzorni Centar Koordinatora",
            note: "Pazari uživo, gotovina po konobarima u realnom vremenu, anti-theft nadzor i kontrola šanka.",
            image: "/photo/FluxaPOS/FluxaPOS06.png",
          },
        ],
        entersys: [
          {
            title: "ARGUS // Command Deck (Glavni Nadzor)",
            note: "Radarski prikaz ukupnog broja posjetilaca uživo, status mrežnog prstena i Master Sync sinhronizacija.",
            image: "/photo/Argus/Argus01.png",
          },
          {
            title: "Control Hub — Svi Servisi & Hardverski Moduli",
            note: "Centralni nadzorni centar: Enter Core, Kasa, Bazen, Dvorana, Tripodi, Ormarići i Recovery Doctor.",
            image: "/photo/Argus/Argus02.png",
          },
          {
            title: "Pool Manager — Gradski Olimpijski Bazen (GOB)",
            note: "2D satni raspored staza, termini plivačkih klubova (Olymp, Borac), škole plivanja i obrada posjeta.",
            image: "/photo/Argus/Argus03.png",
          },
          {
            title: "Locker — Upravljanje Pametnim Ormarićima",
            note: "Centralizovan nadzor elektro-ormarića, 12 klupskih svlačionica i RFID bezbjednosnih brava.",
            image: "/photo/Argus/Argus04.png",
          },
        ],
        fluxar: [
          {
            title: "Univerzalni Računovodstveni Most",
            note: "Povezivanje eksternih knjigovodstvenih servisa sa kasama i ERP sistemom preduzeća.",
            image: "/photo/FluxaR/FluxaR01.png",
          },
          {
            title: "Knjigovodstveni Izvoz & Analitika Prometa",
            note: "Jednim klikom prenos KIF i KUF knjiga, bankovnih izvoda, robnog prometa i JSON ERP paketa.",
            image: "/photo/FluxaR/FluxaR02.png",
          },
          {
            title: "Siguran Digitalni Tunel & Token Autorizacija",
            note: "Konfiguracija zaštićenog pristupa po komitentu sa kriptovanim autorizacionim ključem.",
            image: "/photo/FluxaR/FluxaR03.png",
          },
          {
            title: "Brzo Dodavanje Komitenata i Objekata",
            note: "Centralizovano vođenje više poslovnica, maloprodajnih kasa i ugostiteljskih jedinica.",
            image: "/photo/FluxaR/FluxaR04.png",
          },
        ],
        soccs: [
          {
            title: "SOCCS Launcher & Sistemski Servisi",
            note: "Brzo pokretanje SOCCS tajming servera, daljinskog terminala i SwimVoice glasovnog modula.",
            image: "/photo/SOCCS/SOCCS01.png",
          },
          {
            title: "Live Kontrola Borilišta (Staze 0 – 9)",
            note: "Praćenje trke u realnom vremenu po stazama, imena plivača, klubovi i brza prijava sudijskih odluka.",
            image: "/photo/SOCCS/SOCCS02.png",
          },
          {
            title: "Touch Tastatura za Redoslijed Ulaska u Cilj",
            note: "Ergonomski unos redoslijeda takmičara na cilju za vrhovnog sudiju i starter tim.",
            image: "/photo/SOCCS/SOCCS03.png",
          },
          {
            title: "Digitalna LED Štoperica & Precizna Vremena",
            note: "Prikaz izmjerenih vremena do stotinke sekunde sa automatskom verifikacijom zapisničkog stola.",
            image: "/photo/SOCCS/SOCCS04.png",
          },
          {
            title: "SwimVoice — Robotska Zvučna Najava Takmičara",
            note: "Automatizovane govorne najave plivača po stazama, audio sampler (himne, dodjele) i radio stream.",
            image: "/photo/SOCCS/SOCCS05.png",
          },
        ],
        dokumentart: [
          {
            title: "Kontrolna Tabla Javnih Nabavki & Plan",
            note: "Integrisano praćenje plana nabavki (robe, usluge, radovi), ugovorenih vrijednosti, limita i kalendara rokova.",
            image: "/photo/DokumentArt/doc01.png",
          },
          {
            title: "Elektronski Protokol & Zavođenje Akata",
            note: "Jedan zvanični broj = jedan digitalni zapis. Evidencija ulaznih, izlaznih i internih akata sa statusom e-potpisa.",
            image: "/photo/DokumentArt/doc02.png",
          },
        ],
        fluxa: [
          {
            title: "Novi Dinamički Radni Stolovi & Kalendar Dospijeća (FLUXA Core)",
            note: "Interaktivni operativni centar: živi radni sto sa kalendarom takmičenja i dospijeća, te 3 fokusirana administrativna stola za fakturisanje, banku i PDV analitiku.",
            image: "/photo/Fluxa/fluxa-newui.png",
          },
          {
            title: "Centralna Finansijska & Projektna Konzola (FLUXA Pult)",
            note: "Jedinstvena kontrolna tabla: operativne finansije (fakturisanje, KIF/KUF, izvodi, PDV), analitika profita po klijentu i praćenje projekata.",
            image: "/photo/Fluxa/fluxa.png",
          },
        ],
        haas: [
          {
            title: "0 KM Početnih Investicija (CAPEX = 0)",
            note: "Kompletna oprema — kontroleri prolaza, POS kase, touch ekrani i serveri — montira se bez kupovine i bez zaduživanja preduzeća.",
          },
          {
            title: "Ugovoreni SLA & Besplatna Zamjena",
            note: "Preventivno održavanje, redovni servisi i hitna zamjena uređaja u slučaju kvara na terenu bez dodatnih troškova.",
          },
          {
            title: "Predvidiv Mjesečni Operativni Trošak",
            note: "Jedinstvena mjesečna naknada koja objedinjuje opremu, softverske licence, podršku i nadogradnje — 100% poreski priznat trošak.",
          },
        ],
      },
      modules: {
        haas: {
          name: "Model „Ključ u Ruke” (HaaS & SaaS)",
          tagline: "Oprema, Softver i Održavanje Bez Velikih Početnih Ulaganja",
          problem: "Visoki početni troškovi nabavke opreme (tripodi, kase, serveri) i stalne brige oko popravki.",
          solution: "Kompletan zakup hardvera i softvera uz predvidivu mjesečnu naknadu i uključeno održavanje.",
          benefit: "Klijent čuva obrtni kapital i nema brige oko servisa — sistem funkcioniše besprijekorno.",
          description:
            "Korisnici dobijaju kompletan hardver (tripodi, touch kase, računari, ekrani) i softver uz stručnu montažu i podršku.",
          features: [
            "Bez velikih početnih ulaganja — predvidiv mjesečni trošak",
            "Isporuka po sistemu „ključ u ruke”: oprema, softver, mreža i montaža",
            "Uključeno redovno preventivno održavanje i brza zamjena uređaja",
            "Povezivanje sa MojRadio (ambijentalni zvuk) i MojTV (video ekrani)",
            "Jedna kontakt tačka za sve tehničke potrebe i podršku",
          ],
        },
        entersys: {
          name: "EnterSYS & ARGUS Master",
          tagline: "Kontrola Pristupa i Upravljanje Sportskim i Poslovnim Objektima",
          problem: "Gužve na ulazima, netačne evidencije posjeta, zloupotrebe karata i haos sa ključevima.",
          solution: "Industrijski kontroler ARGUS u realnom vremenu povezuje tripode, RFID narukvice i menadžere.",
          benefit: "Menadžment ima trenutan uvid u posjećenost i prihode, a prolaz posjetilaca je brz i siguran.",
          description:
            "Specijalizovan sistem za bazene, dvorane, stadione i teretane koji objedinjuje prodaju karata, tripode i ormariće.",
          features: [
            "ARGUS Master: industrijska pouzdanost upravljanja tripodima i rampama",
            "PoolManager: menadžer bazena, škola plivanja i pretplatnih karata",
            "GymManager & HallManager: članarine, termini i rezervacije dvorana",
            "Locker: elektronski ormarići sinhronizovani sa RFID narukvicama",
            "MojRadio & MojTV: ambijentalna muzika i oglasne video poruke u objektu",
            "Automatski izvještaji posjećenosti i finansijski presjeci po satima",
          ],
        },
        pos: {
          name: "FluxaPOS",
          tagline: "Brza Maloprodajna i Ugostiteljska Kasa",
          problem: "Prekidi rada pri padu interneta, spora naplata u špici i komplikovane kase.",
          solution: "Nativna Windows aplikacija optimizovana za touch ekrane sa 100% offline radom.",
          benefit: "Računi se izdaju trenutno, a kasa radi neprekidno čak i pri totalnom prekidu interneta.",
          description:
            "Pouzdana kasa za maloprodaju i ugostiteljstvo sa direktnom podrškom za fiskalne printere i bar-kod čitače.",
          features: [
            "Brz odabir artikala prilagođen touch ekranima i bar-kod skenerima",
            "Direktna komunikacija sa fiskalnim printerima",
            "Offline-first arhitektura: rad bez interneta uz kasniju sinhronizaciju",
            "Pregledno stanje zaliha i automatsko razduživanje po normativima",
            "Mogućnost samostalnog rada ili povezivanja u ARGUS ekosistem",
          ],
        },
        fluxar: {
          name: "FluxaR (Knjigovodstveni Most)",
          tagline: "Automatski Izvoz Podataka za Eksterna Knjigovodstva",
          problem: "Ručno prekucavanje knjiga prometa, papirni Z-izvještaji i gubljenje vremena na usklađivanje.",
          solution: "Siguran digitalni tunel kroz koji knjigovodstveni servisi preuzimaju sve podatke jednim klikom.",
          benefit: "Eliminisane greške u prekucavanju i ušteđeni sati rada i vlasniku i računovođi.",
          description:
            "Digitalni most koji podatke o prometu pakuje u formate prilagođene vodećim računovodstvenim softverima.",
          features: [
            "Preuzimanje podataka jednim klikom putem sigurnog tokena",
            "Automatski izvoz KIF knjiga i dnevnih Z-izvještaja",
            "Potpuna eliminacija ručnog unosa i tipfelera",
            "Podrška za vodeće regionalne računovodstvene programe",
            "Ušteda vremena i za preduzetnika i za knjigovodstveni biro",
          ],
        },
        fluxa: {
          name: "Fluxa Core (Cloud ERP)",
          tagline: "Krovni Poslovni i Operativni Menadžment",
          problem: "Podaci rasuti po tabelama, nepregledan cashflow i kašnjenje faktura.",
          solution: "Centralizovan sistem za praćenje projekata, fakturisanje, izvode i planiranje likvidnosti.",
          benefit: "Rukovodilac u svakom momentu zna stanje na računima, potraživanja, obaveze i profitabilnost.",
          description:
            "Cloud platforma za preduzeća koja žele potpunu finansijsku kontrolu i transparentnost u realnom vremenu.",
          features: [
            "Praćenje projekata od ponude do naplate",
            "Automatsko povezivanje bankarskih izvoda",
            "Planiranje likvidnosti i dospijeća obaveza",
            "Izdavanje predračuna, računa i e-faktura",
            "Pregledni menadžerski izvještaji na svim uređajima",
          ],
        },
        soccs: {
          name: "SOCCS & SwimVoice",
          tagline: "Specijalizovani Sistemi za Elektronska Mjerenja (SwissTiming / Omega)",
          problem: "Komplikovana organizacija takmičenja, obrada stotina rezultata i kašnjenje satnice.",
          solution: "Softver direktno povezan sa Omega mjernim uređajima uz robotsku zvučnu najavu takmičara.",
          benefit: "Besprekorna organizacija takmičenja po FINA standardima uz trenutne rezultate na semaforu.",
          description:
            "Rezultat 15+ godina rada na plivačkim borilištima. Objedinjuje startne liste, mjerenje vremena i automatizovane zvučne najave.",
          features: [
            "15+ godina terenskog iskustva na Omega i SwissTiming opremi",
            "Usklađenost sa FINA i Lenex pravilima takmičenja",
            "SwimVoice: govorna automatika za zvučne najave takmičara",
            "Direktna veza sa dodirnim pločama, startnim blokovima i semaforima",
            "Automatska izrada zapisnika, diploma i objava rezultata",
          ],
        },
        dokumentart: {
          name: "DokumentArt (DMS & Kripto Potpis)",
          tagline: "Objedinjeni Dokument Centar, Javne Nabavke i 2FA Kripto Potpis",
          problem: "Zatureni papiri, sporo odobravanje, rizik neovlaštenih potpisa u odsustvu direktora, rasute sjednice NO i propušteni žalbeni rokovi nabavki.",
          solution: "Jedinstven sistem za djelovodnik, predmete, sjednice organa i nabavke, sa dvofaktorskim digitalnim potpisom (mobilna biometrija/PIN + SHA-256 QR pečat) i pravom opoziva.",
          benefit: "Potpuna pravna i operativna sigurnost — svaki dokument se pronalazi za sekundu, a zloupotreba potpisa je tehnički onemogućena.",
          description:
            "Digitalni sistem upravljanja dokumentima (DMS) koji objedinjuje protokole, sjednice Uprave i NO, javne nabavke i zaštićeno digitalno potpisivanje sa mobilnom verifikacijom.",
          features: [
            "Elektronski djelovodnik: automatsko protokolisanje, raspoređivanje i arhiviranje akata",
            "Sjednice NO i Skupštine: kreiranje dnevnog reda, distribucija materijala i elektronsko glasanje",
            "Javne nabavke i ugovori: praćenje faza tendera, žalbenih rokova i bankarskih garancija",
            "Dvofaktorski digitalni potpis: mobilna push notifikacija i autorizacija biometrijom ili PIN-om",
            "Kriptografski SHA-256 heš i QR verifikacioni kod za trenutnu provjeru autentičnosti",
            "Pravo opoziva i uvid: ovlašćeno lice u realnom vremenu prati i po potrebi opoziva potpis",
          ],
        },
      },
    },
    studioTaf: {
      badgeHeader: "Kreativni Audio • Četiri Decenije Umjetnosti",
      title: "Vrhunski Komercijalni Audio i Četiri Decenije Muzičkog Iskustva",
      subtitle:
        "Studio TAF je specijalizovana kreativna cjelina FLUXA ekosistema posvećena radijskim i TV reklamama, audio brendingu i profesionalnom voiceover castingu.",
      storyTitle: "Od Studijskog Producenta 1982. do Specijalizovanog Audio Centra",
      storySubBadge: "Muzička Produkcija (1982) • Studio TAF (2006)",
      storyP1:
        "Put Siniše Zelića u svijetu zvuka započeo je 1982. godine tokom studija mašinstva. Kao aktivni muzičar, tonski inženjer i producent u regionalnim studijima, provodio je stotine sati u aranžiranju, snimanju instrumenata i vokala, te analogno-digitalnom miksu.",
      storyP2:
        "To stvaralačko doba obilježile su saradnje sa muzičkim velikanima i autorima — od Sanje Čolić Zelić, Massima Savića, Đavola, Dina Dvornika, Denis & Denis, Olivera Mandića, kultnog banjalučkog rock benda Big Bang, Revelation (Boris Relja project), do sastava Radio, Kovalsky project i BasDans.",
      storyP3:
        "Godine 2006. osnovan je Studio TAF (Turtle Audio Factory) sa jasnim komercijalnim fokusom: profesionalne radijske i TV reklame, audio identiteti brendova, voiceover casting sa više od 80 spikera i brza audio postprodukcija, sa više od 6.000 isporučenih projekata.",
      metricStart: "Početak Rada",
      metricStartVal: "1982. Godina",
      metricTaf: "Studio TAF",
      metricTafVal: "2006. (20 God.)",
      metricComm: "Komercijalni Audio",
      metricRoster: "Baza Spikera",
      metricRosterVal: "80+ Talenata",
      musicEraBadge: "Muzička & Komercijalna Istorija",
      musicEraTitle: "Zanat Izgrađen na Hiljadama Studijskih Sati",
      musicEraDesc:
        "Iskustvo rada sa najzahtjevnijim autorima i komercijalnim klijentima izgradilo je standard zvučne jasnoće i dinamike koji garantuje prepoznatljivost svakog zvučnog projekta.",
      artistsTitle: "Autori & Projekti Tokom Četiri Decenije:",
      musicEraStatLabel: "Realizovanih komercijalnih audio kampanja",
      statNote: "Komercijalni audio za radio i TV, audio identiteti i profesionalni voiceover casting",
      referencesTitle: "Izdvojene Reference & Saradnici",
      referencesSubtitle: "Jasno kategorisani projekti: direktni klijenti, agencijska produkcija i autorska muzička djela.",
      partnersAndCampaigns: "saradnika i kampanja",
      viewBtn: "Pregled",
      referencesInArchive: "referenci u bazi Studio TAF",
      closePreview: "Zatvori pregled",
      categories: {
        all: "Sve Reference",
        retail: "Tržni Lanci & Maloprodaja",
        finance: "Banke & Telekomunikacije",
        commercial: "Komercijalni Brendovi",
        agencies: "Agencijska Produkcija",
        institutions: "Institucije & Sport",
        music: "Muzički Projekti & Autori",
      },
    },
    philosophy: {
      badge: "Naša Filozofija & Korijeni",
      title: "Rješenja Nastala u Prašini Realnog Posla",
      quote:
        "Svaki sistem koji smo napravili nastao je tamo gdje se posao stvarno obavlja — u gužvi ulaza, na blagajni, u studijskoj sobi, na sportskoj stazi. Zato naša rješenja ne komplikuju život onima koji rade, a rukovodiocima daju mir i tačan uvid.",
      founderTitle: "Siniša Zelić • Osnivač & Glavni Inženjer",
      card1Tag: "Operativna jednostavnost • Tačan uvid",
      card2Tag: "Mašinstvo • Akustika • Ekonomija",
      card3Tag: "Posvećenost bez prečica",
      card4Tag: "Pouzdanost u praksi",
      readMoreBtn: "Pročitajte cijelu priču o četiri decenije",
      modalTitle: "Četiri Decenije Zanata — Priča o Nastanku Sistema",
      modalSubtitle: "1982 – 2026 • Četiri decenije razvoja",
      closeBtn: "Zatvori priču",
      point1Title: "Jednostavno onima koji rade, jasno onima koji vode",
      point1Desc:
        "Softver mora biti brz blagajniku i recepcioneru, a direktoru i vlasniku pružiti trenutan, tačan i sažet finansijski presjek.",
      point2Title: "Mašinska preciznost, akustički sluh i poslovni pregled",
      point2Desc:
        "Razumijevanje mehanike uređaja, muzički sluh za dinamiku i decenije vođenja preduzeća ugrađeni su u svaki proces.",
      point3Title: "Posvećenost svakom detalju bez prečica",
      point3Desc:
        "Svaki tehnički izazov rješavamo temeljno. Ne nudimo polovična rješenja, već robusne sisteme koji godinama rade bez problema.",
      point4Title: "Pouzdanost dokazana u realnoj praksi",
      point4Desc:
        "Od međunarodnih plivačkih prvenstava do najvećih tržnih centara i javnih preduzeća — povjerenje klijenata gradimo na terenu.",
      morningJoy:
        "„Najveći mir i zadovoljstvo donosi pošteno završen posao i svijest da smo napravili alat koji nekome olakšava svaki radni dan.“",
      fullStoryP1:
        "Put je započeo 1982. godine kada je Siniša Zelić, tada student mašinstva i muzičar, ušao u svijet studijskog snimanja. Rad u analognim studijima osamdesetih godina sa vodećim regionalnim autorima zahtijevao je disciplinu — svaka greška na magnetofonskoj traci bila je skupa. Taj standard preciznosti i zvučne čistoće ostao je temelj do danas.",
      fullStoryP2:
        "Prelazak na digitalne tehnologije krajem osamdesetih i početkom devedesetih donio je pionirsko iskustvo sa računarima i programiranjem — od Atarija do prvih digitalnih audio radnih stanica. Godine 2006. osnovan je Studio TAF, koji je postao jedan od najproduktivnijih komercijalnih tonskih studija u regiji, sa više od 6.000 isporučenih radijskih i TV reklama.",
      fullStoryP3:
        "Paralelno sa radom u studiju, više od 15 godina vođenja elektronskih mjerenja na Omega i SwissTiming sistemima stvorilo je potrebu za razvojem sopstvenih softverskih alata. Tako su nastali SOCCS i SwimVoice, a potom i EnterSYS za kontrolu prolaza i FluxaPOS za maloprodajne kase.",
      fullStoryP4:
        "Danas FLUXA objedinjuje sva ta iskustva u jedinstven koncept: rješenja po sistemu „ključ u ruke”. Klijenti ne moraju kupovati skupu opremu niti brinuti o servisima — mi obezbjeđujemo uređaje, podešavamo softver i brinemo o svemu, kako bi se klijenti mogli posvetiti svom poslu.",
    },
    portal: {
      badge: "Korisnički Portal",
      titlePrefix: "Zaštićena Zona za",
      titleHighlight: "Korisnike Licenci",
      subtitle:
        "Pregled aktivnih modula, instant preuzimanje uplatnica sa IPS QR kodom i pristup zvaničnim instalacionim paketima.",
      feature1Title: "Uvid u Aktivne Licence",
      feature1Desc:
        "Pregled vašeg licencnog profila (ENTERSYS, FLUXAPOS, JAVNENABAVKE, SOCCS) i preostalog perioda pretplate.",
      feature2Title: "Uplatnica sa IPS QR Kodom",
      feature2Desc:
        "Automatski generisana nalog-uplatnica sa IPS QR kodom za trenutno produženje licence putem mobilnog bankarstva.",
      feature3Title: "Zvanične Nadogradnje i Paketi",
      feature3Desc:
        "Preuzmite zvanične verzije softvera i pakete nadogradnji direktno preko autorizovanog Fluxa servisa.",
      feature4Title: "Korisnička Uputstva i Pomoć",
      feature4Desc:
        "Operativni priručnici za kasu, tripode i menadžere objekata, uz direktnu vezu sa tehničkom podrškom.",
      loginCardTitle: "Prijava na Korisnički Portal",
      loginCardHint: "Unesite identifikator vaše organizacije i lozinku.",
      usernameLabel: "Tenant Identifikator",
      usernamePlaceholder: "npr. aquana, fructatrade, sc_borik",
      passwordLabel: "Lozinka",
      passwordPlaceholder: "Vaša pristupna lozinka",
      loginBtn: "Prijavite se na Portal",
      verifying: "Provjera licence...",
      demoNote: "Želite novu licencu ili prezentaciju sistema za vaš objekat? Pošaljite nam upit.",
      requestDemoLink: "Zatražite instalaciju ili demo pristup →",
    },
    contactModal: {
      title: "Stupite u Kontakt",
      subtitle: "Pošaljite nam upit za softversku prezentaciju, licence ili audio produkciju.",
      nameLabel: "Ime i Prezime / Organizacija",
      namePlaceholder: "npr. Marko Marković",
      emailLabel: "Email Adresa",
      emailPlaceholder: "email@kompanija.ba",
      phoneLabel: "Telefon / Kontakt",
      phonePlaceholder: "+387 65...",
      moduleLabel: "Zainteresovani za modul",
      messageLabel: "Vaša Poruka / Detalji Projekta",
      messagePlaceholder: "Opišite vaše potrebe ili postavite pitanje...",
      submitBtn: "Pošaljite Upit",
      thanksTitle: "Hvala vam na javljanju!",
      thanksDesc: "Vaš upit je uspješno proslijeđen. Odgovorićemo vam u najkraćem roku.",
      closeBtn: "Zatvori",
      city: "Banja Luka, BiH",
    },
    loginModal: {
      title: "Tenant Korisnički Portal",
      subtitle: "Siguran pristup licencama i modulima",
      usernameLabel: "Tenant Identifikator",
      usernamePlaceholder: "npr. aquana, fructatrade, sc_borik",
      passwordLabel: "Lozinka",
      loginBtn: "Prijavite se na Portal",
      checking: "Provjera licence...",
      forgotText: "Zaboravili ste pristupne podatke ili trebate novu licencu?",
      supportLink: "Kontaktirajte tehničku podršku →",
    },
    sectionNav: {
      hero: "Početna",
      pillars: "Četiri Stuba",
      solutions: "Softver & HaaS",
      studioTaf: "Studio TAF",
      portal: "Tenant Portal",
      philosophy: "Filozofija",
      ariaLabel: "Navigacija po sekcijama",
      prev: "Prethodna sekcija",
      next: "Sljedeća sekcija",
    },
    footer: {
      tagline:
        "FLUXA tehnološka platforma i Studio TAF audio produkcija: cjelovita softverska i hardverska rješenja po sistemu zakupa i održavanja.",
      location: "Banja Luka, Bosna i Hercegovina",
      allRightsReserved: "Sva prava zadržana.",
      solutionsTitle: "Poslovna Rješenja",
      studioTitle: "Studio TAF & Istorija",
      portalTitle: "Klijentski Portal",
      solutionsLinks: {
        cloud: "Fluxa Cloud & ERP",
        pos: "FluxaPOS Maloprodaja",
        entersys: "EnterSYS & ARGUS Kontrola",
        dokumentart: "DokumentArt Javne Nabavke",
        soccs: "SOCCS & SwimVoice Timing",
        basepcb: "BasePCB Elektronika",
      },
      studioLinks: {
        taf: "Turtle Audio Factory (2006)",
        cortana: "Microsoft Cortana Dataset",
        refs: "Reference & Klijenti",
        heritage: "O Nama & Iskustvo",
      },
      portalLinks: {
        login: "Prijava za Tenante",
        renewal: "Instant QR Produženje",
        updates: "Update Centar",
      },
      craftsmanship: "Zanatstvo • Inženjering • Zvuk",
      backToTop: "Nazad na vrh",
    },
  },
  en: {
    nav: {
      solutions: "Business Solutions",
      studioTaf: "Studio TAF Audio",
      heritage: "About & Experience",
      portal: "Client Portal",
      contact: "Contact",
      tenantLogin: "Client Login",
    },
    hero: {
      continuityBadge: "Four decades of engineering and continuity • 1982 – 2026",
      title1: "Engineering solutions and",
      titleHighlight: "technology powering your",
      title2: "business operations.",
      subtitle:
        "End-to-end solutions: from offline fiscal checkouts and facility access control, to digital documents and premier audio production.",
      exploreBtn: "Explore Our Solutions",
      demoBtn: "Book a Live Demo",
      metrics: {
        continuity: "years of continuity",
        projects: "delivered projects",
        studioTaf: "years of Studio TAF",
        swissTiming: "years of SwissTiming",
      },
    },
    pillars: {
      badge: "Four pillars of our technology ecosystem",
      title1: "Building your foundation for",
      titleHighlight: "reliable business transformation",
      subtitle:
        "Comprehensive, field-proven solutions built for real operating conditions. Each module operates reliably and independently, without downtime.",
      card1: {
        badge: "100% Autonomous Retail",
        tag: "Fiscal POS & Accounting Bridge",
        title: "FluxaPOS & FluxaR",
        desc: "Offline fiscal checkout that never stops even during internet outages, with an automated bookkeeping bridge eliminating manual receipt entry.",
        link: "Explore checkout & bridge",
      },
      card2: {
        badge: "02 • Access Control & Turnstiles",
        title: "EnterSYS / ARGUS Master",
        desc: "Network turnstiles, aquatic centers, sports halls, and smart lockers unified in a high-reliability industrial ring.",
        link: "Network ring & access gates",
      },
      card3: {
        badge: "03 • Enterprise Documents & DMS",
        title: "DokumentArt DMS & 2FA",
        desc: "Digital correspondence registry, board sessions, and public procurement with 2FA cryptographic signing and QR seals.",
        link: "DMS & 2FA biometrics",
      },
      card4: {
        badge: "04 • Four decades of sound & arena timing",
        title: "Studio TAF & SOCCS Timing",
        desc: "Over 6,000 completed commercial audio projects, 20 years of Studio TAF continuity, and 15+ years of specialized SwissTiming arena operations at international championships.",
        numberLabel: "commercial projects",
      },
    },
    software: {
      badge: "FLUXA Software & Hardware Solutions",
      title: "Technology Engineered to Solve Real Operational Problems",
      subtitle:
        "We do not sell expensive boxes. We deliver turnkey systems on a monthly subscription — we deploy the hardware, configure the software, and provide continuous maintenance.",
      problemLabel: "Field Challenge:",
      solutionLabel: "Our Engineered Solution:",
      featuresLabel: "Key Capabilities:",
      screenPreview: "System Screen Preview",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      slideSlot: "System Screen",
      autoScroll: "● Auto Slideshow",
      benefitGain: "What Your Organization Gains:",
      demoBtnForFacility: "Schedule a live demo for your facility",
      requestOfferFor: "Request a proposal for",
      zoomScreenshot: "Expand screenshot view",
      closeZoom: "Close",
      modelTitles: {
        haas: "Turnkey HaaS Model:",
        fluxar: "Bookkeeping Tunnel:",
        soccs: "SwissTiming Standard:",
        pos: "Checkout Reliability:",
        dokumentart: "DMS & Crypto Signature:",
        entersys: "Facility Control:",
        fluxa: "System Reliability:",
      },
      modelTexts: {
        haas: "No upfront equipment purchases or repair worries. We supply hardware, install it, and provide ongoing maintenance on a monthly lease.",
        fluxar: "External accounting bureaus pull sales data directly without physical paper binders or manual receipt retyping.",
        soccs: "15+ years of specialized championship timing on international arenas and FINA/Lenex competitions.",
        pos: "Instant receipt printing and offline-first autonomy with native fiscalization and inventory sync.",
        entersys: "Unified management connecting network turnstiles, pools, arenas, and RFID smart lockers into one center.",
        dokumentart: "Unified document registry, Board/Assembly governance, public tenders, and 2FA digital signing with revocation rights.",
        fluxa: "Clear financial management, predictive cashflow liquidity, and automated ledger matching.",
      },
      moduleSlides: {
        pos: [
          {
            title: "Operator Sign-In & PIN Security",
            note: "Rapid cashier and waiter authentication via numeric PIN keypad with tiered role permissions.",
            image: "/photo/FluxaPOS/FluxaPOS01.png",
          },
          {
            title: "2D Interactive Floor Plan & Mobile Waiter",
            note: "Live table layout with occupancy states, service zones, and instant mobile waiter QR ordering.",
            image: "/photo/FluxaPOS/FluxaPOS02.png",
          },
          {
            title: "Main Touchscreen Terminal & Fast Checkout",
            note: "Visual menu categories, rapid item search, split checks, and instant fiscal receipt printing.",
            image: "/photo/FluxaPOS/FluxaPOS03.png",
          },
          {
            title: "Operations Hub, Cash Float & Daily Z-Report",
            note: "Shift reconciliation, cash float entries (F8), X-readings, and daily fiscal closeouts.",
            image: "/photo/FluxaPOS/FluxaPOS04.png",
          },
          {
            title: "Profile Configuration & Operational Modes",
            note: "Tailored setups for hospitality, retail, ticketing turnstiles, events, or hybrid facilities.",
            image: "/photo/FluxaPOS/FluxaPOS05.png",
          },
          {
            title: "TUNEL — Real-Time Facility Oversight",
            note: "Live shift revenue, waiter cash float tracking, anti-theft audits, and bar inventory control.",
            image: "/photo/FluxaPOS/FluxaPOS06.png",
          },
        ],
        entersys: [
          {
            title: "ARGUS // Command Deck (Main Console)",
            note: "Live radar visitor headcount, industrial network ring status, and bidirectional Master Sync.",
            image: "/photo/Argus/Argus01.png",
          },
          {
            title: "Control Hub — Unified Hardware & Services Matrix",
            note: "Unified management center: Enter Core, POS, Pool Manager, Turnstiles, Lockers, and Diagnostics.",
            image: "/photo/Argus/Argus02.png",
          },
          {
            title: "Pool Manager — Aquatic Center & Lane Scheduling",
            note: "2D hourly lane timeline, club allocations (Olymp, Borac), swim schools, and attendance metrics.",
            image: "/photo/Argus/Argus03.png",
          },
          {
            title: "Locker — Smart Locker & Dressing Room Control",
            note: "Centralized electronic locker monitoring, 12 team club dressing rooms, and RFID security locks.",
            image: "/photo/Argus/Argus04.png",
          },
        ],
        fluxar: [
          {
            title: "Universal Accounting & Bookkeeping Bridge",
            note: "Direct digital bridge connecting external bookkeeping firms with checkouts and enterprise ERP.",
            image: "/photo/FluxaR/FluxaR01.png",
          },
          {
            title: "One-Click Ledger Export & Revenue Analytics",
            note: "Instant export of sales ledgers (KIF/KUF), bank statements, inventory movements, and ERP JSON.",
            image: "/photo/FluxaR/FluxaR02.png",
          },
          {
            title: "Secure Digital Tunnel & Token Authorization",
            note: "Encrypted client connection setup with authorized security tokens and live connection testing.",
            image: "/photo/FluxaR/FluxaR03.png",
          },
          {
            title: "Multi-Tenant Client & Facility Management",
            note: "Centralized management of multiple retail branches, food venues, and POS registers.",
            image: "/photo/FluxaR/FluxaR04.png",
          },
        ],
        soccs: [
          {
            title: "SOCCS Launcher & Unified Timing Services",
            note: "Rapid launch console for SOCCS timing server, remote operator clients, and SwimVoice audio engine.",
            image: "/photo/SOCCS/SOCCS01.png",
          },
          {
            title: "Live Championship Arena Console (Lanes 0 – 9)",
            note: "Real-time race tracking across all lanes, athlete rosters, and instant referee event calls.",
            image: "/photo/SOCCS/SOCCS02.png",
          },
          {
            title: "Touch Finish Order Input Pad",
            note: "High-speed finish touch-pad for Chief Judge and Starter crew with collision prevention.",
            image: "/photo/SOCCS/SOCCS03.png",
          },
          {
            title: "Digital Arena Stopwatch & Exact Finish Times",
            note: "Precision timing breakdown down to thousandths of a second with recorded splits.",
            image: "/photo/SOCCS/SOCCS04.png",
          },
          {
            title: "SwimVoice — Robotic Voice Announcement Engine",
            note: "Automated speech synthesis for athlete callouts, ceremonial anthem sampler, and venue audio.",
            image: "/photo/SOCCS/SOCCS05.png",
          },
        ],
        dokumentart: [
          {
            title: "Public Procurement Dashboard & Plan",
            note: "Integrated monitoring of procurement plans (goods, services, works), contract values, thresholds, and legal deadlines.",
            image: "/photo/DokumentArt/doc01.png",
          },
          {
            title: "Digital Protocol & Document Registry",
            note: "One official reference number = one immutable digital record. Central tracking of incoming, outgoing, and internal acts.",
            image: "/photo/DokumentArt/doc02.png",
          },
        ],
        fluxa: [
          {
            title: "Modern Dynamic Work Desks & Due Date Calendar (FLUXA Core)",
            note: "Interactive operations cockpit: living dynamic desk with competition and due date calendar, plus 3 focused administrative desks for invoicing, banking, and VAT analytics.",
            image: "/photo/Fluxa/fluxa-newui.png",
          },
          {
            title: "Central Financial & Project Console (FLUXA Classic Pult)",
            note: "Unified management cockpit: operational finances (invoicing, KIF/KUF, bank feeds, VAT), client profit analytics, and project lifecycles.",
            image: "/photo/Fluxa/fluxa.png",
          },
        ],
        haas: [
          {
            title: "Zero Upfront Capital (CAPEX = 0)",
            note: "Complete equipment turnkey delivery — access gates, POS touch terminals, and server hubs — deployed without purchasing or debt.",
          },
          {
            title: "Contracted SLA & Free Field Replacement",
            note: "Preventative servicing, continuous maintenance, and immediate on-site hardware swap in case of failure at no extra charge.",
          },
          {
            title: "Predictable Monthly Operating Expense",
            note: "A single monthly operational fee covering hardware, software licenses, updates, and engineering support — 100% tax deductible.",
          },
        ],
      },
      modules: {
        haas: {
          name: "Turnkey Model (HaaS & SaaS)",
          tagline: "Hardware, Software and Maintenance with Zero Large Upfront Capex",
          problem: "High upfront capital costs to purchase hardware (turnstiles, POS, servers) and constant friction with repairs.",
          solution: "Complete hardware and software rental under a predictable monthly subscription with included maintenance and unit replacements.",
          benefit: "Clients protect their cash flow and eliminate maintenance overhead — operations run seamlessly under a fixed operating fee.",
          description:
            "Enterprises receive complete turnkey hardware (turnstiles, POS touchscreens, computers, signage) and software with professional installation and technical support.",
          features: [
            "Zero large upfront investment — predictable monthly operating expense",
            "Turnkey delivery: hardware, software, networking, and setup",
            "Included preventative maintenance, repairs, and hardware replacements",
            "Direct integration with MojRadio (background audio) and MojTV (digital screens)",
            "Single dedicated point of contact for technical support",
          ],
        },
        entersys: {
          name: "EnterSYS & ARGUS Master",
          tagline: "Access Control and Sports Facility Management",
          problem: "Gate bottlenecks, inaccurate visitor counts, ticket reuse, and unmanaged locker allocations.",
          solution: "Industrial controller ARGUS synchronizes network turnstiles, RFID wristbands, pool and arena managers in real time.",
          benefit: "Management has real-time insight into attendance and revenue, while visitor throughput is fast and automated.",
          description:
            "Specialized system for aquatic centers, sports halls, stadiums, and gyms uniting ticketing, turnstiles, and smart locker control.",
          features: [
            "ARGUS Master: industrial reliability for network turnstiles and gates",
            "PoolManager: management of swimming complexes, swim schools, and season passes",
            "GymManager & HallManager: membership management and arena court reservations",
            "Locker: electronic smart lockers synchronized with RFID access wristbands",
            "MojRadio & MojTV: automated venue background audio and screen announcements",
            "Real-time attendance and hourly revenue breakdown reporting",
          ],
        },
        pos: {
          name: "FluxaPOS",
          tagline: "High-Speed Retail & Hospitality Checkout",
          problem: "Checkout interruptions during internet drops, slow peak-hour transactions, and difficult UI.",
          solution: "Native Windows POS built for touchscreens and barcode scanning with 100% offline-first resilience.",
          benefit: "Instant receipt printing and uninterrupted checkouts even during complete network outages.",
          description:
            "Reliable retail and hospitality checkout software with direct native drivers for fiscal printers, barcode scanners, and customer displays.",
          features: [
            "Fast item lookup optimized for touchscreen and barcode workflows",
            "Direct native interface with fiscal printers",
            "Offline-first architecture: seamless operation without internet with auto-sync",
            "Real-time inventory deduction and recipe management",
            "Standalone operation or integrated with the ARGUS ecosystem",
          ],
        },
        fluxar: {
          name: "FluxaR (Accounting Bridge)",
          tagline: "Automated Data Bridge for External Accounting Bureaus",
          problem: "Manual retyping of sales books, paper Z-reports, and lost time reconciling records.",
          solution: "Secure digital tunnel allowing accounting bureaus to pull all sales ledgers, Z-reports, and invoices with a single click.",
          benefit: "Completely eliminates manual typing mistakes and saves dozens of bookkeeping hours every month.",
          description:
            "Digital bridge packaging daily POS receipts and sales books into formats directly readable by leading accounting software.",
          features: [
            "One-click data retrieval via secure authorized tokens",
            "Automated export of sales books (KIF) and daily Z-reports",
            "Complete elimination of manual data entry errors",
            "Standardized exports compatible with major regional accounting packages",
            "Time savings for both business owners and accounting firms",
          ],
        },
        fluxa: {
          name: "Fluxa Core (Cloud ERP)",
          tagline: "Enterprise & Operations Platform",
          problem: "Scattered data across spreadsheets, unclear liquidity projections, and delayed billing.",
          solution: "Integrated platform for project lifecycles, automated invoicing, bank statement matching, and cashflow planning.",
          benefit: "Leadership has continuous visibility over bank balances, payables, receivables, and job profitability.",
          description:
            "Cloud management platform designed for service companies and enterprises needing real-time financial transparency.",
          features: [
            "Project lifecycle management from initial brief to payment receipt",
            "Automated bank statement reconciliation",
            "Operative liquidity forecasting with clear payable schedules",
            "Electronic invoice generation and automated tax ledger bookkeeping",
            "Executive dashboards accessible from any device",
          ],
        },
        soccs: {
          name: "SOCCS & SwimVoice",
          tagline: "Precision Sports Timing (SwissTiming / Omega)",
          problem: "Complex meet organization, processing hundreds of athlete times, and schedule delays.",
          solution: "Dedicated software platform directly interfaced with Omega timing devices and scoreboards, featuring robotic voice announcements.",
          benefit: "Championship-grade execution complying with FINA/Lenex standards with instant live results.",
          description:
            "Engineered through 15+ years of live championship timing. Unites start list generation, race time processing, and automated announcements.",
          features: [
            "15+ years of field expertise on Omega and SwissTiming equipment",
            "Full compliance with international FINA and Lenex competition rules",
            "SwimVoice: automated acoustic engine for robotic competitor callouts",
            "Direct interface with touchpad sensors, start blocks, and LED video walls",
            "Instant generation of official meet records, diplomas, and final ranks",
          ],
        },
        dokumentart: {
          name: "DokumentArt (DMS & Signature)",
          tagline: "Complete Document Center, Public Procurement & 2FA Crypto Signature",
          problem: "Lost paper trails, delayed approvals, risk of unauthorized signatures during director absence, scattered Board/Assembly minutes, and missed tender deadlines.",
          solution: "Unified system for incoming/outgoing registry, document workflows, Board/Assembly governance meetings, and public procurement, with 2FA cryptographic digital signature (mobile biometrics/PIN + SHA-256 QR seal) and executive revocation rights.",
          benefit: "Maximum legal and operational security — find any document in seconds, while signature forgery and unauthorized execution become technically impossible.",
          description:
            "Enterprise digital document center and workflow (DMS) integrating correspondence protocols, Board/Assembly sessions, public tenders, and protected digital signing with mobile verification.",
          features: [
            "Digital registry: recording incoming/outgoing correspondence, protocols, and case routing",
            "Supervisory Board, Assembly & executive meeting management with archived resolutions and minutes",
            "Public procurement & contracts: monitoring tender phases, appeal deadlines, and bank guarantees",
            "Two-factor digital signature: instant mobile push notification and biometric/PIN authorization",
            "SHA-256 cryptographic hash and QR code for instant authenticity verification anywhere",
            "Delegated signing control: executive leadership monitors delegate signatures in real-time with revocation rights",
          ],
        },
      },
    },
    studioTaf: {
      badgeHeader: "Creative Audio • Four Decades of Artistry",
      title: "Premier Commercial Audio & Four Decades of Sound Craftsmanship",
      subtitle:
        "Studio TAF is the dedicated creative audio division of the FLUXA ecosystem, focused on radio and TV commercials, sonic branding, and professional voiceover casting.",
      storyTitle: "From 1982 Studio Producer to Specialized Commercial Audio Hub",
      storySubBadge: "Music Production (1982) • Studio TAF (2006)",
      storyP1:
        "Siniša Zelić's journey in audio engineering began in 1982 while studying mechanical engineering. As an active musician, audio engineer, and producer in regional studios, he spent hundreds of hours in live tracking, vocal recording, and analog-to-digital post-production.",
      storyP2:
        "That golden era featured collaborations with legendary regional music artists and authors — Sanja Čolić Zelić, Massimo Savić, Đavoli, Dino Dvornik, Denis & Denis, Oliver Mandić, iconic rock band Big Bang, Revelation (Boris Relja project), Radio, Kovalsky project, and BasDans.",
      storyP3:
        "In 2006, Studio TAF was established with a dedicated commercial mission: premium radio and TV ads, sonic brand identities, voiceover casting with over 80 talents, and audio post-production, delivering more than 6,000 completed campaigns.",
      metricStart: "Started In",
      metricStartVal: "Year 1982",
      metricTaf: "Studio TAF",
      metricTafVal: "2006 (20 Yrs)",
      metricComm: "Commercial Audio",
      metricRoster: "Voice Roster",
      metricRosterVal: "80+ Talents",
      musicEraBadge: "Music & Commercial Audio Heritage",
      musicEraTitle: "Craftsmanship Forged in Thousands of Studio Hours",
      musicEraDesc:
        "Decades of working with demanding artists and commercial clients established an uncompromising acoustic benchmark for dynamics and clarity in every production.",
      artistsTitle: "Artists & Collaborations Across Four Decades:",
      musicEraStatLabel: "Commercial audio campaigns delivered",
      statNote: "Commercial radio and TV audio, sonic branding, and professional voiceover casting",
      referencesTitle: "Selected References & Partners",
      referencesSubtitle: "Transparently categorized: direct corporate clients, agency coproductions, and authorial music works.",
      partnersAndCampaigns: "partners & campaigns",
      viewBtn: "View",
      referencesInArchive: "references in Studio TAF archive",
      closePreview: "Close preview",
      categories: {
        all: "All References",
        retail: "Retail & Supermarkets",
        finance: "Banking & Telecom",
        commercial: "Commercial Brands",
        agencies: "Agency Productions",
        institutions: "Institutions & Sports",
        music: "Music Productions & Artists",
      },
    },
    philosophy: {
      badge: "Our Philosophy & Roots",
      title: "Solutions Born in the Dust of Real Operations",
      quote:
        "Every system we built was created where real work happens — in the bustle of venue gates, at checkout counters, in recording studios, and on sports tracks. That is why our tools deliver effortless operation on the ground and crystal-clear visibility for management.",
      founderTitle: "Siniša Zelić • Founder & Lead Engineer",
      card1Tag: "Operational simplicity • Precise insight",
      card2Tag: "Engineering • Acoustics • Economics",
      card3Tag: "Dedication without shortcuts",
      card4Tag: "Field-tested reliability",
      readMoreBtn: "Read the full story of our four decades",
      modalTitle: "Four Decades of Craftsmanship — The Story Behind Our Systems",
      modalSubtitle: "1982 – 2026 • Four decades of engineering",
      closeBtn: "Close story",
      point1Title: "Simple for Frontline Workers, Clear for Leadership",
      point1Desc:
        "Software must be lightning-fast for the cashier and receptionist, while providing executive management with accurate, real-time financial reporting.",
      point2Title: "Mechanical Rigor, Acoustic Precision & Business Insight",
      point2Desc:
        "Understanding hardware mechanics, musical precision for acoustics, and decades of business leadership are built into every solution.",
      point3Title: "Commitment to Every Detail",
      point3Desc:
        "We solve technical challenges completely. We do not offer halfway fixes, but robust systems that operate reliably for years.",
      point4Title: "Reliability Proven in the Field",
      point4Desc:
        "From international sports championships to leading retail networks and public enterprises — client trust is earned through performance on the ground.",
      morningJoy:
        "“True peace and satisfaction come from honest, completed work and building tools that make daily operations simpler for our clients.”",
      fullStoryP1:
        "This journey began in 1982 when Siniša Zelić, then a mechanical engineering student and active musician, entered the world of studio recording. Working in analog 1980s studios with leading regional artists demanded absolute discipline — every mistake on magnetic tape was costly. That standard of precision and acoustic clarity remains a core foundation.",
      fullStoryP2:
        "The digital transition in the late 1980s and 1990s brought pioneering hardware and programming experience — from Atari computers to early digital audio workstations. In 2006, Studio TAF was founded, quickly becoming one of the most productive commercial audio studios in the region, delivering over 6,000 radio and TV commercials.",
      fullStoryP3:
        "Alongside studio operations, more than 15 years directing electronic sports timing on Omega and SwissTiming systems created the necessity to build custom software. This gave birth to SOCCS and SwimVoice, and subsequently to EnterSYS for access control and FluxaPOS for retail checkouts.",
      fullStoryP4:
        "Today, FLUXA unites these decades of experience into complete turnkey business solutions. Clients do not need to invest heavily in hardware or stress over repairs — we supply the equipment, configure the software, and maintain everything continuously so our clients can focus entirely on growing their business.",
    },
    portal: {
      badge: "Client Portal",
      titlePrefix: "Protected Zone for",
      titleHighlight: "Licensed Clients",
      subtitle:
        "Instant overview of active modules, automated payment slips with IPS QR codes, and direct access to official release packages.",
      feature1Title: "Active Module Insights",
      feature1Desc:
        "Overview of your active license profile (ENTERSYS, FLUXAPOS, JAVNENABAVKE, SOCCS) and remaining subscription days.",
      feature2Title: "Payment Slips with IPS QR Code",
      feature2Desc:
        "Generate standardized payment slips with instant IPS QR codes for mobile banking.",
      feature3Title: "Official Updates & Releases",
      feature3Desc:
        "Access official installation files and system updates directly through the secure Fluxa service.",
      feature4Title: "Documentation & Technical Support",
      feature4Desc:
        "Operator guides for POS, turnstiles, and facility managers, with direct access to technical support.",
      loginCardTitle: "Sign In to Client Portal",
      loginCardHint: "Enter your organization username and password.",
      usernameLabel: "Organization Identifier",
      usernamePlaceholder: "e.g. aquana, fructatrade, sc_borik",
      passwordLabel: "Password",
      passwordPlaceholder: "Your access password",
      loginBtn: "Sign In to Portal",
      verifying: "Verifying license...",
      demoNote: "Looking for a new license or a turnkey demo for your facility? Send us an inquiry.",
      requestDemoLink: "Request installation or demo access →",
    },
    contactModal: {
      title: "Get in Touch",
      subtitle: "Send us an inquiry for software presentations, licensing, or audio production.",
      nameLabel: "Full Name / Organization",
      namePlaceholder: "e.g. John Doe / Company",
      emailLabel: "Email Address",
      emailPlaceholder: "email@company.com",
      phoneLabel: "Phone / Contact",
      phonePlaceholder: "+387 65...",
      moduleLabel: "Interested in module",
      messageLabel: "Your Message / Project Details",
      messagePlaceholder: "Describe your operational needs or questions...",
      submitBtn: "Submit Inquiry",
      thanksTitle: "Thank you for reaching out!",
      thanksDesc: "Your inquiry has been submitted. We will get back to you shortly.",
      closeBtn: "Close",
      city: "Banja Luka, Bosnia and Herzegovina",
    },
    loginModal: {
      title: "Tenant Client Portal",
      subtitle: "Secure access to licenses and modules",
      usernameLabel: "Organization Identifier",
      usernamePlaceholder: "e.g. aquana, fructatrade, sc_borik",
      passwordLabel: "Password",
      loginBtn: "Sign In to Portal",
      checking: "Verifying license...",
      forgotText: "Forgot credentials or need a new license?",
      supportLink: "Contact technical support →",
    },
    sectionNav: {
      hero: "Home",
      pillars: "Four Pillars",
      solutions: "Software & HaaS",
      studioTaf: "Studio TAF",
      portal: "Client Portal",
      philosophy: "Philosophy",
      ariaLabel: "Section navigation",
      prev: "Previous section",
      next: "Next section",
    },
    footer: {
      tagline:
        "FLUXA technology platform and Studio TAF audio production: complete software and hardware solutions under a turnkey lease and maintenance model.",
      location: "Banja Luka, Bosnia and Herzegovina",
      allRightsReserved: "All rights reserved.",
      solutionsTitle: "Business Solutions",
      studioTitle: "Studio TAF & Heritage",
      portalTitle: "Client Portal",
      solutionsLinks: {
        cloud: "Fluxa Cloud & ERP",
        pos: "FluxaPOS Retail",
        entersys: "EnterSYS & ARGUS Control",
        dokumentart: "DokumentArt Public Procurement",
        soccs: "SOCCS & SwimVoice Timing",
        basepcb: "BasePCB Electronics",
      },
      studioLinks: {
        taf: "Turtle Audio Factory (2006)",
        cortana: "Microsoft Cortana Dataset",
        refs: "References & Clients",
        heritage: "About & Experience",
      },
      portalLinks: {
        login: "Client Login",
        renewal: "Instant QR Renewal",
        updates: "Update Center",
      },
      craftsmanship: "Craftsmanship • Engineering • Sound",
      backToTop: "Back to top",
    },
  },
};
