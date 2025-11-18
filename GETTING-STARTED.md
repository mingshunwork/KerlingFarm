# Getting Started with Kerling Farm Website

## 🚀 5-Minute Quick Start

### Step 1: Open Terminal
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type "terminal", press Enter

### Step 2: Navigate to Project
```bash
cd "C:\Users\USER\OneDrive\Desktop\Kerling Farm"
```

### Step 3: Install Dependencies
```bash
npm install
```
*This will take 2-3 minutes. You'll see a progress bar.*

### Step 4: Start Development Server
```bash
npm run dev
```

### Step 5: Open in Browser
Visit: **http://localhost:3000**

🎉 **That's it! Your website is now running locally.**

---

## ⚙️ First-Time Configuration

### Update WhatsApp Number
1. Open `.env.local` file
2. Find: `NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890`
3. Replace with your number (no + or spaces)
   - Example: `1234567890` for US
   - Example: `447123456789` for UK

### Update Contact Information
1. Open `src/data/contact.json`
2. Update:
   - `email`: Your email address
   - `phone`: Your phone number
   - `address`: Your farm address
   - `socialMedia`: Your social media URLs

### Update Farm Name
1. Open `src/data/site-config.json`
2. Update:
   - `name`: Your farm name
   - `description`: Brief description
   - `tagline`: Your tagline

---

## 📝 Editing Content

### All content is in `src/data/` folder

**To edit accommodations:**
→ Open `src/data/accommodations.json`

**To edit activities:**
→ Open `src/data/activities.json`

**To edit about page:**
→ Open `src/data/about.json`

**To edit contact info:**
→ Open `src/data/contact.json`

**To edit gallery:**
→ Open `src/data/gallery.json`

**To edit plantation:**
→ Open `src/data/plantation.json`

---

## 🖼️ Adding Your Images

### Option 1: Use Free Stock Photos (Temporary)
Already configured! Uses Unsplash images.

### Option 2: Add Your Own Photos
1. Put images in `public/images/` folder
2. In JSON files, reference as: `/images/your-photo.jpg`

Example:
```json
"featuredImage": "/images/deluxe-cottage.jpg"
```

---

## 🎨 Customizing Look & Feel

### Change Colors
1. Open `tailwind.config.ts`
2. Find `colors.farm.green`
3. Update hex color codes

### Change Logo
1. Put your logo in `public/images/logo.png`
2. Update `src/data/site-config.json`:
   ```json
   "logo": "/images/logo.png"
   ```

---

## ✅ Testing Your Changes

After editing content:
1. Save the file
2. Check browser (http://localhost:3000)
3. Page auto-refreshes with changes
4. No need to restart server!

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Stop server
Press Ctrl + C

# Build for production (test before deploying)
npm run build

# Check for errors
npm run lint
```

---

## 🆘 Troubleshooting

### "Command not found: npm"
Install Node.js from: https://nodejs.org
*(Choose LTS version)*

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Changes not showing?
1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart dev server

### Images not loading?
- Check file path is correct
- Ensure image is in `public/images/`
- Check file extension matches (`.jpg`, `.png`, etc.)

---

## 📚 File Structure Guide

```
Your Project/
│
├── src/data/          ← EDIT THESE for content changes
│   ├── accommodations.json
│   ├── activities.json
│   ├── about.json
│   ├── contact.json
│   └── ...
│
├── public/images/     ← PUT YOUR PHOTOS HERE
│
├── .env.local         ← CONFIGURE WhatsApp number
│
└── src/app/           ← Don't edit unless changing design
    ├── page.tsx       (Homepage)
    ├── about/
    ├── accommodation/
    └── ...
```

---

## 🎯 Recommended Workflow

### Daily Content Updates
1. Edit JSON files
2. Save
3. Check in browser
4. Repeat

### Weekly Backups
```bash
# Copy entire folder to backup location
```

### When Ready to Deploy
See: `DEPLOYMENT-CHECKLIST.md`

---

## 📖 Documentation Files

- **README.md** - Complete technical documentation
- **SETUP-GUIDE.md** - Detailed setup instructions
- **GETTING-STARTED.md** - This file (quick reference)
- **DEPLOYMENT-CHECKLIST.md** - Launch checklist
- **PROJECT-SUMMARY.md** - What's built and how it works

---

## 💡 Pro Tips

1. **Always test locally before deploying**
   ```bash
   npm run build
   npm run start
   ```

2. **Keep original images**
   - Store originals in separate folder
   - Use optimized versions for website

3. **Update content regularly**
   - Fresh content helps SEO
   - Add seasonal photos
   - Update availability

4. **Monitor analytics**
   - Check visitor stats weekly
   - See what pages are popular
   - Adjust content accordingly

---

## 🎓 Learning Path

**Week 1**: Get comfortable editing JSON files
**Week 2**: Add your own photos
**Week 3**: Customize colors and branding
**Week 4**: Deploy to production

---

## 📞 Need Help?

1. **Check documentation first**
   - README.md for technical details
   - SETUP-GUIDE.md for step-by-step help

2. **Common issues**
   - See Troubleshooting section above
   - Check DEPLOYMENT-CHECKLIST.md

3. **Google is your friend**
   - Search: "Next.js [your question]"
   - Stack Overflow has many answers

---

## 🌟 Quick Wins

Easy improvements you can make right now:

- ✏️ Update farm name in `site-config.json`
- ✏️ Add real WhatsApp number in `.env.local`
- ✏️ Update pricing in `accommodations.json`
- ✏️ Add your email in `contact.json`
- ✏️ Replace one sample image with your photo

Start small, build confidence! 🚀

---

**Ready to build something amazing? Let's go! 🌾**
