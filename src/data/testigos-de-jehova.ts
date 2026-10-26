// Página pilar /testigos-de-jehova/.
// Revisada con el criterio editorial el 18-10-2026 (06_Contenido/CRITERIO_EDITORIAL_PERIODISTICO.md).
// Desde entonces el texto se retoca aquí directamente; el BORRADOR.md ya no está al día.
// Enlaces internos: solo rutas publicadas. Las páginas temáticas se enlazarán
// cuando existan (ver «Enlazado futuro» en las notas del borrador).

const ext = (href: string, texto: string) =>
  `<a href="${href}" target="_blank" rel="noopener">${texto}</a>`;

export interface Intro {
  kicker: string;
  titulo: string;
  tituloSeo: string;
  descripcion: string;
  entradilla: string[];
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
  // Texto propuesto por la junta (26-10-2026), en dos párrafos.
  entradilla: [
    "Los testigos de Jehová son una organización religiosa que se identifica como cristiana y llama Jehová a Dios. Sus creencias y normas se basan en la interpretación de la Biblia que establece el Cuerpo Gobernante, un reducido grupo de hombres que dirige la organización mundial y al que consideran el instrumento de Dios para transmitir su guía.",
    "Creen vivir en los «últimos días», esperan la llegada del Armagedón (la guerra de Dios que pondrá fin al mundo actual) y aspiran a vivir eternamente en un paraíso en la Tierra. Son conocidos por predicar de casa en casa y por sus expositores de publicaciones en la calle: difundir su fe ocupa un lugar central en su vida religiosa.",
  ],
  revisado: "18 de octubre de 2026",
  revisadoIso: "2026-10-18",
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
      p("Las raíces del movimiento actual están en grupos de estudio bíblico que surgieron en Pensilvania en la década de 1870. Entre sus figuras destacadas estuvo <a href=\"/testigos-de-jehova/fundador/\">Charles Taze Russell</a>. En 1931, quienes formaban parte de la organización adoptaron el nombre de Testigos de Jehová."),
      p("No todos los Estudiantes de la Biblia siguieron a la organización: tras la muerte de Russell hubo divisiones, y algunos de aquellos grupos siguen existiendo hoy. Lo contamos en la página sobre <a href=\"/testigos-de-jehova/fundador/\">el fundador y los primeros años</a>."),
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
      p(`Creen que el mundo vive sus «últimos días». En ${ext("https://www.jw.org/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/ultimos-dias-se%C3%B1al-profecias-fin/", "su web oficial")} lo explican así: «Los sucesos mundiales y la cronología bíblica muestran que los últimos días comenzaron en 1914, el año en que empezó la Primera Guerra Mundial».`),
      p(`Esperan que ese periodo termine con el Armagedón, que ${ext("https://www.jw.org/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/el-armaged%C3%B3n/", "la organización define")} como «la guerra final y definitiva entre Dios y los gobiernos humanos». No lo entienden como la destrucción del planeta: según su web, la Tierra seguirá existiendo y «una gran muchedumbre» de siervos leales de Dios sobrevivirá. Sobre la fecha, recuerdan que Jesús dijo que «el día y la hora no los sabe nadie».`),
      p("Después, creen que Dios acabará con el sufrimiento y que las personas podrán vivir para siempre en un paraíso en la Tierra. Esperan una resurrección de los muertos y no creen en un infierno de tormento eterno."),
      p("La Biblia ocupa un lugar central en su vida. Utilizan habitualmente su propia traducción, la <a href=\"/testigos-de-jehova/biblia/\"><em>Traducción del Nuevo Mundo</em></a>, y estudian sus textos siguiendo las explicaciones de la organización."),
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
      p("En cada congregación, los ancianos aplican esas directrices al dirigir las reuniones, la predicación y los asuntos de disciplina religiosa. Así, la misma línea llega a congregaciones de todo el mundo."),
      p(`La propia organización reconoce que esas directrices pueden cambiar. ${ext("https://wol.jw.org/es/wol/d/r4/lp-s/2017283", "<em>La Atalaya</em> de febrero de 2017")} dice: «El Cuerpo Gobernante no recibe revelaciones divinas ni es infalible. Por lo tanto, puede equivocarse en temas doctrinales y cuestiones de organización». Varias de sus normas han cambiado con los años, como contamos en las páginas sobre <a href="/testigos-de-jehova/vestimenta/">vestimenta</a> y <a href="/testigos-de-jehova/normas/">normas</a>.`),
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
      p("Además, cuentan la predicación por todo el mundo entre las señales de los últimos días: «Las buenas noticias del Reino se predicarán en toda la tierra habitada» (Mateo 24:14)."),
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
      p("Algunas de estas pautas han cambiado con los años: hasta 1973 se bautizaba a personas que fumaban, desde 2023 se permite la barba, en 2026 la universidad pasó a ser una decisión personal y ese mismo año cambió la postura sobre algunos componentes de la sangre. Lo contamos con sus fuentes en <a href=\"/testigos-de-jehova/normas/\">normas y vida cotidiana</a>, <a href=\"/testigos-de-jehova/vestimenta/\">vestimenta</a> y <a href=\"/testigos-de-jehova/sangre/\">sangre</a>."),
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
      p("Durante décadas, los Testigos de Jehová rechazaron las transfusiones de sangre por su interpretación de la Biblia. En septiembre de 2026, la organización cambió su postura sobre algunos componentes sanguíneos, aunque mantiene una distinción respecto a la sangre completa. La historia y el alcance de estos cambios requieren más contexto que el que cabe aquí."),
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
      p(`Hoy la organización ya no habla de expulsión. Su ${ext("https://wol.jw.org/es/wol/d/r4/lp-s/502012472", "web de preguntas frecuentes")} lo explica así: «Antes decíamos que a una persona que pecaba y no se arrepentía se le expulsaba. Pero ahora sencillamente usamos la expresión que aparece en la Biblia y decimos que a esa persona se le ha sacado de la congregación».`),
      p(`La norma de fondo sigue siendo la misma: con esa persona «no socializamos». Lo que ha cambiado es el saludo. Según ${ext("https://wol.jw.org/es/wol/d/r4/lp-s/2024534", "<em>La Atalaya</em> de agosto de 2024")}, si alguien que fue sacado de la congregación va a una reunión, cada uno puede decidir si le da «un saludo breve». La propia revista reconoce: «En el pasado, no lo habríamos saludado». Y en los casos que considera extremos, cuando alguien que abandonó la congregación trata de perjudicarla, su web dice: «ni siquiera saludamos a esa persona». La convivencia con la familia que vive en la misma casa se trata de otra manera.`),
      p('Para quienes tienen a padres, hermanos, hijos adultos o amistades cercanas dentro de la organización, sobre todo si viven en otra casa, salir puede suponer perder de golpe el contacto cotidiano con casi toda esa red. En la AEVTJ recibimos testimonios de personas para quienes esto marca un antes y un después: no solo dejan una religión, también pierden buena parte de su vida familiar y social y tienen que reconstruirla con muy pocos apoyos. En la página sobre <a href="/testigos-de-jehova/expulsion-y-desasociacion/">expulsión y desasociación</a> reunimos las diferencias entre situaciones y una cronología de publicaciones oficiales. En nuestra <a href="/guia-para-salir-de-los-testigos-de-jehova/">guía para salir de los Testigos de Jehová</a> explicamos estas situaciones y ofrecemos recursos.'),
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
    "Muchos de quienes formamos la asociación fuimos Testigos de Jehová. Sabemos lo que es crecer con miedo a hacer preguntas, sentir que una duda es una traición o callarse para no perder a la familia. Y sabemos lo que pasa cuando alguien sale: la madre que deja de llamar, los amigos de toda la vida que cambian de acera, las celebraciones familiares a las que ya no te invitan.",
    "Respetamos a quienes practican esta religión. Ese respeto es compatible con escuchar a quienes han sufrido y con contar las normas que les han causado daño, sobre todo el aislamiento de quienes se van.",
    "Si estás pensando en salir, o ya lo has hecho, es normal sentir alivio, culpa, miedo o tristeza, a veces todo a la vez. No hay prisa ni una forma correcta de hacerlo.",
    'Si has llegado hasta aquí por curiosidad, esta es una primera orientación. Si te afecta personalmente, aquí hay personas que lo entienden porque pasaron por lo mismo. Puedes consultar los <a href="/recursos-de-ayuda/">recursos de ayuda</a> y, cuando quieras hablar de ello, puedes <a href="/contacto/">escribirnos</a>.',
  ],
};

