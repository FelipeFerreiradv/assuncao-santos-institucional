import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VISIBLE_POSTS } from "@/content/blog";
import { SectionCanvas } from "@/components/shared/section-canvas";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogCard } from "@/components/sections/blog-card";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function BlogDestaque() {
  const posts = VISIBLE_POSTS.slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="relative isolate overflow-hidden bg-canvas py-24 md:py-36 lg:py-44">
      <SectionCanvas curves="bottom-left" glow={["sand-tr"]} />
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            number="07"
            eyebrow="Conteúdo"
            title="Artigos para você entender os seus direitos"
          />
          <Reveal delay={0.2}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink transition-colors duration-500 hover:text-gold-deep"
            >
              Ver todos os artigos
              <ArrowRight
                aria-hidden
                strokeWidth={1.75}
                className="size-4 transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <Stagger interval={0.1} className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
