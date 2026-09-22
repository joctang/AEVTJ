import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/estreno-del-documental-expulsados-de-los-testigos-de-jehova-en-el-pais.json`.
 *
 * Notas de migración:
 * - El vídeo del documental está en EL PAÍS, que no permite incrustar: se enlaza.
 * - Se descartó una `<ul><li></li></ul>` vacía y los bloques "Etiquetas:",
 *   "Difunde:", "Últimas noticias", "¿Podemos ayudarte?" y "Categorías".
 * - La imagen del cuerpo venía con `alt=""`.
 */
export const noticia: Noticia = {
  slug: "estreno-del-documental-expulsados-de-los-testigos-de-jehova-en-el-pais",
  titulo:
    "“Expulsados de los Testigos de Jehová”: el documental de EL PAÍS que visibiliza el ostracismo",
  fecha: "2025-10-15T09:40:58",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Publicado en", nombre: "EL PAÍS" },
  portada: {
    src: "/uploads/2025/03/Soraya-documental.webp",
    alt: "Imagen promocional del documental de EL PAÍS “Expulsados de los Testigos de Jehová”",
  },
  entradilla:
    "EL PAÍS estrena el documental “Expulsados de los Testigos de Jehová”, con los relatos de seis personas que dejaron o fueron expulsadas de la organización.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "<strong>Madrid, 15 de octubre de 2025.</strong> En <em>EL PAÍS</em> se ha estrenado el <a href=\"https://elpais.com/videos/2025-09-26/documental-expulsados-de-los-testigos-de-jehova.html\" target=\"_blank\" rel=\"noopener\">documental <strong>“Expulsados de los Testigos de Jehová”</strong></a>, con los relatos de seis personas que dejaron —o fueron expulsadas de— la organización. Para muchos de quienes nos leéis en este blog, estas historias pueden ser <strong>el espejo</strong> donde reconocer lo que habéis vivido: <strong>ostracismo social</strong>, <strong>presión doctrinal</strong>, <strong>homofobia interna</strong>, <strong>conflictos familiares</strong>, <strong>juicios internos</strong> y, a menudo, <strong>crisis personales</strong> difíciles de nombrar.",
    },
    {
      tipo: "parrafo",
      texto:
        "Como <strong>Asociación Española de Víctimas de los Testigos de Jehová</strong>, queremos <strong>agradecer</strong> al medio el espacio y, sobre todo, <strong>reconocer el valor</strong> de quienes han hablado. Vuestros testimonios <strong>abren puertas</strong>: ayudan a poner palabras, a validar el dolor y a demostrar que <strong>salir es posible</strong>.",
    },
    { tipo: "seccion", titulo: "Este no es un simple estreno. Esto es:" },
    {
      tipo: "lista",
      items: [
        "<strong>Un punto de apoyo emocional:</strong> escuchar historias parecidas reduce la sensación de “me pasa solo a mí”.",
        "<strong>Una guía para identificar dinámicas dañinas:</strong> aislamiento familiar, amenazas veladas, pérdida de red social.",
        "<strong>Un impulso para actuar:</strong> pedir ayuda, informarse sobre derechos y elaborar un plan de salida seguro.",
      ],
    },
    {
      tipo: "imagen",
      src: "/uploads/2025/03/Soraya-documental-300x169.webp",
      alt: "Fotograma del documental “Expulsados de los Testigos de Jehová” de EL PAÍS",
    },
    { tipo: "seccion", titulo: "Mensajes clave que subraya el documental" },
    {
      tipo: "lista",
      items: [
        "La <strong>ruptura de lazos</strong> y el silencio forzado no son “normales”: son mecanismos de control.",
        "La <strong>culpa</strong> y el <strong>miedo</strong> no definen quién eres; son respuestas aprendidas a un entorno coercitivo.",
        "La <strong>reconstrucción es posible</strong>: nuevas redes, terapia, asesoramiento jurídico y sanitario, proyectos de vida en libertad.",
      ],
    },
    { tipo: "seccion", titulo: "Nuestro compromiso" },
    {
      tipo: "parrafo",
      texto: "Seguimos trabajando para:",
    },
    {
      tipo: "lista",
      items: [
        "<strong>Atenderte de forma confidencial y gratuita</strong>, con orientación emocional y derivación a profesionales cuando haga falta.",
        "<strong>Defender tus derechos</strong> y <strong>denunciar</strong> prácticas que vulneran la dignidad y la integridad de las personas.",
        "<strong>Tejer comunidad</strong>: nadie debería atravesar esto en soledad.",
      ],
    },
    { tipo: "seccion", titulo: "Si te reconoces en estas historias" },
    {
      tipo: "lista",
      items: [
        "<strong>Escríbenos hoy mismo.</strong> Cuéntanos tu situación, aunque sea en pocas líneas.",
        "Si estás en un entorno que percibes como <strong>peligroso o de riesgo</strong>, prioriza tu seguridad: intenta pedir ayuda desde un dispositivo y un lugar seguros.",
        "<strong>No estás solo/a.</strong> Aquí encontrarás escucha, respeto y pasos concretos.",
      ],
    },
  ],
  pieza: {
    titulo: "Expulsados de los Testigos de Jehová · EL PAÍS",
    enlaceExterno: {
      href: "https://elpais.com/videos/2025-09-26/documental-expulsados-de-los-testigos-de-jehova.html",
      etiqueta: "Ver en EL PAÍS",
    },
  },
  recursos: [
    {
      titulo: "Ver el documental",
      texto:
        "Documental “Expulsados de los Testigos de Jehová” en EL PAÍS, con los relatos de seis personas.",
      href: "https://elpais.com/videos/2025-09-26/documental-expulsados-de-los-testigos-de-jehova.html",
      etiqueta: "Ver en EL PAÍS",
      externo: true,
    },
    {
      titulo: "Escríbenos",
      texto:
        "Cuéntanos tu situación de forma confidencial y gratuita. Aquí encontrarás escucha y pasos concretos.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
};

export default noticia;
