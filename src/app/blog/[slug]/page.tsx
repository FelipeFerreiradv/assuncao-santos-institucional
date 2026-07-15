import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { formatDatePt } from "@/lib/format";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/content/blog";
import type { BlogBlock } from "@/content/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaFinal } from "@/components/sections/cta-final";
import { BlogCard } from "@/components/sections/blog-card";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.keywords,
    type: "article",
    // Rascunhos não devem ser indexados até a aprovação da advogada.
    noIndex: post.draft ?? false,
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 font-display text-xl font-medium tracking-tight text-ink">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-slate">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-gold pl-6 font-display text-xl italic leading-relaxed text-ink md:text-2xl">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="mt-5 leading-relaxed text-slate text-justify">{block.text}</p>;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <JsonLd data={getBlogPostingSchema(post)} id="ld-article" />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ])}
        id="ld-breadcrumb"
      />

      {/* Cabeçalho do artigo */}
      <header className="relative isolate overflow-hidden bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <SectionCanvas curves="top-right" glow={["gold-tr"]} />
        <div className="container-luxe max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-luxe">
            <span className="text-gold-deep">{post.category}</span>
            {post.draft && (
              <span className="rounded-full border border-gold/40 px-2 py-0.5 text-gold-deep">
                Rascunho — em revisão
              </span>
            )}
          </div>
          <h1 className="mt-5 font-display text-3xl font-medium leading-[1.12] tracking-tight text-balance text-ink md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate">
            <span>Por {post.author}</span>
            <span aria-hidden className="text-slate/30">·</span>
            <time dateTime={post.date}>{formatDatePt(post.date)}</time>
            <span aria-hidden className="text-slate/30">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden strokeWidth={1.5} className="size-3.5" />
              {post.readingMinutes} min de leitura
            </span>
          </div>
        </div>
      </header>

      {/* Corpo */}
      <article className="relative bg-ivory pb-16 md:pb-24">
        <div className="container-luxe max-w-3xl text-base md:text-lg">
          <p className="border-l-2 border-gold/50 pl-5 font-display text-xl italic leading-relaxed text-ink md:text-2xl">
            {post.description}
          </p>
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Autora — sinal de E-E-A-T */}
          <div className="mt-16 flex flex-col gap-6 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-cream">
              <Image
                src="/images/fernanda-retrato.jpg"
                alt={`${SITE.lawyer.name}, ${SITE.lawyer.oab}`}
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                Escrito por
              </p>
              <Link
                href={`/equipe/${SITE.lawyer.slug}`}
                className="mt-1 inline-block font-display text-xl font-medium text-ink transition-colors hover:text-gold-deep"
              >
                {SITE.lawyer.name}
              </Link>
              <p className="mt-1 text-sm text-slate">
                {SITE.lawyer.role} · {SITE.lawyer.oab}
              </p>
            </div>
            <WhatsAppCta label="Falar no WhatsApp" size="sm" variant="outline" className="sm:ml-auto" />
          </div>

          <p className="mt-10 text-xs leading-relaxed text-slate/70">
            Este conteúdo tem caráter informativo e não substitui a análise individual do seu
            caso por um advogado.
          </p>
        </div>
      </article>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="relative isolate overflow-hidden bg-canvas py-20 md:py-28">
          <SectionCanvas curves="bottom-left" glow={["sand-tr"]} />
          <div className="container-luxe">
            <p className="mb-10 flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
              <span aria-hidden className="h-px w-8 bg-gold" />
              Continue lendo
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaFinal />
    </>
  );
}
