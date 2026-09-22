# Prompts para Sonnet — rediseño /legal/

Ejecútalos EN ORDEN, uno por mensaje. Cada uno es autónomo.
Contexto común: proyecto Astro en `astro-site/`, manual de diseño en `MANUAL-ESTILO.md`
(leerlo SIEMPRE antes de tocar nada), propuesta en `REDISENO-LEGAL.md`. Como referencia de
implementación ya terminada tienes la guía: `src/pages/guia-para-salir-de-los-testigos-de-jehova.astro`,
`src/data/guia-salida.ts` y `src/styles/guia-salida.css`. Dev server: `astro dev --background`.

**Aviso que aplica a los 6 prompts:** esta página documenta procedimientos judiciales
reales. No reescribas, resumas ni interpretes ningún hecho procesal; no añadas fechas,
importes, resultados ni nombres que no estén literalmente en el contenido actual. Si un
dato falta, déjalo vacío y avísame en tu respuesta.

---

## PROMPT 1 — Extraer el expediente a datos estructurados

Lee `MANUAL-ESTILO.md` y `REDISENO-LEGAL.md`.

El contenido de `/legal/` vive como HTML de Elementor en `src/content/pages/legal.json`
(campo `html`) y se renderiza con la ruta genérica `src/pages/[...slug].astro` →
`src/components/ArticleContent.astro`, dentro de un `.prose` de 736px. No es un artículo:
es un expediente. Quiero sacarlo a datos.

1. Crea `src/data/legal.ts` con tipos explícitos:
   - `intro`: { kicker, titulo ("Demandas, juicios y sentencias judiciales"), entradilla
     (el párrafo de 2021 sobre las 4 demandas civiles desde Ajalvir), notaProteccionDatos
     (la frase sobre la edición del material por la ley de protección de datos),
     heroImage, actualizado }
   - `casos`: array de 4 objetos { id, demandado, rol, descripcion,
     estado: { etiqueta, tono: 'favorable' | 'enProceso' | 'recurrido' },
     situacion: string[] (las frases "Situación: …" tal cual),
     hitos: { fecha, texto }[] (sólo el caso AEVTJ tiene los 4 hitos fechados; los demás
     van con `hitos: []`),
     documentos: { etiqueta, href }[] }
     → casos: AEVTJ, Israel Flórez, Enrique Carmona, Gabriel Pedrero, en ese orden.
   - `audiosJuicio`: { titulo: "Audios del Juicio Oral", href: canal de YouTube }.
     **Ojo**: en el HTML original ese enlace tiene el texto de ancla vacío, así que ahora
     mismo es invisible e inaccesible. Dale un texto visible.
   - `internacionales`: array de 4 { n, pais, anio, resumen, href } (California/EE.UU.,
     Montana/EE.UU., Noruega, Nueva York/EE.UU.). Separa país y año, que hoy van pegados
     ("EE.UU. (Montana)2024").
   - Descarta el `<h3>&nbsp;</h3>` vacío de la sección internacional.
2. Los 8 PDFs están en `public/uploads/2023/12/` y `public/uploads/2026/04/`. Añade un
   helper que, **en tiempo de build**, lea el tamaño real de cada archivo con
   `fs.statSync` y lo formatee ("1,3 MB"). No hardcodees tamaños. Si un archivo no existe,
   que el helper devuelva `null` y lo avise por consola en vez de romper el build.
3. Añade `"legal"` a `excludedSlugs` en `src/pages/[...slug].astro` y crea
   `src/pages/legal.astro`, de momento con estructura semántica sin estilos elaborados.
4. Verifica que `/legal/` responde, que están los 14 enlaces originales y que ningún
   párrafo se ha perdido. Enséñame el resultado y dime si algún dato quedó incompleto.

---

## PROMPT 2 — Hero documental y marcador de estado

