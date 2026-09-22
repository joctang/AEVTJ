/**
 * Auditoría de las noticias migradas a la plantilla canónica.
 *
 *   node scripts/auditar-noticias.mjs
 *   node scripts/auditar-noticias.mjs <slug>      (una sola)
 *
 * Compara cada `src/content/posts/<slug>.json` (HTML heredado de WordPress) con
 * su `src/data/noticias/<slug>.ts` (datos normalizados) y avisa de:
 *   - encabezados del original que no aparecen en el dato (contenido perdido),
 *   - el titular editorial del original no usado como `titulo`,
 *   - enlaces internos absolutos y parámetros de rastreo,
 *   - campos obligatorios ausentes.
 *
 * Sale con código 1 si hay errores, para poder usarlo en CI.
 * Ver PLANTILLA-NOTICIAS.md.
 */
import fs from "node:fs";
import path from "node:path";

const DIR_POSTS = "src/content/posts";
const DIR_DATOS = "src/data/noticias";

const norm = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#8217;|​/g, " ")
    .replace(/[«»"“”'’·|–—]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const posts = fs
  .readdirSync(DIR_POSTS)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(fs.readFileSync(path.join(DIR_POSTS, f), "utf8")));

// Encabezados que SIEMPRE se descartan: cajas heredadas de WordPress, rótulos
// que la plantilla ya pinta, y los títulos de las demás noticias ("Post populares").
const DESCARTES = [
  ...posts.map((p) => norm(p.title)),
  "podemos ayudarte",
  "post populares",
  "newsletter",
  "categoria",
  "conceptos clave",
  "recursos y apoyo",
  "intervinientes",
  "claves del caso",
  "contexto",
  "buscas apoyo o quieres colaborar",
];

const soloSlug = process.argv[2];
let errores = 0;
let avisos = 0;

for (const post of posts) {
  if (soloSlug && post.slug !== soloSlug) continue;

  const ruta = path.join(DIR_DATOS, `${post.slug}.ts`);
  console.log(`\n── ${post.slug}`);

  if (!fs.existsSync(ruta)) {
    console.log("   ERROR  sin migrar: no existe " + ruta);
    errores++;
    continue;
  }

  const raw = fs.readFileSync(ruta, "utf8");
  const plano = norm(raw);
  const err = [];
  const avi = [];

  // 1. Encabezados del original ausentes en el dato → contenido perdido.
  const headings = [...post.html.matchAll(/<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/g)]
    .map((m) => ({ nivel: m[1], txt: norm(m[2]) }))
    .filter((h) => h.txt.length > 8);

  const perdidos = headings.filter(
    (h) =>
      !plano.includes(h.txt.slice(0, 38)) &&
      !DESCARTES.some((d) => d && h.txt.includes(d.slice(0, 30)))
  );
  for (const p of perdidos) err.push(`contenido perdido: h${p.nivel} «${p.txt.slice(0, 80)}»`);

  // 2. Titular editorial del original que no se usó como `titulo`.
  const h1 = post.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const titulo = (raw.match(/\n\s*titulo:\s*\n?\s*"((?:[^"\\]|\\.)*)"/) || [])[1];
  if (h1 && titulo) {
    const th = norm(h1[1]);
    // Un h1 muy largo no es un titular, es un párrafo: no se exige.
    if (th.length > 20 && th.length < 130 && !norm(titulo).includes(th.slice(0, 28))) {
      avi.push(`el titular del original no es el \`titulo\`: «${th.slice(0, 80)}»`);
    }
  }

  // 3. Enlaces internos absolutos y parámetros de rastreo (sólo en valores, no en comentarios).
  const sinComentarios = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
  if (/https:\/\/victimasdetestigosdejehova\.org\/[a-z]/.test(sinComentarios))
    err.push("enlace interno absoluto (debe ser ruta relativa)");
  if (/[?&](utm_[a-z]+|ssm)=/.test(sinComentarios)) err.push("parámetro de rastreo en una URL");

  // 4. Campos obligatorios.
  for (const campo of ["slug", "titulo", "fecha", "autoria", "portada", "entradilla", "cuerpo"]) {
    if (!new RegExp(`\\n\\s*${campo}:`).test(raw)) err.push(`falta el campo obligatorio \`${campo}\``);
  }
  if (!/alt:\s*"[^"]{10,}/.test(raw)) avi.push("la portada no tiene un `alt` descriptivo");
  // El formateador parte las líneas largas: el valor puede estar en la siguiente.
  if (!new RegExp(`slug:\\s*\\n?\\s*"${post.slug}"`).test(raw))
    err.push("el `slug` no coincide con el del JSON");
  if (post.date && !raw.includes(post.date)) avi.push("la `fecha` no es la del JSON original");

  // 5. Pieza audiovisual: marcador roto de Elementor sin recuperar.
  const iframeRoto = /<iframe[^>]*src="data:image\/svg\+xml/.test(post.html);
  if (iframeRoto && !/youtubeId|enlaceExterno/.test(raw)) {
    const titulo = (post.html.match(/<iframe[^>]*title="([^"]*)"/) || [])[1];
    avi.push(
      "el original tiene un iframe roto y el dato no recupera la pieza" +
        (titulo ? ` (pista del original: title="${titulo}")` : "") +
        " — confirma que la referencia no se puede recuperar"
    );
  }
  if (/enlaceExterno/.test(raw) && /etiqueta: "Escuchar/.test(raw) && !/formato: "audio"/.test(raw))
    avi.push('pieza de audio sin `formato: "audio"` (la interfaz dirá «Ver»)');

  for (const e of err) console.log("   ERROR  " + e);
  for (const a of avi) console.log("   aviso  " + a);
  if (!err.length && !avi.length) console.log("   ok");
  errores += err.length;
  avisos += avi.length;
}

console.log(`\n${errores} error(es), ${avisos} aviso(s).`);
process.exit(errores ? 1 : 0);
