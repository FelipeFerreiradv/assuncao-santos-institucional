import Link from "next/link";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE, LEGAL_NOTICE } from "@/lib/site";
import { AREAS } from "@/content/areas";
import { fraseSintese } from "@/content/institucional";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { CurrentYear } from "@/components/shared/current-year";
import { Wordmark } from "@/components/layout/wordmark";

const telHref = `tel:${SITE.contact.phoneE164}`;
const LAUNCH_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-ink text-ivory">
      <div className="container-wide pt-24 pb-10 md:pt-32 md:pb-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ————— Marca ————— */}
          <div className="lg:col-span-4">
            <Wordmark tone="dark" />
            <p className="mt-6 max-w-xs font-display text-lg italic text-gold md:text-xl">
              {fraseSintese}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60 text-justify">
              {SITE.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram do escritório ${SITE.social.instagramHandle} (abre em nova aba)`}
                className="flex size-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-colors duration-500 ease-out-expo hover:border-gold hover:text-gold"
              >
                <Instagram aria-hidden strokeWidth={1.5} className="size-4" />
              </a>
              <a
                href={SITE.social.instagramLawyer}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram da ${SITE.lawyer.name} ${SITE.social.instagramLawyerHandle} (abre em nova aba)`}
                className="flex size-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-colors duration-500 ease-out-expo hover:border-gold hover:text-gold"
              >
                <Instagram aria-hidden strokeWidth={1.5} className="size-4" />
              </a>
              <WhatsAppCta
                label="Falar no WhatsApp"
                variant="link"
                size="none"
                className="ml-2 text-sm text-gold after:bg-gold"
              />
            </div>

            <p className="mt-8 text-[0.6875rem] font-medium uppercase tracking-luxe text-ivory/50">
              {SITE.lawyer.oab} · Sociedade {SITE.oabSociedade}
            </p>
          </div>

          {/* ————— Navegação ————— */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold">
              Navegação
            </h3>
            <nav aria-label="Navegação do rodapé" className="mt-7">
              <ul className="space-y-3 text-sm">
                {SITE.nav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ivory/70 transition-colors duration-500 ease-out-expo hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/faq"
                    className="text-ivory/70 transition-colors duration-500 ease-out-expo hover:text-ivory"
                  >
                    Perguntas frequentes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* ————— Áreas ————— */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold">
              Áreas de atuação
            </h3>
            <ul className="mt-7 space-y-3 text-sm">
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/atuacao/${area.slug}`}
                    className="text-ivory/70 transition-colors duration-500 ease-out-expo hover:text-ivory"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ————— Contato ————— */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold">
              Contato
            </h3>
            <address className="mt-7 space-y-5 text-sm not-italic leading-relaxed text-ivory/70">
              <p className="flex gap-3">
                <MapPin aria-hidden strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
                  <br />
                  CEP {SITE.address.zip}
                </span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{SITE.hours.label}</span>
              </p>
              <p>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-3 transition-colors duration-500 ease-out-expo hover:text-ivory"
                >
                  <Phone aria-hidden strokeWidth={1.5} className="size-4 text-gold" />
                  {SITE.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="inline-flex items-center gap-3 break-all transition-colors duration-500 ease-out-expo hover:text-ivory"
                >
                  <Mail aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-gold" />
                  {SITE.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* ————— Abrangência ————— */}
        <div className="mt-16 border-t border-ivory/10 pt-8">
          <p className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold">
            Atendemos em
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-ivory/60">
            {SITE.citiesServed.join(" · ")} — e clientes de todo o Brasil em atendimento online.
          </p>
        </div>

        {/* ————— Base legal ————— */}
        <div className="mt-12 border-t border-ivory/10 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-ivory/50 text-justify">
            {LEGAL_NOTICE}
          </p>
          <div className="mt-8 flex flex-col gap-4 border-t border-ivory/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-ivory/50">
              © <CurrentYear fallback={LAUNCH_YEAR} /> {SITE.name} · {SITE.legalName} · CNPJ{" "}
              {SITE.cnpj}
            </p>
            <nav aria-label="Links legais">
              <ul className="flex flex-wrap items-center gap-6 text-xs">
                <li>
                  <Link
                    href="/politica-de-privacidade"
                    className="text-ivory/50 transition-colors duration-500 hover:text-gold"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos-de-uso"
                    className="text-ivory/50 transition-colors duration-500 hover:text-gold"
                  >
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