Lee `MANUAL-ESTILO.md`. Trabaja en `src/pages/legal.astro` y crea `src/styles/legal.css`
(importado sólo desde esa página). Reutiliza los patrones de `src/styles/guia-salida.css`
(`guia-kicker`, `guia-pill`) extrayéndolos a clases compartidas si te parece más limpio,
pero **no cambies el aspecto de la guía**.

1. **Hero** con la foto actual `/uploads/2025/10/nmcr_downloaded_image.png` a sangre y
   degradado navy `#122c33` 60% → 75% → sólido, altura ~62vh (más contenida que la guía:
   esta página es documental, no narrativa). Dentro:
   - kicker "Transparencia · Vía judicial" con punto teal.
   - H1 Lora **400 y en minúsculas**, `clamp(2.6rem, 5vw, 4.6rem)`,
     `letter-spacing:-.045em`. Hoy está en `uppercase`, contra el manual §2.
   - entradilla de 17px, máximo 640px.
   - meta: "4 demandas en España · 4 casos internacionales · Actualizado <fecha>".
   - una pill sólida lima "Descargar sentencias ↗" que ancle al primer caso.
2. **Marcador de estado** justo debajo, sobre crema: rejilla de 4 casillas (4 col ≥1024px,
   2 ≥640px, 1 en móvil), radio 28px, fondo `#fbfdf5`, borde `1px #dce3cd`. Cada una:
   nombre del demandado en Lora, rol en DM Sans 12px, y una **insignia de estado** tipo
   píldora con punto delante:
   - `favorable` → fondo teal claro `#e2f2ea`, texto `#1f7a63`.
   - `enProceso` → fondo arena `#f3f3d8`, texto `#5b6934`.
   - `recurrido` → fondo crema con borde navy `#122c3333`, texto navy.
   El color no puede ser el único portador de la información: el texto de la insignia ya
   dice el estado. Enlazan al `#id` de su ficha.
3. **Bloque de contexto** tras el marcador: la entradilla larga en 2 columnas ≥900px, y la
   nota de protección de datos como aviso aparte (fondo `#edf5d7`, radio 22px, 14px).
4. Corrige el `<title>`: debe ser "Demandas, juicios y sentencias judiciales · AEVTJ", no
   "Legal · AEVTJ". Añade `description` propia.
5. Verifica a 1440 y 375px, consola limpia, capturas.

---

## PROMPT 3 — Fichas de caso con cronología y documentos

Lee `MANUAL-ESTILO.md`. Crea `src/components/CasoJudicial.astro` y úsalo para los 4 casos.

Hoy cada caso es un h3 seguido de párrafos y enlaces subrayados sueltos: no se distingue
un caso de otro ni se ve qué documento es qué. Quiero una ficha.

- Tarjeta de ancho máximo 980px centrada, radio 28px, fondo `#fbfdf5`, borde `1px #dce3cd`,
  sombra `0 20px 50px #0f25371a`, padding `clamp(28px, 4vw, 52px)`. Separación de
  `clamp(28px, 4vw, 48px)` entre fichas, y `data-reveal` en cada una.
- **Cabecera**: "Contra <demandado>" en Lora `clamp(1.5rem, 2.6vw, 2.1rem)`, el rol debajo
  en DM Sans 13px color `#7c8a72`, y la insignia de estado alineada a la derecha (misma
  del prompt 2; extráela a un componente `EstadoBadge.astro` para no duplicarla). En móvil
  la insignia baja debajo del título.
- **Cronología** (sólo si el caso tiene `hitos`): lista vertical con línea discontinua
  `1px dashed #122c3333` a la izquierda, punto teal de 8px por hito, fecha en DM Sans 12px
  600 mayúsculas con `letter-spacing:.1em`, y el texto del hito en 15px. El último hito
  lleva el punto relleno en navy.
- **Situación**: cuando no hay hitos, los párrafos "Situación: …" van en un bloque con
  borde izquierdo teal de 3px.
