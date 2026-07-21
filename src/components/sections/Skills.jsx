import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionWrapper from '../SectionWrapper.jsx'
import { SKILL_CATEGORIES, LEARNING_SKILLS } from '../../data/portfolio.js'

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Tech Stack"
      title="Skills & Tools"
      description="A modern stack for building premium full-stack products — paired with hands-on backend engineering through real projects."
    >
      <div className="space-y-10">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: ci * 0.05 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${cat.accent} shadow-glow`}
              />
              <h3 className="text-sm sm:text-base font-display font-semibold uppercase tracking-[0.2em] text-white">
                {cat.title}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {cat.items.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
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
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-dashed border-white/[0.12] bg-white/[0.02] p-6 sm:p-7"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-glow">
              <Sparkles size={16} />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-display font-semibold uppercase tracking-[0.2em] text-white">
                Caching, Messaging & DevOps
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Backend infrastructure layers I work with — caching, async queues, containerization and realtime communication.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {LEARNING_SKILLS.map((s, i) => (
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
                        In progress
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
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
