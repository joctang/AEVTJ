// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Páginas creadas como esqueleto (noindex) hasta que se rellenen y se aprueben.
// Al publicar una, quitar su ruta de aquí y el atributo `noindex` de su página.
const paginasPendientes = [
  '/testigos-de-jehova/celebraciones/',
  '/testigos-de-jehova/vestimenta/',
];

// Páginas que siguen generándose pero redirigen (301 en public/.htaccess) a otra URL:
// no deben estar en el sitemap.
const paginasRedirigidas = [
  '/transparencia/', // portal antiguo; vigente: /quienes-somos/#transparencia (15/10/2026)
  '/testimonios-bajo-juramento/',
  '/separacion-de-la-sociedad/',
  '/relacion-de-pecados-para-un-comite-judicial/',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://victimasdetestigosdejehova.org',
  integrations: [
    sitemap({
      filter: (page) =>
        ![...paginasPendientes, ...paginasRedirigidas].some((ruta) => page.endsWith(ruta)),
    }),
  ],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