- **Documentos**: lista de filas (no enlaces de texto). Cada fila: icono SVG de documento
  en navy, etiqueta en DM Sans 14px 500, a la derecha "PDF · <tamaño>" en 12px color
  `#7c8a72`, y flecha ↓ de descarga. Fila de 56px mínimo, radio 16px, hover 450ms con
  fondo `#f0f7dd` y la flecha desplazándose 2px hacia abajo. `download` en el atributo y
  `aria-label` completo del tipo "Descargar SENTENCIA 1ª instancia (PDF, 2,1 MB)".
  Para el caso de Israel Flórez el único "enlace" es `href="#"` con texto "En proceso": eso
  **no es un documento**, no lo pintes como fila descargable; ponlo como nota.
- **Audios del juicio oral** en la ficha de la AEVTJ: fila aparte con icono de reproducción
  y texto visible enlazando al canal de YouTube, `target="_blank" rel="noopener"` y
  mención de que abre en YouTube.
- Escribe "1ª" y "2ª" con ordinal correcto en las etiquetas (hoy pone "1a instancia").
- Verifica descargando dos PDFs distintos desde el navegador y comprueba que los tamaños
  mostrados coinciden con los reales. Capturas a 1440 y 375px.

---

## PROMPT 4 — Casos internacionales

Lee `MANUAL-ESTILO.md`. Crea la sección de juicios fuera de España en `src/pages/legal.astro`
(componente `CasoInternacional.astro` si lo ves conveniente).

- Cabecera de sección sobre fondo salvia `#edf5d7` con esquinas 44px: kicker "Contexto
  internacional" + H2 "Juicios fuera de España" (en minúsculas; hoy el original está en
  minúsculas forzadas "juicios fuera de españa" — corrige la capitalización: sólo la
  inicial y los nombres propios) + el párrafo introductorio tal cual.
