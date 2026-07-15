import Link from "next/link";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] flex-col items-center justify-center overflow-hidden bg-ivory px-6 pt-24 text-center">
      <SectionCanvas curves="full-sweep" glow={["gold-tr"]} />
      <span aria-hidden className="section-number text-[7rem] leading-none md:text-[10rem]">
        404
      </span>
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
        O endereço que você buscou não existe ou foi movido. Volte ao início ou fale conosco
        pelo WhatsApp.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href="/">Voltar ao início</Link>
        </Button>
        <WhatsAppCta label="Falar no WhatsApp" variant="outline" />
      </div>
    </section>
  );
}
