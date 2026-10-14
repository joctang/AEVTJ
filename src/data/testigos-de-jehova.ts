// Página pilar /testigos-de-jehova/.
// Texto literal del borrador editorial (06_Contenido/testigos-de-jehova/BORRADOR.md,
// revisión del 7 de octubre de 2026). No reescribir ni ampliar aquí: los cambios
// de contenido se hacen primero en el borrador.
// Enlaces internos: solo rutas publicadas. Las páginas temáticas se enlazarán
// cuando existan (ver «Enlazado futuro» en las notas del borrador).

const ext = (href: string, texto: string) =>
  `<a href="${href}" target="_blank" rel="noopener">${texto}</a>`;

export interface Intro {
  kicker: string;
  titulo: string;
  tituloSeo: string;
  descripcion: string;
  entradilla: string;
  revisado: string;
  revisadoIso: string;
}

export type Bloque =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "lista"; items: { etiqueta: string; texto: string }[] };

// Ilustraciones de la serie geométrica de la AEVTJ.
// `nombre` es la base del archivo en /uploads/<carpeta>/ (por defecto 2026/10);
// existen las variantes -900 y -1536. Guía: docs-ilustraciones/GUIA-ILUSTRACIONES.md
export interface Ilustracion {
  nombre: string;
  alt: string;
  carpeta?: string;
}

export interface Seccion {
  id: string;
  titulo: string;
  corto: string;
  bloques: Bloque[];
  nota?: string;
  imagen?: Ilustracion;
}

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

const p = (texto: string): Bloque => ({ tipo: "parrafo", texto });

export const intro: Intro = {
  kicker: "Guía informativa",
  titulo: "Testigos de Jehová: quiénes son, qué creen y cómo viven",
  tituloSeo: "Testigos de Jehová: quiénes son y qué creen",
  descripcion:
    "Quiénes son los Testigos de Jehová, qué creen y cómo viven. Una explicación sencilla de su organización y sus normas desde la perspectiva de la AEVTJ.",
  entradilla:
    "Los Testigos de Jehová son un grupo religioso que se considera cristiano. Llaman Jehová a Dios y basan sus creencias en su interpretación de la Biblia. Seguramente los conoces por sus visitas a las casas o por los expositores de publicaciones que colocan en la calle. Para ellos, hablar de su fe y predicar no es algo secundario: ocupa un lugar central en su vida religiosa y organiza buena parte de su actividad.",
  revisado: "8 de octubre de 2026",
  revisadoIso: "2026-10-08",
};

// Segundo párrafo de la entrada del borrador: se muestra bajo el hero.
// Foto del hero: sede mundial de los Testigos de Jehová en Warwick (Nueva York).
// Aportada por la AEVTJ; pendiente de confirmar autoría y licencia antes de publicar.
export const heroFoto = {
  src: "/uploads/2026/10/sede-mundial-testigos-de-jehova-warwick.webp",
  alt: "Cartel de la sede mundial de los Testigos de Jehová en Warwick, Nueva York, con los edificios al fondo.",
  width: 1400,
  height: 787,
};

export const presentacion =
  "Además de predicar, su fe influye en las celebraciones, las relaciones personales y algunas decisiones sobre salud. Aquí te contamos lo esencial para entender quiénes son y cómo se organiza su religión.";

