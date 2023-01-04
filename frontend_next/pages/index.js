import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixel Perfect Devs</title>
        <meta name="description" content="Pixel Perfect Devs landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar />
        <HomeSection />
        <Projects />
      </main>
    </>
  )
}
