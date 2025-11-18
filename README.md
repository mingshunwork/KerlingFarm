# Kerling Farm Website

A modern, SEO-optimized website for Kerling Farm - an agritourism and farm-stay business. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Kerling Farm](https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800)

## 🌟 Features

- **SEO Optimized**: Meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **Performance**: Static generation with Next.js 14 App Router
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **WhatsApp Integration**: Direct booking via WhatsApp Business
- **JSON-Based CMS**: Easy content management without external dependencies
- **Modern Stack**: TypeScript, React Server Components, latest web standards
- **Accessible**: WCAG compliant with semantic HTML

## 📁 Project Structure

```
kerling-farm/
├── public/                  # Static assets
├── src/
│   ├── app/                # Next.js 14 App Router pages
│   │   ├── layout.tsx      # Root layout with header/footer
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About page
│   │   ├── accommodation/  # Accommodation listing & details
│   │   ├── activities/     # Activities listing & details
│   │   ├── plantation/     # Plantation page
│   │   ├── gallery/        # Photo gallery
│   │   ├── contact/        # Contact page
│   │   ├── sitemap.ts      # Dynamic sitemap
│   │   └── robots.ts       # Robots.txt
│   ├── components/         # React components
│   │   ├── layout/         # Header, Footer, Navigation
│   │   ├── ui/             # Reusable UI components
│   │   └── shared/         # Shared components (JsonLd, etc)
│   ├── data/               # JSON content files
│   │   ├── site-config.json
│   │   ├── contact.json
│   │   ├── accommodations.json
│   │   ├── activities.json
│   │   ├── plantation.json
│   │   ├── about.json
│   │   └── gallery.json
│   ├── lib/                # Utility functions
│   │   ├── data.ts         # Data fetching functions
│   │   ├── seo.ts          # SEO utilities
│   │   └── utils.ts        # Helper functions
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global styles
├── .env.local.example      # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "C:\Users\USER\OneDrive\Desktop\Kerling Farm"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and configure:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Kerling Farm
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   NEXT_PUBLIC_CONTACT_EMAIL=info@kerlingfarm.com
   NEXT_PUBLIC_CONTACT_PHONE=+1-234-567-8900
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

All content is managed through JSON files in the `src/data/` directory. No external CMS required!

### Editing Content

#### Update Site Information
Edit `src/data/site-config.json`:
```json
{
  "name": "Kerling Farm",
  "description": "Your farm description",
  "tagline": "Your tagline"
}
```

#### Add/Edit Accommodations
Edit `src/data/accommodations.json`:
```json
{
  "id": "1",
  "slug": "room-name",
  "name": "Room Name",
  "shortDescription": "Brief description",
  "fullDescription": "Detailed description",
  "capacity": 4,
  "pricePerNight": 150,
  "amenities": ["Wi-Fi", "Kitchen"],
  "images": ["https://..."],
  "featured": true
}
```

#### Add/Edit Activities
Edit `src/data/activities.json`:
```json
{
  "id": "1",
  "slug": "activity-name",
  "name": "Activity Name",
  "duration": "2 hours",
  "difficulty": "Easy",
  "featured": true
}
```

#### Update Contact Information
Edit `src/data/contact.json`:
```json
{
  "email": "info@kerlingfarm.com",
  "phone": "+1-234-567-8900",
  "whatsapp": "1234567890",
  "address": { ... }
}
```

### Adding Images

1. **For local images**: Place in `public/images/` directory
2. **For external images**: Use image hosting services like:
   - **Unsplash** (free stock photos)
   - **Cloudinary** (image CDN)
   - **ImgBB** (free image hosting)

Update image URLs in JSON files:
```json
"featuredImage": "/images/my-photo.jpg"  // Local
"featuredImage": "https://..."            // External
```

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  farm: {
    green: {
      600: '#1f7d51',  // Primary green
      700: '#1a6443',
    },
    earth: { ... },
    cream: { ... }
  }
}
```

### Fonts

Configured in `src/app/layout.tsx`:
```typescript
const inter = Inter({ ... });           // Body text
const merriweather = Merriweather({ ... }); // Headings
```

### Navigation

Edit navigation items in `src/lib/data.ts`:
```typescript
export function getNavigationItems() {
  return [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // Add more items...
  ];
}
```

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

This generates an optimized production build in `.next/` directory.

### Test Production Build Locally

```bash
npm run start
```

### Deploy to Vercel (Recommended)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Set Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

### Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Deploy to Other Platforms

The site is a standard Next.js app and can deploy to:
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Cloudflare Pages**
- **Railway**

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📱 WhatsApp Integration

The WhatsApp button uses the Click-to-Chat API. Configure in `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

Format: Country code + number (no + or spaces)
- US: 1234567890
- UK: 447123456789
- India: 919876543210

## 🎯 SEO Features

### Implemented SEO Best Practices:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Structured data (JSON-LD)
  - Organization schema
  - Breadcrumb schema
  - Hotel/Accommodation schema
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML
- ✅ Image alt tags
- ✅ Canonical URLs

### Testing SEO

1. **Google Rich Results Test:**
   - Visit: https://search.google.com/test/rich-results
   - Enter your deployed URL

2. **Lighthouse (Chrome DevTools):**
   - Open DevTools → Lighthouse
   - Run audit for SEO, Performance, Accessibility

3. **Submit to Google Search Console:**
   - Add your site at https://search.google.com/search-console
   - Submit your sitemap: `https://yoursite.com/sitemap.xml`

## 🐛 Troubleshooting

### Images not loading?

- Check image URLs in JSON files
- Ensure images are in `public/images/`
- For external images, add domain to `next.config.js`:
  ```javascript
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  }
  ```

### Build errors?

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript errors?

```bash
npm run type-check
```

## 📦 Key Dependencies

- **next**: 14.2.0 - React framework
- **react**: 18.3.0 - UI library
- **typescript**: 5.3.0 - Type safety
- **tailwindcss**: 3.4.0 - CSS framework
- **lucide-react**: 0.344.0 - Icon library

## 📄 License

This project is proprietary software for Kerling Farm.

## 🤝 Support

For questions or support:
- Email: info@kerlingfarm.com
- Phone: +1-234-567-8900

---

**Built with ❤️ for Kerling Farm**
