// ============================================
// MAIN JAVASCRIPT - CORE FUNCTIONALITY
// ============================================

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait = 10) {
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

// Throttle function for scroll events
function throttle(func, wait = 10) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
        }
    };
}

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for empty hash
            if (href === '#' || href === '#!') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate position with offset for fixed navbar
                const targetPosition = targetElement.offsetTop - navbarHeight;

                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                closeMobileMenu();

                // Update URL without jumping
                history.pushState(null, null, href);

                // Update active link
                updateActiveLink(targetId);
            }
        });
    });
}

// ============================================
// ACTIVE SECTION HIGHLIGHTING
// ============================================

function updateActiveLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    let currentSection = '';
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            toggleMobileMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Update ARIA attributes for accessibility
        const isExpanded = navMenu.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded);

        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// ============================================
// NAVBAR SCROLL EFFECT - 2026 ENHANCED
// ============================================

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ============================================
// SCROLL TO TOP ON PAGE LOAD
// ============================================

function scrollToTopOnLoad() {
    // Check if there's a hash in the URL
    const hash = window.location.hash;

    if (!hash || hash === '#' || hash === '#hero') {
        // Scroll to top
        window.scrollTo(0, 0);
    } else {
        // Scroll to the target section
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        if (targetElement) {
            setTimeout(() => {
                const targetPosition = targetElement.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
}

// ============================================
// PARALLAX EFFECT (SUBTLE)
// ============================================

function handleParallax() {
    const heroContent = document.querySelector('.hero-content');

    if (!heroContent) return;

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const parallaxSpeed = 0.5;

    // Only apply parallax in the hero section
    if (scrollPosition < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
    }
}

// ============================================
// LAZY LOAD IMAGES
// ============================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

// ============================================
// KEYBOARD NAVIGATION ACCESSIBILITY
// ============================================

function initKeyboardNavigation() {
    // Focus visible for keyboard users
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

// ============================================
// INITIALIZE ALL FUNCTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initSmoothScroll();
    initMobileMenu();
    initKeyboardNavigation();
    initLazyLoading();

    // Initial scroll position
    scrollToTopOnLoad();

    // Scroll event listeners (throttled/debounced for performance)
    window.addEventListener('scroll', throttle(() => {
        highlightActiveSection();
        handleNavbarScroll();
        handleParallax();
    }, 10));

    // Resize event listener
    window.addEventListener('resize', debounce(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }, 250));

    // Initial navbar state
    handleNavbarScroll();

    // Log successful initialization
    console.log('Motanoh & Co. website initialized successfully ✓');
});

// ============================================
// EXPORT FOR OTHER SCRIPTS
// ============================================

window.motanohUtils = {
    debounce,
    throttle,
    closeMobileMenu,
    updateActiveLink
};
