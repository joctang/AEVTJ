# Traspaso de sesión: deploy de astro-site a Hostinger (24 sept 2026)

## Contexto y objetivo original
El sitio en `new.victimasdetestigosdejehova.org` servía un mapa viejo (`GlobeMap`, "Pausar giro") en vez del nuevo (`DottedWorldMap`/`SpainMap`, "Pasa el cursor por una comunidad") pese a que `origin/master` ya tenía el código correcto y GitHub Actions reportaba deploys "exitosos".

## Cadena de causas encontradas (por orden cronológico de descubrimiento)

1. **Hipótesis inicial descartada**: no era un problema de `.ftp-deploy-sync-state.json` desincronizado per se — el archivo de estado funciona correctamente, la Action lo usa para comparar hashes y decide "sin cambios" de forma consistente.

2. **Confirmado con certeza**: el build en GitHub Actions es 100% correcto (verificado con un paso de debug temporal: `dist/index.html` contenía `dotted-world-map`, 0 coincidencias de `GlobeMap`, 702587 bytes).

3. **Credenciales FTP incorrectas** (la causa más gorda): los secrets `FTP_USERNAME`/`FTP_PASSWORD`/`FTP_SERVER` en GitHub no coincidían con la cuenta FTP real de Hostinger (`u703604811`, host `147.93.54.143`, carpeta `public_html`). El usuario los corrigió manualmente en GitHub → Settings → Secrets.

4. **Tras corregir credenciales**, el deploy a `new.victimasdetestigosdejehova.org` seguía sin reflejarse en producción. Se probó incluso `dangerous-clean-slate: true` (borra todo y resube) sin efecto aparente al principio — pero luego se determinó que el intento de clean-slate anterior se había ejecutado **antes** de corregir las credenciales (por eso no sirvió).

5. **Decisión del usuario**: en vez de seguir depurando `new`, **borrar ese subdominio y crear uno nuevo** `nuevo.victimasdetestigosdejehova.org` desde cero, apuntando el deploy ahí. Se hizo:
   - Subdominio `new` **eliminado** en hPanel (Dominios → Subdominios).
   - Subdominio `nuevo.victimasdetestigosdejehova.org` **creado**, mapea a `/home/u703604811/domains/victimasdetestigosdejehova.org/public_html/nuevo`.
   - `deploy.yml` actualizado: `server-dir: /nuevo/`.

6. **El deploy a `/nuevo/` SÍ subió los archivos correctamente** — verificado de forma **definitiva e irrefutable** con un listado FTP crudo (`lftp`) ejecutado dentro del propio GitHub Action (bypaseando la web de Hostinger por completo):
   ```
   -rw-r--r-- ... 702587 Sep 24 14:28 index.html
   drwxr-xr-x ... _astro, aviso-legal, colaboradores, ... (todas las carpetas del sitio)
   ```
   Esto prueba al 100% que el contenido correcto está en el servidor.

7. **Pero la web seguía sirviendo la página por defecto de Hostinger** ("¡Ya todo está listo!"). Se investigó por qué:
   - El **Administrador de archivos web de Hostinger** (`srv1341-files.hstgr.io`) mostraba una vista obsoleta/cacheada (solo `default.php`, nunca reflejó los archivos reales) — resultó ser un red herring, un bug/caché de su propia UI, no relacionado con el problema real.
   - **Causa real encontrada**: la respuesta HTTP de `nuevo.victimasdetestigosdejehova.org` traía el header `server: hcdn` (la **CDN automática de Hostinger**, que se activa sola en subdominios nuevos), no `LiteSpeed` directo. Se confirmó en hPanel → Rendimiento → CDN que el CDN estaba "Activo" para `nuevo.victimasdetestigosdejehova.org`.
   - Se purgó la caché del CDN desde hPanel ("Vaciar caché") — **no fue suficiente por sí solo**, la web seguía sirviendo el placeholder.

