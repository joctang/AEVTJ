import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/entrevista-a-la-aevtj-noruega-y-los-testigos-de-jehova.json`.
 *
 * Notas de migración:
 * - El `<iframe>` tenía el marcador base64 de Elementor; el youtubeId se recuperó
 *   del enlace "Ver en YouTube" del propio HTML (emisión en directo de YouTube).
 * - Descartados: "Post populares", newsletter, "¿Podemos ayudarte?" y el footer heredado.
 * - La marca de tiempo [00:46:05] sobre salud mental de Dani se mantiene en el cuerpo
 *   como texto literal del original.
 * - CORREGIDO 22/09: los intervinientes estaban en `contexto`, que pinta cifras
 *   en serif grande; pasan a `intervinientes`, que es su caja propia.
 * - CORREGIDO 22/09: el titulo era el del post de WordPress; el <h1> editorial
 *   del original estaba metido dentro de la entradilla. Ahora es el titular.
 */
export const noticia: Noticia = {
  slug: "entrevista-a-la-aevtj-noruega-y-los-testigos-de-jehova",
  titulo: "Noruega sitúa el ostracismo de los Testigos de Jehová bajo la lupa judicial",
  fecha: "2026-04-03T11:32:53",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Programa", nombre: "ADN Informativo · Virginia Drom" },
  portada: {
    src: "/uploads/2026/04/adn-informativo.webp",
    alt: "Cabecera del programa ADN Informativo de Virginia Drom sobre el caso de Noruega",
  },
  entradilla:
    "Un debate histórico sobre la protección de menores y los límites de la libertad religiosa, con representantes de la AEVTJ.",
  citaDestacada: {
    texto: "Huérfana con padres vivos",
    autor: "Laia Santander",
    cargo: "Estudiante de psicología y activista",
  },
  pieza: {
    titulo: "Justicia y ostracismo: el caso de Noruega · ADN Informativo",
    youtubeId: "BoUVwfGLhvU",
    pie: "Emisión en directo · ADN Informativo de Virginia Drom",
    minuto: "00:08:43",
  },
  cuerpo: [
    {
      tipo: "seccion",
      titulo: "Noruega retira el reconocimiento oficial a los Testigos de Jehová",
    },
    {
      tipo: "parrafo",
      texto:
        "El Estado de Noruega ha tomado una decisión sin precedentes al retirar el reconocimiento oficial y las ayudas económicas a los Testigos de Jehová. El motivo principal: el impacto del <strong>ostracismo institucional</strong>, especialmente cuando se aplica a menores de edad.",
    },
    {
      tipo: "seccion",
      titulo: "Testimonios en la mesa redonda de Virginia Drom",
    },
    {
      tipo: "parrafo",
      texto:
        "En una mesa redonda liderada por <strong>Virginia Drom</strong>, representantes de la <strong>AEVTJ</strong> compartieron testimonios sobrecogedores. <strong>Samuel Ferrando</strong>, exanciano, explicó cómo el bautismo a edades tempranas (12-14 años) vincula a los niños a una normativa que, en caso de «pecado», puede condenarlos a una <strong>«muerte social»</strong>, donde incluso sus propios padres tienen prohibido saludarles [00:08:43].",
    },
    {
      tipo: "parrafo",
      texto:
        "<strong>Laia Santander</strong> y <strong>Dani Ataraxia</strong> relataron las secuelas psicológicas de vivir bajo esta presión. Dani compartió cómo el rechazo hacia su sexualidad y la amenaza de perder a su familia lo llevaron a situaciones críticas de salud mental [00:46:05]. Laia, por su parte, describió la sensación de sentirse <strong>«huérfana con padres vivos»</strong>, una realidad que afecta a miles de expulsados en todo el mundo [00:43:51].",
    },
    {
      tipo: "parrafo",
      texto:
        "El juicio en Noruega, cuya sentencia definitiva se espera en las próximas semanas, marca un antes y un después en la lucha por los derechos de los menores frente a las prácticas de grupos de alta presión.",
    },
  ],
  intervinientes: [
    { nombre: "Virginia Drom", rol: "Periodista y directora del programa" },
    { nombre: "Samuel Ferrando", rol: "Presidente de la Asociación y exanciano" },
    { nombre: "Natán Verdés", rol: "Filósofo y secretario de la AEVTJ" },
    { nombre: "Laia Santander", rol: "Estudiante de psicología y activista" },
    { nombre: "Dani Ataraxia", rol: "Vocal de la Asociación y creador de contenido" },
    { nombre: "Marga Barranco", rol: "Psicóloga especialista en sectas" },
  ],
  conceptos: [
    {
      termino: "Financiación",
      definicion: "Noruega corta ayudas directas por violar derechos humanos.",
    },
    {
      termino: "Menores",
      definicion: "Se juzga si un niño puede ser sometido a aislamiento social.",
    },
    {
      termino: "Libertad",
      definicion: "El pulso entre el derecho de fe y la protección del Estado.",
    },
  ],
  recursos: [
    {
      titulo: "Ver el debate completo",
      texto: "Accede a la emisión íntegra de ADN Informativo con la participación de la AEVTJ.",
      href: "https://www.youtube.com/live/BoUVwfGLhvU",
      etiqueta: "Ver en YouTube",
      externo: true,
    },
    {
      titulo: "Asistencia psicológica",
      texto: "Si te sientes identificado con estos testimonios y necesitas ayuda, contáctanos.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    { etiqueta: "Debate en YouTube · ADN Informativo", href: "https://www.youtube.com/live/BoUVwfGLhvU" },
  ],
};

export default noticia;
