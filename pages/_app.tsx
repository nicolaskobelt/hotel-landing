import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { THEMES } from '../configs/theme/index';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEMES.BASE}>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="El mejor lugar para decansar tomarte un descanso en el Valle de Calamuchita. Bienvenido a la tranquilidad de las Sierras de Córdoba"
        />
        <meta
          property="og:title"
          content={`Casablanca Hotel & Spa en el Valle de Calamuchita.`}
        />
        <meta
          property="og:description"
          content="El mejor lugar para decansar tomarte un descanso en el Valle de Calamuchita. Bienvenido a la tranquilidad de las Sierras de Córdoba"
        />
        <meta property="og:url" content="https://hotelcasablancacba.com.ar/" />
        <meta property="og:type" content="website" />
        <title>${`Casablanca Hotel & Spa`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=Montserrat:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&Roboto:ital,wght@0,100;0,400;0,900;1,100;1,400;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default appWithTranslation(MyApp);