// Fuentes oficiales citadas en el texto, a la vista al pie de la página.
export const fuentes = [
  { href: "https://www.jw.org/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/ultimos-dias-se%C3%B1al-profecias-fin/", texto: "Preguntas sobre la Biblia: «¿Cuál es la señal de “los últimos días” o “los tiempos finales”?» · jw.org" },
  { href: "https://www.jw.org/es/ense%C3%B1anzas-b%C3%ADblicas/preguntas/el-armaged%C3%B3n/", texto: "Preguntas sobre la Biblia: «¿Qué es el Armagedón?» · jw.org" },
  { href: "https://wol.jw.org/es/wol/d/r4/lp-s/2017283", texto: "La Atalaya, febrero de 2017: «¿Quién dirige hoy al pueblo de Dios?» · wol.jw.org" },
  { href: "https://wol.jw.org/es/wol/d/r4/lp-s/502012472", texto: "Preguntas frecuentes: «¿Cómo tratan los testigos de Jehová a quienes ya no pertenecen a su religión?» · wol.jw.org" },
  { href: "https://wol.jw.org/es/wol/d/r4/lp-s/2024534", texto: "La Atalaya, agosto de 2024: «Cómo se ayuda a los que han sido sacados de la congregación» · wol.jw.org" },
];

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Rezan el padrenuestro?",
    respuesta: "<strong class=\"respuesta-corta\">No.</strong> No lo rezan normalmente palabra por palabra. Lo consideran un modelo con pautas para dirigirse a Dios, no una fórmula que haya que repetir de memoria.",
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
