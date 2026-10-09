// Página «Carta de renuncia a los Testigos de Jehová».
// Texto procedente de 06_Contenido/carta-de-renuncia-testigos-de-jehova/BORRADOR.md (v2, 2026-10-09).
// Fuentes y decisiones en la INVESTIGACION.md de esa carpeta. Los dos modelos de
// carta están pendientes de revisión jurídica.
// Los campos marcados como HTML se pintan con set:html (solo <strong>, <em> y enlaces internos).

import type { ModeloTexto } from "./derecho-supresion";

export const intro = {
  kicker: "Salir de los Testigos · Carta de renuncia",
  titulo: "Carta de renuncia a los Testigos de Jehová: ¿hace falta?",
  h1: "Carta de renuncia a los Testigos de Jehová: ¿hace falta?",
  // HTML
  entradilla:
    "<strong>No. No necesitas escribir una carta para dejar de ser Testigo de Jehová.</strong> La ley española reconoce tu derecho a abandonar una religión sin que nadie te lo impida, y la propia organización acepta que una persona deje de participar sin presentar ninguna renuncia.",
  // Foto de Towfiqu barbhuiya en Unsplash (Licencia Unsplash), compartida con /derecho-de-supresion/.
  // Provisional hasta tener ilustración propia de la serie geométrica.
  heroImage: {
    src: "/uploads/2026/10/pluma-y-papeles-derecho-de-supresion.webp",
    alt: "Pluma estilográfica sobre papeles y sobres en una mesa",
  },
};

export const postura = {
  titulo: "La postura de la AEVTJ",
  texto:
    "Desde la AEVTJ no recomendamos enviarla. Aun así, sabemos que a algunas personas les sirve, sobre todo si quieren dejar de constar como miembros o que se borren sus datos. Por eso, al final de esta página tienes dos modelos.",
};

export interface Seccion {
  n: number;
  id: string;
  titulo: string;
  corto: string; // etiqueta del índice lateral
  // Ilustración de la serie geométrica (docs-ilustraciones/GUIA-ILUSTRACIONES.md):
  // nombre base en public/uploads/2026/10/ con variantes -900 y -1536.
  // pos: «portada» (panorámica sobre la tarjeta), «flotante» (sección abierta con bloque
  // de color detrás) o «arco» (al lado del texto). Cada ilustración usa una distinta.
  imagen?: { nombre: string; alt: string; pos: "portada" | "flotante" | "arco" };
  parrafos?: string[]; // HTML
  lista?: string[]; // HTML
  listaNumerada?: boolean;
  vias?: { titulo: string; texto: string }[];
  cierre?: string[]; // HTML
}

