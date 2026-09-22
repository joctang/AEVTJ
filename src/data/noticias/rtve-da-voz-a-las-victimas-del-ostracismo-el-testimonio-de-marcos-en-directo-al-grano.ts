import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/rtve-da-voz-a-las-victimas-del-ostracismo-el-testimonio-de-marcos-en-directo-al-grano.json`.
 *
 * Notas de migración:
 * - El vídeo no es incrustable (RTVE Play): se enlaza con `enlaceExterno`.
 * - Descartados: bloque "Post populares", caja de newsletter, "¿Podemos ayudarte?",
 *   iconos sociales y `<footer>` heredado de WordPress.
 * - La tarjeta lateral "Ver el programa" se integró en `recursos`.
 */
export const noticia: Noticia = {
  slug: "rtve-da-voz-a-las-victimas-del-ostracismo-el-testimonio-de-marcos-en-directo-al-grano",
  titulo: "RTVE da voz a las víctimas del ostracismo: el testimonio de Marcos en Directo al Grano",
  fecha: "2026-04-30T06:37:49",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Emitido en", nombre: "Directo al Grano · Nº 154 · RTVE La 1" },
  portada: {
    src: "/uploads/2026/04/al-grano.webp",
    alt: "Cabecera del programa Directo al Grano de RTVE",
  },
  entradilla:
    "En el programa 154 de Directo al Grano, Marcos relata en primera persona el aislamiento familiar y social que experimentó tras su salida de los Testigos de Jehová.",
  citaDestacada: {
    texto: "Dejas de existir para ellos.",
    autor: "Marcos",
  },
  pieza: {
    titulo: "Directo al Grano · Programa 154 · RTVE Play",
    enlaceExterno: {
      href: "https://www.rtve.es/play/videos/directo-al-grano/programa-154/17045419/",
      etiqueta: "Ver en RTVE Play",
    },
    pie: "El testimonio comienza en el minuto 01:04:50",
    minuto: "01:04:50",
  },
  cuerpo: [
    { tipo: "seccion", titulo: "La realidad del vacío social" },
    {
      tipo: "parrafo",
      texto:
        'El programa <strong>"Directo al Grano"</strong> (Nº 154) de RTVE ha puesto el foco en la realidad de quienes abandonan la confesión de los Testigos de Jehová. A partir del minuto 01:04:50, Marcos relata en primera persona el proceso de aislamiento familiar y social que experimentó tras su salida del grupo.',
    },
    {
      tipo: "parrafo",
      texto:
        "En su intervención, Marcos explica cómo el entorno que hasta entonces era su apoyo fundamental —amigos y familiares— <strong>cesó toda comunicación</strong> con él debido a las normas internas de la organización. Subraya que esta práctica no es un alejamiento voluntario, sino una consecuencia directa de la expulsión o desasociación.",
    },
    { tipo: "seccion", titulo: "Valoración de la AEVTJ" },
    {
      tipo: "parrafo",
      texto:
        "Que los medios públicos visibilicen el impacto del ostracismo es un paso crucial. El relato de Marcos no es un caso aislado: refleja la experiencia de cientos de personas que contactan con la AEVTJ buscando ayuda tras perder sus vínculos afectivos más básicos. Consideramos fundamental que se analice cómo estas dinámicas afectan a la libertad de conciencia y al bienestar emocional de las personas.",
    },
  ],
  contexto: [
    {
      valor: "154",
      etiqueta: "Programa",
      detalle: 'Número del programa de "Directo al Grano" en el que aparece el testimonio.',
    },
    {
      valor: "01:04",
      etiqueta: "Minuto de inicio",
      detalle: "Minuto y segundo aproximados en que comienza el relato de Marcos.",
    },
    {
      valor: "RTVE",
      etiqueta: "Medio",
      detalle: "Televisión pública española. Su cobertura otorga máxima visibilidad al testimonio.",
    },
  ],
  recursos: [
    {
      titulo: "Ver el programa",
      texto: 'Directo al Grano · RTVE Play · La 1 · Programa 154, con el testimonio de Marcos.',
      href: "https://www.rtve.es/play/videos/directo-al-grano/programa-154/17045419/",
      etiqueta: "Abrir en RTVE Play",
      externo: true,
    },
    {
      titulo: "Asistencia psicológica",
      texto:
        "Si te sientes identificado con este relato y necesitas ayuda, contáctanos para ser derivado a profesionales expertos.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    {
      etiqueta: "Directo al Grano · Programa 154 · RTVE Play",
      href: "https://www.rtve.es/play/videos/directo-al-grano/programa-154/17045419/",
    },
  ],
};

export default noticia;
