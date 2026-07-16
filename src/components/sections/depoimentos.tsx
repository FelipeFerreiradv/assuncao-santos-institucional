"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { DEPOIMENTOS, GOOGLE_REVIEWS_URL } from "@/content/depoimentos";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 7000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="depoimentos"
      className="relative isolate overflow-hidden bg-paper py-28 lg:py-40"
    >
      <SectionCanvas curves="horizontal" glow={["gold-tl"]} />
      <div className="container-wide">
        <SectionHeading
          number="08"
          eyebrow="Depoimentos"
          title="Quem já foi atendido por aqui"
          intro="Avaliações reais e verificadas de clientes no Google."
          className="mb-14 md:mb-16"
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {DEPOIMENTOS.map((d, i) => (
              <figure
                key={i}
                className="flex-[0_0_100%] px-1 md:flex-[0_0_50%] md:px-3"
              >
                <div className="flex h-full flex-col border border-stone-300/30 bg-ivory p-8 md:p-10">
                  <Quote aria-hidden strokeWidth={1} className="size-10 text-gold/50" />
                  <blockquote className="mt-6 flex-1 font-display text-xl italic leading-relaxed text-ink md:text-2xl">
                    “{d.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-sm font-medium text-ink">{d.author}</p>
                    <p className="mt-1 text-[0.6875rem] uppercase tracking-wide-plus text-gold-deep">
                      {d.context}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="mt-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para o depoimento ${i + 1}`}
                aria-current={i === selected}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-px w-8 transition-colors duration-500",
                  i === selected ? "bg-gold-dark" : "bg-stone-300/60 hover:bg-gold/50"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 hidden items-center gap-2 text-[0.8125rem] font-medium text-gold-deep transition-colors hover:text-ink sm:inline-flex"
            >
              Ver no Google
              <ExternalLink aria-hidden strokeWidth={1.75} className="size-3.5" />
            </a>
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold-dark transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              <ChevronLeft aria-hidden strokeWidth={1.75} className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => emblaApi?.scrollNext()}
              className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold-dark transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              <ChevronRight aria-hidden strokeWidth={1.75} className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
