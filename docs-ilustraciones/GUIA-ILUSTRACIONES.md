# Guía de ilustraciones AEVTJ — serie geométrica con hilo

Estilo aprobado en octubre de 2026 para todas las ilustraciones propias de la web
(las imágenes que no son fotografía de catálogo, documental o de prensa).
Primera aplicación: la página pilar `/testigos-de-jehova/`.

Referencias visuales del estilo: [`referencias/`](./referencias/).

---

## 1. Por qué este estilo

Los Testigos de Jehová tienen un lenguaje visual muy reconocible. Nuestro estilo
tiene que ser **lo contrario, punto por punto**, para que nadie confunda una
ilustración de la AEVTJ con material de JW.ORG.

| Lo que hace JW.ORG (evitar siempre) | Lo que hacemos nosotros |
|---|---|
| Realismo pictórico idealizado (Atalaya, ¡Despertad!) | Formas geométricas planas |
| Paraíso, jardines, animales, luz dorada, cielos limpios | Espacios vacíos, cotidianos, del presente |
| Familias sonrientes posando, rostros expresivos | Figuras **sin rasgos faciales**: anónimas y dignas |
| Animación 3D tipo Pixar ("Hazte amigo de Jehová") | Nada de 3D |
| Dibujo plano con contorno de los vídeos de pizarra | Sin contornos |
| Colores saturados, mensaje moralizante | Paleta contenida, tono sereno y honesto |

## 2. El estilo en una frase

> Ilustración editorial minimalista hecha con formas geométricas simples, colores
> planos sin contorno y grano fino, sobre fondo crema, con figuras sin rostro y un
> **hilo lima** que cuenta lo que pasa.

## 3. Reglas fijas

**Formas.** Todo se construye con círculos, medios círculos, arcos y rectángulos
redondeados. Sin contornos, sin degradados brillantes, sin sombras duras.

**Paleta (solo estos colores).**

| Color | Hex | Uso |
|---|---|---|
| Navy | `#122c33` | Figuras, puertas, objetos principales |
| Teal | `#2ea88f` | Figuras secundarias, ropa, detalles |
| Lima | `#d8eaa4` | **El hilo** y acentos de luz |
| Arena | cálido neutro | Muebles, suelos, figuras de apoyo |
| Crema | `#f5fbdf` | **Fondo siempre** (se funde con la web) |
| Rojo apagado | — | Solo cuando el tema lo exige (sangre), en un único objeto |

**Figuras.** Sin ojos, boca ni rasgos. Cabezas siempre en **navy o teal**, nunca en
tonos de piel (anonimato y coherencia de la serie). Proporciones constantes:
cabeza como círculo, cuerpo como forma redondeada.

**El hilo (elemento firma).** Una línea lima fina aparece en todas las ilustraciones:

| Situación | Cómo aparece el hilo |
|---|---|
| Apoyo, comunidad, acogida | Une a varias personas o se ofrece a alguien |
| Ostracismo, ruptura | **Cortado**, con los dos extremos sin tocarse |
| Soledad, duda | **Suelto** en el suelo, aún sin recoger |
| Control, presión | **Tenso** |
| Información, objetos | Como marcapáginas, atado a un objeto o saliendo de una puerta |

**Composición.** Mucho espacio vacío, composición asimétrica equilibrada, escena
legible de un vistazo. Un solo mensaje por ilustración.

**Variedad dentro de una página.** El objeto protagonista no se repite: un mismo
elemento (sillas, puertas, libros, mesas) aparece como máximo en **2 ilustraciones**
de la misma página, y solo donde es el mensaje. Antes de pedir una imagen, revisar
qué objetos protagonizan las demás de esa página.

**Tono.** Mayoría de escenas luminosas sobre crema. Las escenas duras (ostracismo,
abuso, control) como máximo 1 de cada 4 en una misma página.

**Prohibido.** Símbolos religiosos (cruces, biblias con símbolos, el logo JW.ORG),
texto o letras dentro de la imagen, menores en situaciones de daño, sangre explícita,
caras, 3D, estilo de dibujos animados.

## 4. Tres niveles

| Nivel | Formato | Uso | Contenido |
|---|---|---|---|
| **Escena** | 3:2 (1536×1024) | Capítulos, bloques destacados | Figuras + espacio + hilo |
| **Objeto** | 3:2 (1536×1024) | Temas sin personas, tarjetas | Uno o dos objetos + hilo |
| **Icono** | 1:1 (1024×1024) | Índices, listas, pasos | Una sola forma plana, casi sin grano |

## 5. Prompt base (copiar siempre entero)

Pegar en ChatGPT **el bloque base + la escena**. No traducir: en inglés el generador
respeta mejor las restricciones.

### Escena u objeto (3:2)

