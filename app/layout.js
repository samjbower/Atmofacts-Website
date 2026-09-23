import '@/app/globals.css';
import { Inter, Inter_Tight, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscriptionModal from '@/components/SubscriptionModal';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif'
});

export const metadata = {
  title: {
    default: 'AtmoFacts | Where every molecule meets its map',
    template: '%s | AtmoFacts'
  },
  description:
    'AtmoFacts makes land-atmosphere exchange visible, attributable, and actionable at the scale where land is managed. FluxMapper turns flux station readings into field-scale FluxMaps.',
  metadataBase: new URL('https://www.atmofacts.com'),
  icons: {
    icon: '/pub-images/favicon.svg'
  },
  openGraph: {
    title: 'AtmoFacts',
    description: 'Where every molecule meets its map.',
    url: 'https://www.atmofacts.com',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${sourceSerif.variable}`}>
      <body>
        <Header />
        <SubscriptionModal />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
