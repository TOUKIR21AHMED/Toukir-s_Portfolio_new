import { motion } from 'framer-motion'
import { Send, Mail, MapPin, MessageSquare } from 'lucide-react'
import WhatsappIcon from '../icons/WhatsappIcon.jsx'
import SectionWrapper from '../SectionWrapper.jsx'
import { SITE } from '../../data/portfolio.js'

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Reach out for full-stack development, research collaborations or just to say hi."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-4"
        >
          {[
            {
              icon: Mail,
              label: 'Email',
              value: SITE.email,
              href: `mailto:${SITE.email}`,
            },
            {
              icon: WhatsappIcon,
              label: 'WhatsApp',
              value: '+880 1709-164091',
              href: 'https://wa.me/8801709164091',
            },
            { icon: MapPin, label: 'Location', value: SITE.location, href: null },
            { icon: MessageSquare, label: 'Availability', value: 'Open to freelance & collab', href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass rounded-2xl p-5 hover:bg-white/[0.05] transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-accent-300">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-slate-400">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-white hover:text-accent-300 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={(e) => { e.preventDefault() }}
            className="glass rounded-3xl p-5 sm:p-7 lg:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/40 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/40 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="Project collaboration / Research inquiry"
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/40 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell me about your project or research idea..."
                className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/40 transition-all resize-y min-h-[120px]"
              />
            </div>

            <button type="submit" className="btn-primary w-full !py-3.5">
              <Send size={16} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}