import { previdenciario } from "./previdenciario";
import { civil } from "./civil";
import { bancario } from "./bancario";
import { imobiliario } from "./imobiliario";

export type ExtendedAreaSection = {
  id: string;
  h2: string;
  body: string[];
};

export type ExtendedAreaFaq = {
  question: string;
  answer: string;
};

export type ExtendedArea = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  h1: string;
  lead: string[];
  sections: ExtendedAreaSection[];
  faq: ExtendedAreaFaq[];
};

export const EXTENDED_AREAS: Record<string, ExtendedArea> = {
  previdenciario,
  civil,
  bancario,
  imobiliario,
};

export function getExtendedAreaBySlug(slug: string): ExtendedArea | undefined {
  return EXTENDED_AREAS[slug];
}
