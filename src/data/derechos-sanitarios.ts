// Contenido extraído literalmente del HTML de Elementor en
// src/content/pages/guia-para-proteger-tus-derechos-sanitarios-en-caso-de-interferencia-familiar.json.
// Las viñetas "•" escritas a mano dentro de párrafos se han convertido en listas;
// los <strong> inline se mantienen literales. Se han descartado los 27 <strong>
// vacíos del marcado heredado y los 38 <br> de maquetación. No se ha reescrito,
// ampliado ni "aclarado" ninguna indicación clínica o jurídica.

export interface DerechosIntro {
  kicker: string;
  titulo: string;
  objetivo: string;
  queNecesitas: string;
  heroImage: { src: string; alt: string };
  actualizado: string;
}

export interface TarjetaCampo {
  etiqueta?: string;
  tipo: "rellenable" | "fijo";
  valor?: string;
}

export type BloqueSanitario =
  | { tipo: "parrafo"; texto: string }
  | { tipo: "lista"; etiqueta?: string; items: string[] };

export interface PasoSanitario {
  n: number;
  id: string;
  titulo: string;
  intro?: string;
  bloques: BloqueSanitario[];
}

export interface AvisoLegal {
  titulo: string;
  texto: string;
}

export const intro: DerechosIntro = {
  kicker: "Derechos sanitarios · Protección",
  // H1 del contenido; el hero de [...slug].astro usa uno más corto
  // ("Guía para proteger tus derechos sanitarios").
  titulo:
    "Guía para proteger tus derechos sanitarios ante posibles interferencias familiares (expulsados de los Testigos de Jehová)",
  objetivo:
    "Que se respeten tus decisiones médicas si quedas inconsciente o no puedes expresarte.",
  queNecesitas:
    "Registrar por escrito tus Voluntades Anticipadas / Documento de Instrucciones Previas (DVA/DIP, también llamado “Testamento Vital”) y designar un representante sanitario de confianza.",
  heroImage: {
    src: "/uploads/2025/10/Serene-Seascape-at-Sunset.webp",
    alt: "Mar en calma al atardecer",
  },
  actualizado: "febrero de 2025",
};

export const avisoLegal: AvisoLegal = {
  titulo: "Aviso importante",
  texto:
    "Esta guía es informativa y no sustituye el asesoramiento jurídico o médico. Si tienes dudas, consúltanos o acude a un profesional.",
};

export const pasos: PasoSanitario[] = [
  {
    n: 1,
    id: "designa-un-representante-sanitario",
    titulo: "Designa un Representante Sanitario",
    bloques: [
      {
        tipo: "parrafo",
        texto:
          "El representante sanitario tomará decisiones por ti <strong>solo si tú no puedes</strong>.",
      },
      {
        tipo: "lista",
        etiqueta: "Recomendaciones:",
        items: [
          "Elige <strong>alguien de confianza</strong> que <strong>respete inequívocamente tu voluntad</strong> (preferiblemente no TJ o, si lo es, que firme que la respetará).",
          "Identifícalo con <strong>nombre completo, DNI/NIE, teléfono y email</strong>.",
          "Indica al menos <strong>una persona sustituta</strong> por si la principal no localiza.",
        ],
      },
      {
        tipo: "lista",
        etiqueta: "Dónde se formaliza:",
        items: [
          "Dentro del propio DVA/DIP y <strong>regístralo</strong> en el <strong>Registro de Instrucciones Previas</strong> de tu Comunidad Autónoma para que conste en tu historia clínica.",
        ],
      },
    ],
  },
  {
    n: 2,
    id: "redacta-y-registra-tu-dva-dip",
    titulo:
      "Redacta y registra tu Documento de Voluntades Anticipadas (DVA/DIP)",
    bloques: [
      {
        tipo: "parrafo",
        texto: "Puedes dejar por escrito, de forma clara, por ejemplo:",
      },
      {
        tipo: "lista",
        items: [
          "<strong>Autorizo transfusiones de sangre y hemoderivados</strong> cuando el equipo médico lo considere indicado.",
          "<strong>Autorizo componentes y fracciones sanguíneas</strong>, procedimientos como <strong>recuperación intraoperatoria (cell saver)</strong>, y alternativas que el equipo estime oportunas.",
          "Decisiones sobre <strong>reanimación, tratamientos, cuidados paliativos</strong> y <strong>donación de órganos</strong>.",
          "Tu postura sobre la <strong>eutanasia</strong> (según la LO 3/2021) y otras decisiones al final de la vida.",
          "<strong>Exclusiones:</strong> “Las siguientes personas no están autorizadas a intervenir ni a acceder a mi información clínica más allá de lo permitido por la ley: [nombres]”.",
        ],
      },
      {
        tipo: "lista",
        etiqueta: "Cómo formalizarlo (elige una vía):",
        items: [
          "<strong>Ante notario</strong> (opción más simple, con coste).",
          "<strong>Ante tres testigos</strong> (no beneficiarios), que firman que lo haces libremente.",
          "<strong>En tu Servicio/Registro de Instrucciones Previas</strong> de la Consejería de Sanidad.",
        ],
      },
      {
        tipo: "parrafo",
        texto:
          "Tras firmarlo, <strong>inscríbelo</strong> en el <strong>Registro autonómico</strong>. Puedes <strong>modificarlo o revocarlo</strong> en cualquier momento por los mismos cauces.",
      },
    ],
  },
  {
    n: 3,
    id: "entrega-y-comunica-tu-decision",
    titulo: "Entrega y comunica tu decisión",
    bloques: [
      {
        tipo: "lista",
        items: [
          "<strong>Centro de salud y hospital:</strong> presenta una copia para que conste en tu <strong>historia clínica</strong> (pídeles confirmación).",
          "<strong>Representante y allegados:</strong> entrégales copia firmada y una <strong>nota de instrucciones</strong> (qué hacer, a quién llamar).",
          "<strong>Documentación a mano:</strong> guarda el PDF en tu <strong>móvil</strong> (carpeta “Salud”) y una copia impresa en casa.",
        ],
      },
    ],
  },
  {
    n: 4,
    id: "lleva-una-tarjeta-de-emergencia",
    titulo: "Lleva una tarjeta de emergencia (cartera y móvil)",
    bloques: [
      {
        tipo: "parrafo",
        texto:
          "Pon esta tarjeta como <strong>información médica/SOS</strong> en la pantalla del móvil.",
      },
    ],
  },
  {
    n: 5,
    id: "como-evitar-interferencias-no-deseadas",
    titulo:
      "Cómo evitar interferencias no deseadas de familiares Testigos de Jehova",
    bloques: [
      {
        tipo: "lista",
        items: [
          "Déjalo <strong>explícito</strong> en el DVA/DIP (autorizaciones y <strong>exclusiones</strong>).",
          "<strong>Notifica</strong> tu situación al <strong>médico de familia</strong> y al <strong>Servicio de Atención al Paciente</strong> del hospital.",
          "Pide que en tu historia aparezca un <strong>aviso clínico</strong> sobre la existencia del documento y el representante.",
          "Si prevés conflicto, <strong>consulta con un abogado</strong> y valora un <strong>poder preventivo</strong> para salud y patrimonio.",
        ],
      },
    ],
  },
];

