const {chromium}=require('C:/Users/jocta/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
 await page.addInitScript(()=>{if(location.protocol==='http:')localStorage.setItem('aevtj-cookie-consent','declined')});
 await page.goto('http://localhost:4322/noticias/entrevista-a-samuel-ferrando-presidente-de-la-aevtj/',{waitUntil:'networkidle'});
 console.log(JSON.stringify(await page.evaluate(()=>[...document.querySelectorAll('*')].filter(el=>{let r=el.getBoundingClientRect();return r.width&&(r.right>innerWidth+1||r.left < -1)}).map(el=>({tag:el.tagName,cls:el.className,html:el.outerHTML.slice(0,250),rect:el.getBoundingClientRect().toJSON()}))),null,2));
 await page.screenshot({path:'output/playwright/article-overflow.png',fullPage:true});
 await page.setViewportSize({width:1440,height:1000});
 await page.goto('http://localhost:4322/quienes-somos/',{waitUntil:'networkidle'});
 await page.getByRole('heading',{name:'Nuestra junta directiva'}).scrollIntoViewIfNeeded();
 await page.screenshot({path:'output/playwright/about-board.png'});
 await browser.close();
})();