8. **Última hipótesis en curso (sin confirmar aún al cortar la sesión)**: el archivo `default.php` (el placeholder de Hostinger, 16.03 KiB) probablemente **sigue existiendo físicamente** en `public_html/nuevo/` junto a `index.html`, y el `DirectoryIndex` del servidor probablemente prioriza `default.php` sobre `index.html`. Se añadió un paso al workflow para borrarlo vía `lftp rm default.php` y se hizo push (commit `0caaafc`), **pero no se llegó a confirmar el resultado antes de cortar la sesión**.

## Estado del repositorio al cortar la sesión

- Rama `master`, últimos commits relevantes (más reciente primero):
  - `0caaafc` — Remove Hostinger placeholder default.php (paso de borrado vía lftp, **resultado sin verificar**)
  - `116637d` — Clean up deploy.yml: remove debug steps, confirmed working via raw FTP listing
  - (varios commits intermedios de debug ya revertidos: verbose logging, dangerous-clean-slate, listados lftp, etc. — todos ya limpiados del workflow final excepto el de borrado de default.php)

- `.github/workflows/deploy.yml` actual (aprox., verificar estado real):
  ```yaml
  name: Deploy to Hostinger
  on:
    push:
      branches: [master]
    workflow_dispatch: {}
  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout
          uses: actions/checkout@v4
        - name: Setup Node
          uses: actions/setup-node@v4
          with:
            node-version: 22
        - name: Install dependencies
          run: npm ci
        - name: Build site
          run: npm run build
        - name: Deploy to Hostinger via FTP
          uses: SamKirkland/FTP-Deploy-Action@v4.3.5
          with:
            server: ${{ secrets.FTP_SERVER }}
            username: ${{ secrets.FTP_USERNAME }}
            password: ${{ secrets.FTP_PASSWORD }}
            local-dir: ./dist/
            server-dir: /nuevo/
        - name: Remove Hostinger placeholder default.php
          run: |
            sudo apt-get update -qq && sudo apt-get install -y -qq lftp
            lftp -u "${{ secrets.FTP_USERNAME }}","${{ secrets.FTP_PASSWORD }}" "${{ secrets.FTP_SERVER }}" -e "set ssl:verify-certificate no; set ftp:ssl-allow no; cd /nuevo/; rm -f default.php; ls -la; bye" || true
  ```
  **Este último paso (`Remove Hostinger placeholder default.php`) es temporal/debug y debería eliminarse del workflow una vez confirmado que ya no hace falta** (es decir, una vez que `default.php` ya no exista en el servidor, se puede quitar este step en un commit de limpieza).

## Próximos pasos para la nueva sesión

1. **Verificar si el Run de GitHub Actions del commit `0caaafc` terminó y si borró `default.php`** (URL: `https://github.com/joctang/AEVTJ/actions/workflows/deploy.yml`).
2. **Comprobar `https://nuevo.victimasdetestigosdejehova.org/` con fetch sin caché** (query anti-caché tipo `?cb=<timestamp>`) y verificar:
   - Que el `title` ya no sea "Página por defecto".
   - Que el HTML contenga `dotted-world-map` y NO contenga `GlobeMap`.
3. Si **sigue sin funcionar** tras borrar `default.php`, revisar:
   - Si el CDN de Hostinger (`hcdn`) sigue interponiéndose — quizá haga falta **desactivar el CDN por completo** para este subdominio (hPanel → Rendimiento → CDN → "Desactivar" junto a `nuevo.victimasdetestigosdejehova.org`), no solo purgar caché.
   - Si hace falta esperar más tiempo de propagación del vhost/CDN.
   - Confirmar de nuevo por FTP crudo (`lftp ls -la` dentro de un step del workflow) que `default.php` realmente desapareció.
4. **Una vez confirmado que todo funciona**: limpiar `deploy.yml` quitando el step de borrado de `default.php` (ya no hará falta en cada deploy) y dejar solo el step limpio de `Deploy to Hostinger via FTP` con `server-dir: /nuevo/`.
5. Considerar si el usuario quiere que `nuevo.victimasdetestigosdejehova.org` sea el subdominio definitivo o si prefiere renombrarlo/cambiar DNS a otra cosa a futuro.
6. Hay un archivo de diagnóstico previo en el repo: [`DIAGNOSTICO_MAPA_DEPLOY_2026-09-24.md`](DIAGNOSTICO_MAPA_DEPLOY_2026-09-24.md) con el historial completo del diagnóstico original (antes de este traspaso) — puede servir de referencia adicional.