export const secciones: Seccion[] = [
  {
    n: 1,
    id: "nadie-tiene-que-darte-permiso",
    corto: "No necesitas permiso",
    titulo: "Nadie tiene que darte permiso",
    parrafos: [
      "La Ley Orgánica de Libertad Religiosa reconoce el derecho de toda persona a «cambiar de confesión o abandonar la que tenía», sin coacción (artículo 2.1.a). La Constitución añade que nadie puede ser obligado a declarar sobre sus creencias (artículo 16).",
      "La organización dice lo mismo a su manera. Según jw.org, se puede renunciar de palabra, por escrito o con una conducta que muestre que ya no se quiere pertenecer, y los ancianos no pueden obligar a nadie a seguir siendo Testigo.",
    ],
  },
  {
    n: 2,
    id: "tres-situaciones",
    corto: "Tres situaciones",
    titulo: "Tres situaciones distintas",
    vias: [
      {
        titulo: "Dejar de asistir",
        texto:
          "No envías nada. La organización no lo considera una renuncia: sigues constando como Testigo, aunque inactivo. Pueden visitarte o intentar que vuelvas.",
      },
      {
        titulo: "Renunciar o desasociarte",
        texto: "Comunicas formalmente que ya no quieres ser Testigo. Es el caso de la carta.",
      },
      {
        titulo: "Ser sacado de la congregación",
        texto:
          "Antes se decía «expulsado». Lo deciden los ancianos en su procedimiento interno. No depende de una carta tuya.",
      },
    ],
    cierre: [
      'Si estás valorando cómo salir, te puede ayudar la <a href="/guia-para-salir-de-los-testigos-de-jehova/">guía para salir de los Testigos de Jehová</a>.',
    ],
  },
  {
    n: 3,
    id: "que-ocurre-si-la-envias",
    corto: "Qué ocurre si la envías",
    // Compartida con /testigos-de-jehova/ (sección «Dejar de ser Testigo»).
    imagen: {
      nombre: "tdj-silla-vacia-hilo-cortado",
      alt: "Ilustración de una familia sentada a un extremo de una mesa larga y una silla vacía al otro, con un hilo verde cortado entre ambos.",
      pos: "portada",
    },
    titulo: "Qué ocurre si envías la carta",
    parrafos: ["Las publicaciones de la organización describen lo que sucede tras una renuncia formal:"],
    listaNumerada: true,
    lista: [
      "<strong>Se anuncia en la congregación.</strong> El libro <em>Organizados para hacer la voluntad de Jehová</em> indica que se hace un breve anuncio: «[Nombre] ya no es testigo de Jehová». No se dice si la persona renunció o fue sacada.",
      "<strong>Se te trata como a una persona expulsada.</strong> El mismo libro equipara la desasociación con la expulsión. Según sus normas, los miembros dejan de relacionarse socialmente contigo.",
      "<strong>La familia que vive contigo mantiene la convivencia,</strong> según jw.org.",
    ],
    cierre: [
      "Cada familia y cada congregación lo viven de forma distinta. Hay quien mantiene el contacto con los suyos y hay quien lo pierde. Pero una vez anunciada, la renuncia tiene las mismas consecuencias sociales que una expulsión.",
    ],
  },
  {
    n: 4,
    id: "por-que-la-desaconsejamos",
    corto: "Por qué la desaconsejamos",
    imagen: {
      nombre: "tdj-renuncia-arco-hilo-libre",
      alt: "Ilustración de una persona que sale caminando de un arco hacia un espacio abierto, con un hilo verde en la mano que se extiende tras ella por el suelo.",
      pos: "flotante",
    },
    titulo: "Por qué la AEVTJ desaconseja la carta",
    parrafos: [
      "Enviar una carta de renuncia es, en la práctica, pedir a la organización que registre tu salida y la anuncie. Es seguir dándole un papel en tu vida: aceptar que su sistema disciplinario interno decida cómo te ven y te tratan tus familiares y amistades.",
      "<strong>Tu libertad para irte no depende de ellos.</strong> No necesitas su aprobación, ni una reunión con los ancianos, ni un anuncio en el Salón del Reino para dejar de creer o de participar.",
      "Además, la carta suele adelantar el aislamiento social. Muchas personas prefieren alejarse poco a poco y conservar sus relaciones mientras puedan.",
    ],
  },
  {
    n: 5,
    id: "cuando-puede-ayudarte",
    corto: "Cuándo puede ayudarte",
    imagen: {
      nombre: "tdj-renuncia-sobre-hilo",
      alt: "Ilustración de un sobre cerrado sobre una mesa redonda, rodeado por un hilo verde cuyo extremo queda suelto.",
      pos: "arco",
    },
    titulo: "Cuándo la carta sí puede ayudarte",
    parrafos: ["Aun así, la decisión es tuya, y hay situaciones en las que puede tener sentido:"],
    lista: [
      "<strong>Quieres dejar de constar como miembro.</strong> Mientras no renuncies, la organización te sigue considerando Testigo, aunque lleves años sin ir.",
      "<strong>Quieres que borren tus datos.</strong> La organización ha llegado a denegar el borrado de datos alegando que la persona seguía siendo miembro. Tras la salida, el Tribunal Supremo limitó lo que puede conservar a tu nombre, la fecha de bautismo y la fecha de salida, y solo por si algún día pides volver.",
      "<strong>Quieres que dejen de visitarte o llamarte</strong> para que vuelvas.",
      "<strong>Te importa hacerlo de forma coherente</strong> con lo que piensas, o cerrar esa etapa con un acto concreto.",
    ],
    cierre: [
      "Sobre las cifras: los recuentos públicos de la organización solo incluyen a los «publicadores», las personas que predican e informan su actividad. Si ya no participas, no apareces en esas cifras, envíes o no la carta. La carta sí cambia cómo constas en sus registros internos.",
    ],
  },
  {
    n: 6,
    id: "renuncia-y-datos",
    corto: "Renuncia y datos",
    titulo: "Renuncia y datos personales: dos cosas distintas",
    lista: [
      "La <strong>carta de renuncia</strong> comunica que dejas de pertenecer. Por sí sola no borra tus datos.",
      'El <strong>derecho de supresión</strong> es la petición legal para que eliminen tus datos personales. Se dirige al Delegado de Protección de Datos de la organización. Te lo explicamos en la <a href="/derecho-de-supresion/">guía del derecho de supresión</a>.',
    ],
    cierre: ["Si quieres las dos cosas, puedes hacerlas en un solo escrito: es el modelo 2."],
  },
];

