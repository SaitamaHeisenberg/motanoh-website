# Motanoh & Co. - Corporate Website

A premium, bilingual (EN/FR) corporate website for Motanoh & Co., a strategic advisory firm based in Côte d'Ivoire.

## Overview

This is a modern, responsive single-page website featuring:
- Premium black & gold design aesthetic
- Bilingual support (English/French)
- Smooth scroll navigation
- Mobile-responsive design
- Accessibility features (WCAG 2.1 AA)
- Optimized performance

## Features

### Design
- **Premium Aesthetic**: Minimalist black and gold color scheme
- **Typography**: Elegant serif fonts (Playfair Display, Cormorant Garamond) combined with readable sans-serif (Lato)
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Subtle scroll-triggered animations and hover effects

### Functionality
- **Bilingual System**: Seamless toggle between English and French
- **Premium Loading Screen**: Elegant loading animation with progress bar
- **Smooth Scrolling**: Smooth navigation between sections with offset
- **Mobile Menu**: Hamburger menu for mobile devices
- **Active Section Highlighting**: Navigation updates based on scroll position
- **Parallax Effects**: Subtle parallax effect in hero section
- **Lazy Loading**: Optimized image loading for performance
- **Contact Form Modal**: Fully functional contact form with validation
- **Back to Top Button**: Animated scroll-to-top button
- **Scroll Progress**: Visual progress bar at top of page
- **Interactive Cursor Glow**: Premium cursor effect following mouse movement

### Accessibility
- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly
- Focus indicators for interactive elements
- Respects reduced motion preferences

## Project Structure

```
motanoh-website/
│
├── index.html                      # Main HTML file
├── robots.txt                      # Search engine crawling rules
├── sitemap.xml                     # XML sitemap for SEO
├── site.webmanifest                # PWA manifest
├── .htaccess                       # Apache server configuration
├── README.md                       # Project documentation
└── SEO-SETUP.md                    # SEO setup guide
│
├── assets/
│   ├── images/
│   │   ├── logo-motanoh.jpeg      # Company logo
│   │   ├── letmotive.jpeg         # Logo with tagline
│   │   ├── business-card.jpeg     # Business card reference
│   │   ├── favicon-16x16.png      # Favicon (16x16) - TO CREATE
│   │   ├── favicon-32x32.png      # Favicon (32x32) - TO CREATE
│   │   ├── apple-touch-icon.png   # iOS icon (180x180) - TO CREATE
│   │   ├── android-chrome-192x192.png  # Android icon - TO CREATE
│   │   ├── android-chrome-512x512.png  # Android icon - TO CREATE
│   │   ├── og-image.jpg           # Open Graph image - TO CREATE
│   │   └── twitter-card.jpg       # Twitter card image - TO CREATE
│   │
│   ├── css/
│   │   ├── styles.css             # Main stylesheet
│   │   ├── nav-effects.css        # Modern navigation effects
│   │   ├── footer-2026.css        # Premium footer design
│   │   ├── responsive.css         # Responsive design
│   │   ├── animations.css         # Animation effects
│   │   ├── premium-effects.css    # Glassmorphism, grain, cursor glow
│   │   ├── loader.css             # Loading screen styles
│   │   └── contact-form.css       # Contact form modal styles
│   │
│   └── js/
│       ├── main.js                # Core functionality
│       ├── language.js            # Bilingual system (EN/FR)
│       ├── animations.js          # Scroll animations & particles
│       ├── premium-effects.js     # Premium effects (cursor, tilt, etc.)
│       ├── loader.js              # Loading screen & back to top
│       └── contact-form.js        # Contact form validation & submission
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Google Fonts**: Playfair Display, Cormorant Garamond, Lato

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS, last 2 versions)
- Chrome Mobile (Android, last 2 versions)

## Getting Started

### Viewing the Website

Simply open `index.html` in a web browser:

1. Navigate to the project folder
2. Double-click `index.html`
3. The website will open in your default browser

### Local Development

For local development with live reload, you can use any static file server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Option 2: Node.js (http-server)**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Then visit: http://localhost:8080
```

**Option 3: VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## Customization

### Changing Colors

Edit the CSS variables in `assets/css/styles.css`:

```css
:root {
    --primary-black: #0a0a0a;
    --secondary-black: #1a1a1a;
    --accent-gold: #d4af37;
    --accent-gold-light: #e5c158;
    --text-white: #ffffff;
    --text-gray: #cccccc;
}
```

### Adding Content

#### Adding a New Team Member

Edit `index.html` in the Team section:

```html
<div class="team-member">
    <div class="member-info">
        <h3 class="member-name">Name Here</h3>
        <p class="member-title" data-lang-key="team-newmember-title">Title</p>
        <p class="member-bio" data-lang-key="team-newmember-bio">Bio text</p>
        <a href="#" class="member-linkedin">LinkedIn Icon</a>
    </div>
</div>
```

Then add translations in `assets/js/language.js`.

#### Adding a New Service

Add a new service card in the Services section of `index.html`:

```html
<div class="service-card">
    <h3 class="service-title" data-lang-key="service6-title">Service Name</h3>
    <p class="service-description" data-lang-key="service6-desc">Description</p>
</div>
```

Add translations in `assets/js/language.js`.

### Modifying Translations

Edit `assets/js/language.js`:

```javascript
const translations = {
    en: {
        'key-name': 'English text',
        // ...
    },
    fr: {
        'key-name': 'Texte en français',
        // ...
    }
};
```

## Deployment

### Option 1: Netlify (Recommended)

1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop the project folder
3. Configure custom domain (www.motanoh-co.com)
4. SSL certificate is automatic

