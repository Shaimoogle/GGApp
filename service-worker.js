var CACHE_NAME = 'ggapp-cache-v3';
var urlsToCache = [
  'https://shaimoogle.github.io/GGApp/',
  'https://shaimoogle.github.io/GGApp/chat.html',
  'https://shaimoogle.github.io/GGApp/invoices.html',
  'https://shaimoogle.github.io/GGApp/timetable.html',
  'https://shaimoogle.github.io/GGApp/styles/main.css',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-grid.css',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-grid.css.map',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-grid.min.css',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-grid.min.css.map',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-reboot.css',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-reboot.css.map',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-reboot.min.css',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap-reboot.min.css.map',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap.css',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap.css.map',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap.min.css',
  'https://shaimoogle.github.io/GGApp/styles/bootstrap.min.css.map',
  'https://shaimoogle.github.io/GGApp/scripts/main.js',
  'https://shaimoogle.github.io/GGApp/scripts/jquery-3.4.1.min.js',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.bundle.js',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.bundle.js.map',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.bundle.min.js',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.bundle.min.js.map',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.js',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.js.map',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.min.js',
  'https://shaimoogle.github.io/GGApp/scripts/bootstrap.min.js.map'
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

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(caches.keys().then(function(keyList)
  {
    return Promise.all(keyList.map(function(key)
    {
      if(cacheWhitelist.indexOf(key) === -1)
      {
        console.log('[Service-Worker]:Deleted old cache');
        return caches.delete(key);
      }
    }));
  }));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(async function() {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});

self.addEventListener('fetch', function(event)
{
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
});