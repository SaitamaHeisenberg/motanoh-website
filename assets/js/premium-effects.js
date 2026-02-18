// ============================================
// PREMIUM EFFECTS - 2026 DESIGN
// ============================================

// ============================================
// 1. CURSOR GLOW EFFECT
// ============================================

const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const ease = 0.15; // Smoothness factor (lower = smoother but slower)

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor glow animation
function animateCursorGlow() {
    // Ease towards mouse position
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    // Update cursor glow position
    if (cursorGlow) {
        cursorGlow.style.left = currentX + 'px';
        cursorGlow.style.top = currentY + 'px';
    }

    requestAnimationFrame(animateCursorGlow);
}

// Start cursor glow animation
animateCursorGlow();

// Hide cursor glow when mouse leaves window
document.addEventListener('mouseleave', () => {
    if (cursorGlow) {
        cursorGlow.style.opacity = '0';
    }
});

// Show cursor glow when mouse enters window
document.addEventListener('mouseenter', () => {
    if (cursorGlow) {
        cursorGlow.style.opacity = '1';
    }
});

// ============================================
// 2. SCROLL PROGRESS BAR
// ============================================

const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
    // Get scroll percentage
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Update progress bar width
    if (scrollProgress) {
        scrollProgress.style.width = scrollPercentage + '%';
    }
}

// Update on scroll
window.addEventListener('scroll', updateScrollProgress);

// Initial update
updateScrollProgress();

// ============================================
// 3. ENHANCED CARD INTERACTIONS
// ============================================

// Add enhanced hover effect to cards
const cards = document.querySelectorAll('.service-card, .team-member, .highlight-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        // Increase cursor glow intensity on card hover
        if (cursorGlow) {
            cursorGlow.style.background = `radial-gradient(
                circle,
                rgba(212, 175, 55, 0.25) 0%,
                rgba(212, 175, 55, 0.1) 25%,
                transparent 70%
            )`;
        }
    });

    card.addEventListener('mouseleave', function(e) {
        // Reset cursor glow
        if (cursorGlow) {
            cursorGlow.style.background = `radial-gradient(
                circle,
                rgba(212, 175, 55, 0.15) 0%,
                rgba(212, 175, 55, 0.05) 25%,
                transparent 70%
            )`;
        }
    });

    // Add 3D tilt effect on mouse move
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X position within card
        const y = e.clientY - rect.top;  // Mouse Y position within card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            scale(1.02)
        `;
    });

    card.addEventListener('mouseleave', function() {
        card.style.transform = '';
    });
});

// ============================================
// 4. SMOOTH SECTION REVEAL ON SCROLL
// ============================================

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// 5. PARALLAX EFFECT ON SCROLL
// ============================================

function parallaxEffect() {
    const scrolled = window.pageYOffset;

    // Parallax on hero background elements
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }

    // Parallax on geometric shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(45deg)`;
    });
}

// Apply parallax on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
});

// ============================================
// 6. PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');

    // Stagger section animations
    const sectionsToAnimate = document.querySelectorAll('.about-section, .services-section, .team-section');
    sectionsToAnimate.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});

// ============================================
// 7. ENHANCED LINK RIPPLE EFFECT
// ============================================

const links = document.querySelectorAll('a, button');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');

        // Get click position
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Position ripple
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        // Add to element
        this.appendChild(ripple);

        // Remove after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(212, 175, 55, 0.5);
        transform: translate(-50%, -50%);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        0% {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }

    a, button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// 8. DYNAMIC BACKGROUND GRADIENT
// ============================================

let gradientAngle = 0;

function animateBackgroundGradient() {
    gradientAngle = (gradientAngle + 0.1) % 360;

    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.background = `
            linear-gradient(
                ${gradientAngle}deg,
                var(--primary-black) 0%,
                var(--secondary-black) 50%,
                var(--primary-black) 100%
            )
        `;
    }

    requestAnimationFrame(animateBackgroundGradient);
}

// Uncomment to enable animated gradient (may impact performance)
// animateBackgroundGradient();

// ============================================
// 9. SMART NAVIGATION BACKGROUND
// ============================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (navbar) {
        if (scrollTop > 100) {
            // Enhanced glassmorphism when scrolled
            navbar.style.background = `
                linear-gradient(
                    135deg,
                    rgba(10, 10, 10, 0.95) 0%,
                    rgba(26, 26, 26, 0.92) 100%
                )
            `;
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            // Original glassmorphism
            navbar.style.background = `
                linear-gradient(
                    135deg,
                    rgba(10, 10, 10, 0.92) 0%,
                    rgba(26, 26, 26, 0.88) 100%
                )
            `;
            navbar.style.boxShadow = '';
        }
    }

    lastScrollTop = scrollTop;
});

// ============================================
// 10. PERFORMANCE OPTIMIZATION
// ============================================

// Disable effects on low-performance devices
const isLowPerformance = () => {
    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768
    );
};

if (isLowPerformance()) {
    // Disable cursor glow on mobile/low-performance devices
    if (cursorGlow) {
        cursorGlow.style.display = 'none';
    }

    // Disable parallax
    window.removeEventListener('scroll', parallaxEffect);

    // Disable 3D tilt on cards
    cards.forEach(card => {
        card.removeEventListener('mousemove', function() {});
    });
}

// ============================================
// 11. ACCESSIBILITY - RESPECT USER PREFERENCES
// ============================================

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable cursor glow
    if (cursorGlow) {
        cursorGlow.style.display = 'none';
    }

    // Disable parallax
    window.removeEventListener('scroll', parallaxEffect);

    // Simplify card animations
    cards.forEach(card => {
        card.style.transition = 'none';
    });
}

console.log('✨ Premium effects loaded successfully!');
