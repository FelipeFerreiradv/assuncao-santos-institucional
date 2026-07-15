import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import {
  getAttorneySchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Advocacia na Mooca, São Paulo`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Advocacia na Mooca, São Paulo`,
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Advocacia na Mooca, São Paulo`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": `${SITE.region}, ${SITE.city}`,
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schemas = [
    getOrganizationSchema(),
    getAttorneySchema(),
    getWebsiteSchema(),
  ];

  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {schemas.map((schema, i) => (
          <JsonLd key={i} data={schema} id={`ld-${i}`} />
        ))}
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
