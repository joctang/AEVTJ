import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/mas-alla-del-prejuicio-nuestra-opinion.json`.
 *
 * Notas de migración:
 * - Pieza de opinión propia de la AEVTJ en respuesta a dos columnas de
 *   La Voz de Asturias: no se le asigna `medio` porque no procede de un medio.
 * - Los dos logos del original (La Voz de Asturias y logo AVTJ) eran
 *   decorativos; no se migran como imágenes de cuerpo.
 * - La cita de Fini Falcó se usa como cita destacada de apertura.
 * - Se descartaron "Tags", "Difunde esta noticia", "Últimas noticias",
 *   "¿Podemos ayudarte?" y "Categorías".
 * - El original escribía "periodico La voz de Asturias" y "Finí Falcó"
 *   (también "Fini"): se respeta la grafía del cuerpo con acentuación normal.
 */
export const noticia: Noticia = {
  slug: "mas-alla-del-prejuicio-nuestra-opinion",
  titulo: "Más allá del prejuicio: nuestra opinión",
  fecha: "2025-11-07T10:40:45",
  autoria: "AEVTJ · Redacción",
  portada: {
    src: "/uploads/2025/11/La-voz-de-asturias.webp",
    alt: "Portada del diario La Voz de Asturias",
  },
  entradilla:
    "Desde la AEVTJ respondemos a la columna de Fini Falcó en La Voz de Asturias: defender la fe no exige silenciar los relatos de daño, y contar lo que no se ve es compatible con respetar la fe.",
  citaDestacada: {
    texto:
      "Los Testigos valoran la crítica y las opiniones contrarias, convencidos de que las diferencias enriquecen la sociedad de la que todos formamos parte",
    autor: "Fini Falcó",
    cargo: "Columnista de La Voz de Asturias",
  },
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        '<strong>Nota de transparencia.</strong> Este texto se publica desde la AEVTJ. No escribimos como terceros ajenos: desde la asociación, respaldamos al presidente de la AEVTJ en su <a href="https://www.lavozdeasturias.es/noticia/opinion/2025/11/05/libertad-expresion-culto-apuntes-extestigo-jehova/00031762336867409454319.htm">réplica del 05/11 en <em>La Voz de Asturias</em></a>. Precisamente por esa cercanía, creemos que lo honesto es declarar nuestra posición y explicar por qué discrepamos del enfoque de la <a href="https://www.lavozdeasturias.es/noticia/opinion/2025/10/22/alla-prejuicio-impacto-social-testigos-jehova/00031761125189212231412.htm">columna del 22/10, firmada por Fini Falcó</a>.',
    },
    { tipo: "seccion", titulo: "Contexto" },
    {
      tipo: "parrafo",
      texto:
        'En las últimas semanas, en el periódico La Voz de Asturias, se han confrontado dos miradas sobre los Testigos de Jehová: una, <a href="https://www.lavozdeasturias.es/noticia/opinion/2025/10/22/alla-prejuicio-impacto-social-testigos-jehova/00031761125189212231412.htm">la de Fini Falcó (22/10)</a>, que pide ir "más allá del prejuicio" y subraya el valor comunitario y de apoyo mutuo; <a href="https://www.lavozdeasturias.es/noticia/opinion/2025/11/05/libertad-expresion-culto-apuntes-extestigo-jehova/00031762336867409454319.htm">otra, la que firma nuestro presidente, Samuel Ferrando (05/11)</a>, que recuerda que en España <strong>la libertad religiosa</strong> y <strong>la libertad de expresión</strong> coexisten, y que el interés público también incluye <strong>escuchar y publicar</strong> relatos de daño. Desde AEVTJ <strong>reconocemos</strong> el componente social que Falcó pone en valor; al mismo tiempo, defendemos que <strong>contar lo que no se ve</strong> —el sufrimiento, el ostracismo o las presiones— es compatible con respetar la fe e imprescindible para comprender el cuadro completo.',
    },
    { tipo: "seccion", titulo: "Por qué afirmamos ambas cosas a la vez" },
    {
      tipo: "parrafo",
      texto:
        "Quienes formamos parte de AEVTJ hemos conocido —de primera mano o a través de cientos de testimonios— la dimensión comunitaria: la red de amistades, el apoyo en momentos de necesidad, la sensación de pertenencia. Negarlo sería injusto y, además, poco útil para explicar por qué tantas personas encuentran ahí un lugar. Pero nuestra experiencia nos enseña otra cara igualmente real: <strong>historias de aislamiento social cuando alguien se aleja, conflictos familiares que se enquistan, culpas difíciles de nombrar, dudas que no encuentran espacio seguro y obstáculos para pedir ayuda</strong>. No hablamos desde la teoría: nos escriben, nos llaman, nos buscan. Y cuando trasladamos esas vivencias a la esfera pública no lo hacemos para \"vencer\" a nadie, sino para <strong>visibilizar</strong> y <strong>prevenir</strong>.",
    },
    { tipo: "seccion", titulo: "La réplica de Samuel: reencuadrar el debate en derechos" },
    {
      tipo: "parrafo",
      texto:
        'La aportación central de Samuel en su columna es recordar algo obvio y, sin embargo, a veces olvidado: <strong>proteger la fe</strong> no exige <strong>silenciar</strong> las críticas a prácticas organizativas. Una sociedad democrática sostiene a la vez la libertad de culto y la libertad de expresión; por eso, <strong>relatar experiencias</strong> —de forma respetuosa y con vocación de contraste— <strong>no es prejuzgar</strong>: es <strong>informar</strong>. Desde nuestro lugar, ese matiz importa porque muchas personas que nos contactan confiesan que tardaron años en poner nombre a lo que vivían, no por falta de palabras, sino <strong>por miedo a ser tildadas de "prejuiciosas" o de "enemigas" del grupo</strong>.',
    },
    {
      tipo: "parrafo",
      texto:
        "<strong>Nombrar</strong> las cosas por su nombre, abre puertas a la conversación familiar, a la ayuda profesional, a la revisión interna cuando toca.",
    },
    { tipo: "seccion", titulo: "En qué discrepamos del enfoque de Falcó" },
    {
      tipo: "parrafo",
      texto:
        'Apreciamos que Falcó reivindique el "impacto social" y la cooperación dentro de la comunidad; es una parte de la realidad que merece ser contada. Nuestra discrepancia no es con ese reconocimiento, sino con el <strong>marco</strong> que, al oponer "prejuicio" y "crítica", termina desautorizando de partida <strong>relatos incómodos</strong>. Cuando el énfasis se coloca en evitar estigmas sin equilibrarlo con las <strong>consecuencias</strong> de ciertas normas internas, el resultado práctico es que <strong>las voces vulnerables retroceden</strong>. Si una madre teme pedir ayuda porque siente que su testimonio va a ser leído como "prejuicioso", la conversación pública habrá fallado en su misión: <strong>dar espacio a quien no lo tiene</strong>.',
    },
    {
      tipo: "parrafo",
      texto:
        'Nosotros <strong>no atacamos la fe</strong> ni juzgamos conciencias. Lo repetimos con claridad porque es parte de nuestra identidad: <strong>la fe se protege</strong>. Lo que pedimos que se examine —con serenidad, con datos y sin caricaturas— son <strong>prácticas y políticas internas</strong> cuando impactan en derechos, salud mental o vínculos familiares, especialmente en menores o personas dependientes. Esta distinción evita una <strong>confusión dañina: sugerir que criticar procedimientos es equivalente a negar la espiritualidad de miles de personas. No lo es</strong>.',
    },
    {
      tipo: "parrafo",
      texto:
        "De hecho, muchas de las voces que nos escriben desean mantener convicciones religiosas sin sufrir determinadas consecuencias sociales por <strong>dudar</strong>, <strong>disentir</strong> o <strong>salir</strong>.",
    },
    { tipo: "seccion", titulo: "Qué esperamos del periodismo y por qué nos importa" },
    {
      tipo: "parrafo",
      texto:
        "Como asociación implicada, no somos neutrales; pero eso sí, aspiramos a ser justos. Por eso pedimos a los medios cinco cosas que creemos razonables:",
    },
    {
      tipo: "lista",
      etiqueta: "Cinco peticiones a los medios",
      items: [
        "Equilibrio real entre el respeto a la fe y el derecho a contar experiencias, sin etiquetas que silencien antes de escuchar.",
        "Hechos y verificación: los testimonios no son una sentencia, son un punto de partida que debe contrastarse con documentación y contexto.",
        "Distinciones claras en el lenguaje: fe personal, normas internas, decisiones públicas; cada plano exige un tratamiento distinto.",
        "Derecho de réplica y seguimiento: si hay respuesta institucional, que se recoja; si surgen nuevos datos, que se actualice.",
        "Precisión y cuidado: reconocer el tejido social y las lesiones invisibles no es una contradicción, es una obligación informativa.",
      ],
    },
  ],
  fuentes: [
    {
      etiqueta: "Réplica de Samuel Ferrando · La Voz de Asturias (05/11)",
      href: "https://www.lavozdeasturias.es/noticia/opinion/2025/11/05/libertad-expresion-culto-apuntes-extestigo-jehova/00031762336867409454319.htm",
    },
    {
      etiqueta: "Columna de Fini Falcó · La Voz de Asturias (22/10)",
      href: "https://www.lavozdeasturias.es/noticia/opinion/2025/10/22/alla-prejuicio-impacto-social-testigos-jehova/00031761125189212231412.htm",
    },
  ],
};

export default noticia;
