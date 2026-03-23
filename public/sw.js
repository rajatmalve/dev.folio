const CACHE_VERSION = "v1";
const CACHE_NAME = `devfolio-pwa-${CACHE_VERSION}`;

// Keep this list small; Vite builds will change hashed asset URLs.
const CORE_ASSETS = ["/", "/index.html", "/manifest.webmanifest", "/favicon.svg", "/favicon.ico"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => (key === CACHE_NAME ? null : caches.delete(key))));
      await self.clients.claim();
    })()
  );
});

function isNavigationRequest(request) {
  // SPA navigation or direct page load.
  return request.mode === "navigate" || (request.headers.get("accept") || "").includes("text/html");
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Only handle same-origin requests (ignore external domains).
  if (url.origin !== self.location.origin) return;

  // Navigation: network-first, fallback to cached index.html.
  if (isNavigationRequest(request)) {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          // Cache the response if possible (helps with offline refreshes).
          if (response && response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
          }
          return response;
        } catch (e) {
          const cache = await caches.open(CACHE_NAME);
          const cachedIndex = await cache.match("/index.html");
          return cachedIndex || new Response("Offline", { status: 503 });
        }
      })()
    );
    return;
  }

  // Static assets: cache-first.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;

      try {
        const response = await fetch(request);
        if (response && response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      } catch (e) {
        // If offline and not in cache, just rethrow-like fallback.
        return cached || new Response("Offline", { status: 503 });
      }
    })()
  );
});

