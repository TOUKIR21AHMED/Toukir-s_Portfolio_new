import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from '../SectionWrapper.jsx'
import { PROJECTS } from '../../data/portfolio.js'

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projects"
      title="Selected Work"
      description="Production-grade MERN apps, research systems and graphics simulations."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-3xl overflow-hidden hover:border-accent-500/40 transition-all"
          >
            <div
              className={`relative h-44 sm:h-52 bg-gradient-to-br ${p.color} overflow-hidden`}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-grid-pattern [background-size:24px_24px] opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-900/90 via-bg-900/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/80 font-mono">
                    {p.tagline}
                  </p>
                  <h3
  className="mt-1 text-2xl sm:text-3xl font-display font-bold"
  style={{ color: "#FFFFFF" }}
>
  {p.name}
</h3>
                </div>
                <a
                  href={p.link || '#'}
                  target={p.link ? '_blank' : undefined}
                  rel={p.link ? 'noreferrer noopener' : undefined}
                  aria-label={`Open ${p.name}`}
                  className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-bg-900 hover:scale-110 transition-transform"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-[15px] text-slate-300 leading-relaxed">{p.description}</p>

              <ul className="mt-4 space-y-1.5 text-sm text-slate-400">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-accent-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={p.link || '#'}
                  target={p.link ? '_blank' : undefined}
                  rel={p.link ? 'noreferrer noopener' : undefined}
                  className="text-sm font-medium text-accent-300 hover:text-accent-200 inline-flex items-center gap-1.5"
                >
                  {p.link ? 'Visit Live Site' : 'View Case Study'} <ArrowUpRight size={14} />
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-slate-400 hover:text-white inline-flex items-center gap-1.5"
                >
                  Source <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-accent-500/30 transition-all" />
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
