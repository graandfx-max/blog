// bloggerFeed.js
// Modul scaffold untuk integrasi feed Blogger.
// Saat ini hanya menyiapkan struktur modular dan fungsi pembantu.
// PERINGATAN: Belum ada pemanggilan jaringan atau parsing feed — implementasi nanti.

import { BLOGGER_CONFIG } from './config.js';
import { formatDate, truncate, isValidConfig } from './utils.js';

/**
 * BloggerFeed - kelas pembungkus untuk menangani logika pengambilan
 * dan normalisasi data posting dari Blogger. Saat ini hanya scaffold.
 */
export class BloggerFeed {
  constructor(config = BLOGGER_CONFIG) {
    this.config = config;
    if (!isValidConfig(this.config)) {
      // Hanya peringatan struktur; jangan mengubah perilaku UI di sini.
      console.warn('BloggerFeed: konfigurasi tidak valid atau belum diisi', this.config);
    }
  }

  /**
   * getPosts - placeholder untuk mengambil posting.
   * Belum melakukan request; mengembalikan Promise yang resolve ke array kosong.
   * Implementasi nanti: panggil Blogger API / feed XML, parse, lalu map ke objek normal.
   */
  async getPosts() {
    return Promise.resolve([]);
  }

  /**
   * normalizePost - contoh transformasi objek post mentah menjadi bentuk yang
   * siap dirender pada template. Sesuaikan saat implementasi nyata.
   */
  normalizePost(raw = {}) {
    return {
      title: raw.title || '',
      url: raw.url || raw.link || '',
      published: raw.published ? formatDate(raw.published) : '',
      excerpt: raw.content ? truncate(raw.content, 160) : ''
    };
  }
}

export default BloggerFeed;
