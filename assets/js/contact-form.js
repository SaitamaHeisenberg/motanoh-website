// ============================================
// CONTACT FORM FUNCTIONALITY - 2026
// ============================================

// DOM Elements
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeContactModal');
const contactForm = document.getElementById('contactForm');
const formSuccessMessage = document.getElementById('formSuccessMessage');

// Form Inputs
const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
const phoneInput = document.getElementById('contactPhone');
const subjectInput = document.getElementById('contactSubject');
const messageInput = document.getElementById('contactMessage');

// ============================================
// 1. OPEN MODAL
// ============================================

// Find all "Get in Touch" buttons
const openModalButtons = document.querySelectorAll('[href="#contact"].cta-button, .cta-button');

openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
    });
});

function openContactModal() {
    if (contactModal) {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        // Focus first input for accessibility
        setTimeout(() => {
            if (nameInput) nameInput.focus();
        }, 300);

        // Trap focus within modal
        trapFocus(contactModal);
    }
}

// ============================================
// 2. CLOSE MODAL
// ============================================

function closeContactModal() {
    if (contactModal) {
        contactModal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling

        // Reset form after closing
        setTimeout(() => {
            resetForm();
        }, 400);
    }
}

// Close button click
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeContactModal);
}

// Close on overlay click
if (contactModal) {
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            closeContactModal();
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal && contactModal.classList.contains('active')) {
        closeContactModal();
    }
});

// ============================================
// 3. FORM VALIDATION
// ============================================

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate individual field
function validateField(input) {
    const value = input.value.trim();
    let isValid = true;

    // Remove previous error state
    input.classList.remove('error', 'success');

    switch (input.type) {
        case 'email':
            isValid = emailRegex.test(value);
            break;
        case 'text':
        case 'textarea':
            isValid = value.length >= 2;
            break;
        default:
            isValid = value.length > 0;
    }

    // Add appropriate class
    if (input.hasAttribute('required')) {
        if (isValid) {
            input.classList.add('success');
        } else {
            input.classList.add('error');
        }
    }

    return isValid;
}

// Real-time validation on blur
[nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
        input.addEventListener('blur', () => {
            if (input.value.trim() !== '') {
                validateField(input);
            }
        });

        // Remove error on focus
        input.addEventListener('focus', () => {
            input.classList.remove('error');
        });
    }
});

// Validate entire form
function validateForm() {
    let isValid = true;

    // Validate required fields
    const requiredFields = [nameInput, emailInput, subjectInput, messageInput];

    requiredFields.forEach(input => {
        if (input && !validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

// ============================================
// 4. FORM SUBMISSION
// ============================================

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Get form data
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput ? phoneInput.value.trim() : '',
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim(),
            timestamp: new Date().toISOString(),
            language: window.getCurrentLanguage ? window.getCurrentLanguage() : 'en'
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('.form-submit-btn');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate form submission (2 seconds)
        // In production, replace this with actual API call
        try {
            await simulateFormSubmission(formData);

            // Success!
            showSuccessMessage();

            // Log to console (in production, send to backend)
            console.log('Form submitted successfully:', formData);

            // Optional: Send to email service (e.g., EmailJS, Formspree, etc.)
            // await sendToEmailService(formData);

        } catch (error) {
            console.error('Form submission error:', error);
            alert('An error occurred. Please try again or contact us directly via email.');
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Simulate form submission (replace with real API call)
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

// Show success message
function showSuccessMessage() {
    if (formSuccessMessage && contactForm) {
        contactForm.style.display = 'none';
        formSuccessMessage.classList.add('visible');

        // Close modal after 3 seconds
        setTimeout(() => {
            closeContactModal();
        }, 3000);
    }
}

// Reset form
function resetForm() {
    if (contactForm) {
        contactForm.reset();
        contactForm.style.display = 'block';

        // Remove all validation classes
        const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
        });
    }

    if (formSuccessMessage) {
        formSuccessMessage.classList.remove('visible');
    }
}

// ============================================
// 5. ACCESSIBILITY - FOCUS TRAP
// ============================================

function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

// ============================================
// 6. OPTIONAL: EMAIL SERVICE INTEGRATION
// ============================================

// Example: EmailJS Integration (uncomment and configure)
/*
async function sendToEmailService(formData) {
    // Initialize EmailJS with your User ID
    emailjs.init("YOUR_USER_ID");

    // Send email
    return emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            language: formData.language
        }
    );
}
*/

// Example: Formspree Integration (uncomment and configure)
/*
async function sendToEmailService(formData) {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        throw new Error('Form submission failed');
    }

    return response.json();
}
*/

// ============================================
// 7. ANALYTICS TRACKING (Optional)
// ============================================

function trackFormEvent(eventName, data = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, data);
    }

    // Console log for development
    console.log('Form Event:', eventName, data);
}

// Track modal open
function trackModalOpen() {
    trackFormEvent('contact_modal_open', {
        event_category: 'Contact',
        event_label: 'Modal Opened'
    });
}

// Track form submission
function trackFormSubmission() {
    trackFormEvent('contact_form_submit', {
        event_category: 'Contact',
        event_label: 'Form Submitted'
    });
}

// Add tracking to modal open
const originalOpenModal = openContactModal;
openContactModal = function() {
    trackModalOpen();
    originalOpenModal();
};

// Add tracking to form submission
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackFormSubmission();
    });
}

console.log('✨ Contact form initialized successfully!');
