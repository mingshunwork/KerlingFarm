# Kerling Farm - System Architecture

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                             │
│                    (Chrome, Safari, Firefox)                     │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTPS Request
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      VERCEL EDGE NETWORK                         │
│                        (Global CDN)                              │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Pre-rendered HTML Pages (Static Site Generation)       │  │
│  │  • Homepage                                              │  │
│  │  • About                                                 │  │
│  │  • Accommodation Listings                               │  │
│  │  • Activity Listings                                    │  │
│  │  • Contact, Gallery, etc.                               │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Image Requests
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     IMAGE CDN (Unsplash)                         │
│              Optimized & Cached Images                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    WHATSAPP BUSINESS API                         │
│              (User clicks → Opens WhatsApp)                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Architecture

```
┌──────────────────────┐
│   JSON Data Files    │
│   (src/data/)        │
│                      │
│  • accommodations    │
│  • activities        │
│  • about             │
│  • contact           │
│  • plantation        │
│  • gallery           │
└──────┬───────────────┘
       │
       │ Read at Build Time
       │
       ▼
┌──────────────────────┐
│   Data Functions     │
│   (lib/data.ts)      │
│                      │
│  • getAccommodations │
│  • getActivities     │
│  • getAboutContent   │
└──────┬───────────────┘
       │
       │ Import
       │
       ▼
┌──────────────────────┐
│   Page Components    │
│   (app/*.tsx)        │
│                      │
│  • Server Components │
│  • Static Generation │
└──────┬───────────────┘
       │
       │ Build Process
       │
       ▼
┌──────────────────────┐
│   Static HTML        │
│   (.next/server/)    │
│                      │
│  • Pre-rendered      │
│  • SEO-ready         │
│  • Fast loading      │
└──────┬───────────────┘
       │
       │ Deploy
       │
       ▼
┌──────────────────────┐
│   Vercel CDN         │
│   (Production)       │
└──────────────────────┘
```

---

## Component Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│                    Root Layout                          │
│                  (app/layout.tsx)                       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │              Header Component                   │  │
│  │  • Logo                                         │  │
│  │  • Navigation (Desktop & Mobile)                │  │
│  │  • Sticky positioning                           │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │              Main Content Area                  │  │
│  │                                                 │  │
│  │  ┌───────────────────────────────────────────┐ │  │
│  │  │           Page Component                  │ │  │
│  │  │  (Homepage, About, Accommodation, etc.)   │ │  │
│  │  │                                           │ │  │
│  │  │  ┌─────────────────────────────────────┐ │ │  │
│  │  │  │      UI Components               │ │ │  │
│  │  │  │  • Cards                          │ │ │  │
│  │  │  │  • Buttons                        │ │ │  │
│  │  │  │  • Images (Next Image)            │ │ │  │
│  │  │  │  • WhatsApp Button                │ │ │  │
│  │  │  └─────────────────────────────────────┘ │ │  │
│  │  └───────────────────────────────────────────┘ │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │              Footer Component                   │  │
│  │  • Contact Info                                 │  │
│  │  • Quick Links                                  │  │
│  │  • Social Media                                 │  │
│  │  • Copyright                                    │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │      Fixed WhatsApp Button                      │  │
│  │  (Bottom-right corner, always visible)          │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │        JSON-LD Structured Data                  │  │
│  │  • Organization Schema                          │  │
│  │  • Breadcrumb Schema                            │  │
│  │  • Product/Service Schema                       │  │
│  └─────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Page Structure

