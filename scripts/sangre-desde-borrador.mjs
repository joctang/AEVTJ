// Convierte el borrador editorial de /testigos-de-jehova/sangre/ en datos para la web.
// Uso: node scripts/sangre-desde-borrador.mjs
// Lee 06_Contenido/testigos-de-jehova__sangre/BORRADOR.md (hasta «Notas de edición»)
// y escribe src/data/testigos-de-jehova-sangre.json. El texto no se reescribe:
// solo se convierte el markdown en línea (enlaces, negrita, cursiva, ==subrayado==) a HTML.
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const origen = resolve(raiz, "../06_Contenido/testigos-de-jehova__sangre/BORRADOR.md");
const destino = resolve(raiz, "src/data/testigos-de-jehova-sangre.json");

// Identificadores estables por título de sección (los anclajes no cambian si se retoca el texto).
const ids = {
  "¿Qué dicen hoy sobre la sangre?": "postura-actual",
  "¿En qué textos de la Biblia se basan?": "textos-biblicos",
  "¿Cómo ha cambiado su postura con los años?": "cronologia",
  "¿En qué se diferencia de otras religiones?": "otras-religiones",
  "Niños y jóvenes presentados como ejemplo de fe": "jovenes",
  "Muertes y riesgos documentados": "muertes-y-riesgos",
  "Autonomía del paciente: el otro lado del debate": "autonomia",
  "¿Qué significa el cambio en España?": "espana",
  "¿Qué está pasando en otros países?": "otros-paises",
  "Preguntas frecuentes": "preguntas",
  "La mirada de la AEVTJ": "mirada-aevtj",
};

const enLinea = (s) =>
  s
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, texto, href) =>
      /^https?:/.test(href)
        ? `<a href="${href}" target="_blank" rel="noopener">${texto}</a>`
        : `<a href="${href}">${texto}</a>`
    )
    .replace(/==([^=]+)==/g, '<mark class="sg-subrayado">$1</mark>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, "$1<em>$2</em>");

const texto = readFileSync(origen, "utf8").replace(/\r\n/g, "\n")
  .replace(/<!--[\s\S]*?-->/g, "")
  .split(/\n---\n/)[0];

// Bloques separados por líneas en blanco.
const trozos = texto.split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean);

const datos = { titulo: "", entrada: [], resumen: null, secciones: [] };
let seccion = null;
let sub = null;

const destinoBloques = () => (sub ? sub.bloques : seccion ? seccion.bloques : datos.entrada);

for (const t of trozos) {
  if (t.startsWith("# ")) { datos.titulo = t.slice(2).trim(); continue; }
  if (t.startsWith("## ")) {
    const titulo = t.slice(3).trim();
    seccion = { id: ids[titulo] ?? titulo.toLowerCase().replace(/[^a-z0-9]+/g, "-"), titulo, bloques: [], subsecciones: [] };
    sub = null;
    datos.secciones.push(seccion);
    continue;
  }
  // «#### Marzo»: subtítulo dentro de una etapa (hito), se pinta como rótulo.
  if (t.startsWith("#### ")) {
    destinoBloques().push({ tipo: "hito", titulo: t.slice(5).trim() });
    continue;
  }
  if (t.startsWith("### ")) {
    sub = { titulo: t.slice(4).trim(), bloques: [] };
    seccion.subsecciones.push(sub);
    continue;
  }
  // «>> frase»: idea propia destacada (no es cita de ninguna fuente).
  if (t.startsWith(">> ")) {
    destinoBloques().push({ tipo: "destacado", html: enLinea(t.slice(3).replace(/\n\s*/g, " ")) });
    continue;
  }
  // Cita textual de una fuente: líneas «> «texto»» y una última «> — fuente».
  if (t.startsWith(">")) {
    const lineas = t.split("\n").map((l) => l.replace(/^>\s?/, "").trim());
    const f = lineas.findIndex((l) => l.startsWith("— "));
    const cuerpo = f === -1 ? lineas : lineas.slice(0, f);
    // Una línea «![texto alternativo](ruta)» añade la portada o imagen de la fuente.
    const img = cuerpo.map((l) => l.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)).find(Boolean);
    const citas = cuerpo.filter((l) => !/^!\[/.test(l)).map(enLinea);
    const bloque = { tipo: "cita", citas, fuente: f === -1 ? "" : enLinea(lineas[f].slice(2)) };
    if (img) bloque.imagen = { alt: img[1], src: img[2] };
    destinoBloques().push(bloque);
    continue;
  }
  if (t.startsWith("- ")) {
    const items = t.split(/\n(?=- )/).map((linea) => {
      const l = linea.slice(2).replace(/\n\s*/g, " ").trim();
      const m = l.match(/^\*\*(.+?)\*\*\s*(.*)$/);
      return m ? { etiqueta: enLinea(m[1]), html: enLinea(m[2]) } : { etiqueta: "", html: enLinea(l) };
    });
    destinoBloques().push({ tipo: "lista", items });
    continue;
  }
  if (t.startsWith("|")) {
    const filas = t.split("\n").filter((l) => !/^\|[-\s|]+\|$/.test(l))
      .map((l) => l.replace(/^\||\|$/g, "").split("|").map((c) => enLinea(c.trim())));
    destinoBloques().push({ tipo: "tabla", cabecera: filas[0], filas: filas.slice(1) });
    continue;
  }
  // El resumen inicial («En resumen…») va antes de la primera sección.
  if (!seccion && /^\*\*En resumen/.test(t)) {
    datos.resumen = { titulo: t.replace(/\*\*/g, "").replace(/:$/, "") };
    continue;
  }
  destinoBloques().push({ tipo: "parrafo", html: enLinea(t.replace(/\n\s*/g, " ")) });
}

// La lista que sigue al título del resumen son sus puntos.
if (datos.resumen) {
  const i = datos.entrada.findIndex((b) => b.tipo === "lista");
  datos.resumen.items = datos.entrada[i].items;
  datos.entrada.splice(i, 1);
}

// Preguntas frecuentes: cada subsección es una pregunta.
const faq = datos.secciones.find((s) => s.id === "preguntas");
if (faq) {
  datos.preguntas = faq.subsecciones.map((q) => ({
    pregunta: q.titulo,
    respuesta: q.bloques.map((b) => b.html).join(" "),
  }));
  datos.secciones = datos.secciones.filter((s) => s !== faq);
}

// Desde el 18-10-2026 el texto se retoca directamente en el JSON: no se sobrescribe
// un JSON más reciente que su borrador salvo con --forzar.
if (!process.argv.includes("--forzar") && existsSync(destino) && statSync(destino).mtimeMs > statSync(origen).mtimeMs)
  throw new Error("El JSON de sangre es más reciente que su BORRADOR.md; no se sobrescribe (usa --forzar si es lo que quieres).");
writeFileSync(destino, JSON.stringify(datos, null, 2) + "\n", "utf8");
console.log(`Escrito ${destino}: ${datos.secciones.length} secciones, ${datos.preguntas?.length ?? 0} preguntas.`);
