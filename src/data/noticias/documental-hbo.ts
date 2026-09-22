import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/documental-hbo.json`.
 *
 * Notas de migración:
 * - El original no incluía vídeo ni enlaces a YouTube: no se añade ninguno.
 * - Descartados: "Tags:", "Difunde esta noticia", "Últimas noticias",
 *   "¿Podemos ayudarte?" y "Categorías" (bloques heredados de WordPress).
 * - El enlace a HBO Max se mantiene externo.
 */
export const noticia: Noticia = {
  slug: "documental-hbo",
  titulo: "Estreno mundial del documental de HBO “Sobreviviendo a los Testigos de Jehová”",
  fecha: "2026-02-24T20:20:47",
  autoria: "AEVTJ · Redacción",
  portada: {
    src: "/uploads/2026/02/Sobrevivir-al-paraiso-HBO.webp",
    alt: "Cartel del documental de HBO “Sobrevivir al paraíso: más allá de los Testigos de Jehová”",
  },
  entradilla:
    "El 20 de febrero de 2026 se estrenó en HBO “Sobreviviendo a los Testigos de Jehová”, una producción HBO Original con testimonios de personas que han salido de la organización religiosa.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "El <strong>20 de febrero de 2026</strong> se ha estrenado en HBO el documental <a href=\"https://www.hbomax.com/es/es/shows/sobrevivir-al-paraiso-mas-alla-de-los-testigos-de-jehova/b971bd20-e98d-4a04-823a-3a6479868cec\" target=\"_blank\" rel=\"noopener\"><strong>“Sobreviviendo a los Testigos de Jehová” (Surviving the Jehovah’s Witnesses)</strong></a>, una producción HBO Original que reúne <strong>testimonios de personas</strong> que han salido de la organización religiosa y hoy comparten su experiencia con el mundo.",
    },
    {
      tipo: "parrafo",
      texto:
        "Para quienes formamos parte de esta comunidad, este estreno se vive con una mezcla de emoción y responsabilidad. Es una oportunidad para que mucha gente escuche, <strong>de primera mano</strong>, historias que tantas veces —según relatan quienes las vivieron— no fueron comprendidas o no encontraron el espacio que merecían.",
    },
    {
      tipo: "parrafo",
      texto:
        "El documental ya está disponible internacionalmente en la plataforma HBO y contribuye a dar visibilidad al <strong>impacto que muchas personas describen</strong> tras determinadas prácticas internas y dinámicas de la organización, especialmente en el ámbito familiar y social.",
    },
    {
      tipo: "parrafo",
      texto:
        "El proyecto tiene sus raíces en el pódcast de <strong>ABC</strong> <strong>“Los expulsados del paraíso: sobrevivir a los Testigos de Jehová”</strong>, fruto de una investigación periodística que recoge testimonios, análisis y referencias a distintos casos de interés público. A partir de ese trabajo, la productora contactó con personas que abandonaron la confesión, en muchos casos, integrantes y colaboradoras de nuestra asociación.",
    },
    {
      tipo: "parrafo",
      texto:
        "Desde la <strong>AEVTJ</strong> queremos dar las gracias, de corazón, a todas las personas que han participado y han aportado su testimonio. Sabemos lo que cuesta volver a poner palabras a lo vivido, y lo valioso que es hacerlo para que otras personas no se sientan solas. Gracias también al equipo periodístico y de producción por tratar estas historias con seriedad y por abrir un espacio de escucha.",
    },
    {
      tipo: "parrafo",
      texto:
        "La confesión de los Testigos de Jehová <strong>ha negado en distintas ocasiones</strong> acusaciones y críticas relacionadas con su funcionamiento interno.",
    },
    {
      tipo: "parrafo",
      texto:
        "Si al ver u oír hablar de este documental alguien se reconoce en estas experiencias y necesita apoyo, recomendamos acudir a <strong>recursos de salud mental</strong> y, cuando corresponda, buscar <strong>asesoramiento jurídico</strong> y/o acudir a las <strong>autoridades competentes</strong>. La AEVTJ puede orientar sobre recursos disponibles y vías de acompañamiento.",
    },
  ],
  recursos: [
    {
      titulo: "Ver el documental",
      texto:
        "“Sobreviviendo a los Testigos de Jehová” ya está disponible en la plataforma HBO.",
      href: "https://www.hbomax.com/es/es/shows/sobrevivir-al-paraiso-mas-alla-de-los-testigos-de-jehova/b971bd20-e98d-4a04-823a-3a6479868cec",
      etiqueta: "Ver en HBO Max",
      externo: true,
    },
    {
      titulo: "¿Podemos ayudarte?",
      texto:
        "Si te sientes identificado con estas experiencias, la AEVTJ puede orientarte sobre recursos disponibles y vías de acompañamiento.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    {
      etiqueta: "Documental en HBO Max",
      href: "https://www.hbomax.com/es/es/shows/sobrevivir-al-paraiso-mas-alla-de-los-testigos-de-jehova/b971bd20-e98d-4a04-823a-3a6479868cec",
    },
  ],
};

export default noticia;
