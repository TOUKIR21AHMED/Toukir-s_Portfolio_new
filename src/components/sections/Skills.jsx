import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper.jsx'
import { SKILLS } from '../../data/portfolio.js'

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Tech Stack"
      title="Skills & Tools"
      description="A modern stack for building premium full-stack products — paired with research foundations in AI and Computer Vision."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group glass rounded-2xl p-5 hover:bg-white/[0.06] hover:border-accent-500/40 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-glow`}
                >
                  <s.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{s.name}</p>
                  <p className="text-[11px] uppercase tracking-widest text-slate-400">
                    Proficiency
                  </p>
                </div>
              </div>
              <span className="text-sm font-display font-bold text-white">{s.level}%</span>
            </div>

            <div className="relative h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${s.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
