import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/la-aevtj-solicita-al-defensor-del-pueblo-y-al-gobierno-la-revision-del-estatus-legal-de-los-testigos-de-jehova.json`.
 *
 * Notas de migración:
 * - La barra lateral "Momentos clave del vídeo" se mapeó a `contexto` (no había
 *   ningún vídeo incrustado ni enlazado en el HTML original).
 * - La sección de apoyo "¿Buscas ayuda o quieres colaborar?" se convirtió en `recursos`.
 * - Descartados: "Post populares", newsletter, "¿Podemos ayudarte?" y footer heredado.
 */
export const noticia: Noticia = {
  slug:
    "la-aevtj-solicita-al-defensor-del-pueblo-y-al-gobierno-la-revision-del-estatus-legal-de-los-testigos-de-jehova",
  titulo:
    "La AEVTJ solicita al Defensor del Pueblo y al Gobierno la revisión del estatus legal de los Testigos de Jehová",
  fecha: "2026-03-05T06:50:36",
  autoria: "AEVTJ · Nota de prensa",
  portada: {
    src: "/uploads/2026/03/La-AEVTJ-solicita-al-Defensor-del-Pueblo-y-al-Gobierno-la-revision-del-estatus-legal-de-los-Testigos-de-Jehova.webp",
    alt: "Sede del Defensor del Pueblo en Madrid, destinataria de la solicitud de la AEVTJ",
  },
  entradilla:
    "La junta directiva de la AEVTJ presenta su estrategia institucional: solicitud al Defensor del Pueblo, revisión de la inscripción en el Registro de Entidades Religiosas y una alerta por la emergencia en salud mental de los exmiembros.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "La junta directiva de la Asociación Española de Víctimas de los Testigos de Jehová (AEVTJ) ha presentado su estrategia institucional para los próximos años. El mensaje es claro: los poderes públicos no pueden seguir ignorando el impacto humano derivado de las normas internas de esta organización.",
    },
    { tipo: "seccion", titulo: "Acciones legales y administrativas" },
    {
      tipo: "parrafo",
      texto:
        "El presidente de la asociación, <strong>Samuel Ferrando</strong>, ha anunciado que el pasado 28 de enero se presentó una solicitud ante el <strong>Defensor del Pueblo</strong>, con el objetivo de que esta institución intermedie ante el silencio administrativo que rodea a la denuncia penal colectiva presentada por la AEVTJ en 2023.",
    },
    {
      tipo: "cita",
      texto:
        "Ponemos en manos de las autoridades nuestro testimonio. No somos tres ni cuatro, somos cientos.",
    },
    {
      tipo: "parrafo",
      texto:
        "La asociación ha iniciado los trámites para solicitar la <strong>revisión de la inscripción de los Testigos de Jehová en el Registro de Entidades Religiosas</strong>. Esta petición no cuestiona la fe individual, sino que busca determinar si una organización que impone el ostracismo y el aislamiento familiar cumple con los requisitos para disfrutar de beneficios institucionales.",
    },
    { tipo: "seccion", titulo: "Emergencia en salud mental" },
    {
      tipo: "parrafo",
      texto:
        "Uno de los momentos más críticos de la rueda de prensa fue la revelación de datos sobre la salud mental de los exmiembros:",
    },
    {
      tipo: "lista",
      etiqueta: "Datos de la rueda de prensa",
      items: [
        '1 de cada 10 nuevos socios reporta <strong>ideación suicida</strong> en el momento de su alta en la asociación.',
        'Un alto porcentaje de asociados ha experimentado <strong>intentos de suicidio o graves crisis de identidad</strong> tras sufrir los "comités judiciales" internos.',
        'El estudio académico <strong>Invictus</strong>, realizado por la Universidad de Barcelona y la Universidad Autónoma de Madrid, ya cuenta con la participación de <strong>1.034 exmiembros</strong> para documentar el posible abuso psicológico.',
      ],
    },
    { tipo: "seccion", titulo: "Un llamamiento a la sociedad" },
    {
      tipo: "parrafo",
      texto:
        "La AEVTJ recordó que se financia exclusivamente mediante <strong>donaciones voluntarias</strong>, sin subvenciones públicas, y que actualmente existe lista de espera para recibir ayuda psicológica subvencionada. La asociación instó a los medios de comunicación y a los profesionales sanitarios a formarse sobre la <strong>persuasión coercitiva</strong>, para evitar que las víctimas vuelvan a ser invisibilizadas.",
    },
  ],
  contexto: [
    {
      valor: "03:27",
      etiqueta: "Momento clave",
      detalle: "Presentación de la solicitud ante el Defensor del Pueblo y denuncia penal colectiva de 2023.",
    },
    {
      valor: "05:51",
      etiqueta: "Momento clave",
      detalle: "Estudio Invictus (UB y UAM): 1.034 exmiembros documentan el posible abuso psicológico.",
    },
    {
      valor: "08:25",
      etiqueta: "Momento clave",
      detalle: "Solicitud de revisión de la inscripción en el Registro de Entidades Religiosas.",
    },
    {
      valor: "19:51",
      etiqueta: "Momento clave",
      detalle: "1 de cada 10 nuevos socios reporta ideación suicida en el momento de su alta.",
    },
    {
      valor: "21:48",
      etiqueta: "Momento clave",
      detalle: "Lista de espera para ayuda psicológica subvencionada. Financiación exclusiva por donaciones.",
    },
  ],
  recursos: [
    {
      titulo: "Atención psicológica",
      texto:
        "Si necesitas ayuda urgente, contacta con nosotros para ser derivado a profesionales expertos en salida de grupos de alta presión.",
      href: "/contacto/",
      etiqueta: "Pedir ayuda",
    },
    {
      titulo: "Denuncias",
      texto:
        "Animamos a cualquier persona que considere haber sido víctima de abusos a ponerse en contacto para valorar su inclusión en acciones legales colectivas.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
    {
      titulo: "Derecho de réplica",
      texto:
        "Como entidad que respeta el marco democrático, la AEVTJ mantiene este espacio abierto para cualquier aclaración de la confesión mencionada.",
      href: "/contacto/",
      etiqueta: "Escribir",
    },
  ],
};

export default noticia;
