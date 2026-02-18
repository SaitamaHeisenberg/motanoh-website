// ============================================
// BILINGUAL LANGUAGE SYSTEM (EN/FR)
// ============================================

// Translation data structure
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-team': 'Team',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-tagline': 'Strategic Advisory Across the Full Business Lifecycle',
        'hero-highlight1': 'Strategic Excellence',
        'hero-highlight2': 'Full Lifecycle Support',
        'hero-highlight3': 'Expert Team',

        // About Section
        'about-title': 'Excellence in Strategic Advisory',
        'about-p1': 'Motanoh & Co. is a premier strategic advisory firm based in Côte d\'Ivoire, dedicated to partnering with businesses at every stage of their journey. From inception to growth, optimization to transition, we provide the strategic insight and tactical support that transforms vision into sustainable success.',
        'about-p2': 'Our approach combines deep market expertise with a commitment to understanding the unique challenges and opportunities facing each client. We deliver tailored solutions that drive measurable results across the full business lifecycle.',

        // About Statistics
        'about-stat1-value': '5+',
        'about-stat1-label': 'Years Experience',
        'about-stat2-value': '50+',
        'about-stat2-label': 'Clients Served',
        'about-stat3-value': '10+',
        'about-stat3-label': 'Sectors Covered',
        'about-stat4-value': '95%',
        'about-stat4-label': 'Client Satisfaction',

        // About Values
        'about-values-title': 'Our Core Values',
        'about-value1-name': 'Excellence',
        'about-value1-desc': 'Uncompromising commitment to delivering the highest quality strategic solutions',
        'about-value2-name': 'Integrity',
        'about-value2-desc': 'Building trust through transparency, honesty, and ethical business practices',
        'about-value3-name': 'Client Focus',
        'about-value3-desc': 'Your success is our priority, with tailored solutions for your unique challenges',
        'about-value4-name': 'Innovation',
        'about-value4-desc': 'Embracing creative approaches to solve complex business challenges',

        // Services Section
        'services-title': 'Our Services',
        'service1-title': 'Strategic Planning & Market Entry',
        'service1-desc': 'Market analysis and entry strategies, competitive positioning, and business model development tailored to your unique vision.',
        'service2-title': 'Growth & Development',
        'service2-desc': 'Expansion strategies, partnership development, and revenue optimization to accelerate your business growth.',
        'service3-title': 'Operational Excellence',
        'service3-desc': 'Process optimization, performance management, and organizational development for sustainable efficiency.',
        'service4-title': 'Financial Advisory',
        'service4-desc': 'Financial planning & analysis, investment strategies, and capital structure optimization for robust financial health.',
        'service5-title': 'Transition & Exit Planning',
        'service5-desc': 'Succession planning, M&A advisory, and business valuation to ensure smooth transitions and maximize value.',

        // Team Section
        'team-title': 'Our Team',
        'team-henri-title': 'Associate, Business Development',
        'team-henri-bio': 'Henri-Joel brings extensive experience in business development and strategic partnerships across West African markets. His expertise in identifying growth opportunities and building lasting client relationships drives Motanoh & Co.\'s commitment to excellence in advisory services.',

        // Contact Section
        'contact-title': 'Get in Touch',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-website': 'Website',

        // Footer
        'footer-tagline': 'Strategic Advisory Across the Full Business Lifecycle',
        'footer-description': 'Premier strategic advisory firm in Côte d\'Ivoire, dedicated to excellence across the full business lifecycle.',
        'footer-quicklinks': 'Quick Links',
        'footer-contact': 'Contact',
        'footer-connect': 'Connect',
        'footer-cta': 'Let\'s discuss your strategic needs',
        'footer-cta-button': 'Get in Touch',
        'footer-rights': 'All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-badge': 'Premium Advisory Services',

        // Contact Form Modal
        'modal-title': 'Get in Touch',
        'modal-subtitle': 'Let\'s discuss your strategic needs',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-phone': 'Phone',
        'form-subject': 'Subject',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        'form-name-error': 'Please enter your name',
        'form-email-error': 'Please enter a valid email',
        'form-subject-error': 'Please enter a subject',
        'form-message-error': 'Please enter your message',
        'form-success-title': 'Message Sent!',
        'form-success-message': 'Thank you for contacting us. We\'ll get back to you shortly.'
    },
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'À Propos',
        'nav-services': 'Services',
        'nav-team': 'Équipe',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-tagline': 'Conseil stratégique tout au long du cycle de vie des entreprises',
        'hero-highlight1': 'Excellence Stratégique',
        'hero-highlight2': 'Accompagnement Complet',
        'hero-highlight3': 'Équipe Experte',

        // About Section
        'about-title': 'Excellence en Conseil Stratégique',
        'about-p1': 'Motanoh & Co. est un cabinet de conseil stratégique de premier plan basé en Côte d\'Ivoire, dédié à accompagner les entreprises à chaque étape de leur parcours. De la création à la croissance, de l\'optimisation à la transition, nous fournissons les perspectives stratégiques et le soutien tactique qui transforment la vision en succès durable.',
        'about-p2': 'Notre approche combine une expertise approfondie du marché avec un engagement à comprendre les défis et opportunités uniques de chaque client. Nous offrons des solutions sur mesure qui génèrent des résultats mesurables tout au long du cycle de vie de l\'entreprise.',

        // About Statistics
        'about-stat1-value': '5+',
        'about-stat1-label': 'Années d\'Expérience',
        'about-stat2-value': '50+',
        'about-stat2-label': 'Clients Accompagnés',
        'about-stat3-value': '10+',
        'about-stat3-label': 'Secteurs Couverts',
        'about-stat4-value': '95%',
        'about-stat4-label': 'Satisfaction Client',

        // About Values
        'about-values-title': 'Nos Valeurs Fondamentales',
        'about-value1-name': 'Excellence',
        'about-value1-desc': 'Engagement sans compromis à fournir des solutions stratégiques de la plus haute qualité',
        'about-value2-name': 'Intégrité',
        'about-value2-desc': 'Bâtir la confiance par la transparence, l\'honnêteté et des pratiques éthiques',
        'about-value3-name': 'Focus Client',
        'about-value3-desc': 'Votre succès est notre priorité, avec des solutions adaptées à vos défis uniques',
        'about-value4-name': 'Innovation',
        'about-value4-desc': 'Adopter des approches créatives pour résoudre des défis commerciaux complexes',

        // Services Section
        'services-title': 'Nos Services',
        'service1-title': 'Planification Stratégique & Entrée sur le Marché',
        'service1-desc': 'Analyse de marché et stratégies d\'entrée, positionnement concurrentiel et développement de modèles d\'affaires adaptés à votre vision unique.',
        'service2-title': 'Croissance & Développement',
        'service2-desc': 'Stratégies d\'expansion, développement de partenariats et optimisation des revenus pour accélérer la croissance de votre entreprise.',
        'service3-title': 'Excellence Opérationnelle',
        'service3-desc': 'Optimisation des processus, gestion de la performance et développement organisationnel pour une efficacité durable.',
        'service4-title': 'Conseil Financier',
        'service4-desc': 'Planification et analyse financières, stratégies d\'investissement et optimisation de la structure du capital pour une santé financière robuste.',
        'service5-title': 'Planification de Transition & Sortie',
        'service5-desc': 'Planification de la succession, conseil en fusions-acquisitions et évaluation d\'entreprise pour assurer des transitions harmonieuses et maximiser la valeur.',

        // Team Section
        'team-title': 'Notre Équipe',
        'team-henri-title': 'Associé, Chargé du Développement',
        'team-henri-bio': 'Henri-Joel apporte une vaste expérience en développement commercial et partenariats stratégiques sur les marchés d\'Afrique de l\'Ouest. Son expertise dans l\'identification d\'opportunités de croissance et la construction de relations clients durables renforce l\'engagement de Motanoh & Co. envers l\'excellence dans les services de conseil.',

        // Contact Section
        'contact-title': 'Contactez-nous',
        'contact-phone': 'Téléphone',
        'contact-email': 'Email',
        'contact-website': 'Site Web',

        // Footer
        'footer-tagline': 'Conseil stratégique tout au long du cycle de vie des entreprises',
        'footer-description': 'Cabinet de conseil stratégique de premier plan en Côte d\'Ivoire, dédié à l\'excellence tout au long du cycle de vie des entreprises.',
        'footer-quicklinks': 'Liens Rapides',
        'footer-contact': 'Contact',
        'footer-connect': 'Connecter',
        'footer-cta': 'Discutons de vos besoins stratégiques',
        'footer-cta-button': 'Nous Contacter',
        'footer-rights': 'Tous droits réservés.',
        'footer-privacy': 'Politique de Confidentialité',
        'footer-terms': 'Conditions d\'Utilisation',
        'footer-badge': 'Services de Conseil Premium',

        // Contact Form Modal
        'modal-title': 'Contactez-nous',
        'modal-subtitle': 'Discutons de vos besoins stratégiques',
        'form-name': 'Nom',
        'form-email': 'Email',
        'form-phone': 'Téléphone',
        'form-subject': 'Sujet',
        'form-message': 'Message',
        'form-submit': 'Envoyer le Message',
        'form-name-error': 'Veuillez entrer votre nom',
        'form-email-error': 'Veuillez entrer un email valide',
        'form-subject-error': 'Veuillez entrer un sujet',
        'form-message-error': 'Veuillez entrer votre message',
        'form-success-title': 'Message Envoyé!',
        'form-success-message': 'Merci de nous avoir contactés. Nous vous répondrons sous peu.'
    }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('motanoh-language') || 'en';

