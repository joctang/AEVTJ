# Traspaso de sesión: migrar deploy de Netlify a Hostinger — dominio principal (26 sept 2026)

## Contexto
Continuación de [`TRASPASO_DEPLOY_2026-09-24.md`](TRASPASO_DEPLOY_2026-09-24.md) y [`DIAGNOSTICO_MAPA_DEPLOY_2026-09-24.md`](DIAGNOSTICO_MAPA_DEPLOY_2026-09-24.md). El usuario pidió cambiar el deploy del sitio de Netlify a Hostinger.

**Estado al empezar esta sesión:**
- El repo ya no tenía nada de Netlify (sin `netlify.toml`).
- `.github/workflows/deploy.yml` ya hacía build de Astro y subía por FTP a Hostinger, pero apuntando al subdominio de pruebas `nuevo.victimasdetestigosdejehova.org` (`server-dir: /nuevo/`).
- Ese subdominio de pruebas seguía roto (servía la "Página por defecto" de Hostinger) por un bug de configuración de vhost del lado de Hostinger — diagnosticado a fondo en la sesión del 24 sept, sin resolver.
- El **dominio principal** `victimasdetestigosdejehova.org` sigue sirviendo el **WordPress real** (el sitio en vivo de la asociación). Netlify solo alojaba una preview/staging del Astro nuevo, sin relación con el DNS del dominio principal.

