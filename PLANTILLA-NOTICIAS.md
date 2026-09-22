# Plantilla de noticias — guía de migración

Guía de ejecución para normalizar las noticias importadas de WordPress al estilo único de
la web. **Una noticia por sesión.** El resultado es siempre un archivo de datos: la
maquetación ya está hecha y no se toca.

**Estado: 18 de 18 migradas y auditadas** (`npm run auditar:noticias` → 0 errores).

---

## Qué existe ya

| Archivo | Papel |
|---|---|
| `src/data/noticias/tipos.ts` | Anatomía canónica (`Noticia`, bloques, tipos auxiliares) |
| `src/data/noticias/entrevista-soraya-narez-el-intermedio-la-sexta.ts` | **Noticia de referencia.** Léela antes de migrar ninguna |
| `src/data/noticias/index.ts` | Registro automático: recoge los `*.ts` de la carpeta |
| `src/components/NoticiaArticulo.astro` | Plantilla visual. **No se modifica al migrar** |
| `src/styles/noticia.css` | Estilos de la plantilla. **No se modifican al migrar** |
| `src/pages/noticias/[slug].astro` | Ruta. Usa la plantilla si el slug está migrado; si no, el HTML viejo |
| `scripts/auditar-noticias.mjs` | **Auditoría automática.** `npm run auditar:noticias [slug]` |

**Migración progresiva:** basta con crear el archivo de datos. El registro lo detecta solo
(`import.meta.glob`), no hay que tocar la ruta ni el índice. Lo no migrado sigue
funcionando con el diseño heredado.

---

## Anatomía de una noticia

Todas las piezas se componen de estas partes. Las que el original no tenga **se omiten**.

1. **Cabecera** — foto de portada a sangre con degradado navy, banda de autoría y medio,
   H1 serif en minúsculas, entradilla y fecha.
2. **Cita de apertura** *(opcional)* — la frase que resume la pieza, en serif grande.
3. **Pieza audiovisual** *(opcional)* — `pieza`. Se incrusta si es de YouTube
   (`youtubeId`); si el medio no permite incrustar (RTVE Play, 3Cat, Cadena SER, Onda
   Cero…) se muestra una tarjeta con enlace (`enlaceExterno`). Se pueden dar **los dos**:
   se incrusta el vídeo y además se enlaza la ficha del medio.
   `formato: "audio"` cambia los textos de la interfaz a «Escuchar».
4. **Cuerpo + lateral** — secciones h2, párrafos, citas, listas e imágenes; a la derecha,
   cajas de `contexto` (cifras), `conceptos` (glosario), `intervinientes` (quién habla) y
   `perfil`. Si no hay ninguna, el texto se centra a 760px y no queda hueco.
5. **Recursos y apoyo** *(opcional)* — hasta 3 tarjetas con enlace.
6. **Fuentes + navegación** — enlaces al original, volver a noticias y CTA.
7. **Otras noticias** — 3 recientes. **Lo genera la plantilla**: no se incluye en los datos.

### Elegir la caja del lateral

| Contenido del original | Campo |
|---|---|
| Cifras, números de programa, minutos, importes | `contexto` (se pinta el valor en serif grande) |
| Glosario de términos, "claves del caso" | `conceptos` |
| Lista de personas con su cargo | `intervinientes` |
| Biografía del protagonista | `perfil` |

**No metas nombres de personas en `contexto`**: el valor se pinta como una cifra enorme en
serif y un nombre queda ridículo. Para eso está `intervinientes`.

---

## Prompt de ejecución

> Copia este bloque y sustituye `<SLUG>` por el archivo a migrar.

