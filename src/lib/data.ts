import siteConfig from '@/data/site-config.json';
import contactInfo from '@/data/contact.json';
import accommodations from '@/data/accommodations.json';
import activities from '@/data/activities.json';
import plantation from '@/data/plantation.json';
import aboutData from '@/data/about.json';
import gallery from '@/data/gallery.json';

import type {
  SiteConfig,
  ContactInfo,
  Accommodation,
  Activity,
  PlantationSection,
  AboutContent,
  GalleryImage,
} from '@/types';

/**
 * Get site configuration
 */
export function getSiteConfig(): SiteConfig {
  return siteConfig as SiteConfig;
}

/**
 * Get contact information
 */
export function getContactInfo(): ContactInfo {
  return contactInfo as ContactInfo;
}

/**
 * Get all accommodations
 */
export function getAccommodations(): Accommodation[] {
  return accommodations as Accommodation[];
}

/**
 * Get featured accommodations
 */
export function getFeaturedAccommodations(): Accommodation[] {
  return (accommodations as Accommodation[])
    .filter((acc) => acc.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get single accommodation by slug
 */
export function getAccommodationBySlug(slug: string): Accommodation | undefined {
  return (accommodations as Accommodation[]).find((acc) => acc.slug === slug);
}

/**
 * Get all activities
 */
export function getActivities(): Activity[] {
  return activities as Activity[];
}

/**
 * Get featured activities
 */
export function getFeaturedActivities(): Activity[] {
  return (activities as Activity[])
    .filter((act) => act.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get single activity by slug
 */
export function getActivityBySlug(slug: string): Activity | undefined {
  return (activities as Activity[]).find((act) => act.slug === slug);
}

/**
 * Get all plantation sections
 */
export function getPlantationSections(): PlantationSection[] {
  return (plantation as PlantationSection[]).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}

/**
 * Get about content
 */
export function getAboutContent(): AboutContent {
  return aboutData as AboutContent;
}

/**
 * Get gallery images
 */
export function getGalleryImages(category?: string): GalleryImage[] {
  const images = gallery as GalleryImage[];
  if (category) {
    return images.filter((img) => img.category === category);
  }
  return images;
}

/**
 * Get navigation items
 */
export function getNavigationItems() {
  return [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Accommodation', href: '/accommodation' },
    { label: 'Plantation', href: '/plantation' },
    { label: 'Activities', href: '/activities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];
}
