import type { Noticia } from "./tipos";

const ENTREVISTA =
  "https://www.elindependiente.com/espana/2026/10/12/becky-extestigo-jehova-vuestra-hija-os-quiere/";

export const noticia: Noticia = {
  slug: "becky-extestigo-transfusiones-y-reencuentro-familiar",
  presentacion: "prensa",
  titulo: "Becky, extestigo de Jehová: «No me hace falta la Biblia para ser buena persona»",
  fecha: "2026-10-12T00:08:00",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Entrevista", nombre: "El Independiente · Belén Armas Nistal" },
  portada: {
    src: "/uploads/2026/10/becky-el-independiente.jpeg",
    alt: "Retrato de Becky publicado junto a la entrevista de El Independiente",
    width: 1200,
    height: 675,
    credito: { texto: "Fotografía: El Independiente", href: ENTREVISTA },
  },
  metaDescription:
    "Becky cuenta en El Independiente lo que vivió con su padre en el hospital y el mensaje que desapareció después de que él le dijera que la quería.",
  entradilla:
    "Becky escribió a su padre cuando supo que las normas sobre transfusiones habían cambiado. Él le dijo que también la quería. Menos de una hora después, el mensaje ya no estaba. En El Independiente cuenta qué había pasado entre ellos y lo que vivieron juntos en el hospital.",
  citaDestacada: {
    texto: "De vuestra hija que os quiere",
    autor: "Becky",
    cargo: "Así se despidió de su padre en el mensaje que cuenta a El Independiente",
  },
  pieza: {
    titulo: "El reportaje de El Independiente",
    enlaceExterno: {
      href: ENTREVISTA,
      etiqueta: "Leer la entrevista completa en El Independiente",
    },
    pie: "Belén Armas Nistal · 12 de octubre de 2026",
  },
  cuerpo: [
    { tipo: "seccion", titulo: "Un «te queremos» que duró menos de una hora" },
    {
      tipo: "parrafo",
      texto:
        "Becky vio el vídeo en el que los Testigos de Jehová anunciaban el cambio sobre las transfusiones y escribió a su padre para avisarle. Le recordó lo que habían pasado juntos y se despidió diciéndoles que los quería. Él respondió: «Nosotros también te queremos muchísimo». Pero Becky volvió al chat al poco rato, antes de que pasara una hora, y la respuesta ya no estaba. Alguien la había borrado, según cuenta a <em>El Independiente</em>.",
    },
    {
      tipo: "parrafo",
      texto:
        "Becky dice que sus padres ya no mantienen relación con ella. Creció como Testigo de Jehová y pasó 27 años dentro. En la entrevista habla también de lo que le ocurrió en Estados Unidos: un hombre de la congregación la acosó y, cuando acudió a los ancianos para pedir ayuda, acabó sintiéndose señalada ella. Tampoco encontró en su familia el apoyo que necesitaba.",
    },
    { tipo: "seccion", titulo: "Lo que pasó con su padre en el hospital" },
    {
      tipo: "parrafo",
      texto:
        "El cambio sobre las transfusiones le trajo de vuelta otro momento con su padre. Lo habían operado por un cáncer de esófago y, días después, surgió una complicación. Los médicos pidieron permiso para hacerle una transfusión. Becky cuenta que su familia se negó por motivos religiosos. Su padre sobrevivió, pero hoy se alimenta mediante una máquina. Ella todavía se pregunta cómo estaría si le hubieran hecho aquella transfusión. No tiene forma de saberlo.",
    },
    {
      tipo: "parrafo",
      texto:
        "Por eso le cuesta aceptar que la norma cambiara de un día para otro. «¿Qué pasa con los que se operaron el día 17? Se pudieron morir. Y el 18 no», pregunta en la entrevista. Piensa en su padre y en quienes pasaron por algo parecido antes del anuncio.",
    },
    { tipo: "seccion", titulo: "Becky lo cuenta con sus palabras" },
    {
      tipo: "parrafo",
      texto:
        "Aquí hemos recogido solo una parte de lo que cuenta. En la entrevista de Belén Armas Nistal para <em>El Independiente</em>, Becky habla también de su salida, de la relación con su familia y de lo que siente ahora al mirar atrás. Merece la pena leerla entera.",
    },
  ],
  fuentes: [
    {
      etiqueta: "El Independiente · Belén Armas Nistal · 12 de octubre de 2026",
      href: ENTREVISTA,
    },
  ],
};

export default noticia;
