import type {AppProps} from 'next/app'
import React, {useEffect, useState} from 'react';
import {CookiesProvider, useCookies} from "react-cookie"
import {Inter} from '@next/font/google'
import {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import Layout from "../components/layout/layout";

const inter = Inter();

function MyApp({ Component, pageProps }: AppProps) {
  const [cookie, setCookie] = useCookies(["theme"])
  const [theme, setTheme] = useState("");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    setCookie("theme", updatedTheme, {
      path: "/",
      maxAge: 3600,
      sameSite: true,
    })
  };
  
  useEffect(() => {
    if (cookie) {
      const savedTheme = cookie.theme;
      const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme && ["dark", "light"].includes(savedTheme)) {
        setTheme(savedTheme);
      } else if (prefersDark) {
        setTheme("dark");
      }
    }
  }, []);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CookiesProvider>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
        <GlobalStyles/>
        <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </ThemeProvider>
  )
}

export default MyApp