// Texto literal redactado por la abogada de la AEVTJ (9-10-2026); no modificar sin su
// revisión. Se muestra tras la sección «Qué ocurre si envías la carta».
export const advertenciaLegal = {
  titulo: "Advertencia legal sobre anuncios y tratamiento de datos personales",
  parrafos: [
    "Conviene tener en cuenta que la baja, renuncia, desasociación o expulsión de una confesión religiosa no puede limitar los derechos reconocidos por el ordenamiento jurídico español. Los procedimientos internos de una organización religiosa no sustituyen a la ley civil ni pueden prevalecer sobre los derechos fundamentales de la persona.",
    "Además, cuando la salida de una persona se anuncia de forma que permita identificarla, ese anuncio puede implicar el tratamiento y la comunicación de datos personales especialmente protegidos, al revelar información sobre sus creencias o su pertenencia religiosa. Por eso, cualquier comunicación de este tipo debe respetar la normativa de protección de datos, así como los derechos al honor, a la intimidad y a la propia imagen.",
    "En particular, la difusión pública de la expulsión, desasociación o desvinculación, así como las prácticas de aislamiento u ostracismo vinculadas a esa comunicación, pueden ser impugnadas o denunciadas ante las autoridades competentes cuando vulneren esos derechos.",
  ],
  // Sección tras la que se coloca.
  despuesDe: "que-ocurre-si-la-envias",
};

// HTML
export const recomendaciones = [
  "<strong>Escribe poco.</strong> Basta con comunicar tu decisión. No argumentes ni debatas sobre doctrina.",
  "<strong>No pidas permiso.</strong> Es una comunicación, no una solicitud.",
  "<strong>Guarda una copia</strong> y una prueba de envío o de entrega (correo certificado, burofax, correo electrónico con acuse o entrega en mano con recibí firmado).",
  "<strong>No tienes que acudir a ninguna reunión</strong> para hablar de ella.",
  '<strong>Piensa antes en tu apoyo.</strong> Si temes perder relaciones, prepara antes a quién puedes acudir. Puedes <a href="/contacto/">contactar con nosotros</a>.',
];

export const avisoModelos = {
  titulo: "Modelos orientativos",
  texto: "No sustituyen el asesoramiento jurídico. Adáptalos a tu caso antes de enviarlos.",
};

