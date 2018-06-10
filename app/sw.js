// TODO: add service worker script here
self.addEventListener('install', function (event) {
    console.log('Install');
    event.waitUntil(
        caches
            .open('my-cache-name')
            .then(function (cache) {
                return cache.addAll([
                    'index.html',
                    'app.js',
                    'app.css',
                    'index.js'
                ]);
            })
    );
});
self.addEventListener('activate', function (event) {
    console.log('Activate');
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request);
                }
            }
        )
    );
});