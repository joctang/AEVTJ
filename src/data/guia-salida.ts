// Contenido extraído literalmente del HTML de Elementor en
// src/content/pages/guia-para-salir-de-los-testigos-de-jehova.json.
// Solo se han limpiado &nbsp;, <br> sueltos, tabulaciones y saltos de línea
// intermedios; lo único redactado nuevo son los `resumen` y los títulos de paso.

export interface GuiaIntro {
  kicker: string;
  titulo: string;
  entradilla: string;
  heroImage: { src: string; alt: string; width: number; height: number };
  minutosLectura: number;
  actualizado: string;
}

export interface GuiaCapitulo {
  n: number;
  id: string;
  titulo: string;
  resumen: string;
  parrafos: string[];
  imagen: { src: string; alt: string; width: number; height: number };
  variante: "lima" | "salvia" | "arena";
}

export interface GuiaPaso {
  n: number;
  titulo: string;
  parrafos: string[];
}

export interface GuiaLibro {
  titulo: string;
  autor: string;
  anio: number;
  portada: string;
  width: number;
  height: number;
}

export interface GuiaCierre {
  quedarse: { titulo: string; parrafos: string[] };
  conclusion: { titulo: string; parrafos: string[] };
}

export interface GuiaRecurso {
  titulo: string;
  descripcion: string;
  url?: string;
}

export const intro: GuiaIntro = {
  kicker: "Guía · Acompañamiento",
  titulo: "Guía para salir de los Testigos de Jehová",
  entradilla:
    "Si empiezas a preguntarte si las enseñanzas y las prácticas de los Testigos de Jehová son realmente lo que necesitas en tu vida, esta guía explica qué implica dejar la organización y dónde encontrar apoyo en cada paso.",
  heroImage: {
    src: "/uploads/2025/10/val-vesa-02dGWFjSZPo-unsplash-1.jpg",
    alt: "Puente en penumbra con tráfico avanzando hacia la niebla, en tonos rojizos",
    width: 1600,
    height: 900,
  },
  minutosLectura: 6,
  actualizado: "diciembre de 2023",
};

