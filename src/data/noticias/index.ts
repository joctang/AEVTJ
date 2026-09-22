import type { Noticia } from "./tipos";

/**
 * Registro de noticias ya migradas a la plantilla.
 *
 * Migración progresiva: si el slug está aquí, `src/pages/noticias/[slug].astro`
 * usa `NoticiaArticulo.astro`; si no, sigue pintando el HTML heredado de
 * WordPress con `ArticleContent.astro`. Añadir una noticia migrada es añadir
 * su import a este objeto — no hay que tocar la ruta.
 */
const modulos = import.meta.glob<{ noticia: Noticia }>("./*.ts", { eager: true });

export const noticiasMigradas: Record<string, Noticia> = Object.fromEntries(
  Object.entries(modulos)
    .filter(([ruta]) => !ruta.endsWith("tipos.ts") && !ruta.endsWith("index.ts"))
    .map(([, mod]) => [mod.noticia.slug, mod.noticia])
);

export function getNoticiaMigrada(slug: string): Noticia | undefined {
  return noticiasMigradas[slug];
}

export type { Noticia } from "./tipos";
