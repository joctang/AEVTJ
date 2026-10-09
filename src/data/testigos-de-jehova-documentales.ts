// Contenido de /testigos-de-jehova/documentales/.
// Fuente editorial: 06_Contenido/testigos-de-jehova__documentales/BORRADOR.md.
// Confirmar la reproducción desde España antes de afirmar que una obra se puede ver.

export type Obra = {
  id: string;
  titulo: string;
  tituloExtra?: string;
  anio: string;
  formato: string;
  origen: string;
  arte?: string;
  portada?: {
    src: string;
    alt: string;
    credito: string;
    fuente: string;
    ancho?: number;
    alto?: number;
  };
  descripcion: string;
  fuentes: { href: string; etiqueta: string }[];
  accion: { href: string; etiqueta: string };
  contexto?: { href: string; etiqueta: string };
};

export type Grupo = {
  id: string;
  corto: string;
  titulo: string;
  estado: "es" | "internacional";
  etiqueta?: string;
  intro?: string;
  obras: Obra[];
};

export const intro = {
  titulo: "Documentales y reportajes sobre los Testigos de Jehová",
  tituloSeo: "Documentales sobre los Testigos de Jehová",
  descripcion:
    "Documentales y reportajes sobre los Testigos de Jehová: de qué trata cada obra, dónde consultar su ficha y qué sabemos sobre verla desde España.",
  revisado: "9 de octubre de 2026",
  revisadoIso: "2026-10-09",
  imagen: {
    src: "/uploads/2026/10/tdj-documentales-pantalla-hilo-1536.webp",
    alt: "Ilustración geométrica de varios fotogramas abstractos unidos por un hilo lima; no representa una obra concreta.",
  },
  entradilla:
    "Aquí reunimos documentales y reportajes sobre los Testigos de Jehová: de qué trata cada obra y dónde consultar su ficha o verla. Indicamos cuándo la plataforma confirma su disponibilidad en España y cuándo solo podemos enlazar una referencia.",
};

