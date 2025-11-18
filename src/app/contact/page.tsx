import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { getContactInfo } from '@/lib/data';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Contact Us - Get in Touch | Kerling Farm',
    description:
      'Contact Kerling Farm for bookings, inquiries, or more information. Reach us via phone, email, or WhatsApp. We look forward to hearing from you!',
    keywords: ['contact', 'booking', 'inquiries', 'farm contact'],
    path: '/contact',
  });
}

export default function ContactPage() {
  const contact = getContactInfo();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-farm-green-900">
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="max-w-2xl text-lg">
            We'd love to hear from you. Get in touch to book your stay or ask any
            questions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-farm-green-900">
                Get In Touch
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Whether you're ready to book or just have questions about our farm
                stay, we're here to help. Reach out using any of the methods below.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-farm-green-900">
                      WhatsApp (Preferred)
                    </h3>
                    <p className="mb-2 text-gray-700">
                      Chat with us directly for quick responses
                    </p>
                    <WhatsAppButton />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-farm-green-100">
                    <Phone className="h-6 w-6 text-farm-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-farm-green-900">
                      Phone
                    </h3>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-lg text-farm-green-600 hover:underline"
                    >
                      {contact.phone}
                    </a>
                    <p className="text-sm text-gray-600">
                      Monday - Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-farm-green-100">
                    <Mail className="h-6 w-6 text-farm-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-farm-green-900">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-lg text-farm-green-600 hover:underline"
                    >
                      {contact.email}
                    </a>
                    <p className="text-sm text-gray-600">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-farm-green-100">
                    <MapPin className="h-6 w-6 text-farm-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-farm-green-900">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      {contact.address.street}
                      <br />
                      {contact.address.city}, {contact.address.state}{' '}
                      {contact.address.zipCode}
                      <br />
                      {contact.address.country}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-farm-green-100">
                    <Clock className="h-6 w-6 text-farm-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-farm-green-900">
                      Check-In / Check-Out
                    </h3>
                    <p className="text-gray-700">
                      Check-in: 3:00 PM
                      <br />
                      Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-farm-green-900">
                Find Us
              </h2>
              <div className="overflow-hidden rounded-lg shadow-lg">
                {contact.mapEmbedUrl ? (
                  <iframe
                    src={contact.mapEmbedUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kerling Farm Location"
                  />
                ) : (
                  <div className="flex h-[450px] items-center justify-center bg-gray-100">
                    <p className="text-gray-500">Map placeholder</p>
                  </div>
                )}
              </div>
              <div className="mt-6 rounded-lg bg-farm-cream-50 p-6">
                <h3 className="mb-2 font-semibold text-farm-green-900">
                  Directions
                </h3>
                <p className="text-gray-700">
                  We're located in the beautiful Vermont countryside, about 20
                  minutes from downtown Greenville. Take Route 89 North, exit at
                  Farm Road, and follow signs to Kerling Farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-farm-cream-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-farm-green-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-farm-green-900">
                  What's included with my stay?
                </h3>
                <p className="text-gray-700">
                  All accommodations include Wi-Fi, parking, access to hiking
                  trails, and participation in daily farm activities. Some
                  specialized workshops require advance booking.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-farm-green-900">
                  Do you offer meals?
                </h3>
                <p className="text-gray-700">
                  All accommodations have kitchen facilities. We offer farm-to-table
                  cooking classes and sell fresh produce at our farm stand. Nearby
                  restaurants are a 15-minute drive.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-farm-green-900">
                  Is the farm child-friendly?
                </h3>
                <p className="text-gray-700">
                  Absolutely! Children love our farm. We have gentle animals, safe
                  activities, and plenty of space to explore. Children under 3 stay
                  free.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-farm-green-900">
                  What's your cancellation policy?
                </h3>
                <p className="text-gray-700">
                  Free cancellation up to 48 hours before check-in. Cancellations
                  within 48 hours are subject to a one-night charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
