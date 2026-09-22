import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/el-precio-de-salir-de-los-testigos-de-jehova-3cat-visibiliza-el-impacto-del-ostracismo-y-la-salud-mental.json`.
 *
 * Notas de migración:
 * - El `<iframe>` del original tenía `src="data:image/svg+xml;base64,…"`
 *   (marcador de Elementor) y en el HTML no aparece ningún enlace que permita
 *   recuperar el identificador del vídeo: se omite el vídeo.
 * - El enlace a 3Cat sobre el caso de Lydia llevaba parámetro `?utm`, eliminado.
 * - Descartados: "Tags:", "Difunde esta noticia", "Últimas noticias",
 *   "¿Podemos ayudarte?" y "Categorías".
 */
export const noticia: Noticia = {
  slug:
    "el-precio-de-salir-de-los-testigos-de-jehova-3cat-visibiliza-el-impacto-del-ostracismo-y-la-salud-mental",
  titulo:
    "“El precio de salir de los Testigos de Jehová”: 3Cat visibiliza el impacto del ostracismo y la salud mental",
  fecha: "2025-10-23T18:20:44",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Emitido en", nombre: "3Cat · El preu de sortir dels Testimonis de Jehovà" },
  portada: {
    src: "/uploads/2025/11/image-54.webp",
    alt: "Imagen del reportaje de 3Cat sobre el precio de salir de los Testigos de Jehová",
  },
  entradilla:
    "El programa de 3Cat emitido el 16 de octubre recoge testimonios de exmiembros y pone el foco en el silencio, la soledad y la ruptura de la red de apoyo tras la expulsión o la salida voluntaria.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "<strong>Barcelona.</strong> Aunque somos conscientes de que no puede establecerse una causalidad clínica, según el programa de 3Cat, emitido el <strong>16 de octubre</strong>, <em>El preu de sortir dels Testimonis de Jehovà</em> recoge testimonios de exmiembros y pone el foco en lo que muchas personas describen tras la expulsión o la salida voluntaria: <strong>silencio, soledad y ruptura de la red de apoyo</strong>. En la web del canal se citan datos según los cuales el <strong>40%</strong> de quienes han dejado el grupo <strong>ha tenido ideación suicida</strong> y el <strong>20%</strong> <strong>lo ha intentado</strong>.",
    },
    {
      tipo: "parrafo",
      texto:
        "El reportaje se suma a otras piezas recientes del canal público catalán que documentan la <strong>ruptura abrupta de vínculos</strong>. Entre ellas, <a href=\"https://www.3cat.cat/3catinfo/dun-dia-per-laltre-no-tens-ningu-el-relat-duna-extestimoni-de-jehova-expulsada/noticia/3310438/\" target=\"_blank\" rel=\"noopener\">el caso de <strong>Lydia</strong></a> (3Cat, <strong>19 de septiembre</strong>), expulsada y apartada de su entorno: “De un día para otro te quedas sin nadie”. Su historia no es la de todo el mundo, pero <strong>resuena</strong> en muchas personas que nos escriben.",
    },
    {
      tipo: "parrafo",
      texto:
        "Desde la <strong>Asociación Española de Víctimas de los Testigos de Jehová (AEVTJ)</strong> valoramos que la televisión pública catalana <strong>dé voz a las víctimas</strong> y acerque datos que ayudan a <strong>dimensionar el problema</strong>. En las últimas semanas, testimonios recogidos por la prensa insisten en <strong>culpa, miedo y pérdida de la red de apoyo</strong>, y en la necesidad de <strong>recursos especializados</strong>.",
    },
  ],
  recursos: [
    {
      titulo: "El caso de Lydia",
      texto:
        "Relato de una ex Testigo de Jehová expulsada en 3Cat: “De un día para otro te quedas sin nadie”.",
      href:
        "https://www.3cat.cat/3catinfo/dun-dia-per-laltre-no-tens-ningu-el-relat-duna-extestimoni-de-jehova-expulsada/noticia/3310438/",
      etiqueta: "Ver en 3Cat",
      externo: true,
    },
    {
      titulo: "Asistencia psicológica",
      texto:
        "Si necesitas ayuda para gestionar el aislamiento o la salida del grupo, contáctanos.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
};

export default noticia;
