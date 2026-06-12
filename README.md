# Comisión OpenSource LATAM · CCHIA — Landing

**Centro de recursos del equipo** de la **Comisión OpenSource LATAM** de la
Cámara Chilena de Inteligencia Artificial (CCHIA). No es una página de
presentación: reúne en un solo lugar los enlaces, proyectos, flujo de trabajo,
reuniones y guías que usan Open Experts y colaboradores.

Secciones: **Recursos** (GitHub · Hugging Face · WhatsApp) → **Proyectos**
(GRAIL + vistas de Nirvai) → **Flujo de trabajo** → **Reuniones y reportes** →
**Guías** → **Registro** (Open Team + Colaboradores Externos).

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** + diseño propio (tokens en `app/globals.css`)
- **shadcn/ui** primitives (`lib/utils.ts` · `cn`)
- **framer-motion** — animaciones de reveal en scroll
- **lucide-react** — iconografía
- **axios** — estadísticas en vivo del repo GRAIL (GitHub API pública)
- **react-i18next** · **i18next** · **next-i18n-router** — i18n
  (`es` por defecto, `en`)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

`/` sirve español; `/en` sirve inglés. El selector de idioma vive en la barra
de navegación.

## Estructura

```
app/
  i18n.ts                 inicialización de i18next (servidor)
  [locale]/
    layout.tsx            html/body, fuentes (next/font) y provider de i18n
    page.tsx              ensamblaje de secciones
  globals.css             diseño completo (tokens + componentes)
components/
  Nav · Reveal · LanguageSwitcher · TranslationsProvider
  sections/               Hero, Recursos, Proyectos, Flujo, Reuniones,
                          Guias, CTA, Footer
lib/
  links.ts                punto único de verdad de URLs externas
  github.ts               consulta de estrellas/forks vía axios
  utils.ts                cn() de shadcn
locales/
  es/common.json · en/common.json
i18nConfig.js · middleware.js
```

## Enlaces

Todas las URLs oficiales (GitHub, Hugging Face, GRAIL, formularios de registro
y vistas de Nirvai) están centralizadas en [`lib/links.ts`](./lib/links.ts).

## Contenido

El texto y el diseño provienen de la propuesta oficial
(`CCHIA_Propuesta_Comision_OpenSource_LATAM`, v1.0, 21 Feb 2026). Para editar
copy basta con tocar los archivos en `locales/`.