## Decisión tomada con el usuario en esta sesión
Ante el bug irresoluble del subdominio `nuevo`, el usuario decidió **abandonar el subdominio de pruebas y desplegar directamente sobre el dominio principal**, reemplazando el WordPress en vivo por el sitio Astro nuevo. Confirmó explícitamente:
- Sí, quiere reemplazar el WordPress ahora.
- El backup existente de hace ~16 días es suficiente (`u703604811.victimasdetestigosdejehova-org.20260904095421.tar.gz` + `u703604811_wpKEB.victimasdetestigosdejehova-org.20260904095421.sql.gz`, ambos en la carpeta `C:\PROYECTOS\Clientes\AEVTJ\` raíz, **no** dentro de `astro-site`). No se generó backup fresco adicional.

## Cambio aplicado
Se editó [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), paso "Deploy to Hostinger via FTP":

```diff
-          server-dir: /nuevo/
-
-      - name: Remove Hostinger placeholder default.php
-        run: |
-          sudo apt-get update -qq && sudo apt-get install -y -qq lftp
-          lftp -u "${{ secrets.FTP_USERNAME }}","${{ secrets.FTP_PASSWORD }}" "${{ secrets.FTP_SERVER }}" -e "set ssl:verify-certificate no; set ftp:ssl-allow no; cd /nuevo/; rm -f default.php; ls -la; bye" || true
+          server-dir: /
+          dangerous-clean-slate: true
```

Es decir, ahora apunta a la **raíz de `public_html`** (dominio principal) y usa `dangerous-clean-slate: true` para borrar todo el WordPress existente antes de subir el build de Astro (necesario porque el `.htaccess` de WordPress rompería el enrutado estático de Astro si se dejaba).

Este cambio se commiteó y se hizo push a `master` desde GitHub Desktop por el usuario.

## Resultado: el deploy FALLÓ (sitio en vivo NO se tocó)

- Run de GitHub Actions: `#25`, commit `26246ec`, run id `36224277934`, job id `108355169687`.
- URL: https://github.com/joctang/AEVTJ/actions/runs/36224277934/job/108355169687
- Pasos previos (Checkout, Setup Node, Install dependencies, Build site) — todos ✅ correctos.
- Paso **"Deploy to Hostinger via FTP" falló** con:
  ```
  FTPError: 550 _astro: No such file or directory
  ```
- **Verificado con el navegador inmediatamente después del fallo**: `https://victimasdetestigosdejehova.org/` sigue sirviendo el **WordPress original intacto** (se confirmó cargando la home real, con el menú "¿QUIENES SOMOS? / NOTICIAS / DOCUMENTOS / ..." y el contenido de la asociación). **El WordPress NO fue borrado ni dañado.**

### Hipótesis sobre la causa del error (sin confirmar, pendiente de investigar)
No se pudo ver el log completo del step porque GitHub ahora exige **iniciar sesión** para ver logs detallados de Actions, incluso en repos públicos ("Sign in to view logs"). Solo se pudo ver el mensaje de error vía las "Annotations" (que sí son públicas):
```
Deploy to Hostinger via FTP
FTPError: 550 _astro: No such file or directory
```
Posibles causas a investigar en la próxima sesión:
1. **`.ftp-deploy-sync-state.json` residual**: la `FTP-Deploy-Action` guarda un archivo de estado en el propio servidor FTP para no re-subir archivos sin cambios. Si quedó un estado viejo de un deploy anterior a `/nuevo/` con referencias a `_astro`, podría estar confundiendo el cálculo de diff al cambiar de `server-dir`. Revisar si existe `/.ftp-deploy-sync-state.json` en la raíz de `public_html` y borrarlo manualmente por FTP antes de reintentar.
2. **Orden de borrado de `dangerous-clean-slate`**: podría estar fallando al intentar borrar o re-crear la carpeta `_astro` (donde Astro pone JS/CSS) por algún problema de permisos FTP o de timing (la acción intenta borrar recursivamente y luego re-verifica, y el archivo/carpeta ya no existe cuando lo intenta borrar de nuevo → error "no such file or directory").
3. Confirmar si la cuenta FTP (`u703604811`) tiene permisos de escritura completos en la raíz de `public_html` (no solo en la subcarpeta `/nuevo/` donde sí funcionaba antes).

## Próximos pasos recomendados para la siguiente sesión
1. **Ver el log completo del run fallido** iniciando sesión en GitHub (con la cuenta que sí tiene acceso, la que está en Chrome del usuario) para ver exactamente en qué línea/operación FTP ocurre el error 550 sobre `_astro`.
   - URL directa: https://github.com/joctang/AEVTJ/actions/runs/36224277934/job/108355169687
2. Revisar/borrar manualmente por FTP (o con `lftp` en un step temporal de debug) el archivo `.ftp-deploy-sync-state.json` en la raíz de `public_html`, si existe.
3. Considerar probar el mismo cambio (`server-dir: /`, `dangerous-clean-slate: true`) primero contra un entorno de bajo riesgo (ej. reactivar `/nuevo/` un momento) para depurar el error de FTP sin arriesgar el dominio principal en cada intento — aunque el usuario ya optó por ir directo a producción, así que esto es opcional/sugerido, no decidido.
4. Una vez resuelto el error de FTP, re-lanzar el workflow (push vacío o `workflow_dispatch` desde la pestaña Actions) y verificar:
   - Que el run termine en verde.
   - Que `https://victimasdetestigosdejehova.org/` cargue el sitio Astro nuevo (mapa `dotted-world-map`, no el WordPress).
   - Que no queden restos de WordPress accesibles (`/wp-admin/`, `/wp-login.php`, etc. deberían dar 404 tras el clean-slate).
5. Recordar que la base de datos MySQL de WordPress (backup `.sql.gz`) queda intacta en el servidor pase lo que pase con los archivos — el borrado es solo de archivos FTP, no de la BD.

## Datos técnicos clave (recordatorio, igual que el 24 sept)
- **Cuenta FTP Hostinger**: usuario `u703604811`, host `147.93.54.143`, puerto 21 (sin TLS).
- **Repo**: `github.com/joctang/AEVTJ`, proyecto Astro en la raíz del repo.
- **Carpeta local real del repo** (¡ojo, NO es la de OneDrive!): `C:\PROYECTOS\Clientes\AEVTJ\astro-site`. La ruta bajo OneDrive (`C:\Users\jocta\OneDrive\Documentos\Proyectos y Clientes\AEVTJ`) es una copia/backup desincronizada y con un `.git` corrupto (sin `HEAD`/`config`) — **no usar esa ruta para trabajar en el código**, usar siempre `C:\PROYECTOS\Clientes\AEVTJ\astro-site`.
- **Backups de WordPress existentes** (en `C:\PROYECTOS\Clientes\AEVTJ\`, fuera de `astro-site`): `u703604811.victimasdetestigosdejehova-org.20260904095421.tar.gz` (archivos) y `u703604811_wpKEB.victimasdetestigosdejehova-org.20260904095421.sql.gz` (base de datos), del 4-10 sept 2026 (~16 días de antigüedad respecto a hoy).
- **Los logs detallados de GitHub Actions ahora requieren login** — la cuenta usada en esta sesión no tenía sesión iniciada en el navegador integrado de Claude Code. El usuario continuará desde su Chrome, donde sí tiene sesión de GitHub abierta.
