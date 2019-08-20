var CACHE_NAME = 'ggapp-cache-v1';
var urlsToCache = [
  'https://shaimoogle.github.io/GGApp/',
  'https://shaimoogle.github.io/GGApp/styles/main.css',
  'https://shaimoogle.github.io/GGApp/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
