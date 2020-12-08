import Head from "next/head"
import Hero from "components/Hero"
import About from "components/About"
import Experience from "components/Experience"
import Contact from "components/Contact"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raouf Fathi | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}
