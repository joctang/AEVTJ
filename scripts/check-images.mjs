// One-off check: verify every <img src> on every route returns 200.
const routes = [
  "/",
  "/recursos-de-ayuda/",
  "/quienes-somos/",
  "/legal/",
  "/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/",
  "/transparencia/",
  "/relacion-de-pecados-para-un-comite-judicial/",
  "/noticias/",
  "/colaboradores/",
  "/victimas/",
  "/testimonios-bajo-juramento/",
  "/separacion-de-la-sociedad/",
  "/aviso-legal/",
  "/politica-de-cookies/",
  "/guia-para-salir-de-los-testigos-de-jehova/",
  "/contacto/",
  "/hazte-socio/",
  "/demandas/",
  "/politica-de-privacidad/",
];

const base = "http://localhost:4324";
let totalImgs = 0;
let broken = 0;

for (const route of routes) {
  const html = await fetch(base + route).then((r) => r.text());
  const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  for (const src of srcs) {
    if (!src.startsWith("/")) continue; // skip external (e.g. wikimedia)
    totalImgs++;
    const res = await fetch(base + src);
    if (!res.ok) {
      broken++;
      console.log(`BROKEN [${res.status}] ${src}  <- ${route}`);
    }
  }
}

console.log(`\nChecked ${totalImgs} local image refs across ${routes.length} routes, ${broken} broken.`);
