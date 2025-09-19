const CACHE_NAME = 'vendista-cache-v1';
const urlsToCache = [
  '/patch.vendista/',
  '/patch.vendista/index.html',
  '/patch.vendista/index.tsx',
  '/patch.vendista/App.tsx',
  '/patch.vendista/types.ts',
  '/patch.vendista/constants.ts',
  '/patch.vendista/components/icons.tsx',
  '/patch.vendista/components/LoginCard.tsx',
  '/patch.vendista/components/LanguageSwitcher.tsx',
  '/patch.vendista/components/Dashboard.tsx',
  '/patch.vendista/components/Header.tsx',
  '/patch.vendista/components/DashboardCard.tsx',
  '/patch.vendista/icon.svg',
  '/patch.vendista/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://picsum.photos/1920/1080?blur=5&random=1',
  'https://aistudiocdn.com/react@^19.1.1',
  'https://aistudiocdn.com/react-dom@^19.1.1/'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
