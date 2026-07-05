import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionWrapper from '../SectionWrapper.jsx'
import { EXPERIENCE } from '../../data/portfolio.js'

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      description="A blend of full-stack development and applied research experience."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-violet-500/30 to-transparent" />
        <div className="space-y-6">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-0 top-3 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-violet-600 text-white shadow-glow">
                <Briefcase size={16} />
              </div>

              <div className="glass rounded-2xl p-5 sm:p-6 hover:bg-white/[0.05] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-accent-300">{item.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip">{item.period}</span>
                    <span className="chip">{item.location}</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
