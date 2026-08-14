// মেস খাতা / Meal Tracker — minimal service worker
// Just enough to satisfy "installable PWA" criteria + basic offline app-shell caching.
// Data itself always comes live from Supabase — this only caches the static files
// (HTML/CSS/JS/icons), so the app *shell* opens even with a flaky connection,
// though you'll still need internet to actually load/save meal data.

const CACHE_NAME = 'mess-khata-v1';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './config.js',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// Network-first for everything (so you always get fresh app code when online),
// falling back to the cached app shell when offline.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
