/* ========================================
   SLIDER.JS - SWIPER HERO SLIDER & RUNNING TEXT
   Hero Slider with Swiper.js, Auto-play, Navigation
   ======================================== */

// ========================================
// SWIPER HERO SLIDER INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
    initRunningText();
});

// ========================================
// HERO SLIDER WITH SWIPER
// ========================================
function initHeroSlider() {
    try {
        const heroSwiper = new Swiper('.heroSwiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            speed: 1000,
            allowTouchMove: true,
            keyboard: {
                enabled: true,
            },
            observer: true,
            observeParents: true,
        });

        // Stop autoplay on hover
        const swiperContainer = document.querySelector('.heroSwiper');
        if (swiperContainer) {
            swiperContainer.addEventListener('mouseenter', function() {
                heroSwiper.autoplay.stop();
            });

            swiperContainer.addEventListener('mouseleave', function() {
                heroSwiper.autoplay.start();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                heroSwiper.slidePrev();
            } else if (event.key === 'ArrowRight') {
                heroSwiper.slideNext();
            }
        });

        console.log('Hero Swiper initialized successfully');
    } catch (e) {
        console.error('Swiper initialization error:', e);
    }
}

// ========================================
// ADJUST SLIDER HEIGHT ON RESIZE
// ========================================
function adjustSliderHeight() {
    const slider = document.querySelector('.heroSwiper');
    if (slider) {
        const height = window.innerHeight;
        slider.style.height = height + 'px';
    }
}

window.addEventListener('resize', adjustSliderHeight);
document.addEventListener('DOMContentLoaded', adjustSliderHeight);

// ========================================
// INITIALIZE RUNNING TEXT SLIDER
// ========================================
function initRunningText() {
    const runningTextContent = document.getElementById('runningText');
    
    if (!runningTextContent) return;
    
    // Clone items untuk continuous loop effect
    const items = runningTextContent.querySelectorAll('.running-item');
    
    items.forEach(item => {
        const clone = item.cloneNode(true);
        runningTextContent.appendChild(clone);
    });
    
    // Optional: Add manual scroll controls
    addRunningTextControls();
}

// ========================================
// RUNNING TEXT CONTROLS (PAUSE/PLAY)
// ========================================
function addRunningTextControls() {
    const runningTextContainer = document.querySelector('.running-text-container');
    
    if (!runningTextContainer) return;
    
    // Pause animation on hover
    runningTextContainer.addEventListener('mouseenter', function() {
        const content = document.getElementById('runningText');
        if (content) {
            content.style.animationPlayState = 'paused';
        }
    });
    
    // Resume animation on mouse leave
    runningTextContainer.addEventListener('mouseleave', function() {
        const content = document.getElementById('runningText');
        if (content) {
            content.style.animationPlayState = 'running';
        }
    });
}

// ========================================
// DYNAMIC RUNNING TEXT UPDATE
// ========================================
function updateRunningText(newItems) {
    const runningTextContent = document.getElementById('runningText');
    
    if (!runningTextContent) return;
    
    // Clear existing items
    runningTextContent.innerHTML = '';
    
    // Add new items
    newItems.forEach(item => {
        const span = document.createElement('span');
        span.className = 'running-item';
        span.textContent = item;
        runningTextContent.appendChild(span);
        
        // Clone for continuous loop
        const clone = span.cloneNode(true);
        runningTextContent.appendChild(clone);
    });
}

// ========================================
// EXAMPLE: Update running text dynamically
// ========================================
// Uncomment to use this feature
/*
setTimeout(function() {
    updateRunningText([
        'Pengumuman Baru 1',
        'Pengumuman Baru 2',
        'Pengumuman Baru 3'
    ]);
}, 10000); // Update after 10 seconds
*/

// ========================================
// INTERACTIVE CAROUSEL SLIDER (Optional)
// ========================================
class TextSlider {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.items = [];
        this.currentIndex = 0;
        this.autoplay = true;
        this.interval = null;
        
        if (!this.container) return;
        
        this.init();
    }
    
    init() {
        this.items = this.container.querySelectorAll('.running-item');
        this.setupAutoplay();
    }
    
    setupAutoplay() {
        if (this.autoplay && this.items.length > 0) {
            this.interval = setInterval(() => {
                this.showNext();
            }, 5000); // Change item every 5 seconds
        }
    }
    
    showNext() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateDisplay();
    }
    
    showPrev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateDisplay();
    }
    
    updateDisplay() {
        this.items.forEach((item, index) => {
            item.style.display = index === this.currentIndex ? 'block' : 'none';
        });
    }
    
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    
    resume() {
        this.setupAutoplay();
    }
}

// ========================================
// TICKER TAPE EFFECT
// ========================================
function createTickerTape(selector) {
    const container = document.querySelector(selector);
    
    if (!container) return;
    
    const items = container.querySelectorAll('.running-item');
    let position = 0;
    
    setInterval(() => {
        position -= 2; // Speed of ticker
        container.style.transform = `translateX(${position}px)`;
        
        // Reset position when completely scrolled
        if (Math.abs(position) > container.offsetWidth) {
            position = 0;
        }
    }, 30);
}

// ========================================
// ANIMATED NUMBER COUNTER
// ========================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    
    const counter = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// Initialize counters when in viewport
// ========================================
window.addEventListener('scroll', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(element => {
        if (!element.hasAttribute('data-animated')) {
            const rect = element.getBoundingClientRect();
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const target = parseInt(element.textContent);
                animateCounter(element, target);
                element.setAttribute('data-animated', 'true');
            }
        }
    });
});

// ========================================
// TOUCH GESTURE SUPPORT
// ========================================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left
            console.log('Swiped left');
        } else {
            // Swiped right
            console.log('Swiped right');
        }
    }
}
