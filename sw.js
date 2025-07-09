// sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    // MARK: Changed cache name from 'simple-pwa-v2' to 'simple-pwa-v3'
    caches.open('simple-pwa-v3').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './main.js',
        './manifest.json',
        './android-chrome-192x192.png',
        './run.gif'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
