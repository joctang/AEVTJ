import { getCollection } from "astro:content";

const site = "https://victimasdetestigosdejehova.org";
const homeSlug = "victimas-testigos-de-jehova-ayuda-denuncia";
const customUrls = [
  "/contacto/",
  "/hazte-socio/",
  "/legal/",
  "/otras-asociaciones/",
  "/quienes-somos/",
  "/guia-para-salir-de-los-testigos-de-jehova/",
  "/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/",
];

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export const prerender = true;

export async function GET() {
  const [pages, posts] = await Promise.all([getCollection("pages"), getCollection("posts")]);
  const pageUrls = pages
    .map((entry) => entry.data.slug)
    .filter((slug) => slug !== homeSlug && slug !== "noticias")
    .map((slug) => `/${slug}/`);
  const urls = [
    "/",
    "/noticias/",
    ...customUrls,
    ...pageUrls,
    ...posts.map((entry) => `/noticias/${entry.data.slug}/`),
  ];
  const uniqueUrls = [...new Set(urls)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls
    .map((path) => `  <url><loc>${escapeXml(`${site}${path}`)}</loc></url>`)
    .join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
