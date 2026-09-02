# 🧪 OrangeHRM Cypress Automation Testing

Project automation testing End-to-End (E2E) untuk website **OrangeHRM** menggunakan **Cypress** dan **JavaScript**.
Project ini menerapkan pola **Page Object Model (POM)** untuk membuat script test yang reusable, maintainable, dan terorganisir pada tiga modul OrangeHRM.

---

## 📌 Ringkasan Project

| 📂 Modul | ✅ Jumlah Test Case |
|---|---|
| Login | 10 |
| Directory | 12 |
| Recruitment | 14 |
| **Total** | **36** |

---

## 🚀 Tech Stack

- Node.js
- Cypress
- JavaScript
- JSON Fixtures
- Page Object Model (POM)

---

## 📁 Struktur Folder

```
cypress-orangeorm-automation
│
├── cypress
│   ├── e2e
│   │   ├── login.cy.js
│   │   ├── directory.cy.js
│   │   └── recruitmentPage.cy.js
│   │
│   ├── fixtures
│   │   ├── loginData.json
│   │   ├── directoryData.json
│   │   └── recruitmentData.json
│   │
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       ├── loginPage.js
│       ├── directoryPage.js
│       └── recruitmentPage.js
│
├── cypress.config.js
├── package.json
└── package-lock.json
```

---

## 🧩 Test Coverage

### 🔐 Modul Login (10 Test Case)

1. TC_LOG_001 — Login dengan username terdaftar dan password yang benar
2. TC_LOG_002 — Login dengan username yang valid dan password invalid
3. TC_LOG_003 — Login dengan username invalid dan password yang valid
4. TC_LOG_004 — Login dengan password dan empty username
5. TC_LOG_005 — Login dengan username dan empty password
6. TC_LOG_006 — Login dengan empty username dan password
7. TC_LOG_007 — Login dengan username case sensitive
8. TC_LOG_008 — Klik link 'Forgot your password?' menuju halaman Reset Password
9. TC_LOG_009 — Submit form Forgot Password dengan field username dikosongkan
10. TC_LOG_010 — Submit form Forgot Password dengan username terdaftar

### 👥 Modul Directory (12 Test Case)

1. TC_DIR_001 — Navigasi ke menu Directory lewat sidebar
2. TC_DIR_002 — Search hanya dengan Employee Name yang valid
3. TC_DIR_003 — Search dengan Employee Name yang tidak terdaftar
4. TC_DIR_004 — Search hanya menggunakan dropdown Job Title
5. TC_DIR_005 — Search hanya menggunakan dropdown Location
6. TC_DIR_006 — Search menggunakan kombinasi Employee Name, Job Title, dan Location
7. TC_DIR_007 — Klik tombol 'Search' tanpa mengisi field apapun
8. TC_DIR_008 — Klik tombol 'Reset' setelah mengisi form pencarian
9. TC_DIR_009 — Verifikasi dropdown Job Title menampilkan daftar opsi yang valid
10. TC_DIR_010 — Verifikasi dropdown Location menampilkan daftar opsi yang valid
11. TC_DIR_011 — Verifikasi hasil pencarian menampilkan Employee Name, Profile Picture, Job Title, dan Location dengan benar
12. TC_DIR_012 — Search dengan karakter spesial pada field Employee Name

### 💼 Modul Recruitment (14 Test Case)

1. TC_REC_001 — Navigasi ke menu Recruitment lewat sidebar
2. TC_REC_002 — Verifikasi tab Candidates dan Vacancies terlihat dan dapat diklik
3. TC_REC_003 — Search hanya menggunakan dropdown Job Title
4. TC_REC_004 — Search hanya menggunakan dropdown Vacancy
5. TC_REC_005 — Search hanya menggunakan dropdown Hiring Manager
6. TC_REC_006 — Search hanya menggunakan dropdown Status
7. TC_REC_007 — Search hanya dengan Candidate Name yang valid
8. TC_REC_008 — Search dengan Candidate Name yang tidak terdaftar
9. TC_REC_009 — Search menggunakan field Keyword dengan kata yang dipisah koma
10. TC_REC_010 — Search dengan 'Date of Application From' dan 'Date of Application To'
11. TC_REC_011 — Search hanya menggunakan dropdown Method of Application
12. TC_REC_012 — Search menggunakan kombinasi beberapa field
13. TC_REC_013 — Klik tombol 'Reset' pada form pencarian
14. TC_REC_014 — Klik tombol 'Add' menuju halaman Add Candidate

---

## 🏗️ Design Pattern

Project ini menggunakan arsitektur **Page Object Model (POM)**.

- 📄 **e2e** → Skenario test & assertion
- 📦 **fixtures** → Data test dalam format JSON
- 🛠️ **support** → Page object & custom command yang reusable

Struktur ini membantu mengurangi duplikasi kode dan mempermudah maintenance test ke depannya.

---

## ⚠️ Catatan Penting

Data pada `fixtures/` bersifat dinamis. Situs demo OrangeHRM (`opensource-demo.orangehrmlive.com`) adalah instance publik yang datanya bisa berubah atau ter-reset sewaktu-waktu karena dipakai bersama banyak pengguna lain. Jika ada test yang gagal karena data (misal nama karyawan/kandidat tidak ditemukan), cek ulang data valid secara manual di aplikasi, lalu perbarui file di folder `fixtures/`.

---

## 🎯 Tujuan

Tujuan project ini adalah mengotomasi functional testing pada aplikasi web OrangeHRM dengan memvalidasi skenario positive dan negative di modul Login, Directory, dan Recruitment, guna memastikan regression testing yang reliable dan repeatable.

---

## 👤 Author

Moch. Anang Ardiansyah
