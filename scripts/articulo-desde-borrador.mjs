// Convierte el borrador editorial de un artículo documental de /testigos-de-jehova/ en datos para la web.
// Uso: node scripts/articulo-desde-borrador.mjs cumpleanos|navidad|biblia|fundador|vestimenta
// Mismo formato de borrador que la página de sangre (scripts/sangre-desde-borrador.mjs):
//   ## sección · ### subsección · - **Etiqueta.** lista · > «cita» + > — fuente · >> idea destacada.
// El texto no se reescribe: solo se convierte el markdown en línea a HTML.
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Identificadores estables por título de sección (los anclajes no cambian si se retoca el texto).
const articulos = {
  cumpleanos: {
    ids: {
      "Los cuatro argumentos de la organización": "respuesta",
      "Cómo se ha explicado esta postura con los años": "historia",
      "Cuando se celebra un cumpleaños en clase": "escuela",
      "Lo que recuerdan algunas personas que crecieron como Testigos": "infancia",
      "Regalos y cumpleaños en familia": "familia",
      "¿Celebrar un cumpleaños puede llevar a la expulsión?": "expulsion",
      "Volver a celebrar después de dejar la religión": "despues",
      "Preguntas frecuentes": "preguntas",
      "Escuchar lo que vivió cada persona": "mirada-aevtj",
      "Fuentes y límites de este artículo": "fuentes",
    },
  },
  navidad: {
    ids: {
      "¿Qué dicen hoy sobre la Navidad?": "respuesta",
      "¿En qué textos de la Biblia se apoyan?": "biblia",
      "¿Cómo pasaron de celebrarla a rechazarla?": "historia",
      "¿Nació Jesús el 25 de diciembre?": "fecha",
      "¿Se eligió esa fecha para sustituir una fiesta pagana?": "origen",
      "¿Y el árbol, los regalos y las demás costumbres?": "costumbres",
      "¿Por qué otros cristianos sí la celebran?": "otros-cristianos",
      "¿Qué pasa cuando llega la Navidad al colegio?": "colegio",
      "¿Pueden aceptar regalos o reunirse con la familia?": "familia",
      "¿Celebrar la Navidad puede tener consecuencias?": "consecuencias",
      "La primera Navidad después de salir": "despues",
      "Preguntas frecuentes": "preguntas",
      "Que nadie tenga que elegir entre su conciencia y su familia": "mirada-aevtj",
      "Fuentes": "fuentes",
    },
  },
};

const biblia = {
  ids: {
    "¿Qué Biblia usan los Testigos de Jehová?": "respuesta",
    "¿Cómo ha cambiado la Biblia de los Testigos de Jehová?": "historia",
    "¿Cuál es la Biblia antigua de los Testigos de Jehová y qué edición tengo?": "antigua",
    "¿Quién tradujo la Traducción del Nuevo Mundo?": "comite",
    "¿En qué se diferencia de la Reina-Valera y de otras Biblias?": "diferencias",
    "¿Qué versículos quitaron los Testigos de Jehová?": "versiculos",
    "¿La Biblia católica tiene más libros?": "canon",
    "¿Es la Biblia de los Testigos de Jehová una Biblia cristiana?": "cristiana",
    "¿Qué dicen los especialistas sobre la Traducción del Nuevo Mundo?": "especialistas",
    "¿Es fiable la Biblia de los Testigos de Jehová?": "fiable",
    "Preguntas frecuentes": "preguntas",
    "Si creciste con esta Biblia": "mirada-aevtj",
    "Fuentes": "fuentes",
  },
};
articulos.biblia = biblia;

const fundador = {
  ids: {
    "¿Quién fundó los Testigos de Jehová?": "respuesta",
    "¿En qué año se fundaron los Testigos de Jehová?": "fechas",
    "De los grupos de estudio al nombre actual: cronología": "historia",
    "¿Quién fue Charles Taze Russell?": "russell",
    "¿Cómo murió y dónde está enterrado Charles Taze Russell?": "muerte",
    "Lo que se dice de Russell y lo que consta": "consta",
    "¿Por qué hay una pirámide junto a su tumba?": "piramide",
    "¿Era masón Charles Taze Russell?": "mason",
    "El trigo milagroso y el pleito con el Brooklyn Daily Eagle": "trigo",
    "¿Sabía griego? ¿Estaba ordenado? El pleito de Hamilton": "hamilton",
    "Su matrimonio y el juicio de 1908": "matrimonio",
    "¿Qué profetizó Russell sobre 1914?": "fecha1914",
    "¿Qué dicen los Testigos de Jehová y los historiadores?": "versiones",
    "¿Por qué se llaman Testigos de Jehová?": "nombre",
    "¿Qué pasó con los demás Estudiantes de la Biblia?": "estudiantes",
    "¿De dónde son los Testigos de Jehová?": "origen",
    "Preguntas frecuentes": "preguntas",
    "Si quieres entender de dónde viene lo que te enseñaron": "mirada-aevtj",
    "Fuentes": "fuentes",
  },
};
articulos.fundador = fundador;

