import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Leaf, Calendar, MapPin, Wifi, Coffee, UtensilsCrossed, Dumbbell, Droplets, Trees } from 'lucide-react';
import {
  getFeaturedAccommodations,
  getFeaturedActivities,
  getSiteConfig,
} from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import Button, { getButtonClasses } from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { formatCurrency } from '@/lib/utils';

export default function HomePage() {
  const siteConfig = getSiteConfig();
  const featuredAccommodations = getFeaturedAccommodations().slice(0, 3);
  const featuredActivities = getFeaturedActivities().slice(0, 3);

  return (
    <>
      {/* Hero Section - Full Screen with Overlay */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920"
          alt="Kerling Farm scenic view"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-bg-primary" />
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <div className="animate-fade-in-up space-y-6">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Escape to Serenity at
              <br />
              <span className="text-gradient">{siteConfig.name}</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-200 md:text-2xl">
              {siteConfig.description}
            </p>
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-center">
              <Link href="/accommodation" className={getButtonClasses('primary', 'lg', 'text-lg px-10 py-6')}>
                Your Discovery Awaits
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <WhatsAppButton className="text-lg px-10 py-6 bg-farm-green-600 hover:bg-farm-green-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Dark with Image */}
      <section className="section-padding section-bg-dark">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group animate-fade-in-up">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
                alt="Kerling Farm landscape"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content Side */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h2 className="text-4xl font-bold md:text-5xl">
                Welcome to <span className="text-gradient">{siteConfig.name}</span>
              </h2>
              <div className="space-y-4 text-lg text-dark-text-secondary leading-relaxed">
                <p>
                  Tucked away in the lap of nature, GM Farm Homestay offers a peaceful retreat where you can unwind, recharge, and immerse yourself in the serenity of the countryside, just a short drive from the vibrant city of Kathmandu.
                </p>
                <p>
                  What we do is the notion of a farm-stay is best brought up our gateways, to choose views whether they will be our greenery, learn about mountain culture, food, and experience farm life hands-on. Enjoy walks with the farm, savor freshly grown produce, and reconnect with nature while we bring you comfort combined with authenticity.
                </p>
                <p>
                  Come, experience the simplicity of rural living, far—where every sunrise feels like promise, every sunset feels like peace. With at GM Farm Homestay, memories are born.
                </p>
              </div>
              <Link href="/about" className={getButtonClasses('secondary', 'lg', 'mt-6')}>
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Essence Section - Feature Cards with Icons */}
      <section className="section-padding section-bg-darker">
        <div className="container-custom">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              The Essence of <span className="text-gradient">GM Farm Hospitality</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-dark-text-secondary">
              Discover a unique blend of comfort, adventure, and tranquility that sets us apart
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="card p-8 text-center animate-fade-in-up animation-delay-100">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-farm-green-600/20 to-farm-green-800/20 border border-farm-green-600/30">
                <Leaf className="h-10 w-10 text-farm-green-500" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-golden-600">
                Eco-Friendly Hospitality
              </h3>
              <p className="text-dark-text-secondary">
                Experience guilt free relaxation in our environmentally conscious haven
              </p>
            </div>

            {/* Card 2 */}
            <div className="card p-8 text-center animate-fade-in-up animation-delay-200">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-golden-600/20 to-golden-800/20 border border-golden-600/30">
                <Home className="h-10 w-10 text-golden-600" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-golden-600">
                Family Friendly
              </h3>
              <p className="text-dark-text-secondary">
                Perfect for families and nature-loving travelers
              </p>
            </div>

            {/* Card 3 */}
            <div className="card p-8 text-center animate-fade-in-up animation-delay-300">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-farm-green-600/20 to-farm-green-800/20 border border-farm-green-600/30">
                <MapPin className="h-10 w-10 text-farm-green-500" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-golden-600">
                Home Away From Home
              </h3>
              <p className="text-dark-text-secondary">
                Experience warmth and comfort in every corner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className="section-padding section-bg-dark">
        <div className="container-custom">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Our <span className="text-gradient">Rooms</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-dark-text-secondary">
              Whether you come as a couple, a family, or a group of friends — our rooms offer the comfort and ambience you'd expect from a home away from home. Thoughtfully designed with cozy interiors and a touch of rustic charm — each space is ready to make your stay comfortable and memorable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredAccommodations.map((accommodation, index) => (
              <Card key={accommodation.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={accommodation.featuredImage}
                    alt={accommodation.name}
                    fill
                    className="object-cover image-hover-zoom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-golden-600">
                    {accommodation.name}
                  </h3>
                  <p className="text-dark-text-secondary line-clamp-2">
                    {accommodation.shortDescription}
                  </p>

                  {/* Amenities Icons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="flex items-center gap-2 text-sm text-farm-green-500">
                      <Wifi className="h-4 w-4" />
                      <span>Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-farm-green-500">
                      <Coffee className="h-4 w-4" />
                      <span>Breakfast</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-farm-green-500">
                      <Droplets className="h-4 w-4" />
                      <span>Hot Water</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-dark-border-primary">
                    <div>
                      <p className="text-3xl font-bold text-golden-600">
                        {formatCurrency(accommodation.pricePerNight)}
                      </p>
                      <p className="text-sm text-dark-text-muted">per night</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-dark-text-muted">Sleeps</p>
                      <p className="text-2xl font-semibold text-dark-text-primary">
                        {accommodation.capacity}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/accommodation/${accommodation.slug}`} className={getButtonClasses('primary', 'md', 'w-full')}>
                    View Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/accommodation" className={getButtonClasses('secondary', 'lg')}>
              See All Rooms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Amenities Section */}
      <section className="section-padding section-bg-darker">
        <div className="container-custom">
          <div className="mb-16 text-center animate-fade-in-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Premium <span className="text-gradient">Amenities</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-dark-text-secondary">
              Everything you need for a comfortable and memorable stay — modern comforts blended with the charm of countryside living
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Amenity 1 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-golden-600/10 border border-golden-600/30 transition-all duration-300 group-hover:bg-golden-600/20">
                <Wifi className="h-8 w-8 text-golden-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Free Wi-Fi</h3>
              <p className="text-sm text-dark-text-secondary">Stay connected</p>
            </div>

            {/* Amenity 2 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up animation-delay-100">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-golden-600/10 border border-golden-600/30 transition-all duration-300 group-hover:bg-golden-600/20">
                <UtensilsCrossed className="h-8 w-8 text-golden-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Complimentary meals</h3>
              <p className="text-sm text-dark-text-secondary">Fresh farm produce</p>
            </div>

            {/* Amenity 3 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up animation-delay-200">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-golden-600/10 border border-golden-600/30 transition-all duration-300 group-hover:bg-golden-600/20">
                <MapPin className="h-8 w-8 text-golden-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Free Parking</h3>
              <p className="text-sm text-dark-text-secondary">Secure parking lot</p>
            </div>

            {/* Amenity 4 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up animation-delay-300">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-golden-600/10 border border-golden-600/30 transition-all duration-300 group-hover:bg-golden-600/20">
                <UtensilsCrossed className="h-8 w-8 text-golden-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Restaurant</h3>
              <p className="text-sm text-dark-text-secondary">On-site dining</p>
            </div>

            {/* Amenity 5 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up animation-delay-100">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-600/10 border border-farm-green-600/30 transition-all duration-300 group-hover:bg-farm-green-600/20">
                <Dumbbell className="h-8 w-8 text-farm-green-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Fitness</h3>
              <p className="text-sm text-dark-text-secondary">Stay active</p>
            </div>

            {/* Amenity 6 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up animation-delay-200">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-600/10 border border-farm-green-600/30 transition-all duration-300 group-hover:bg-farm-green-600/20">
                <Droplets className="h-8 w-8 text-farm-green-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Hot Water</h3>
              <p className="text-sm text-dark-text-secondary">24/7 availability</p>
            </div>

            {/* Amenity 7 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up animation-delay-300">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-600/10 border border-farm-green-600/30 transition-all duration-300 group-hover:bg-farm-green-600/20">
                <Trees className="h-8 w-8 text-farm-green-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Rooftop Lounge</h3>
              <p className="text-sm text-dark-text-secondary">Beautiful landscapes</p>
            </div>

            {/* Amenity 8 */}
            <div className="card p-6 text-center group hover:border-golden-600/50 animate-fade-in-up animation-delay-400">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-farm-green-600/10 border border-farm-green-600/30 transition-all duration-300 group-hover:bg-farm-green-600/20">
                <Trees className="h-8 w-8 text-farm-green-500" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-text-primary">Nature Trails</h3>
              <p className="text-sm text-dark-text-secondary">Hiking paths</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Golden Gradient */}
      <section className="section-padding section-bg-golden-gradient">
        <div className="container-custom text-center">
          <div className="mx-auto max-w-4xl space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to <span className="text-gradient">Experience Farm Life?</span>
            </h2>
            <p className="text-xl text-dark-text-secondary leading-relaxed">
              Book your stay at Kerling Farm and create unforgettable memories in
              the heart of Vermont's beautiful countryside. Whether it's a weekend getaway or an extended retreat, we're here to make your experience truly special.
            </p>
            <div className="flex flex-col justify-center gap-5 pt-6 sm:flex-row">
              <Link href="/accommodation" className={getButtonClasses('primary', 'lg', 'text-lg px-10 py-6')}>
                Book Now
              </Link>
              <WhatsAppButton className="text-lg px-10 py-6 bg-farm-green-600 hover:bg-farm-green-700" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
