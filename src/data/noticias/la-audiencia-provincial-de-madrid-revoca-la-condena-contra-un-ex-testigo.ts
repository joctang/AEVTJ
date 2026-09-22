import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/la-audiencia-provincial-de-madrid-revoca-la-condena-contra-un-ex-testigo.json`.
 *
 * Notas de migración:
 * - Sin vídeo en el original: no hay iframe que recuperar.
 * - Se descartaron los bloques heredados de WordPress: "Tags", "Difunde y ayuda",
 *   "Ultimas noticias", "¿Podemos ayudarte?" y "Categorías".
 * - El original se refería al afectado solo como "Carmona" (apellido, sin más
 *   contexto); se mantiene tal cual aparece en el cuerpo.
 */
export const noticia: Noticia = {
  slug: "la-audiencia-provincial-de-madrid-revoca-la-condena-contra-un-ex-testigo",
  titulo: "La Audiencia Provincial de Madrid revoca la condena contra un ex testigo de Jehová",
  fecha: "2025-03-14T15:09:45",
  autoria: "AEVTJ · Redacción",
  portada: {
    src: "/uploads/2025/10/audiencia-provincial-de-madrid.webp",
    alt: "Sede de la Audiencia Provincial de Madrid",
  },
  entradilla:
    "El tribunal estima el recurso de un exmiembro de los Testigos de Jehová y anula la condena de 2023: llamar «secta» en sentido sociológico o testimonial no vulnera el honor.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "La <strong>Audiencia Provincial de Madrid</strong> ha estimado el recurso interpuesto por un activista y exmiembro de los Testigos de Jehová, revocando la condena impuesta en 2023 por el Juzgado de Primera Instancia nº 1 de Torrejón de Ardoz.",
    },
    {
      tipo: "parrafo",
      texto:
        "Este fallo constituye un <strong>hito en la defensa de la libertad de expresión</strong> y un importante respaldo para las personas que, tras abandonar esta organización, desean <strong>denunciar públicamente las prácticas y consecuencias perjudiciales</strong> que aseguran haber vivido.",
    },
    { tipo: "seccion", titulo: "Un precedente clave en favor de la libertad de expresión" },
    {
      tipo: "parrafo",
      texto:
        "La sentencia de la Audiencia Provincial corrige la decisión anterior, que obligaba a Carmona a retirar un vídeo de su canal y a indemnizar con 5.000 euros a la confesión religiosa.",
    },
    {
      tipo: "parrafo",
      texto:
        'El tribunal ha determinado que <strong>referirse a los Testigos de Jehová como "secta" no vulnera su honor</strong> cuando dicho término se utiliza <strong>en un sentido sociológico, académico o testimonial</strong>, especialmente en el marco de una crítica razonada y basada en experiencias personales.',
    },
    {
      tipo: "parrafo",
      texto:
        "De esta manera, la justicia <strong>reconoce que las expresiones de los exmiembros forman parte del debate público legítimo</strong> sobre el funcionamiento de organizaciones religiosas y los efectos que pueden tener en la vida de las personas que las abandonan.",
    },
    { tipo: "seccion", titulo: "Contexto judicial y social" },
    {
      tipo: "parrafo",
      texto:
        "En los últimos años, diferentes juzgados españoles han recibido demandas interpuestas por los Testigos de Jehová contra exmiembros y contra esta Asociación. En diciembre de 2023, otro juzgado de Torrejón de Ardoz ya <strong>desestimó una demanda presentada contra la AEVTJ</strong>, defendiendo también el derecho a la crítica.",
    },
    {
      tipo: "parrafo",
      texto:
        "El nuevo fallo de la Audiencia Provincial refuerza esta línea y <strong>marca una clara tendencia judicial</strong> a favor de la libertad de expresión y del derecho de las víctimas a <strong>contar su historia sin miedo a represalias legales</strong>.",
    },
    { tipo: "seccion", titulo: "Lo que dice la Audiencia Provincial" },
    {
      tipo: "parrafo",
      texto:
        "Según la información publicada por la defensa y diversos medios jurídicos, el tribunal ha señalado que:",
    },
    {
      tipo: "lista",
      etiqueta: "Conclusión del tribunal",
      items: [
        '<strong>El término "secta" puede tener un uso legítimo.</strong> Su empleo no implica necesariamente un insulto, sino que puede describir una realidad organizativa y doctrinal desde la sociología o la psicología de la religión.',
        "<strong>No existe intromisión ilegítima en el honor.</strong> Las críticas basadas en vivencias personales, siempre que no incluyan falsedades ni expresiones vejatorias, están amparadas por el derecho a la libertad de expresión.",
        "<strong>La voz de los exmiembros merece protección.</strong> El tribunal reconoce el interés social de que personas afectadas por dinámicas de aislamiento, coerción o control psicológico puedan dar testimonio de su experiencia.",
        "<strong>Revocación total de la condena.</strong> Se anula la obligación de retirar el contenido publicado y el pago de la indemnización.",
      ],
    },
    { tipo: "seccion", titulo: "Un paso adelante para las víctimas" },
    {
      tipo: "parrafo",
      texto:
        "Desde la <strong>Asociación Española de Víctimas de los Testigos de Jehová</strong>, acogemos esta decisión con satisfacción y esperanza. Supone un <strong>avance histórico en el reconocimiento de los derechos de quienes han sufrido dentro de la organización</strong> y un mensaje claro: <strong>denunciar no es difamar</strong>.",
    },
    {
      tipo: "parrafo",
      texto:
        "La justicia española confirma que <strong>contar la verdad de lo vivido</strong> no puede considerarse un ataque, sino un ejercicio legítimo de libertad y de reparación social.",
    },
    {
      tipo: "parrafo",
      texto:
        "Este fallo abre el camino para que <strong>más víctimas se sientan seguras al compartir su historia</strong>, sin temor a demandas judiciales destinadas a silenciarlas.",
    },
  ],
};

export default noticia;
