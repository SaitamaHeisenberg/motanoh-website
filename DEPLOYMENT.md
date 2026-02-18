# Deployment Guide - Motanoh & Co. Website

This guide provides step-by-step instructions for deploying the Motanoh & Co. website to production.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have completed:

### Required Tasks
- [x] All meta tags configured
- [x] Structured data (Schema.org) implemented
- [x] robots.txt created
- [x] sitemap.xml created
- [x] .htaccess configured (for Apache)
- [x] site.webmanifest created
- [ ] **Favicon images created** (see SEO-SETUP.md)
- [ ] **Open Graph image created** (1200x630px)
- [ ] **Twitter card image created** (1200x675px)
- [ ] Domain purchased (www.motanoh-co.com)
- [ ] SSL certificate arranged
- [ ] Google Search Console account created
- [ ] Google Analytics 4 setup (optional)

### Testing
- [ ] All pages tested on Chrome, Firefox, Safari, Edge
- [ ] Mobile testing completed (iOS, Android)
- [ ] All forms validated
- [ ] All links working (internal and external)
- [ ] Language toggle working (EN/FR)
- [ ] Loading screen tested
- [ ] Contact form tested and working
- [ ] Back to top button functional
- [ ] SEO meta tags validated

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended) ⭐

**Why Netlify?**
- Free tier available
- Automatic HTTPS/SSL
- Fast global CDN
- Easy custom domain setup
- Automatic deploys from Git
- Build optimization

**Steps:**

1. **Create Netlify Account**
   - Go to https://www.netlify.com
   - Sign up (use GitHub, GitLab, or email)

2. **Deploy Site**

   **Method A: Drag & Drop (Easiest)**
   - Drag the entire `motanoh-website` folder to Netlify
   - Wait for deployment (usually < 1 minute)
   - Your site will be live at `random-name.netlify.app`

   **Method B: Git Deploy (Recommended for updates)**
   - Create a GitHub repository
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/yourusername/motanoh-website.git
     git push -u origin main
     ```
   - In Netlify: "New site from Git" → Select repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/` (root)
   - Click "Deploy site"

3. **Configure Custom Domain**
   - In Netlify: Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `www.motanoh-co.com`
   - Follow DNS configuration instructions:

   **DNS Records to add:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify's load balancer)

   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

4. **Enable HTTPS**
   - In Netlify: Domain settings → HTTPS
   - Click "Verify DNS configuration"
   - Click "Provision certificate" (automatic, free)
   - Enable "Force HTTPS"

5. **Configure Redirects** (Optional)
   Create `_redirects` file in root:
   ```
   # Redirect non-www to www
   https://motanoh-co.com/* https://www.motanoh-co.com/:splat 301!
   ```

---

### Option 2: Vercel

**Steps:**

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import Git repository or upload folder
   - Framework preset: "Other"
   - Build settings: Leave default
   - Click "Deploy"

3. **Custom Domain**
   - Project settings → Domains
   - Add `www.motanoh-co.com`
   - Configure DNS (similar to Netlify)

4. **Environment Variables** (if using email service)
   - Settings → Environment Variables
   - Add API keys if using EmailJS, Formspree, etc.

---

### Option 3: GitHub Pages

**Steps:**

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/motanoh-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Repository → Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / (root)
   - Save

3. **Custom Domain**
   - In Pages settings: Add custom domain `www.motanoh-co.com`
   - Create `CNAME` file in repository root:
     ```
     www.motanoh-co.com
     ```
   - Configure DNS:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153

     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

4. **Enforce HTTPS**
   - In Pages settings: Check "Enforce HTTPS"

---

### Option 4: Traditional Web Hosting (cPanel)

**If using shared hosting (e.g., Hostinger, Bluehost, SiteGround):**

1. **Upload Files**
   - Connect via FTP (FileZilla) or cPanel File Manager
   - Upload all files to `public_html` or `www` directory
   - Maintain folder structure

2. **Configure Domain**
   - Point your domain to hosting nameservers
   - Wait for DNS propagation (24-48 hours)

3. **Setup SSL**
   - In cPanel: SSL/TLS → Install SSL
   - Use Let's Encrypt (free) or purchased certificate

4. **Verify .htaccess**
   - Ensure `.htaccess` file is uploaded
   - Check HTTPS redirect is working

---

## 🔒 Post-Deployment Security

### 1. SSL/HTTPS
- Verify SSL certificate is active
- Test: https://www.ssllabs.com/ssltest/analyze.html?d=www.motanoh-co.com
- Ensure all assets load via HTTPS

