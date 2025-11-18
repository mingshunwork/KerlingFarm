export interface Accommodation {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  capacity: number;
  pricePerNight: number;
  amenities: string[];
  images: string[];
  featuredImage: string;
  featured: boolean;
  displayOrder: number;
  seo: SEOData;
}

export interface Activity {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  images: string[];
  featuredImage: string;
  featured: boolean;
  displayOrder: number;
  seo: SEOData;
}

export interface PlantationSection {
  id: string;
  title: string;
  description: string;
  image: string;
  displayOrder: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  category: 'accommodation' | 'plantation' | 'activities' | 'general';
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  story: {
    title: string;
    content: string[];
    image: string;
  };
  values: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  seo: SEOData;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  mapEmbedUrl?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  tagline: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}
