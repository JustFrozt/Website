import { Metadata } from 'next';
import HomePageClient from './HomePageClient'; // We will create this component next

// -----------------------------------------------------------------------------
// Meta & Open Graph Tags for SEO and Social Sharing
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: 'ZeroForm – AI-generated Python MVPs in 48 h',
  description: 'Production-grade Python back-end MVPs delivered in 48 hours. Fixed-price, no upfront payment, built entirely by AI.',
  openGraph: {
    type: 'website',
    url: 'https://zeroform.ai/',
    title: 'ZeroForm – AI-generated Python MVPs in 48 h',
    description: 'Production-grade Python back-end MVPs delivered in 48 hours. Fixed-price, no upfront payment, built entirely by AI.',
    images: [
      {
        url: 'https://zeroform.ai/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'ZeroForm - AI-generated Python MVPs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZeroForm – AI-generated Python MVPs in 48 h',
    description: 'Production-grade Python back-end MVPs delivered in 48 hours. Fixed-price, no upfront payment, built entirely by AI.',
    images: ['https://zeroform.ai/og-cover.png'],
  },
  alternates: {
    canonical: 'https://zeroform.ai/',
  },
};

// This is the main page, a Server Component.
export default function Page() {
  // It renders the interactive client component.
  return <HomePageClient />;
}