## Datos técnicos clave para referencia rápida

- **Cuenta FTP Hostinger**: usuario `u703604811`, host `147.93.54.143`, puerto 21 (sin TLS — usar `set ssl:verify-certificate no; set ftp:ssl-allow no;` en lftp).
- **Ruta física del subdominio nuevo**: `/home/u703604811/domains/victimasdetestigosdejehova.org/public_html/nuevo`
- **Repo**: `github.com/joctang/AEVTJ`, proyecto Astro en la raíz del repo (no en subcarpeta).
- **Administrador de archivos web de Hostinger** (`srv1341-files.hstgr.io`) **no es fiable** para verificar el estado real de los archivos — usar siempre un listado FTP crudo (`lftp`) desde un step de GitHub Actions para verificación definitiva.
- El Administrador de archivos requiere iniciar sesión vía `mcp__claude-in-chrome__*` (extensión de Chrome, con la sesión real del usuario en Hostinger) — el navegador integrado de Claude Code no tiene esa sesión.

## Continuación de sesión (mismo día, tras el traspaso)

1. **Confirmado: el Run #19 (commit `0caaafc`) sí borró `default.php` correctamente.** Listado FTP crudo dentro del propio step muestra que `/nuevo/` ya solo contiene `index.html` (702587 bytes, build correcto con `dotted-world-map`) y las carpetas del sitio — **no hay `default.php` ni `index.php`**.

2. **Pese a eso, la web seguía sirviendo el placeholder de Hostinger.** Cabeceras de `curl` a `https://nuevo.victimasdetestigosdejehova.org/?cb=<ts>`:
   ```
   Server: hcdn
   x-hcdn-cache-status: DYNAMIC   ← no es caché, se genera "fresco" en cada petición
   x-powered-by: PHP/8.1.34
   ```
   El hecho de que sea `DYNAMIC` (no `HIT`/`MISS` de caché) y que el body siga siendo el placeholder aunque `default.php` ya no existe en el FTP indica que el problema **no es de archivos ni de caché de CDN**, sino que el origen (detrás de la CDN) está generando esa página por algún mecanismo propio de Hostinger para subdominios nuevos, independiente del contenido real subido.

3. **Verificado en hPanel → Rendimiento → CDN**: `nuevo.victimasdetestigosdejehova.org` aparecía como CDN **"Activo"**, etiquetado como "Dominio aparcado" en esa lista (aunque en Dominios → Dominios aparcados no aparece ninguno, 0/100 — probablemente solo una etiqueta genérica de la UI para "no es el dominio principal"). **Se desactivó el CDN** para ese subdominio (botón "Desactivar" en esa fila).

4. **Tras desactivar, la web seguía mostrando el placeholder** (verificado con `curl` inmediatamente después) — Hostinger avisa explícitamente en su UI: *"Activar o desactivar una CDN puede requerir 24-48 horas para propagarse completamente"*. No se puede confirmar el efecto real hasta pasado ese plazo.

### Próximos pasos para la siguiente sesión

1. **Esperar 24-48h desde la desactivación del CDN** (hecha hoy 24 sept ~18:16 GMT) y volver a comprobar `curl -sD - -o /dev/null "https://nuevo.victimasdetestigosdejehova.org/?cb=$(date +%s)"`: si `Server` deja de ser `hcdn` (o el contenido pasa a ser el `index.html` real), el problema estaba resuelto.
2. Si tras 48h sigue sirviendo el placeholder de forma `DYNAMIC`, esto ya no es un problema de caché/CDN ni de archivos (ambos verificados y correctos) — habría que **contactar con soporte de Hostinger** directamente, explicando que el subdominio `nuevo.victimasdetestigosdejehova.org` sirve la página por defecto de Hostinger de forma dinámica (no cacheada) pese a que el `public_html/nuevo/` contiene únicamente el `index.html` real (verificable por FTP), sin `default.php` ni `index.php`.
3. Alternativa más rápida si el usuario no quiere esperar: crear un subdominio nuevo distinto (tercera vez) y probar si uno recién creado sirve contenido real inmediatamente sin pasar por este problema — ayudaría a aislar si es un bug puntual de este subdominio concreto o un comportamiento general de Hostinger con subdominios nuevos.
4. Recordar quitar el step temporal `Remove Hostinger placeholder default.php` de `deploy.yml` una vez todo esté confirmado funcionando (ya no hace falta, `default.php` no vuelve a aparecer).

