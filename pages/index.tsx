import Head from 'next/head'
import Hero from "../components/pages/index/hero/hero";
import About from "../components/pages/index/about/about";
import Services from "../components/pages/index/services/services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Freelance Développeur Web à Tours, Blois et Châteauroux - Allain Web</title>
        <meta name="description"
              content="Freelance développeur web, front-end, wordpress, prestashop... A votre disposition pour tout projet web dans la région Centre Val de Loire, ville de Tours, Blois ou encore Châteauroux."/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel='apple-touch-icon' href="/apple-touch-icon.png"/>
      </Head>
      <Hero/>
      <About/>
      <Services/>
    </>
  )
}