```
Modern minimalist editorial illustration built from simple geometric shapes (circles, half-circles, arches, rounded rectangles). Flat colors, no outlines, subtle fine grain/noise texture over the color areas. Strict palette: deep navy (#122c33), soft teal (#2ea88f), lime (#d8eaa4), warm sand. Background: plain pale cream with a faint lime tint (#f5fbdf), generous empty space, asymmetric balanced composition. Any figures have NO facial features (no eyes, no mouth) and their heads are plain navy or teal circles, never skin tones: anonymous, universal and dignified. A single thin lime-green thread appears in the scene and carries its meaning. Contemporary, design-forward, emotionally honest. Let the emotional tone come only from posture, distance between figures, light and the lime thread; do not add facial expressions.

Avoid: 3D render, cartoon or mascot style, outlines, glossy gradients, realistic painting, golden or sunset light, paradise or garden imagery, saturated colors, smiling faces, religious symbols, the JW.ORG logo, any text or letters, logos. Aspect ratio 3:2.

Emotional tone: [DESCRIBIR EN UNA FRASE EL TONO DE ESTA ESCENA].
Scene: [DESCRIBIR AQUÍ LA ESCENA Y QUÉ HACE EL HILO].
```

Usa el bloque entero en cualquier conversación. Debajo añade únicamente las dos
líneas `Emotional tone` y `Scene`; cambia la emoción según el contenido de cada
sección. La escena debe describir cosas visibles y concretas, y aclarar qué hace el
hilo. No pidas a la imagen que explique ideas con texto.

### Icono (1:1)

```
Minimal geometric icon in the same visual language as a flat geometric editorial illustration series. One single simple shape, centered, perfectly flat, readable at 64–120 px. Flat colors only, no outlines, extremely subtle grain. Palette: deep navy (#122c33) main shape, lime (#d8eaa4) for a small thread detail, soft teal (#2ea88f) accent. Background: plain pale cream (#f5fbdf).

Avoid: 3D, shadows, gradients, perspective, outlines, extra elements, text or logos. Aspect ratio 1:1.

Icon: [DESCRIBIR LA FORMA]
```

## 6. Cómo generarlas en ChatGPT

1. Abrir **un chat dedicado a la serie** y generar en él todas las imágenes de una tanda,
   una detrás de otra (así se contagian del estilo).
2. Al empezar, **adjuntar 2 o 3 imágenes de [`referencias/`](./referencias/)** y añadir
   al principio del prompt:
   `Use the attached images as a strict style reference: same shapes, same colors, same grain, same proportions of the figures, same thread.`
   Si no puedes adjuntar referencias en otra conversación, pega el bloque base completo; no dependas del historial de este chat.
3. Si sale algo fuera de estilo, no corregir a mano: pedir otra versión recordando la
   regla que ha fallado (ej.: `Again, but the heads must be plain navy circles, no skin tones.`).
4. Descargar en PNG, a la máxima resolución.

## 6.1 Ejemplos de escena

**Dudas iniciales — curiosidad serena, con algo de incertidumbre.**

```text
Emotional tone: quiet curiosity and uncertainty, with room to decide at one's own pace.
Scene: objects only: a closed book beside a slightly open door; the lime thread leads from under the book toward the narrow opening.
```

**Bienvenida intensa — calidez inicial, con una pequeña distancia crítica.**

```text
Emotional tone: warmth and belonging, with a restrained sense that the welcome is unusually immediate.
Scene: four simple figures stand close together and offer one open hand to a fifth figure at the edge of the group; one lime thread passes through their hands, gently connecting them.
```

**Pérdida de vínculos — ausencia, tratada con respeto.**

```text
Emotional tone: absence and loss, devastating but restrained and respectful; nobody is shown.
Scene: objects only: one empty chair and a small personal bag beside a dark doorway; the lime thread lies across the floor, cut in the middle, its two ends not touching.
```

No repitas automáticamente estos ejemplos. Ajusta objetos y emoción al contenido
real de la sección y evita mostrar como hecho universal una experiencia que varía
entre familias y congregaciones.

## 7. Control de calidad antes de usarla

- [ ] ¿Se podría confundir con material de JW.ORG? → descartar.
- [ ] ¿Solo colores de la paleta? ¿Fondo crema?
- [ ] ¿Figuras sin rostro y cabezas navy/teal?
- [ ] ¿Aparece el hilo y se entiende lo que significa?
- [ ] ¿Sin texto, letras ni símbolos religiosos?
- [ ] ¿Parece de la misma serie que las de `referencias/`?
- [ ] Icono: ¿se entiende reducido a 64 px?

## 8. Cómo meterla en la web

### Antes de sustituir imágenes de una página

1. Revisa el hero y cada imagen de contenido por separado. Una fotografía editorial,
   documental o de prensa puede quedarse si encaja; no se sustituye automáticamente.
2. Haz una tabla de ubicación actual, tema y sustitución propuesta. Cambia solo las
   imágenes incluidas en el encargo.
