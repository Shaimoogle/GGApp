var CACHE_NAME = 'gg-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js',
  '/offline.html',
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

self.addEventListener('activate', function(event){
  console.log('[Service-Worker]:Activation');
  event.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key)
      {
        if(key !== CACHE_NAME)
        {
          console.log('[Service-Worker]:Removing old cache', key);
          return caches.delete(key);
        }
      }))
    })
  )
});

self.addEventListener('fetch', function(event)
{
  console.log('[Service-Worker]:Fetching');
  event.respondWith(
    caches.match(event.request).then(function(response)
    {
      if(response)
      {
        return response;
      }

      return fetch(event.request).then(function(response)
      {
        if(!response || response.status !== 200 || response.type !== 'basic')
        {
          return response;
        }

        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function(cache)
        {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
    })
  )

  if(event.request.mode !== 'navigate')
  {
    return;
  }

  event.respondWith(fetch(event.request)).catch(function()
  {
    return caches.open(CACHE_NAME).then(function(cache)
    {
      return cache.match('/offline.html');
    });
  })
});
