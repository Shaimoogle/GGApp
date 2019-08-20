var CACHE_NAME = 'ggapp-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js',
  '/offline.html'
];

self.addEventListener('install', event => {
  const preCache = async() => {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(urlsToCache);
  }
})