// Function to set language
function setLanguage(lang) {
    // Validate language
    if (!translations[lang]) {
        console.error(`Language "${lang}" not found. Defaulting to English.`);
        lang = 'en';
    }

    // Update current language
    currentLang = lang;

    // Save to localStorage
    localStorage.setItem('motanoh-language', lang);

    // Update HTML lang attribute for accessibility
    document.documentElement.lang = lang;

    // Update meta description
    updateMetaDescription(lang);

    // Update all text content
    updateContent();

    // Update language toggle UI
    updateLanguageToggle();

    // Announce language change to screen readers
    announceLanguageChange(lang);
}

// Function to update all content based on current language
function updateContent() {
    const elements = document.querySelectorAll('[data-lang-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[currentLang][key];

        if (translation) {
            element.textContent = translation;
        } else {
            console.warn(`Translation key "${key}" not found for language "${currentLang}"`);
        }
    });
}

// Function to update meta description
function updateMetaDescription(lang) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        if (lang === 'fr') {
            metaDescription.setAttribute('content', 'Motanoh & Co. - Conseil stratégique tout au long du cycle de vie des entreprises. Cabinet de conseil de premier plan en Côte d\'Ivoire.');
        } else {
            metaDescription.setAttribute('content', 'Motanoh & Co. - Strategic Advisory Across the Full Business Lifecycle. Premier consulting firm in Côte d\'Ivoire.');
        }
    }
}

