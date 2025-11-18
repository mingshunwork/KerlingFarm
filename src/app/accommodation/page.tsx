import Image from 'next/image';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { getAccommodations } from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Accommodation - Comfortable Farm Stays | Kerling Farm',
    description:
      'Browse our range of comfortable farm accommodations including cottages, cabins, and family suites. Modern amenities in a rustic countryside setting.',
    keywords: ['farm accommodation', 'farm stay', 'cottage rental', 'cabin rental'],
    path: '/accommodation',
  });
}

export default function AccommodationPage() {
  const accommodations = getAccommodations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-farm-green-900">
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Accommodations
          </h1>
          <p className="max-w-2xl text-lg">
            Comfortable lodging options for every type of traveler, from cozy
            cabins to spacious family suites
          </p>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id}>
                <div className="relative h-64 w-full">
                  <Image
                    src={accommodation.featuredImage}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {accommodation.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-farm-green-600 px-3 py-1 text-sm font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h2 className="mb-2 text-2xl font-bold text-farm-green-900">
                    {accommodation.name}
                  </h2>
                  <p className="mb-4 text-gray-700">
                    {accommodation.shortDescription}
                  </p>
                  <div className="mb-4 flex items-center gap-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>Sleeps {accommodation.capacity}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-farm-green-700">
                      {formatCurrency(accommodation.pricePerNight)}
                    </span>
                    <span className="text-gray-600">/ night</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/accommodation/${accommodation.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
