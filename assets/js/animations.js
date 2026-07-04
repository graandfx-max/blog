/* ========================================
   ANIMATIONS.JS - ANIMASI DAN EFFECTS
   Scroll Animations, Page Load Effects
   ======================================== */

// ========================================
// ON SCROLL ANIMATION INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with aos-animate class
    document.querySelectorAll('.feature-card, .stat-card, .teacher-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });

    // Add staggered animation delays
    let delay = 0;
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.animationDelay = (delay * 0.1) + 's';
        delay++;
    });

    // Page load animation
    animatePageLoad();
});

// ========================================
// PAGE LOAD ANIMATION
// ========================================
function animatePageLoad() {
    const body = document.body;
    body.style.opacity = '1';
    
    // Add animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
    }
}

// ========================================
// SCROLL TO ANIMATE ELEMENTS
// ========================================
function animateElementsOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    
    window.addEventListener('scroll', function() {
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                el.classList.add(el.getAttribute('data-animate'));
            }
        });
    });
}

// ========================================
// HOVER EFFECTS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Add hover lift effect to cards
    const cards = document.querySelectorAll('.feature-card, .stat-card, .teacher-card, .gallery-item, .download-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
});

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
function addRippleEffect() {
    const buttons = document.querySelectorAll('button.btn, a.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ========================================
// COUNTER ANIMATION
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = entry.target;
                const endValue = parseInt(target.textContent);
                animateCounter(target, endValue);
                target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, endValue) {
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic(progress));
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    update();
}

// ========================================
// INITIALIZE ALL ANIMATIONS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    addRippleEffect();
    animateCounters();
    animateElementsOnScroll();
});

// ========================================
// SCROLL PROGRESS BAR
// ========================================
function initScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, var(--primary), var(--secondary)); z-index: 9999; width: 0%;';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress bar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollProgressBar);
} else {
    initScrollProgressBar();
}
