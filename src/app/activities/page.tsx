import Image from 'next/image';
import Link from 'next/link';
import { Clock, TrendingUp } from 'lucide-react';
import { getActivities } from '@/lib/data';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Farm Activities & Experiences | Kerling Farm',
    description:
      'Discover hands-on farm activities including tours, vegetable harvesting, animal feeding, and farm-to-table cooking classes.',
    keywords: ['farm activities', 'farm tours', 'farm experiences', 'agritourism activities'],
    path: '/activities',
  });
}

export default function ActivitiesPage() {
  const activities = getActivities();

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Moderate: 'bg-yellow-100 text-yellow-700',
    Challenging: 'bg-red-100 text-red-700',
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-farm-green-900">
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Farm Activities
          </h1>
          <p className="max-w-2xl text-lg">
            Engage with authentic farm life through hands-on activities and
            educational experiences for all ages
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card key={activity.id}>
                <div className="relative h-64 w-full">
                  <Image
                    src={activity.featuredImage}
                    alt={activity.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {activity.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-farm-green-600 px-3 py-1 text-sm font-semibold text-white">
                      Popular
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h2 className="mb-2 text-2xl font-bold text-farm-green-900">
                    {activity.name}
                  </h2>
                  <p className="mb-4 text-gray-700">
                    {activity.shortDescription}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-gray-600" />
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          difficultyColors[activity.difficulty]
                        }`}
                      >
                        {activity.difficulty}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/activities/${activity.slug}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-farm-cream-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-farm-green-900">
              Plan Your Activities
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Most activities are included with your stay, though some specialized
              experiences require advance booking. Contact us to customize your
              farm experience.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