export const secciones: Seccion[] = [
  {
    id: "origen",
    titulo: "¿Cómo surgieron los Testigos de Jehová?",
    corto: "Cómo surgieron",
    imagen: {
      nombre: "tdj-origen-imprenta-hilo",
      alt: "Ilustración de una pequeña imprenta antigua junto a una pila de libros, unidos por un hilo verde.",
    },
    bloques: [
      p("Las raíces del movimiento actual están en grupos de estudio bíblico que surgieron en Pensilvania en la década de 1870. Entre sus figuras destacadas estuvo Charles Taze Russell. En 1931, quienes formaban parte de la organización adoptaron el nombre de Testigos de Jehová."),
      p("Esta es solo una referencia breve: la historia completa, incluidos sus cambios de organización y de enseñanzas, merece una página propia."),
    ],
  },
  {
    id: "creencias",
    titulo: "¿En qué creen?",
    corto: "En qué creen",
    imagen: {
      nombre: "tdj-libro-puerta-hilo",
      alt: "Ilustración de un libro cerrado y una puerta entreabierta por la que entra luz, unidos por un hilo verde.",
    },
    bloques: [
      p("Creen en Jehová como Dios y en Jesús como su Hijo y Salvador. Se consideran cristianos, pero no aceptan la Trinidad: para ellos, Dios y Jesús son seres distintos. Esta es una de las diferencias principales con el catolicismo y muchas iglesias protestantes."),
      p("También creen que Dios acabará con el sufrimiento y que las personas podrán vivir para siempre en un paraíso en la Tierra. Esperan una resurrección de los muertos y no creen en un infierno de tormento eterno."),
      p("La Biblia ocupa un lugar central en su vida. Utilizan habitualmente su propia traducción, la <em>Traducción del Nuevo Mundo</em>, y estudian sus textos siguiendo las explicaciones de la organización."),
    ],
  },
  {
    id: "direccion",
    titulo: "¿Quién los dirige?",
    corto: "Quién los dirige",
    imagen: {
      nombre: "tdj-direccion-mesa-sillas-hilo",
      alt: "Ilustración de una mesa alargada al fondo con unas pocas figuras y muchas filas de sillas vacías delante, unidas a la mesa por un hilo verde.",
    },
    bloques: [
      p("La organización está dirigida por el Cuerpo Gobernante, un grupo de hombres que orienta sus enseñanzas y su actividad mundial. Sus explicaciones de la Biblia sirven de referencia para las congregaciones, que son los grupos locales de Testigos."),
      p("La organización tiene una dirección central: el Cuerpo Gobernante establece las enseñanzas y directrices comunes. En cada congregación, los ancianos las transmiten y las aplican al dirigir las reuniones, la predicación y los asuntos de disciplina religiosa. Así, la misma línea organizativa llega a las congregaciones de distintos países."),
    ],
  },
  {
    id: "reuniones-y-predicacion",
    titulo: "¿Qué hacen en sus reuniones y por qué predican?",
    corto: "Reuniones y predicación",
    imagen: {
      nombre: "tdj-reuniones-expositor-puerta-hilo",
      alt: "Ilustración de un expositor de publicaciones en la acera unido por un hilo verde al pomo de la puerta de una casa.",
    },
    bloques: [
      p("Sus lugares de reunión se llaman Salones del Reino. Allí estudian la Biblia y sus publicaciones, escuchan discursos, oran y cantan. Las reuniones y la predicación forman parte habitual de su práctica religiosa."),
      p("Cuando llaman a una puerta o hablan con alguien en la calle, buscan compartir sus creencias y ofrecer un estudio de la Biblia. Lo hacen porque entienden que Jesús encargó a sus seguidores transmitir su mensaje."),
    ],
  },
  {
    id: "normas",
    titulo: "¿Qué normas siguen en su vida cotidiana?",
    corto: "Normas cotidianas",
    imagen: {
      nombre: "tdj-normas-tarta-regalo-hilo",
      alt: "Ilustración de una tarta de cumpleaños con las velas apagadas y un regalo sin abrir apartado en el suelo, con el lazo verde suelto.",
    },
    bloques: [
      p("Su fe influye en decisiones que para otras personas pueden no tener relación con la religión. Algunos ejemplos ayudan a entenderlo:"),
      {
        tipo: "lista",
        items: [
          {
            etiqueta: "Celebraciones.",
            texto: "No celebran <a href=\"/testigos-de-jehova/cumpleanos/\">cumpleaños</a> ni <a href=\"/testigos-de-jehova/navidad/\">Navidad</a> por motivos religiosos. Eso no significa que no celebren nada: pueden reunirse con familiares y amigos o celebrar una boda.",
          },
          {
            etiqueta: "Ropa y aspecto.",
            texto: "Para las reuniones y la predicación se espera una apariencia que consideren modesta y apropiada. Algunas pautas han cambiado, así que la imagen de hombres siempre afeitados y mujeres siempre con falda no describe todas las situaciones actuales.",
          },
          {
            etiqueta: "Pareja y familia.",
            texto: "Sus enseñanzas establecen normas sobre las relaciones sexuales, el matrimonio y el divorcio. Por eso, compartir o no la religión puede tener bastante peso en una relación de pareja.",
          },
          {
            etiqueta: "Política y guerras.",
            texto: "Defienden la neutralidad política y no participan en guerras. Lo entienden como parte de su compromiso religioso.",
          },
        ],
      },
      p("Estas pautas no abarcan todos los aspectos ni describen por sí solas cómo vive cada persona cada situación."),
    ],
  },
  {
    id: "sangre",
    titulo: "¿Qué ocurre con las transfusiones de sangre?",
    corto: "Transfusiones de sangre",
    imagen: {
      nombre: "tdj-vial-hilo",
      alt: "Ilustración de un vial de sangre con un hilo verde atado, símbolo de cuidado y confianza.",
    },
    bloques: [
      p("Durante décadas, los Testigos de Jehová mantuvieron una postura restrictiva frente a las transfusiones por su interpretación de la Biblia. En septiembre de 2026, la organización cambió su postura sobre algunos componentes sanguíneos, aunque mantiene una distinción respecto a la sangre completa. La historia y el alcance de estos cambios requieren más contexto que el que cabe aquí."),
    ],
    nota:
      'Si a ti o a un familiar os proponen una transfusión, el equipo que os atiende puede explicar qué componente recomienda, por qué y qué alternativas hay. Así podréis valorar la decisión con información clara sobre el caso concreto. En nuestra <a href="/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/">guía de derechos sanitarios</a> explicamos cómo comunicar la voluntad del paciente.',
  },
  {
    id: "salida",
    titulo: "¿Qué pasa si alguien deja de ser Testigo?",
    corto: "Dejar de ser Testigo",
    imagen: {
      nombre: "tdj-silla-vacia-hilo-cortado",
      alt: "Ilustración de una familia sentada a un extremo de la mesa y una silla vacía al otro, separadas por un hilo cortado.",
    },
    bloques: [
      p("Dejar de asistir a las reuniones, renunciar a la religión y ser expulsado no son la misma situación. La organización distingue entre ellas, y el trato que recibe la persona puede cambiar."),
      p("En caso de expulsión, la norma que la organización comunica a sus miembros es que no mantengan trato social con la persona; la convivencia con familiares que viven en el mismo hogar se trata de otra manera."),
      p('Ser expulsado puede tener consecuencias que van mucho más allá de dejar una religión. Según la norma de la organización, otros miembros dejan de mantener trato social con la persona; la convivencia con familiares del mismo hogar se trata de forma distinta. Para quienes tienen a padres, hermanos, hijos adultos o amistades cercanas dentro de la organización, especialmente si viven fuera del hogar, la expulsión puede suponer perder de golpe el contacto cotidiano con casi toda esa red. AEVTJ recibe testimonios de personas para quienes esto supone un antes y un después: no solo dejan una religión, también pueden perder casi toda su vida familiar y social dentro de la organización y tener que reconstruir su vida con una red de apoyo muy reducida. En nuestra <a href="/guia-para-salir-de-los-testigos-de-jehova/">guía para salir de los Testigos de Jehová</a> explicamos estas situaciones y ofrecemos recursos.'),
    ],
  },
];