- Rejilla de 4 tarjetas (2 columnas ≥900px, 1 en móvil): radio 28px, fondo `#fbfdf5`,
  borde `1px #dce3cd`. Cada una:
  - insignia con el año en la esquina superior, DM Sans 12px 600, fondo navy, texto crema.
  - **país como título** en Lora `clamp(1.3rem, 2.2vw, 1.7rem)` ("Estados Unidos ·
    California", "Estados Unidos · Montana", "Noruega", "Estados Unidos · Nueva York").
    Hoy el país va en un `<span>` pegado al año y el número en un `<p>` suelto.
  - resumen en 15px `line-height:1.85` color `#435043`, con los `<strong>` en navy.
  - al pie, enlace "Más información" (con tilde; hoy pone "Mas información") con icono de
    enlace externo, `target="_blank" rel="noopener"` y `aria-label` que indique el destino.
    Limpia el `?utm_source=chatgpt.com` de la URL de findlaw.
- Hover 450ms: `translateY(-6px)` y sombra mayor. `data-reveal` escalonado 150ms.
- Verifica a 1440 y 375px y dame capturas.

---

## PROMPT 5 — Cierre, aviso legal y navegación

Lee `MANUAL-ESTILO.md`. Sigue en `/legal/`.

1. **Aviso de anonimizado** antes del cierre: tarjeta crema con borde teal de 4px a la
   izquierda que recoja la frase sobre la edición del material para cumplir la ley de
   protección de datos, más una línea indicando que los documentos se publican tal como
   fueron presentados o resueltos. No inventes fórmulas legales: si quieres añadir algo
   más allá de lo que ya dice el contenido, propónmelo en tu respuesta y no lo escribas.
2. **Cierre** sobre navy `#0f2537`, esquinas 40px: H2 Lora "La defensa jurídica se sostiene
   entre todos" (o similar, pero propónmelo antes si te alejas del tono), un párrafo breve
   y dos pills: "Denuncia tu caso" (lima, a `/contacto`) y "Hazte socio" (navy con hover
   teal, a `/hazte-socio`).
3. **Índice sticky de casos** (≥1280px), igual que el rail de la guía pero más corto: los
   4 casos españoles más "Juicios fuera de España". Reutiliza el script del rail de
   `src/pages/guia-para-salir-de-los-testigos-de-jehova.astro`; si vas a duplicarlo,
   extráelo antes a `src/scripts/rail.ts` y úsalo desde las dos páginas, sin romper la guía.
4. **Fecha de actualización** visible al final de la sección de casos españoles:
   "Última actualización: <fecha>". Sácala del hito más reciente del expediente
   (abril 2026), no de la fecha de build.
5. Verifica y dame capturas.

---

## PROMPT 6 — Pulido final, accesibilidad, SEO y rendimiento

Lee `MANUAL-ESTILO.md` completo y revisa `/legal/` de punta a punta.

1. **Coherencia con el sistema**: audita colores, radios (28/32/44/100px), sombras navy
   translúcidas y tiempos (450ms hover, 1500ms reveal). Lista lo que corrijas.
2. **Accesibilidad**: un solo `<h1>`; jerarquía h2/h3 correcta; ningún enlace con texto
   vacío o genérico (hoy hay cuatro "Mas información" idénticos y un ancla vacía: da a cada
   uno un `aria-label` que identifique el caso); contraste AA en las insignias de estado;
   el estado nunca comunicado sólo por color; foco visible; recorrido completo con teclado;
   objetivos táctiles ≥44px; `prefers-reduced-motion` desactiva reveals y hovers animados.
3. **Rendimiento**: `width`/`height` en la imagen del hero con `fetchpriority="high"`;
   confirma que `legal.css` no se carga en otras páginas (compara los `<link>` de
   `dist/legal/index.html` con los de `dist/index.html`).
4. **SEO**: `<title>` y `description` propios (no "Legal"), y JSON-LD. Para esta página usa
   `CollectionPage` con un `ItemList` de los casos; **no uses tipos de schema.org que
   impliquen un veredicto o una acusación** sobre personas concretas.
5. **Responsive**: 360, 768, 1024, 1280, 1440 y 1920px. Sin scroll horizontal. Comprueba
   que las etiquetas largas de documento ("DIFERENCIAS DEMANDA VS SENTENCIA 1ª instancia")
   no desbordan en móvil.
6. Ejecuta `npm run build` y confirma que compila sin errores ni warnings nuevos.
7. Resumen de lo corregido, lista de datos que hayan quedado incompletos y capturas.

---

## PROMPT 7 — Correcciones tras la revisión (21/09)

Lee `MANUAL-ESTILO.md`. La página ya está implementada y verificada; corrige sólo esto.

1. **Fila de documento en móvil**: a 375px, "Audios del Juicio Oral" parte en cuatro
   líneas porque `.legal-documento__meta` ocupa su espacio con `flex: 0 0 auto` y aplasta
   la etiqueta. Por debajo de 640px, apila etiqueta y meta en dos líneas dentro de la fila
   (`flex-direction: column; align-items: flex-start`) manteniendo el icono a la izquierda
   y los 44px de objetivo táctil.
2. **Espacio muerto a partir de 1700px**: el bloque `@media (min-width:1280px) and
   (max-width:1699px)` desplaza el contenido a la derecha para dejar sitio al rail, pero
   por encima de 1700px el rail y el contenido vuelven a centrarse y queda mucho vacío a
   la derecha. Revisa que la transición entre los dos rangos no dé un salto brusco.
3. **[YA CORREGIDO, no lo repitas]** El primer caso internacional estaba etiquetado como
   "Estados Unidos · Pennsylvania (2025)" en el contenido heredado, pero el resumen y el
   enlace corresponden a *Conti v. Watchtower Bible & Tract Society of New York*, resuelto
   por el Tribunal de Apelación de California (1º Distrito) el 13/04/2015. Ya está
   corregido a "Estados Unidos · California" y 2015 en `src/data/legal.ts`, con la
   justificación en un comentario. Los otros tres casos (Montana 2024, Noruega 2025,
   Nueva York 2024) se han verificado contra sus fuentes y son correctos.
