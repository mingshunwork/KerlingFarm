import Image from 'next/image';
import { getPlantationSections } from '@/lib/data';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Organic Plantation & Gardens | Kerling Farm',
    description:
      'Explore our certified organic vegetable gardens, heritage fruit orchard, berry patches, and pollinator meadow. Learn about sustainable farming practices.',
    keywords: ['organic plantation', 'organic garden', 'sustainable farming', 'farm gardens'],
    path: '/plantation',
  });
}

export default function PlantationPage() {
  const sections = getPlantationSections();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920"
          alt="Organic plantation gardens"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Organic Plantation
          </h1>
          <p className="max-w-2xl text-lg">
            50 acres of certified organic farmland dedicated to sustainable
            agriculture and biodiversity
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-farm-green-900">
              Farming in Harmony with Nature
            </h2>
            <p className="text-lg text-gray-700">
              At Kerling Farm, we practice regenerative agriculture that works with
              nature, not against it. Our certified organic operations demonstrate
              that sustainable farming can be both productive and environmentally
              restorative. From seed to harvest, every step is guided by our
              commitment to soil health, water conservation, and biodiversity.
            </p>
          </div>
        </div>
      </section>

      {/* Plantation Sections */}
      <section className="section-padding bg-farm-cream-50">
        <div className="container-custom">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="mb-4 text-3xl font-bold text-farm-green-900">
                    {section.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {section.description}
                  </p>
                </div>
                <div
                  className={`relative h-[400px] overflow-hidden rounded-lg ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="section-padding bg-farm-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Tour Our Organic Plantation
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join our guided farm tour to see sustainable agriculture in action and
            learn how we grow food while caring for the land.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/activities/farm-tour"
              className="btn-primary bg-white text-farm-green-700 hover:bg-gray-100"
            >
              Book a Farm Tour
            </a>
            <a
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-farm-green-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
