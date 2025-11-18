import { type ClassValue, clsx } from 'clsx';

/**
 * Merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format currency
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format date
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Generate WhatsApp link
 */
export interface WhatsAppConfig {
  phoneNumber: string;
  roomName?: string;
  activityName?: string;
  message?: string;
}

export function generateWhatsAppLink(config: WhatsAppConfig): string {
  const { phoneNumber, roomName, activityName, message } = config;

  let defaultMessage = 'Hello! I would like to inquire about Kerling Farm.';

  if (roomName) {
    defaultMessage = `Hello! I'm interested in booking the ${roomName}.`;
  } else if (activityName) {
    defaultMessage = `Hello! I'd like to know more about the ${activityName} activity.`;
  }

  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Truncate text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Slugify text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Get reading time estimate
 */
export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
