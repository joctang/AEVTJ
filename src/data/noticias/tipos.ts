/**
 * Anatomía canónica de una noticia de la AEVTJ.
 *
 * Todas las noticias migradas desde WordPress se normalizan a esta forma y se
 * pintan con `src/components/NoticiaArticulo.astro`. El HTML heredado de
 * Elementor (`src/content/posts/*.json`) sigue siendo la fuente del contenido,
 * pero deja de ser la fuente del diseño.
 *
 * Reglas de contenido (ver PLANTILLA-NOTICIAS.md):
 * - No se inventan hechos, cifras, fechas ni declaraciones.
 * - Las citas se transcriben literalmente del original.
 * - Los campos opcionales que el original no tenga se omiten, no se rellenan.
 */

/** Bloques admitidos en el cuerpo del artículo, en orden de aparición. */
export type BloqueNoticia =
  | { tipo: "seccion"; titulo: string }
  | { tipo: "parrafo"; texto: string } // admite <strong>, <em>, <a> inline
  | { tipo: "cita"; texto: string; autor?: string }
  | { tipo: "lista"; etiqueta?: string; items: string[] }
  | { tipo: "imagen"; src: string; alt: string; pie?: string; width?: number; height?: number };

/** Dato numérico o breve del lateral de contexto (programa, minuto, cifra…). */
export interface DatoContexto {
  valor: string;
  etiqueta: string;
  detalle?: string;
}

/** Persona que interviene en la pieza (entrevistas, mesas, reportajes). */
export interface Interviniente {
  nombre: string;
  rol: string;
}

/** Término del glosario lateral. */
export interface ConceptoClave {
  termino: string;
  definicion: string;
}

/** Tarjeta de recurso o llamada a la acción del pie del artículo. */
export interface RecursoNoticia {
  titulo: string;
  texto: string;
  href: string;
  etiqueta: string;
  externo?: boolean;
}

export interface Noticia {
  /** Debe coincidir con el `slug` del JSON de `src/content/posts/`. */
  slug: string;
  titulo: string;
  /** ISO. Se toma del JSON original, nunca de la fecha de migración. */
  fecha: string;
  /** Firma. Por defecto "AEVTJ · Redacción". */
  autoria: string;
  /** Medio o programa del que procede la pieza, si lo hay. */
  medio?: {
    /** "Emitido en", "Publicado en", "Programa"… */
    etiqueta: string;
    nombre: string;
  };
  portada: { src: string; alt: string; width?: number; height?: number };
  /** Resumen de 1-2 frases. Se reutiliza como meta description. */
  entradilla: string;
  /** Cita que abre la pieza, cuando el original la destaca. */
  citaDestacada?: { texto: string; autor: string; cargo?: string };
  /**
   * Pieza audiovisual de la que informa la noticia.
   *
   * - `youtubeId`: se incrusta el reproductor.
   * - `enlaceExterno`: cuando el medio no permite incrustar (RTVE Play, 3Cat,
   *   Cadena SER, Onda Cero…) se muestra una tarjeta con enlace.
   * - Se pueden dar los dos: se incrusta el vídeo Y se enlaza la ficha del medio.
   *
   * `formato` decide los textos de la interfaz ("Ver"/"Escuchar"). Un podcast o
   * un corte de radio es `"audio"`; por defecto se asume `"video"`.
   */
  pieza?: {
    titulo: string;
    formato?: "video" | "audio";
    youtubeId?: string;
    enlaceExterno?: { href: string; etiqueta: string };
    pie?: string;
    /** "01:04:50" — momento en el que empieza lo relevante. */
    minuto?: string;
  };
  cuerpo: BloqueNoticia[];
  contexto?: DatoContexto[];
  conceptos?: ConceptoClave[];
  /** Quién habla en la pieza. Habitual en entrevistas y mesas redondas. */
  intervinientes?: Interviniente[];
  perfil?: { titulo: string; texto: string };
  recursos?: RecursoNoticia[];
  /** Enlaces a la fuente original. */
  fuentes?: { etiqueta: string; href: string }[];
}
