self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
  });

  let cache_name = "SimiCart"; // The string used to identify our cache
self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});


const ASSETS = [
    "/index.html",
    "/offline.html",
    "/"
    
];

self.addEventListener("fetch", event => {
    if (event.request.url === "https://www.simicart.com/") {
        // or whatever your app's URL is
        event.respondWith(
            fetch(event.request).catch(err =>
                self.cache.open(cache_name).then(cache => cache.match("/offline.html"))
            )
        );
    } else {
        event.respondWith(
            fetch(event.request).catch(err =>
                caches.match(event.request).then(response => response)
            )
        );
    }
});