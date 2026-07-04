// utils.js
// Utility functions untuk modul Blogger.
// Fungsi-fungsi ini murni (pure) dan tidak melakukan side-effect.

/**
 * formatDate - format tanggal ke string yang ramah pembaca (lokal Indonesia)
 * @param {Date|string|number} date
 * @param {string} locale
 * @returns {string}
 */
export function formatDate(date, locale = 'id-ID') {
  if (!date) return '';
  const d = date instanceof Date ? date : new Date(date);
  try {
    return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) {
    return d.toISOString();
  }
}

/**
 * truncate - potong teks panjang dan tambahkan elipsis
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(text, maxLength = 100) {
  if (typeof text !== 'string') return text || '';
  return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
}

/**
 * isValidConfig - validasi sederhana untuk objek konfigurasi
 * @param {object} cfg
 * @returns {boolean}
 */
export function isValidConfig(cfg) {
  if (!cfg || typeof cfg !== 'object') return false;
  if (!('blogUrl' in cfg)) return false;
  if (!('maxPosts' in cfg)) return false;
  return typeof cfg.blogUrl === 'string' && Number.isInteger(cfg.maxPosts);
}

export default { formatDate, truncate, isValidConfig };
