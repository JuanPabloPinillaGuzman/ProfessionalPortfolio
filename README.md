# Portafolio Profesional · Juan Pablo Pinilla Guzman

Portafolio bilingüe (ES/EN) de Juan Pablo Pinilla, desarrollador fullstack (C# / .NET, PostgreSQL, React + TypeScript).

**Sitio:** https://juanpablopinillaguzman.github.io/ProfessionalPortfolio/

## Stack

- [Astro 6](https://astro.build) (sitio estático) con Content Collections
- Tailwind CSS v4
- [Motion](https://motion.dev) para animaciones
- Despliegue automático a GitHub Pages con GitHub Actions (`.github/workflows/deploy-pages.yml`)

## Estructura

- `src/config/site.ts` — datos del perfil: resumen, experiencia, formación, habilidades y enlaces.
- `src/content/projects/*.md` — un archivo por proyecto (el nombre del archivo es el ancla en `/projects#<id>`).
- `src/pages/` — rutas: inicio, sobre mí, proyectos y contacto.
- `public/cv/` — hoja de vida en PDF enlazada desde el sitio.

Más detalle en [`src/ARCHITECTURE.md`](src/ARCHITECTURE.md).

## Comandos

| Comando           | Acción                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor local en `localhost:4321/ProfessionalPortfolio` |
| `npm run build`   | Genera el sitio en `./dist/`                  |
| `npm run preview` | Previsualiza el build                         |
