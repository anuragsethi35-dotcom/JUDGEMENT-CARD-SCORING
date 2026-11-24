const CACHE='judgement-local-v15';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('judgement-local-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return; if(e.request.mode==='navigate'){e.respondWith(fetch(e.request,{cache:'no-cache'}).then(async r=>{if(r.ok){const c=await caches.open(CACHE);await c.put('./index.html',r.clone());}return r;}).catch(()=>caches.match('./index.html')));return;} e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