// Plantilla de tarjeta del paso 4: los guiones bajos son campos rellenables;
// las dos frases en negrita ("Autorizo transfusiones…", "Exclusión familiar: …")
// son texto fijo. Etiqueta "Modelo recomendado:" antes de la tarjeta.
export const tarjetaEmergencia: {
  titulo: string;
  campos: TarjetaCampo[];
} = {
  titulo: "Tarjeta de Instrucciones Sanitarias",
  campos: [
    { etiqueta: "Nombre y DNI", tipo: "rellenable" },
    { etiqueta: "Representante sanitario", tipo: "rellenable" },
    { etiqueta: "Tel. del representante", tipo: "rellenable" },
    {
      tipo: "fijo",
      valor:
        "<strong>Autorizo transfusiones de sangre y hemoderivados sin restricciones médicas.</strong>",
    },
    {
      tipo: "fijo",
      valor:
        "<strong>Exclusión familiar:</strong> Mis familiares Testigos de Jehová <strong>no</strong> están autorizados a decidir por mí.",
    },
    { etiqueta: "Documento registrado en (Comunidad Autónoma)", tipo: "rellenable" },
    { etiqueta: "Fecha", tipo: "rellenable" },
    { etiqueta: "Contacto alternativo", tipo: "rellenable" },
    { etiqueta: "Tel. del contacto", tipo: "rellenable" },
  ],
};

export const cierre = {
  texto: "Queremos que nos ayudes a que este movimiento sea imparable.",
};

// Paso 2: las tres vías de formalización (texto literal, separado en
// nombre + matiz solo para maquetarlas como opciones excluyentes).
export const viasFormalizacion: { nombre: string; matiz: string }[] = [
  { nombre: "Ante notario", matiz: "(opción más simple, con coste)." },
  {
    nombre: "Ante tres testigos",
    matiz: "(no beneficiarios), que firman que lo haces libremente.",
  },
  {
    nombre: "En tu Servicio/Registro de Instrucciones Previas",
    matiz: "de la Consejería de Sanidad.",
  },
];

// Paso 2: fórmula de exclusión, a copiar literalmente.
export const formulaExclusion =
  "“Las siguientes personas no están autorizadas a intervenir ni a acceder a mi información clínica más allá de lo permitido por la ley: [nombres]”";

// Registros de Instrucciones Previas por Comunidad Autónoma.
// PENDIENTE: las URLs las tiene que aportar la asociación. Mientras `url`
// sea null, el nombre se renderiza sin enlace.
export const registrosAutonomicos: { nombre: string; url: null }[] = [
  { nombre: "Andalucía", url: null },
  { nombre: "Aragón", url: null },
  { nombre: "Asturias", url: null },
  { nombre: "Illes Balears", url: null },
  { nombre: "Canarias", url: null },
  { nombre: "Cantabria", url: null },
  { nombre: "Castilla-La Mancha", url: null },
  { nombre: "Castilla y León", url: null },
  { nombre: "Cataluña", url: null },
  { nombre: "Comunitat Valenciana", url: null },
  { nombre: "Extremadura", url: null },
  { nombre: "Galicia", url: null },
  { nombre: "La Rioja", url: null },
  { nombre: "Comunidad de Madrid", url: null },
  { nombre: "Región de Murcia", url: null },
  { nombre: "Comunidad Foral de Navarra", url: null },
  { nombre: "País Vasco", url: null },
  { nombre: "Ceuta", url: null },
  { nombre: "Melilla", url: null },
];

// Enlaces cruzados antes del cierre.
export const enlacesCruzados: { titulo: string; descripcion: string; href: string }[] = [
  {
    titulo: "Guía para salir de los Testigos de Jehová",
    descripcion: "El proceso de salida explicado en seis capítulos y siete pasos.",
    href: "/guia-para-salir-de-los-testigos-de-jehova/",
  },
  {
    titulo: "Recursos de ayuda",
    descripcion: "Asociaciones, profesionales y líneas de apoyo.",
    href: "/recursos-de-ayuda/",
  },
  {
    titulo: "Demandas y juicios",
    descripcion: "Estado de los casos judiciales de la asociación.",
    href: "/legal/",
  },
];

