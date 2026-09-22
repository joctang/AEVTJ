import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/entrevista-a-samuel-ferrando-presidente-de-la-aevtj.json`.
 *
 * Notas de migración:
 * - El original habla de un vídeo de la entrevista (cafè Dröm, Ràdio Molins de
 *   Rei) pero el HTML no contiene iframe ni ningún enlace al vídeo: no se
 *   incluye vídeo.
 * - El primer párrafo era un `<h1>` con negritas en el HTML heredado; se
 *   integra como cuerpo (el titular de la pieza ya es el H1 de la plantilla).
 * - Descartados: "Tags:", "Difunde esta noticia", "Últimas noticias",
 *   "¿Podemos ayudarte?" y "Categorías".
 */
export const noticia: Noticia = {
  slug: "entrevista-a-samuel-ferrando-presidente-de-la-aevtj",
  titulo: "Entrevista a Samuel Ferrando, presidente de la AEVTJ, en el programa cafè Dröm",
  fecha: "2025-10-26T19:51:19",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Programa", nombre: "cafè Dröm · Ràdio Molins de Rei" },
  portada: {
    src: "/uploads/2025/11/Entrevista-Samuel-Ferrando.webp",
    alt: "Samuel Ferrando, presidente de la AEVTJ, durante la entrevista en el programa cafè Dröm",
  },
  entradilla:
    "Virginia Dröm entrevista a Samuel Ferrando, presidente de la AEVTJ, para dar voz y reivindicación a quienes afirman haber sufrido dentro de la congregación de los Testigos de Jehová.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "<strong>Virginia Dröm (Ràdio Molins de Rei)</strong> entrevista a <strong>Samuel Ferrando</strong>, presidente de la AEVTJ, con el objetivo de <strong>dar voz y reivindicación</strong> a quienes afirman haber sufrido dentro de la congregación religiosa de los Testigos de Jehová.",
    },
    {
      tipo: "parrafo",
      texto:
        "El vídeo reúne <strong>relatos de exmiembros</strong> que describen traumas y <strong>rupturas dolorosas</strong> tras abandonar la confesión. Ferrando expone los <strong>desafíos sociales y emocionales</strong> que las víctimas dicen afrontar: <strong>aislamiento familiar</strong>, <strong>pérdida de la red de apoyo</strong> y, en algunos casos, <strong>secuelas psicológicas de largo alcance</strong>. La AEVTJ recuerda que ofrece <strong>mecanismos de acompañamiento y asesoría</strong> —apoyo entre pares, orientación jurídica básica y derivación psicológica— para <strong>visibilizar su lucha</strong> y fomentar <strong>apoyo colectivo</strong>.",
    },
    {
      tipo: "parrafo",
      texto:
        "El episodio también profundiza en las <strong>barreras legales</strong> y en la <strong>falta de reconocimiento institucional</strong> que señalan los ex-Testigos de Jehová, subrayando la necesidad de <strong>información</strong>, <strong>protección</strong> y <strong>respeto a los derechos humanos</strong> de quienes deciden salir de la organización.",
    },
  ],
};

export default noticia;
