1. Logger - Membuat object logger terlebih dahulu createLogger()
2. Transport - Membuat transport agar logger bisa digunakan, log mau dikirimkan kemana (Console, File, dll) new winston.transports
3. Level - Menentukan level dari lognya (secara default yang muncul hanya info keatas), bisa diganti menggunakan konfigurasi level terendah yang ingin diampilkan saat membuat logger
  - error
  - warn
  - info
  - http
  - verbose
  - debug
  - silly
4. 