# 🏫 UPT SDN 53 Pinrang - Website Sekolah Modern

Website sekolah dasar negeri yang profesional dan modern dengan desain responsif, menggunakan teknologi terkini.

## 📋 Daftar Isi
- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Struktur Project](#struktur-project)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Desain](#desain)
- [Komponen](#komponen)
- [Browser Support](#browser-support)
- [Lisensi](#lisensi)

## ✨ Fitur Utama

✅ **Header Responsif**
- Top bar dengan informasi kontak
- Navigation bar sticky
- Hamburger menu untuk mobile
- Logo dan nama sekolah

✅ **Hero Section**
- Full screen hero dengan background image
- Overlay gelap dengan gradient
- Judul dan subjudul besar
- Call-to-action buttons

✅ **Running Text**
- Pengumuman otomatis berjalan
- Dapat di-pause dengan hover
- Animasi smooth

✅ **Feature Cards**
- Guru Profesional
- Sekolah Adiwiyata
- Perpustakaan Modern
- Laboratorium IPA

✅ **Statistik Sekolah**
- Jumlah guru
- Jumlah siswa
- Jumlah kelas
- Total prestasi

✅ **Tim Pendidik**
- Kartu guru dengan foto
- Informasi posisi dan keahlian
- Hover effect animasi

✅ **Galeri Sekolah**
- 6 item galeri
- Overlay teks pada hover
- Responsive grid

✅ **PPDB Online**
- Informasi jadwal
- Kuota penerimaan
- Link pendaftaran

✅ **Download Section**
- Brosur sekolah
- Kurikulum
- Formulir PPDB
- Tata tertib

✅ **Contact Section**
- Form hubungi kami
- Informasi kontak lengkap
- Google Maps embed
- Social media links

✅ **Footer**
- Informasi sekolah
- Menu cepat
- Social media
- Copyright

✅ **Scroll to Top**
- Tombol kembali ke atas
- Muncul setelah scroll 300px
- Smooth animation

## 🛠️ Teknologi

| Teknologi | Versi | Deskripsi |
|-----------|-------|----------|
| HTML5 | - | Semantic markup |
| CSS3 | - | Modern styling dengan variables |
| JavaScript | ES6+ | Vanilla JS (tanpa jQuery) |
| Bootstrap | 5.3.0 | Framework CSS dan grid |
| Bootstrap Icons | 1.11.0 | Icon library |
| Google Fonts | - | Poppins font family |

## 📁 Struktur Project

```
uptsdn53pinrang-blogger/
├── index.html                 # Halaman utama
├── README.md                  # Dokumentasi ini
├── assets/
│   ├── css/
│   │   ├── style.css         # Styling global
│   │   ├── header.css        # Header & navbar styling
│   │   ├── hero.css          # Hero & running text
│   │   ├── footer.css        # Footer styling
│   │   └── responsive.css    # Media queries
│   ├── js/
│   │   ├── app.js            # Main application
│   │   ├── menu.js           # Menu interaktif
│   │   └── slider.js         # Running text slider
│   ├── images/
│   │   ├── logo.png          # Logo sekolah
│   │   ├── hero-bg.jpg       # Hero background
│   │   ├── teacher-1.jpg     # Foto guru
│   │   ├── teacher-2.jpg
│   │   ├── teacher-3.jpg
│   │   ├── gallery-1.jpg     # Foto galeri
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   ├── gallery-4.jpg
│   │   ├── gallery-5.jpg
│   │   └── gallery-6.jpg
│   ├── fonts/                # Custom fonts
│   └── vendor/               # Third-party libraries
```

## 🎨 Desain

### Warna Utama
```
Primary Blue:     #0D47A1
Secondary Blue:   #1565C0
Accent Yellow:    #FFC107
Background:       #F5F7FA
Text:             #333333
```

### Elemen Desain
- **Border Radius**: 12px
- **Shadow Modern**: 0 4px 12px rgba(0, 0, 0, 0.1)
- **Animasi**: Smooth transitions 0.3s
- **Glass Effect**: Semi-transparent backgrounds

## 📱 Breakpoints Responsive

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Mobile | 320px - 575px | xs |
| Tablet | 576px - 991px | md |
| Laptop | 992px - 1199px | lg |
| Desktop | 1200px+ | xl |

## 🚀 Instalasi

### 1. Clone atau Download Repository
```bash
git clone <repository-url>
cd uptsdn53pinrang-blogger
```

### 2. Struktur Sudah Siap
Project ini adalah static website, tidak memerlukan instalasi atau build process.

### 3. Buka di Browser
Buka `index.html` langsung di browser atau gunakan live server:

```bash
# Menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js
npx http-server
```

Buka `http://localhost:8000` di browser Anda.

## 💻 Penggunaan

### Menambah Menu Item
Edit di `index.html` dalam section `<ul class="navbar-nav">`:
```html
<li class="nav-item">
    <a class="nav-link" href="#section">
        <i class="bi bi-icon-name"></i> Menu Item
    </a>
</li>
```

### Mengubah Warna
Edit `:root` di `assets/css/style.css`:
```css
:root {
    --primary: #0D47A1;    /* Ubah warna primary */
    --secondary: #1565C0;   /* Ubah warna secondary */
    --accent: #FFC107;      /* Ubah warna accent */
}
```

### Menambah Pengumuman Running Text
Edit di HTML atau gunakan JavaScript:
```javascript
updateRunningText([
    'Pengumuman 1',
    'Pengumuman 2',
    'Pengumuman 3'
]);
```

### Menambah Konten Section
Duplikasi card dan sesuaikan konten:
```html
<div class="feature-card">
    <div class="feature-icon">
        <i class="bi bi-icon"></i>
    </div>
    <h3 class="feature-title">Judul</h3>
    <p class="feature-description">Deskripsi...</p>
</div>
```

## 🎯 Komponen Utama

### 1. Top Bar
- Email, telepon, jam operasional
- Social media links
- Responsive pada mobile

### 2. Navigation
- Sticky menu
- Hamburger menu mobile
- Active menu indicator
- Smooth scroll

### 3. Hero Section
- Full screen display
- Background parallax
- Gradient overlay
- CTA buttons

### 4. Running Text
- Auto-scroll announcement
- Pause on hover
- Cloned items untuk loop

### 5. Feature Cards
- 4 card layout
- Icon dengan gradient
- Hover effects

### 6. Statistics
- 4 stat cards
- Animated counters
- Gradient background

### 7. Teacher Cards
- Image dengan hover zoom
- Position dan expertise
- Responsive grid

### 8. Gallery
- 6 item gallery
- Overlay text
- Hover effects

### 9. Contact Form
- Validasi input
- Social media links
- Google Maps embed

### 10. Footer
- Multi-column layout
- Quick links
- Social icons
- Copyright

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| IE 11 | ⚠️ Limited |

## 📊 SEO Optimization

✅ Semantic HTML5
✅ Meta tags lengkap
✅ Open Graph tags
✅ Mobile-friendly
✅ Fast loading
✅ Accessible markup

## ♿ Accessibility

✅ ARIA labels
✅ Semantic HTML
✅ Keyboard navigation
✅ Color contrast
✅ Focus indicators

## 📝 Lisensi

Properti UPT SDN 53 Pinrang. Semua hak dilindungi.

## 📞 Kontak

**UPT SDN 53 Pinrang**
- Email: info@sdnegeri53pinrang.sch.id
- Telepon: (+62) 851-2345-6789
- Alamat: Jl. Pendidikan No. 53, Pinrang, Sulawesi Selatan

## 👨‍💻 Developer

Dikembangkan oleh Tim IT SDN 53 Pinrang

---

**Last Updated**: July 2024
**Version**: 1.0
