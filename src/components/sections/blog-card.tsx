import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/content/blog";
import { formatDatePt } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Card editorial de artigo (sem foto de capa — tratamento tipográfico). */
export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex h-full flex-col border border-stone-300/30 bg-paper transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_70px_-50px_rgba(11,15,25,0.4)]",
        featured && "md:flex-row"
      )}
    >
      {/* Faixa editorial no lugar da foto */}
      <div
        aria-hidden
        className={cn(
          "relative flex items-end overflow-hidden bg-gradient-to-br from-ink to-slate p-6",
          featured ? "md:w-2/5 md:min-h-[18rem]" : "h-32"
        )}
      >
        <div className="grain absolute inset-0 opacity-[0.06]" />
        <span className="section-number relative text-[4rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(201,163,107,0.55)]">
          {post.categorySlug.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <div className="flex flex-wrap items-center gap-3 text-[0.625rem] font-medium uppercase tracking-luxe">
          <span className="text-gold-deep">{post.category}</span>
          {post.draft && (
            <span className="rounded-full border border-gold/40 px-2 py-0.5 text-gold-deep">
              Rascunho
            </span>
          )}
        </div>

        <h3
          className={cn(
            "mt-3 font-display font-medium tracking-tight text-ink transition-colors duration-500 group-hover:text-gold-deep",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}
        >
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slate text-justify">
          {post.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-4 text-xs text-slate/70">
          <span>{formatDatePt(post.date)}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden strokeWidth={1.5} className="size-3.5" />
            {post.readingMinutes} min
            <ArrowUpRight
              aria-hidden
              strokeWidth={1.75}
              className="ml-2 size-4 text-gold-dark transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
