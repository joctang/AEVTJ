import type { Noticia } from "./tipos";

const NOTICIA_3CAT =
  "https://www.3cat.cat/3catinfo/perdre-la-familia-per-ser-homosexual-la-historia-de-joves-expulsats-dels-testimonis-de-jehova/noticia/3332027/";

/**
 * Migrada desde `src/content/posts/nuevo-documental-revela-historias-de-jovenes-expulsados-por-ser-homosexuales-en-los-testigos-de-jehova.json`.
 *
 * Notas de migración:
 * - Sin vídeo en el original: no hay iframe que recuperar, solo el enlace a la
 *   noticia de 3Cat (que era el logo clicable "3 cat" del arranque).
 * - La cita de Marta Jael se mantiene como cita de cuerpo; el original no
 *   indica su cargo, así que no se añade.
 * - Se descartaron "Tags", "Difunde y ayuda", "Ultimas noticias",
 *   "¿Podemos ayudarte?" y "Categorías".
 */
export const noticia: Noticia = {
  slug: "nuevo-documental-revela-historias-de-jovenes-expulsados-por-ser-homosexuales-en-los-testigos-de-jehova",
  titulo: "Nuevo documental revela historias de jóvenes expulsados por ser homosexuales en los Testigos de Jehová",
  fecha: "2025-03-19T15:54:17",
  autoria: "AEVTJ · Redacción",
  portada: {
    src: "/uploads/2025/03/image-52.webp",
    alt: "Fotograma del documental de 3Cat sobre jóvenes expulsados de los Testigos de Jehová",
  },
  entradilla:
    "El documental de 3Cat «Perder la familia por ser homosexual» recoge los testimonios de jóvenes apartados de los Testigos de Jehová por su orientación sexual.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        'Cuando decir "quién eres" te deja sin familia. Este febrero se estrenó un <a href="' +
        NOTICIA_3CAT +
        '">documental</a> impactante que aborda una de las prácticas más dolorosas y menos visibles dentro de los Testigos de Jehová: la expulsión de jóvenes por su orientación sexual. El título —<em>"Perder la familia por ser homosexual"</em> (o equivalente, según la versión)— resume el drama de quienes deciden vivir su identidad en un entorno religioso que no la admite.',
    },
    {
      tipo: "parrafo",
      texto:
        "La pieza recoge testimonios de jóvenes apartados, rechazados o silenciados por el simple hecho de ser homosexuales. Hablan de:",
    },
    {
      tipo: "lista",
      etiqueta: "Voces silenciadas, ahora visibles",
      items: [
        '<strong>Rupturas familiares</strong> y el "muro de silencio" (shunning).',
        "<strong>Aislamiento social</strong> y pérdida de apoyo emocional o económico.",
        "<strong>Presiones</strong> para someterse a normas y procesos internos.",
        "La decisión de <strong>abandonar la organización</strong> para vivir con autenticidad, aun a costa de quedar separados de su entorno.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "Estas historias muestran no solo el dolor individual, sino un <strong>mecanismo institucional</strong> que legitima las expulsiones bajo criterios doctrinales del grupo.",
    },
    { tipo: "imagen", src: "/uploads/2025/03/image-53.webp", alt: "Natan, joven expulsado de los Testigos de Jehová, en el documental de 3Cat" },
    { tipo: "cita", texto: "Esta noche búscate dónde dormir, aquí no será", autor: "Marta Jael" },
    { tipo: "seccion", titulo: "Por qué este documental importa" },
    {
      tipo: "lista",
      items: [
        "<strong>Visibiliza</strong> una problemática que rara vez trasciende al público.",
        "<strong>Sensibiliza</strong> a audiencias que desconocen estas dinámicas de control y exclusión.",
        '<strong>Refuerza la dignidad</strong> de las víctimas: no son "culpables", fueron discriminadas por ser quienes son.',
        "<strong>Impulsa acciones</strong> legales y políticas: sirve como base para iniciativas legislativas y quejas ante organismos de derechos humanos.",
      ],
    },
    { tipo: "seccion", titulo: "Convocatoria a la difusión y al diálogo" },
    {
      tipo: "parrafo",
      texto: "Desde la AEVTJ animamos a:",
    },
    {
      tipo: "lista",
      items: [
        "<strong>Compartir</strong> el documental en redes, medios, asociaciones LGTBI+, foros y universidades.",
        "<strong>Organizar proyecciones</strong> y <strong>mesas de diálogo</strong> con personas afectadas, para tejer redes de apoyo.",
        "<strong>Incorporarlo</strong> a campañas de sensibilización: el poder de la narrativa audiovisual es clave para generar empatía y cambio.",
      ],
    },
    { tipo: "seccion", titulo: "Reflexión institucional" },
    {
      tipo: "parrafo",
      texto:
        'La publicación de este documental confirma algo que la AEVTJ sostiene desde su fundación: el <strong>silencio no puede ser herramienta de control ni escudo de impunidad</strong>. Dar espacio a estas vivencias no solo denuncia hechos; también <strong>reconoce la dignidad</strong> de quienes han sido excluidos por afirmar su identidad y su verdad. Ojalá esta obra sea una <strong>llama más de visibilidad, memoria y reparación</strong>.',
    },
  ],
  recursos: [
    {
      titulo: "La noticia en 3Cat",
      texto:
        "«Perdre la família per ser homosexual»: la historia de jóvenes expulsados de los Testigos de Jehová, en el portal de información de 3Cat.",
      href: NOTICIA_3CAT,
      etiqueta: "Leer en 3Cat",
      externo: true,
    },
  ],
  fuentes: [{ etiqueta: "Noticia original · 3Cat", href: NOTICIA_3CAT }],
};

export default noticia;
