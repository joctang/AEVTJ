import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/conversaciones-pendientes-episodio-128-cadena-ser.json`.
 *
 * Notas de migración:
 * - El audio de Cadena SER no es incrustable: se enlaza como `enlaceExterno`
 *   (se eliminó el parámetro de rastreo `?ssm=tw`).
 * - Descartados: "Post populares", newsletter, "¿Podemos ayudarte?" y restos de WordPress.
 * - El original carece de portada editorial: se usa la imagen de cabecera del post.
 * - CORREGIDO 22/09: el titulo era el nombre del programa y el titular editorial
 *   del original (<h2> "Represion, control y diversidad...") se habia perdido.
 *   El nombre del programa queda solo en la banda de `medio`.
 */
export const noticia: Noticia = {
  slug: "conversaciones-pendientes-episodio-128-cadena-ser",
  titulo: "Represión, control y diversidad: el testimonio de Dani en la SER",
  fecha: "2026-07-09T10:50:08",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Programa", nombre: "Conversaciones pendientes · Cadena SER" },
  portada: {
    src: "/uploads/2026/07/cabecera-cadena-ser-dani-testimonio-aevtj.webp",
    alt: "Cabecera de Cadena SER para el episodio 128 de Conversaciones pendientes con el testimonio de Dani",
  },
  entradilla:
    "Cadena SER dedica parte de su episodio 128 de Conversaciones pendientes a escuchar a Dani, ex Testigo de Jehová y miembro del colectivo LGTBIQ+, sobre la represión y el control que vivió dentro de la organización.",
  citaDestacada: {
    texto:
      "Cuando una organización controla la identidad, la sexualidad, los vínculos y la pertenencia, salir no es solo dejar de asistir: es recuperar el derecho a existir sin miedo.",
    autor: "AEVTJ",
  },
  pieza: {
    titulo: "Conversaciones pendientes · Episodio 128 · Cadena SER",
    formato: "audio",
    enlaceExterno: {
      href: "https://cadenaser.com/audio/1779663861755/",
      etiqueta: "Escuchar en Cadena SER",
    },
    pie: "Audio completo · Cadena SER · 2026",
  },
  cuerpo: [
    { tipo: "seccion", titulo: "Por qué importa" },
    {
      tipo: "parrafo",
      texto:
        "Este audio importa porque une dos realidades que muchas veces se han tratado por separado: el control religioso de alta demanda y el daño específico que puede sufrir una persona LGTBIQ+ cuando su identidad choca con las normas del grupo.",
    },
    {
      tipo: "parrafo",
      texto:
        "Según la información publicada por Cadena SER, en el episodio se habla con <strong>Dani</strong>, ex Testigo de Jehová y miembro del colectivo LGTBIQ+, sobre la represión y el control que sufrió dentro de la organización.",
    },
    {
      tipo: "parrafo",
      texto:
        "Su testimonio también forma parte del documental <strong>Sobrevivir al paraíso</strong>, una referencia especialmente relevante para quienes buscan entender qué ocurre cuando una persona empieza a cuestionar un entorno que ha marcado su identidad, sus relaciones y su forma de mirar el mundo.",
    },
    {
      tipo: "parrafo",
      texto:
        "Para la AEVTJ, que un medio como Cadena SER recoja este tipo de experiencias ayuda a que muchas personas puedan reconocerse en relatos que antes vivían en silencio. No se trata solo de hablar de creencias, sino de los efectos humanos que puede tener un sistema de control sobre la conciencia, la familia, la vida afectiva y la autoestima.",
    },
    {
      tipo: "parrafo",
      texto:
        "El episodio también incluye una conversación con <strong>Cecilia Gessa</strong>, que presenta su corto <strong>Una conversación pendiente</strong>. En nuestra lectura, el valor principal para esta web está en el testimonio de Dani y en cómo ayuda a visibilizar experiencias de exmiembros que además han tenido que defender su identidad frente a normas internas excluyentes.",
    },
    { tipo: "seccion", titulo: "Claves para leer esta noticia" },
    {
      tipo: "lista",
      items: [
        "<strong>No es solo una historia personal:</strong> el testimonio permite mirar patrones de control que pueden afectar a muchas personas, aunque cada salida sea distinta.",
        "<strong>La identidad también puede ser controlada:</strong> cuando el grupo define qué puedes sentir, amar o expresar, el daño no es solo doctrinal: también es emocional y social.",
        "<strong>Escuchar reduce la culpa:</strong> oír a otra persona nombrar lo vivido puede ayudar a entender que el problema no era la propia identidad, sino el sistema que la reprimía.",
      ],
    },
    { tipo: "seccion", titulo: "Qué puede reconocer una persona al escucharlo" },
    {
      tipo: "parrafo",
      texto:
        "El audio puede servir a exmiembros, familiares y profesionales para identificar dinámicas que suelen aparecer en entornos de alta demanda.",
    },
    {
      tipo: "lista",
      items: [
        "<strong>Represión de la identidad:</strong> cuando una persona aprende a ocultar partes esenciales de sí misma para no ser rechazada.",
        "<strong>Control del entorno:</strong> cuando el grupo condiciona relaciones, decisiones personales y formas de vivir la afectividad.",
        "<strong>Miedo a perderlo todo:</strong> cuando cuestionar o salir implica arriesgar familia, comunidad y seguridad emocional.",
        "<strong>Necesidad de reconstrucción:</strong> cuando abandonar el grupo exige volver a construir autoestima, red de apoyo y proyecto vital.",
      ],
    },
    { tipo: "seccion", titulo: "Si esta historia conecta contigo" },
    {
      tipo: "parrafo",
      texto:
        "Si has vivido control, miedo, rechazo o aislamiento en el entorno de los Testigos de Jehová, especialmente por tu identidad o por tomar distancia del grupo, puedes escribirnos. Escuchamos sin juicio y desde la experiencia de quienes conocen estas dinámicas.",
    },
  ],
  recursos: [
    {
      titulo: "Escuchar el episodio",
      texto: "Accede al episodio 128 de Conversaciones pendientes en la web de Cadena SER.",
      href: "https://cadenaser.com/audio/1779663861755/",
      etiqueta: "Escuchar en Cadena SER",
      externo: true,
    },
    {
      titulo: "Pedir apoyo",
      texto:
        "Si has vivido control, miedo, rechazo o aislamiento en el entorno de los Testigos de Jehová, escuchamos sin juicio.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    {
      etiqueta: "Cadena SER · Conversaciones pendientes | Episodio 128 (25 de mayo de 2026)",
      href: "https://cadenaser.com/audio/1779663861755/",
    },
  ],
};

export default noticia;
