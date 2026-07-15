# Assunção & Santos Advogados — Site Institucional

Site institucional do escritório **Assunção & Santos Advogados** (Mooca, São Paulo) — advocacia previdenciária, cível, bancária e imobiliária.

Projeto independente, construído com a mesma identidade visual da landing page validada da Dra. Fernanda Assunção, adaptada para a marca do escritório.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (config via `@theme` no `globals.css`)
- **framer-motion** · **Lenis** (smooth scroll) · **Embla** (carrossel) · **shadcn/ui** (Radix)
- Fontes: **Fraunces** (display) + **Inter** (texto)

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros scripts: `npm run build`, `npm run start`, `npm run typecheck`.

## Estrutura

- `src/app/` — rotas (Home, Sobre, Atuação + áreas, Equipe, Blog, Contato, FAQ, Política de Privacidade, Termos)
- `src/content/` — camada de conteúdo tipada (áreas, equipe, depoimentos, blog, textos institucionais)
- `src/lib/site.ts` — fonte única de dados de marca/contato/navegação
- `src/lib/metadata.ts` + `src/lib/schema.ts` — SEO (metadata por página + JSON-LD)
- `src/components/` — `layout`, `sections`, `shared`, `motion`, `ui`, `seo`

## SEO

Metadata única por página, canonical, Open Graph (+ OG dinâmico no blog), `robots.txt`, `sitemap.xml`, geo-targeting (Mooca) e JSON-LD com `@id` cross-link: `LegalService`/`LawFirm`, `Attorney`, `WebSite` (SearchAction), `Service`, `BreadcrumbList`, `FAQPage`, `BlogPosting`.

## Conformidade OAB

Conteúdo informativo, em conformidade com o **Provimento nº 205/2021** e o Código de Ética da OAB: sem promessa de resultado, sem linguagem apelativa; depoimentos apenas reais e verificados (Google), sem estrelas ou menção a resultados.

## Deploy (Netlify)

O `netlify.toml` já configura o build. Ao conectar este repositório no Netlify, o runtime oficial do Next.js é aplicado automaticamente. Build: `npm run build`.

## Pendências (aguardando a cliente)

- [ ] Logo A&S em **fundo transparente** (PNG/SVG) — hoje há um monograma "A&S" em CSS + o arquivo `public/logo-assuncao-santos.jpeg` (fundo marmorizado)
- [ ] Ícone/favicon do escritório (hoje placeholder)
- [ ] Fotos do escritório/ambiente e foto profissional atualizada
- [ ] Depoimentos adicionais
- [ ] **Domínio oficial** (proposto: `assuncaoesantos.com.br`)
- [ ] Aprovar os textos de **Civil, Bancário e Imobiliário** (expandidos do briefing)
- [ ] Aprovar/publicar os **artigos do blog** (hoje marcados como rascunho, com `noindex`)
- [ ] Confirmar bio/formação da Dra. Fernanda
