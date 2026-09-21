import createGlobe from 'cobe';

const canvas = document.querySelector<HTMLCanvasElement>('#globe-canvas');
const label = document.querySelector<HTMLElement>('.globe-label');
const toggle = document.querySelector<HTMLButtonElement>('#globe-toggle');
const data = (window as unknown as {__globeData: {
  markers: {id: string; location: [number,number]; label:string}[];
  arcs: {id:string; from:[number,number]; to:[number,number]}[];
}}).__globeData;

if (canvas && data) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const ratio = Math.min(devicePixelRatio || 1,2);
  let phi = .4;
  let visible = false;
  let paused = false;
  let dragging = false;
  let lastX = 0;
  let frame = 0;
  let lastTime = 0;
  const globe = createGlobe(canvas, {
    devicePixelRatio:ratio, width:canvas.offsetWidth*ratio, height:canvas.offsetWidth*ratio,
    phi, theta:.28, dark:0, diffuse:1.2, mapSamples:16000, mapBrightness:5,
    baseColor:[.35,.42,.28], markerColor:[.30,.38,.16], glowColor:[.84,.88,.76],
    markers:data.markers.map(m=>({...m,size:.045})), arcs:data.arcs,
    arcColor:[.35,.43,.22], arcWidth:.7, arcHeight:.24, markerElevation:.01, opacity:1,
  });
  const render = () => globe.update({phi});
  const mayRotate = () => visible && !document.hidden && !motion.matches && !paused && !dragging;
  const tick = (time:number) => {
    frame = 0;
    if (!mayRotate()) return;
    phi += Math.min(time-lastTime,40)*.00010;
    lastTime = time;
    render();
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (mayRotate()) { lastTime=performance.now(); frame=requestAnimationFrame(tick); }
    if (toggle) {
      toggle.disabled = motion.matches;
      toggle.textContent = motion.matches ? 'Movimiento reducido' : paused ? 'Reanudar giro' : 'Pausar giro';
      toggle.setAttribute('aria-pressed',String(paused || motion.matches));
    }
  };
  const visibility = new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();});
  visibility.observe(canvas);
  const resize = new ResizeObserver(()=>{
    const size=canvas.offsetWidth*ratio;
    globe.update({width:size,height:size,phi});
  });
  resize.observe(canvas);
  const onDown = (event:PointerEvent) => {
    dragging=true;lastX=event.clientX;canvas.setPointerCapture(event.pointerId);sync();
    canvas.style.cursor='grabbing';
  };
  const onMove = (event:PointerEvent) => {
    if (!dragging) return;
    phi+=(event.clientX-lastX)/220;lastX=event.clientX;render();
  };
  const onUp = () => {dragging=false;canvas.style.cursor='grab';sync();};
  canvas.addEventListener('pointerdown',onDown);
  canvas.addEventListener('pointermove',onMove);
  canvas.addEventListener('pointerup',onUp);
  canvas.addEventListener('pointercancel',onUp);
  const onToggle=()=>{paused=!paused;sync();};
  toggle?.addEventListener('click',onToggle);
  motion.addEventListener('change',sync);
  document.addEventListener('visibilitychange',sync);
  if(label) label.textContent='Una red de apoyo conectada con España';
  canvas.style.opacity='1';
  sync();
  window.addEventListener('pageshow',(event)=>{ if(event.persisted) {render();sync();} });
  window.addEventListener('pagehide',(event)=>{
    if(frame) cancelAnimationFrame(frame);
    frame=0;
    if(event.persisted) return;
    visibility.disconnect();resize.disconnect();
    motion.removeEventListener('change',sync);
    document.removeEventListener('visibilitychange',sync);
    globe.destroy();
  });
}
