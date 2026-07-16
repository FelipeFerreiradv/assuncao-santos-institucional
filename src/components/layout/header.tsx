"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  type Variants,
} from "framer-motion";
import { ArrowRight, ChevronDown, Instagram, Mail, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { AREAS } from "@/content/areas";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { Wordmark } from "@/components/layout/wordmark";
import { getLenis } from "@/lib/smooth-scroll-store";
import { cn } from "@/lib/utils";

const EASE_LUXE = [0.16, 1, 0.3, 1] as const;
const telHref = `tel:${SITE.contact.phoneE164}`;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Só a home tem hero escuro (as páginas internas abrem com o PageHero ivory).
  // Enquanto o header está transparente sobre esse hero, ele precisa inverter —
  // caso contrário os links em `ink` desaparecem sobre a imagem.
  const overDarkHero = pathname === "/";
  const light = !scrolled && overDarkHero;
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 40));

  useEffect(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  // Fecha o menu ao trocar de rota.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Trava o scroll (inclusive Lenis) com o menu mobile aberto.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const lenis = getLenis();
    lenis?.stop();
    return () => {
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
      lenis?.start();
    };
  }, [open]);

  useEffect(() => {
    if (open) return;
    menuTriggerRef.current?.focus?.({ preventScroll: true });
  }, [open]);

  // Escape fecha e foco preso dentro do overlay.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const overlay = overlayRef.current;
      if (!overlay) return;
      const focusables = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const menuItem: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_LUXE } },
  };

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:bg-ink focus:px-5 focus:py-3 focus:text-[0.6875rem] focus:font-medium focus:uppercase focus:tracking-wide-plus focus:text-ivory"
      >
        Pular para o conteúdo
      </a>

      <motion.header
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE_LUXE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-700 ease-out-expo",
          scrolled
            ? "border-b border-ink/10 bg-ivory/85 backdrop-blur-md"
            : light
              ? // Véu sutil sobre o hero: garante leitura mesmo nas partes claras da foto
                "border-b border-transparent bg-gradient-to-b from-ink/75 via-ink/35 to-transparent"
              : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "container-wide flex items-center justify-between gap-6 transition-[height] duration-700 ease-out-expo",
            scrolled ? "h-16 md:h-18" : "h-20 md:h-24"
          )}
        >
          <Link href="/" aria-label={`${SITE.name} — voltar ao início`}>
            <Wordmark tone={light ? "dark" : "light"} />
          </Link>

          {/* Navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {SITE.nav
                .filter((link) => link.href !== "/")
                .map((link) => {
                  const active = isActive(pathname, link.href);
                  if (link.hasMega) {
                    return (
                      <li key={link.href} className="group relative">
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "relative inline-flex items-center gap-1 py-1 text-[0.8125rem] font-medium transition-colors duration-500 ease-out-expo",
                            light
                              ? cn("hover:text-gold", active ? "text-ivory" : "text-ivory/80")
                              : cn("hover:text-ink", active ? "text-ink" : "text-ink/75")
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            aria-hidden
                            strokeWidth={1.75}
                            className="size-3.5 transition-transform duration-500 group-hover:rotate-180"
                          />
                        </Link>
                        {/* Mega menu — abre por hover e por foco de teclado */}
                        <div className="invisible absolute left-1/2 top-full z-10 w-[44rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                          <div className="border border-gold/20 bg-paper/95 p-7 shadow-[0_24px_60px_-40px_rgba(11,15,25,0.4)] backdrop-blur-xl">
                            <p className="mb-5 flex items-center gap-3 text-[0.625rem] font-medium uppercase tracking-luxe text-gold-deep">
                              <span aria-hidden className="h-px w-8 bg-gold" />
                              Áreas de atuação
                            </p>

                            <ul className="grid grid-cols-2 gap-1">
                              {AREAS.map((area) => (
                                <li key={area.slug}>
                                  <Link
                                    href={`/atuacao/${area.slug}`}
                                    className="flex gap-4 p-3 transition-colors duration-300 hover:bg-gold/10"
                                  >
                                    <span
                                      aria-hidden
                                      className="font-display text-lg leading-none text-gold-deep/50"
                                    >
                                      {area.number}
                                    </span>
                                    <span className="block">
                                      <span className="block text-sm font-medium text-ink">
                                        {area.name}
                                      </span>
                                      <span className="mt-1 block text-xs leading-relaxed text-slate">
                                        {area.tagline}
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            <Link
                              href="/atuacao"
                              className="group/all mt-5 flex items-center gap-2 border-t border-ink/10 pt-5 text-[0.6875rem] font-medium uppercase tracking-wide-plus text-ink transition-colors duration-300 hover:text-gold-deep"
                            >
                              Ver todas as áreas
                              <ArrowRight
                                aria-hidden
                                strokeWidth={1.75}
                                className="size-3.5 transition-transform duration-500 group-hover/all:translate-x-1"
                              />
                            </Link>
                          </div>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative py-1 text-[0.8125rem] font-medium transition-colors duration-500 ease-out-expo after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-out-expo hover:after:origin-left hover:after:scale-x-100",
                          light
                            ? cn(
                                "after:bg-gold hover:text-gold",
                                active
                                  ? "text-ivory after:origin-left after:scale-x-100"
                                  : "text-ivory/80"
                              )
                            : cn(
                                "after:bg-gold-dark hover:text-ink",
                                active
                                  ? "text-ink after:origin-left after:scale-x-100"
                                  : "text-ink/75"
                              )
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <WhatsAppCta
              label="Falar no WhatsApp"
              size="sm"
              variant="outline"
              className={cn(
                light &&
                  "border-ivory/45 text-ivory hover:border-gold hover:bg-gold/15 hover:text-gold"
              )}
            />
          </div>

          <button
            ref={menuTriggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label="Abrir menu de navegação"
            className="-mr-2 flex size-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              aria-hidden
              className={cn("h-px w-6 transition-colors duration-500", light ? "bg-ivory" : "bg-ink")}
            />
            <span
              aria-hidden
              className={cn(
                "h-px w-4 self-end transition-colors duration-500",
                light ? "bg-gold" : "bg-gold-dark"
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-mobile"
            id="menu-mobile"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: EASE_LUXE } }}
            transition={{ duration: 0.6, ease: EASE_LUXE }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
          >
            <div className="container-wide flex h-20 shrink-0 items-center justify-between">
              <Wordmark tone="dark" />
              <button
                type="button"
                autoFocus
                onClick={() => setOpen(false)}
                aria-label="Fechar menu de navegação"
                className="flex size-11 items-center justify-center border border-ivory/20 text-ivory transition-colors duration-500 ease-out-expo hover:border-gold hover:text-gold"
              >
                <X aria-hidden strokeWidth={1.5} className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Navegação principal"
              className="flex flex-1 items-center overflow-y-auto"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
                  },
                }}
                className="container-wide w-full space-y-1 py-8"
              >
                {SITE.nav.map((link, index) => (
                  <motion.li key={link.href} variants={menuItem}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 py-2"
                    >
                      <span
                        aria-hidden
                        className="text-[0.625rem] font-medium tracking-luxe text-gold/70"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl font-light tracking-tight text-ivory transition-colors duration-500 ease-out-expo group-hover:text-gold">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: EASE_LUXE }}
              className="container-wide shrink-0 border-t border-ivory/10 py-7"
            >
              <ul className="flex flex-col gap-3 text-sm text-ivory/70">
                <li>
                  <a
                    href={telHref}
                    className="inline-flex items-center gap-3 transition-colors duration-500 hover:text-ivory"
                  >
                    <Phone aria-hidden strokeWidth={1.5} className="size-4 text-gold" />
                    {SITE.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="inline-flex items-center gap-3 break-all transition-colors duration-500 hover:text-ivory"
                  >
                    <Mail aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-gold" />
                    {SITE.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${SITE.social.instagramHandle} (abre em nova aba)`}
                    className="inline-flex items-center gap-3 transition-colors duration-500 hover:text-ivory"
                  >
                    <Instagram aria-hidden strokeWidth={1.5} className="size-4 text-gold" />
                    {SITE.social.instagramHandle}
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
