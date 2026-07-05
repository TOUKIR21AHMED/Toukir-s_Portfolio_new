import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper.jsx'
import { LEADERSHIP } from '../../data/portfolio.js'

export default function Leadership() {
  return (
    <SectionWrapper
      id="leadership"
      eyebrow="Leadership"
      title="Building communities beyond code"
      description="Leading teams, unlocking potential and shipping experiences that bring people together."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {LEADERSHIP.map((l, i) => (
          <motion.div
            key={l.org + l.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-3xl p-6 hover:border-accent-500/40 transition-all relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent-500/10 blur-2xl group-hover:bg-accent-500/20 transition-all" />
            <div className="relative">
              <div className="mb-4 h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-glow">
                <img
                  src={l.image}
                  alt={l.org}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[11px] uppercase tracking-widest text-accent-300">{l.role}</p>
              <h3 className="mt-1 text-xl font-display font-semibold text-white leading-snug">
                {l.org}
              </h3>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">{l.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
