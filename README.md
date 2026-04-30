# 🎮 Alvaro PlayStation - Website Sewa PS

![Project Banner](https://img.shields.io/badge/Alvaro%20PlayStation-Sewa%20PS%20Terbaik-red?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-renaldican04-blue?style=for-the-badge&logo=github)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Platform website modern untuk jasa sewa PlayStation (PS3, PS4, PS5) dengan antarmuka yang responsif, mobile-friendly, dan user-friendly. Dibangun dengan HTML5, CSS3, dan vanilla JavaScript tanpa dependencies eksternal.

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20Friendly-green)](https://responsive.adobexd.com/)

---

## 📋 Daftar Isi

- [✨ Fitur Utama](#-fitur-utama)
- [🛠️ Teknologi](#️-teknologi)
- [📥 Instalasi](#-instalasi)
- [📁 Struktur Proyek](#-struktur-proyek)
- [🚀 Cara Penggunaan](#-cara-penggunaan)
- [📱 Responsivitas](#-responsivitas)
- [⚙️ Customization](#️-customization)
- [🔧 Troubleshooting](#-troubleshooting)
- [📊 Browser Support](#-browser-support)
- [🤝 Kontribusi](#-kontribusi)
- [📞 Kontak](#-kontak)
- [📝 Lisensi](#-lisensi)

---

## ✨ Fitur Utama

### 🎯 User Experience
- ✅ **Navigasi Mobile-First**: Menu hamburger responsif untuk perangkat mobile
- ✅ **Smooth Scrolling**: Navigasi halus antar section dengan scroll behavior
- ✅ **Dark Mode Theme**: Desain modern dengan warna AC Milan (merah & hitam)
- ✅ **Animasi Smooth**: Efek fade-in dan hover yang elegan dan profesional
- ✅ **Touch Optimization**: Optimasi penuh untuk device mobile/tablet
- ✅ **Fast Loading**: Tanpa dependencies eksternal, load super cepat

### 📦 Konten Lengkap
- 🏠 **Hero Section**: Banner utama dengan call-to-action menarik
- 🎯 **Fitur Layanan**: 4 keunggulan utama layanan
- 💰 **Paket Sewa**: 3 pilihan konsol (PS3, PS4, PS5) dengan harga terjangkau
- 🎮 **Koleksi Game**: 30+ game populer untuk setiap konsol
- 📊 **Tentang Kami**: Informasi perusahaan dengan statistik pelanggan
- 📝 **Form Pemesanan**: Integrasi langsung dengan WhatsApp
- 📍 **Kontak**: WhatsApp, Email, Lokasi (Google Maps)

### 🎨 Design
- **Color Scheme**: AC Milan Red (#FB090B) & Black (#000000)
- **Typography**: Poppins font family (Google Fonts)
- **Gradient Design**: Modern gradient backgrounds
- **Card-Based Layout**: Desain terstruktur dan rapi
- **Professional UI**: Dark mode premium look
- **Icon Integration**: 5 Social media links (Instagram, TikTok, Facebook, YouTube, Twitter)

### 📱 Responsivitas Penuh
```
✅ Mobile (≤480px)   → Single column, optimasi penuh untuk smartphone
✅ Tablet (481-768px) → 2 kolom layout, balanced design
✅ Desktop (≥769px)   → 4 kolom layout, premium experience
```

---

## 🛠️ Teknologi

| Teknologi | Deskripsi | Version |
|-----------|-----------|---------|
| **HTML5** | Struktur semantik modern | Latest |
| **CSS3** | Responsive design, Grid, Flexbox | Latest |
| **JavaScript** | Vanilla JS, tanpa dependencies | ES6+ |
| **Google Fonts** | Font Poppins | 700 |
| **Unsplash API** | Gambar hero berkualitas tinggi | Free |

**No frameworks, no dependencies, no build tools required!** 🚀

---

## 📥 Instalasi

### ⚡ Quick Start (3 Langkah)

#### Langkah 1: Clone Repository
```bash
git clone https://github.com/renaldican04/AlvaroPlayStation.git
cd AlvaroPlayStation
```

#### Langkah 2: Buka di Browser
Pilih salah satu:

**Opsi A - Direct Open**
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Opsi B - Live Server (VS Code)**
1. Install extension "Live Server" (ID: ritwickdey.LiveServer)
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Browser otomatis terbuka di `http://localhost:5500`

**Opsi C - Python Simple Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Buka browser: `http://localhost:8000`

#### Langkah 3: Done! 🎉
Website siap diakses di browser Anda.

---

## 📁 Struktur Proyek

```
AlvaroPlayStation/
│
├── index.html              # File HTML utama (struktur semantik)
├── style.css               # Styling & responsive design (880+ lines)
├── script.js               # JavaScript interaktif (200+ lines)
├── README.md               # File dokumentasi (ini)
│
└── assets/                 # (Optional) Folder untuk aset custom
    ├── images/
    ├── icons/
    └── fonts/
```

### Deskripsi File Utama

#### `index.html` (HTML5 Semantik)
```html
- Meta tags optimal (charset, viewport, SEO)
- Google Fonts integration
- 8 section utama dengan struktur rapi
- Form dengan WhatsApp integration
- Social media links
- Footer terstruktur
```

#### `style.css` (CSS3 Responsive)
```css
- CSS Custom Properties (:root variables)
- Mobile-first approach
- 3 media query breakpoints
- Flexbox & CSS Grid
- Animasi CSS smooth
- Hamburger menu styling
- Touch-friendly optimization
```

#### `script.js` (Vanilla JavaScript)
```javascript
// 1. Mobile Hamburger Menu
- Toggle functionality
- Auto-close saat klik link

// 2. Smooth Scroll Navigation
- Header offset handling
- Smooth behavior

// 3. Dynamic Navbar Background
- Background berubah saat scroll
- Opacity transitions

// 4. WhatsApp Form Integration
- Data collection dari form
- Message formatting
- WhatsApp redirect

// 5. Scroll Animations
- Intersection Observer
- Fade-in effects
```

---

## 🚀 Cara Penggunaan

### 1️⃣ Navigasi
```
Desktop: Klik menu di navbar
Mobile:  Tekan hamburger icon (☰)
         Menu akan slide down
         Auto-close saat klik link
```

### 2️⃣ Melihat Paket Sewa
```
→ Scroll ke section "Paket Sewa"
→ Lihat 3 pilihan konsol (PS3, PS4, PS5)
→ PS5 ditandai "TERPOPULER" dengan highlight
→ Klik "Sewa Sekarang" untuk pemesanan
```

### 3️⃣ Lihat Koleksi Game
```
→ Scroll ke section "Koleksi Game"
→ Lihat 30+ game untuk setiap konsol
→ Top games per platform terekomendasikan
```

### 4️⃣ Pemesanan (2 Cara)

**Cara 1: Kontak Langsung**
```
Klik tombol di section Kontak:
- WhatsApp  → Direct chat
- Email     → Send email
- Lokasi    → Google Maps
```

**Cara 2: Form Pemesanan**
```
1. Isi form:
   - Nama Lengkap
   - Nomor WhatsApp
   - Pilih Paket
   - Tanggal Sewa
   - Pesan tambahan (opsional)

2. Klik "Kirim Pemesanan"
3. Otomatis redirect ke WhatsApp dengan pesan terformat
```

### 5️⃣ Follow Social Media
```
Footer section "Ikuti Kami":
→ Instagram
→ TikTok
→ Facebook
→ YouTube
→ Twitter
```

---

## 📱 Responsivitas

### 🔹 Mobile (≤480px)
```css
✅ Hamburger menu aktif
✅ Single column layout
✅ Font size optimized (1.3rem - 0.95rem)
✅ Hero height 60vh
✅ Padding/margin reduced
✅ Touch targets 44x44px minimum
✅ Input font 16px (prevent iOS zoom)
```

**Breakpoint 480px:**
- Features: 1 kolom
- Packages: 1 kolom
- Games: 1 kolom
- Contact: 1 kolom
- Footer: 1 kolom

### 🔹 Tablet (481px - 768px)
```css
✅ Hamburger menu masih aktif
✅ 2 column grids
✅ Hero height 70vh
✅ Medium font sizes
✅ Better spacing
```

**Breakpoint 481-768px:**
- Features: 2 kolom
- Packages: 2 kolom
- Games: 2 kolom
- Footer: 2 kolom

### 🔹 Desktop (≥769px)
```css
✅ Navbar normal (menu horizontal)
✅ 3-4 column grids optimal
✅ Full hover effects
✅ Premium experience
✅ Max-width 1200px container
```

**Breakpoint 769px+:**
- Features: 4 kolom
- Packages: 3 kolom
- Games: 3 kolom
- Contact: 3 kolom
- Footer: 4 kolom

### 📊 Touch Device Optimization
```css
- Hover effects disabled on touch devices
- Min touch targets: 44x44px
- Input font-size: 16px (prevent zoom)
- Flex wrapping on narrow screens
- Better vertical spacing for thumbs
```

---

## ⚙️ Customization

### 🎨 1. Mengubah Warna Brand

Edit di `style.css` section `:root`:
```css
:root {
    --ac-milan-red: #FB090B;      /* Warna merah utama */
    --ac-milan-black: #000000;    /* Warna hitam */
    --dark-gray: #1a1a1a;         /* Background gelap */
    --light-gray: #f5f5f5;        /* Background terang */
    --white: #ffffff;             /* Putih */
    --gradient: linear-gradient(135deg, #FB090B 0%, #8B0000 100%);
}
```

### 📞 2. Edit Nomor Telepon

Di `index.html` section "Kontak":
```html

<!-- Sesudah -->
<p>0812 3456 7891</p>
```

Jika menggunakan WhatsApp link, update di `script.js`:
```javascript
window.open(`https://wa.me/62812345678`, '_blank');
```

### 💰 3. Edit Harga Paket

Di `index.html` section "Paket Sewa":
```html
<!-- Sebelum -->
<span class="price">Rp 150.000</span>

<!-- Sesudah -->
<span class="price">Rp 200.000</span>
```

### 🎮 4. Edit Koleksi Game

Di `index.html` section "Koleksi Game":
```html
<div class="game-category">
    <h3>🎮 Top Game PS5</h3>
    <ul>
        <li>Game Favorit 1</li>
        <li>Game Favorit 2</li>
        <!-- Tambah/edit game di sini -->
    </ul>
</div>
```

### �️ 4. Edit Lokasi Google Maps

Untuk menambahkan link Google Maps (opsional):
Di `index.html` section "Kontak":
```html
<!-- Dengan link Google Maps -->
<a href="https://goo.gl/maps/YOUR_LOCATION_LINK" target="_blank">Lihat Peta</a>

<!-- Atau tanpa link (text saja) -->
<p>Yogyakarta, Indonesia</p>
```

### 🌐 5. Edit Social Media Links (Opsional)

Jika ingin menambahkan social media di website:
Di `index.html` section "Ikuti Kami" (footer):
```html
<div class="social-links">
    <a href="https://instagram.com/USERNAME" target="_blank">Instagram</a>
    <a href="https://tiktok.com/@USERNAME" target="_blank">TikTok</a>
    <a href="https://facebook.com/USERNAME" target="_blank">Facebook</a>
    <a href="https://youtube.com/@USERNAME" target="_blank">YouTube</a>
    <a href="https://x.com/USERNAME" target="_blank">Twitter</a>
</div>
```

---

## 🎯 Fitur JavaScript Detail

### 1. Mobile Hamburger Menu
```javascript
✅ Click hamburger button
✅ Toggle menu visibility
✅ Click link → auto close
✅ Click outside → auto close
✅ Smooth animation
```

### 2. Smooth Scroll Navigation
```javascript
✅ Detect anchor clicks (#paket, #game, etc)
✅ Calculate offset dari fixed header
✅ Smooth scroll behavior
✅ Works di semua browsers
```

### 3. Dynamic Header Background
```javascript
✅ Monitor scroll position
✅ Scroll > 100px → background opacity up
✅ Smooth transition effect
✅ Visual feedback saat scroll
```

### 4. WhatsApp Form Integration
```javascript
✅ Collect form data
✅ Format message terstruktur
✅ URL encode untuk WhatsApp
✅ Open WhatsApp Web/App
✅ Auto-reset form
```

### 5. Scroll Animations
```javascript
✅ Intersection Observer API
✅ Fade-in effect saat visible
✅ Elements: cards, packages, games
✅ Smooth 0.6s transition
```

---

## 🔧 Troubleshooting

### ❓ FAQ & Solusi

| Masalah | Penyebab | Solusi |
|---------|---------|--------|
| **Hamburger menu tidak muncul** | Viewport width > 768px | Resize browser ke mobile size |
| **Menu tidak menutup** | JavaScript error | Cek console (F12), reload page |
| **Form tidak kirim ke WhatsApp** | Nomor WhatsApp invalid | Ganti dengan format 62XXXXXXXXX |
| **Hero image tidak loading** | No internet connection | Check connection, restart browser |
| **Font Poppins tidak tampil** | Google Fonts blocked | Whitelist fonts.googleapis.com |
| **Smooth scroll tidak jalan** | HTML id tidak sesuai href | Cek spelling id dan href |
| **Responsive layout berantakan** | Viewport meta tag hilang | Pastikan meta viewport ada |
| **Button tidak responsif on mobile** | Touch event listener error | Reload page di mobile |

### 🛠️ Debugging Tips

```javascript
// Buka Developer Tools (F12)
// Check Console untuk errors
// Check Network tab untuk loading issues
// Mobile Emulation untuk test responsive

// Clear browser cache:
Ctrl+Shift+Delete (Windows)
Cmd+Shift+Delete (Mac)
```

### 📝 Edit Kontak

Untuk mengubah nomor telepon atau email:
1. Edit di `index.html` section "Kontak"
2. Edit di `script.js` baris nomor WhatsApp (jika diperlukan)
3. Update di file manapun yang diperlukan

---

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Safari | Latest | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| Mobile Safari (iOS) | iOS 12+ | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |
| Samsung Internet | Latest | ✅ Full Support |
| Firefox Mobile | Latest | ✅ Full Support |

**Tidak support:** IE11 dan lebih lama

---

## 🤝 Kontribusi

Kami menerima kontribusi! Untuk kontribusi atau saran:

1. **Fork** repository ini
2. **Buat branch** fitur baru:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** perubahan:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** ke branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open Pull Request** dengan deskripsi lengkap

### Kontribusi Ideas:
- ✨ UI/UX improvements
- 🌍 i18n (multi-language support)
- 📊 Analytics integration
- 🛒 Payment gateway integration
- 🔐 Backend integration
- 📱 PWA features

---

## 📞 Kontak

### 🎮 Alvaro PlayStation

| Platform | Contact |
|----------|---------|
| 📍 Lokasi | Yogyakarta, Indonesia |
| 📧 Email | [contact@alvaroplaystation.com](mailto:contact@alvaroplaystation.com) |
| 📱 Telepon | 0812 3456 7891 |

**Jam Operasional:**
```
Setiap Hari: 10:00 - 02:00 WIB
Siap melayani Anda! 🎮
```

---

## 👨‍💻 Developer

**Project Creator & Maintainer:**
- **Name:** Renaldi Can
- **GitHub:** [@renaldican04](https://github.com/renaldican04)
- **Portfolio:** [GitHub Profile](https://github.com/renaldican04)

---

## 📝 Lisensi

© 2026 **Alvaro PlayStation**. All rights reserved.

Project ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

**Anda bebas untuk:**
- ✅ Menggunakan project ini untuk keperluan pribadi
- ✅ Memodifikasi kode
- ✅ Mendistribusikan
- ✅ Menggunakan untuk komersial

**Dengan syarat:**
- ✅ Sertakan license dan copyright notice
- ✅ Jangan gunakan trademark Alvaro PlayStation tanpa izin

---

## 📌 Changelog

### v1.0.0 - Initial Release (April 30, 2026)
```
✅ Desain mobile-first responsif penuh
✅ Hamburger menu untuk mobile
✅ Paket sewa 3 konsol (PS3, PS4, PS5)
✅ Koleksi 30+ game populer
✅ Integrasi WhatsApp untuk pemesanan
✅ Form pemesanan online otomatis
✅ Smooth animations & transitions
✅ Social media integration (5 platform)
✅ Google Maps integration
✅ Dark mode premium design
✅ Touch-friendly UI
✅ No dependencies (vanilla JS)
✅ Fast loading & optimized
✅ Full README documentation
```

---

## 🎓 Tips Pengembangan Lanjutan

### Rekomendasi Fitur Tambahan:

**1. Backend Integration** 🔌
```
- Database (Firebase, MongoDB)
- Admin dashboard
- Order management system
- User accounts
```

**2. Payment Gateway** 💳
```
- Midtrans integration
- GoPay support
- Bank transfer
- Invoice generator
```

**3. Analytics** 📊
```
- Google Analytics
- Conversion tracking
- User behavior analysis
- Performance metrics
```

**4. SEO Optimization** 🔍
```
- Meta descriptions
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt
```

**5. Performance** ⚡
```
- Image lazy loading
- Code splitting
- Minification
- PWA support
- Service workers
```

**6. Features** ✨
```
- Multi-language support
- Dark/Light mode toggle
- Promo/coupon system
- Booking calendar
- Reviews & ratings
```

---

## 🌟 Star & Follow!

Jika project ini membantu Anda, silakan:
- ⭐ **Star** repository ini
- 👀 **Watch** untuk update terbaru
- 🍴 **Fork** untuk customization
- 📢 **Share** ke teman-teman
- 💬 **Issue** untuk bug reports

---

## 📖 Resources & References

Pelajari lebih lanjut:

| Resource | Link |
|----------|------|
| MDN Web Docs | https://developer.mozilla.org/ |
| CSS Tricks | https://css-tricks.com/ |
| JavaScript.info | https://javascript.info/ |
| Google Fonts | https://fonts.google.com/ |
| Unsplash Images | https://unsplash.com/ |
| Can I Use | https://caniuse.com/ |
| GitHub Pages | https://pages.github.com/ |

---

## 🎉 Terima Kasih!

Terima kasih telah mengunjungi project Alvaro PlayStation!
Semoga website ini membantu bisnis sewa PlayStation Anda berkembang pesat! 🚀

**Happy Coding & Happy Gaming!** 🎮

---

**Made with ❤️ by [Renaldi Can](https://github.com/renaldican04)**

*Last Updated: April 30, 2026*

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

### 🎨 Mengubah Warna Brand
Edit di `style.css`:
```css
:root {
    --ac-milan-red: #FB090B;      /* Warna merah */
    --ac-milan-black: #000000;    /* Warna hitam */
    --dark-gray: #1a1a1a;         /* Background gelap */
    --light-gray: #f5f5f5;        /* Background terang */
}
```

### 📞 Mengubah Nomor Telepon
Edit di `index.html` section "Kontak":
```html
<!-- Ubah nomor di sini -->
<p>0812 3456 7891</p>
```

### 📧 Mengubah Email
Edit di `index.html` section "Kontak":
```html
<!-- Ubah email di sini -->
<a href="mailto:contact@alvaroplaystation.com">Kirim Email</a>
```

### 💰 Mengubah Harga Paket
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
- **Email**: [contact@alvaroplaystation.com](mailto:contact@alvaroplaystation.com)
- **Telepon**: 0812 3456 7891
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
