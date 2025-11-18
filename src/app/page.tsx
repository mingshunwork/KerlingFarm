import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Leaf, Calendar, MapPin } from 'lucide-react';
import {
  getFeaturedAccommodations,
  getFeaturedActivities,
  getSiteConfig,
} from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { formatCurrency } from '@/lib/utils';

export default function HomePage() {
  const siteConfig = getSiteConfig();
  const featuredAccommodations = getFeaturedAccommodations().slice(0, 3);
  const featuredActivities = getFeaturedActivities().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920"
          alt="Kerling Farm scenic view"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            {siteConfig.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/accommodation">
                Explore Accommodations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <WhatsAppButton className="text-base px-8 py-4" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-farm-green-900 md:text-4xl">
              Welcome to {siteConfig.name}
            </h2>
            <p className="text-lg text-gray-700">
              Escape the hustle of city life and immerse yourself in the
              tranquility of our working farm. For over 70 years, we've been
              practicing sustainable agriculture and welcoming guests to
              experience authentic farm life. Whether you're seeking a peaceful
              retreat, educational adventure, or family bonding time, Kerling
              Farm offers the perfect setting.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-farm-cream-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-100">
                <Home className="h-8 w-8 text-farm-green-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                Comfortable Stays
              </h3>
              <p className="text-gray-700">
                Cozy accommodations with modern amenities in a rustic setting
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-100">
                <Leaf className="h-8 w-8 text-farm-green-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                Organic Farming
              </h3>
              <p className="text-gray-700">
                Certified organic produce grown with sustainable practices
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-100">
                <Calendar className="h-8 w-8 text-farm-green-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                Year-Round Activities
              </h3>
              <p className="text-gray-700">
                Seasonal farm activities and educational workshops for all ages
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-100">
                <MapPin className="h-8 w-8 text-farm-green-700" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                Scenic Location
              </h3>
              <p className="text-gray-700">
                50 acres of beautiful Vermont countryside with hiking trails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Accommodations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-farm-green-900 md:text-4xl">
              Featured Accommodations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Choose from our comfortable lodging options, each offering a unique
              farm-stay experience
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredAccommodations.map((accommodation) => (
              <Card key={accommodation.id}>
                <div className="relative h-64 w-full">
                  <Image
                    src={accommodation.featuredImage}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                    {accommodation.name}
                  </h3>
                  <p className="mb-4 text-gray-700">
                    {accommodation.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-farm-green-700">
                        {formatCurrency(accommodation.pricePerNight)}
                      </p>
                      <p className="text-sm text-gray-600">per night</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Sleeps</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {accommodation.capacity}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full" variant="secondary">
                    <Link href={`/accommodation/${accommodation.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/accommodation">
                View All Accommodations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="section-padding bg-farm-cream-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-farm-green-900 md:text-4xl">
              Farm Activities & Experiences
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Engage with farm life through hands-on activities and educational
              experiences
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredActivities.map((activity) => (
              <Card key={activity.id}>
                <div className="relative h-64 w-full">
                  <Image
                    src={activity.featuredImage}
                    alt={activity.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                    {activity.name}
                  </h3>
                  <p className="mb-4 text-gray-700">
                    {activity.shortDescription}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Duration: {activity.duration}</span>
                    <span className="rounded-full bg-farm-green-100 px-3 py-1 text-farm-green-700">
                      {activity.difficulty}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full" variant="secondary">
                    <Link href={`/activities/${activity.slug}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/activities">
                View All Activities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-farm-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Experience Farm Life?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Book your stay at Kerling Farm and create unforgettable memories in
            the heart of Vermont's beautiful countryside.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <WhatsAppButton className="bg-white text-farm-green-700 hover:bg-gray-100 text-base px-8 py-4" />
            <Button asChild variant="secondary" size="lg" className="bg-white text-farm-green-700 border-white hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
