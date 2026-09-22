import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/israel-florez-y-soraya-narez-en-onda-cero-el-vacio-de-una-vida-borrada-por-la-expulsion.json`.
 *
 * Notas de migración:
 * - El original incluía un reproductor de audio de Onda Cero que no es de YouTube y
 *   no es incrustable: se enlaza como `enlaceExterno`.
 * - Descartados: "Post populares", newsletter, "¿Podemos ayudarte?" y el footer
 *   "AEVTJ · victimasdetestigosdejehova.org".
 */
export const noticia: Noticia = {
  slug: "israel-florez-y-soraya-narez-en-onda-cero-el-vacio-de-una-vida-borrada-por-la-expulsion",
  titulo: "Israel Flórez y Soraya Narez en Onda Cero: el vacío de una vida «borrada» por la expulsión",
  fecha: "2026-03-11T07:24:25",
  autoria: "Redacción AEVTJ · Madrid",
  medio: { etiqueta: "Emitido en", nombre: "Onda Cero Radio" },
  portada: {
    src: "/uploads/2026/04/soraya-narez-jose-ramon-navarro-pareja_69.webp",
    alt: "Soraya Narez y José Ramón Navarro en el estudio de Onda Cero durante la grabación del reportaje",
  },
  entradilla:
    "Israel Flórez y Soraya Narez relataron en Onda Cero las secuelas del ostracismo familiar: una norma interna que obliga al entorno a ignorar por completo a quienes abandonan el grupo.",
  citaDestacada: {
    texto: "Tengo mi vida de 2005 hacia atrás en un cajón cerrado.",
    autor: "Israel Flórez",
    cargo: "Expulsado de los Testigos de Jehová",
  },
  pieza: {
    titulo: "La verdad que se esconde detrás de los Testigos de Jehová",
    formato: "audio",
    enlaceExterno: {
      href: "https://www.ondacero.es/noticias/sociedad/verdad-que-esconde-detras-testigos-jehova-tengo-vida-2005-atras_2026031069b0081de1ff634075e3601e.html",
      etiqueta: "Escuchar en Onda Cero",
    },
    pie: "Reportaje de Onda Cero Radio · 2026",
  },
  cuerpo: [
    {
      tipo: "seccion",
      titulo: "Un testimonio sobre el impacto del ostracismo familiar",
    },
    {
      tipo: "parrafo",
      texto:
        "En una intervención para <strong>Onda Cero</strong>, Israel Flórez y Soraya Narez han compartido un testimonio sobrecogedor sobre el impacto del ostracismo familiar. Sus palabras destapan las secuelas de una norma interna que obliga al entorno a ignorar por completo a quienes deciden abandonar el grupo.",
    },
    {
      tipo: "parrafo",
      texto:
        'Israel describió la dolorosa "anulación" de su historia personal: cuando padres y hermanos tienen <strong>prohibido dirigirte la palabra</strong>, tu pasado queda borrado. Soraya Narez insistió en que esta <strong>"muerte social"</strong> es una vulneración de derechos que el Estado no debe ignorar.',
    },
    {
      tipo: "seccion",
      titulo: "¿Buscas apoyo o información?",
    },
    {
      tipo: "lista",
      etiqueta: "Recursos de la AEVTJ",
      items: [
        "<strong>Red de apoyo:</strong> en la AEVTJ te escuchamos. Muchos de nosotros hemos pasado por lo mismo.",
        "<strong>Ayuda profesional:</strong> colaboramos con psicólogos especializados en ruptura de vínculos sectarios.",
        "<strong>Derecho de réplica:</strong> respetamos el derecho de réplica conforme a la Ley Orgánica 2/1984.",
      ],
    },
  ],
  contexto: [
    {
      valor: "2005",
      etiqueta: "Salida de la organización",
      detalle: "Año de salida de la organización y comienzo del aislamiento familiar.",
    },
    {
      valor: "2026",
      etiqueta: "Entrevista en Onda Cero",
      detalle: "Entrevista en Onda Cero para dar voz a las víctimas.",
    },
  ],
  conceptos: [
    {
      termino: "Muerte social",
      definicion:
        "Cese total de todo contacto social y familiar tras la expulsión o abandono voluntario de la organización.",
    },
  ],
  recursos: [
    {
      titulo: "Escuchar el reportaje",
      texto:
        'Accede al reportaje "La verdad que se esconde detrás de los Testigos de Jehová" en la web de Onda Cero.',
      href: "https://www.ondacero.es/noticias/sociedad/verdad-que-esconde-detras-testigos-jehova-tengo-vida-2005-atras_2026031069b0081de1ff634075e3601e.html",
      etiqueta: "Escuchar en Onda Cero",
      externo: true,
    },
    {
      titulo: "Red de apoyo",
      texto:
        "No estás solo. En la AEVTJ encontrarás un espacio seguro para compartir tu historia sin juicios.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    {
      etiqueta: "Reportaje en Onda Cero",
      href: "https://www.ondacero.es/noticias/sociedad/verdad-que-esconde-detras-testigos-jehova-tengo-vida-2005-atras_2026031069b0081de1ff634075e3601e.html",
    },
  ],
};

export default noticia;