export const capitulos: GuiaCapitulo[] = [
  {
    n: 1,
    id: "el-comienzo",
    titulo: "El comienzo",
    resumen: "Por qué llegas hasta aquí y por qué entender el proceso marca la diferencia.",
    parrafos: [
      "Tal vez has llegado a este texto porque comienzas a preguntarte si las enseñanzas y las prácticas de los Testigos de Jehová son realmente lo que necesitas o deseas en tu vida. A lo mejor llevas tiempo sintiendo que algo no encaja, o que tus dudas cada día crecen un poco más. O simplemente has notado que tu visión del mundo ha cambiado y ya no se alinea con la de la organización. Sean cuales sean tus motivos, entender lo que implica dejar este grupo y cómo encontrar ayuda puede marcar la diferencia en tu experiencia.",
    ],
    imagen: {
      src: "/uploads/2025/10/estudio-biblico.webp",
      alt: "Ilustración de dos personas conversando con una Biblia abierta sobre la mesa",
      width: 500,
      height: 500,
    },
    variante: "lima",
  },
  {
    n: 2,
    id: "love-bombing",
    titulo: "Love bombing",
    resumen: "El estudio bíblico que se convierte en una cascada de afecto y pertenencia.",
    parrafos: [
      "El inicio casi siempre se presenta como un “estudio bíblico”, una actividad que promete enseñarte las verdades de la Biblia. Sin embargo, en muchos casos, se centra en estudiar publicaciones de la Watchtower, más que en realizar un análisis profundo e imparcial de las Escrituras. Te invitan a reuniones, te rodean de gestos amables y de sonrisas que generan una sensación muy cálida de pertenencia. A este fenómeno suele llamársele “love bombing” o “bombardeo de amor”, y funciona tan bien que, al poco tiempo, sientes que has encontrado a una nueva familia y a verdaderos amigos.",
    ],
    imagen: {
      src: "/uploads/2025/10/LOVE-BOMBING-1.webp",
      alt: "Ilustración sobre el love bombing: gestos de afecto y bienvenida de un grupo",
      width: 500,
      height: 500,
    },
    variante: "salvia",
  },
  {
    n: 3,
    id: "la-vida-dentro",
    titulo: "La vida dentro: la sensación de “familia espiritual”",
    resumen: "Lazos intensos, técnicas de influencia y un círculo social del que cuesta salir.",
    parrafos: [
      "Mientras vives como Testigo de Jehová, tu forma de ver el mundo y de expresarte puede transformarse. No siempre se trata de un cambio brusco, sino de una serie de pequeños ajustes en tu forma de pensar y actuar. La organización utiliza diversas técnicas de influencia psicológica que refuerzan la confianza en su doctrina y potencian el sentimiento de grupo exclusivo y privilegiado.",
      "A lo largo de tu permanencia, estableces lazos intensos con otros miembros. Estas amistades se vuelven cruciales porque son, en muchos casos, el único círculo social con el que te relacionas profundamente. Para quienes nacieron y crecieron en la organización, esto se acentúa aún más, pues no han conocido otra comunidad más allá de la congregación.",
    ],
    imagen: {
      src: "/uploads/2025/10/PREDICACION-1.webp",
      alt: "Ilustración de la predicación puerta a puerta con publicaciones de la organización",
      width: 500,
      height: 500,
    },
    variante: "arena",
  },
  {
    n: 4,
    id: "el-bautismo",
    titulo: "El bautismo",
    resumen: "Un compromiso presentado como honor que hace la salida mucho más difícil.",
    parrafos: [
      "Conforme avanza el tiempo, adoptas poco a poco sus normas de conducta y aprendes que ciertas actividades sociales o incluso amistades fuera del grupo se consideran inapropiadas. Cuando ya estás totalmente inmerso en esas enseñanzas y crees firmemente que has encontrado la “verdad”, te plantean la dedicación y el bautismo como un paso de fe, un honor para servir a Dios. Lo que no se menciona abiertamente es que, una vez bautizado, tu vida y tus relaciones cambiarán de forma irreversible. Si en algún momento decides marcharte, la salida será mucho más complicada que la entrada.",
    ],
    imagen: {
      src: "/uploads/2025/10/bautismo.webp",
      alt: "Ilustración de un bautismo",
      width: 500,
      height: 500,
    },
    variante: "lima",
  },
  {
    n: 5,
    id: "empezar-a-cuestionar",
    titulo: "Empezar a cuestionar: cuando surgen las dudas",
    resumen: "Contradicciones, denuncias y el choque entre el discurso y la realidad.",
    parrafos: [
      "Los primeros indicios de que algo no encaja pueden llegar en el momento más inesperado: tal vez escuchas un discurso con el que no concuerdas, lees <strong>declaraciones contradictorias en las publicaciones oficiales</strong> o descubres casos de abuso y encubrimientos que sacuden tus convicciones.",
      "También puede ser que veas cómo, con frecuencia, <strong>las normas se ajustan o cambian según las necesidades de la dirigencia</strong>, o cómo piden donaciones para grandes proyectos a largo plazo mientras predican que el “fin del mundo” está muy cerca.",
      "En algunos países, han salido a la luz denuncias legales y declaraciones bajo juramento que no coinciden con la imagen impecable que la organización desea proyectar. Todo ello crea <strong>un choque entre lo que siempre has escuchado en los discursos y la realidad que comienzas a observar</strong>.",
      "Esto puede despertar en ti preguntas profundas sobre la coherencia de la doctrina y sobre si de verdad estás en “la única organización que Dios aprueba”.",
    ],
    imagen: {
      src: "/uploads/2025/10/pnl.webp",
      alt: "Ilustración sobre las técnicas de influencia psicológica",
      width: 500,
      height: 500,
    },
    variante: "salvia",
  },
  {
    n: 6,
    id: "el-impacto-emocional",
    titulo: "El impacto emocional de plantearse la salida",
    resumen: "Ostracismo, miedo a perder los lazos y cómo cuidar la salud mental.",
    parrafos: [
      "Tomar la decisión de salir no es un proceso sencillo. A menudo experimentas un <strong>conflicto interno</strong>: por un lado, te sientes aliviado al pensar en liberarte de normas y rutinas que ya no compartes; por otro, <strong>te aterra perder los lazos</strong> con amigos y familiares que siguen dentro.",
      "En esta organización, la práctica habitual cuando alguien se aleja o es expulsado conlleva el ostracismo: los miembros tienen prohibido dirigirte la palabra o mantener contacto cercano contigo. Para una persona que ha invertido años de su vida ahí, esto puede ser devastador y desencadenar sentimientos de ansiedad, soledad, vergüenza o culpa.",
      "Algunos testigos que deciden irse y tienen familiares muy apegados a la congregación se enfrentan al miedo de ser rechazados o incluso de que sus seres queridos los corten de su vida por completo. Este escenario puede provocar <strong>episodios depresivos</strong> y, en los casos más graves, llevar a <strong>pensamientos suicidas</strong>. No es un asunto menor: la salud mental está en juego, por lo que es fundamental que busques o cuentes con redes de apoyo.",
    ],
    imagen: {
      src: "/uploads/2025/10/salir-es-dificil.webp",
      alt: "Ilustración de una persona ante una puerta de salida",
      width: 500,
      height: 500,
    },
    variante: "arena",
  },
];

