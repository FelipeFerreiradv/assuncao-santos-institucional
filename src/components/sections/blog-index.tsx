"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { BlogPost, BlogCategory } from "@/content/blog";
import { BlogCard } from "@/components/sections/blog-card";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: BlogCategory[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCategory = !category || p.categorySlug === category;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [posts, query, category]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      {/* Busca + categorias */}
      <div className="flex flex-col gap-6 border-b border-ink/10 pb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setCategory(null);
              setVisible(PAGE_SIZE);
            }}
            className={cn(
              "border px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-wide-plus transition-colors duration-300",
              category === null
                ? "border-gold bg-gold/10 text-gold-deep"
                : "border-stone-300/40 text-slate hover:border-gold/60"
            )}
          >
            Todos
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => {
                setCategory(c.slug);
                setVisible(PAGE_SIZE);
              }}
              className={cn(
                "border px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-wide-plus transition-colors duration-300",
                category === c.slug
                  ? "border-gold bg-gold/10 text-gold-deep"
                  : "border-stone-300/40 text-slate hover:border-gold/60"
              )}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search
            aria-hidden
            strokeWidth={1.75}
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate/60"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Buscar artigos…"
            aria-label="Buscar artigos"
            className="w-full border border-stone-300/40 bg-paper py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-slate/50 focus:border-gold-dark"
          />
        </div>
      </div>

      {/* Resultados */}
      {shown.length === 0 ? (
        <p className="py-20 text-center text-slate">
          Nenhum artigo encontrado para a sua busca.
        </p>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="border border-gold/60 px-8 py-4 text-[0.8125rem] font-medium uppercase tracking-wide-plus text-ink transition-colors duration-500 hover:bg-gold/10"
          >
            Carregar mais artigos
          </button>
        </div>
      )}
    </div>
  );
}
