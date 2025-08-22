self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('gym-tracker-v1').then(cache => {
      return cache.addAll([
        '/gym-tracker/',
        '/gym-tracker/index.html',
        '/gym-tracker/manifest.json',
        '/gym-tracker/icon.png',
        '/gym-tracker/output.css'
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
