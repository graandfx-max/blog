/* ========================================
   NEWS.JS - DATA DUMMY DAN INTERSECTION OBSERVER
   ======================================== */

// Dummy data untuk section berita, pengumuman, dan unduhan
const newsData = [
    {
        id: 1,
        title: 'Upacara Hari Pendidikan Nasional berjalan lancar',
        summary: 'Siswa dan guru berkumpul untuk memperingati Hari Pendidikan Nasional dengan drama dan penghargaan prestasi.',
        date: '15 Mei 2025',
        thumbnail: 'https://via.placeholder.com/600x400?text=Berita+1',
        url: '#'
    },
    {
        id: 2,
        title: 'Kegiatan bersih-bersih lingkungan sekolah',
        summary: 'Gerakan sekolah bersih melibatkan seluruh kelas untuk meningkatkan kesadaran kebersihan dan kesehatan.',
        date: '20 Mei 2025',
        thumbnail: 'https://via.placeholder.com/600x400?text=Berita+2',
        url: '#'
    },
    {
        id: 3,
        title: 'Siswa juara lomba matematika tingkat kabupaten',
        summary: 'Selamat kepada tim siswa SDN 53 Pinrang yang meraih juara I dalam lomba matematika.',
        date: '22 Mei 2025',
        thumbnail: 'https://via.placeholder.com/600x400?text=Berita+3',
        url: '#'
    },
    {
        id: 4,
        title: 'Pentas seni budaya menampilkan talenta siswa',
        summary: 'Acara pentas seni budaya menjadi momen kreativitas dan kebanggaan bagi sekolah.',
        date: '25 Mei 2025',
        thumbnail: 'https://via.placeholder.com/600x400?text=Berita+4',
        url: '#'
    },
    {
        id: 5,
        title: 'Pelatihan literasi digital untuk siswa dan guru',
        summary: 'Workshop literasi digital memperkuat skill teknologi dalam pembelajaran sehari-hari.',
        date: '28 Mei 2025',
        thumbnail: 'https://via.placeholder.com/600x400?text=Berita+5',
        url: '#'
    },
    {
        id: 6,
        title: 'Program taman baca sekolah dibuka resmi',
        summary: 'Pustaka baru di sekolah menjadi ruang belajar nyaman bagi siswa setiap hari.',
        date: '30 Mei 2025',
        thumbnail: 'https://via.placeholder.com/600x400?text=Berita+6',
        url: '#'
    }
];

const announcementData = [
    {
        id: 1,
        icon: 'bi-megaphone-fill',
        title: 'Libur sekolah hari Jumat',
        date: '18 Mei 2025',
        description: 'Sekolah libur pada hari Jumat karena kegiatan apel bersama dan pelayanan vaksinasi siswa.'
    },
    {
        id: 2,
        icon: 'bi-calendar-event-fill',
        title: 'Jadwal ujian tengah semester',
        date: '23 Mei 2025',
        description: 'Ujian tengah semester dimulai pada tanggal 2 Juni 2025 untuk seluruh kelas I hingga VI.'
    },
    {
        id: 3,
        icon: 'bi-bell-fill',
        title: 'Pembagian rapor semester genap',
        date: '30 Mei 2025',
        description: 'Rakor wali murid diadakan setelah pembagian rapor untuk membahas perkembangan akademik siswa.'
    }
];

const downloadData = [
    {
        id: 1,
        icon: 'bi-calendar3',
        title: 'Kalender Pendidikan',
        description: 'Unduh kalender akademik dan jadwal penting tahun ajaran sekolah.',
        url: '#'
    },
    {
        id: 2,
        icon: 'bi-journal-text',
        title: 'Jadwal Pelajaran',
        description: 'Lihat jadwal pelajaran harian untuk setiap kelas di SDN 53 Pinrang.',
        url: '#'
    },
    {
        id: 3,
        icon: 'bi-file-earmark-person',
        title: 'Formulir PPDB',
        description: 'Formulir pendaftaran siswa baru yang dapat diunduh dan dicetak.',
        url: '#'
    }
];

// Render fungsi untuk berita
function renderNewsCards() {
    const container = document.getElementById('newsCardsContainer');
    if (!container) return;

    // Ambil 6 data berita pertama
    newsData.slice(0, 6).forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6';
        card.innerHTML = `
            <div class="news-card fade-up-on-scroll">
                <div class="news-thumb" style="background-image: url('${item.thumbnail}');"></div>
                <div class="news-body">
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-summary">${item.summary}</p>
                    <div class="news-meta">
                        <span>${item.date}</span>
                        <a href="${item.url}" class="btn btn-sm btn-primary news-btn">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render fungsi untuk pengumuman
function renderAnnouncementCards() {
    const container = document.getElementById('announcementCardsContainer');
    if (!container) return;

    announcementData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-lg-4';
        card.innerHTML = `
            <div class="announcement-card fade-up-on-scroll">
                <div class="announcement-icon">
                    <i class="bi ${item.icon}"></i>
                </div>
                <h3 class="announcement-title">${item.title}</h3>
                <span class="announcement-date">${item.date}</span>
                <p class="announcement-description">${item.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render fungsi untuk download resources
function renderDownloadCards() {
    const container = document.getElementById('downloadCardsContainer');
    if (!container) return;

    downloadData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-lg-4';
        card.innerHTML = `
            <div class="download-resource-card fade-up-on-scroll">
                <div class="resource-icon">
                    <i class="bi ${item.icon}"></i>
                </div>
                <h3 class="resource-title">${item.title}</h3>
                <p class="resource-description">${item.description}</p>
                <a href="${item.url}" class="btn btn-sm btn-outline-primary resource-btn">Download</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Intersection Observer untuk animasi tampilan saat scroll
function initNewsObservers() {
    const elements = document.querySelectorAll('.fade-up-on-scroll');
    if (!elements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
}

// Siapkan render dan observer ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    renderNewsCards();
    renderAnnouncementCards();
    renderDownloadCards();
    initNewsObservers();
});
