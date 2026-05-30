# English with Ale — Landing

Landing page para English with Ale (Alejandra Jarupkin). Sitio público:
https://englishwithale.com

## Stack

- Vite 6 + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- react-router-dom (single-page con anchors)
- Deploy: Cloudflare Pages (auto-deploy desde rama `main`)

## Setup local

Requiere Node.js ≥ 20 y npm.

```bash
git clone https://github.com/kf380/english-with-ale-landing.git
cd english-with-ale-landing
npm install
npm run dev
```

Dev server en `http://localhost:8080`.

## Build de producción

```bash
npm run build
```

Esto ejecuta tres pasos encadenados:

1. `vite build` — bundle de la app a `dist/`
2. `node scripts/prerender.mjs` — inyecta 7 schemas JSON-LD (Person, Organization, WebSite, EducationalOccupationalProgram, Service+Offers, FAQPage, BreadcrumbList) en el `<head>` y un bloque de body SEO-readable dentro de `<div id="root">` para crawlers sin JS
3. `node scripts/indexnow.mjs` — pinga IndexNow (Bing, Yandex, Naver) con las URLs del sitemap

Scripts adicionales:

- `npm run prerender` — solo el paso 2 (útil para testear schemas localmente)
- `npm run indexnow` — solo el paso 3 (ping manual a IndexNow)
- `npm run lint` — ESLint

## Estructura

```
public/
  ├── robots.txt              # 40+ AI bots permitidos + Content-Signal directive
  ├── _headers                # HTTP headers (Content-Signal, Link describedby)
  ├── llms.txt                # Índice + positioning para crawlers IA
  ├── llms-full.txt           # Contenido completo en markdown para crawlers IA
  ├── sitemap.xml             # Sitemap (home + 7 anchors)
  ├── auth.md                 # Metadata de autenticación para agentes
  ├── .well-known/
  │   └── api-catalog         # Linkset JSON (RFC 9727) para discovery
  └── {indexnow-key}.txt      # Verificación IndexNow

src/
  ├── components/             # Hero, About, HowItWorks, Services, ForCompanies,
  │                           # Testimonials, FAQ, Contact, Navbar, WhatsAppFloat
  ├── pages/
  │   ├── Index.tsx           # Página única (single-page landing)
  │   └── NotFound.tsx
  ├── lib/
  │   └── config.ts           # WhatsApp number, payment links, hero video
  └── App.tsx

scripts/
  ├── prerender.mjs           # Inyecta schemas + SEO body en dist/index.html
  └── indexnow.mjs            # Pinga IndexNow con URLs del sitemap

index.html                    # Source HTML (meta tags, OG, hreflang, AI links)
```

## GEO / AEO (visibilidad en IA)

El sitio está optimizado para aparecer en respuestas de ChatGPT, Claude,
Perplexity, Copilot, Gemini y Apple Intelligence. Componentes clave:

- **robots.txt** explícitamente permite GPTBot, ChatGPT-User, ClaudeBot,
  Claude-User, PerplexityBot, Google-Extended, Applebot-Extended, etc.
- **Content-Signal** declarado como HTTP response header (`_headers`) y en
  robots.txt: `ai-train=yes, search=yes, ai-input=yes`
- **llms.txt** y **llms-full.txt** como documentos optimizados para LLMs
- **Schemas JSON-LD** ricos (Person, Service, EducationalOccupationalProgram,
  Offer con AggregateOffer, FAQPage)
- **HTTP Link headers** con `rel="describedby"` y `rel="alternate" type="text/markdown"`
- **IndexNow** ping automático en cada build
- **Cloudflare Crawler Hints** activado a nivel edge

## Deploy

Cualquier push a `main` dispara un build automático en Cloudflare Pages.
URL temporal: `english-with-ale-landing.pages.dev`. Custom domain:
`englishwithale.com`.