```
Lee `PLANTILLA-NOTICIAS.md`, `MANUAL-ESTILO.md`, `src/data/noticias/tipos.ts` y la noticia
de referencia `src/data/noticias/entrevista-soraya-narez-el-intermedio-la-sexta.ts`.

Migra la noticia `<SLUG>` a la plantilla canónica.

1. Lee el HTML heredado en `src/content/posts/<SLUG>.json` (campo `html`). Es markup de
   Elementor: divs sin clases, comentarios `<!-- ── -->` que marcan las partes, y bloques
   heredados de WordPress al final.

2. INVENTARIO DE ENCABEZADOS (obligatorio, antes de escribir nada). Lista TODOS los
   `<h1>`, `<h2>`, `<h3>` y `<h4>` del original, en orden, y di para cada uno si lo
   migras y a qué campo, o si lo descartas y por qué. Este paso no es opcional: es el que
   evita perder contenido. Pégalo en tu respuesta.

3. Decide el `titulo` con esta regla, en este orden:
   a. El titular editorial del original: el `<h1>` o el primer `<h2>` de la cabecera,
      cuando es una frase con contenido informativo.
   b. Si ese titular es en realidad una cita entrecomillada, va a `citaDestacada` y el
      `titulo` se redacta descriptivo.
   c. Si ese titular es un párrafo largo (>130 caracteres), no es un titular: úsalo como
      entradilla y redacta un `titulo` corto.
   d. Sólo si no hay ninguno, usa el `title` del JSON.
   NUNCA titules con el nombre del programa o del medio: eso va en `medio`, que ya se
   pinta en la banda superior. Si titulas con el programa, el mismo texto sale tres veces
   en la primera pantalla.

4. Si el titular editorial pasa a `titulo`, NO lo repitas dentro de la entradilla.

5. Crea `src/data/noticias/<SLUG>.ts` exportando `export const noticia: Noticia = {...}`
   (y `export default noticia`), siguiendo exactamente la forma de la noticia de
   referencia. El `slug` debe coincidir con el del JSON. Abre el archivo con un comentario
   de bloque con las notas de migración: qué recuperaste, qué descartaste y por qué.

6. NO toques `NoticiaArticulo.astro`, `noticia.css`, `tipos.ts`, `index.ts` ni la ruta.
   Si algo del contenido no cabe en la anatomía, dímelo en tu respuesta en vez de
   inventar un campo o un estilo nuevo.

7. Aplica las reglas de contenido y la lista de descartes de `PLANTILLA-NOTICIAS.md`.

8. Ejecuta `npm run auditar:noticias <SLUG>` hasta que dé 0 errores. Los avisos que dejes
   sin resolver, justifícalos en tu respuesta.

9. Verifica en el navegador (`astro dev --background`) a 1440 y 375px:
   - que la página usa la plantilla (existe `.noticia` en el DOM),
   - que la pieza carga de verdad si la hay,
   - que el titular no se repite en banda, H1 y tarjeta,
   - que no hay enlaces rotos ni recursos 404,
   - que no hay scroll horizontal.

10. Ejecuta `npm run build` y confirma que compila limpio.

11. Responde con: el inventario de encabezados del paso 2, qué descartaste, qué campos
    quedaron vacíos y qué dudas de contenido tienes.
```

---

## Reglas de contenido (no negociables)

- **No se inventa nada**: ni hechos, ni cifras, ni fechas, ni declaraciones, ni cargos.
  Todo sale del JSON original.
- **Las citas se transcriben literalmente.** No se añaden negritas ni énfasis que el
  original no tuviera: cambia el peso visual de una declaración ajena.
- **Los campos opcionales que el original no tenga, se omiten.** No se rellena un
  `conceptos` ni un `contexto` "para que quede bonito". Una noticia sin lateral es
  perfectamente válida: el texto se centra y queda bien.
- **La fecha se toma del JSON** (`date`), nunca la de la migración. Si el pie del original
  menciona la fecha de publicación en el medio, va en `fuentes`, no en `fecha`.
- Se puede **reescribir el titular y redactar la entradilla**, siempre sin añadir
  información que no esté en el cuerpo.
- Si detectas una **contradicción o un dato dudoso**, no lo corrijas: anótalo en tu
  respuesta. (Ya pasó en `/legal/` con un caso etiquetado con estado y año equivocados.)

## Qué se descarta siempre

Estos bloques vienen arrastrados de WordPress en casi todas las noticias y **no se migran**:

- **"Post populares"** con 6 tarjetas: está hardcodeado dentro del contenido, se queda
  obsoleto, y a menudo incluye la propia noticia. La plantilla genera "Otras noticias".
- **Caja de newsletter** y bloque **"¿Podemos ayudarte?"**: ya están en el footer.
- **"No hay comentarios"**, "Tags:", "Difunde esta noticia" y demás restos de WordPress.
- **Iconos sociales** sueltos al principio del `excerpt` y del HTML.
- **`<footer>` con "AEVTJ · victimasdetestigosdejehova.org"** o el copyright.
- Los **rótulos de sección que la plantilla ya pinta**: "Conceptos clave", "Recursos y
  apoyo", "Intervinientes", "Contexto", "¿Buscas apoyo o quieres colaborar?". Se descarta
  el rótulo, **no su contenido**: eso va al campo correspondiente.

## Trampas conocidas de la importación

- **`<iframe>` roto.** 4 de las 18 noticias tienen
  `src="data:image/svg+xml;base64,…"`: es un marcador de Elementor y **la pieza no se ve**.
  El identificador real suele estar en el enlace "Ver en YouTube" del bloque de recursos,
  en el enlace al medio, o en el `title=` del propio iframe. Recupéralo. Si no aparece por
  ningún lado, deja la pieza fuera y avísame: **no busques el vídeo por tu cuenta**.
