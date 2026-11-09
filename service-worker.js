const CACHE_NAME = 'lernraum9-v61';
const APP_ASSETS = [
    './',
    './index.html',
    './chemie.html',
    './chemie-atome.html',
    './chemie-atome-lernen.html',
    './deutsch.html',
    './englisch.html',
    './vokabel.html',
    './vocabulary.css',
    './vocabulary.js',
    './vocabulary-data.js',
    './vocabulary-supabase.js',
    './vocabulary-spaced-repetition.js',
    './vocabulary-quiz.js',
    './vocabulary-dashboard.js',
    './mathematik.html',
    './mathematik-themen.html',
    './mathematik-lernen.html',
    './mathematik.js',
    './math-utils.js',
    './video-resources.js',
    './storage.js',
    './supabase-sync.js',
    './biologie.html',
    './physik.html',
    './physik-themen.html',
    './physik-formelsammlung.html',
    './physik-lernen.html',
    './physik.js',
    './physik-formelsammlung.js',
    './geschichte.html',
    './geographie.html',
    './styles.css',
    './app.js',
    './portal.js',
    './pwa.js',
    './manifest.webmanifest',
    './app-icon.svg',
    './app-icon-192.png',
    './app-icon-512.png',
    './apple-touch-icon.png',
    './periodic-table.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_ASSETS.map(asset => new Request(asset, { cache: 'reload' }))))
    );
});

self.addEventListener('message', event => {
    if (event.data?.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => Promise.all(
                cacheNames
                    .filter(cacheName =>
                        (cacheName.startsWith('chemielern-') || cacheName.startsWith('lernraum9-'))
                        && cacheName !== CACHE_NAME
                    )
                    .map(cacheName => caches.delete(cacheName))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    if (response.ok) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                    }
                    return response;
                })
                .catch(async () => {
                    const cachedPage = await caches.match(request, { ignoreSearch: true });
                    return cachedPage || caches.match('./index.html');
                })
        );
        return;
    }

    event.respondWith(
        caches.match(request).then(cachedResponse => cachedResponse || fetch(request))
    );
});
