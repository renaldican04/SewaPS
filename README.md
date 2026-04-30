# 🎮 Alvaro PlayStation - Website Sewa PS

Platform website modern untuk jasa sewa PlayStation (PS3, PS4, PS5) dengan antarmuka yang responsif dan user-friendly.

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20Friendly-green)

---

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Instalasi](#instalasi)
- [Struktur File](#struktur-file)
- [Cara Penggunaan](#cara-penggunaan)
- [Responsivitas](#responsivitas)
- [Kontak & Dukungan](#kontak--dukungan)

---

## ✨ Fitur Utama

### 🎯 User Experience
- **Navigasi Mobile-First**: Menu hamburger responsif untuk perangkat mobile
- **Smooth Scrolling**: Navigasi halus antar section
- **Dark Mode Theme**: Desain modern dengan warna AC Milan (merah & hitam)
- **Animasi Smooth**: Efek fade-in dan hover yang elegan

### 📦 Konten Lengkap
- **Hero Section**: Banner utama dengan call-to-action
- **Fitur Layanan**: 4 keunggulan utama layanan
- **Paket Sewa**: 3 pilihan konsol (PS3, PS4, PS5) dengan harga kompetitif
- **Koleksi Game**: Daftar game populer untuk setiap konsol
- **Tentang Kami**: Informasi perusahaan dengan statistik
- **Form Pemesanan**: Integrasi langsung dengan WhatsApp
- **Kontak**: Informasi lengkap (WhatsApp, Email, Lokasi)

### 🎨 Design
- **Color Scheme**: AC Milan Red (#FB090B) & Black (#000000)
- **Typography**: Poppins font family
- **Gradient Design**: Modern gradient backgrounds
- **Card-Based Layout**: Desain yang terstruktur dan rapi

### 📱 Responsivitas Penuh
- **Mobile (≤480px)**: Optimasi sempurna untuk smartphone
- **Tablet (481px-768px)**: Layout 2 kolom yang seimbang
- **Desktop (≥769px)**: Pengalaman desktop premium dengan 3 kolom

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **HTML5** | Struktur semantik modern |
| **CSS3** | Responsive design dengan media queries, Grid, Flexbox |
| **JavaScript (Vanilla)** | Interaktivitas tanpa dependencies |
| **Google Fonts** | Font Poppins untuk typography |
| **Unsplash API** | Gambar hero berkualitas tinggi |

---

## 📥 Instalasi

### Langkah 1: Clone Repository
```bash
git clone https://github.com/username/alvaro-playstation.git
cd alvaro-playstation
```

### Langkah 2: Buka File
Cukup buka file `index.html` di browser favorit Anda:
- Double-click pada `index.html`, atau
- Drag and drop ke browser, atau
- Gunakan Live Server di VS Code

### Langkah 3 (Opsional): Gunakan Live Server
Jika menggunakan VS Code:
1. Install extension "Live Server"
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

---

## 📁 Struktur File

```
alvaro-playstation/
├── index.html          # File HTML utama
├── style.css           # Styling & responsive design
├── script.js           # JavaScript interaktif
├── README.md           # File dokumentasi ini
└── assets/             # (Opsional) Folder untuk gambar/ikon lokal
```

### Deskripsi File

#### `index.html`
- Struktur HTML5 semantik
- Meta tag viewport untuk mobile responsiveness
- Google Fonts link
- Integrasi WhatsApp API

#### `style.css`
- CSS3 dengan custom properties (variables)
- Responsive design dengan 3 breakpoints
- Animasi CSS smooth
- Hamburger menu styling

#### `script.js`
- Hamburger menu functionality
- Smooth scroll navigation
- Form submission handler ke WhatsApp
- Intersection Observer untuk animasi scroll
- Counter animation

---

## 🚀 Cara Penggunaan

### 1. Navigasi
- Klik menu di desktop untuk smooth scroll
- Gunakan hamburger menu di mobile
- Menu otomatis menutup setelah klik link

### 2. Melihat Paket Sewa
- Section "Paket Sewa" menampilkan 3 pilihan konsol
- Setiap paket dilengkapi fitur dan harga
- PS5 ditandai sebagai "TERPOPULER"

### 3. Lihat Koleksi Game
- Section "Game" menampilkan top games per konsol
- 10 game populer untuk setiap platform

### 4. Pemesanan
- 2 cara untuk memesan:
  1. **Kontak Langsung**: Click tombol WhatsApp/Email/Lokasi
  2. **Form Pemesanan**: Isi form dan kirim via WhatsApp otomatis
- Nomor WhatsApp dapat diubah di `script.js` (baris pembuatan pesan WA)

### 5. Edit Konten
- **Warna**: Ubah di `:root` section di `style.css`
- **Harga**: Ubah di section "Paket Sewa" di `index.html`
- **Game**: Edit list game di section "Game" di `index.html`
- **Kontak**: Ubah informasi di section "Kontak" dan `script.js`

---

## 📱 Responsivitas

Website ini fully responsive dengan breakpoints berikut:

### 🔹 Mobile (≤480px)
```css
- Hamburger menu aktif
- Single column layout
- Font size lebih kecil
- Hero height 60vh
- Padding/margin reduce
```

### 🔹 Tablet (481px - 768px)
```css
- Hamburger menu masih aktif
- 2 column grids
- Hero height 70vh
- Medium font size
```

### 🔹 Desktop (≥769px)
```css
- Navbar normal dengan menu horizontal
- 3 column grids optimal
- Full design dengan hover effects
- Desktop experience premium
```

### Touch Optimization
- Minimum touch target: 44x44px
- Input font size: 16px (prevent iOS zoom)
- Disabled hover effects on touch devices
- Better spacing untuk touch interaction

---

## ⚙️ Customization

### Mengubah Warna Brand
Edit di `style.css`:
```css
:root {
    --ac-milan-red: #FB090B;      /* Warna merah */
    --ac-milan-black: #000000;    /* Warna hitam */
    --dark-gray: #1a1a1a;         /* Background gelap */
    --light-gray: #f5f5f5;        /* Background terang */
}
```

### Mengubah Nomor WhatsApp
Edit di `script.js` (cari baris `wa.me`):
```javascript
window.open(`https://wa.me/6282265081432?text=${pesanWA}`, '_blank');
// Ubah nomor 6282265081432 dengan nomor Anda
```

### Menambah/Mengurangi Paket
Edit di `index.html` section "Paket Sewa" dan copy struktur `paket-card`.

---

## 🎯 Fitur JavaScript

### 1. Mobile Menu Toggle
```javascript
// Hamburger button toggle & close
// Auto-close saat klik link
```

### 2. Smooth Scroll Navigation
```javascript
// Scroll smooth ke section saat klik navigasi
// Header offset 60px
```

### 3. Header Dynamic Background
```javascript
// Background berubah saat scroll 100px
// Opacity increased untuk visibilitas
```

### 4. Form to WhatsApp
```javascript
// Ambil data form
// Format pesan WhatsApp
// Redirect ke WhatsApp Web/App
```

### 5. Scroll Animation
```javascript
// Intersection Observer untuk fade-in animation
// Trigger saat element visible
```

---

## 🔧 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Menu mobile tidak muncul | Periksa width layar ≤768px |
| Form tidak kirim ke WhatsApp | Pastikan nomor WhatsApp valid (format: 62...) |
| Hero image tidak loading | Cek koneksi internet / Unsplash API |
| Font tidak tampil | Cek koneksi ke Google Fonts |
| Smooth scroll tidak jalan | Periksa HTML `id` sesuai `href` link |

---

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Safari (iOS) | ✅ Latest |
| Chrome Mobile | ✅ Latest |

---

## 📝 Lisensi

© 2026 Alvaro PlayStation. All rights reserved.

---

## 📞 Kontak & Dukungan

### Informasi Bisnis
- **WhatsApp**: [+62 822-6508-1432](https://wa.me/6282265081432)
- **Email**: caesarrenaldi@gmail.com
- **Lokasi**: Yogyakarta, Indonesia

### Jam Operasional
- **Setiap Hari**: 10:00 - 02:00 WIB

---

## 🎓 Tips Pengembangan Lebih Lanjut

### Rekomendasi Peningkatan
1. **Backend Integration**: 
   - Database untuk menyimpan pesanan
   - Admin dashboard

2. **Payment Gateway**:
   - Integrasi Midtrans/GoPay
   - Invoice otomatis

3. **Analytics**:
   - Google Analytics
   - Conversion tracking

4. **SEO**:
   - Meta descriptions
   - Structured data schema
   - Sitemap

5. **Performance**:
   - Image optimization
   - Lazy loading
   - PWA support

---

## 🤝 Kontribusi

Untuk kontribusi atau saran, silakan:
1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📌 Changelog

### v1.0.0 - Release Pertama
- ✅ Desain mobile-first responsif
- ✅ Hamburger menu untuk mobile
- ✅ Paket sewa 3 konsol
- ✅ Koleksi 30+ game
- ✅ Integrasi WhatsApp
- ✅ Form pemesanan online
- ✅ Smooth animations

---

**Made with ❤️ for PlayStation Lovers**

---

## 📖 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Google Fonts](https://fonts.google.com/)
- [Unsplash](https://unsplash.com/)

---

*Last Updated: April 30, 2026*
