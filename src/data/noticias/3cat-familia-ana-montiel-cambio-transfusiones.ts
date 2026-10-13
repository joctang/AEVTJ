import type { Noticia } from "./tipos";

const REPORTAJE =
  "https://www.3cat.cat/3catinfo/gir-historic-dels-testimonis-de-jehova-ja-permeten-rebre-transfusions-de-sang/noticia/3431598/";

export const noticia: Noticia = {
  slug: "3cat-familia-ana-montiel-cambio-transfusiones",
  presentacion: "prensa",
  titulo: "La familia de Ana Montiel pide respuestas en 3Cat tras el cambio sobre transfusiones",
  fecha: "2026-10-13T06:47:00+02:00",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Reportaje", nombre: "3CatInfo · Marta Freixanet" },
  portada: {
    src: "/uploads/2026/10/3cat-familia-garcia-montiel.jpg",
    alt: "Fotografía familiar de Nicolás, Ana Montiel y su hija Annabel mostrada en el reportaje de 3Cat",
    width: 1200,
    height: 675,
    credito: { texto: "Imagen del reportaje de 3Cat · Foto de la familia García Montiel", href: REPORTAJE },
  },
  metaDescription:
    "3Cat habla con la familia de Ana Montiel sobre el cambio en la norma de las transfusiones y recoge las preguntas de la AEVTJ sobre los casos anteriores.",
  entradilla:
    "Ana Montiel y su familia viajaron a Berlín buscando un trasplante de corazón sin transfusiones. Ella murió antes de que llegaran a operarla. Ahora su hija y su marido cuentan a 3Cat cómo vivieron aquello y qué esperan tras el cambio de norma.",
  pieza: {
    titulo: "Reportaje de Marta Freixanet en 3CatInfo",
    enlaceExterno: {
      href: REPORTAJE,
      etiqueta: "Leer el reportaje completo en 3Cat",
    },
    pie: "Publicado el 13 de octubre de 2026 · En catalán",
  },
  cuerpo: [
    { tipo: "seccion", titulo: "El viaje de Ana a Berlín" },
    {
      tipo: "parrafo",
      texto:
        "Ana Montiel tenía una enfermedad congénita del corazón y necesitaba un trasplante. Según cuenta 3Cat, ningún hospital de España aceptó operarla sin la posibilidad de hacerle una transfusión. Los Testigos de Jehová buscaron un centro en Europa y Ana viajó con su familia a Berlín. Mientras le hacían las pruebas previas, sufrió un infarto, entró en coma y murió antes de que pudieran trasplantarla.",
    },
    {
      tipo: "parrafo",
      texto:
        "Su hija Annabel y su marido Nicolás hablan en el reportaje de lo que vivieron allí. Cuentan que, tras el infarto, las personas de la organización que les habían acompañado dejaron de estar con ellos. La familia pide una explicación y una disculpa. También se pregunta qué habría pasado si Ana hubiera podido aceptar una transfusión. El reportaje no permite saber si eso habría cambiado el desenlace.",
    },
    { tipo: "seccion", titulo: "Qué cambió en septiembre" },
    {
      tipo: "parrafo",
      texto:
        "Desde el 18 de septiembre, cada Testigo de Jehová puede decidir si acepta glóbulos rojos, glóbulos blancos, plasma o plaquetas de otra persona. La prohibición de recibir sangre completa se mantiene. Es un cambio importante, pero llega después de décadas en las que aceptar esos componentes podía tener consecuencias dentro de la congregación.",
    },
    {
      tipo: "parrafo",
      texto:
        "Para la familia de Ana, el cambio llega demasiado tarde para ella y abre preguntas que quieren que la organización responda.",
    },
    { tipo: "seccion", titulo: "La AEVTJ quiere revisar los casos uno a uno" },
    {
      tipo: "parrafo",
      texto:
        "3Cat habló también con Samuel Ferrando, presidente de la AEVTJ, y con Abigail Aleu, vocal de su departamento legal. La asociación prepara una demanda colectiva, pero antes quiere estudiar cada caso: qué papel tuvo el rechazo de la transfusión en lo que ocurrió y hasta qué punto la persona decidió libremente o se sintió presionada por su entorno religioso.",
    },
    {
      tipo: "parrafo",
      texto:
        "Abigail plantea una pregunta sencilla: si el pasaje bíblico sigue siendo el mismo, ¿por qué la norma pudo cambiar ahora? La asociación pide que el cambio venga acompañado de explicaciones y de reconocimiento para las personas y familias afectadas. <a href=\"/noticias/la-aevtj-reclama-libertad-medica-plena-tras-el-cambio-sobre-transfusiones/\">La postura completa de la AEVTJ está en su comunicado</a>; en el reportaje de 3Cat se pueden leer las voces de la familia de Ana y de la asociación.",
    },
  ],
  fuentes: [
    { etiqueta: "3CatInfo · Marta Freixanet · 13 de octubre de 2026", href: REPORTAJE },
  ],
};

export default noticia;
