// sw.js
self.addEventListener("install", event => {
  console.log("✅ Service Worker instalado");
});

self.addEventListener("fetch", event => {
  // Aquí puedes manejar caché si lo deseas
});