### Option 2: GitHub Pages

1. Create a GitHub repository
2. Push the project files
3. Go to repository Settings > Pages
4. Select main branch
5. Configure custom domain

### Option 3: Vercel

1. Create account at [vercel.com](https://vercel.com)
2. Import the project
3. Deploy with one click
4. Configure custom domain

## Performance Optimization

The website is optimized for performance:

- Minified CSS and JavaScript (recommended for production)
- Lazy loading for images
- Debounced/throttled scroll listeners
- Efficient animations using CSS transforms
- Intersection Observer for scroll animations

### Production Build

For production, consider:

1. **Minify CSS**: Use a tool like `cssnano` or online minifier
2. **Minify JavaScript**: Use `terser` or online minifier
3. **Optimize Images**: Compress images (80% quality recommended)
4. **Convert to WebP**: For better compression (with JPEG fallback)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and attributes
- Keyboard navigation support
- Focus indicators
- Screen reader announcements for language changes
- Respects `prefers-reduced-motion`
- Color contrast meets WCAG AA standards

## Testing Checklist

### Functionality
- [ ] Language toggle works (EN/FR)
- [ ] All navigation links scroll to correct sections
- [ ] Mobile menu opens/closes
- [ ] Smooth scroll functions properly
- [ ] All links work (email, phone, LinkedIn, website)

### Responsive Design
- [ ] Mobile view (320px - 767px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (1025px+)
- [ ] Landscape orientation on mobile

### Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Color contrast sufficient

## Contact Information

**Company**: Motanoh & Co.
**Website**: www.motanoh-co.com
**Email**: henrijoel.o@motanoh-co.com
**Phone**: (+225) 07 57 368 526
**LinkedIn**: linkedin.com/company/motanoh
**Location**: Côte d'Ivoire

## License

© 2026 Motanoh & Co. All rights reserved.

## Support

For technical support or questions about the website, contact the development team or refer to the inline code comments.

## Premium Features (2026 Design)

### Glassmorphism Effects
- Enhanced glassmorphism on all cards (service, team, highlights)
- Backdrop blur with saturation
- Gradient backgrounds with transparency
- Shimmer effects on hover
- Animated border glow

### Interactive Elements
- **Cursor Glow**: Premium radial gradient following mouse movement
- **3D Tilt Effect**: Cards tilt based on mouse position (perspective)
- **Ripple Effect**: Click ripple animation on all buttons/links
- **Parallax Scrolling**: Background elements move at different speeds
- **Scroll Progress Bar**: Gold progress bar at top of page

### Loading Experience
- Professional loading screen with:
  - Animated brand text reveal
  - Progress bar with shimmer
  - Floating particles background
  - Percentage counter (0% → 100%)
  - Smooth fade-out transition

### Contact Form
- Modal popup with glassmorphism backdrop
- Real-time validation
- Bilingual error messages (EN/FR)
- SVG icons for each field
- Loading state animation
- Success message with auto-close
- Focus trap for accessibility
- Email service integration ready (EmailJS, Formspree)

### Premium Animations
- Grain texture overlay (film-like effect)
- Section reveal on scroll (Intersection Observer)
- Staggered animations
- Smooth cubic-bezier transitions
- Respects prefers-reduced-motion

## SEO Optimization

### Meta Tags
- Complete Open Graph tags (Facebook, LinkedIn)
- Twitter Card metadata
- Geo-location tags for Côte d'Ivoire
- Canonical URLs
- Language alternates (EN/FR)
- Robots meta tags

### Structured Data
- Schema.org ProfessionalService markup
- Complete business information (address, phone, email)
- Service catalog with all 5 services
- Employee information (Henri-Joel)
- Social media links

### Technical SEO
- `robots.txt` configured
- `sitemap.xml` with all sections
- `.htaccess` with:
  - HTTPS redirect
  - WWW redirect
  - Gzip compression
  - Browser caching
  - Security headers
- PWA manifest (`site.webmanifest`)
- Favicon support (all sizes)

### Performance
- Lazy loading
- Asset caching strategy
- Debounced/throttled events
- Optimized animations
- Responsive images
- Mobile-first approach

## Version History

### Version 2.0 (2026-02) - Premium Edition ✨
- **Premium Design Effects**:
  - Glassmorphism on all interactive elements
  - Grain texture overlay
  - Interactive cursor glow
  - 3D card tilt effects
  - Animated borders and shimmer
- **Loading Screen**: Professional loading experience
- **Contact Form**: Fully functional modal with validation
- **Back to Top Button**: Animated scroll-to-top with progress circle
- **Navigation**: Modern 2026 design with micro-interactions
- **Footer**: Premium 4-column layout with wave divider
- **SEO**: Complete optimization (meta tags, structured data, sitemap)
- **Performance**: Optimized for speed and accessibility

### Version 1.0 (2026-02)
- Initial release
- Bilingual support (EN/FR)
- Responsive design
- All core sections implemented
- Accessibility features
- Basic optimizations

## Future Enhancements

Potential future additions:
- **Content**:
  - Blog/Insights section
  - Case studies with client testimonials
  - Portfolio of completed projects
  - Resources/downloads section
- **Features**:
  - Newsletter signup
  - Live chat integration
  - Client portal
  - Online booking/scheduling (Calendly)
  - WhatsApp integration
- **Analytics**:
  - Google Analytics 4 (see SEO-SETUP.md)
  - Heatmap tracking (Hotjar)
  - Conversion tracking
- **Team**:
  - Additional team members as firm grows
  - Team photo gallery
  - Individual profile pages
