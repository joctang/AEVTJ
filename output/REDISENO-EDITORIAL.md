# AEVTJ · Rediseño editorial

Versión local sobre el Astro existente. Referencia: [Allia Health](https://alliahealth.co/), revisada en navegador mediante capturas de portada y desplazamiento. Fecha: 16 de septiembre de 2026.

## Resultado

- Diseño común para las 37 páginas Astro: portada, noticias, artículos, documentos, asociación, socios y contacto.
- Logo original; verde oliva `#5b6934`, verde bosque `#263927`, salvia y marfil.
- Tipografía Lora / DM Sans, cabecera flotante, botones redondos, tarjetas y fotografías superpuestas.
- Entradas suaves, fotografías con desplazamiento a distinta velocidad, fondos que cambian por sección y titulares fijados durante la lectura de los bloques narrativos.
- Transición entre páginas mediante View Transitions nativas cuando el navegador las admite.
- Mapas con contraste sobre fondo claro, selección por teclado y globo con giro, arrastre y pausa. Movimiento reducido respetado; el giro se detiene fuera de pantalla.
- Rutas y contenido conservados, con ajustes tipográficos, traducción de etiquetas y normalización de encabezados de artículos.

## Verificación

`npm run build`: 37 páginas generadas correctamente.

Pruebas de navegador con Microsoft Edge / Playwright:

- Todas las rutas Astro y el mockup estático existente, a 390 y 1440 píxeles: respuesta 200, sin desbordamiento horizontal, imágenes rotas detectadas ni errores de JavaScript.
- Portada adicional a 320, 768 y 1024 píxeles.
- Menú móvil: abrir, cerrar con Escape y actualizar su estado accesible.
- Banner de cookies: aparece inicialmente y recuerda la opción elegida.
- Parallax: transformación distinta antes y después del desplazamiento.
- Movimiento reducido: sin parallax y sin giro automático.
- Mapas: selección de Argentina y Madrid por teclado; giro y pausa comprobados.
- Sin JavaScript: título, enlaces y cifras siguen presentes.

Evidencias: `playwright/verification.json` y `playwright/maps-verification.json`. Las capturas son de la web renderizada, no imágenes generadas.

## Capturas

- [Portada de escritorio](playwright/home-desktop.png)
- [Portada móvil](playwright/home-mobile.png)
- [Recorrido completo de escritorio](playwright/home-desktop-full.png)
- [Capas de fotografía](playwright/home-help.png)
- [Sección narrativa](playwright/home-story.png)
- [Mapas](playwright/maps-desktop.png)
- [Mapa móvil](playwright/maps-mobile.png)
- [Noticias](playwright/news-1440.png)
- [Contacto móvil](playwright/contact-390.png)
- [Guía móvil](playwright/guide-390.png)

## Límites y trabajo previo pendiente

Este cambio es un rediseño y no está publicado. Los formularios propios de consulta y boletín ya tenían `onsubmit="return false"`; siguen pendientes de conectar a un servicio de envío. El enlace externo de alta de socios y los enlaces de correo se conservan. No se han enviado mensajes ni altas durante las pruebas.

Los datos editoriales no se han auditado: el contenido original muestra 815 miembros en una sección y 735 en el contador; es necesario confirmar una cifra antes de publicar. Se ha conservado la información original, sin inventar estadísticas.

No se ha utilizado fal.ai porque el script solicitado no está disponible. Se mantienen fotografías existentes y el logo oficial; los comandos de imágenes están preparados en [PROMPTS-FAL.md](PROMPTS-FAL.md). No se ha generado ni añadido ningún vídeo.

Las pruebas visuales se han realizado en Chromium/Edge, no en dispositivos físicos ni Safari. Las fuentes se sirven desde Google Fonts y tienen fuentes de reserva.

## Archivos principales

- `src/styles/editorial.css`: sistema común.
- `src/styles/home-editorial.css`: composición y capas de portada.
- `src/scripts/editorial.ts`: entradas, desplazamiento, escenas y contadores.
- `src/scripts/globe.ts`: globo adaptado a la API de cobe 2.
- `src/layouts/BaseLayout.astro`: integración general.

El estado anterior del código está guardado en `output/redesign-before/src`.
