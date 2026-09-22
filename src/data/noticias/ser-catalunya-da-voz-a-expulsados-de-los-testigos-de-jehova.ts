import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/ser-catalunya-da-voz-a-expulsados-de-los-testigos-de-jehova.json`.
 *
 * Notas de migración:
 * - La pieza es de radio (audio en la web de SER Catalunya): no hay `iframe` de
 *   vídeo en el original, así que no se incluye `video`.
 * - Se descartaron los bloques heredados de WordPress: "Últimas noticias",
 *   "¿Podemos ayudarte?", "Categorías", "Tags", "Difunde esta noticia" y los
 *   iconos sociales.
 * - El enlace interno a victimasdetestigosdejehova.org se convirtió en ruta relativa.
 */
export const noticia: Noticia = {
  slug: "ser-catalunya-da-voz-a-expulsados-de-los-testigos-de-jehova",
  titulo: "SER Catalunya da voz a expulsados de los Testigos de Jehová",
  fecha: "2025-11-07T09:44:21",
  autoria: "AEVTJ · Redacción",
  medio: { etiqueta: "Emitido en", nombre: "El Balcó · SER Catalunya" },
  portada: {
    src: "/uploads/2025/11/Cadena-SER.webp",
    alt: "Logotipo de la Cadena SER",
  },
  entradilla:
    "El programa El Balcó entrevista a Samuel, presidente de la AEVTJ, que pasó 45 años dentro de los Testigos de Jehová, sobre el corte de lazos, la culpa arrastrada y el vacío social de quienes salen de la congregación.",
  citaDestacada: {
    texto: "Hemos pasado años pensando que éramos culpables",
    autor: "Samuel Ferrando",
    cargo: "Presidente de la AEVTJ",
  },
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        "El programa <em>El Balcó</em> entrevista a <a href=\"/quienes-somos/\">Samuel, presidente de nuestra asociación</a>, que pasó <strong>45 años</strong> dentro de los Testigos de Jehová y decidió salir en 2022 tras quedar impactado por la gestión interna de un caso de abusos. En la conversación, describe el <strong>corte de lazos sociales y familiares</strong> que suelen afrontar quienes abandonan la congregación y el <strong>sentimiento de culpa</strong> que muchos arrastran durante años. También se mencionan motivos de expulsión como <strong>fumar, jugar a la lotería o poner un árbol de Navidad</strong>, y el vacío social que acompaña a cualquier intento de regresar.",
    },
    {
      tipo: "parrafo",
      texto:
        "Subraya Samuel en esta entrevista que el número de personas que buscan apoyo <strong>no deja de crecer</strong>.",
    },
    { tipo: "seccion", titulo: "Contexto: un documental de EL PAÍS" },
    {
      tipo: "parrafo",
      texto:
        "La entrevista se enmarca en el estreno del documental <a href=\"/estreno-del-documental-expulsados-de-los-testigos-de-jehova-en-el-pais/\"><strong>“Expulsados de los Testigos de Jehová”</strong></a> (28 minutos), una producción de <strong>EL PAÍS</strong> dirigida por <strong>Rebeca Carranco, Berta Vila y Álvaro González Roldán</strong>, que reúne <strong>seis testimonios</strong> y visibiliza las consecuencias personales y sociales de dejar la congregación.",
    },
  ],
  contexto: [
    { valor: "27 de octubre de 2025", etiqueta: "Fecha de emisión" },
    { valor: "El Balcó", etiqueta: "Programa", detalle: "SER Catalunya" },
    { valor: "19:52 min", etiqueta: "Duración del audio", detalle: "En catalán" },
  ],
  recursos: [
    {
      titulo: "Escuchar la entrevista",
      texto: "Accede a la entrevista en la web de SER Catalunya.",
      href: "https://cadenaser.com/cataluna/2025/10/27/els-expulsats-de-jehova-parlen-hem-passat-anys-pensant-que-erem-culpables-sercat/",
      etiqueta: "Ir a SER Catalunya",
      externo: true,
    },
  ],
  fuentes: [
    {
      etiqueta: "Entrevista en SER Catalunya · El Balcó",
      href: "https://cadenaser.com/cataluna/2025/10/27/els-expulsats-de-jehova-parlen-hem-passat-anys-pensant-que-erem-culpables-sercat/",
    },
  ],
};

export default noticia;
