import { SITE } from "./site";
import { AREAS } from "@/content/areas";

/**
 * Builders de JSON-LD (schema.org) com @id cross-link — Organization/LegalService,
 * Attorney, WebSite (SearchAction), Service, BreadcrumbList, FAQPage e BlogPosting.
 * NAP consistente com o Google Meu Negócio. Sem aggregateRating (OAB).
 */

const ORG_ID = `${SITE.url}/#organization`;
const ATTORNEY_ID = `${SITE.url}/#attorney`;
const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.state,
  postalCode: SITE.address.zip,
  addressCountry: SITE.address.country,
} as const;

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LawFirm", "Attorney"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo-assuncao-santos.jpeg`,
    image: [`${SITE.url}${SITE.ogImage}`],
    description: SITE.description,
    slogan: SITE.tagline,
    telephone: SITE.contact.phoneE164,
    email: SITE.contact.email,
    priceRange: "$$",
    taxID: SITE.cnpj,
    foundingDate: String(SITE.founded),
    hasMap: SITE.address.mapsUrl,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    areaServed: [
      ...SITE.citiesServed.map((name) => ({ "@type": "City", name })),
      { "@type": "Country", name: "Brasil" },
    ],
    knowsAbout: [
      "Direito Previdenciário",
      "Aposentadoria negada pelo INSS",
      "Aposentadoria especial",
      "BPC/LOAS",
      "Direito Civil",
      "Direito Bancário",
      "Direito Imobiliário",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de Atuação",
      itemListElement: AREAS.map((a) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: a.name,
          url: `${SITE.url}/atuacao/${a.slug}`,
        },
      })),
    },
    founder: { "@id": ATTORNEY_ID },
    employee: { "@id": ATTORNEY_ID },
    sameAs: [SITE.social.instagram, SITE.social.instagramLawyer],
  };
}

export function getAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": ATTORNEY_ID,
    name: SITE.lawyer.shortName,
    honorificPrefix: "Dra.",
    jobTitle: `${SITE.lawyer.role} — ${SITE.lawyer.focus}`,
    identifier: SITE.lawyer.oab,
    url: `${SITE.url}/equipe/${SITE.lawyer.slug}`,
    image: [`${SITE.url}/images/fernanda-retrato.jpg`],
    telephone: SITE.contact.phoneE164,
    email: SITE.contact.email,
    worksFor: { "@id": ORG_ID },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Cruzeiro do Sul",
    },
    knowsAbout: [
      "Direito Previdenciário",
      "INSS",
      "Aposentadoria especial",
      "BPC/LOAS",
    ],
    address: postalAddress,
    sameAs: [SITE.social.instagramLawyer, SITE.social.instagram],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "pt-BR",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getServiceSchema(area: {
  slug: string;
  name: string;
  shortDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/atuacao/${area.slug}/#service`,
    serviceType: area.name,
    name: area.name,
    description: area.shortDescription,
    url: `${SITE.url}/atuacao/${area.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: [
      ...SITE.citiesServed.map((name) => ({ "@type": "City", name })),
      { "@type": "Country", name: "Brasil" },
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function getFaqSchema(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function getBlogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  keywords: string[];
}) {
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: post.title,
    description: post.description,
    inLanguage: "pt-BR",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@id": ATTORNEY_ID, name: post.author },
    publisher: { "@id": ORG_ID },
    image: [`${SITE.url}${SITE.ogImage}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
