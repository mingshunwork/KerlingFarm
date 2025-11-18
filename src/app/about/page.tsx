import Image from 'next/image';
import { Leaf, Heart, Users, BookOpen, Sprout, Sun } from 'lucide-react';
import { getAboutContent } from '@/lib/data';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const iconMap = {
  Leaf: Leaf,
  Heart: Heart,
  Users: Users,
  BookOpen: BookOpen,
  Sprout: Sprout,
  Sun: Sun,
};

export async function generateMetadata() {
  const aboutContent = getAboutContent();
  return generateSEOMetadata({
    seoData: aboutContent.seo,
    path: '/about',
  });
}

export default function AboutPage() {
  const aboutContent = getAboutContent();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src={aboutContent.hero.image}
          alt={aboutContent.hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <p className="mb-2 text-lg font-semibold text-farm-cream-100">
            {aboutContent.hero.subtitle}
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            {aboutContent.hero.title}
          </h1>
          <p className="max-w-2xl text-lg">
            {aboutContent.hero.description}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-farm-green-900 md:text-4xl">
                {aboutContent.story.title}
              </h2>
              <div className="space-y-4">
                {aboutContent.story.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src={aboutContent.story.image}
                alt="Our farm story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-farm-cream-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-farm-green-900 md:text-4xl">
              {aboutContent.values.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              These core principles guide everything we do at Kerling Farm
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.items.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-farm-green-100">
                    {IconComponent && (
                      <IconComponent className="h-6 w-6 text-farm-green-700" />
                    )}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-farm-green-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section (Optional) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-farm-green-900 md:text-4xl">
              Our Journey
            </h2>
            <div className="space-y-8 text-left">
              <div className="border-l-4 border-farm-green-600 pl-6">
                <p className="mb-1 text-sm font-semibold text-farm-green-700">
                  1952
                </p>
                <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                  The Beginning
                </h3>
                <p className="text-gray-700">
                  Henrik and Martha Kerling established the farm, starting with a
                  small dairy operation and 20 acres of pasture.
                </p>
              </div>
              <div className="border-l-4 border-farm-green-600 pl-6">
                <p className="mb-1 text-sm font-semibold text-farm-green-700">
                  1985
                </p>
                <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                  Organic Transition
                </h3>
                <p className="text-gray-700">
                  Second generation transitions to organic farming practices,
                  adding vegetable gardens and fruit orchards.
                </p>
              </div>
              <div className="border-l-4 border-farm-green-600 pl-6">
                <p className="mb-1 text-sm font-semibold text-farm-green-700">
                  2010
                </p>
                <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                  Agritourism Opens
                </h3>
                <p className="text-gray-700">
                  Third generation welcomes first guests, converting historic
                  buildings into comfortable accommodations.
                </p>
              </div>
              <div className="border-l-4 border-farm-green-600 pl-6">
                <p className="mb-1 text-sm font-semibold text-farm-green-700">
                  Today
                </p>
                <h3 className="mb-2 text-xl font-bold text-farm-green-900">
                  Growing & Thriving
                </h3>
                <p className="text-gray-700">
                  Continuing our family legacy while sharing the joy of farm life
                  with visitors from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
