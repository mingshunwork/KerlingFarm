import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { getContactInfo, getSiteConfig, getNavigationItems } from '@/lib/data';

export default function Footer() {
  const contact = getContactInfo();
  const siteConfig = getSiteConfig();
  const navigation = getNavigationItems();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-farm-green-900 text-white">
      <div className="container-custom">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Column */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{siteConfig.name}</h3>
            <p className="mb-4 text-sm text-farm-green-100">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-farm-green-100">
              Experience authentic farm life with comfortable accommodations and
              hands-on activities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-farm-green-100 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-farm-green-100" />
                <span className="text-sm text-farm-green-100">
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state}{' '}
                  {contact.address.zipCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-farm-green-100" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm text-farm-green-100 transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-farm-green-100" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-farm-green-100 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              {contact.socialMedia.facebook && (
                <a
                  href={contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-farm-green-800 text-farm-green-100 transition-colors hover:bg-farm-green-700 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {contact.socialMedia.instagram && (
                <a
                  href={contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-farm-green-800 text-farm-green-100 transition-colors hover:bg-farm-green-700 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
            <div className="mt-6">
              <p className="text-sm text-farm-green-100">
                Open to visitors year-round
              </p>
              <p className="mt-1 text-sm text-farm-green-100">
                Check-in: 3:00 PM | Check-out: 11:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-farm-green-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-farm-green-100">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-farm-green-100 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-farm-green-100 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
