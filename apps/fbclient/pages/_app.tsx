import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';


import './styles.css';






function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to fbclient!</title>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default CustomApp;
