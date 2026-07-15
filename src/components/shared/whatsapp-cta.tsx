import { MessageCircle, ArrowRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { Button, type buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type WhatsAppCtaProps = {
  label: string;
  /** Mensagem pré-preenchida no WhatsApp (opcional; usa a padrão do escritório). */
  message?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  icon?: "whatsapp" | "arrow" | "none";
};

/**
 * CTA padrão de conversão — link para o WhatsApp com mensagem pré-preenchida.
 * Usar em todas as seções para manter consistência visual e de tracking.
 */
export function WhatsAppCta({
  label,
  message,
  variant = "primary",
  size = "default",
  className,
  icon = "whatsapp",
}: WhatsAppCtaProps) {
  const href = message ? whatsappLink(message) : SITE.contact.whatsappUrl;
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (abre o WhatsApp em nova aba)`}
      >
        {icon === "whatsapp" && <MessageCircle aria-hidden strokeWidth={1.75} />}
        <span>{label}</span>
        {icon === "arrow" && <ArrowRight aria-hidden strokeWidth={1.75} />}
      </a>
    </Button>
  );
}