// HTML
export const elegirModelo = [
  "<strong>Modelo 1. Solo renuncia:</strong> si solo quieres comunicar que dejas de pertenecer. Se envía a los ancianos de tu congregación.",
  "<strong>Modelo 2. Renuncia y supresión de datos:</strong> si además quieres que borren tus datos. Se envía al Delegado de Protección de Datos.",
  'Si <strong>solo</strong> quieres que borren tus datos, sin renunciar, usa la <a href="/derecho-de-supresion/">guía del derecho de supresión</a>.',
];

export const emailDpd = "DataProtectionOfficer.ES@jw.org";

export const modeloRenuncia: ModeloTexto = {
  id: "modelo-solo-renuncia",
  parrafos: [
    "[Nombre y apellidos]\n[Dirección o correo electrónico de contacto]\n[Lugar], a [fecha]",
    "Al cuerpo de ancianos de la congregación [nombre de la congregación] de los Testigos de Jehová",
    "Por medio de este escrito comunico que, por decisión libre y personal, dejo de ser testigo de Jehová y de formar parte de esa congregación a partir de la fecha de esta carta.",
    "Esta carta es una comunicación, no una solicitud. No requiere respuesta, aprobación ni reunión, y no deseo exponer ni tratar los motivos de mi decisión.",
    "Les pido que respeten esta decisión y que no se pongan en contacto conmigo para tratar este asunto.",
    "Atentamente,",
    "[Firma]\n[Nombre y apellidos]",
  ],
};

export const modeloRenunciaSupresion: ModeloTexto = {
  id: "modelo-renuncia-y-supresion",
  asunto: "Renuncia expresa a los Testigos de Jehová y ejercicio de los derechos de supresión y oposición",
  parrafos: [
    "Al Delegado de Protección de Datos:",
    "Por medio del presente escrito, manifiesto de forma expresa, libre e inequívoca mi decisión de dejar de pertenecer a los Testigos de Jehová y de no mantener ningún vínculo religioso con dicha organización.",
    "Asimismo, ejerzo mi derecho de supresión de mis datos personales, conforme al artículo 17 del Reglamento (UE) 2016/679 (RGPD), y mi derecho de oposición al tratamiento de mis datos, conforme a su artículo 21.",
    "Por tanto, solicito:",
    "1. Que se supriman todos mis datos personales que obren en poder de la organización, sus congregaciones, responsables, colaboradores o sistemas de información, salvo aquellos cuya conservación sea legalmente obligatoria.\n2. Que se deje de utilizar mi nombre, datos de contacto, domicilio, teléfono, correo electrónico, fotografías, información sobre mi situación personal o cualquier otra información que permita identificarme, para fines religiosos, administrativos, de contacto, visitas, llamadas, comunicaciones o cualquier otra actividad.\n3. Que no se me contacte por ningún medio, directamente o a través de terceras personas, con fines religiosos ni para tratar de modificar o cuestionar mi decisión.\n4. Que, cuando proceda, se comunique esta solicitud de supresión a los terceros a quienes se hayan comunicado mis datos, conforme al artículo 19 del RGPD.\n5. Que se me confirme por escrito la recepción de esta solicitud y las actuaciones realizadas.",
    "Si determinados datos no pudieran suprimirse por existir una obligación legal de conservación, solicito que se me indique qué datos se conservan, durante cuánto tiempo y con qué base jurídica, y que queden bloqueados y no se utilicen para ninguna otra finalidad.",
    "Esta decisión no requiere explicación ni justificación. Solicito que esta petición se tramite en el plazo previsto en el RGPD y en la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales.",
    "A efectos de identificación, adjunto copia de mi documento de identidad.",
    "En [lugar], a [fecha].",
    "[Firma]\nNombre y apellidos: [ ]\nDNI/NIE/Pasaporte: [ ]\nCorreo electrónico a efectos de notificaciones: [ ]",
  ],
};

