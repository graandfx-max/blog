/* ========================================
   MENU.JS - MENU INTERAKTIF
   Navigasi Menu dan Hamburger Menu
   ======================================== */

// ========================================
// INITIALIZE MENU
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initStickyMenu();
    initMobileMenuClose();
});

// ========================================
// MOBILE MENU FUNCTIONALITY
// ========================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navbarNav');
    
    if (!hamburger || !navMenu) return;
    
    // Toggle menu pada hamburger click
    hamburger.addEventListener('click', function() {
        const isExpanded = navMenu.classList.contains('show');
        
        if (isExpanded) {
            navMenu.classList.remove('show');
            hamburger.setAttribute('aria-expanded', 'false');
        } else {
            navMenu.classList.add('show');
            hamburger.setAttribute('aria-expanded', 'true');
        }
    });
}

// ========================================
// CLOSE MOBILE MENU WHEN LINK CLICKED
// ========================================
function initMobileMenuClose() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.getElementById('navbarNav');
    const hamburger = document.getElementById('hamburgerBtn');
    
    if (!navMenu || !hamburger) return;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close menu after clicking a link
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// ========================================
// STICKY MENU
// ========================================
function initStickyMenu() {
    const header = document.getElementById('headerNav');
    const scrollTrigger = 100;
    
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > scrollTrigger) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ========================================
// ACTIVE MENU ITEM ON PAGE LOAD
// ========================================
function setActiveMenuItem() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.hash;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (currentUrl === '' && link.getAttribute('href') === '#home') {
            link.classList.add('active');
        } else if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
}

// ========================================
// MENU ANIMATION CLASS
// ========================================
.navbar-section.scrolled {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.98);
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================
document.addEventListener('keydown', function(event) {
    const navMenu = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navMenu) return;
    
    // Close menu on Escape key
    if (event.key === 'Escape' && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        document.getElementById('hamburgerBtn').setAttribute('aria-expanded', 'false');
    }
    
    // Tab navigation
    if (event.key === 'Tab') {
        const lastNavLink = navLinks[navLinks.length - 1];
        const firstNavLink = navLinks[0];
        
        if (event.shiftKey && document.activeElement === firstNavLink) {
            lastNavLink.focus();
        } else if (!event.shiftKey && document.activeElement === lastNavLink) {
            firstNavLink.focus();
        }
    }
});

// ========================================
// CALL ACTIVE MENU ON LOAD
// ========================================
window.addEventListener('load', setActiveMenuItem);
window.addEventListener('hashchange', setActiveMenuItem);