export const grupos: Grupo[] = [
  {
    id: "en-espana",
    corto: "Documentales españoles",
    titulo: "Documentales y reportajes españoles",
    estado: "es",
    etiqueta: "España",
    intro:
      "Estas producciones aparecen en catálogos españoles. Comprueba el plan o la suscripción que exige cada servicio antes de reproducirlas.",
    obras: [
      {
        id: "sobrevivir-al-paraiso",
        titulo: "Sobrevivir al Paraíso: más allá de los Testigos de Jehová",
        anio: "2026",
        formato: "Docuserie · 3 episodios",
        origen: "España · HBO Max / Movistar Plus",
        arte: "paraiso",
        portada: {
          src: "/uploads/2026/10/sobrevivir-al-paraiso-portada-movistar-plus.jpg",
          alt: "Portada de Sobrevivir al Paraíso: un hombre sostiene una Biblia ante un fondo nuboso; el título de la docuserie aparece en amarillo.",
          credito: "Portada: Movistar Plus+",
          fuente: "https://www.movistarplus.es/documentales/sobrevivir-al-paraiso-mas-alla-de-los-testigos-de-jehova/ficha?id=4242958&tipo=E",
        },
        descripcion:
          "Docuserie española de tres episodios, dirigida por Pablo Aguinaga y producida por Boxfish. Reúne relatos de antiguos miembros y aborda sus experiencias dentro de la organización y tras dejarla. Movistar Plus muestra la ficha y señala que está incluida en determinados packs; consulta las condiciones vigentes antes de contratar.",
        fuentes: [
          {
            href: "https://press-spain.max.com/post/el-documental-original-sobrevivir-al-paraiso-mas-alla-de-los-tes",
            etiqueta: "Nota de prensa de HBO Max",
          },
          {
            href: "https://tv.apple.com/es/show/sobrevivir-al-paraiso-mas-alla-de-los-testigos-de-jehova/umc.cmc.1t2qiwe7y9hljnar4rfp887g4",
            etiqueta: "Ficha de Apple TV España",
          },
    
        ],
        accion: {
          href: "https://www.movistarplus.es/documentales/sobrevivir-al-paraiso-mas-alla-de-los-testigos-de-jehova/ficha?id=4242958&tipo=E",
          etiqueta: "Consultar en Movistar Plus",
        },
        contexto: {
          href: "/noticias/documental-hbo/",
          etiqueta: "Noticia sobre el estreno de HBO",
        },
      },
      {
        id: "hijos-del-fin-del-mundo",
        titulo: "Hijos del fin del mundo",
        anio: "2026",
        formato: "Docuserie · 3 episodios",
        origen: "España · Movistar Plus",
        arte: "hijos",
        portada: {
          src: "/uploads/2026/10/hijos-del-fin-del-mundo-poster-movistar-plus.jpg",
          alt: "Póster de Hijos del fin del mundo: un hombre con traje sostiene una Biblia con una cruz dorada sobre un fondo azul oscuro, con el título de la docuserie y el logotipo de Movistar Plus+.",
          credito: "Póster: Movistar Plus+ · vía TMDB",
          fuente: "https://www.movistarplus.es/documentales/hijos-del-fin-del-mundo/ficha?id=4264520&tipo=E",
          ancho: 517,
          alto: 750,
        },
        descripcion:
          "Docuserie de tres episodios centrada en Becky Rubio, que creció como Testigo de Jehová y dejó la organización, y en su pareja, Danny Boy-Rivera. Los capítulos —«Mierda, he crecido en una secta», «Jehová S.L.» y «¡Despertad!»— acompañan a la pareja en un viaje desde España hasta Estados Unidos para explorar su historia y la comunidad. Movistar Plus mantiene las fichas y señala que está incluida en determinados packs; comprueba el plan vigente.",
        fuentes: [
          {
            href: "https://www.movistarplus.es/comunicacion/notas-de-prensa/michael-jackson-kenny-dalglish-el-proximo-eclipse-solar-y-el-desenmascaramiento-de-criminales-de-guerra-en-infiltrada-en-siria-estrenos-documentales-que-llegan-en-agosto-a-movistar-plus/",
            etiqueta: "Nota de prensa y materiales gráficos de Movistar Plus+",
          },
          {
            href: "https://www.movistarplus.es/documentales/hijos-del-fin-del-mundo/mierda-he-crecido-en-una-secta/ficha?id=4264521&tipo=E",
            etiqueta: "Episodio 1 · Mierda, he crecido en una secta",
          },
          {
            href: "https://www.movistarplus.es/documentales/hijos-del-fin-del-mundo/jehova-s-l/ficha?id=4264522&tipo=E",
            etiqueta: "Episodio 2 · Jehová S.L.",
          },
          {
            href: "https://www.movistarplus.es/documentales/hijos-del-fin-del-mundo/despertad/ficha?id=4264523&tipo=E",
            etiqueta: "Episodio 3 · ¡Despertad!",
          },
        ],
        accion: {
          href: "https://www.movistarplus.es/documentales/hijos-del-fin-del-mundo/ficha?id=4264520&tipo=E",
          etiqueta: "Consultar la serie en Movistar Plus",
        },
      },
      {
        id: "equipo-investigacion",
        titulo: "La vida como testigo de Jehová",
        tituloExtra: "Equipo de Investigación · laSexta",
        anio: "2019",
        formato: "Reportaje de investigación · televisión",
        origen: "España · laSexta / atresplayer",
        portada: {
          src: "/uploads/2026/10/equipo-investigacion-portada-lasexta.jpg",
          alt: "Imagen promocional del reportaje «La vida como testigo de Jehová» de Equipo de Investigación (laSexta).",
          credito: "Imagen: laSexta (Atresmedia)",
          fuente: "https://www.lasexta.com/programas/equipo-investigacion/noticias/la-vida-como-testigo-de-jehova-pacto-de-sangre-comites-judiciales-y-kits-para-el-fin-del-mundo_201907205d3361970cf2c80663d9dcc1.html",
          ancho: 1280,
          alto: 720,
        },
        descripcion:
          "Reportaje emitido en 2019 por Equipo de Investigación. La investigación trató los comités judiciales, las transfusiones de sangre, la relación con los hospitales y la preparación para el fin del mundo; también entrevistó a una antigua miembro. laSexta conserva una página con información y fragmentos, y Atresplayer mantiene una ficha del episodio. No hemos podido comprobar desde aquí la reproducción del programa completo ni las condiciones de acceso actuales.",
        fuentes: [
          {
            href: "https://www.atresplayer.com/lasexta/programas/equipo-de-investigacion/temporada-10/testigos_5c81529a7ed1a8ab2cbd888e",
            etiqueta: "Episodio en atresplayer",
          },
          {
            href: "https://www.movistarplus.es/entretenimiento/equipo-de-investigacion-t10/testigos-de-jehova/ficha?tipo=E&id=1636057",
            etiqueta: "Ficha en Movistar Plus",
          },
        ],
        accion: {
          href: "https://www.atresplayer.com/lasexta/programas/equipo-de-investigacion/temporada-10/testigos_5c81529a7ed1a8ab2cbd888e",
          etiqueta: "Consultar en atresplayer",
        },
        contexto: {
          href: "/testigos-de-jehova/sangre/",
          etiqueta: "Contexto: la postura sobre la sangre",
        },
      },
      {
        id: "expulsados",
        titulo: "Expulsados de los Testigos de Jehová",
        anio: "2025",
        formato: "Documental · 28 min",
        origen: "España · EL PAÍS",
        arte: "expulsados",
        portada: {
          src: "/uploads/2026/10/expulsados-portada-el-pais.jpg",
          alt: "Carátula del documental «Expulsados de los Testigos de Jehová» de EL PAÍS: una fotografía antigua de grupo con un rostro marcado con un círculo y el título sobre una banda de papel rasgado.",
          credito: "Imagen: EL PAÍS",
          fuente: "https://elpais.com/videos/2025-09-26/documental-expulsados-de-los-testigos-de-jehova.html",
          ancho: 1280,
          alto: 720,
        },
        descripcion:
          "Documental de 28 minutos con testimonios de seis personas que dejaron la organización o fueron expulsadas. Sus relatos abordan, entre otros temas, el ostracismo, la expulsión y el efecto de la ruptura de vínculos. EL PAÍS ofrece el vídeo a sus suscriptores Premium.",
        fuentes: [
          {
            href: "https://elpais.com/television/2025-09-26/el-pais-estrena-expulsados-de-los-testigos-de-jehova-un-documental-inedito-con-testimonios-sobre-las-consecuencias-de-dejar-la-congregacion.html",
            etiqueta: "Presentación del documental en EL PAÍS",
          },
        ],
        accion: {
          href: "https://elpais.com/videos/2025-09-26/documental-expulsados-de-los-testigos-de-jehova.html",
          etiqueta: "Ver en EL PAÍS",
        },
        contexto: {
          href: "/noticias/documental-expulsados-de-los-testigos-de-jehova-el-pais/",
          etiqueta: "Noticia sobre el documental",
        },
      },
      {
        id: "el-preu-de-sortir",
        titulo: "El preu de sortir dels Testimonis de Jehovà",
        tituloExtra: "El precio de salir de los Testigos de Jehová",
        anio: "2025",
        formato: "Reportaje · 24 min",
        origen: "Cataluña · 3Cat",
        arte: "preu",
        portada: {
          src: "/uploads/2026/10/el-preu-de-sortir-portada-3cat.jpg",
          alt: "Imagen promocional del reportaje «El preu de sortir dels Testimonis de Jehovà», emitido en Tot es mou de 3Cat.",
          credito: "Imagen: 3Cat (CCMA)",
          fuente: "https://www.3cat.cat/3cat/el-preu-de-sortir-dels-testimonis-de-jehova/video/6363943/",
          ancho: 1200,
          alto: 675,
        },
        descripcion:
          "Reportaje de 24 minutos emitido en Tot es mou el 16 de octubre de 2025. Presenta testimonios sobre la salida de los Testigos de Jehová y la pérdida de contacto con familiares que algunas personas describen. Está hablado en catalán y no tiene subtítulos.",
        fuentes: [],
        accion: {
          href: "https://www.3cat.cat/3cat/el-preu-de-sortir-dels-testimonis-de-jehova/video/6363943/",
          etiqueta: "Ver en 3Cat",
        },
        contexto: {
          href: "/noticias/el-precio-de-salir-de-los-testigos-de-jehova-3cat-visibiliza-el-impacto-del-ostracismo-y-la-salud-mental/",
          etiqueta: "Contexto y cobertura de la AEVTJ",
        },
      },
    ],
  },
  {
    id: "internacionales",
    corto: "Referencias internacionales",
    titulo: "Documentales y reportajes internacionales",
    estado: "internacional",
    etiqueta: "Disponibilidad en España no confirmada",
    intro:
      "Incluimos obras de otros países con enlaces a sus fichas oficiales. En algunos casos el propio servicio indica que no las ofrece en España; en otros, no hemos podido confirmar si el vídeo funciona aquí o si tiene subtítulos en español.",
    obras: [
      {
        id: "the-witnesses",
        titulo: "The Witnesses",
        anio: "2020",
        formato: "Especial de investigación · 2 episodios",
        origen: "Estados Unidos · Oxygen",
        arte: "witnesses",
        portada: {
          src: "/uploads/2026/10/the-witnesses-portada-oxygen.jpg",
          alt: "Carátula del programa «The Witnesses» de Oxygen.",
          credito: "Carátula: Oxygen (NBCUniversal)",
          fuente: "https://www.oxygen.com/the-witnesses",
          ancho: 800,
          alto: 450,
        },
        descripcion:
          "Especial de investigación en dos episodios, con testimonios de cuatro antiguos Testigos de Jehová y una investigación periodística sobre las políticas de la organización ante denuncias de abuso sexual. Oxygen dirige los episodios a su aplicación, donde puede hacer falta autenticarse con un proveedor de televisión. La compañía no garantiza que sus contenidos estén disponibles fuera de Estados Unidos; no podemos confirmar que se reproduzcan desde España.",
        fuentes: [],
        accion: {
          href: "https://www.oxygen.com/the-witnesses",
          etiqueta: "Consultar en Oxygen",
        },
      },

      {
        id: "knocking",
        titulo: "Knocking",
        anio: "2006",
        formato: "Documental · estreno en PBS en 2007",
        origen: "Estados Unidos · PBS",
        arte: "knocking",
        portada: {
          src: "/uploads/2026/10/knocking-portada-pbs.jpg",
          alt: "Imagen de la película documental «Knocking», emitida en Independent Lens de PBS.",
          credito: "Imagen: PBS Independent Lens",
          fuente: "https://www.pbs.org/independentlens/documentaries/knocking/",
          ancho: 660,
          alto: 370,
        },
        descripcion:
          "Sigue a dos familias Testigos de Jehová y aborda su fe, las libertades civiles, la objeción de conciencia y las decisiones médicas. PBS conserva la ficha, pero su página indica que el vídeo dejó de estar disponible tras caducar en 2016.",
        fuentes: [
          {
            href: "https://www.pbs.org/video/independent-lens-knocking/",
            etiqueta: "Estado del vídeo en PBS",
          },
        ],
        accion: {
          href: "https://www.pbs.org/independentlens/documentaries/knocking/",
          etiqueta: "Consultar la ficha de PBS",
        },
      },
      {
        id: "witness-underground",
        titulo: "Witness Underground",
        anio: "2021",
        formato: "Documental",
        origen: "Estados Unidos",
        arte: "underground",
        portada: {
          src: "/uploads/2026/10/witness-underground-portada.webp",
          alt: "Póster del documental «Witness Underground».",
          credito: "Póster: WitnessUnderground.com",
          fuente: "https://www.witnessunderground.com/",
          ancho: 473,
          alto: 630,
        },
        descripcion:
          "Documental de Scott Homan que conecta su experiencia como antiguo Testigo de Jehová con la escena musical independiente de Minnesota. El sitio de la película enlaza a opciones de visionado, pero no hemos confirmado su acceso desde España ni los subtítulos disponibles.",
        fuentes: [],
        accion: {
          href: "https://www.witnessunderground.com/",
          etiqueta: "Consultar el sitio oficial",
        },
      },
      {
        id: "alemania-desde-dentro",
        titulo: "Alemania: los Testigos de Jehová, desde dentro",
        anio: "2024",
        formato: "Reportaje documental · 31 min",
        origen: "Alemania · ARTE / ZDF",
        arte: "alemania",
        portada: {
          src: "/uploads/2026/10/alemania-desde-dentro-portada-arte.jpg",
          alt: "Imagen del reportaje «Alemania: los Testigos de Jehová, desde dentro», de ARTE.",
          credito: "Imagen: ARTE",
          fuente: "https://www.arte.tv/es/videos/111748-012-A/arte-regards/",
          ancho: 1200,
          alto: 675,
        },
        descripcion:
          "Reportaje de ARTE/ZDF sobre la vida cotidiana de miembros en Alemania, con imágenes filmadas en la sede del país. Se puede ver desde España en alemán, con subtítulos en español.",
        fuentes: [],
        accion: {
          href: "https://www.arte.tv/es/videos/111748-012-A/arte-regards/",
          etiqueta: "Consultar la ficha de ARTE",
        },
      },
      {
        id: "jehovah-van-god-los",
        titulo: "Jehovah: Van God Los",
        anio: "2024",
        formato: "Docuserie · 3 partes",
        origen: "Países Bajos · Videoland",
        arte: "van-god-los",
        portada: {
          src: "/uploads/2026/10/jehovah-van-god-los-portada-rtl.jpg",
          alt: "Imagen promocional de la docuserie «Jehovah: Van God Los», de Videoland (Países Bajos).",
          credito: "Imagen: RTL / Videoland",
          fuente: "https://www.rtl.nl/programma/5438417/jehovah-van-god-los",
          ancho: 1200,
          alto: 675,
        },
        descripcion:
          "Docuserie neerlandesa de tres partes sobre la vida de antiguos miembros y las experiencias que relatan dentro de la comunidad. RTL/Videoland presenta testimonios y entrevistas a expertos, y señala que pidió una respuesta a la organización. La ficha oficial existe, pero no hemos confirmado acceso legal desde España ni subtítulos en español.",
        fuentes: [],
        accion: {
          href: "https://www.rtl.nl/programma/5438417/jehovah-van-god-los",
          etiqueta: "Consultar la ficha de RTL",
        },
      },
      {
        id: "guds-utvalde",
        titulo: "Guds utvalde",
        tituloExtra: "episodio 2, «Jehovas vitner» · Brennpunkt · NRK",
        anio: "2020",
        formato: "Documental · 54 min",
        origen: "Noruega · NRK",
        portada: {
          src: "/uploads/2026/10/guds-utvalde-portada-nrk.jpg",
          alt: "Imagen del documental «Guds utvalde: Jehovas vitner» del programa Brennpunkt de la NRK.",
          credito: "Imagen: NRK",
          fuente: "https://tv.nrk.no/serie/brennpunkt-guds-utvalde/sesong/1/episode/MDDP11000720",
          ancho: 1200,
          alto: 675,
        },
        descripcion:
          "Episodio de Brennpunkt emitido por NRK en 2020. Examina el sistema de justicia interna de los Testigos de Jehová en Noruega, las expulsiones y el tratamiento de denuncias, con testimonios de antiguos miembros. Tras la emisión, la autoridad noruega de protección de datos abrió un expediente relacionado con la comunidad. La ficha permanece en NRK TV; no hemos comprobado su reproducción desde España ni subtítulos en español.",
        fuentes: [
          {
            href: "https://www.nrk.no/dokumentar/datatilsynet-opnar-sak-mot-jehovas-vitner-etter-brennpunkt-dokumentar-1.15377099",
            etiqueta: "NRK: expediente del Datatilsynet tras el documental",
          },
        ],
        accion: {
          href: "https://tv.nrk.no/serie/brennpunkt-guds-utvalde/sesong/1/episode/MDDP11000720",
          etiqueta: "Consultar la ficha de NRK",
        },
      },
      {
        id: "bearing-witness",
        titulo: "Bearing Witness",
        tituloExtra: "Four Corners · ABC",
        anio: "2021",
        formato: "Reportaje de investigación",
        origen: "Australia · ABC",
        portada: {
          src: "/uploads/2026/10/bearing-witness-portada-abc.jpg",
          alt: "Imagen del reportaje «Bearing Witness» del programa Four Corners de la ABC australiana.",
          credito: "Imagen: ABC (Australia)",
          fuente: "https://www.abc.net.au/news/2021-09-14/bearing-witness:-exposing-the-secretive-world-of/13541542",
          ancho: 1200,
          alto: 675,
        },
        descripcion:
          "Reportaje de Four Corners emitido por la ABC australiana en 2021. Investiga cómo se abordaron las denuncias de abuso sexual a menores y recoge testimonios de antiguos miembros sobre las prácticas internas y la disciplina. La ABC publicó también las respuestas de la organización a las preguntas del programa. ABC iview conserva la ficha del episodio; el servicio está dirigido a Australia y no hemos confirmado la reproducción desde España.",
        fuentes: [
          {
            href: "https://www.abc.net.au/news/2021-09-13/jehovah-witnesses-child-abuse-four-corners-investigations/100444320",
            etiqueta: "Cobertura de la ABC sobre la investigación",
          },
          {
            href: "https://www.abc.net.au/news/2021-09-14/bearing-witness:-exposing-the-secretive-world-of/13541542",
            etiqueta: "Respuestas de la organización a Four Corners",
          },
        ],
        accion: {
          href: "https://iview.abc.net.au/show/four-corners/series/2021/video/NC2103H031S00",
          etiqueta: "Consultar en ABC iview",
        },
      },
      {
        id: "le-silence-des-anciens",
        titulo: "Le silence des anciens",
        tituloExtra: "Enquête · Radio-Canada",
        anio: "2017",
        formato: "Reportaje de investigación",
        origen: "Canadá (Quebec) · Radio-Canada",
        portada: {
          src: "/uploads/2026/10/le-silence-des-anciens-portada-radio-canada.jpg",
          alt: "Imagen del reportaje «Le silence des anciens» del programa Enquête de Radio-Canada.",
          credito: "Imagen: Radio-Canada",
          fuente: "https://ici.radio-canada.ca/tele/enquete/site/segments/reportage/38171/temoins-jehovah-agression-victime-pasquale-turbide",
          ancho: 640,
          alto: 360,
        },
        descripcion:
          "Reportaje de Enquête emitido en 2017 sobre denuncias de agresiones sexuales en congregaciones de Quebec y el proceso judicial posterior. Radio-Canada publicó un seguimiento en 2019 y conserva ambas páginas; no hemos confirmado la reproducción desde España.",
        fuentes: [
          {
            href: "https://ici.radio-canada.ca/tele/enquete/site/episodes/425520/",
            etiqueta: "Seguimiento emitido en 2019",
          },
        ],
        accion: {
          href: "https://ici.radio-canada.ca/tele/enquete/site/segments/reportage/38171/temoins-jehovah-agression-victime-pasquale-turbide",
          etiqueta: "Consultar en Radio-Canada",
        },
      },
    ],
  },
];

