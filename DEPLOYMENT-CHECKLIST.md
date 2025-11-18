# Deployment Checklist for Kerling Farm Website

## 📋 Pre-Deployment Tasks

### Content Review
- [ ] All accommodation details are accurate (names, prices, descriptions)
- [ ] All activity descriptions are complete and accurate
- [ ] About page reflects your farm's actual story
- [ ] Contact information is correct (email, phone, address)
- [ ] Gallery images are high-quality and represent your farm
- [ ] All placeholder images replaced with real photos
- [ ] All text is proofread for spelling and grammar

### Technical Setup
- [ ] `.env.local` file configured with correct values
- [ ] WhatsApp number is correct (format: country code + number, no spaces)
- [ ] Site URL updated for production environment
- [ ] Logo file added to `public/images/`
- [ ] Favicon updated (`public/favicon.ico`)
- [ ] All external image URLs are working

### Testing
- [ ] Test all pages on desktop browser
- [ ] Test all pages on mobile browser
- [ ] Test WhatsApp button functionality
- [ ] Test all navigation links
- [ ] Test all accommodation detail pages
- [ ] Test all activity detail pages
- [ ] Verify contact information displays correctly
- [ ] Test map embed on contact page
- [ ] Check image loading on slow connection
- [ ] Run Lighthouse audit (aim for 90+ score)

### SEO Preparation
- [ ] Meta descriptions written for all pages
- [ ] Keywords identified and included
- [ ] All images have descriptive alt text
- [ ] Sitemap generates correctly (`/sitemap.xml`)
- [ ] Robots.txt configured (`/robots.txt`)

---

## 🚀 Deployment Steps (Vercel)

### 1. Prepare Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial deployment of Kerling Farm website"

# Create GitHub repository and push
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Visit https://vercel.com
   - Sign up with GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_SITE_NAME=Kerling Farm
   NEXT_PUBLIC_WHATSAPP_NUMBER=your_number_here
   NEXT_PUBLIC_CONTACT_EMAIL=info@kerlingfarm.com
   NEXT_PUBLIC_CONTACT_PHONE=+1-234-567-8900
   NEXT_PUBLIC_GA_ID=your_ga_id_here (optional)
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site will be live at `your-project.vercel.app`

### 3. Connect Custom Domain

1. **In Vercel Dashboard**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `kerlingfarm.com`)

2. **Update DNS Settings** (at your domain registrar)
   - Add CNAME record:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Add A record:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```

3. **Wait for DNS Propagation** (15 minutes - 48 hours)
   - Check status: https://dnschecker.org

4. **Enable HTTPS** (automatic with Vercel)
   - SSL certificate auto-issued
   - HTTP automatically redirects to HTTPS

---

## 📊 Post-Deployment Tasks

### Google Search Console Setup
1. Go to https://search.google.com/search-console
2. Add property: `https://yourdomain.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`
5. Request indexing for homepage

### Google Analytics 4 Setup (Optional)
1. Create GA4 property: https://analytics.google.com
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Redeploy site for changes to take effect

### Test Production Site
- [ ] Visit `https://yourdomain.com`
- [ ] Test all pages and links
- [ ] Verify WhatsApp button works
- [ ] Check mobile responsiveness
- [ ] Test form submissions (if any)
- [ ] Verify images load properly
- [ ] Check page load speed

### SEO Testing
1. **Test Structured Data**
   - Visit: https://search.google.com/test/rich-results
   - Enter your site URL
   - Verify no errors

2. **Run Lighthouse Audit**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit for all categories
   - Aim for 90+ scores

3. **Mobile-Friendly Test**
   - Visit: https://search.google.com/test/mobile-friendly
   - Enter your site URL
   - Verify passes

### Security Check
- [ ] HTTPS is working (green padlock in browser)
- [ ] All resources load over HTTPS
- [ ] No mixed content warnings
- [ ] Security headers configured (check `next.config.js`)

---

## 🔄 Ongoing Maintenance

### Content Updates
- Edit JSON files in `src/data/` folder
- Commit changes: `git commit -am "Update content"`
- Push to GitHub: `git push`
- Vercel auto-deploys in 2-3 minutes

### Adding New Accommodations
1. Add entry to `src/data/accommodations.json`
2. Upload images
3. Update JSON with image URLs
4. Git commit and push
5. Verify on live site after deployment

### Performance Monitoring
- Check Google Analytics weekly
- Monitor Core Web Vitals in Search Console
- Review page speed monthly
- Check for broken links quarterly

### Backup Strategy
- GitHub serves as code backup
- Export JSON files monthly
- Download images backup quarterly
- Keep local copy of entire project

---

## 🆘 Troubleshooting Deployment Issues

### Build Fails on Vercel
```bash
# Locally test build
npm run build

# If it works locally, check Vercel logs
# Common issues:
# - Missing environment variables
# - TypeScript errors
# - Image import issues
```

### Images Not Loading
- Check image URLs are correct
- Verify `next.config.js` has correct image domains
- Ensure images are optimized (< 2MB each)

### WhatsApp Button Not Working
- Verify number format in environment variables
- Check number is WhatsApp Business enabled
- Test on mobile device

### Slow Page Load
- Optimize images (use WebP format, reduce size)
- Check Lighthouse performance report
- Enable caching headers
- Use image CDN (Cloudinary)

### Domain Not Working
- Check DNS propagation: https://dnschecker.org
- Verify DNS settings at domain registrar
- Wait up to 48 hours for full propagation
- Check Vercel domain settings

---

## 📈 Growth & Scaling

### When Traffic Increases
- Upgrade to Vercel Pro ($20/month) if needed
- Implement image CDN (Cloudinary)
- Add caching layer
- Monitor analytics for bottlenecks

### Adding Features Later
- Blog section for SEO content
- Online booking system
- Customer reviews/testimonials
- Email newsletter signup
- Gift certificates
- Virtual farm tours (360° photos)

---

## ✅ Launch Day Checklist

**Final checks before announcing:**

- [ ] All content reviewed and approved
- [ ] All images loading correctly
- [ ] WhatsApp button works on mobile
- [ ] All pages tested on multiple devices
- [ ] Contact information verified
- [ ] Google Analytics tracking
- [ ] Google Search Console configured
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain working
- [ ] No broken links
- [ ] Lighthouse scores > 90
- [ ] Meta descriptions for all pages
- [ ] Sitemap submitted to Google
- [ ] Social media accounts linked
- [ ] Email signature updated with website
- [ ] Business cards updated (if needed)

**Announcement Strategy:**
1. Post on social media (Facebook, Instagram)
2. Email newsletter to existing customers
3. Update Google Business Profile
4. Add to booking platforms (Airbnb, etc.)
5. Share with local tourism board
6. Update farm signage with URL

---

## 📞 Support Contacts

**Technical Issues:**
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs

**Domain Issues:**
- Contact your domain registrar support

**General Questions:**
- Refer to README.md
- Check SETUP-GUIDE.md

---

**Congratulations on launching your farm website! 🎉**

Remember: Your website is never "done" - continue to update content, add photos, and improve based on visitor feedback.
