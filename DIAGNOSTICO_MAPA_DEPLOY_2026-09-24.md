# Diagnóstico: mapa desactualizado en producción (deploy Hostinger)

**Fecha:** 2026-09-24
**Proyecto:** `astro-site` (AEVTJ) — repo `github.com/joctang/AEVTJ`
**Entorno afectado:** `https://new.victimasdetestigosdejehova.org` (subdominio `new`, deploy vía FTP con GitHub Actions)

## Síntoma

En la home, el mapa mundial y el mapa de España que se ven en producción **no coinciden** con los componentes actuales del código Astro (`src/pages/index.astro`).

## Hechos confirmados (con evidencia reproducible)

1. **DNS/subdominio correctos.** `new.victimasdetestigosdejehova.org` resuelve a `147.93.54.143` (misma IP que el dominio raíz), con registros A y AAAA correctos. No es un problema de DNS.
   - (Nota: `aevtj.org`, dominio distinto, sigue aparcado en Hostinger — no es el dominio de producción real y no afecta a este caso.)

2. **El código actual usa `DottedWorldMap.astro` + `SpainMap.astro` actualizado**, introducidos en el commit `36f8379` ("cambios"). Antes de ese commit existían `GlobeMap.astro` y `WorldMap.astro` (mapa mundial "rotatorio" con textos "Selecciona un país destacado" / "Pausar giro"), que fueron **eliminados** en ese mismo commit.

3. **Un build local fresco (`npm run build`) desde el HEAD actual (`2feb061`) genera `dist/index.html` con:**
   - `dotted-world-map` ✅ presente
   - `Pasa el cursor por una comunidad` ✅ presente (texto nuevo del `SpainMap.astro`)
   - `GlobeMap` ❌ ausente

4. **Una petición `curl` directa a producción (sin caché de navegador, con query anti-caché) devuelve:**
   - `GlobeMap` ✅ presente (script `GlobeMap.astro_astro_type_script_index_0_lang.*.js`)
   - `dotted-world-map` ❌ ausente
   - `Pausar giro`, `Selecciona un país destacado`, `Selecciona una comunidad autónoma` ✅ presentes (textos del componente viejo)
   - `Last-Modified: Tue, 22 Sep 2026 08:51:09 GMT` — **fecha anterior a la creación de `deploy.yml`** (commit `7b17861`, 22 sept 09:17 GMT ese mismo día).

   → Confirma que el `index.html` servido en producción **nunca fue reemplazado** desde que existe el pipeline de deploy. Es contenido previo (subido manualmente o por otra vía), no el resultado de ninguna ejecución del GitHub Action.

5. **Historial de ejecuciones de `Deploy to Hostinger`** (`.github/workflows/deploy.yml`, usa `SamKirkland/FTP-Deploy-Action@v4.3.5`, `server-dir: /new/`):
   - Run #1 (`7b17861`) → **failed**
   - Run #2 (`44b0a85`) → **failed**
   - Run #3 (manual) → **failed**
   - Run #4 (manual) → **success** (3m 2s)
   - Run #5 (`2feb061`, hoy) → **success** (28s), log: "210/210 archivos comparados", mayoría "File content is the same, doing nothing"

6. **Contradicción a resolver:** si el Run #5 comparó 210/210 archivos y concluyó que el contenido es idéntico, pero el `index.html` local (recién compilado) y el `index.html` servido en producción **son objetivamente distintos** (ver puntos 3 y 4), entonces la comparación de la Action **no está reflejando el estado real del servidor**.

## Hipótesis de causa raíz

`FTP-Deploy-Action` no compara contra el contenido real del FTP en cada ejecución: mantiene un **archivo de estado remoto** (`.ftp-deploy-sync-state.json`, típicamente dentro de `server-dir`, aquí `/new/`) con los hashes de la última subida *que la propia Action hizo*. Si en algún momento se subió contenido a `/new/` **por otra vía** (FTP manual, otro script, etc. — coincide con el `Last-Modified` de 22 sept 08:51, anterior al propio `deploy.yml`), ese archivo de estado nunca se enteró del cambio real en disco. Desde entonces, la Action compara contra su propia idea de "lo que ya subió" (que puede no coincidir con lo que hay de verdad en el servidor) y concluye "sin cambios" aunque el contenido real sea otro.

**No parece ser:**
- Problema de DNS o subdominio (verificado correcto).
- Ruta del `server-dir` incorrecta (`/new/` coincide con `/domains/victimasdetestigosdejehova.org/public_html/new/`, confirmado por el usuario).
- Caché de CDN/navegador (confirmado con `curl` fresco y query anti-caché, resultado idéntico).

**Sí parece ser:**
- Archivo de estado de sincronización de la Action desincronizado de la realidad del servidor, posiblemente por una subida manual anterior a la existencia del pipeline.

## Próximos pasos recomendados

1. **Verificar directamente en el servidor** (Hostinger hPanel → Administrador de archivos, o cliente FTP) si existe `.ftp-deploy-sync-state.json` dentro de `/domains/victimasdetestigosdejehova.org/public_html/new/`, y su fecha/contenido.
2. **Forzar una subida completa** ignorando el estado guardado. Opciones:
   - Borrar `.ftp-deploy-sync-state.json` en el servidor antes de relanzar el workflow.
   - Añadir temporalmente `dangerous-clean-slate: true` al step de deploy en `deploy.yml` (borra `server-dir` completo antes de subir), ejecutar una vez, y luego revertir esa línea.
