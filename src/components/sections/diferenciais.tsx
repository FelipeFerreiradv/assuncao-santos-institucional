import { diferenciais } from "@/content/institucional";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function Diferenciais() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 md:py-36 lg:py-44">
      <SectionCanvas curves="horizontal" glow={["gold-tr", "sand-br"]} />
      <div className="container-luxe">
        <SectionHeading
          number={diferenciais.number}
          eyebrow={diferenciais.eyebrow}
          title={diferenciais.title}
          intro={diferenciais.intro}
          className="mb-16 md:mb-20"
        />

        <Stagger interval={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.items.map((item) => (
            <StaggerItem
              key={item.title}
              className="group flex h-full flex-col border border-stone-300/30 bg-paper p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-gold/60"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-gold/30 text-gold-dark transition-transform duration-500 group-hover:scale-110">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
