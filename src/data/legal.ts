// Contenido extraído literalmente del HTML de Elementor en
// src/content/pages/legal.json. No se reescribe, resume ni interpreta ningún
// hecho procesal; sólo se han corregido los ordinales ("1a" → "1ª") y se ha
// separado país y año en los casos internacionales.

import fs from "node:fs";
import path from "node:path";

export interface LegalIntro {
  kicker: string;
  titulo: string;
  entradilla: string;
  notaProteccionDatos: string;
  heroImage: { src: string; alt: string; width: number; height: number };
  actualizado: string;
}

export type TonoEstado = "favorable" | "enProceso" | "recurrido";

export interface DocumentoLegal {
  etiqueta: string;
  href: string;
}

export interface CasoLegal {
  id: string;
  demandado: string;
  rol: string;
  descripcion: string;
  estado: { etiqueta: string; tono: TonoEstado };
  situacion: string[];
  hitos: { fecha: string; texto: string }[];
  documentos: DocumentoLegal[];
  nota?: string;
  audiosJuicio?: { titulo: string; href: string };
}

export interface CasoInternacional {
  n: number;
  pais: string;
  anio: number;
  resumen: string;
  href: string;
}

/** Tamaño real del archivo en tiempo de build; null (con aviso) si no existe. */
export function tamanoDocumento(href: string): string | null {
  try {
    const ruta = path.join(process.cwd(), "public", href.replace(/^\//, ""));
    const bytes = fs.statSync(ruta).size;
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MB`;
    }
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  } catch {
    console.warn(`[legal] No se encuentra el documento ${href}; se omite el tamaño.`);
    return null;
  }
}

export const intro: LegalIntro = {
  kicker: "Transparencia · Vía judicial",
  titulo: "Demandas, juicios y sentencias judiciales",
  entradilla:
    'Durante el año <strong>2021</strong> la Asociación Española de Víctimas de los Testigos de Jehová (AEVTJ) recibió en su sede social <strong>4 demandas civiles</strong> procedentes de <strong>una demanda interpuesta al juzgado de primera instancia de Torrejón de Ardoz (Madrid)</strong>, desde la <strong>central de los Testigos de Jehová en españa desde su sede en Ajalvir (Madrid)</strong>. La situación de cada una de estas demandas se expresa debajo.',
  notaProteccionDatos:
    "Todo el material ha sido editado con la exclusiva finalidad de cumplir con la ley de protección de datos.",
  heroImage: {
    src: "/uploads/2025/10/nmcr_downloaded_image.png",
    alt: "Sede de la asociación",
    width: 1600,
    height: 900,
  },
  actualizado: "abril de 2026",
};

export const casos: CasoLegal[] = [
  {
    id: "caso-aevtj",
    demandado: "Asociación Española de Víctimas de los Testigos de Jehová",
    rol: "Entidad jurídica registrada en el Registro Nacional de Asociaciones",
    descripcion: "Demanda contra la entidad jurídica registrada en el Registro Nacional de Asociaciones.",
    estado: { etiqueta: "Ganada en 2ª instancia", tono: "favorable" },
    hitos: [
      { fecha: "2021", texto: "Llega la demanda." },
      { fecha: "Diciembre 2023", texto: "Gana la Asociación en 1ª instancia." },
      { fecha: "Diciembre 2023", texto: "TdJ apelan a Audiencia Provincial." },
      { fecha: "Abril 2026", texto: "Gana la Asociación en 2ª instancia." },
    ],
    situacion: [],
    documentos: [
      { etiqueta: "Demanda 1ª instancia", href: "/uploads/2023/12/demanda_juzgado_ta_madrid_borrados.pdf" },
      { etiqueta: "SENTENCIA 1ª instancia", href: "/uploads/2023/12/SentenciaProc729-2021_sin_nombres_fin.pdf" },
      { etiqueta: "SENTENCIA 2ª instancia", href: "/uploads/2026/04/Sentencia_Apelacion_AEVTJ_borrado.pdf" },
    ],
    audiosJuicio: {
      titulo: "Audios del Juicio Oral",
      href: "https://www.youtube.com/channel/UCTRZtQS3Zf8jwrByyjE6rgg",
    },
  },
  {
    id: "caso-israel-florez",
    demandado: "Israel Flórez",
    rol: "Ex-presidente de la AEVTJ",
    descripcion: "Demanda contra el ex-presidente de la AEVTJ, Israel Flórez.",
    estado: { etiqueta: "En proceso", tono: "enProceso" },
    hitos: [],
    situacion: ["El juicio aún no se ha celebrado"],
    documentos: [],
    nota: "En proceso",
  },
  {
    id: "caso-enrique-carmona",
    demandado: "Enrique Carmona",
    rol: "Ex-secretario de la AEVTJ",
    descripcion: "Demanda contra el ex-secretario de la AEVTJ, Enrique Carmona.",
    estado: { etiqueta: "Ganada · apelación inadmitida", tono: "favorable" },
    hitos: [],
    situacion: [
      "Situación: ganada por Enrique Carmona en la Audiencia Provincial de Madrid en 2024.",
      "Apelación de los TdJ rechazada por el Tribunal Supremo.",
    ],
    documentos: [
      { etiqueta: "DEMANDA 1ª instancia", href: "/uploads/2023/12/SIN-NOMBRES_5912-Demanda-TESTIGOS-CRISTIANOS-JEHOVA-Vs-CARMONA-VDEF.pdf" },
      { etiqueta: "SENTENCIA 1ª instancia", href: "/uploads/2023/12/Proc-432-2021_Sentencia-contr-enrique-carmona-sin-nombres.pdf" },
      { etiqueta: "INADMISION APEL. TRIBUNAL SUPREMO", href: "/uploads/2026/04/inadmision_supremo_Enrique_borrado.pdf" },
      { etiqueta: "DIFERENCIAS DEMANDA VS SENTENCIA 1ª instancia", href: "/uploads/2023/12/diferencias_que_piden_que_obtienen_juicioEcarmona.pdf" },
    ],
  },
  {
    id: "caso-gabriel-pedrero",
    demandado: "Gabriel Pedrero",
    rol: "Ex-vocal de gestión de redes sociales de la AEVTJ",
    descripcion: "Demanda contra el ex-vocal de gestión de redes sociales de la AEVTJ, Gabriel Pedrero.",
    estado: { etiqueta: "Recurrida al Constitucional", tono: "recurrido" },
    hitos: [],
    situacion: [
      "Situación: ganada en 1ª instancia, perdida en Audiencia Provincial de Madrid. Pendiente de apelación al Constitucional.",
    ],
    documentos: [
      { etiqueta: "SENTENCIA 2ª instancia", href: "/uploads/2026/04/sentencia_apelacion_Gabriel_borrado.pdf" },
    ],
  },
];

export const audiosJuicio: { titulo: string; href: string } = {
  titulo: "Audios del Juicio Oral",
  href: "https://www.youtube.com/channel/UCTRZtQS3Zf8jwrByyjE6rgg",
};

export const internacionales: CasoInternacional[] = [
  {
    n: 1,
    // Corregido 21/09: el contenido heredado etiquetaba este caso como
    // "Pennsylvania 2025", pero el resumen y el enlace corresponden a
    // Conti v. Watchtower Bible & Tract Society of New York, resuelto por el
    // Tribunal de Apelación de California (1º Distrito) el 13/04/2015.
    pais: "Estados Unidos · California",
    anio: 2015,
    resumen:
      'El Tribunal de Apelación de California confirmó la <strong>responsabilidad por negligencia</strong> de Watchtower y de la congregación por no limitar/supervisar actividades en las que el agresor accedió a la víctima, y <strong>mantuvo 2,8 M$ en daños compensatorios</strong>, revocando los punitivos y el “deber de advertir”.',
    href: "https://law.justia.com/cases/california/court-of-appeal/2015/a136641.html",
  },
  {
    n: 2,
    pais: "Estados Unidos · Montana",
    anio: 2024,
    resumen:
      'Un juez federal en Montana <strong>canceló la fecha de juicio</strong> en los casos <strong>Caekaert</strong> y <strong>Rowland</strong> tras notificarse un <strong>acuerdo confidencial</strong> entre las partes. Llega después de <strong>varias sanciones</strong> a la Watchtower por conductas en el descubrimiento de pruebas. El expediente se cerró administrativamente en semanas posteriores.',
    href: "https://www.jwchildabuse.org/news/jehovahs-witnesses-settle-historic-child-abuse-cases-in-federal-court/",
  },
  {
    n: 3,
    pais: "Noruega",
    anio: 2025,
    resumen:
      "El gobierno noruego revocó en 2022 el registro y subsidios de los Testigos de Jehová por prácticas de ostracismo (shunning) consideradas dañinas para niños y libertad de salida. Tras victorias y derrotas en tribunales inferiores (última apelación ganada en marzo 2025), el Estado apeló a la Corte Suprema, que programó audiencia para febrero 2026.",
    href: "https://avoidjw.org/news/norway-supreme-court-shunning-childrens-rights-appeal/",
  },
  {
    n: 4,
    pais: "Estados Unidos · Nueva York",
    anio: 2024,
    resumen:
      'La Apelación de NY <strong>confirmó</strong> que el Cuerpo Gobernante puede ser <strong>demandado</strong> como asociación no incorporada y que las reclamaciones por <strong>negligencia</strong> estaban suficientemente alegadas.<br><strong>No es condena en el fondo</strong>: permite que el pleito siga (descubrimiento, etc.).',
    href: "https://caselaw.findlaw.com/court/ny-supreme-court/116669237.html",
  },
];
