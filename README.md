🧪 OrangeHRM Cypress Automation Testing
Project automation testing End-to-End (E2E) untuk website OrangeHRM menggunakan Cypress dan JavaScript. Project ini menerapkan pola Page Object Model (POM) untuk membuat script test yang reusable, maintainable, dan terorganisir pada tiga modul OrangeHRM.

📌 Ringkasan Project
📂 Modul ✅ Jumlah Test Case
Admin 8
PIM 8
Claim 8
Total 24

🚀 Tech Stack
Node.js
Cypress
JavaScript
JSON Fixtures
Page Object Model (POM)

📁 Struktur Folder
cypress-orangehrm-automation
│
├── cypress
│ ├── e2e
│ │ ├── adminPage.cy.js
│ │ ├── pimPage.cy.js
│ │ └── claimPage.cy.js
│ │
│ ├── fixtures
│ │ ├── adminData.json
│ │ ├── pimData.json
│ │ └── claimData.json
│ │
│ └── support
│ ├── commands.js
│ ├── e2e.js
│ ├── loginPage.js
│ ├── adminPage.js
│ ├── pimPage.js
│ └── claimPage.js
│
├── cypress.config.js
├── package.json
└── package-lock.json

🧩 Test Coverage
👤 Modul Admin (8 Test Case)
TC-ADM-001 — Search user menggunakan Username yang valid
TC-ADM-002 — Search user menggunakan Username yang tidak terdaftar
TC-ADM-003 — Search user berdasarkan User Role = Admin
TC-ADM-004 — Search user berdasarkan Status = Enabled
TC-ADM-005 — Search kombinasi Username + User Role + Status
TC-ADM-006 — Reset filter setelah hasil pencarian ditampilkan
TC-ADM-007 — Verifikasi sorting Username ascending dan descending
TC-ADM-008 — Search Username dengan spasi di awal dan akhir
🧑‍💼 Modul PIM (8 Test Case)
TC-PIM-001 — Menampilkan halaman Employee List dengan elemen lengkap
TC-PIM-002 — Search karyawan menggunakan Employee Name yang valid
TC-PIM-003 — Search karyawan menggunakan Employee Name yang tidak terdaftar
TC-PIM-004 — Reset filter setelah pencarian dilakukan
TC-PIM-005 — Pengguna dapat membuka halaman Add Employee
TC-PIM-006 — Tambah karyawan dengan data valid
TC-PIM-007 — Tambah karyawan tanpa mengisi First Name
TC-PIM-008 — Tambah karyawan menggunakan Employee ID yang sudah terdaftar
💰 Modul Claim (8 Test Case)
TC-CLM-001 — Membuat Claim dengan data valid
TC-CLM-002 — Membuat Claim tanpa memilih Event
TC-CLM-003 — Membuat Claim tanpa memilih Currency
TC-CLM-004 — Membuat Claim tanpa Event dan Currency
TC-CLM-005 — Cancel pembuatan Claim
TC-CLM-006 — Search Claim berdasarkan Reference ID
TC-CLM-007 — Search Claim menggunakan Reference ID tidak terdaftar
TC-CLM-008 — Reset filter pencarian Claim
🏗️ Design Pattern
Project ini menggunakan arsitektur Page Object Model (POM).

📄 e2e → Skenario test & assertion
📦 fixtures → Data test dalam format JSON
🛠️ support → Page object & custom command yang reusable
Struktur ini membantu mengurangi duplikasi kode dan mempermudah maintenance test ke depannya.

⚠️ Catatan Penting
Data pada fixtures/ bersifat dinamis. Situs demo OrangeHRM (opensource-demo.orangehrmlive.com) adalah instance publik yang datanya bisa berubah atau ter-reset sewaktu-waktu karena dipakai bersama banyak pengguna lain. Jika ada test yang gagal karena data (misal Username, Employee Name, atau Reference ID tidak ditemukan), cek ulang data valid secara manual di aplikasi, lalu perbarui file di folder fixtures/.

🎯 Tujuan
Tujuan project ini adalah mengotomasi functional testing pada aplikasi web OrangeHRM dengan memvalidasi skenario positive dan negative di modul Admin, PIM, dan Claim, guna memastikan regression testing yang reliable dan repeatable.

👤 Author
Moch. Anang Ardiansyah
