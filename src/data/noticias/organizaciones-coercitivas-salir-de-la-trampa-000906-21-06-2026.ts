import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/organizaciones-coercitivas-salir-de-la-trampa-000906-21-06-2026.json`.
 *
 * Notas de migración:
 * - El vídeo es de RTVE Play (no incrustable): se enlaza con `enlaceExterno`.
 *   No había youtubeId en el HTML original.
 * - Las tarjetas "Claves para leer esta noticia" y "Qué puede reconocer…"
 *   se convirtieron en listas del cuerpo.
 * - Enlaces internos a victimasdetestigosdejehova.org convertidos a rutas relativas.
 * - Descartados: "Post populares", newsletter, "¿Podemos ayudarte?" y footer heredado.
 */
export const noticia: Noticia = {
  slug: "organizaciones-coercitivas-salir-de-la-trampa-000906-21-06-2026",
  titulo: "Organizaciones coercitivas: salir de la trampa",
  fecha: "2026-07-09T10:33:10",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Emitido en", nombre: "Objetivo Igualdad · RTVE" },
  portada: {
    src: "/uploads/2026/07/becky-rubio.webp",
    alt: "Becky Rubio, exmiembro de los Testigos de Jehová e integrante de la AEVTJ, participante en el reportaje",
  },
  entradilla:
    "Un reportaje de RTVE pone palabras a una realidad que muchas víctimas conocen bien: manipulación, aislamiento, sumisión al grupo y miedo a romper con el entorno que lo controla todo.",
  pieza: {
    titulo: "Organizaciones coercitivas: salir de la trampa · Objetivo Igualdad · RTVE",
    enlaceExterno: {
      href: "https://www.rtve.es/play/videos/objetivo-igualdad/organizaciones-coercitivas-salir-trampa/17119484/",
      etiqueta: "Ver en RTVE Play",
    },
    pie: 'Reportaje "Organizaciones coercitivas: salir de la trampa", publicado el 21 de junio de 2026',
  },
  cuerpo: [
    { tipo: "seccion", titulo: "Por qué importa" },
    {
      tipo: "parrafo",
      texto:
        "La noticia no es solo que RTVE hable de organizaciones coercitivas. Lo importante es que ayuda a reconocer mecanismos que muchas personas han vivido durante años sin poder nombrarlos.",
    },
    {
      tipo: "parrafo",
      texto:
        "El programa <strong>Objetivo Igualdad</strong> aborda cómo determinados grupos pueden generar dependencia, obediencia y aislamiento a través de un liderazgo persuasivo, normas internas rígidas y presión sobre los vínculos personales.",
    },
    {
      tipo: "parrafo",
      texto:
        "RTVE señala que las mujeres representan entre el <strong>40% y el 60%</strong> de los grupos coercitivos y pone el foco en cómo la violencia, la manipulación y el aislamiento pueden utilizarse para someter a quienes forman parte de estos entornos.",
    },
    {
      tipo: "cita",
      texto:
        "Salir no siempre significa marcharse de un lugar. A veces significa reconstruir la propia voz después de años de miedo, culpa o dependencia.",
    },
    {
      tipo: "parrafo",
      texto:
        "En el reportaje participan <strong>Raquel Cuesta</strong> y <strong>Francisco López Espejito</strong>, investigadores expertos en violencia y abuso de la Universidad Autónoma de Madrid; <strong>Becky Rubio</strong>, exmiembro de los Testigos de Jehová e integrante de la AEVTJ; y <strong>Violeta Porta Alonso</strong>, denunciante de abusos del Aula Municipal de Teatre de Lleida.",
    },
    {
      tipo: "parrafo",
      texto:
        "La presencia de Becky Rubio es especialmente relevante para nuestra asociación porque conecta el análisis general de las organizaciones coercitivas con experiencias vividas dentro del entorno de los Testigos de Jehová: pérdida de vínculos, control del pensamiento, miedo a las consecuencias de disentir y dificultad para pedir ayuda.",
    },
    { tipo: "seccion", titulo: "Claves para leer esta noticia" },
    {
      tipo: "lista",
      items: [
        "<strong>No es un caso aislado.</strong> El reportaje permite mirar estas experiencias como un fenómeno social, no como una debilidad individual de quien lo vive.",
        "<strong>Nombrar ayuda.</strong> Palabras como coerción, aislamiento o manipulación ayudan a entender procesos que suelen vivirse con confusión y culpa.",
        "<strong>Hay salida.</strong> Salir puede ser difícil, pero no tiene por qué hacerse en soledad. Pedir ayuda es parte del proceso de recuperación.",
      ],
    },
    { tipo: "seccion", titulo: "Qué puede reconocer una persona al ver este reportaje" },
    {
      tipo: "parrafo",
      texto:
        "La pieza puede ayudar a quienes dudan de lo que han vivido, a familiares que no entienden el proceso y a profesionales que acompañan a víctimas de grupos de alta demanda.",
    },
    {
      tipo: "lista",
      items: [
        "<strong>Aislamiento.</strong> Cuando el grupo condiciona o rompe relaciones familiares, amistades y redes de apoyo.",
        "<strong>Culpa y miedo.</strong> Cuando cuestionar una norma se vive como traición, pecado o amenaza.",
        "<strong>Obediencia al liderazgo.</strong> Cuando la autoridad del grupo pesa más que la conciencia, el criterio propio o el bienestar personal.",
        "<strong>Dificultad para salir.</strong> Cuando abandonar el entorno implica perder identidad, comunidad o vínculos esenciales.",
      ],
    },
    { tipo: "seccion", titulo: "¿Te reconoces en algo de esto?" },
    {
      tipo: "parrafo",
      texto:
        "Si has vivido presión, aislamiento o miedo dentro del entorno de los Testigos de Jehová, puedes escribirnos. Escuchamos sin juicio y desde la experiencia de quienes conocen estas dinámicas.",
    },
  ],
  recursos: [
    {
      titulo: "Ver el reportaje",
      texto: 'Objetivo Igualdad: "Organizaciones coercitivas: salir de la trampa" en RTVE Play.',
      href: "https://www.rtve.es/play/videos/objetivo-igualdad/organizaciones-coercitivas-salir-trampa/17119484/",
      etiqueta: "Ver en RTVE Play",
      externo: true,
    },
    {
      titulo: "Pedir apoyo",
      texto:
        "Si has vivido presión, aislamiento o miedo dentro del entorno de los Testigos de Jehová, escríbenos. Escuchamos sin juicio.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    {
      etiqueta: 'RTVE Play · Objetivo Igualdad · "Organizaciones coercitivas: salir de la trampa"',
      href: "https://www.rtve.es/play/videos/objetivo-igualdad/organizaciones-coercitivas-salir-trampa/17119484/",
    },
  ],
};

export default noticia;
