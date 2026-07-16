import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { question: string; answer: string };

type FaqSectionProps = {
  number?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: readonly FaqItem[];
  id?: string;
};

/** Seção de FAQ em duas colunas — cabeçalho fixo + accordion acessível (Radix). */
export function FaqSection({
  number = "08",
  eyebrow = "Perguntas frequentes",
  title,
  intro,
  items,
  id = "faq",
}: FaqSectionProps) {
  return (
    <section id={id} className="relative isolate overflow-hidden bg-ivory py-28 lg:py-40">
      <SectionCanvas curves="top-right" glow={["gold-tr"]} />
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading number={number} eyebrow={eyebrow} title={title} intro={intro} />
              <div className="mt-10 border border-gold/25 bg-paper p-7">
                <p className="flex items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                  <MessageCircle aria-hidden strokeWidth={1.75} className="size-4" />
                  Não encontrou sua dúvida?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  Conte a sua situação pelo WhatsApp. A conversa inicial é reservada e sem
                  compromisso.
                </p>
                <WhatsAppCta label="Falar no WhatsApp" size="sm" className="mt-5" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-10 text-xs leading-relaxed text-slate/70">
              As informações desta seção são gerais e informativas. Cada caso deve ser
              analisado individualmente — {SITE.lawyer.oab}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
