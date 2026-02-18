// ============================================
// PAGE LOADER & BACK TO TOP - 2026
// ============================================

// ============================================
// 1. PAGE LOADER
// ============================================

const pageLoader = document.getElementById('pageLoader');
const loaderPercentage = document.getElementById('loaderPercentage');

let loadProgress = 0;
let loadInterval;

// Simulate loading progress
function simulateLoading() {
    loadInterval = setInterval(() => {
        loadProgress += Math.random() * 15;

        if (loadProgress >= 100) {
            loadProgress = 100;
            clearInterval(loadInterval);

            // Update percentage
            if (loaderPercentage) {
                loaderPercentage.textContent = '100%';
            }

            // Hide loader after a short delay
            setTimeout(() => {
                hideLoader();
            }, 500);
        } else {
            // Update percentage
            if (loaderPercentage) {
                loaderPercentage.textContent = Math.floor(loadProgress) + '%';
            }
        }
    }, 200);
}

// Hide loader
function hideLoader() {
    if (pageLoader) {
        pageLoader.classList.add('loaded');

        // Remove from DOM after transition
        setTimeout(() => {
            pageLoader.style.display = 'none';
        }, 800);
    }
}

// Start loading simulation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    simulateLoading();
});

// Ensure loader is hidden when window fully loads
window.addEventListener('load', () => {
    // If simulation hasn't finished, force completion
    if (loadProgress < 100) {
        clearInterval(loadInterval);
        loadProgress = 100;

        if (loaderPercentage) {
            loaderPercentage.textContent = '100%';
        }

        setTimeout(() => {
            hideLoader();
        }, 300);
    }
});

// Fallback: hide loader after maximum 4 seconds
setTimeout(() => {
    if (pageLoader && !pageLoader.classList.contains('loaded')) {
        clearInterval(loadInterval);
        hideLoader();
    }
}, 4000);

// ============================================
// 2. BACK TO TOP BUTTON
// ============================================

const backToTopBtn = document.getElementById('backToTop');
let isScrolling = false;

// Show/hide button based on scroll position
function toggleBackToTop() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (backToTopBtn) {
        if (scrollTop > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Add scrolling class for animation
        if (scrollTop > 100) {
            backToTopBtn.classList.add('scrolling');
        } else {
            backToTopBtn.classList.remove('scrolling');
        }
    }
}

// Smooth scroll to top
function scrollToTop(e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Add click animation
    if (backToTopBtn) {
        backToTopBtn.style.transform = 'translateY(-5px) scale(0.9)';

        setTimeout(() => {
            backToTopBtn.style.transform = '';
        }, 200);
    }
}

// Event listeners
window.addEventListener('scroll', toggleBackToTop);

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
}

// Initial check
toggleBackToTop();

// ============================================
// 3. ENHANCED SCROLL BEHAVIOR
// ============================================

// Track scroll direction
let lastScrollTop = 0;
let scrollDirection = 'down';

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        scrollDirection = 'down';
    } else {
        scrollDirection = 'up';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ============================================
// 4. KEYBOARD ACCESSIBILITY
// ============================================

// Allow keyboard navigation for back to top
if (backToTopBtn) {
    backToTopBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop(e);
        }
    });
}

// ============================================
// 5. PERFORMANCE OPTIMIZATION
// ============================================

// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttled scroll handler
const throttledScroll = throttle(toggleBackToTop, 100);
window.addEventListener('scroll', throttledScroll);

// ============================================
// 6. PRELOAD CRITICAL RESOURCES
// ============================================

// Preload images for faster loading
function preloadImages() {
    const images = [
        'assets/images/logo-motanoh.jpeg',
        'assets/images/letmotive.jpeg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start preloading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

// ============================================
// 7. SMOOTH ANCHOR LINK SCROLLING
// ============================================

// Enhanced smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            // Get navbar height for offset
            const navbar = document.getElementById('navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            // Calculate target position with offset
            const targetPosition = target.offsetTop - navbarHeight - 20;

            // Smooth scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL hash without jumping
            if (history.pushState) {
                history.pushState(null, null, href);
            }
        }
    });
});

// ============================================
// 8. DETECT SLOW NETWORK
// ============================================

// Show loading screen longer on slow connections
if ('connection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
        const effectiveType = connection.effectiveType;

        // If slow connection (2G or slow 3G), show loader longer
        if (effectiveType === '2g' || effectiveType === 'slow-2g') {
            console.log('Slow connection detected. Extending loader...');
            // Loader will naturally take longer due to actual loading time
        }
    }
}

console.log('✨ Loader and Back to Top initialized successfully!');
