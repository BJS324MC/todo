const cacheName="TODOLIST",
assets=[
  "main.js",
  "style.css",
  "Patrick Hand.ttf",
  "index.html",
  "icon.jpg"
];
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})