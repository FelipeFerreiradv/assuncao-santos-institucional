import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { SITE } from "@/lib/site";
import { ctaFinal, escritorio } from "@/content/institucional";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { Reveal } from "@/components/motion/reveal";

/**
 * Seção institucional de contato — dados do escritório (NAP), mapa e
 * formulário lado a lado. Fecha a home como um site institucional, no lugar
 * de um banner de CTA.
 */
export function ContatoSection() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-ivory py-28 lg:py-40">
      <SectionCanvas curves="top-right" glow={["gold-tr"]} />
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* ————— Dados do escritório ————— */}
          <div className="lg:col-span-5">
            <SectionHeading
              number={ctaFinal.number}
              eyebrow="Fale conosco"
              title={ctaFinal.title}
              intro={ctaFinal.text}
            />

            <div className="mt-10 space-y-5">
              <ContactInfo
                icon={MessageCircle}
                label="WhatsApp"
                value={SITE.contact.phoneDisplay}
                href={SITE.contact.whatsappUrl}
                external
              />
              <ContactInfo
                icon={Phone}
                label="Telefone"
                value={SITE.contact.landlineDisplay}
                href={`tel:${SITE.contact.landlineE164}`}
              />
              <ContactInfo
                icon={Mail}
                label="E-mail"
                value={SITE.contact.email}
                href={`mailto:${SITE.contact.email}`}
              />
              <ContactInfo
                icon={MapPin}
                label="Endereço"
                value={SITE.address.full}
                href={SITE.address.mapsUrl}
                external
              />
              <ContactInfo icon={Clock} label="Horário" value={SITE.hours.label} />
            </div>

            {/* Foto real do espaço — reforça que o escritório existe e é próximo */}
            <Reveal delay={0.15}>
              <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-cream">
                <Image
                  src={escritorio.photos.atendimento.src}
                  alt={escritorio.photos.atendimento.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gold/5 mix-blend-multiply"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-5 aspect-[16/10] overflow-hidden border border-stone-300/40">
                <iframe
                  title={`Mapa — ${SITE.name}, ${SITE.region}, ${SITE.city}`}
                  src={SITE.address.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>

          {/* ————— Formulário ————— */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="border border-stone-300/30 bg-paper p-8 shadow-[0_28px_70px_-55px_rgba(11,15,25,0.45)] lg:p-12">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  Prefere escrever?{" "}
                  <span className="italic text-gold-deep">Envie a sua mensagem</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate text-justify">
                  Preencha os campos abaixo e a sua mensagem abre no WhatsApp já
                  pré-preenchida — assim conversamos com o contexto do seu caso.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="group flex items-start gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-stone-300/50 text-gold-dark transition-colors duration-500 group-hover:border-gold-deep group-hover:bg-gold-deep group-hover:text-ivory">
        <Icon aria-hidden strokeWidth={1.5} className="size-4" />
      </span>
      <span className="block">
        <span className="block text-[0.625rem] font-medium uppercase tracking-wide-plus text-slate/60">
          {label}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-ink">{value}</span>
      </span>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block"
    >
      {content}
    </a>
  );
}