articulos.vestimenta = {
  ids: {
    "¿Cómo visten en las reuniones y al predicar?": "respuesta",
    "¿Por qué visten de manera formal?": "principios",
    "¿Por qué los Testigos de Jehová no usaban barba? El cambio de 2023": "barba",
    "Cómo se vivió el cambio": "2025",
    "¿Las mujeres tienen que llevar falda?": "mujeres",
    "¿Los hombres necesitan traje y corbata?": "hombres",
    "¿Qué cambia al participar en el programa o visitar Betel?": "programa",
    "¿Y en la vida diaria o en otros países?": "vida-diaria",
    "Preguntas frecuentes": "preguntas",
    "Mirar a la persona, no solo a su ropa": "mirada-aevtj",
    "Fuentes y alcance": "fuentes",
  },
};

articulos.expulsion = {
  ids: {
    "¿Qué es la expulsión de los Testigos de Jehová?": "que-es",
    "¿Por qué pueden expulsar a un Testigo de Jehová?": "motivos",
    "¿Cómo funciona el comité judicial?": "comite",
    "¿Cómo se trata a una persona expulsada?": "trato",
    "¿Qué pasa con la familia de una persona expulsada?": "familia",
    "¿Es lo mismo expulsado, desasociado, inactivo o ex Testigo?": "diferencias",
    "¿Se puede volver a ser Testigo después de una expulsión?": "readmision",
    "Qué cuentan quienes lo han vivido": "testimonios",
    "¿Han cambiado las instrucciones sobre la expulsión?": "cronologia",
    "Preguntas frecuentes": "preguntas",
    "Lo que más duele es perder a tu gente": "mirada-aevtj",
    "Fuentes y alcance": "fuentes",
  },
};

const tema = process.argv[2];
const config = articulos[tema];
if (!config) throw new Error(`Uso: node scripts/articulo-desde-borrador.mjs ${Object.keys(articulos).join("|")}`);
const origen = resolve(raiz, `../06_Contenido/testigos-de-jehova__${tema}/BORRADOR.md`);
const destino = resolve(raiz, `src/data/testigos-de-jehova-${tema}.json`);

// Artículos cerrados: el texto definitivo está en el JSON, no en el borrador.
const cerrados = ["biblia", "vestimenta", "fundador"];
const forzar = process.argv.includes("--forzar");
if (cerrados.includes(tema) && !forzar)
  throw new Error(`«${tema}» está cerrado: edita src/data/testigos-de-jehova-${tema}.json directamente (o usa --forzar).`);
// No pisar retoques hechos en el JSON después del último cambio del borrador.
if (!forzar && existsSync(destino) && statSync(destino).mtimeMs > statSync(origen).mtimeMs)
  throw new Error(`El JSON de «${tema}» es más reciente que su BORRADOR.md; no se sobrescribe (usa --forzar si es lo que quieres).`);

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

const texto = readFileSync(origen, "utf8").replace(/\r\n/g, "\n").replace(/<!--[\s\S]*?-->/g, "");
const trozos = texto.split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean);

const datos = { titulo: "", entrada: [], secciones: [] };
let tituloTabla = "";
let seccion = null;
let sub = null;
const destinoBloques = () => (sub ? sub.bloques : seccion ? seccion.bloques : datos.entrada);

for (const t of trozos) {
  if (t.startsWith("# ")) { datos.titulo = t.slice(2).trim(); continue; }
  if (t.startsWith("## ")) {
    const titulo = t.slice(3).trim();
    const id = config.ids[titulo];
    if (!id) throw new Error(`Sección sin identificador: «${titulo}». Añádela en articulos.${tema}.ids.`);
    seccion = { id, titulo, bloques: [], subsecciones: [] };
    sub = null;
    datos.secciones.push(seccion);
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
    const citas = (f === -1 ? lineas : lineas.slice(0, f)).map(enLinea);
    destinoBloques().push({ tipo: "cita", citas, fuente: f === -1 ? "" : enLinea(lineas[f].slice(2)) });
    continue;
  }
  // «Tabla: título» (párrafo suelto) da título a la tabla siguiente.
  if (t.startsWith("Tabla: ") && !t.includes("\n")) { tituloTabla = t.slice(7).trim(); continue; }
  if (t.startsWith("|")) {
    const filas = t.split("\n").filter((l) => !/^\|[-\s|:]+\|$/.test(l))
      .map((l) => l.replace(/^\||\|$/g, "").split("|").map((c) => enLinea(c.trim())));
    destinoBloques().push({ tipo: "tabla", titulo: tituloTabla, cabecera: filas[0], filas: filas.slice(1) });
    tituloTabla = "";
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
  if (/^[#|]/.test(t)) throw new Error(`Formato no compatible: «${t.slice(0, 60)}…»`);
  destinoBloques().push({ tipo: "parrafo", html: enLinea(t.replace(/\n\s*/g, " ")) });
}

// Preguntas frecuentes: cada subsección es una pregunta.
const faq = datos.secciones.find((s) => s.id === "preguntas");
if (faq) {
  datos.preguntas = faq.subsecciones.map((q) => ({ pregunta: q.titulo, respuesta: q.bloques.map((b) => b.html).join(" ") }));
  datos.secciones = datos.secciones.filter((s) => s !== faq);
}

writeFileSync(destino, JSON.stringify(datos, null, 2) + "\n", "utf8");
console.log(`${tema}: ${datos.secciones.length} secciones, ${datos.preguntas?.length ?? 0} preguntas → ${destino}`);