```
app/
│
├── layout.tsx              → Root layout (Header + Footer)
│
├── page.tsx                → Homepage
│   ├── Hero Section
│   ├── Welcome Section
│   ├── Features Grid (4 items)
│   ├── Featured Accommodations (3 cards)
│   ├── Featured Activities (3 cards)
│   └── CTA Section
│
├── about/
│   └── page.tsx            → About Page
│       ├── Hero Section
│       ├── Farm Story
│       ├── Values Grid (6 items)
│       └── Timeline
│
├── accommodation/
│   ├── page.tsx            → Accommodation Listing
│   │   ├── Hero Section
│   │   └── Accommodation Grid (4 cards)
│   │
│   └── [slug]/
│       └── page.tsx        → Accommodation Detail
│           ├── Hero Image
│           ├── Description
│           ├── Amenities List
│           ├── Image Gallery
│           └── Booking Sidebar
│
├── activities/
│   ├── page.tsx            → Activities Listing
│   │   ├── Hero Section
│   │   └── Activities Grid (5 cards)
│   │
│   └── [slug]/
│       └── page.tsx        → Activity Detail
│           ├── Hero Image
│           ├── Description
│           ├── Info Badges
│           ├── Image Gallery
│           └── Booking CTA
│
├── plantation/
│   └── page.tsx            → Plantation Page
│       ├── Hero Section
│       ├── Introduction
│       ├── Plantation Sections (6 items)
│       └── Tour CTA
│
├── gallery/
│   └── page.tsx            → Photo Gallery
│       ├── Hero Section
│       ├── Category Filter
│       └── Image Grid (filterable)
│
├── contact/
│   └── page.tsx            → Contact Page
│       ├── Hero Section
│       ├── Contact Methods
│       ├── Map Embed
│       └── FAQ Section
│
├── sitemap.ts              → Auto-generated XML sitemap
│
└── robots.ts               → Auto-generated robots.txt
```

---

## Rendering Strategy

```
┌─────────────────────────────────────────────────────┐
│         Build Time (npm run build)                  │
└─────────────────┬───────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
┌──────────────┐   ┌──────────────┐
│ Static Pages │   │ Dynamic Routes│
│              │   │              │
│ • Homepage   │   │ • /accommodation/│
│ • About      │   │   [slug]     │
│ • Contact    │   │              │
│ • Plantation │   │ • /activities/│
│ • Gallery    │   │   [slug]     │
│              │   │              │
│ Generated    │   │ Generated for│
│ once         │   │ each slug    │
└──────────────┘   └──────────────┘
        │                   │
        └─────────┬─────────┘
                  │
                  ▼
        ┌─────────────────┐
        │  HTML + Assets  │
        │                 │
        │  Deployed to    │
        │  Vercel CDN     │
        └─────────────────┘
```

**Strategy: Static Site Generation (SSG)**
- All pages pre-rendered at build time
- No server-side rendering needed
- Fastest possible page loads
- SEO-optimized HTML

---

## SEO Architecture

```
┌────────────────────────────────────────────────────┐
│              Page Component                        │
└───────────────┬────────────────────────────────────┘
                │
                ▼
┌────────────────────────────────────────────────────┐
│         generateMetadata()                         │
│  (Next.js 14 Metadata API)                        │
│                                                    │
│  Generates:                                        │
│  • <title>                                        │
│  • <meta name="description">                      │
│  • <meta name="keywords">                         │
│  • <meta property="og:*">                         │
│  • <meta name="twitter:*">                        │
│  • <link rel="canonical">                         │
└───────────────┬────────────────────────────────────┘
                │
                ▼
┌────────────────────────────────────────────────────┐
│           JSON-LD Component                        │
│  (Structured Data)                                 │
│                                                    │
│  Schemas:                                          │
│  • Organization                                    │
│  • LodgingBusiness                                │
│  • Hotel                                          │
│  • Breadcrumb                                     │
└───────────────┬────────────────────────────────────┘
                │
                ▼
┌────────────────────────────────────────────────────┐
│          Final HTML Output                         │
│                                                    │
│  <head>                                           │
│    <meta tags>                                    │
│    <script type="application/ld+json">            │
│  </head>                                          │
│  <body>                                           │
│    <semantic HTML>                                │
│  </body>                                          │
└────────────────────────────────────────────────────┘
```

---

## Deployment Pipeline

```
┌─────────────────────┐
│  Developer Edits    │
│  JSON Content       │
│  (src/data/)        │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Git Commit         │
│  git add .          │
│  git commit -m "..."│
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Git Push           │
│  git push origin    │
│  main               │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Vercel Detects     │
│  New Commit         │
│  (Auto-trigger)     │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Build Process      │
│  • npm install      │
│  • npm run build    │
│  • Generate HTML    │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Deploy to CDN      │
│  • Upload to Edge   │
│  • Invalidate Cache │
│  • Update DNS       │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Site Live!         │
│  (2-3 minutes)      │
└─────────────────────┘
```

