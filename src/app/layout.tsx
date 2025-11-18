import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import JsonLd from '@/components/shared/JsonLd';
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = generateSEOMetadata({
  title: 'Kerling Farm - Authentic Farm Stay & Agritourism Experience',
  description:
    'Experience authentic farm life at Kerling Farm. Comfortable accommodations, organic plantation tours, and hands-on agricultural activities in a serene countryside setting.',
  keywords: [
    'farm stay',
    'agritourism',
    'farm accommodation',
    'organic farm',
    'Vermont farm',
    'farm activities',
    'farm vacation',
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton variant="fixed" />
      </body>
    </html>
  );
}
