import { valores } from "@/content/institucional";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Valores() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 md:py-32">
      <SectionCanvas curves="bottom-right" glow={["gold-br"]} />
      <div className="container-luxe">
        <SectionHeading
          number="03"
          eyebrow="Nossos valores"
          title="Os princípios que orientam cada decisão"
          intro="A excelência jurídica começa pelos valores que sustentam a confiança de quem nos procura."
          className="mb-16 md:mb-20"
        />

        <Stagger interval={0.08} className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((v) => (
            <StaggerItem key={v.name} className="flex gap-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold-dark">
                <Icon name={v.icon} className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                  {v.name}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
