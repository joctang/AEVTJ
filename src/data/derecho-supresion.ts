// Contenido extraído literalmente de "instrucciones derecho de supresion.docx"
// (carpeta raíz del proyecto, 2026-10-03). Solo se ha retirado la frase
// residual "Si quieres, te preparo también el texto completo listo para
// presentar ante la AEPD.", que no es contenido de la guía. Los títulos de
// paso cortos, el kicker, la entradilla del hero y el aviso son microcopy
// nuevo; el resto no se ha reescrito ni ampliado.

export interface ModeloTexto {
  id: string;
  asunto?: string;
  parrafos: string[];
}

export interface Descarga {
  titulo: string;
  descripcion: string;
  href: string;
  tamano: string;
}

export const intro = {
  kicker: "Protección de datos · RGPD",
  titulo: "Cómo suprimir tus datos personales ante los Testigos de Jehová (derecho de supresión)",
  h1: "Cómo suprimir tus datos personales ante los Testigos de Jehová",
  entradilla:
    "Cualquier persona puede ejercer su derecho de supresión respecto de sus datos personales ante el responsable del tratamiento. Si la organización trata datos personales de una persona, esta puede pedir que se supriman cuando proceda conforme al RGPD y la LOPDGDD.",
  actualizado: "octubre de 2026",
  // Foto de Towfiqu barbhuiya en Unsplash (Licencia Unsplash, uso libre):
  // https://unsplash.com/photos/2Xht5D22y0I
  heroImage: {
    src: "/uploads/2026/10/pluma-y-papeles-derecho-de-supresion.webp",
    alt: "Pluma estilográfica sobre papeles y sobres en una mesa",
  },
};

export const avisoLegal = {
  titulo: "Aviso importante",
  texto:
    "Esta guía y sus modelos son orientativos y no sustituyen el asesoramiento jurídico. Revisa y adapta cada texto a tu caso antes de enviarlo. Si tienes dudas, consúltanos.",
};

export const emailDpd = "DataProtectionOfficer.ES@jw.org";

export const descargas: Descarga[] = [
  {
    titulo: "Instrucciones y modelos de texto",
    descripcion:
      "La guía completa con el texto para el DPD, la respuesta si piden la congregación y el contenido orientativo de la reclamación.",
    href: "/uploads/2026/10/AEVTJ-instrucciones-derecho-de-supresion.docx",
    tamano: "39 KB",
  },
  {
    titulo: "Modelo de reclamación ante la AEPD",
    descripcion:
      "Escrito completo (Expone, Fundamentos, Solicita y documentos) para rellenar con tus datos si no atienden tu solicitud.",
    href: "/uploads/2026/10/AEVTJ-modelo-reclamacion-AEPD-derecho-de-supresion.docx",
    tamano: "38 KB",
  },
];

// Paso 1 · Solicitud al DPD
export const queSolicitar = {
  etiqueta: "La persona debe solicitar de forma clara:",
  items: [
    "la supresión de todos sus datos personales;",
    "el cese de cualquier tratamiento futuro, salvo el estrictamente necesario para cumplir obligaciones legales;",
  ],
  confirmacion: {
    texto: "confirmación escrita de:",
    items: [
      "qué datos están tratando;",
      "de dónde los obtuvieron;",
      "con qué finalidad los usan;",
      "a quién los han comunicado;",
      "y qué datos han sido efectivamente suprimidos y cuáles no, con su justificación.",
    ],
  },
};

export const modeloDpd: ModeloTexto = {
  id: "modelo-solicitud-dpd",
  asunto: "Ejercicio del derecho de supresión de datos personales",
  parrafos: [
    "A la atención del Delegado de Protección de Datos:",
    "Por medio del presente escrito, ejerzo mi derecho de supresión conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales.",
    "Solicito la supresión de todos los datos personales relativos a mi persona que estén siendo tratados por esa entidad, así como el cese de cualquier tratamiento futuro, salvo aquellos que deban conservarse exclusivamente por obligación legal, en cuyo caso deberá indicarse de forma expresa la base jurídica aplicable.",
    "Asimismo, solicito que se me confirme por escrito:",
    "1. Qué datos personales míos están siendo tratados.\n2. El origen de dichos datos.\n3. Las finalidades del tratamiento.\n4. Los destinatarios o categorías de destinatarios a quienes se hayan comunicado.\n5. Qué datos han sido suprimidos efectivamente.\n6. Qué datos, en su caso, no pueden ser suprimidos y por qué motivo legal concreto.",
    "Solicito igualmente que esta petición sea tramitada dentro del plazo legalmente establecido.",
    "A efectos de identificación, adjunto copia de mi documento identificativo.",
    "En [lugar], a [fecha].",
    "Nombre y apellidos\nDNI/NIE/Pasaporte\nCorreo electrónico a efectos de notificaciones",
  ],
};