3. **Confirmar el fix**: tras el nuevo deploy, repetir la comprobación con `curl -sD - -o /dev/null "https://new.victimasdetestigosdejehova.org/?cb=$(date +%s)"` y verificar que `Last-Modified` cambia a la fecha de hoy y que el HTML ya no contiene `GlobeMap`.
4. **Revisar manualmente en el Administrador de archivos de Hostinger** (requiere sesión real del usuario) el listado completo de `/new/` para descartar archivos huérfanos de versiones antiguas (p. ej. assets de `GlobeMap`/`WorldMap` que ya no genera el build actual) que puedan quedar sueltos si `dangerous-clean-slate` no se usa.

## Instrucciones para la siguiente sesión: usar el agente/extensión de Chrome

Para los pasos que requieren **sesión autenticada real** del usuario (hPanel de Hostinger, Administrador de archivos, GitHub si el repo pasa a privado, etc.), el navegador integrado de Claude Code (`mcp__Claude_Browser__*`) **no sirve** porque no tiene las sesiones guardadas del usuario. Hay que usar **Claude en Chrome** (`mcp__claude-in-chrome__*`, la extensión sobre el Chrome real del usuario, con sus sesiones ya iniciadas):

- Cargar las herramientas de Chrome con una sola llamada a `ToolSearch`:
  `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp`
- Usarlo para entrar en `hpanel.hostinger.com`, ir a Administrador de archivos de `victimasdetestigosdejehova.org`, y:
  - Comprobar si existe `.ftp-deploy-sync-state.json` en `/public_html/new/` y su fecha.
  - Revisar la fecha de modificación real de `index.html` y de los archivos `_astro/*GlobeMap*` en el servidor.
  - Si aparecen archivos `GlobeMap`/`WorldMap` sueltos tras el fix, borrarlos manualmente o relanzar con `dangerous-clean-slate: true`.
- Recordar: nunca introducir contraseñas por Claude ni tocar configuraciones de cuenta sin confirmación explícita del usuario; solo lectura/navegación asistida salvo que el usuario apruebe una acción concreta.

## Actualización (misma sesión, tras ejecutar los próximos pasos)

Se siguieron los pasos recomendados y se descubrió que **la hipótesis original del archivo de estado desincronizado era incorrecta**. Hallazgos nuevos:

1. **El código en `origin/master` es correcto**: `src/pages/index.astro` importa `DottedWorldMap` y `SpainMap`, y ambos componentes tienen el contenido nuevo (verificado vía `raw.githubusercontent.com`, sin caché de por medio). No hay ningún `public/index.html` ni build cacheado en el repo que pudiera pisar la página generada por Astro.

2. **`.ftp-deploy-sync-state.json` sí existe y funciona**: el log del Run #4 (22 sept, manual, primer deploy real) dice explícitamente *"No file exists on the server... this must be your first publish!"*, con `Local Files: 210 / Server Files: 0`, y tardó 2m 41s en el paso FTP (upload real, no un salto).

3. **Se probó forzar un re-deploy completo** (`dangerous-clean-slate: true`, commit `fb83728`, Run #6, 24 sept): terminó con éxito en 3m 45s (borra `/new/` completo y resube 210 archivos de cero).

4. **Verificación post-deploy — el problema NO se resolvió**: tanto la URL de producción (con query anti-caché) como el archivo real en `/domains/victimasdetestigosdejehova.org/public_html/new/index.html` (confirmado con `fetch` sin caché vía el Administrador de archivos de Hostinger) **siguen mostrando exactamente el mismo contenido viejo**, con el mismo `Last-Modified: Tue, 22 Sep 2026 08:51:09 GMT` de **antes** de los Runs #4 y #6.

**Conclusión revisada**: ni el Run #4 (upload real de 210 archivos, 2m41s) ni el Run #6 (clean-slate, 3m45s) tocaron el archivo que realmente sirve `new.victimasdetestigosdejehova.org`. Ambos runs reportan éxito en GitHub Actions, pero el contenido en el servidor no cambia nunca. Esto apunta a que **los secrets `FTP_SERVER` / `FTP_USERNAME` / `FTP_PASSWORD` de GitHub Actions no apuntan al servidor/cuenta/ruta que se ha verificado manualmente en hPanel** (`srv1341-files.hstgr.io`, usuario `u703604811`, carpeta `public_html`). Se revirtió `dangerous-clean-slate` (commit `4940909`) porque no aportó ningún efecto observable y no tiene sentido dejarlo activo sin entender antes el destino real del FTP.

### Próximos pasos reales

1. **Verificar los GitHub Secrets** (`Settings → Secrets and variables → Actions` en `github.com/joctang/AEVTJ`) — no se pueden leer los valores, pero el usuario debería confirmar si `FTP_SERVER` coincide con `147.93.54.143` / `srv1341-files.hstgr.io` y si `FTP_USERNAME` es `u703604811` (la cuenta FTP verificada en este hosting) o alguna otra cuenta/sub-FTP.
2. Si los secrets son correctos, comprobar si existe **otra cuenta de hosting o servidor** con ese mismo dominio apuntado (por ejemplo, un hosting antiguo aún activo en paralelo, o un registro DNS que en realidad no resuelve al `147.93.54.143` que se verificó).
3. Como prueba diagnóstica más directa: cambiar temporalmente el contenido de un archivo trivial del build (p. ej. un comentario en `index.html` o un archivo `deploy-test.txt` en `public/`), desplegar, y verificar con las credenciales FTP reales (no vía hPanel) si el archivo aparece donde se espera.

## Enlaces relevantes

- Workflow: `astro-site/.github/workflows/deploy.yml`
- Runs: https://github.com/joctang/AEVTJ/actions/workflows/deploy.yml
- Commit que introdujo el mapa nuevo: https://github.com/joctang/AEVTJ/commit/36f8379
- Commit HEAD analizado: `2feb061`
