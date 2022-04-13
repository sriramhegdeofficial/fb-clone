import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import React from 'react';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = React.useState(false);

  React.useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Welcome to fbclient!</title>
        </Head>

        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </>
    );
  }
}

export default CustomApp;
