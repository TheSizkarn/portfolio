import type {AppProps} from 'next/app'
import React, {useEffect, useState} from 'react';
import {Inter} from '@next/font/google'
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import Layout from "../components/layout/layout";

const inter = Inter();

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <GlobalStyles/>
        <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default MyApp