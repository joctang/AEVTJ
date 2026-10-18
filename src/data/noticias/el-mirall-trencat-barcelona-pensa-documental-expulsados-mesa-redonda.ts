import type { Noticia } from "./tipos";

/**
 * Noticia nueva (no migrada de WordPress) sobre la actividad «El mirall trencat»
 * del festival Barcelona Pensa. Datos tomados del programa del festival
 * (https://www.barcelonapensa.cat/).
 *
 * - La portada es la foto de Natán Verdés del archivo de la web (231 × 239 px):
 *   por su tamaño, `noticia--mirall` la pinta como retrato junto al titular.
 * - La foto de Miguel Perlado (El Mundo) va en el cuerpo, con crédito en el pie.
 */
export const noticia: Noticia = {
  slug: "el-mirall-trencat-barcelona-pensa-documental-expulsados-mesa-redonda",
  titulo: "«El mirall trencat»: el precio de salir de un grupo, en Barcelona Pensa",
  fecha: "2026-10-18T10:00:00+02:00",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Festival", nombre: "Barcelona Pensa" },
  presentacion: "prensa",
  portada: {
    src: "/uploads/2025/10/natan-e1759935877900.webp",
    alt: "Natán Verdés, secretario de la AEVTJ",
    width: 231,
    height: 239,
  },
  entradilla:
    "El 19 de noviembre se proyecta el documental de EL PAÍS «Expulsados de los Testigos de Jehová» en el festival de filosofía Barcelona Pensa, y después hay una mesa redonda para hablar de lo que cuesta salir de un grupo.",
  metaDescription:
    "El 19 de noviembre, documental «Expulsados de los Testigos de Jehová» y mesa redonda con Natán Verdés (AEVTJ) y Miguel Perlado en Barcelona Pensa. Entrada libre.",
  pieza: {
    titulo: "Expulsados de los Testigos de Jehová · EL PAÍS",
    enlaceExterno: {
      href: "https://elpais.com/videos/2025-09-26/documental-expulsados-de-los-testigos-de-jehova.html",
      etiqueta: "Ver el documental en EL PAÍS",
    },
  },
  cuerpo: [
    { tipo: "seccion", titulo: "Cuando tu comunidad deja de hablarte" },
    {
      tipo: "parrafo",
      texto:
        "La actividad se llama <strong>«El mirall trencat»</strong> y empieza con una pregunta que mucha gente que ha dejado la organización conoce muy bien: ¿qué pasa cuando la comunidad que te daba un mundo, una identidad y un sentido a la vida se convierte, de repente, en la que te da la espalda?",
    },
    {
      tipo: "parrafo",
      texto:
        "Primero se ve el documental de EL PAÍS, con el testimonio de personas que han pasado por esa ruptura, también con sus propias familias. Después, en la mesa redonda se hablará de cómo detectar dinámicas que puedan mermar la libertad de las personas, de los límites entre la pertenencia voluntaria y el control, de los límites de la libertad religiosa, de las consecuencias psicológicas de salir de algunos grupos y del papel de los medios de comunicación.",
    },
    {
      tipo: "parrafo",
      texto:
        "También de cómo esas mismas dinámicas se repiten hoy en otros ámbitos, como los espacios de coaching con criptomonedas, los entornos de terapia o las redes sociales.",
    },
    { tipo: "seccion", titulo: "Quién habla en la mesa redonda" },
    {
      tipo: "parrafo",
      texto:
        "Participan Rebeca Carranco, la periodista que creó el documental; Abigail Aleu, abogada y vocal legal de la AEVTJ; Natán Verdés, graduado en Filosofía y secretario de la asociación; y <a href=\"/quienes-somos/#miguel-perlado\">Miguel Perlado</a>, psicólogo experto en sectas.",
    },
    {
      tipo: "imagen",
      src: "/uploads/2026/10/miguel-perlado.webp",
      alt: "Miguel Perlado, psicólogo experto en sectas, sonriendo delante de una estantería con libros",
      pie: "Miguel Perlado · Foto: El Mundo",
      width: 828,
      height: 552,
    },
    {
      tipo: "parrafo",
      texto:
        "Perlado es psicólogo clínico y psicoterapeuta, e investiga el sectarismo desde hace años. Colabora con la asociación, y puedes ver su trayectoria completa en <a href=\"/quienes-somos/#miguel-perlado\">nuestra página de colaboradores</a>.",
    },
    { tipo: "seccion", titulo: "Por qué nos importa" },
    {
      tipo: "parrafo",
      texto:
        "Que estas conversaciones lleguen a espacios de debate público ayuda a que se entienda mejor qué supone el ostracismo: perder de golpe a tu familia y a tus amigos por una decisión que es tuya. Y si has pasado por algo así, oírlo de boca de otras personas puede ayudarte a poner palabras a lo que viviste.",
    },
    {
      tipo: "parrafo",
      texto:
        "Barcelona Pensa celebra este año su XIII edición, los días 18 y 19 de noviembre, coincidiendo con el Día Mundial de la Filosofía de la UNESCO. Toda la programación es gratuita y abierta.",
    },
  ],
  contexto: [
    { valor: "19 nov", etiqueta: "Jueves, de 12.30 a 14.00 h", detalle: "Auditori del Pati Manning, Barcelona." },
    { valor: "95", etiqueta: "plazas", detalle: "Entrada libre hasta completar aforo." },
  ],
  intervinientes: [
    { nombre: "Rebeca Carranco", rol: "Periodista y creadora del documental" },
    { nombre: "Miguel Perlado", rol: "Psicólogo experto en sectas" },
    { nombre: "Abigail Aleu", rol: "Abogada y vocal legal de la AEVTJ" },
    { nombre: "Natán Verdés", rol: "Graduado en Filosofía y secretario de la AEVTJ" },
  ],
  recursos: [
    {
      titulo: "Programa de Barcelona Pensa",
      texto: "Todas las actividades del festival, los días 18 y 19 de noviembre.",
      href: "https://www.barcelonapensa.cat/",
      etiqueta: "Ver el programa",
      externo: true,
    },
    {
      titulo: "Sobre el documental",
      texto: "Cómo recibimos el estreno de «Expulsados de los Testigos de Jehová» en EL PAÍS.",
      href: "/noticias/estreno-del-documental-expulsados-de-los-testigos-de-jehova-en-el-pais/",
      etiqueta: "Leer la noticia",
    },
    {
      titulo: "Habla con nosotros",
      texto: "Si te has reconocido en estas historias, escríbenos. La atención es confidencial y gratuita.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    { etiqueta: "Programa de Barcelona Pensa", href: "https://www.barcelonapensa.cat/" },
    {
      etiqueta: "Documental · EL PAÍS",
      href: "https://elpais.com/videos/2025-09-26/documental-expulsados-de-los-testigos-de-jehova.html",
    },
  ],
};

export default noticia;