export const antesDeElegir = {
  id: "antes-de-elegir",
  corto: "Antes de elegir",
  titulo: "Antes de elegir un documental",
  parrafos: [
    "Cada obra tiene un enfoque propio: puede seguir a miembros activos, recoger testimonios de antiguos miembros o tratar una investigación concreta. Ninguna representa por sí sola todas las experiencias de quienes son o han sido Testigos de Jehová.",
    "Separamos la descripción que ofrece el medio de los testimonios que aparecen en pantalla y de los hechos que pueden contrastarse con otras fuentes. El acceso depende del territorio, el catálogo y la suscripción; consulta el servicio antes de contratarlo.",
  ],
};

export const preguntas = [
  {
    pregunta: "¿Dónde puedo ver documentales sobre los Testigos de Jehová?",
    respuesta:
      "En Movistar Plus figuran las docuseries Sobrevivir al Paraíso e Hijos del fin del mundo. También puedes ver Expulsados, de EL PAÍS, y El preu de sortir, de 3Cat. Este último está hablado en catalán y no tiene subtítulos. EL PAÍS ofrece su documental completo a suscriptores Premium. Algunas plataformas pueden pedir iniciar sesión o tener una suscripción.",
  },
  {
    pregunta: "¿Qué documental sobre los Testigos de Jehová puedo ver en España?",
    respuesta:
      "El catálogo reúne docuseries y reportajes de España, además de producciones internacionales. En The Witnesses, Oxygen ofrece la información de los episodios y los dirige a su aplicación, pero no garantiza disponibilidad fuera de Estados Unidos; no podemos confirmar la reproducción desde España.",
  },
  {
    pregunta: "¿Hay películas de ficción sobre los Testigos de Jehová?",
    respuesta:
      "Sí. También existen películas de ficción con personajes Testigos de Jehová, pero son obras distintas de los documentales y no forman parte de este catálogo.",
  },
];
