import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>Briliantdo Architect</title>
        <meta name="description" content="Portfolio website for an architect" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        {!isHomePage && <Header />}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        {!isHomePage && <Footer />}
      </div>
    </>
  );
}