export const mirada = {
  id: "mirada-aevtj",
  kicker: "Nuestra perspectiva",
  titulo: "La mirada de la AEVTJ",
  corto: "La mirada de la AEVTJ",
  imagen: {
    nombre: "tdj-puerta-grupo-hilo",
    alt: "Ilustración de una persona que sale por una puerta y alcanza un hilo verde que sostiene un grupo de personas que la espera.",
  } satisfies Ilustracion,
  parrafos: [
    "En la Asociación Española de Víctimas de los Testigos de Jehová prestamos especial atención a cómo las normas de la organización pueden afectar a las personas y a sus relaciones. Respetamos a quienes practican esta religión. Ese respeto es compatible con escuchar a quienes han sufrido y examinar las prácticas que les han causado daño.",
    'Si has llegado hasta aquí por curiosidad, esta es una primera orientación. Si el tema te afecta personalmente, puedes consultar los <a href="/recursos-de-ayuda/">recursos de ayuda</a>, conocer <a href="/quienes-somos/">quiénes somos</a> o <a href="/contacto/">contactar con la asociación</a>.',
  ],
};

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Rezan el padrenuestro?",
    respuesta: "No. No lo rezan normalmente palabra por palabra. Lo consideran un modelo con pautas para dirigirse a Dios, no una fórmula que haya que repetir de memoria.",
  },
  {
    pregunta: "¿Siguen los Diez Mandamientos?",
    respuesta: "No creen que los cristianos estén obligados a cumplir la Ley de Moisés, de la que forman parte los Diez Mandamientos. Sí consideran que sus principios siguen siendo útiles.",
  },
  {
    pregunta: "¿Creen en la creación o en la evolución?",
    respuesta: "No creen que los humanos procedan de otros seres vivos ni que los distintos tipos de seres vivos surgieran por evolución. Creen que Dios los creó y que la humanidad desciende de Adán y Eva. Sí aceptan que haya variaciones dentro de cada tipo.",
  },
  {
    pregunta: "¿En qué trabajan los Testigos de Jehová?",
    respuesta: "No tienen una profesión propia. La organización anima a escoger estudios y empleo que permitan mantenerse y dejar tiempo para la predicación y otras actividades religiosas. Por eso, algunos que dedican muchas horas al ministerio prefieren trabajos parciales o compatibles con ese horario; no es igual para todos.",
  },
  {
    pregunta: "¿Pueden bailar los Testigos de Jehová?",
    respuesta: "Sí, pueden bailar, por ejemplo, en bodas y reuniones sociales. La música y el baile deben ajustarse a las normas de conducta que consideran apropiadas.",
  },
];
