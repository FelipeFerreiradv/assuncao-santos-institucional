import { SectionCanvas } from "@/components/shared/section-canvas";
import { Breadcrumb, type Crumb } from "@/components/shared/breadcrumb";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import type { CurveVariant } from "@/components/shared/organic-curves";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  curves?: CurveVariant;
};

/** Hero editorial reutilizável para as páginas internas. Renderiza o H1. */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  curves = "top-right",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ivory pt-32 pb-14 md:pt-40 md:pb-20">
      <SectionCanvas curves={curves} glow={["gold-tr"]} />
      <div className="container-luxe">
        {crumbs && <Breadcrumb items={crumbs} />}

        <Reveal immediate delay={0.05} y={14}>
          <span className="flex items-center gap-4 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
            <span aria-hidden className="h-px w-10 bg-gold/70" />
            {eyebrow}
          </span>
        </Reveal>

        <TextReveal
          as="h1"
          immediate
          text={title}
          delay={0.15}
          className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] font-medium tracking-tight text-balance text-ink md:text-5xl xl:text-6xl"
        />

        {intro && (
          <Reveal
            immediate
            delay={0.4}
            as="p"
            className="mt-7 max-w-2xl text-base leading-relaxed text-slate text-justify md:text-lg"
          >
            {intro}
          </Reveal>
        )}
      </div>
    </section>
  );
}
