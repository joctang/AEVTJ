import type { Noticia } from "./tipos";

/**
 * NOTICIA DE REFERENCIA de la plantilla. Migrada desde
 * `src/content/posts/entrevista-soraya-narez-el-intermedio-la-sexta.json`.
 *
 * Notas de migración:
 * - El `<iframe>` del original tenía `src="data:image/svg+xml;base64,…"`
 *   (marcador de posición de Elementor): el vídeo no se veía. El identificador
 *   real se recuperó del enlace "Ver en YouTube" del bloque de recursos.
 * - Se descartaron el bloque "Post populares", la caja de newsletter y la de
 *   "¿Podemos ayudarte?": el layout ya los ofrece al final y en el footer.
 * - Los enlaces internos que apuntaban a https://victimasdetestigosdejehova.org
 *   se convirtieron en rutas relativas.
 */
export const noticia: Noticia = {
  slug: "entrevista-soraya-narez-el-intermedio-la-sexta",
  titulo: "Entrevista a Soraya Narez en El Intermedio, La Sexta",
  fecha: "2026-03-12T07:11:28",
  autoria: "AEVTJ · Redacción Madrid",
  medio: { etiqueta: "Emitido en", nombre: "El Intermedio · LaSexta" },
  portada: {
    src: "/uploads/2026/03/ei-intermedio.jpg",
    alt: "Soraya Narez durante su entrevista en el plató de El Intermedio",
  },
  entradilla:
    "Soraya Narez, vicepresidenta de la AEVTJ, expuso en El Intermedio uno de los mecanismos más invisibles de la organización: la condicionalidad del afecto.",
  citaDestacada: {
    texto:
      "Te das cuenta de que la gente de tu alrededor no te quiere por quien eres, sino porque eres <em>obediente</em>.",
    autor: "Soraya Narez",
    cargo: "Vicepresidenta de la AEVTJ",
  },
  pieza: {
    titulo: "Soraya Narez en El Intermedio – LaSexta",
    youtubeId: "yX6Z-9-OUHI",
    pie: "Entrevista completa · El Intermedio · LaSexta · 2026",
  },
  cuerpo: [
    { tipo: "seccion", titulo: "El despertar frente al amor condicional" },
    {
      tipo: "parrafo",
      texto:
        "La visibilidad de las víctimas de los Testigos de Jehová alcanzó un nuevo hito con la aparición de Soraya Narez, vicepresidenta de la AEVTJ, en <strong>El Intermedio de LaSexta</strong>. En una conversación sincera y cruda, Narez expuso uno de los mecanismos más invisibles y dañinos de la organización: la condicionalidad del afecto.",
    },
    {
      tipo: "cita",
      texto:
        "El sistema de expulsión no es solo una norma administrativa: es una herramienta de presión emocional que obliga a elegir entre la propia conciencia y el contacto con los seres queridos.",
    },
    { tipo: "seccion", titulo: "La muerte social como mecanismo de control" },
    {
      tipo: "parrafo",
      texto:
        'Narez subrayó que abandonar la organización supone enfrentarse a una <strong>"muerte social" inmediata</strong>. Su testimonio en LaSexta puso el foco en cómo el miedo a perder a la familia mantiene a miles de personas dentro de una estructura en la que ya no creen, generando cuadros de ansiedad y un profundo sentimiento de soledad.',
    },
    {
      tipo: "parrafo",
      texto:
        "Desde la AEVTJ, reafirmamos que este tipo de testimonios son fundamentales para que la sociedad comprenda que el daño psicológico es real y no se limita a una simple discrepancia religiosa. Como señaló Soraya, <strong>el apoyo mutuo entre quienes han pasado por lo mismo</strong> es la clave para la reconstrucción personal.",
    },
  ],
  conceptos: [
    {
      termino: "Amor condicional",
      definicion:
        "El afecto dentro del grupo está supeditado a la obediencia total a las normas. Al cuestionarlas, el amor desaparece.",
    },
    {
      termino: "Muerte social",
      definicion:
        "Cese total de todo contacto social y familiar tras la expulsión o abandono voluntario de la organización.",
    },
    {
      termino: "Persuasión coercitiva",
      definicion:
        "Técnicas de control que operan sobre la identidad, el miedo y el aislamiento para mantener la lealtad del miembro.",
    },
  ],
  perfil: {
    titulo: "Quién es Soraya Narez",
    texto:
      "Vicepresidenta de la AEVTJ. Exmiembro de los Testigos de Jehová y activista por los derechos de las víctimas del ostracismo religioso. Ha compartido su experiencia en medios nacionales para visibilizar el impacto del control sectario.",
  },
  recursos: [
    {
      titulo: "Ver la entrevista",
      texto:
        "Accede a la entrevista completa de Soraya Narez en el canal de El Intermedio en LaSexta.",
      href: "https://www.youtube.com/watch?v=yX6Z-9-OUHI",
      etiqueta: "Ver en YouTube",
      externo: true,
    },
    {
      titulo: "Asistencia psicológica",
      texto:
        "Si te sientes identificado con este relato y necesitas ayuda para gestionar el aislamiento o la salida del grupo, contáctanos.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
    {
      titulo: "Red de víctimas",
      texto:
        "No estás solo. En la AEVTJ encontrarás un espacio seguro para compartir tu historia sin juicios.",
      href: "/hazte-socio/",
      etiqueta: "Unirse a la red",
    },
  ],
  fuentes: [
    { etiqueta: "Entrevista en YouTube · El Intermedio", href: "https://www.youtube.com/watch?v=yX6Z-9-OUHI" },
  ],
};

export default noticia;