## Segunda continuación (mismo día, ~18:33 GMT) — causa raíz real encontrada

**La desactivación del CDN sí se propagó ya** (mucho antes de las 24-48h anunciadas): las cabeceras ahora muestran `Server: LiteSpeed` en vez de `Server: hcdn`, confirmando que se está golpeando el origen directamente, sin CDN por delante.

**Y aun así el placeholder sigue apareciendo.** Esto descarta definitivamente la CDN como causa. Pruebas adicionales concluyentes:

```
GET /                    → 200, "Página por defecto" (el placeholder de Hostinger)
GET /index.html          → 404, body de WordPress (en-us, namespaces RDF/Drupal-WP), Last-Modified: 22 Apr 2025
GET /legal/               → 404, MISMO body exacto (mismo Content-Length: 4511, mismo Etag)
GET /aviso-legal/         → 404, MISMO body exacto
GET /favicon.svg          → 404, MISMO body exacto
GET /ruta-que-no-existe   → 404, MISMO body exacto
```

**Conclusión definitiva**: el servidor web (LiteSpeed) que atiende `nuevo.victimasdetestigosdejehova.org` **no tiene su DocumentRoot apuntando a `/public_html/nuevo`**, pese a que:
- hPanel → Dominios → Subdominios muestra la ruta correcta (`/home/u703604811/domains/victimasdetestigosdejehova.org/public_html/nuevo`).
- El listado FTP crudo confirma que esa carpeta contiene los archivos correctos.

Todas las rutas (existentes o no, excepto `/` exacta) devuelven el mismo 404 genérico con fecha de abril 2025 (parece la página 404 de un tema WordPress — probablemente el DocumentRoot real de este vhost apunta, por error de configuración interna de Hostinger, a otro sitio o a un directorio vacío/por defecto de la cuenta, no al `public_html/nuevo` que muestra hPanel). La ruta `/` en concreto sirve el placeholder "Página por defecto" mediante PHP, probablemente un catch-all a nivel de cuenta/servidor para vhosts sin contenido reconocido, independiente de lo que haya realmente en el FTP.

**Esto ya no es un problema de código, deploy, FTP ni CDN — es una configuración de servidor rota del lado de Hostinger.**

### Próximo paso recomendado: contactar con soporte de Hostinger

Abrir un ticket de soporte con Hostinger (chat en vivo o ticket desde hPanel) con este resumen:

> El subdominio `nuevo.victimasdetestigosdejehova.org` (creado en Dominios → Subdominios, ruta `/home/u703604811/domains/victimasdetestigosdejehova.org/public_html/nuevo`) sirve la "Página por defecto" de Hostinger en `/`, pero cualquier otra ruta (existente o no en el FTP, p. ej. `/index.html`, `/legal/`) devuelve un 404 de una página que parece de WordPress con fecha de abril de 2025 — contenido que no pertenece a esta carpeta. Por FTP se confirma que `/public_html/nuevo/index.html` existe y es correcto (702587 bytes, modificado hoy). Esto indica que el DocumentRoot real del vhost no coincide con la ruta que muestra hPanel. La CDN de Hostinger para este subdominio ya está desactivada (confirmado por cabecera `Server: LiteSpeed`), así que no es un problema de caché.

### Alternativa a probar mientras se espera a soporte

Crear un subdominio completamente nuevo (p. ej. `web2` o similar) y comprobar si uno recién creado sirve contenido real de inmediato — esto ayudaría a determinar si es un bug puntual de `nuevo` (quizás arrastra configuración residual del extinto subdominio `new`) o un problema general de la cuenta.
