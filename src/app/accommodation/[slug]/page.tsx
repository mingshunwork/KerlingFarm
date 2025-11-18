import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Check, Users, DollarSign } from 'lucide-react';
import { getAccommodations, getAccommodationBySlug } from '@/lib/data';
import { generateMetadata as generateSEOMetadata, generateAccommodationSchema } from '@/lib/seo';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import JsonLd from '@/components/shared/JsonLd';
import { formatCurrency } from '@/lib/utils';

export async function generateStaticParams() {
  const accommodations = getAccommodations();
  return accommodations.map((acc) => ({
    slug: acc.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const accommodation = getAccommodationBySlug(params.slug);
  if (!accommodation) return {};

  return generateSEOMetadata({
    seoData: accommodation.seo,
    path: `/accommodation/${params.slug}`,
  });
}

export default function AccommodationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const accommodation = getAccommodationBySlug(params.slug);

  if (!accommodation) {
    notFound();
  }

  const schema = generateAccommodationSchema({
    name: accommodation.name,
    description: accommodation.fullDescription,
    images: accommodation.images,
    pricePerNight: accommodation.pricePerNight,
    capacity: accommodation.capacity,
  });

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero Image */}
      <section className="relative h-[400px] w-full">
        <Image
          src={accommodation.featuredImage}
          alt={accommodation.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <h1 className="mb-4 text-4xl font-bold text-farm-green-900">
                {accommodation.name}
              </h1>
              <p className="mb-6 text-xl text-gray-700">
                {accommodation.shortDescription}
              </p>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-farm-green-900">
                  Description
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {accommodation.fullDescription}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-farm-green-900">
                  Amenities
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {accommodation.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-farm-green-600" />
                      <span className="text-gray-700">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-farm-green-900">
                  Gallery
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {accommodation.images.map((image, index) => (
                    <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${accommodation.name} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg border-2 border-gray-200 bg-white p-6 shadow-lg">
                <div className="mb-6">
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-farm-green-700">
                      {formatCurrency(accommodation.pricePerNight)}
                    </span>
                    <span className="text-gray-600">/ night</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Best rate available - no hidden fees
                  </p>
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="h-5 w-5 text-farm-green-600" />
                    <span>Sleeps up to {accommodation.capacity} guests</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <DollarSign className="h-5 w-5 text-farm-green-600" />
                    <span>Flexible cancellation policy</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <WhatsAppButton
                    roomName={accommodation.name}
                    className="w-full"
                  />
                  <Button variant="secondary" className="w-full">
                    Contact for Availability
                  </Button>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600">
                    Check-in: 3:00 PM
                    <br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
