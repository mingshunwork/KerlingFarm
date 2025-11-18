# Kerling Farm - Quick Setup Guide

## ⚡ Quick Start (5 minutes)

### Step 1: Install Dependencies

Open terminal in project directory and run:

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### Step 2: Configure WhatsApp Number

Edit `.env.local` file and replace with your actual WhatsApp number:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=YOUR_NUMBER_HERE
```

**Format**: Country code + number (no + or spaces)
- Example US: `1234567890`
- Example UK: `447123456789`

### Step 3: Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) - your site is live!

---

## 🎨 Customizing Your Content

All content is in `src/data/` folder. Edit these JSON files:

### 1. Update Farm Information
**File**: `src/data/site-config.json`

```json
{
  "name": "YOUR FARM NAME",
  "description": "Your farm description...",
  "tagline": "Your tagline"
}
```

### 2. Update Contact Details
**File**: `src/data/contact.json`

Replace with your actual:
- Email address
- Phone number
- Physical address
- Social media links

### 3. Add Your Accommodations
**File**: `src/data/accommodations.json`

Each room needs:
- `name`: Room name
- `slug`: URL-friendly name (e.g., "deluxe-cottage")
- `shortDescription`: Brief description (160 chars)
- `fullDescription`: Full details
- `capacity`: Number of guests
- `pricePerNight`: Price in dollars
- `amenities`: List of amenities
- `images`: List of image URLs
- `featuredImage`: Main image URL

**Tips**:
- Use Unsplash for free stock photos: https://unsplash.com
- Keep slugs lowercase with hyphens
- Set `featured: true` for homepage display

### 4. Add Your Activities
**File**: `src/data/activities.json`

Similar structure to accommodations.

### 5. Update About Page
**File**: `src/data/about.json`

Edit your farm story, values, and timeline.

---

## 📸 Adding Your Images

### Option 1: Use Unsplash (Easiest)
1. Go to https://unsplash.com
2. Search for farm/nature photos
3. Right-click image → Copy image address
4. Paste URL in JSON file

Example:
```json
"featuredImage": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
```

### Option 2: Upload Your Own
1. Place images in `public/images/` folder
2. Reference in JSON:
```json
"featuredImage": "/images/my-cottage.jpg"
```

### Option 3: Use Image CDN (Recommended for Production)
1. Sign up for free Cloudinary account: https://cloudinary.com
2. Upload images to Cloudinary
3. Use the provided URLs in JSON files

---

## 🎨 Changing Colors & Branding

### Update Logo
1. Place your logo in `public/images/logo.png`
2. Update `src/data/site-config.json`:
```json
"logo": "/images/logo.png"
```

### Change Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  farm: {
    green: {
      600: '#YOUR_COLOR',  // Change this
      700: '#YOUR_DARKER_COLOR',
    }
  }
}
```

Find color codes at: https://colorhunt.co

---

## 🚀 Deploying to the Internet

### Easiest: Vercel (Free Tier)

1. **Create GitHub Account** (if you don't have one)
   - Visit https://github.com/signup

2. **Upload Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Visit https://vercel.com/signup
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SITE_URL`: Your domain (e.g., `https://yourfarm.com`)
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your WhatsApp number
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

4. **Connect Custom Domain**
   - In Vercel dashboard, go to "Domains"
   - Add your domain (e.g., `kerlingfarm.com`)
   - Follow DNS setup instructions

---

## ✅ Pre-Launch Checklist

Before going live, make sure you've updated:

- [ ] Farm name and tagline (`site-config.json`)
- [ ] Contact information (`contact.json`)
- [ ] WhatsApp number (`.env.local` and Vercel)
- [ ] All placeholder images replaced with real photos
- [ ] Accommodation details and prices
- [ ] Activities descriptions
- [ ] About page story
- [ ] Social media links
- [ ] Address and map location
- [ ] Logo image
- [ ] Favicon (`public/favicon.ico`)

---

## 🆘 Common Issues

### "Module not found" error?
```bash
npm install
```

### Images not showing?
- Check image URLs are correct
- Make sure images are in `public/images/`
- For external images, URLs must start with `https://`

### WhatsApp button not working?
- Check `.env.local` has correct number
- Number format: no + or spaces (e.g., `1234567890`)
- Restart dev server after changing `.env.local`

### Build fails?
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📞 Need Help?

1. Check the main [README.md](README.md) for detailed docs
2. Search error message on Google
3. Contact: info@kerlingfarm.com

---

## 🎯 Next Steps After Launch

1. **Submit to Google Search Console**
   - https://search.google.com/search-console
   - Add your site and submit sitemap

2. **Set up Google Analytics**
   - Create GA4 property: https://analytics.google.com
   - Add tracking ID to `.env.local`

3. **Test on Mobile Devices**
   - iPhone, Android, tablets

4. **Share on Social Media**
   - Post your new website link!

5. **Collect Reviews**
   - Ask guests for testimonials
   - Add reviews section later

---

**Good luck with your farm website! 🌾**