// respuesta en HTML
export const preguntas = [
  {
    pregunta: "¿Es obligatorio escribir una carta para dejar de ser Testigo de Jehová?",
    respuesta:
      "No. La ley reconoce tu derecho a abandonar una religión, y la propia organización acepta que alguien se aleje sin renunciar formalmente o que comunique su renuncia de palabra.",
  },
  {
    pregunta: "¿Qué pasa si dejo de ir a las reuniones sin enviar nada?",
    respuesta:
      "La organización no lo considera una renuncia. Seguirás constando como Testigo inactivo en sus registros y pueden intentar contactar contigo. No aparecerás en sus cifras públicas de publicadores, porque solo cuentan a quienes informan actividad.",
  },
  {
    pregunta: "¿Anunciarán mi renuncia en la congregación?",
    respuesta:
      "Según sus publicaciones, sí: se anuncia que la persona «ya no es testigo de Jehová», igual que cuando alguien es sacado de la congregación.",
  },
  {
    pregunta: "¿Me pueden obligar a reunirme con los ancianos?",
    respuesta:
      "No. La organización afirma que los ancianos no pueden obligar a nadie a seguir siendo Testigo. Acudir a una reunión es decisión tuya.",
  },
  {
    pregunta: "¿La carta de renuncia borra mis datos?",
    respuesta:
      'No por sí sola. Para eso hay que ejercer el derecho de supresión. Puedes hacerlo junto con la renuncia (modelo 2) o por separado con la <a href="/derecho-de-supresion/">guía del derecho de supresión</a>.',
  },
  {
    pregunta: "¿Qué datos pueden guardar si me voy?",
    respuesta:
      "En un caso sobre un exmiembro de los Testigos de Jehová, el Tribunal Supremo (sentencia de 22 de febrero de 2021) admitió que se conserven solo el nombre y apellidos, la fecha de bautismo y la fecha de salida, y únicamente para el caso de que la persona pida volver.",
  },
  {
    pregunta: "¿Puedo volver a ser Testigo después de renunciar?",
    respuesta: "La organización contempla la readmisión. Es un proceso que deciden los ancianos.",
  },
];

// HTML; enlaces externos a las fuentes citadas en la página.
export const fuentes = [
  '<a href="https://www.boe.es/buscar/act.php?id=BOE-A-1980-15955" target="_blank" rel="noopener noreferrer">Ley Orgánica 7/1980, de Libertad Religiosa</a>, art. 2.1.a (BOE).',
  '<a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" target="_blank" rel="noopener noreferrer">Constitución Española</a>, art. 16 (BOE).',
  '<a href="https://www.jw.org/es/testigos-de-jehov%C3%A1/preguntas-frecuentes/renunciar/" target="_blank" rel="noopener noreferrer">¿Puede una persona dejar de ser testigo de Jehová?</a> (jw.org).',
  '<a href="https://wol.jw.org/es/wol/d/r4/lp-s/1102014944" target="_blank" rel="noopener noreferrer"><em>Organizados para hacer la voluntad de Jehová</em>, cap. 14, «La desasociación»</a> (wol.jw.org).',
  '<a href="https://www.jw.org/es/testigos-de-jehov%C3%A1/preguntas-frecuentes/sacados-de-la-congregaci%C3%B3n/" target="_blank" rel="noopener noreferrer">¿Cómo tratan los Testigos de Jehová a quienes ya no pertenecen a su religión?</a> (jw.org).',
  '<a href="https://www.aepd.es/documento/e-05239-2020.pdf" target="_blank" rel="noopener noreferrer">Resolución de la AEPD E/05239/2020</a> (reclamación de la AEVTJ, 2019).',
  "Tribunal Supremo, Sala de lo Contencioso-Administrativo, sentencia 698/2021, de 22 de febrero.",
];

export const cierre = {
  titular: "Tu decisión no necesita su permiso.",
  texto:
    "Envíes o no una carta, dejar de creer o de participar es un derecho tuyo. Si estás pasando por este momento y quieres hablarlo, en la AEVTJ te escuchamos.",
};
