// Language Quest service worker: offline after the first load.
// Precache with fresh requests (never from the browser's HTTP cache); the page and the app code are network-first with a
// cache fallback, so an update can't get stuck on an old app.js; the big packs (kit, audio, vocabpics) are cache-first.
const CACHE = 'langQuest-v7-67007c13a3';
const PRE = ["./","index.html","app.js","app.css","manifest.webmanifest","vocabpics/vocabpics_pack1.js","vocabpics/vocabpics_pack2.js","vocabpics/vocabpics_pack3.js","kit/kitpack-1.js","kit/kitpack-2.js","kit/kitpack-3.js","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","audio/fa-1.js","audio/fa-2.js","audio/fa-3.js","audio/fa-4.js","audio/fa-5.js","audio/fa-6.js","audio/fa-7.js","audio/fa-8.js","audio/fa-9.js","audio/fa-10.js"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRE.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('langQuest-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
const FRESH = /(\/|\/index\.html|\/app\.js|\/app\.css)$/;
const net = (req) => (req.mode === 'navigate' ? fetch(req) : fetch(new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' })));
const keep = (req, r) => { if (r && r.ok && r.type === 'basic') { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); } return r; };
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (e.request.mode === 'navigate' || FRESH.test(u.pathname)) {
    e.respondWith(net(e.request).then((r) => keep(e.request, r)).catch(() => caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((r) => keep(e.request, r)).catch(() => caches.match('index.html'))));
});
