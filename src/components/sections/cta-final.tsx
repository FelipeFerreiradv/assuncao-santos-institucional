import { ctaFinal } from "@/content/institucional";
import { SITE } from "@/lib/site";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden bg-ink py-28 text-ivory md:py-44 lg:py-56"
    >
      <SectionCanvas tone="dark" curves="diagonal-dark" glow={["gold-tr", "gold-bl"]} />
      <div className="grain absolute inset-0 -z-10 opacity-[0.05]" aria-hidden />
      <span
        aria-hidden
        className="section-number absolute -top-4 right-4 hidden text-[12rem] leading-none md:block"
        style={{ WebkitTextStroke: "1px rgba(201,163,107,0.35)" }}
      >
        {ctaFinal.number}
      </span>

      <div className="container-wide">
        <div className="max-w-3xl">
          <Reveal>
            <span className="flex items-center gap-4 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold">
              <span aria-hidden className="h-px w-10 bg-gold/70" />
              Fale conosco
            </span>
          </Reveal>

          <TextReveal
            as="h2"
            text={ctaFinal.title}
            delay={0.15}
            className="mt-6 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance text-ivory md:text-5xl lg:text-6xl"
          />

          <Reveal delay={0.35} as="p" className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/75 text-justify md:text-lg">
            {ctaFinal.text}
          </Reveal>

          <Reveal delay={0.5} className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppCta label={ctaFinal.cta} variant="gold" size="lg" />
            <a
              href={`tel:${SITE.contact.phoneE164}`}
              className="text-sm font-medium text-ivory/80 transition-colors hover:text-gold"
            >
              ou ligue: {SITE.contact.phoneDisplay}
            </a>
          </Reveal>

          <Reveal delay={0.6} as="p" className="mt-6 text-xs leading-relaxed text-ivory/50">
            {ctaFinal.microcopy}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
