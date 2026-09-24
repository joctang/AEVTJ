import type { Noticia } from "./tipos";

/**
 * Noticia nueva (no migrada de WordPress), adaptada del comunicado de prensa de la
 * AEVTJ del 18 de septiembre de 2026 (PDF en /uploads/2026/09/).
 *
 * Notas de adaptación:
 * - El titular del comunicado (tres líneas) se acortó; el resto de su contenido pasa
 *   a la entradilla y al cuerpo.
 * - Se conservan los rótulos originales ("Una disculpa pública imprescindible",
 *   "Un llamamiento a la reflexión y a la autonomía personal", "Acciones legales y
 *   llamamiento al público") y se añaden dos de estructura ("Qué cambia", "Un avance
 *   insuficiente") para partir el bloque inicial.
 * - Lo que el anuncio convierte en cuestión de conciencia se extrajo a una lista.
 * - El correo del PDF tiene una errata ("jehva"); se usa el correcto.
 * - Sin pieza audiovisual ni fuentes externas: el comunicado no enlaza ninguna.
 */
export const noticia: Noticia = {
  slug: "la-aevtj-reclama-libertad-medica-plena-tras-el-cambio-sobre-transfusiones",
  titulo:
    "La AEVTJ reclama libertad médica plena tras el cambio sobre transfusiones",
  fecha: "2026-09-18T10:00:00",
  autoria: "AEVTJ · Nota de prensa",
  portada: {
    src: "/uploads/2026/09/comunicado-transfusiones-aevtj.jpg",
    alt: "Ilustración de gotas concéntricas en líneas verde lima sobre fondo azul marino",
    width: 1600,
    height: 900,
  },
  entradilla:
    "Los Testigos de Jehová dejan a la conciencia de cada miembro aceptar componentes sanguíneos. La AEVTJ valora el cambio, pero advierte de que la sangre completa sigue siendo una falta grave, exige una disculpa pública y estudiará emprender acciones legales.",
  citaDestacada: {
    texto:
      "La decisión final debe corresponder siempre al paciente, debidamente informado y asesorado por profesionales sanitarios.",
    autor: "AEVTJ",
    cargo: "Comunicado de prensa",
  },
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "<strong>España, 18 de septiembre de 2026.</strong> La <strong>Asociación Española de Víctimas de los Testigos de Jehová (AEVTJ)</strong> se pronuncia ante el anuncio realizado este viernes por el <strong>Cuerpo Gobernante</strong> de los Testigos de Jehová sobre las transfusiones de sangre.",
    },
    { tipo: "seccion", titulo: "Qué cambia" },
    {
      tipo: "lista",
      etiqueta: "Pasa a ser una cuestión de conciencia individual",
      items: [
        "Aceptar <strong>glóbulos rojos, glóbulos blancos, plasma o plaquetas</strong> procedentes de otra persona.",
        "<strong>Donar sangre</strong> con el propósito expreso de que sus componentes o fracciones sean utilizados por otras personas.",
      ],
    },
    {
      tipo: "parrafo",
      texto:
        "Desde nuestra asociación aplaudimos cualquier cambio en sus normas que otorgue a los miembros una mayor libertad para decidir qué tratamiento médico aceptar. Consideramos positivo que decisiones capaces de afectar de forma directa a la salud y a la vida se reconozcan como personales y puedan adoptarse atendiendo a la información clínica, al <strong>consentimiento informado</strong> y a la propia conciencia.",
    },
    { tipo: "seccion", titulo: "Un avance insuficiente" },
    {
      tipo: "parrafo",
      texto:
        "Sin embargo, este cambio sigue sin garantizar la libertad de los adeptos en el tratamiento médico: aunque ahora pueden aceptar ciertos componentes de la sangre sin repercusiones por parte de la organización, <strong>aceptar una transfusión de sangre completa sigue suponiendo una falta grave</strong>, lo que podría acarrear la desasociación pública y la pérdida de su círculo social.",
    },
    {
      tipo: "parrafo",
      texto:
        "Esperamos que este proceso de flexibilización continúe avanzando hasta reconocer a todos sus miembros una <strong>libertad absoluta para elegir cualquier tratamiento médico</strong>, incluida la transfusión de sangre completa, sin temor a consecuencias religiosas, familiares o comunitarias.",
    },
    {
      tipo: "parrafo",
      texto:
        "Este importante cambio doctrinal e institucional no se produce de manera aislada. Se debe en gran parte a la presión constante ejercida por la AEVTJ, la labor de investigación y difusión de los medios de comunicación, la movilización de la opinión pública y las recientes resoluciones judiciales, como la sentencia de la Audiencia Provincial de Madrid, que han puesto el foco en las consecuencias sobre los derechos fundamentales de los fieles. Tanto los medios de comunicación como nosotros hemos recibido constantes ataques con el fin de silenciarnos.",
    },
    { tipo: "seccion", titulo: "Una disculpa pública imprescindible" },
    {
      tipo: "parrafo",
      texto:
        "Como exmiembros —algunos de nosotros perjudicados en su día por esta doctrina— exigimos al Cuerpo Gobernante y a la cúpula dirigente de los Testigos de Jehová en España <strong>una disculpa pública, clara y sin ambigüedades</strong>. Deben pedir perdón a todas las personas que perdieron la vida o sufrieron daños graves tras rechazar componentes sanguíneos que, conforme a las instrucciones vigentes entonces, no podían aceptar y que desde hoy pasan a considerarse una decisión de conciencia personal.",
    },
    {
      tipo: "cita",
      texto:
        "Un cambio de esta relevancia no puede limitarse a una actualización doctrinal sin memoria ni rendición de cuentas.",
      autor: "AEVTJ",
    },
    {
      tipo: "lista",
      etiqueta: "La organización debe explicar públicamente",
      items: [
        "Por qué conductas antes prohibidas son ahora admisibles.",
        "Cómo comunicará el cambio a todas las congregaciones.",
        "Qué medidas adoptará para reconocer a quienes padecieron consecuencias irreversibles por obedecer las normas anteriores.",
      ],
    },
    { tipo: "seccion", titulo: "Un llamamiento a la reflexión y a la autonomía personal" },
    {
      tipo: "parrafo",
      texto:
        "Invitamos a todos los Testigos de Jehová en activo a reflexionar serenamente sobre lo que supone para su salud y la de sus seres queridos <strong>supeditar decisiones médicas potencialmente vitales a interpretaciones doctrinales que pueden modificarse con el paso del tiempo</strong>. Lo que ayer podía conllevar consecuencias religiosas hoy se presenta, en relación con los cuatro componentes principales de la sangre, como una decisión entre cada creyente y su Dios.",
    },
    {
      tipo: "parrafo",
      texto:
        "Tomamos nota de la afirmación de su portavoz internacional de que las congregaciones no intervendrán en estas decisiones personales y respetarán y apoyarán a cada creyente. Pedimos que este compromiso se traduzca en <strong>garantías claras y verificables</strong> de que nadie será señalado, sancionado, aislado ni presionado por aceptar componentes sanguíneos, por donar sangre para los fines ahora permitidos o por adoptar cualquier decisión médica amparada por su conciencia.",
    },
    {
      tipo: "parrafo",
      texto:
        "La AEVTJ seguirá defendiendo que <strong>la protección de la vida, la dignidad y la autonomía del paciente deben prevalecer sobre cualquier norma doctrinal</strong>. Reiteramos nuestra disposición a colaborar con medios de comunicación, profesionales sanitarios, instituciones públicas y entidades de defensa de los derechos humanos para informar con rigor y proteger la libertad de decisión de todas las personas afectadas.",
    },
    { tipo: "seccion", titulo: "Acciones legales y llamamiento al público" },
    {
      tipo: "parrafo",
      texto:
        "La AEVTJ anuncia que <strong>estudiará y, cuando proceda, promoverá las acciones legales necesarias</strong> para proteger los derechos de las personas que hayan sufrido presiones, represalias o perjuicios vinculados a decisiones sanitarias adoptadas en el ámbito de esta organización, siempre con respeto a la presunción de inocencia, a la libertad religiosa y a las garantías procesales.",
    },
    {
      tipo: "parrafo",
      texto:
        "Esta iniciativa se enmarca en la defensa de la autonomía del paciente, el consentimiento informado y la dignidad personal, y se desarrollará atendiendo también a los criterios fijados por la Sentencia de la Audiencia Provincial de Madrid 51/2025, de 10 de febrero.",
    },
    {
      tipo: "parrafo",
      texto:
        "La AEVTJ hace un llamamiento a las personas afectadas, a sus familiares y a quienes dispongan de información relevante para que se pongan en contacto con la asociación <strong>de forma confidencial</strong> en <a href=\"mailto:info@victimasdetestigosdejehova.org\">info@victimasdetestigosdejehova.org</a>. Asimismo, solicita a las instituciones, a los profesionales sanitarios, a los medios de comunicación y a la ciudadanía que contribuyan a un debate riguroso, respetuoso y centrado en la protección efectiva de la vida, la salud y la libre decisión de cada paciente.",
    },
  ],
  contexto: [
    {
      valor: "4",
      etiqueta: "Componentes sanguíneos",
      detalle: "Glóbulos rojos, glóbulos blancos, plasma y plaquetas pasan a ser una cuestión de conciencia individual.",
    },
    {
      valor: "51/2025",
      etiqueta: "Sentencia de la AP de Madrid",
      detalle: "De 10 de febrero. Sus criterios guiarán las posibles acciones legales.",
    },
  ],
  conceptos: [
    {
      termino: "Cuestión de conciencia",
      definicion:
        "Decisión que la organización deja en manos de cada miembro, sin repercusiones por su parte.",
    },
    {
      termino: "Desasociación pública",
      definicion:
        "Consecuencia que puede acarrear aceptar una transfusión de sangre completa, con la pérdida del círculo social.",
    },
  ],
  recursos: [
    {
      titulo: "Tus derechos sanitarios",
      texto:
        "Guía para proteger tus decisiones médicas cuando la familia o la organización interfieren.",
      href: "/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar/",
      etiqueta: "Leer la guía",
    },
    {
      titulo: "Contacto confidencial",
      texto:
        "Si has sufrido presiones, represalias o perjuicios por una decisión sanitaria, escríbenos de forma confidencial.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    {
      etiqueta: "Comunicado de prensa original (PDF)",
      href: "/uploads/2026/09/comunicado-prensa-aevtj-transfusiones-2026-09-18.pdf",
    },
  ],
};

export default noticia;
