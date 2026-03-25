1. Install Jest dan konfigurasi menggunakan babel untuk convert dari JS modern ke JS yang lebih lampau (Dikarenakan sampai saat ini Jest belum mendukung JS Modules masih CommonJS)
2. Jest configuration bisa langsung ada di package.json atau dalam file tersendiri dengan cara generate npx jest --init
3. Jest memiliki banyak configuration command yang bisa digunakan saat running test (bisa di lihat di npx jest --help)
4. Mathcer
  - Equal Matcher (toBe, toEqual)
  - Truthiness Matcher (toBeNull, toBeUndefined, toBeDefined, toBeTruthty, toBeFalsy)
  - Numbers Matcher (toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual)
  - Strings Matcher (toMatch(regex/string))
  - Arrays Matcher (toContain, toContainEqual)
  - Exception Matcher (toThrow, toThrow(exception), toThrow(message))
  - Not Matcher (.not)
5. Test async code (resolves, rejects)
6. Setup function (beforeEach(function), afterEach(function))
7. One-Time Setup function (beforeAll(function), afterAll(function))
8. Scoping
9. Code Coverage
  Bisa menambahkan configuration "collectCoverage": true di Jest, saat menjalankan jest nanti akan auto generate untuk hasil testnya berupa html (jangan lupa di git ignore)
  - Coverage threshold ("coverageThreshold": {}) untuk set berapa persentase yang harus dipenuhi agar unit test berhasil
  - Collect Coverage ("collectCoveerageFrom": []) untuk menentukan bagian spesifik mana yang ingin dihitung sebagai coverage
10. It Function (mirip dengan test biasa)
11. Skip Function (untuk skip unit test yang ingin dilewati terlebih dahulu)
12. Only Function (untuk menjalankan salah satu unit test saja)
13. Each Function (untuk handle jika ada test yang duplikat hanya beda datanya saja)
14. Concurrent Test (Agar test dijalankan secara concurrent)
  Bisa dibatasi maksimal concurrent yang bisa dijalankan melalui konfigurasi jestnya ("maxConcurrency": 5)
15. Todo Test (Untuk membuat todo test yang harus dikerjakan)
16. Failing Function (untuk membuat skenario gagal)
17. Mock
  - Mock Function
  - Mock Async Function
  - Mock Matcher
  - Mock Modules
  - Mock Partial Modules
  - Mock Class
  - Mock Partial Class