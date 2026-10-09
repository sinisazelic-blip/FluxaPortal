import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fluxa.ba"),
  title: {
    default: "FLUXA.ba • Enterprise Software Ecosystem & Studio TAF Sound Heritage",
    template: "%s | FLUXA & Studio TAF",
  },
  description:
    "Sinergija robusnih ERP/POS platformi, kontrole pristupa i 20 godina vrhunske audio produkcije (Studio TAF). Banja Luka, Bosna i Hercegovina.",
  keywords: [
    "Fluxa",
    "Studio TAF",
    "Siniša Zelić",
    "EnterSYS",
    "ARGUS",
    "FluxaPOS",
    "PoolManager",
    "DokumentArt",
    "SOCCS",
    "SwimVoice",
    "Audio Produkcija",
    "ERP Cloud",
    "Fiskalna Kasa",
    "Kontrola Pristupa",
    "Banja Luka",
  ],
  authors: [{ name: "Studio TAF - Siniša Zelić" }],
  creator: "Siniša Zelić",
  publisher: "Studio TAF",
  openGraph: {
    type: "website",
    locale: "sr_BA",
    url: "https://fluxa.ba",
    siteName: "FLUXA & Studio TAF",
    title: "FLUXA.ba • Enterprise Software & Studio TAF Heritage",
    description:
      "20 godina audio inženjeringa i robusnih softverskih sistema. Studio TAF, Fluxa ERP, EnterSYS ARGUS kontrola pristupa i fiskalni sistemi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fluxa & Studio TAF Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLUXA.ba • Enterprise Software & Studio TAF",
    description:
      "20 godina audio inženjeringa i robusnih softverskih sistema. Banja Luka.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen antialiased selection:bg-cyan-600 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
