// config.js
// Konfigurasi untuk konversi menjadi Template Blogger.
// File ini hanya berisi konfigurasi; jangan melakukan panggilan jaringan di sini.

export const BLOGGER_CONFIG = {
  // URL blog (kosong saat ini, diisi saat integrasi ke Blogger)
  blogUrl: "",

  // Jumlah maksimal posting yang akan diproses / ditampilkan
  maxPosts: 6,

  // Label kategori yang umum digunakan pada situs sekolah
  labels: {
    berita: "Berita",
    galeri: "Galeri",
    pengumuman: "Pengumuman",
    prestasi: "Prestasi"
  }
};

// Export default untuk kenyamanan impor
export default BLOGGER_CONFIG;
