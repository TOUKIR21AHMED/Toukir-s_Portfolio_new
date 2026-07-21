import { Github, Linkedin, Facebook, Mail, ArrowUp } from 'lucide-react'
import WhatsappIcon from './icons/WhatsappIcon.jsx'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/TOUKIR21AHMED' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/toukir-ahmed-w2001/',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/toukirahmed.toukirahmed.927/',
  },
  { Icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/8801709164091' },
  { icon: Mail, label: 'Email', href: 'mailto:ahmed18@cse.pstu.ac.bd' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 mt-10 border-t border-white/[0.06]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-600 font-display font-bold text-white">
                TA
              </span>
              <div className="leading-tight">
                <p className="text-base font-semibold text-white">Md. Toukir Ahmed</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  MERN · NestJS · PostgreSQL
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building premium web experiences with the MERN stack and growing into modern
              backend engineering with NestJS, PostgreSQL and Prisma — through real projects,
              not just tutorials.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#exploring" className="hover:text-white">Exploring</a></li>
              <li><a href="#experience" className="hover:text-white">Experience</a></li>
              <li><a href="#achievements" className="hover:text-white">Achievements</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#research" className="hover:text-white">Research</a></li>
              <li><a href="#leadership" className="hover:text-white">Leadership</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {socials.map(({ icon: Icon, Icon: CustomIcon, label, href }) => {
                const Renderer = CustomIcon || Icon
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-accent-500/40 transition-all"
                  >
                    {CustomIcon ? <CustomIcon size={16} /> : <Icon size={16} />}
                  </a>
                )
              })}
            </div>
            <a
              href="mailto:ahmed18@cse.pstu.ac.bd"
              className="text-sm text-slate-400 hover:text-white"
            >
              ahmed18@cse.pstu.ac.bd
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 Toukir Ahmed</p>
          <button
            onClick={handleTop}
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