// Function to update language toggle UI
function updateLanguageToggle() {
    const langOptions = document.querySelectorAll('.lang-option');
    const languageToggle = document.getElementById('languageToggle');

    langOptions.forEach(option => {
        const optionLang = option.getAttribute('data-lang');

        if (optionLang === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Update toggle background position for modern switch
    if (languageToggle) {
        if (currentLang === 'fr') {
            languageToggle.classList.add('fr-active');
        } else {
            languageToggle.classList.remove('fr-active');
        }
    }
}

// Function to announce language change to screen readers
function announceLanguageChange(lang) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = lang === 'en' ? 'Language changed to English' : 'Langue changée en Français';

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ============================================
// EVENT LISTENERS
// ============================================

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLang);

    // Language toggle button
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            // Toggle between EN and FR
            const newLang = currentLang === 'en' ? 'fr' : 'en';
            setLanguage(newLang);
        });
    }

    // Individual language option clicks
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggle button click
            const lang = option.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });
});

// ============================================
// SCREEN READER ONLY CLASS
// ============================================

// Add CSS for screen reader only elements
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

// ============================================
// EXPORT FOR OTHER SCRIPTS
// ============================================

// Make functions available globally
window.setLanguage = setLanguage;
window.getCurrentLanguage = () => currentLang;
window.getTranslation = (key) => translations[currentLang][key] || key;
