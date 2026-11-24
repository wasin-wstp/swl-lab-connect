self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // ปล่อยผ่านไปยังเซิร์ฟเวอร์จริงเพื่อให้ข้อมูลห้องแล็บสดใหม่เสมอ
});
