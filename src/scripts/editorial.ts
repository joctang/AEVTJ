// One observer for entrances; one scheduled frame for scroll-linked depth.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const main = document.querySelector('main');
if (!document.querySelector('.home-premium')) {
  main?.querySelectorAll('h1,h2,section > div > .grid > *,article .prose > h3').forEach(el => {
    if (!el.closest('[data-reveal]')) el.setAttribute('data-reveal', '');
  });
}
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
  // Keyboard navigation must reveal focused content immediately.
  document.addEventListener('focusin', event => {
    if (event.target instanceof Element) event.target.closest('[data-reveal]')?.classList.add('is-visible');
  });
  document.documentElement.classList.add('reveal-ready');
}

const home = document.querySelector<HTMLElement>('.home-premium');
const sceneObserver = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting && home) {
    home.dataset.scene = (entry.target as HTMLElement).dataset.scene;
  }
}, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });
document.querySelectorAll('[data-scene]').forEach(el => sceneObserver.observe(el));

const progress = document.querySelector<HTMLElement>('.site-progress');
const header = document.querySelector('.site-header');
const hero = document.querySelector<HTMLElement>('.premium-hero');
const heroImage = document.querySelector<HTMLElement>('.premium-hero__image');
const media = [...document.querySelectorAll<HTMLElement>('.layered-media')];
const activeMedia = new Set<HTMLElement>();
const mediaObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) activeMedia.add(entry.target as HTMLElement);
    else activeMedia.delete(entry.target as HTMLElement);
  }
});
media.forEach(el => mediaObserver.observe(el));
let scheduled = false;
const renderScroll = () => {
  scheduled = false;
  const y = window.scrollY;
  const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const heroHeight = hero?.offsetHeight ?? 0;
  // Read geometry before writing transforms.
  const positions = reducedMotion.matches ? [] : [...activeMedia].map(el => ({el, rect: el.getBoundingClientRect()}));
  if (progress) progress.style.transform = `scaleX(${Math.min(1, y / total)})`;
  header?.classList.toggle('is-scrolled', y > 40);
  if (heroImage && !reducedMotion.matches && y < heroHeight) {
    heroImage.style.transform = `translateY(${Math.min(y * .15, 110)}px) scale(1.09)`;
  }
  for (const {el,rect} of positions) {
    const offset = Math.max(-24, Math.min(24, (rect.top + rect.height / 2 - window.innerHeight / 2) * .045));
    const photo = el.querySelector('img');
    const layer = el.querySelector('span');
    if (photo) photo.style.transform = `translateY(${offset}px)`;
    if (layer) layer.style.transform = `translateY(${-offset * .7}px)`;
  }
};
const scheduleScroll = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(renderScroll); } };
window.addEventListener('scroll', scheduleScroll, {passive: true});
window.addEventListener('resize', scheduleScroll);
window.addEventListener('load', scheduleScroll, {once: true});
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) {
    if (heroImage) heroImage.style.transform = '';
    media.forEach(el => el.querySelectorAll<HTMLElement>('img,span').forEach(child => child.style.transform = ''));
  }
  scheduleScroll();
});
scheduleScroll();

const statObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    statObserver.unobserve(entry.target);
    const el = entry.target as HTMLElement;
    const target = Number(el.dataset.statTarget);
    if (reducedMotion.matches) { el.textContent = String(target); continue; }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1100);
      el.textContent = String(Math.round(target * (1 - (1-t) ** 3)));
      if (t < 1 && !reducedMotion.matches) requestAnimationFrame(tick);
      else el.textContent = String(target);
    };
    requestAnimationFrame(tick);
  }
}, {threshold: .5});
document.querySelectorAll('[data-stat-target]').forEach(el => statObserver.observe(el));
