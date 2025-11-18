import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, TrendingUp } from 'lucide-react';
import { getActivities, getActivityBySlug } from '@/lib/data';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export async function generateStaticParams() {
  const activities = getActivities();
  return activities.map((act) => ({
    slug: act.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const activity = getActivityBySlug(params.slug);
  if (!activity) return {};

  return generateSEOMetadata({
    seoData: activity.seo,
    path: `/activities/${params.slug}`,
  });
}

export default function ActivityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const activity = getActivityBySlug(params.slug);

  if (!activity) {
    notFound();
  }

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700 border-green-300',
    Moderate: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    Challenging: 'bg-red-100 text-red-700 border-red-300',
  };

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[400px] w-full">
        <Image
          src={activity.featuredImage}
          alt={activity.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold text-farm-green-900">
              {activity.name}
            </h1>
            <p className="mb-6 text-xl text-gray-700">
              {activity.shortDescription}
            </p>

            {/* Activity Info */}
            <div className="mb-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2">
                <Clock className="h-5 w-5 text-farm-green-600" />
                <span className="font-semibold">Duration:</span>
                <span>{activity.duration}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border px-4 py-2 ${difficultyColors[activity.difficulty]}">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Difficulty:</span>
                <span>{activity.difficulty}</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose-custom mb-8">
              <h2 className="mb-4 text-2xl font-bold text-farm-green-900">
                About This Activity
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {activity.fullDescription}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-farm-green-900">
                Gallery
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {activity.images.map((image, index) => (
                  <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${activity.name} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-lg border-2 border-farm-green-200 bg-farm-cream-50 p-8 text-center">
              <h3 className="mb-3 text-2xl font-bold text-farm-green-900">
                Ready to Experience This Activity?
              </h3>
              <p className="mb-6 text-gray-700">
                Contact us to book this activity or learn more about scheduling
                during your stay.
              </p>
              <WhatsAppButton
                activityName={activity.name}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
