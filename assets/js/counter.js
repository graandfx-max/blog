// Counter animation + AOS init
(function(){
    function animateCounter(el, target, duration){
        let start = 0;
        const startTime = performance.now();
        function step(now){
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * (target - start) + start);
            el.textContent = value;
            if(progress < 1){
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    function initCounters(){
        const counters = document.querySelectorAll('.counter');
        if(!counters.length) return;
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target')) || 0;
                    const duration = 1500;
                    animateCounter(el, target, duration);
                    observer.unobserve(el);
                }
            });
        },{ threshold: 0.6 });

        counters.forEach(c => {
            c.textContent = '0';
            io.observe(c);
        });
    }

    // Init AOS (must be available via CDN include)
    function initAOS(){
        if(window.AOS){
            window.AOS.init({ once: true });
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        initAOS();
        initCounters();
    });
})();
