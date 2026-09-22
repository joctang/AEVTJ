// Rail lateral: elemento activo + línea de progreso de lectura.
// Compartido por la guía de salida y /legal/.

export function initRail(rootSelector: string) {
  const rail = document.querySelector(rootSelector);
  if (!rail) return;

  const enlaces = [...rail.querySelectorAll<HTMLAnchorElement>("a")];
  const porId = new Map(enlaces.map((a) => [a.getAttribute("href")!.slice(1), a]));
  const progreso = rail.querySelector<HTMLElement>(".guia-rail__progreso");
  const secciones = [...porId.keys()]
    .map((id) => document.getElementById(id))
    .filter((s): s is HTMLElement => Boolean(s));

  if ("IntersectionObserver" in window) {
    const activo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            enlaces.forEach((a) => a.classList.remove("is-active"));
            porId.get(entry.target.id)?.classList.add("is-active");
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    secciones.forEach((s) => activo.observe(s));
  }

  let programado = false;
  const pintar = () => {
    programado = false;
    if (!progreso || !secciones.length) return;
    const primera = secciones[0].offsetTop;
    const ultima = secciones[secciones.length - 1];
    const total = ultima.offsetTop + ultima.offsetHeight - primera;
    const avanzado = Math.max(0, Math.min(1, (window.scrollY + window.innerHeight * 0.4 - primera) / Math.max(1, total)));
    progreso.style.height = `${avanzado * 100}%`;
  };
  window.addEventListener("scroll", () => {
    if (!programado) {
      programado = true;
      requestAnimationFrame(pintar);
    }
  }, { passive: true });
  pintar();
}
