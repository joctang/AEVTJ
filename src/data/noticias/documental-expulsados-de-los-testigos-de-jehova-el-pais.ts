import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/documental-expulsados-de-los-testigos-de-jehova-el-pais.json`.
 *
 * Notas de migración:
 * - El `<iframe>` tenía el marcador base64 de Elementor; el youtubeId se recuperó
 *   del enlace "Abrir en YouTube" del propio HTML.
 * - Descartados: "Últimas noticias", "Categorías", "¿Podemos ayudarte?" y el footer heredado.
 * - Los "Puntos clave" del documental (con su minutado) se llevan al lateral de contexto.
 */
export const noticia: Noticia = {
  slug: "documental-expulsados-de-los-testigos-de-jehova-el-pais",
  titulo: "Documental «Expulsados de los Testigos de Jehová» · El País",
  fecha: "2026-03-03T19:17:32",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Publicado en", nombre: "El País" },
  portada: {
    src: "/uploads/2026/04/maxresdefault-1.jpg",
    alt: "Cartel del documental Expulsados de los Testigos de Jehová de El País",
  },
  entradilla:
    "El País publica el documental «Expulsados de los Testigos de Jehová», que pone nombre y rostro a las víctimas de las políticas de expulsión y describe la «muerte social» que sufren quienes abandonan la confesión.",
  citaDestacada: {
    texto: "El precio del ostracismo: voces silenciadas durante décadas",
    autor: "El País",
    cargo: "Subtítulo del documental",
  },
  pieza: {
    titulo: "Expulsados de los Testigos de Jehová · Documental de El País",
    youtubeId: "dF85vscQnYE",
    pie: "Documental original de El País · Disponible en YouTube · Acceso libre y gratuito",
  },
  cuerpo: [
    { tipo: "seccion", titulo: "Un documental sobre la «muerte social»" },
    {
      tipo: "parrafo",
      texto:
        'El diario El País ha publicado su documental <em>"Expulsados de los Testigos de Jehová"</em>, que pone nombre y rostro a las víctimas de las políticas de expulsión de la organización religiosa. A través de testimonios directos, el documento describe lo que se conoce como <em>"muerte social"</em>: el cese total de contacto con familiares y amigos tras abandonar la confesión.',
    },
    {
      tipo: "parrafo",
      texto:
        '<strong>Samuel Ferrando, presidente de la AEVTJ</strong> participa en el documental aportando una visión privilegiada sobre los mecanismos de control interno y los llamados "comités judiciales". Su testimonio como exanciano enriquece el análisis de las dinámicas organizativas.',
    },
    { tipo: "seccion", titulo: "Necesitas ayuda" },
    {
      tipo: "parrafo",
      texto:
        "No estás solo. Si atraviesas una situación difícil, existen recursos y profesionales disponibles.",
    },
    {
      tipo: "lista",
      items: [
        "<strong>Salud mental:</strong> si atraviesas una crisis o pensamientos de autolesión, contacta con servicios de emergencia o asociaciones especializadas.",
        "<strong>Asesoría legal:</strong> si consideras que tus derechos fundamentales han sido vulnerados, la AEVTJ ofrece orientación legal especializada.",
        "<strong>Derecho de réplica:</strong> la asociación mantiene espacio abierto para debate plural, garantizando la transparencia y postura oficial.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "Celebramos que medios de referencia den voz a quienes han sido silenciados. Este documental es un paso hacia la transparencia.",
    },
  ],
  contexto: [
    {
      valor: "09:20",
      etiqueta: "Gestión de abusos",
      detalle:
        "Antiguos miembros relatan experiencias sobre la gestión interna de casos de abuso infantil y protocolos que evitaron la denuncia externa.",
    },
    {
      valor: "11:50",
      etiqueta: "Identidad LGBTQ+",
      detalle:
        'Se expone la vulnerabilidad especial del colectivo, con testimonios de presión para "curar" la orientación sexual.',
    },
    {
      valor: "18:40",
      etiqueta: "Aislamiento y salud mental",
      detalle:
        "El documental visibiliza casos de ansiedad y depresión vinculados al ostracismo, destacando también la capacidad de recuperación y libertad.",
    },
    {
      valor: "21:00",
      etiqueta: "Control desde la infancia",
      detalle:
        "Se analiza cómo el miedo al Armagedón y las normas estrictas moldean la psique de los miembros desde edades tempranas.",
    },
  ],
  conceptos: [
    {
      termino: "Muerte social",
      definicion:
        "Cese total de contacto con familiares y amigos tras la expulsión o el abandono voluntario de la organización.",
    },
    {
      termino: "Comité judicial",
      definicion:
        "Órgano interno de la organización que juzga la conducta de los miembros y puede decretar la expulsión.",
    },
  ],
  perfil: {
    titulo: "Samuel Ferrando en el documental",
    texto:
      "Presidente de la AEVTJ y exanciano de los Testigos de Jehová. Participa en el documental aportando una visión privilegiada sobre los mecanismos de control interno y los llamados «comités judiciales».",
  },
  recursos: [
    {
      titulo: "Ver el documental completo",
      texto: "Documental original de El País, disponible en YouTube con acceso libre y gratuito.",
      href: "https://www.youtube.com/watch?v=dF85vscQnYE",
      etiqueta: "Abrir en YouTube",
      externo: true,
    },
    {
      titulo: "Orientación legal y apoyo",
      texto: "Si consideras que tus derechos fundamentales han sido vulnerados, la AEVTJ ofrece orientación.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    { etiqueta: "Documental en YouTube · El País", href: "https://www.youtube.com/watch?v=dF85vscQnYE" },
  ],
};

export default noticia;
