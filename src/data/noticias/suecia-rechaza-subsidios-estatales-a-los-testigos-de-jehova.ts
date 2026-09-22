import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/suecia-rechaza-subsidios-estatales-a-los-testigos-de-jehova.json`.
 *
 * Notas de migración:
 * - Se descartaron los bloques heredados de WordPress: "Últimas noticias",
 *   "¿Podemos ayudarte?", "Categorías", "Tags", "Difunde esta noticia" y los
 *   iconos sociales.
 * - Se eliminaron los parámetros `?utm_source=chatgpt.com` de los enlaces
 *   externos (Kvartal, Religion News Service, HRWF).
 * - Sin vídeo ni imágenes en el cuerpo del original.
 */
export const noticia: Noticia = {
  slug: "suecia-rechaza-subsidios-estatales-a-los-testigos-de-jehova",
  titulo: "Suecia rechaza subsidios estatales a los Testigos de Jehová",
  fecha: "2025-11-03T20:22:12",
  autoria: "AEVTJ · Redacción",
  portada: {
    src: "/uploads/2025/11/suecia.webp",
    alt: "Bandera de Suecia ondeando al viento",
  },
  entradilla:
    "La Autoridad Sueca para el Apoyo a las Comunidades Religiosas (SST) ha denegado a los Testigos de Jehová la elegibilidad para recibir subsidios estatales por discriminar y ejercer presión indebida, incluido el «no trato» familiar a expulsados.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "La <strong>Autoridad Sueca para el Apoyo a las Comunidades Religiosas (SST)</strong> ha <strong>denegado</strong> a los Testigos de Jehová la elegibilidad para recibir <strong>subsidios estatales</strong>, en una resolución fechada el <strong>24 de octubre de 2025</strong> (expediente <strong>SST 2025-168</strong>). La decisión se fundamenta en la <strong>Ley 2024:487 sobre subsidios a comunidades religiosas</strong>, que prohíbe otorgar apoyo a entidades que <strong>discriminen</strong> o ejerzan <strong>presión indebida</strong> contrarias a los principios democráticos. <a href=\"https://johanneksenpoika.fi/dokumentit/JV%20Sverige%20avslag.pdf\" target=\"_blank\" rel=\"noopener\">Resolución (PDF)</a>",
    },
    {
      tipo: "parrafo",
      texto:
        "Según el expediente, la SST concluye que los Testigos de Jehová <strong>niegan pertenencia o expulsan</strong> a personas por su <strong>elección de pareja</strong> (incluidas parejas del mismo sexo) y que <strong>fomentan el “no trato”</strong> familiar hacia expulsados o quienes abandonan la confesión, lo que constituye una <strong>presión indebida</strong> con riesgo de aislamiento social, particularmente grave cuando afecta a menores.",
    },
    {
      tipo: "parrafo",
      texto:
        "La resolución llega tras un proceso iniciado el <strong>10 de marzo de 2025</strong>, en el que la autoridad revisó <strong>estatutos, actas, informes y auditorías</strong>, e incorporó consultas a <strong>fuentes externas</strong>. La SST formuló <strong>ocho preguntas</strong> específicas sobre expulsiones por elección de pareja, trato a familias de expulsados, disciplina y gestión de casos de <strong>abuso infantil</strong>; <strong>no obtuvo respuesta sustantiva</strong> de la organización, que además solicitó, sin éxito, trasladar el caso a otra autoridad.",
    },
    {
      tipo: "parrafo",
      texto:
        "Medios suecos han informado que la aplicación de los <strong>nuevos criterios democráticos</strong> ha dejado sin apoyo a varias entidades, y confirman el <strong>cese del subsidio</strong> a los Testigos de Jehová bajo la nueva normativa. <a href=\"https://kvartal.se/jesperandersson/artiklar/samfunden-forlorar-statliga-bidrag-efter-nya-lagen/cG9zdDoyMzg3MA\" target=\"_blank\" rel=\"noopener\">Kvartal</a>",
    },
    { tipo: "seccion", titulo: "Contexto europeo" },
    {
      tipo: "parrafo",
      texto:
        "La decisión sueca se <strong>alinea</strong> con medidas adoptadas en <strong>Noruega</strong>, donde las autoridades <strong>retiraron subsidios y registro</strong> a los Testigos de Jehová en 2022-2023, con un itinerario judicial aún en curso. <a href=\"https://religionnews.com/2024/01/16/jehovahs-witnesses-go-to-trial-against-norway-after-state-registration-is-revoked/\" target=\"_blank\" rel=\"noopener\">Religion News Service</a>",
    },
    {
      tipo: "parrafo",
      texto:
        "A la vez, organizaciones como <strong>Human Rights Without Frontiers</strong> han denunciado públicamente que decisiones de este tipo podrían <strong>discriminar</strong> a minorías religiosas, subrayando el <strong>debate</strong> entre libertad de culto y protección de derechos. <a href=\"https://hrwf.eu/sweden-state-discrimination-against-jehovahs-witnesses-denounced-at-the-osce-by-hrwf/\" target=\"_blank\" rel=\"noopener\">HRWF</a>",
    },
  ],
  contexto: [
    { valor: "24 de octubre de 2025", etiqueta: "Fecha de la resolución" },
    { valor: "SST 2025-168", etiqueta: "Expediente" },
    { valor: "Ley 2024:487", etiqueta: "Norma aplicada", detalle: "Subsidios a comunidades religiosas" },
  ],
  recursos: [
    {
      titulo: "Leer la resolución",
      texto: "Documento oficial de la SST (en sueco) con la denegación de subsidios.",
      href: "https://johanneksenpoika.fi/dokumentit/JV%20Sverige%20avslag.pdf",
      etiqueta: "Abrir PDF",
      externo: true,
    },
  ],
  fuentes: [
    {
      etiqueta: "Resolución de la SST (PDF)",
      href: "https://johanneksenpoika.fi/dokumentit/JV%20Sverige%20avslag.pdf",
    },
    {
      etiqueta: "Kvartal · Samfunden förlorar statliga bidrag efter nya lagen",
      href: "https://kvartal.se/jesperandersson/artiklar/samfunden-forlorar-statliga-bidrag-efter-nya-lagen/cG9zdDoyMzg3MA",
    },
    {
      etiqueta: "Religion News Service · Jehovah's Witnesses go to trial against Norway",
      href: "https://religionnews.com/2024/01/16/jehovahs-witnesses-go-to-trial-against-norway-after-state-registration-is-revoked/",
    },
    {
      etiqueta: "HRWF · Sweden: state discrimination against Jehovah's Witnesses denounced at the OSCE",
      href: "https://hrwf.eu/sweden-state-discrimination-against-jehovahs-witnesses-denounced-at-the-osce-by-hrwf/",
    },
  ],
};

export default noticia;
