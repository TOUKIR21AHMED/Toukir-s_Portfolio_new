import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '', eyebrow, title, description }) {
  return (
    <section
      id={id}
      className={`relative w-full px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10 sm:mb-14 max-w-3xl"
          >
            {eyebrow && (
              <span className="chip mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-glow" />
                {eyebrow}
              </span>
            )}
            {title && <h2 className="section-title mb-4">{title}</h2>}
            {description && (
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
