import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rainbow Construction | Building Excellence Since 2013',
  description:
    'Rainbow Construction - Building excellence since 2013. Premium residential, commercial, and industrial construction services across India.',
  keywords:
    'construction company, builders, residential construction, commercial construction, Rainbow Construction, India',
  authors: [{ name: 'Rainbow Construction' }],
  robots: 'index, follow',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    title: 'Rainbow Construction | Building Excellence Since 2013',
    description:
      'Premium residential, commercial, and industrial construction services across India.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
