import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Preloader from './components/Preloader.jsx'
import About from './components/sections/About.jsx'
import Achievements from './components/sections/Achievements.jsx'
import Contact from './components/sections/Contact.jsx'
import Experience from './components/sections/Experience.jsx'
import Exploring from './components/sections/Exploring.jsx'
import Hero from './components/sections/Hero.jsx'
import Leadership from './components/sections/Leadership.jsx'
import Projects from './components/sections/Projects.jsx'
import Research from './components/sections/Research.jsx'
import Skills from './components/sections/Skills.jsx'
import BackgroundFX from './components/ui/BackgroundFX.jsx'

const SITE_URL = 'https://toukirahmed.dev'
const TITLE = 'Md. Toukir Ahmed — MERN Stack & NestJS Backend Developer from Bangladesh'
const DESCRIPTION =
  'Portfolio of Md. Toukir Ahmed — MERN Stack Developer from Bangladesh building scalable full-stack products with React, Node.js, Express, MongoDB, NestJS, PostgreSQL and Prisma ORM. Hackathon Champion and researcher in AI and Computer Vision.'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    document.title = TITLE
    const stored = window.localStorage.getItem('theme')
    // Site default is LIGHT, regardless of OS preference.
    const theme = stored ?? 'light'
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [])

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />
      </Helmet>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-500 focus:text-white"
      >
        Skip to content
      </a>

      {!ready && <Preloader onDone={() => setReady(true)} />}

      <BackgroundFX />

      <Navbar />

      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Exploring />
        <Experience />
        <Achievements />
        <Projects />
        <Research />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
