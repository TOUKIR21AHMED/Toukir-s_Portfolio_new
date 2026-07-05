import { motion } from 'framer-motion'
import { Trophy, GraduationCap, Users, Target } from 'lucide-react'
import SectionWrapper from '../SectionWrapper.jsx'
import useCountUp from '../../hooks/useCountUp.js'
import { STATS, ACHIEVEMENTS } from '../../data/portfolio.js'

const ICONS = [Trophy, GraduationCap, Users, Target]

function StatCard({ stat, Icon, index }) {
  const { value, ref } = useCountUp(stat.value, { duration: 1500 + index * 200 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-3xl p-6 hover:border-accent-500/40 hover:shadow-glow transition-all"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-600 text-white shadow-glow mb-4">
          <Icon size={18} />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-4xl sm:text-5xl font-bold gradient-text">
            {value}
          </span>
          {stat.suffix && (
            <span className="font-display text-2xl sm:text-3xl font-bold gradient-text">
              {stat.suffix}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
        <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
      </div>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      eyebrow="Achievements"
      title="Milestones & Recognition"
      description="Highlights that reflect consistent craft, research and leadership."
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {STATS.map((s, i) => (
          <StatCard key={s.label} stat={s} Icon={ICONS[i] || Trophy} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.06] hover:border-accent-500/40 transition-all"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-violet-600 text-white shadow-glow">
              <a.icon size={18} />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">{a.title}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{a.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
