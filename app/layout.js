import '@/app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscriptionModal from '@/components/SubscriptionModal';

export const metadata = {
  title: 'AtmoFacts',
  description: 'FluxMapper™ technology, services and news.',
  metadataBase: new URL('https://www.atmofacts.com'),
  openGraph: {
    title: 'AtmoFacts',
    description: 'Where every molecule meets its map.',
    url: 'https://www.atmofacts.com',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <SubscriptionModal />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