### 2. Security Headers
Verify headers are set (test with https://securityheaders.com):
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### 3. Disable Directory Listing
Ensure users can't browse `/assets/` directories

---

## 📊 Post-Deployment SEO Setup

### 1. Google Search Console

**Submit Sitemap:**
1. Go to https://search.google.com/search-console
2. Add property: `https://www.motanoh-co.com`
3. Verify ownership (HTML file or DNS)
4. Submit sitemap: `https://www.motanoh-co.com/sitemap.xml`

**Verify Indexing:**
- URL Inspection tool
- Request indexing for homepage
- Check coverage report after 48 hours

### 2. Google Analytics 4 (Optional)

Add tracking code to `index.html` (see SEO-SETUP.md)

### 3. Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add site
3. Verify ownership
4. Submit sitemap

### 4. Social Media Validation

**Test Open Graph:**
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/

**Test Twitter Cards:**
- https://cards-dev.twitter.com/validator

---

## ✅ Post-Deployment Testing

### Functional Testing
- [ ] Homepage loads correctly
- [ ] All sections scroll smoothly
- [ ] Language toggle works (EN/FR)
- [ ] Mobile menu opens/closes
- [ ] Contact form submits successfully
- [ ] All links work (email, phone, LinkedIn)
- [ ] Back to top button appears and functions
- [ ] Loading screen displays and disappears

### Performance Testing
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
  - Target: 90+ for both mobile and desktop
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

### SEO Testing
- [ ] Meta tags present (view source)
- [ ] Structured data valid: https://search.google.com/test/rich-results
- [ ] Mobile-friendly: https://search.google.com/test/mobile-friendly
- [ ] Canonical URLs correct
- [ ] robots.txt accessible: /robots.txt
- [ ] Sitemap accessible: /sitemap.xml

### Browser Testing
Test on:
- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Edge (Windows)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

### Device Testing
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024 portrait and landscape)
- [ ] Mobile (375x667, 414x896)
- [ ] Mobile landscape

---

## 🔄 Continuous Updates

### Making Changes

**If using Netlify/Vercel with Git:**
1. Make changes locally
2. Test thoroughly
3. Commit and push:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Auto-deploys in 1-2 minutes

**If using FTP/cPanel:**
1. Make changes locally
2. Test thoroughly
3. Upload changed files via FTP
4. Clear browser cache and test

### Update Sitemap
When adding new pages:
1. Edit `sitemap.xml`
2. Update `<lastmod>` dates
3. Redeploy
4. Resubmit to Search Console

---

## 🐛 Troubleshooting

### Site Not Loading
- Check DNS propagation: https://dnschecker.org/
- Verify domain pointing to correct servers
- Check SSL certificate status

### Images Not Loading
- Verify file paths are correct
- Check file permissions (644 for files, 755 for folders)
- Ensure images uploaded to correct directory

### Contact Form Not Working
- Check console for JavaScript errors
- Verify form validation is working
- If using email service, check API keys

### Slow Performance
- Compress images (use https://tinypng.com/)
- Enable Gzip compression (check .htaccess)
- Use browser caching
- Consider CDN (Cloudflare)

### CSS/JS Not Updating
- Clear browser cache (Ctrl+Shift+R)
- Clear CDN cache if using one
- Verify file uploaded correctly
- Check browser console for 404 errors

---

## 📞 Support Contacts

**Domain Registrar:** (Update with actual registrar)
**Hosting Provider:** (Update with actual host)
**Email Service:** (If using EmailJS/Formspree)

**Website Contact:**
- Email: henrijoel.o@motanoh-co.com
- Phone: (+225) 07 57 368 526

---

## 📝 Deployment Checklist Summary

**Before Launch:**
- [ ] Create favicons and social images
- [ ] Configure domain DNS
- [ ] Setup SSL certificate
- [ ] Test all functionality
- [ ] Validate SEO elements

**During Launch:**
- [ ] Deploy to hosting platform
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Verify site loads

**After Launch:**
- [ ] Submit to Search Console
- [ ] Submit sitemap
- [ ] Install Analytics (optional)
- [ ] Test all pages
- [ ] Share on social media
- [ ] Monitor for 48 hours

---

**Deployment completed successfully?** 🎉

Share the website:
- LinkedIn: linkedin.com/company/motanoh
- Update business cards
- Email signature
- Marketing materials

---

*Last updated: February 2026*
*For technical support, refer to README.md and SEO-SETUP.md*