**Total Time**: Content update to live: ~3-5 minutes

---

## Technology Stack Diagram

```
┌────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                   │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │   React 18   │  │ TypeScript 5 │  │ Tailwind 3  │ │
│  │              │  │              │  │             │ │
│  │ UI Framework │  │ Type Safety  │  │ Styling     │ │
│  └──────────────┘  └──────────────┘  └─────────────┘ │
└────────────────────────────────────────────────────────┘
                           │
┌────────────────────────────────────────────────────────┐
│                   FRAMEWORK LAYER                      │
│  ┌──────────────────────────────────────────────────┐ │
│  │              Next.js 14 App Router               │ │
│  │                                                  │ │
│  │  • File-based routing                           │ │
│  │  • Server Components                            │ │
│  │  • Static Site Generation                       │ │
│  │  • Image Optimization                           │ │
│  │  • Font Optimization                            │ │
│  │  • SEO Features                                 │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
                           │
┌────────────────────────────────────────────────────────┐
│                     DATA LAYER                         │
│  ┌──────────────────────────────────────────────────┐ │
│  │              JSON Files (src/data/)              │ │
│  │                                                  │ │
│  │  • No Database Required                         │ │
│  │  • Version Controlled                           │ │
│  │  • Easy to Edit                                 │ │
│  │  • Type-Safe (TypeScript)                       │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
                           │
┌────────────────────────────────────────────────────────┐
│                   DEPLOYMENT LAYER                     │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────┐ │
│  │  Vercel    │  │  GitHub    │  │   Unsplash      │ │
│  │  CDN       │  │  Repo      │  │   Image CDN     │ │
│  │            │  │            │  │                 │ │
│  │  Hosting   │  │ Version    │  │  Image Hosting  │ │
│  └────────────┘  └────────────┘  └─────────────────┘ │
└────────────────────────────────────────────────────────┘
```

---

## Security Architecture

```
┌─────────────────────────────────────────────────┐
│              Security Layers                    │
└─────────────────────────────────────────────────┘

Layer 1: HTTPS/SSL
├─ Automatic SSL certificate (Vercel)
├─ All traffic encrypted
└─ HTTP → HTTPS redirect

Layer 2: Security Headers
├─ X-Frame-Options: SAMEORIGIN
├─ X-Content-Type-Options: nosniff
├─ Referrer-Policy: origin-when-cross-origin
└─ X-DNS-Prefetch-Control: on

Layer 3: Static Site (No Backend)
├─ No database to hack
├─ No authentication required
├─ No user data collection
└─ Read-only content

Layer 4: Vercel Security
├─ DDoS protection
├─ Rate limiting
├─ Edge network filtering
└─ Automated security patches

Layer 5: Content Security
├─ All JSON files version controlled
├─ No executable content
├─ Image URLs validated
└─ No third-party scripts (except analytics)
```

---

## Performance Optimization

```
Build-Time Optimizations:
├─ Static Site Generation
│  └─ All pages pre-rendered
├─ Code Splitting
│  └─ Automatic per-route
├─ Tree Shaking
│  └─ Remove unused code
└─ Minification
   └─ CSS, JS compressed

Runtime Optimizations:
├─ Image Optimization
│  ├─ Next.js Image component
│  ├─ Automatic WebP/AVIF
│  ├─ Responsive images
│  └─ Lazy loading
├─ Font Optimization
│  ├─ Variable fonts
│  └─ Font display: swap
├─ CDN Caching
│  ├─ Edge caching
│  └─ Browser caching
└─ Prefetching
   └─ Link prefetch on hover

Result:
├─ Lighthouse Score: 95+
├─ First Contentful Paint: < 1.5s
├─ Largest Contentful Paint: < 2.5s
└─ Total Bundle Size: < 200KB
```

---

This architecture ensures:
✅ Fast performance
✅ SEO optimization
✅ Easy maintenance
✅ Scalability
✅ Security
✅ Cost-effectiveness