// Frases literales del contenido, recortadas para las pull-quotes.
export const citas = {
  trasCapitulo2:
    "al poco tiempo, sientes que has encontrado a una nueva familia y a verdaderos amigos",
  trasCapitulo5:
    "el choque entre lo que siempre has escuchado en los discursos y la realidad que comienzas a observar",
};

export const pasos: GuiaPaso[] = [
  {
    n: 1,
    titulo: "Recupera el contacto con tus seres queridos",
    parrafos: [
      "<strong>Recupera el contacto con tus seres queridos</strong> fuera de la organización. Si te has distanciado de familiares o amigos que no son Testigos, <strong>retoma esos vínculos</strong> en la medida de lo posible.",
      "Explícales la situación y las razones de tu alejamiento; a menudo, <strong>estas personas están dispuestas a apoyarte</strong> y a recibirte con los brazos abiertos.",
    ],
  },
  {
    n: 2,
    titulo: "Busca ayuda profesional",
    parrafos: [
      "Un psicólogo o psiquiatra especializado en salidas de grupos de alta demanda o que entienda de coerción psicológica puede orientarte mientras atraviesas el proceso.",
      "La terapia es muy útil para manejar la culpa, la necesidad y el dolor que implica perder a personas queridas. Si te citan a un comité judicial o te llaman, no tienes por qué ir ni coger la llamada.",
      "<strong>En caso de acoso o abuso no dudes en acudir a la policía o pedir ayuda legal</strong>. Tampoco tienes la obligación legal de hacer una carta de renuncia si no quieres.",
    ],
  },
  {
    n: 3,
    titulo: "Infórmate",
    parrafos: [
      "Revisa tu perspectiva.",
      "Se pueden encontrar fácilmente en PDF buscando en Google.",
      "Estos libros y recursos son testimonios y análisis de gran ayuda para <strong>entender las estructuras internas y los mecanismos de control en organizaciones religiosas de alta demanda</strong>.",
      "Descubrirás que muchas de las situaciones que te han generado dudas o temor las han vivido también otras personas.",
    ],
  },
  {
    n: 4,
    titulo: "Mantén la mente abierta y el espíritu crítico",
    parrafos: [
      "Mantén la <strong>mente abierta y el espíritu crítico</strong>.",
      "<strong>Date permiso para indagar</strong> en temas bíblicos con expertos independientes o estudiosos de arqueología y lenguas antiguas. Explora textos científicos y estadísticos actuales.",
      "Verás que un mundo de conocimiento está a tu alcance, libre de los filtros que la organización impone.",
    ],
  },
  {
    n: 5,
    titulo: "Crea o refuerza nuevas redes de apoyo",
    parrafos: [
      "<strong>Crea o refuerza nuevas redes de apoyo</strong>",
      "<ul><li>Asociaciones en tu barrio sobre diferentes actividades</li><li>Grupos de ex-Testigos de Jehová en redes sociales o foros.</li><li>Canales de YouTube donde se comparten experiencias de salida.</li><li>Encuentros presenciales de exmiembros en tu región.</li></ul>",
      "<strong>Conocer a otras personas que han pasado por lo mismo</strong> puede darte la fuerza que necesitas para seguir adelante. De todas formas, también es importante aprender a tener contacto con personas que no sean ex-testigos.",
    ],
  },
  {
    n: 6,
    titulo: "Si decides quedarte por motivos personales",
    parrafos: [
      "Hay personas que, aun teniendo dudas, eligen no romper sus lazos con la congregación de forma oficial para evitar el doloroso proceso de expulsión y el ostracismo que esto conlleva.",
      "Si te encuentras en esta circunstancia, <strong>procura no expresar tus nuevas ideas ni comentar tus hallazgos con quienes puedan denunciarte</strong>. La realidad es que cada situación es diferente, y tu decisión debe basarse en tu bienestar y tus circunstancias familiares, económicas y emocionales.",
    ],
  },
  {
    n: 7,
    titulo: "Conclusión: no estás solo",
    parrafos: [
      "Salir de la organización de los Testigos de Jehová <strong>es un tránsito que puede resultar duro</strong>, pero no tienes por qué llevarlo a cabo en soledad. Existe una comunidad de exmiembros y profesionales que te brindarán apoyo y comprensión en cada paso. Aunque el proceso sea difícil, es posible reconstruir tu vida con libertad, paz y <strong>la satisfacción de ser fiel a ti mismo</strong>.",
      "Si en algún momento sientes que la desesperación te supera, busca ayuda inmediata. Acude a un profesional de la salud mental o utiliza líneas de atención en crisis en tu país. Recuerda: <strong>tu vida y tu bienestar son más importantes que cualquier riesgo o miedo al rechazo</strong>.",
      "<strong>¡No estás solo/a!</strong>",
      "Cada historia de salida es un testimonio de valentía y un acto de confianza en uno mismo. <strong>Te mereces ser escuchado, apoyado y comprendido</strong>. Mantén la esperanza: hay futuro más allá de la organización y, con el tiempo, descubrirás que este paso te ayudará a descubrir quién eres en realidad.",
    ],
  },
];

