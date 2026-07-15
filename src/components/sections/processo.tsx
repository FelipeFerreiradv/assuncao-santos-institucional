import { processo } from "@/content/institucional";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

export function Processo() {
  return (
    <section
      id="processo"
      className="relative isolate overflow-hidden bg-ink py-28 text-ivory md:py-40 lg:py-52"
    >
      <SectionCanvas tone="dark" curves="diagonal-dark" />
      <div className="grain absolute inset-0 -z-10 opacity-[0.04]" aria-hidden />
      <div className="container-luxe">
        <SectionHeading
          number={processo.number}
          eyebrow={processo.eyebrow}
          title={processo.title}
          tone="dark"
          align="center"
          className="mx-auto mb-16 md:mb-20"
        />

        <Stagger interval={0.14} className="grid gap-8 md:grid-cols-3">
          {processo.steps.map((step) => (
            <StaggerItem key={step.step} className="relative">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="section-number text-[3.5rem] leading-none"
                  style={{ WebkitTextStroke: "1px rgba(201,163,107,0.5)" }}
                >
                  {step.step}
                </span>
                <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon name={step.icon} className="size-5" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ivory">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ivory/70 text-justify">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-16 flex justify-center">
          <WhatsAppCta label={processo.cta} variant="gold" size="lg" />
        </div>
      </div>
    </section>
  );
}
