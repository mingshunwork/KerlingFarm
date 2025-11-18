'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getGalleryImages } from '@/lib/data';

const categories = [
  { value: '', label: 'All Photos' },
  { value: 'accommodation', label: 'Accommodation' },
  { value: 'plantation', label: 'Plantation' },
  { value: 'activities', label: 'Activities' },
  { value: 'general', label: 'General' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const images = getGalleryImages(selectedCategory || undefined);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-farm-green-900">
        <div className="container-custom relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Photo Gallery</h1>
          <p className="max-w-2xl text-lg">
            Explore life at Kerling Farm through our collection of photos
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-lg px-6 py-2 font-semibold transition-all ${
                  selectedCategory === category.value
                    ? 'bg-farm-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {image.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">
                      {image.caption}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              <p className="text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