- **Enlaces absolutos a producción.** Convierte
  `https://victimasdetestigosdejehova.org/loquesea/` en `/loquesea/`. Los enlaces a medios
  externos se dejan como están (y van con `externo: true` en los recursos).
- **Parámetros de rastreo** en las URLs (`?utm_source=…`, `?ssm=tw`): elimínalos.
- **Un titular que es el nombre del programa.** Ver el paso 3 del prompt.
- **País y año pegados** en algunos textos ("EE.UU. (Montana)2024"): sepáralos.
- **Títulos en mayúsculas**: pásalos a capitalización normal. El manual (§2) prohíbe las
  mayúsculas salvo en kickers.
- **Ordinales** "1a instancia" → "1ª instancia".
- **`&nbsp;` y `<br>` de maquetación**: se limpian. Los saltos de párrafo son párrafos.
- **Viñetas "•" escritas a mano** dentro de un `<p>`: son listas. Van a un bloque `lista`.
- **Marcas de tiempo tipo `[00:08:43]`** dentro del texto: si señalan el momento de la
  pieza, van a `pieza.minuto`; si son una referencia dentro de un párrafo, se dejan.

## Alt de las imágenes

Muchas imágenes vienen con `alt=""` o con el nombre del archivo. Escribe un `alt`
descriptivo de lo que se ve. La portada es decorativa respecto al titular, pero como es la
imagen principal de la pieza, descríbela igualmente.

---

## Auditoría automática

```bash
npm run auditar:noticias
```

Compara cada JSON original con su archivo de datos y detecta:

- **encabezados del original que desaparecieron** (contenido perdido),
- **el titular editorial no usado como `titulo`**,
- enlaces internos absolutos y parámetros de rastreo,
- campos obligatorios ausentes y `slug` que no coincide,
- iframes rotos sin recuperar y piezas de audio sin `formato: "audio"`.

Sale con código 1 si hay errores, así que sirve para CI. Para una sola:
`node scripts/auditar-noticias.mjs <slug>`.

**Avisos abiertos a día de hoy (revisados y aceptados):**

- `el-precio-de-salir-…-3cat-…`: el iframe roto del original sólo deja la pista
  `title="video 6363943"`; no hay URL recuperable en el contenido, así que la pieza se
  queda fuera y el vídeo se enlaza desde `recursos`. **Si la asociación tiene la URL de
  3Cat, se añade y el aviso desaparece.**
- `israel-florez-…-onda-cero`: el titular del original es una cita
  («Tengo mi vida de 2005 hacia atrás en un cajón cerrado»), que está en `citaDestacada`,
  y el `titulo` es descriptivo. Es el caso 3b de la regla de titulares.

## Comprobación final (para cada noticia)

- [ ] Inventario de encabezados hecho y pegado en la respuesta.
- [ ] `npm run auditar:noticias <slug>` → 0 errores.
- [ ] `.noticia` presente en el DOM (usa la plantilla, no el fallback).
- [ ] Un solo `<h1>`, en minúsculas serif, y no es el nombre del programa.
- [ ] La pieza carga de verdad, o está deliberadamente fuera y avisada.
- [ ] Ningún enlace a `victimasdetestigosdejehova.org` para rutas internas.
- [ ] Ningún recurso 404 en la pestaña de red.
- [ ] Sin scroll horizontal a 375px.
- [ ] `npm run build` limpio.

---

## Historial de correcciones de la plantilla

Cosas que fallaron una vez y que la plantilla o la guía ya evitan:

- **22/09** — `conversaciones-pendientes`: se tituló con el nombre del programa y se
  perdió el titular editorial. → Regla de titulares (paso 3) y comprobación en la
  auditoría.
- **22/09** — `entrevista-a-la-aevtj-noruega`: los intervinientes estaban en `contexto`,
  que pinta el valor como una cifra en serif grande. → Campo `intervinientes` propio.
- **22/09** — el campo se llamaba `video` y se usaba para audios de radio: la interfaz
  decía «Ver la pieza» para un pódcast. → Renombrado a `pieza` con `formato`.
- **22/09** — `pieza.pie` no se pintaba cuando la pieza era un enlace externo: el dato se
  descartaba en silencio. → La tarjeta de enlace ya lo muestra.
- **22/09** — si una pieza tenía `youtubeId` y `enlaceExterno`, el enlace se ignoraba.
  → Ahora se muestran los dos.

Cuando cambies la plantilla, añade la línea aquí.
