# SEO Setup Guide - Motanoh & Co.

This document provides instructions for completing the SEO setup for the Motanoh & Co. website.

---

## 📋 Table of Contents
1. [Favicon & Icons](#favicon--icons)
2. [Social Media Images](#social-media-images)
3. [Google Search Console](#google-search-console)
4. [Google Analytics](#google-analytics)
5. [Verification](#verification)

---

## 🎨 Favicon & Icons

### Required Images

You need to create the following favicon and app icons from the logo. Use tools like [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/).

**Files to create:**

```
assets/images/
├── favicon-16x16.png           (16x16 pixels)
├── favicon-32x32.png           (32x32 pixels)
├── apple-touch-icon.png        (180x180 pixels)
├── android-chrome-192x192.png  (192x192 pixels)
├── android-chrome-512x512.png  (512x512 pixels)
├── og-image.jpg                (1200x630 pixels - for Open Graph)
└── twitter-card.jpg            (1200x675 pixels - for Twitter)
```

### How to Create Favicons

**Option 1: Using Favicon.io (Recommended)**
1. Go to https://favicon.io/favicon-converter/
2. Upload `assets/images/logo-motanoh.jpeg`
3. Download the generated package
4. Extract and copy the PNG files to `assets/images/`

**Option 2: Using RealFaviconGenerator**
1. Go to https://realfavicongenerator.net/
2. Upload your logo
3. Customize colors:
   - Background: `#0a0a0a` (black)
   - Theme: `#d4af37` (gold)
4. Generate favicons
5. Download and extract to `assets/images/`

**Option 3: Manual Creation (Photoshop/GIMP)**
1. Open `logo-motanoh.jpeg` in your editor
2. Resize to each required size
3. Export as PNG with transparency
4. Save to `assets/images/`

### Design Tips for Favicons
- Use a simple, recognizable element (like the "M" from Motanoh)
- Ensure good contrast against both light and dark backgrounds
- Keep it simple - details are lost at small sizes
- Use transparent background for best results

---

## 📸 Social Media Images

### Open Graph Image (`og-image.jpg`)

**Specifications:**
- Size: 1200 x 630 pixels
- Format: JPG or PNG
- Max file size: 8MB (recommended < 300KB)

**Design Guidelines:**
- Use brand colors: Black (#0a0a0a) and Gold (#d4af37)
- Include logo and tagline: "Strategic Advisory Across the Full Business Lifecycle"
- Ensure text is readable when previewed small
- Safe area: Keep important content 100px from edges
- Use high-quality images

**Example Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│         MOTANOH & CO.               │
│                                     │
│  Strategic Advisory Across the      │
│  Full Business Lifecycle            │
│                                     │
│  Côte d'Ivoire                      │
└─────────────────────────────────────┘
```

### Twitter Card Image (`twitter-card.jpg`)

**Specifications:**
- Size: 1200 x 675 pixels (16:9 ratio)
- Format: JPG or PNG
- Max file size: 5MB

**Design Guidelines:**
- Similar to OG image but in 16:9 format
- Use same brand elements

---

## 🔍 Google Search Console

### Setup Steps

1. **Create Account**
   - Go to https://search.google.com/search-console
   - Sign in with Google account
   - Click "Add Property"
   - Enter: `https://www.motanoh-co.com`

2. **Verify Ownership**

   **Method 1: HTML File Upload (Recommended)**
   - Download verification file (e.g., `google1234567890abcdef.html`)
   - Upload to website root directory
   - Click "Verify"

   **Method 2: DNS Verification**
   - Add TXT record to DNS settings
   - Format: `google-site-verification=xxxxxxx`

3. **Submit Sitemap**
   - In Search Console, go to "Sitemaps"
   - Add sitemap URL: `https://www.motanoh-co.com/sitemap.xml`
   - Click "Submit"

4. **Monitor Performance**
   - Wait 24-48 hours for data
   - Check "Performance" tab for search analytics
   - Fix any "Coverage" issues reported

---

## 📊 Google Analytics 4

### Setup Steps

1. **Create GA4 Property**
   - Go to https://analytics.google.com
   - Click "Admin" (bottom left)
   - Create Account: "Motanoh & Co."
   - Create Property: "Motanoh Website"
   - Select Industry: "Business & Industrial"
   - Set timezone: Your timezone

2. **Get Measurement ID**
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

3. **Add Tracking Code**

   Add this code in `index.html` **before** the closing `</head>` tag:

   ```html
   <!-- Google Analytics 4 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX', {
           'anonymize_ip': true,
           'cookie_flags': 'SameSite=None;Secure'
       });
   </script>
   ```

   Replace `G-XXXXXXXXXX` with your actual Measurement ID.

4. **Configure Events** (Optional)
   - Track contact form submissions
   - Track button clicks
   - Track PDF downloads

---

## ✅ Verification Checklist

### Pre-Launch SEO Checklist

- [ ] All favicon files created and uploaded
- [ ] Open Graph image created (1200x630)
- [ ] Twitter card image created (1200x675)
- [ ] `robots.txt` uploaded to root
- [ ] `sitemap.xml` uploaded to root
- [ ] `.htaccess` configured (if using Apache)
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Google Analytics 4 installed
- [ ] SSL certificate installed (HTTPS)
- [ ] WWW redirect configured
- [ ] 404 error page working
- [ ] Page load speed < 3 seconds
- [ ] Mobile-friendly (test: https://search.google.com/test/mobile-friendly)
- [ ] Meta descriptions in both EN/FR
- [ ] All images have alt text
- [ ] Structured data valid (test: https://search.google.com/test/rich-results)

### Post-Launch SEO Tasks

**Week 1:**
- [ ] Check Google Search Console for crawl errors
- [ ] Verify all pages indexed
- [ ] Monitor Analytics for traffic

**Month 1:**
- [ ] Submit to Bing Webmaster Tools
- [ ] Create Google My Business listing (if applicable)
- [ ] Build backlinks from LinkedIn company page
- [ ] Share on social media

**Ongoing:**
- [ ] Update content regularly
- [ ] Monitor search rankings
- [ ] Analyze user behavior in Analytics
- [ ] Optimize based on Search Console data

---

## 🔧 Tools & Resources

### SEO Testing Tools
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Meta Tags Analyzer**: https://metatags.io/
- **SSL Test**: https://www.ssllabs.com/ssltest/

### Image Creation Tools
- **Favicon Generator**: https://favicon.io/
- **Canva** (for social images): https://www.canva.com/
- **Remove Background**: https://www.remove.bg/
- **Image Compression**: https://tinypng.com/

### SEO Monitoring
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics 4**: https://analytics.google.com
- **Bing Webmaster Tools**: https://www.bing.com/webmasters
- **Ahrefs** (paid): https://ahrefs.com/
- **SEMrush** (paid): https://www.semrush.com/

---

## 📝 Notes

- Update `sitemap.xml` whenever you add new pages
- Keep meta descriptions under 160 characters
- Test all changes in Google Search Console
- Monitor Core Web Vitals in PageSpeed Insights
- Ensure bilingual content is properly tagged (EN/FR)

---

## 🚀 Next Steps

1. Create favicon and social media images
2. Upload all images to `assets/images/`
3. Set up Google Search Console
4. Install Google Analytics 4
5. Test all meta tags with validators
6. Deploy to production server
7. Submit sitemap to Search Console
8. Monitor performance and optimize

---

**Need help?**
- Documentation: See README.md
- Structured Data: https://schema.org/ProfessionalService
- Contact: henrijoel.o@motanoh-co.com