3. Conserva los originales y las imágenes de otras páginas. Reutiliza un asset solo
   cuando su escena encaje claramente y la reutilización sea intencionada; no cruces
   referencias de rutas por parecido de nombre.
4. Mantén el `alt` descriptivo y revisa las versiones WebP, el recorte y el diseño
   móvil antes de darlo por terminado.

1. Guardar el PNG original en `06_Contenido/<pagina>/ilustraciones/` con el **mismo nombre
   que tendrá en la web** (ej. `06_Contenido/testigos-de-jehova/ilustraciones/tdj-origen-imprenta-hilo.png`).
   Si hay varias versiones para elegir: sufijo `-a`, `-b`… (`tdj-origen-imprenta-hilo-a.png`).
   Las pruebas de estilo y descartes van en `06_Contenido/<pagina>/referencias-visuales/`, no aquí.
2. Convertir a las dos variantes WebP de la web:

   ```bash
   node scripts/ilustracion.mjs ruta/al/original.png tdj-origen-imprenta-hilo 2026/10
   ```

   Nombre: minúsculas, sin tildes, con guiones, prefijo de la página (`tdj-` para
   Testigos de Jehová), qué se ve y `-hilo` al final. Genera `-900.webp` y `-1536.webp`
   en `public/uploads/aaaa/mm/`.
3. Añadir la imagen en el archivo de datos de la página (ej. `src/data/testigos-de-jehova.ts`):

   ```ts
   imagen: {
     nombre: "tdj-origen-imprenta-hilo",
     alt: "Ilustración de una pequeña imprenta antigua junto a una pila de libros, unidos por un hilo verde.",
     // carpeta: "2026/11",  // solo si no está en 2026/10
   },
   ```

4. **Texto alternativo:** empieza por «Ilustración de…», describe lo que se ve y qué
   hace el hilo, en una frase. Sin interpretaciones largas.
5. Mientras una sección no tenga imagen, `/testigos-de-jehova/` muestra un hueco reservado;
   se puede describir la escena prevista en la lista `pendientes` del `index.astro`.

## 9. Inventario

Originales en `06_Contenido/testigos-de-jehova/ilustraciones/` (y pruebas de estilo
en `referencias-visuales/`). Versiones web en `public/uploads/2026/10/`.

| Archivo | Nivel | Dónde |
|---|---|---|
| `tdj-origen-imprenta-hilo` | Objeto | Testigos de Jehová · 1. ¿De dónde vienen? |
| `tdj-libro-puerta-hilo` | Objeto | Testigos de Jehová · 2. ¿En qué creen? |
| `tdj-direccion-mesa-sillas-hilo` | Escena | Testigos de Jehová · 3. ¿Quién los dirige? |
| `tdj-reuniones-expositor-puerta-hilo` | Objeto | Testigos de Jehová · 4. Reuniones y predicación |
| `tdj-normas-tarta-regalo-hilo` | Objeto | Testigos de Jehová · 5. Normas cotidianas |
| `tdj-vial-hilo` | Objeto | Testigos de Jehová · 6. Transfusiones |
| `tdj-silla-vacia-hilo-cortado` | Escena | Testigos de Jehová · 7. Dejar de ser Testigo |
| `tdj-puerta-grupo-hilo` | Escena | Testigos de Jehová · La mirada de la AEVTJ |
| `tdj-silla-vacia-hilo-cortado` (reutilizada) | Escena | Carta de renuncia · 3. Qué ocurre si envías la carta |
| `tdj-renuncia-arco-hilo-libre` | Escena | Carta de renuncia · 4. Por qué la AEVTJ desaconseja la carta |
| `tdj-renuncia-sobre-hilo` | Objeto | Carta de renuncia · 5. Cuándo la carta sí puede ayudarte |

Ilustraciones aplicadas a `/guia-para-salir-de-los-testigos-de-jehova/` (el hero
fotográfico se conserva):

| Archivo | Uso |
|---|---|
| `tdj-libro-puerta-hilo` | Capítulo 1 · El comienzo |
| `tdj-renuncia-comunidad-hilo` (reutilizada) | Capítulo 2 · Love bombing |
| `tdj-direccion-mesa-sillas-hilo` | Capítulo 3 · La vida dentro |
| `tdj-guia-salida-bautismo-hilo` | Capítulo 4 · El bautismo |
| `tdj-guia-salida-dudas-hilo` | Capítulo 5 · Empezar a cuestionar |
| `tdj-guia-salida-impacto-emocional-hilo-cortado` | Capítulo 6 · El impacto emocional |

Escenas de ejemplo para nuevas ilustraciones (formato de la línea `Scene:`):

```
Scene, objects only: a birthday cake with unlit candles on a small round table, and one chair set slightly apart; the thread lies loose on the floor between them.
Scene: a long table far in the background with a few small seated figures behind it, and many rows of empty chairs in the foreground facing it; the thread runs from the table down to the chairs, slightly taut.
```
