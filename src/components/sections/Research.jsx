import { motion } from 'framer-motion'
import { BookOpen, FileText } from 'lucide-react'
import SectionWrapper from '../SectionWrapper.jsx'
import { RESEARCH } from '../../data/portfolio.js'

export default function Research() {
  return (
    <SectionWrapper
      id="research"
      eyebrow="Research & Publications"
      title="Exploring the frontiers of AI, CV & ML"
      description="Research that connects deep learning, computer vision and graphics simulation to real-world problems."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {RESEARCH.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group glass rounded-2xl p-6 hover:bg-white/[0.05] hover:border-accent-500/40 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-accent-600 text-white shadow-glow-violet flex-shrink-0">
                <BookOpen size={18} />
              </div>
              <span className="chip !text-accent-300 !border-accent-500/30">{r.status}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-semibold text-white leading-snug">
              {r.title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <FileText size={12} /> {r.venue}
              </span>
              <span>· {r.year}</span>
            </div>

            <p className="mt-4 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
              {r.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
