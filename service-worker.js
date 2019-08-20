var CACHE_NAME = 'gg-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js',
  '/offline.html'
];


self.addEventListener('install', function(event) {
  //Installation steps
  console.log('[Service-Worker]:Installation');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[Service-Worker]:Pre-caching');
      return cache.addAll(urlsToCache)
    })
  )
});