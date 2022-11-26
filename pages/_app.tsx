import type {AppProps} from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import {Inter} from '@next/font/google'
import {ThemeProvider} from 'styled-components';
import {darkTheme} from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import Layout from "../components/layout/layout";

const inter = Inter();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles/>
        <Layout>
          <Component {...pageProps} />
          <Analytics/>
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default MyApp