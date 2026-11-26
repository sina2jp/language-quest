// Language Quest service worker: offline after the first load.
const CACHE = 'langQuest-7805c6cf0b';
const PRE = ["./","index.html","app.js","app.css","manifest.webmanifest","vocabpics/vocabpics_pack1.js","vocabpics/vocabpics_pack2.js","vocabpics/vocabpics_pack3.js","kit/kitpack-1.js","kit/kitpack-2.js","kit/kitpack-3.js","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","audio/fa-1.js","audio/fa-2.js","audio/fa-3.js","audio/fa-4.js","audio/fa-5.js","audio/fa-6.js","audio/fa-7.js","audio/fa-8.js","audio/fa-9.js","audio/fa-10.js"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('langQuest-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((r) => { if (r.ok && r.type === 'basic') { const c = r.clone(); caches.open(CACHE).then((x) => x.put(e.request, c)); } return r; }).catch(() => caches.match('index.html'))));
});
