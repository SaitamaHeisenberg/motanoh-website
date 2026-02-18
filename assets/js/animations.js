// ============================================
// SCROLL ANIMATIONS & VISUAL EFFECTS
// ============================================

// ============================================
// PARTICLES ANIMATION - HERO SECTION
// ============================================

function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around edges
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    function createParticles() {
        const particleCount = Math.min(Math.floor(canvas.width / 10), 80);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    createParticles();

    // Connect nearby particles with lines
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.15;
                    ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup function
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resizeCanvas);
    };
}

// ============================================
// INTERSECTION OBSERVER - FADE IN ON SCROLL
// ============================================

function initScrollAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported. Animations disabled.');
        return;
    }

    // Observer options
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px 0px -100px 0px', // Trigger 100px before entering viewport
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    // Create observer for fade-in animations
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                // Unobserve after animation triggers (performance optimization)
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Observe each element
    animatedElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// ============================================
// STAGGERED ANIMATIONS FOR GRIDS
// ============================================

function initStaggeredAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.children;

                // Add animation class to each child with delay
                Array.from(children).forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('fade-in-up');
                    }, index * 100); // 100ms delay between each item
                });

                staggerObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    // Apply to service grid and team grid
    const serviceGrid = document.querySelector('.services-grid');
    const teamGrid = document.querySelector('.team-grid');

    if (serviceGrid) staggerObserver.observe(serviceGrid);
    if (teamGrid) staggerObserver.observe(teamGrid);
}

// ============================================
// SECTION DIVIDER ANIMATION
// ============================================

function initDividerAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const dividerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                dividerObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    const dividers = document.querySelectorAll('.section-divider');
    dividers.forEach(divider => dividerObserver.observe(divider));
}

// ============================================
// HERO BRAND REVEAL ANIMATION
// ============================================

function initHeroAnimation() {
    const brandName = document.querySelector('.brand-name');
    const brandTagline = document.querySelector('.brand-tagline');
    const heroHighlights = document.querySelector('.hero-highlights');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (brandName) {
        // Animate each part of the brand name
        const brandParts = brandName.querySelectorAll('span');
        brandParts.forEach((part, index) => {
            setTimeout(() => {
                part.classList.add('fade-in-up');
            }, 100 + (index * 150));
        });
    }

    if (brandTagline) {
        setTimeout(() => {
            brandTagline.classList.add('fade-in-up');
        }, 600);
    }

    if (heroHighlights) {
        setTimeout(() => {
            heroHighlights.classList.add('fade-in-up');
        }, 900);
    }

    if (scrollIndicator) {
        setTimeout(() => {
            scrollIndicator.classList.add('fade-in');
        }, 1200);
    }
}

// ============================================
// SERVICE CARD HOVER EFFECTS
// ============================================

function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
        // Add initial animation delay
        card.style.animationDelay = `${index * 0.1}s`;

        // Gold shimmer effect on hover (subtle)
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'goldShimmer 1.5s ease-in-out infinite';
        });

        card.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

// ============================================
// TEAM MEMBER CARD EFFECTS
// ============================================

function initTeamCardEffects() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach((member, index) => {
        // Add initial animation delay
        member.style.animationDelay = `${index * 0.15}s`;

        // Scale effect on focus (accessibility)
        member.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });

        member.addEventListener('blur', function() {
            this.style.transform = '';
        });
    });
}

// ============================================
// CONTACT ITEM ANIMATIONS
// ============================================

function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';

        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 + (index * 100));
    });
}

// ============================================
// NAVBAR ANIMATION ON SCROLL
// ============================================

function initNavbarAnimation() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Hide navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

function monitorAnimationPerformance() {
    // Check if Performance API is available
    if (!window.performance || !window.performance.now) return;

    const startTime = performance.now();

    window.addEventListener('load', () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;

        if (loadTime > 3000) {
            console.warn(`Page load took ${loadTime.toFixed(2)}ms. Consider optimizing.`);
        } else {
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms ✓`);
        }
    });
}

// ============================================
// SMOOTH SCROLL REVEAL EFFECT
// ============================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => revealObserver.observe(reveal));
}

// ============================================
// ADD ANIMATE-ON-SCROLL CLASS TO ELEMENTS
// ============================================

function markElementsForAnimation() {
    // Automatically add animate-on-scroll class to sections
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        const sectionDivider = section.querySelector('.section-divider');

        if (sectionTitle && !sectionTitle.classList.contains('animate-on-scroll')) {
            sectionTitle.classList.add('animate-on-scroll');
        }

        if (sectionDivider && !sectionDivider.classList.contains('animate-on-scroll')) {
            sectionDivider.classList.add('animate-on-scroll');
        }
    });

    // Add to about section paragraphs
    const aboutTexts = document.querySelectorAll('.about-text');
    aboutTexts.forEach(text => text.classList.add('animate-on-scroll'));

    // Add to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => item.classList.add('animate-on-scroll'));
}

// ============================================
// REDUCED MOTION CHECK
// ============================================

function respectReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        console.log('Reduced motion preference detected. Disabling animations.');

        // Disable all animations
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);

        return true;
    }

    return false;
}

// ============================================
// INITIALIZE ALL ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    if (respectReducedMotion()) {
        return; // Exit if user prefers reduced motion
    }

    // Mark elements for animation
    markElementsForAnimation();

    // Initialize animations
    initHeroAnimation();
    initParticles();
    initScrollAnimations();
    initStaggeredAnimations();
    initDividerAnimations();
    initServiceCardEffects();
    initTeamCardEffects();
    revealOnScroll();

    // Contact animations (delayed)
    setTimeout(() => {
        initContactAnimations();
    }, 300);

    // Performance monitoring
    monitorAnimationPerformance();

    console.log('Animations initialized successfully ✓');
});

// ============================================
// EXPORT FOR OTHER SCRIPTS
// ============================================

window.motanohAnimations = {
    initScrollAnimations,
    initStaggeredAnimations,
    respectReducedMotion
};
