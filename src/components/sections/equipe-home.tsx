import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { EQUIPE } from "@/content/equipe";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

/**
 * Bloco institucional de equipe na home — o escritório é uma sociedade
 * individual, então a apresentação foca na advogada responsável e nas
 * credenciais (sinal de autoridade), com link para o perfil completo.
 */
export function EquipeHome() {
  const membro = EQUIPE[0];
  if (!membro) return null;

  return (
    <section className="relative isolate overflow-hidden bg-ivory py-28 lg:py-40">
      <SectionCanvas curves="horizontal" glow={["gold-tl"]} />
      <div className="container-wide">
        <SectionHeading
          number="07"
          eyebrow="Equipe"
          title="Quem conduz cada caso pessoalmente."
          intro="Sociedade individual de advocacia: você é atendido diretamente pela advogada responsável, sem intermediários."
          className="mb-16 lg:mb-20"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Cartão da advogada */}
          <div className="lg:col-span-5">
            <Reveal>
              <Link
                href={`/equipe/${membro.slug}`}
                className="group block border border-stone-300/30 bg-paper transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_70px_-50px_rgba(11,15,25,0.4)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                  <Image
                    src={membro.photo}
                    alt={membro.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-multiply"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                    {membro.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gold-deep">{membro.role}</p>
                  <p className="mt-1 text-[0.6875rem] uppercase tracking-wide-plus text-slate/70">
                    {membro.oab}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink">
                    Ver perfil
                    <ArrowRight
                      aria-hidden
                      strokeWidth={1.75}
                      className="size-4 text-gold-dark transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Credenciais */}
          <div className="lg:col-span-7">
            <Reveal as="p" className="max-w-xl text-base leading-relaxed text-slate text-justify md:text-lg">
              {membro.bio[0]}
            </Reveal>

            <Reveal delay={0.15} className="hairline-gold mt-10 pt-6">
              <p className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                Formação e trajetória
              </p>
            </Reveal>

            <Stagger interval={0.07} className="mt-7 grid gap-4 sm:grid-cols-2">
              {membro.credentials.map((c) => (
                <StaggerItem
                  key={c}
                  className="flex gap-3 text-[0.9375rem] leading-relaxed text-slate"
                >
                  <Check
                    aria-hidden
                    strokeWidth={2}
                    className="mt-0.5 size-4 shrink-0 text-gold-dark"
                  />
                  {c}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.3}>
              <Link
                href="/equipe"
                className="group mt-10 inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink transition-colors duration-500 hover:text-gold-deep"
              >
                Conhecer a equipe
                <ArrowRight
                  aria-hidden
                  strokeWidth={1.75}
                  className="size-4 transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
