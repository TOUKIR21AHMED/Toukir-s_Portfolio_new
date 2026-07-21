import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MoonStar, SunMedium, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#exploring', label: 'Exploring' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#about')
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'light'
    // Site default is LIGHT, regardless of OS preference.
    if (document.documentElement.classList.contains('light')) return 'light'
    if (document.documentElement.classList.contains('dark')) return 'dark'
    return 'light'
  })

  useEffect(() => {
    // Keep state in sync if the class is changed elsewhere (e.g. App.jsx init).
    const sync = () => {
      const t = document.documentElement.classList.contains('light') ? 'light' : 'dark'
      setTheme((prev) => (prev === t ? prev : t))
    }
    sync()

    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const sections = links.map((l) => l.href)
      let current = sections[0]
      for (const id of sections) {
        const el = document.querySelector(id)
        if (el && el.getBoundingClientRect().top - 120 <= 0) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('light', next === 'light')
      document.documentElement.classList.toggle('dark', next === 'dark')
      document.documentElement.style.colorScheme = next
      window.localStorage.setItem('theme', next)
      return next
    })
  }

  const handleNav = (href) => (e) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        <nav
          className={`flex items-center justify-between gap-2 rounded-full transition-all duration-300 ${
            scrolled ? 'glass-strong px-3 sm:px-6 py-2.5' : 'px-2 sm:px-3 py-3'
          }`}
        >
          <a
            href="#main"
            onClick={handleNav('#main')}
            className="group flex items-center gap-2.5 flex-shrink-0"
            aria-label="Md. Toukir Ahmed home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-600 font-display font-bold text-white shadow-glow">
              TA
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-[var(--page-text)]">Md. Toukir Ahmed</span>

            </span>
          </a>

          <ul className="hidden xl:flex items-center gap-0.5 mx-auto">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={handleNav(l.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                    active === l.href
                      ? 'text-[var(--page-text)] bg-[var(--page-bg-soft)]'
                      : 'text-[var(--page-text-soft)] hover:text-[var(--page-text)]'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--page-bg-soft)] border border-[var(--page-border)] text-[var(--page-text-soft)] hover:text-[var(--page-text)] hover:border-[var(--page-border-strong)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
            </button>
            <a
              href="#contact"
              onClick={handleNav('#contact')}
              className="hidden sm:inline-flex btn-primary !px-4 sm:!px-5 !py-2 text-sm whitespace-nowrap"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--page-bg-soft)] border border-[var(--page-border)] text-[var(--page-text-soft)] hover:text-[var(--page-text)] transition-all"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-4 sm:mx-8 mt-3 xl:hidden"
          >
            <ul className="glass-strong rounded-2xl p-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={handleNav(l.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium ${
                      active === l.href
                        ? 'text-[var(--page-text)] bg-[var(--page-bg-soft)]'
                        : 'text-[var(--page-text-soft)] hover:text-[var(--page-text)] hover:bg-[var(--page-bg-soft)]'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={handleNav('#contact')}
                  className="btn-primary w-full text-sm"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
