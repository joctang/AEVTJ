# Rediseño premium — /legal/ (Demandas, juicios y sentencias judiciales)

## Diagnóstico

Igual que la guía: HTML de Elementor en `src/content/pages/legal.json` (9,8 KB) volcado
por `src/pages/[...slug].astro` → `ArticleContent.astro` dentro de un `.prose` de 736px.
Pero aquí el problema es más grave, porque **el contenido no es un artículo: es un
expediente judicial** y se está presentando como prosa corrida.

Lo que hay realmente:

- **4 casos en España** (contra la AEVTJ, contra Israel Flórez, contra Enrique Carmona,
  contra Gabriel Pedrero), cada uno con su rol, su estado procesal y su hilo temporal.
- **8 PDFs** de demandas y sentencias, todos presentes en `public/uploads/` (de 122 KB a
  2,1 MB), publicados como **enlaces de texto subrayados indistinguibles entre sí**:
  "DEMANDA 1a instancia", "SENTENCIA 1a instancia", "INADMISION APEL. TRIBUNAL SUPREMO"…
- **4 casos internacionales** (California, Montana, Noruega, Nueva York) numerados 1-4 con
  país, año, resumen y "Mas información".

Fallos concretos:

1. **El estado de cada caso se esconde dentro de un párrafo.** "Situación: ganada por
   Enrique Carmona en la Audiencia Provincial de Madrid en 2024" es la información más
   importante de la página y tiene el mismo peso tipográfico que el resto.
2. **La cronología de la AEVTJ es un párrafo con `<br>`**: "2021 — Llega la demanda. / 2023,
   Diciembre — Gana la Asociación…". Es una línea de tiempo disfrazada de texto.
3. **Los 8 PDFs no parecen documentos**: sin icono, sin tamaño, sin instancia, sin fecha.
   Son la prueba documental de la asociación y no se ven como descargables.
4. **Enlace roto**: "Audios del Juicio Oral" apunta al canal de YouTube con **texto de
   ancla vacío** (`<a href="...youtube..."></a>`) — es invisible y además inaccesible.
5. Hay un `<h3>&nbsp;</h3>` vacío en la sección internacional.
6. Los casos internacionales van numerados con `<p>1</p>` sueltos, sin país visible como
   título ni jerarquía.
7. El `<title>` de la pestaña es "Legal · AEVTJ" — el H1 real es "Demandas, juicios y
   sentencias judiciales". Mal para SEO y para compartir.
8. Sin fecha de actualización, cuando es una página que cambia con cada resolución.
9. Sin resumen arriba: hay que leer toda la página para saber cómo van los juicios.

## Propuesta

Convertirla en el **dossier judicial de la asociación**: la página que un periodista, un
abogado o una víctima abre para saber en dos minutos cómo van los casos y descargar las
sentencias. Sobrio, documental, con la misma paleta y tipografía, pero con menos
decoración que la guía — aquí manda la credibilidad, no la emoción.

1. **Hero navy** con la foto actual: kicker "Transparencia · Vía judicial", H1 serif 400
   en minúsculas "Demandas, juicios y sentencias judiciales", entradilla de contexto y
   línea meta: "4 demandas en España · 4 casos internacionales · Actualizado abril 2026".
   Una pill "Descargar sentencias" que ancla al listado de documentos.
2. **Marcador de estado** (4 casillas sobre crema, justo bajo el hero): una por caso
   español, con el nombre y su estado en color semántico. De un vistazo se ve el balance.
   Los estados salen literalmente del texto, sin interpretar: *ganada en 2ª instancia*,
   *en proceso*, *ganada / apelación inadmitida*, *recurrida al Constitucional*.
3. **Bloque de contexto**: el párrafo de 2021 sobre las 4 demandas civiles desde Ajalvir,
   con una nota aparte sobre la edición de los documentos por protección de datos.
4. **Ficha por caso** (4 tarjetas grandes, ancho 980px): cabecera con el demandado y su
   rol en la asociación, insignia de estado, **línea de tiempo vertical** con los hitos
   fechados y, al pie, **las descargas como filas de documento**: icono de PDF, etiqueta
   de instancia, y tamaño real del archivo calculado en build desde `public/uploads`.
5. **Casos internacionales**: rejilla de 4 tarjetas con el país como título, el año como
   insignia, el resumen y un enlace externo claro. Con indicador de enlace saliente.
6. **Cierre**: aviso legal sobre el anonimizado y CTA doble a `/contacto` (denunciar) y
   `/hazte-socio` (sostener la defensa jurídica).

Igual que en la guía: extraer el contenido a `src/data/legal.ts`, crear ruta propia
`src/pages/legal.astro` y excluir el slug en `[...slug].astro`.

**Regla dura para esta página:** no se reescribe ni se resume ningún hecho procesal, no se
añaden fechas, importes ni resultados que no estén literalmente en el contenido actual, y
si un dato falta (p. ej. la fecha de un hito) se deja vacío y se avisa. Es una página con
consecuencias legales.
