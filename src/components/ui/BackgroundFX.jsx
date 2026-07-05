import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-[0.07]" />
      <motion.div
        className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-accent-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent-700/20 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, transparent, transparent, var(--page-bg))' }}
      />
    </div>
  )
}
