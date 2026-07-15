import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schema";
import { VISIBLE_POSTS, getCategories, getFeaturedPost } from "@/content/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { BlogCard } from "@/components/sections/blog-card";
import { BlogIndex } from "@/components/sections/blog-index";
import { CtaFinal } from "@/components/sections/cta-final";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Direito Previdenciário e mais",
  description:
    "Artigos sobre Direito Previdenciário (INSS, aposentadoria, BPC/LOAS) e temas jurídicos do dia a dia, escritos pelo Assunção & Santos Advogados, na Mooca.",
  path: "/blog",
  keywords: ["blog advocacia Mooca", "artigos direito previdenciário", "aposentadoria INSS"],
});

export default function BlogPage() {
  const posts = VISIBLE_POSTS;
  const categories = getCategories();
  const featured = getFeaturedPost();
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
        id="ld-breadcrumb"
      />

      <PageHero
        eyebrow="Blog"
        title="Conteúdo para você entender os seus direitos."
        intro="Artigos claros e sem juridiquês sobre Direito Previdenciário e temas do dia a dia. Todo o conteúdo é informativo."
        crumbs={[{ label: "Início", href: "/" }, { label: "Blog" }]}
      />

      <section className="relative isolate overflow-hidden bg-ivory py-16 md:py-24">
        <SectionCanvas curves="top-right" glow={["gold-tr"]} />
        <div className="container-luxe">
          {/* Destaque */}
          {featured && (
            <Reveal className="mb-16">
              <p className="mb-6 flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-luxe text-gold-deep">
                <span aria-hidden className="h-px w-8 bg-gold" />
                Em destaque
              </p>
              <BlogCard post={featured} featured />
            </Reveal>
          )}

          <BlogIndex posts={rest} categories={categories} />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
