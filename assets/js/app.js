/* ========================================
   APP.JS - MAIN APPLICATION
   Inisialisasi dan Fungsi Utama
   ======================================== */

// ========================================
// DOCUMENT READY INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initialized');
    
    // Inisialisasi semua modul
    initScrollToTop();
    initContactForm();
    initSmoothScroll();
    initNavigation();
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (!scrollToTopBtn) return;
    
    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 120;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// NAVIGATION INITIALIZATION
// ========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.getElementById('navbarNav');
    const hamburger = document.getElementById('hamburgerBtn');
    
    // Tambah active class pada nav item saat diklik
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class dari semua nav links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class ke nav link yang diklik
            this.classList.add('active');
            
            // Close mobile menu setelah klik
            if (hamburger && navMenu.classList.contains('show')) {
                hamburger.click();
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

// ========================================
// UPDATE ACTIVE NAV ON SCROLL
// ========================================
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========================================
// CONTACT FORM HANDLING
// ========================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            alert('Mohon lengkapi semua field yang wajib diisi!');
            return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
            alert('Mohon masukkan email yang valid!');
            return;
        }
        
        // Simulated form submission
        console.log('Form Data:', {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
            timestamp: new Date().toISOString()
        });
        
        // Show success message
        alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
        
        // Reset form
        contactForm.reset();
    });
}

// ========================================
// EMAIL VALIDATION
// ========================================
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================================
// ADD ANIMATION TO ELEMENTS ON SCROLL
// ========================================
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.animation = 'fadeInUp 0.6s ease-in-out forwards';
        }
    });
});

// ========================================
// UTILITY: Check if element is in viewport
// ========================================
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// UTILITY: Add/Remove class on scroll
// ========================================
function toggleClassOnScroll(selector, className, threshold = 100) {
    const elements = document.querySelectorAll(selector);
    
    window.addEventListener('scroll', function() {
        elements.forEach(element => {
            if (window.pageYOffset > threshold) {
                element.classList.add(className);
            } else {
                element.classList.remove(className);
            }
        });
    });
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-lazy]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-lazy');
                img.removeAttribute('data-lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// LOG APPLICATION INFO
// ========================================
console.log('%cUPT SDN 53 Pinrang', 'color: #0D47A1; font-size: 20px; font-weight: bold;');
console.log('%cSekolah Dasar Negeri Berkualitas', 'color: #1565C0; font-size: 14px;');
console.log('%cVersion 1.0', 'color: #FFC107; font-size: 12px;');
