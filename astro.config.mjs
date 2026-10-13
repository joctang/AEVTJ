// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Páginas creadas como esqueleto (noindex) hasta que se rellenen y se aprueben.
// Al publicar una, quitar su ruta de aquí y el atributo `noindex` de su página.
const paginasPendientes = [
  '/testigos-de-jehova/cumpleanos/',
  '/testigos-de-jehova/navidad/',
  '/testigos-de-jehova/celebraciones/',
  '/testigos-de-jehova/vestimenta/',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://victimasdetestigosdejehova.org',
  integrations: [
    sitemap({
      filter: (page) => !paginasPendientes.some((ruta) => page.endsWith(ruta)),
    }),
  ],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
