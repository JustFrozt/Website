import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

// -----------------------------------------------------------------------------
// Meta & Open Graph Tags for SEO and Social Sharing
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: 'ZeroForm – AI-generated Python MVPs in Days',
  description: 'Production-grade Python back-end MVPs delivered in 1-7 Days. Fixed-price, no upfront payment, 80% built by AI.',
  openGraph: {
    type: 'website',
    url: 'https://zeroform.ai/',
    title: 'ZeroForm – AI-generated Python MVPs in days',
    description: 'Production-grade Python back-end MVPs Delivered in Days. Fixed-price, no upfront payment for Standard and Advanced MVPs, up to 80% built by AI.',
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
    title: 'ZeroForm – AI-generated Python MVPs in Days',
    description: 'Production-grade Python back-end MVPs Delivered in Days. Fixed-price, no upfront payment for Standard and Advanced MVPs, up to 80% built by AI..',
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
