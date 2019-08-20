var CACHE_NAME = 'ggapp-cache-v1';
var urlsToCache = [
  'https://shaimoogle.github.io/GGApp/',
  'https://shaimoogle.github.io/GGApp/styles/main.css',
  'https://shaimoogle.github.io/GGApp/script/main.js',
  'https://shaimoogle.github.io/GGApp/offline.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[Service-Worker]:Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event)
{
});

self.addEventListener('fetch', function(event)
{
  if(event.request.mode !== 'navigate')
  {
    return;
  }
  event.respondWith(fetch(event.request).catch(function()
  {
    return caches.open(CACHE_NAME).then(function(cache)
    {
      return cache.match('https://shaimoogle.github.io/GGApp/offline.html');
    });
  }));

  event.respondWith(caches.match(event.request).then(function(response){
    if(response)
    {
      return response;
    }
    
    return fetch(event.request).then(function(response){
      if(!response || response.status !== 200 || response.type !== 'basic')
      {
        return response;
      }

      var responseToCache = response.clone();

      caches.open(CACHE_NAME).then(function(cache){
        cache.put(event.request, responseToCache);
      });

      return response;
    });
  }));

});
