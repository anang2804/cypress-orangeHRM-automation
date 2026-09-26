🧪 OrangeHRM Cypress Automation Testing
Project automation testing End-to-End (E2E) untuk website OrangeHRM menggunakan Cypress dan JavaScript. Project ini menerapkan pola Page Object Model (POM) untuk membuat script test yang reusable, maintainable, dan terorganisir pada modul Claim OrangeHRM.

📌 Ringkasan Project
📂 Modul	✅ Jumlah Test Case
Claim	8
Total	8

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
│   ├── e2e
│   │   └── claimPage.cy.js
│   │
│   ├── fixtures
│   │   └── claimData.json
│   │
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       ├── loginPage.js
│       └── claimPage.js
│
├── cypress.config.js
├── package.json
└── package-lock.json

🧩 Test Coverage

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
Data pada fixtures/ bersifat dinamis. Situs demo OrangeHRM (opensource-demo.orangehrmlive.com) adalah instance publik yang datanya bisa berubah atau ter-reset sewaktu-waktu karena dipakai bersama banyak pengguna lain. Jika ada test yang gagal karena data (misal Reference ID atau daftar Event tidak ditemukan), cek ulang data valid secara manual di aplikasi, lalu perbarui file di folder fixtures/.

🎯 Tujuan
Tujuan project ini adalah mengotomasi functional testing pada aplikasi web OrangeHRM dengan memvalidasi skenario positive dan negative di modul Claim, guna memastikan regression testing yang reliable dan repeatable.

👤 Author
[Nama Anda]
