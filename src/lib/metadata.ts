import type { Metadata } from "next";
import { SITE } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Caminho absoluto do site, ex.: "/atuacao/previdenciario". */
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

const BASE_KEYWORDS = [
  "escritório de advocacia Mooca",
  "advogado Mooca",
  "advocacia São Paulo",
  "advogada previdenciária",
  "Assunção e Santos Advogados",
];

/**
 * Fábrica de metadata por página — canonical self-referencing, Open Graph,
 * Twitter, geo meta (Mooca/SP) e robots. O title recebe o sufixo da marca
 * automaticamente quando ainda não o contém.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  keywords = [],
  type = "website",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.shortName)
    ? title
    : `${title} | ${SITE.name}`;

  return {
    // `absolute` impede o template do layout de duplicar a marca no fim do title.
    title: { absolute: fullTitle },
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "pt_BR",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "BR-SP",
      "geo.placename": `${SITE.region}, ${SITE.city}`,
      "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
      ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    },
  };
}
