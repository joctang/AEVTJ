# Revisión de páginas por WhatsApp

El subdominio de pruebas es permanente: `https://revision.victimasdetestigosdejehova.org/`. No hay que crear otra copia ni tocar la web pública para cada revisión.

## Preparar una nueva versión

Desde la carpeta `astro-site`, ejecutar:

```powershell
npm run review:package
```

El comando compila Astro y deja un ZIP nuevo en `astro-site/output/revision-packages/`. El paquete contiene la web estática completa para que funcionen sus estilos, imágenes y recursos; todas las páginas llevan `noindex` y se omiten los sitemaps.

## Subir y compartir

1. En Hostinger, abrir el Administrador de archivos del subdominio de revisión y entrar en su carpeta raíz.
2. Subir el ZIP más reciente y extraerlo **en esa carpeta**, sobrescribiendo los archivos existentes. No usar la raíz del dominio principal ni borrar archivos fuera de la carpeta de revisión.
3. Comprobar que responde `200` y que muestra la versión nueva en `https://revision.victimasdetestigosdejehova.org/testigos-de-jehova/`.
4. Compartir esa misma URL en WhatsApp. Para revisar otra página, cambiar solo la ruta final.

## Pasar una versión aprobada a producción

Los cambios aprobados se integran en el código Astro. La revisión no se copia manualmente a producción: se usa el flujo normal de publicación, después de confirmar expresamente que esa versión está aprobada para publicarse. El workflow actual de GitHub Actions despliega al dominio principal al recibir cambios en `master`; no usarlo para revisiones.
