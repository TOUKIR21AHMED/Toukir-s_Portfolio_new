import { motion } from 'framer-motion'
import { Compass } from 'lucide-react'
import SectionWrapper from '../SectionWrapper.jsx'
import { EXPLORING, EXPLORING_INTRO } from '../../data/portfolio.js'

export default function Exploring() {
  return (
    <SectionWrapper
      id="exploring"
      eyebrow="Learning Journey"
      title="Currently Exploring"
      description={EXPLORING_INTRO}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {EXPLORING.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-5 sm:p-6 overflow-hidden hover:border-accent-500/40 transition-all"
          >
            <div
              className={`pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
            />

            <div className="relative flex flex-col items-start gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-glow`}
              >
                <item.icon size={20} />
              </div>
              <p className="text-sm sm:text-[15px] font-semibold text-white leading-tight">
                {item.name}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-400">
                <Compass size={11} className="text-accent-300" />
                Learning
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
