1. Logger - Membuat object logger terlebih dahulu createLogger()
2. Transport - Membuat transport agar logger bisa digunakan, log mau dikirimkan kemana (Console, File, dll) new winston.transports. Setiap transport bisa mengatur levelnya secara individu (tidak ikut dari setting logger)
  - Rotate File (depedency baru daily rotate file) digunakan untuk membuat rotasi file
  - Kita juga bisa membuat transport sendiri dengan membuat turunan dari winston transport
  - Winston juga menyediakan beberapa library transport yang didukung, atau menggunakan transport yang disediakan oleh komunitas
3. Level - Menentukan level dari lognya (secara default yang muncul hanya info keatas), bisa diganti menggunakan konfigurasi level terendah yang ingin diampilkan saat membuat logger
  - error
  - warn
  - info
  - http
  - verbose
  - debug
  - silly
4. Format - Kita bisa mengubah format log yang tampil di setup awal deklarasi logger, secara default log yang tampil menggunakan format .json(). 
  - Custom Format
  Kita juga bisa membuat format sendiri menggunakan .printf()
  - Combine Format
  Kita bisa menggunakan .combine() untuk menggabungkan beberapa format (Tetapi harus dikonfigurasi secara benar agar tidak acak", dan harus diakhiri .json .simple atau .printf)
5. Exceptions - Rejections
  - Winston menyediakan setting agar semua exception yang tidak terhandle di level global/ transport
  - Winston juga menyediakan setting agar semua rejection yang tidak terhandle di level global/ transport 