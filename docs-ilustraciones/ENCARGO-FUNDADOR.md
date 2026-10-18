# Encargo de ilustraciones: /testigos-de-jehova/fundador/

Seis ilustraciones geométricas «hilo lima» para la página del fundador. Todas son
**objetos, sin personas**: el tema es histórico y no debe haber rostros, ni siquiera
anónimos, que se lean como Russell u otra persona real.

Seguir siempre [`GUIA-ILUSTRACIONES.md`](./GUIA-ILUSTRACIONES.md) (reglas, paleta, control de calidad).
Este documento solo añade las escenas y la integración.

## 1. Cómo pedirlas (Codex o ChatGPT)

1. Un solo chat/tarea para las seis, una detrás de otra, para que se contagien del estilo.
2. Adjuntar de [`referencias/`](./referencias/) `ref-objeto-vial.webp` y `ref-objetos-libro-puerta.webp`
   y empezar con:
   `Use the attached images as a strict style reference: same shapes, same colors, same grain, same thread.`
3. Pegar el **bloque base entero** de la sección 5 de la guía (escena u objeto, 3:2) y debajo solo las
   líneas `Emotional tone` y `Scene` de cada imagen de abajo.
4. Si una sale fuera de estilo, no se retoca: se pide otra recordando la regla que falló.
5. Descargar en PNG a máxima resolución, 3:2 (1536×1024).

Bloque base (por si el agente no tiene la guía a mano):

```
Modern minimalist editorial illustration built from simple geometric shapes (circles, half-circles, arches, triangles, rounded rectangles). Flat colors, no outlines, subtle fine grain/noise texture over the color areas. Strict palette: deep navy (#122c33), soft teal (#2ea88f), lime (#d8eaa4), warm sand. Background: plain pale cream with a faint lime tint (#f5fbdf), generous empty space, asymmetric balanced composition. A single thin lime-green thread appears in the scene and carries its meaning. Contemporary, design-forward, emotionally honest.

Avoid: 3D render, cartoon or mascot style, outlines, glossy gradients, realistic painting, golden or sunset light, saturated colors, faces or people, religious or masonic symbols (no crosses, no eye, no compass and square), the JW.ORG logo, any text, numbers or letters, logos. Aspect ratio 3:2.
```

## 2. Las seis escenas

Tono general: sereno y documental. Ninguna es escena dura. Cada objeto protagonista aparece una sola vez.

### 1 · `tdj-fundador-fechas-hilo` — sección «¿En qué año se fundaron…?»

```text
Emotional tone: calm, orderly, with the feeling that there is no single starting point.
Scene: objects only: five plain rounded beads of different sizes in navy, teal and sand, set along a gentle curve on the cream background; one lime thread passes through all of them, and its starting end on the left is deliberately loose, not tied to the first bead.
```

### 2 · `tdj-fundador-russell-revistas-hilo` — sección «¿Quién fue Charles Taze Russell?»

```text
Emotional tone: quiet, documentary, a figure of the past seen only through what he left behind.
Scene: objects only: a small neat stack of thin magazine issues (flat rounded rectangles in navy, teal and sand, no covers or text) with one open notebook beside it; the lime thread is used as a bookmark sticking out of the notebook.
```

### 3 · `tdj-fundador-piramide-lapida-hilo` — sección «¿Por qué hay una pirámide junto a su tumba?»

```text
Emotional tone: clarifying, a misunderstanding gently corrected.
Scene: objects only: a smooth sand-colored triangle (a small pyramid, plain, no marks or symbols) on the right, and a low rounded navy slab lying flat on the left, clearly separate from it; the lime thread leaves the slab and ends in a small loop on the ground, not reaching the pyramid.
```

### 4 · `tdj-fundador-trigo-hilo` — sección «El trigo milagroso y el pleito…»

```text
Emotional tone: measured and skeptical, without mockery.
Scene: objects only: a simple jar holding a few ears of wheat drawn as teal and sand ellipses, and next to it one small round navy tag with no text; the lime thread ties the tag to the jar's neck and hangs slightly taut.
```

### 5 · `tdj-fundador-versiones-arcos-hilo` — sección «¿Qué dicen los Testigos de Jehová y los historiadores?»

```text
Emotional tone: balanced, two perspectives side by side, neither one above the other.
Scene: two arches of equal size standing side by side, one in navy and one in teal, each with a small sand-colored circle inside; one lime thread passes through both arches at the same height, connecting them.
```

### 6 · `tdj-fundador-ramas-hilo` — sección «¿Qué pasó con los demás Estudiantes de la Biblia?»

```text
Emotional tone: something that divided, told with calm and no judgment.
Scene: objects only: a single thick lime thread coming in from the left that splits into four thinner threads, each ending at a different small circle (navy, teal, sand, navy) spread to the right at different heights; the split point is a small teal knot.
```

## 3. Controles antes de aceptar cada imagen

- Sin texto, números, letras ni símbolos religiosos o masónicos. La pirámide es un triángulo liso.
- Sin figuras humanas.
- Solo la paleta de la guía y fondo crema.
- El hilo se ve y significa lo que dice la escena.
- Se parece a las de `referencias/`.

## 4. Integración (cuando estén las seis)

1. Guardar cada PNG en `06_Contenido/testigos-de-jehova__fundador/ilustraciones/` con el nombre de arriba.
2. Convertir cada una:

   ```bash
   node scripts/ilustracion.mjs ruta/al/original.png tdj-fundador-fechas-hilo 2026/10
   ```

3. Pasarme las rutas y las engancho en `src/pages/testigos-de-jehova/fundador.astro` con la prop
   `ilustraciones` (id de sección, `nombre`, `alt`, `lista: true`, `pos` alternando derecha e izquierda),
   igual que en Biblia o Navidad. Hasta entonces no se añade ningún hueco, para no publicar recuadros vacíos.
4. `alt` en una frase que empiece por «Ilustración de…» y diga qué se ve y qué hace el hilo.