// Paso 2 · Si piden la congregación de origen
export const congregacion = {
  titulo: "Si responden pidiendo la congregación de origen",
  texto:
    "Si el DPD responde pidiendo que se indique la congregación de origen y dice que Betel no maneja esos datos (es una maniobra dilatoria), la persona puede negarse a facilitar ese dato si no desea hacerlo.",
  motivosTitulo: "La petición de la congregación de origen es improcedente por los siguientes motivos:",
  motivos: [
    "El interesado no tiene por qué reconstruir la organización interna del responsable.",
    "Si existe un canal oficial del DPD, el responsable debe gestionar internamente la solicitud.",
    "Pedir la congregación como requisito previo puede funcionar como obstáculo o dilación si ya tienen datos suficientes para identificar al solicitante.",
    "El responsable debe tener capacidad de localizar, rastrear y gestionar los tratamientos de datos personales dentro de su propia estructura.",
  ],
};

export const modeloCongregacion: ModeloTexto = {
  id: "modelo-respuesta-congregacion",
  parrafos: [
    "A la atención del Delegado de Protección de Datos:",
    "En respuesta a su comunicación, reitero mi solicitud de ejercicio del derecho de supresión.",
    "No facilito información adicional sobre congregación de origen, por no resultar necesaria para atender mi solicitud, al haber sido esta presentada ante el canal habilitado por el propio responsable/Delegado de Protección de Datos.",
    "Corresponde al responsable del tratamiento articular los mecanismos internos necesarios para identificar los tratamientos de datos personales, garantizar su trazabilidad y gestionar correctamente el ejercicio de derechos de las personas interesadas.",
    "Les requiero nuevamente para que tramiten mi solicitud en plazo y me confirmen por escrito el resultado de la misma.",
    "En caso de no atenderse debidamente este ejercicio de derechos, me reservo el derecho a presentar la correspondiente reclamación ante la Agencia Española de Protección de Datos.",
    "En [lugar], a [fecha].",
    "Nombre y apellidos",
  ],
};

// Paso 3 · Cuándo reclamar
export const cuandoReclamar = {
  titulo: "Cuándo reclamar ante la AEPD",
  etiqueta: "Podéis reclamar ante la AEPD si ocurre cualquiera de estas situaciones:",
  items: [
    "no contestan en plazo;",
    "contestan de forma evasiva o incompleta;",
    "condicionan injustificadamente la tramitación a aportar la congregación;",
    "niegan la supresión sin base suficiente;",
    "no acreditan qué han hecho con la solicitud.",
  ],
  guardarEtiqueta: "Antes de reclamar, conviene guardar:",
  guardar: [
    "el correo de solicitud inicial;",
    "el justificante de envío;",
    "la respuesta del DPD, si la hubo;",
    "la réplica del interesado;",
    "cualquier otro correo posterior.",
  ],
};

// Paso 4 · Reclamación
export const modeloAepd: ModeloTexto = {
  id: "modelo-reclamacion-aepd",
  asunto: "Reclamación por falta de atención del derecho de supresión",
  parrafos: [
    "Expongo:",
    `1. Que en fecha [fecha] ejercité mi derecho de supresión ante la entidad, dirigiéndome al Delegado de Protección de Datos en ${emailDpd}.\n2. Que adjunto copia de dicha solicitud y justificante de envío.\n3. Que la entidad respondió solicitando que indicara mi congregación de origen y alegando que la central no maneja esos datos.\n4. Que consideré dicha exigencia improcedente y reiteré mi solicitud, al entender que corresponde al responsable organizar internamente la localización y gestión de los datos personales objeto de tratamiento.\n5. Que, pese a ello, mi derecho no ha sido atendido correctamente [o no ha sido atendido dentro de plazo].`,
    "Por todo ello, solicito a la Agencia Española de Protección de Datos que admita esta reclamación y adopte las medidas oportunas para garantizar mi derecho de supresión.",
  ],
};

export const sedeAepd = {
  texto:
    "Ante la Agencia Española de Protección de Datos (AEPD), por su canal de reclamaciones de protección de datos:",
  href: "https://sedeaepd.gob.es/sede-electronica/procedures/claims/buzon-guiado/Q351",
};

export const recomendaciones = [
  "enviar siempre el correo guardando copia;",
  "pedir o conservar prueba de envío;",
  "adjuntar identificación;",
  "no entrar en debates doctrinales o religiosos;",
  "centrarse solo en protección de datos;",
  "si contestan pidiendo la congregación, responder una sola vez reiterando la solicitud;",
  "si no lo resuelven, pasar a la AEPD.",
];

// Separado en titular + párrafo solo para la maquetación; texto literal.
export const cierre = {
  titular: "No sois vosotros quienes tenéis que investigar dónde están vuestros datos dentro de la organización.",
  texto:
    "Si ejercéis el derecho ante el canal oficial del delegado de protección de datos, corresponde al responsable tramitarlo correctamente. Si no lo hace o pone trabas, puede reclamarse ante la AEPD.",
};

export const pasos = [
  { n: 1, id: "solicitud-al-dpd", titulo: "Envía la solicitud al Delegado de Protección de Datos" },
  { n: 2, id: "si-piden-la-congregacion", titulo: congregacion.titulo },
  { n: 3, id: "cuando-reclamar", titulo: cuandoReclamar.titulo },
  { n: 4, id: "reclamacion-aepd", titulo: "Cómo presentar la reclamación ante la AEPD" },
];
