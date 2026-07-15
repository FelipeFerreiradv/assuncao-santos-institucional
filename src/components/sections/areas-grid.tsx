import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AREAS } from "@/content/areas";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Icon } from "@/components/shared/icon";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { cn } from "@/lib/utils";

type AreasGridProps = {
  /** Mostra o cabeçalho de seção (home). Em /atuacao o PageHero já cobre o título. */
  withHeading?: boolean;
  className?: string;
};

export function AreasGrid({ withHeading = true, className }: AreasGridProps) {
  return (
    <section
      id="areas"
      className={cn(
        "relative isolate overflow-hidden bg-ivory py-24 md:py-36 lg:py-44",
        className
      )}
    >
      <SectionCanvas curves="bottom-right" grid glow={["gold-br"]} />
      <div className="container-luxe">
        {withHeading && (
          <SectionHeading
            number="02"
            eyebrow="Áreas de atuação"
            title="Soluções jurídicas para o que é importante na sua vida."
            intro="Atuação consultiva e contenciosa, com o Direito Previdenciário como carro-chefe do escritório."
            className="mb-16 md:mb-20"
          />
        )}

        <Stagger interval={0.1} className="grid gap-6 sm:grid-cols-2">
          {AREAS.map((area) => (
            <StaggerItem key={area.slug}>
              <Link
                href={`/atuacao/${area.slug}`}
                className="group relative flex h-full flex-col border border-stone-300/30 bg-paper p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_70px_-50px_rgba(11,15,25,0.4)] md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden
                    className="section-number text-[3.5rem] leading-none md:text-[4rem]"
                  >
                    {area.number}
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-full border border-gold/30 text-gold-dark transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon name={area.icon} className="size-5" />
                  </span>
                </div>

                {area.flagship && (
                  <span className="mt-6 inline-flex w-fit items-center gap-2 text-[0.625rem] font-medium uppercase tracking-luxe text-gold-deep">
                    <span aria-hidden className="h-px w-6 bg-gold" />
                    Área principal
                  </span>
                )}

                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink md:text-[1.75rem]">
                  {area.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-gold-deep">{area.tagline}</p>
                <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-slate text-justify">
                  {area.shortDescription}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink">
                  Ver área
                  <ArrowUpRight
                    aria-hidden
                    strokeWidth={1.75}
                    className="size-4 text-gold-dark transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
