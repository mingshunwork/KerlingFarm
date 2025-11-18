import type { Metadata } from 'next';
import type { SEOData, SiteConfig } from '@/types';
import { getSiteConfig } from './data';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  seoData?: SEOData;
}

/**
 * Generate metadata for Next.js pages
 */
export function generateMetadata({
  title,
  description,
  keywords,
  image,
  path = '',
  seoData,
}: GenerateMetadataProps): Metadata {
  const siteConfig: SiteConfig = getSiteConfig();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kerlingfarm.com';

  // Use SEOData if provided, otherwise use individual props
  const metaTitle = seoData?.title || title || siteConfig.name;
  const metaDescription =
    seoData?.description || description || siteConfig.description;
  const metaKeywords = seoData?.keywords || keywords || [];
  const metaImage =
    seoData?.ogImage || image || `${baseUrl}/images/og-default.jpg`;
  const url = `${baseUrl}${path}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema() {
  const siteConfig = getSiteConfig();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kerlingfarm.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Farm Road',
      addressLocality: 'Greenville',
      addressRegion: 'VT',
      postalCode: '05401',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.4759',
      longitude: '-73.2121',
    },
    telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1-234-567-8900',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@kerlingfarm.com',
    priceRange: '$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.8',
      bestRating: '5',
    },
  };
}

/**
 * Generate JSON-LD for breadcrumb navigation
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kerlingfarm.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate JSON-LD for accommodation
 */
export function generateAccommodationSchema(accommodation: {
  name: string;
  description: string;
  images: string[];
  pricePerNight: number;
  capacity: number;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kerlingfarm.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: accommodation.name,
    description: accommodation.description,
    image: accommodation.images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Farm Road',
      addressLocality: 'Greenville',
      addressRegion: 'VT',
      postalCode: '05401',
      addressCountry: 'US',
    },
    priceRange: '$$',
    maximumAttendeeCapacity: accommodation.capacity,
  };
}