export const libros: GuiaLibro[] = [
  {
    titulo: "Combatiendo el control mental de las sectas",
    autor: "Steve Hassan",
    anio: 1988,
    portada: "/uploads/2025/10/Combatiendo-el-control-mental-de-las-sectas.webp",
    width: 500,
    height: 729,
  },
  {
    titulo: "Crisis de conciencia",
    autor: "Raymond Franz",
    anio: 1983,
    portada: "/uploads/2025/10/Crisis-de-conciencia.webp",
    width: 500,
    height: 745,
  },
];

export const cierre: GuiaCierre = {
  quedarse: {
    titulo: "Si decides quedarte por motivos personales",
    parrafos: pasos[5].parrafos,
  },
  conclusion: {
    titulo: "Conclusión: no estás solo",
    parrafos: pasos[6].parrafos,
  },
};

// Texto de crisis ya presente en el contenido, reutilizado en el callout de ayuda.
export const avisoCrisis =
  "Si en algún momento sientes que la desesperación te supera, busca ayuda inmediata. Acude a un profesional de la salud mental o utiliza líneas de atención en crisis en tu país.";

export const recursos: GuiaRecurso[] = [
  {
    titulo: "Tú puedes salir de los Testigos de Jehová",
    descripcion: "Guía y testimonios para acompañar el proceso de salida.",
  },
  {
    titulo: "Territorio Salida",
    descripcion: "Cuenta de Instagram con contenido sobre el proceso de salida.",
  },
  {
    titulo: "La verdad sobre la verdad",
    descripcion: "Canal de YouTube con experiencias y análisis sobre la organización.",
  },
  {
    titulo: "Verdadtj.com",
    descripcion: "Portal con información y recursos para quienes plantean salir.",
    url: "https://verdadtj.com",
  },
];
