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
      <div className="container-luxe pt-20 pb-10 md:pt-28 md:pb-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Marca + tagline */}
          <div className="lg:col-span-4">
            <Wordmark tone="dark" />
            <p className="mt-6 max-w-xs font-display text-lg italic text-gold md:text-xl">
              {fraseSintese}
            </p>
            <p className="mt-5 text-[0.6875rem] font-medium uppercase tracking-luxe text-ivory/50">
              {SITE.lawyer.oab} · Sociedade {SITE.oabSociedade}
            </p>
          </div>

          {/* Contato (NAP) */}
          <div className="lg:col-span-4">
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

          {/* Navegação + Áreas */}
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
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-2">
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
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${SITE.social.instagramHandle} (abre em nova aba)`}
                className="inline-flex items-center gap-2.5 text-sm text-ivory/70 transition-colors duration-500 ease-out-expo hover:text-ivory"
              >
                <Instagram aria-hidden strokeWidth={1.5} className="size-4 text-gold" />
                {SITE.social.instagramHandle}
              </a>
              <WhatsAppCta
                label="Falar no WhatsApp"
                variant="link"
                size="none"
                className="text-sm text-gold after:bg-gold"
              />
            </div>
          </div>
        </div>

        {/* Atendemos em */}
        <div className="mt-16 border-t border-ivory/10 pt-8">
          <p className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold">
            Atendemos em
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ivory/60">
            {SITE.citiesServed.join(" · ")} — e clientes de todo o Brasil em atendimento online.
          </p>
        </div>

        {/* Aviso legal + créditos */}
        <div className="mt-12 border-t border-ivory/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-ivory/50">{LEGAL_NOTICE}</p>
          <p className="mt-8 text-xs text-ivory/50">
            © <CurrentYear fallback={LAUNCH_YEAR} /> {SITE.name} · {SITE.lawyer.oab} ·{" "}
            {SITE.legalName} · CNPJ {SITE.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
