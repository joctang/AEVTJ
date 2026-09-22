import type { Noticia } from "./tipos";

/**
 * Migrada desde `src/content/posts/victoria-historica-de-aevtj.json`.
 *
 * Notas de migración:
 * - El bloque "Ecos en la prensa internacional y nacional" (21 enlaces a medios)
 *   se mapeó a `fuentes`, agrupado por país en la etiqueta.
 * - El enlace al PDF de la sentencia se mantiene en `recursos`.
 * - Descartados: bloque "Últimas noticias", "Categorías", "¿Podemos ayudarte?"
 *   y footer heredado. Sin youtubeId: no hay vídeo en el original.
 */
export const noticia: Noticia = {
  slug: "victoria-historica-de-aevtj",
  titulo:
    "Victoria histórica de la AEVTJ: la justicia española sienta un precedente que resuena en toda Europa",
  fecha: "2026-04-22T10:59:44",
  autoria: "AEVTJ · Redacción",
  portada: {
    src: "/uploads/2025/10/audiencia-provincial-de-madrid.webp",
    alt: "Fachada de la Audiencia Provincial de Madrid",
  },
  entradilla:
    "Tras la ratificación de la sentencia por la Audiencia Provincial de Madrid, que avala el derecho de las víctimas a calificar a los Testigos de Jehová como \"secta destructiva\", los principales medios internacionales se hacen eco de la decisión.",
  cuerpo: [
    {
      tipo: "parrafo",
      texto:
        'Lo que comenzó como una lucha por la libertad de expresión en España se ha convertido en una noticia de impacto mundial. Tras la ratificación de la sentencia por la Audiencia Provincial de Madrid, que avala el derecho de las víctimas a calificar a los Testigos de Jehová como <strong>"secta destructiva"</strong>, los principales medios de comunicación internacionales se han hecho eco de lo que consideran una "decisión histórica".',
    },
    {
      tipo: "cita",
      texto:
        "El tribunal madrileño ha dejado claro que las críticas sobre el aislamiento y el control interno de la organización están plenamente amparadas por la ley.",
    },
    {
      tipo: "parrafo",
      texto:
        'La agencia <strong>AFP</strong> ha distribuido la noticia en varios idiomas, provocando que cabeceras de prestigio en Francia, Suiza y Bélgica analicen las implicaciones de este fallo. El tribunal se ha basado en testimonios que el propio fallo califica como <em>"experiencias reales"</em>.',
    },
    {
      tipo: "parrafo",
      texto:
        "Desde la AEVTJ subrayan que esta visibilidad internacional es un respaldo fundamental para todas las víctimas que, fuera de las fronteras españolas, siguen luchando por el reconocimiento de su sufrimiento.",
    },
  ],
  recursos: [
    {
      titulo: "Sentencia completa",
      texto: "Lee el fallo de la Audiencia Provincial de Madrid que ratifica la sentencia (PDF).",
      href: "/uploads/2026/04/Sentencia_Apelacion_AEVTJ_borrado.pdf",
      etiqueta: "Leer PDF",
    },
    {
      titulo: "Asistencia psicológica",
      texto: "Si te sientes identificado y necesitas ayuda, contáctanos para ser derivado a profesionales expertos.",
      href: "/contacto/",
      etiqueta: "Contactar",
    },
  ],
  fuentes: [
    { etiqueta: "Leer la sentencia completa (PDF)", href: "/uploads/2026/04/Sentencia_Apelacion_AEVTJ_borrado.pdf" },
    { etiqueta: "El País", href: "https://elpais.com" },
    { etiqueta: "ABC", href: "https://www.abc.es/sociedad/audiencia-provincial-madrid-avala-pueda-calificar-secta-20260421133553-nt.html" },
    { etiqueta: "elDiario.es", href: "https://www.eldiario.es/sociedad/justicia-avala-llame-secta-destructiva-testigos-jehova_1_13158958.html" },
    { etiqueta: "Público", href: "https://www.publico.es/politica/tribunales/audiencia-madrid-confirma-llamar-secta-destructiva-testigos-jehova-delito.html" },
    { etiqueta: "The Objective", href: "https://theobjective.com/espana/tribunales/2026-04-21/audiencia-testigos-jehova-secta/" },
    { etiqueta: "EcoAvant", href: "https://ecoavant.com" },
    { etiqueta: "Le Monde", href: "https://www.lemonde.fr/international/article/2026/04/21/en-espagne-la-justice-autorise-a-qualifier-les-temoins-de-jehovah-de-secte-destructrice-au-nom-de-la-liberte-d-expression_6681996_3210.html" },
    { etiqueta: "Tribune de Genève", href: "https://www.tdg.ch" },
    { etiqueta: "Blick", href: "https://www.blick.ch" },
    { etiqueta: "Bluewin", href: "https://www.bluewin.ch/fr/infos/faits-divers/espagne-les-t-moins-de-j-hovah-qualifi-s-de-secte-destructrice-3200289.html" },
    { etiqueta: "SWI Swissinfo", href: "https://www.swissinfo.ch" },
    { etiqueta: "Nachrichten.es", href: "https://nachrichten.es/gericht-in-madrid-akzeptiert-das-jehovas-zeugen-als-zerstoererische-sekte-und-ihre-anhaenger-als-opfer-bezeichnet-werden-koennen/" },
    { etiqueta: "JZ Help e.V.", href: "https://jz.help/spanien-jehovas-zeugen-verklagen-opferverein-und-verlieren/" },
    { etiqueta: "Orthodox Times", href: "https://orthodoxtimes.com/spain-justice-recognises-the-right-to-describe-jehovahs-witnesses-as-a-destructive-cult/" },
    { etiqueta: "Inquirer", href: "https://globalnation.inquirer.net/319348/spanish-court-rules-jehovahs-witnesses-can-be-called-destructive-sect" },
    { etiqueta: "Vanguard", href: "https://www.vanguardngr.com/2026/04/spanish-court-rules-jehovahs-witnesses-can-be-called-destructive-sect/" },
    { etiqueta: "The Nigeria Lawyer", href: "https://thenigerialawyer.com/spanish-court-rules-jehovahs-witnesses-can-be-called-a-destructive-sect-in-unprecedented-decision/" },
    { etiqueta: "Seneweb", href: "https://www.seneweb.com/en/news/International/jehovahs-witnesses-can-be-classified-as-a-destructive-sect-according-to-the-spanish-justice-system_n_490230.html" },
    { etiqueta: "La Jornada", href: "https://www.jornada.com.mx/noticia/2026/04/21/mundo/espana-avala-el-derecho-a-calificar-a-testigos-de-jehova-de-secta-destructiva" },
    { etiqueta: "Diario Las Américas", href: "https://www.diariolasamericas.com/mundo/la-justicia-espana-reconoce-la-libertad-expresion-criticar-los-testigos-jehova-n5394109" },
  ],
};

export default noticia;
