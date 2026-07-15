import type { Metadata } from "next";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { ContactForm } from "@/components/shared/contact-form";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com o Assunção & Santos Advogados na Mooca, São Paulo. WhatsApp, telefone, e-mail e endereço. Atendimento presencial e online em todo o Brasil.",
  path: "/contato",
  keywords: ["contato advogado Mooca", "escritório de advocacia Mooca endereço"],
});

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Contato", url: "/contato" },
        ])}
        id="ld-breadcrumb"
      />

      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu caso."
        intro="A primeira conversa é reservada e sem compromisso. O caminho mais rápido é pelo WhatsApp — mas você escolhe."
        crumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <section className="relative isolate overflow-hidden bg-ivory py-16 md:py-24">
        <SectionCanvas curves="top-right" glow={["gold-tr"]} />
        <div className="container-luxe grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Informações */}
          <div className="lg:col-span-5">
            <div className="border border-gold/25 bg-paper p-8">
              <p className="flex items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                <MessageCircle aria-hidden strokeWidth={1.75} className="size-4" />
                Fale agora
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                O primeiro contato acontece pelo WhatsApp, no seu tempo. A partir dele,
                agendamos uma conversa presencial na Mooca ou online.
              </p>
              <WhatsAppCta label="Conversar no WhatsApp" className="mt-6 w-full" />
            </div>

            <address className="mt-8 space-y-6 text-sm not-italic leading-relaxed text-slate">
              <p className="flex gap-3">
                <MapPin aria-hidden strokeWidth={1.5} className="mt-0.5 size-5 shrink-0 text-gold-dark" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state} · CEP {SITE.address.zip}
                </span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden strokeWidth={1.5} className="mt-0.5 size-5 shrink-0 text-gold-dark" />
                <span>{SITE.hours.label}</span>
              </p>
              <p>
                <a href={`tel:${SITE.contact.phoneE164}`} className="inline-flex items-center gap-3 transition-colors hover:text-gold-deep">
                  <Phone aria-hidden strokeWidth={1.5} className="size-5 text-gold-dark" />
                  {SITE.contact.phoneDisplay} (WhatsApp)
                </a>
              </p>
              <p>
                <a href={`tel:${SITE.contact.landlineE164}`} className="inline-flex items-center gap-3 transition-colors hover:text-gold-deep">
                  <Phone aria-hidden strokeWidth={1.5} className="size-5 text-gold-dark" />
                  {SITE.contact.landlineDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.contact.email}`} className="inline-flex items-center gap-3 break-all transition-colors hover:text-gold-deep">
                  <Mail aria-hidden strokeWidth={1.5} className="size-5 shrink-0 text-gold-dark" />
                  {SITE.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold-deep"
                >
                  <Instagram aria-hidden strokeWidth={1.5} className="size-5 text-gold-dark" />
                  {SITE.social.instagramHandle}
                </a>
              </p>
            </address>

            {/* Mapa */}
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-stone-300/40">
              <iframe
                title={`Mapa — ${SITE.name}, ${SITE.region}, ${SITE.city}`}
                src={SITE.address.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7">
            <div className="border border-stone-300/30 bg-paper p-8 md:p-10">
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                Prefere escrever? <span className="italic text-gold-deep">Envie a sua mensagem</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Preencha os campos abaixo e a sua mensagem abre no WhatsApp já pré-preenchida —
                assim conversamos com o contexto do seu caso.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
