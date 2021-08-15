import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react'
import { THEMES } from '../configs/theme/index';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
;
  return (
    <ThemeProvider theme={THEMES.BASE}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Ubuntu:ital,wght@0,300;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
