$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$distPath = Join-Path $projectRoot "dist"
$outputPath = Join-Path $projectRoot "output\revision-packages"

if (-not (Test-Path -LiteralPath $distPath -PathType Container)) {
  throw "No encuentro dist. Ejecuta este proceso desde el proyecto Astro."
}

New-Item -ItemType Directory -Path $outputPath -Force | Out-Null
$outputRoot = (Resolve-Path $outputPath).Path
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$stagePath = Join-Path $outputRoot ".revision-preview-$stamp"
$zipPath = Join-Path $outputRoot "revision-preview-$stamp.zip"

if ((Test-Path -LiteralPath $stagePath) -or (Test-Path -LiteralPath $zipPath)) {
  throw "Ya existe un paquete con esta marca de tiempo; no sobrescribo archivos."
}

New-Item -ItemType Directory -Path $stagePath | Out-Null

try {
  Get-ChildItem -LiteralPath $distPath -Force |
    Where-Object { $_.Name -notmatch '^(sitemap.*\.xml|robots\.txt)$' } |
    Copy-Item -Destination $stagePath -Recurse

  $htmlFiles = @(Get-ChildItem -LiteralPath $stagePath -Filter "*.html" -File -Recurse)
  foreach ($file in $htmlFiles) {
    $html = [IO.File]::ReadAllText($file.FullName)
    if ($html -notmatch '<meta\s+name=["'']robots["'']') {
      if ($html -notmatch '</head>') {
        throw "No encuentro </head> en $($file.FullName); no genero un paquete incompleto."
      }
      $html = $html.Replace(
        "</head>",
        '<meta name="robots" content="noindex, nofollow, noarchive" />' + "`n</head>"
      )
      [IO.File]::WriteAllText($file.FullName, $html, [Text.UTF8Encoding]::new($false))
    }
  }

  Compress-Archive -Path (Join-Path $stagePath "*") -DestinationPath $zipPath -CompressionLevel Optimal

  $pagePath = Join-Path $stagePath "testigos-de-jehova\index.html"
  $pageHtml = [IO.File]::ReadAllText($pagePath)
  if ($pageHtml -notmatch 'noindex, nofollow, noarchive') {
    throw "La página de revisión no quedó marcada como noindex."
  }

  $sizeMb = [Math]::Round((Get-Item -LiteralPath $zipPath).Length / 1MB, 2)
  Write-Output "Paquete listo: $zipPath ($sizeMb MB; $($htmlFiles.Count) páginas HTML; noindex; sin sitemap)."
}
finally {
  $resolvedStage = (Resolve-Path -LiteralPath $stagePath).Path
  $stagePrefix = $outputRoot.TrimEnd([IO.Path]::DirectorySeparatorChar) + [IO.Path]::DirectorySeparatorChar
  if (-not $resolvedStage.StartsWith($stagePrefix, [StringComparison]::OrdinalIgnoreCase)) {
    throw "La carpeta temporal está fuera de output; no la borro: $resolvedStage"
  }
  Remove-Item -LiteralPath $resolvedStage -Recurse -Force
}
