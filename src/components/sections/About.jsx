import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Users, Trophy } from 'lucide-react'
import SectionWrapper from '../SectionWrapper.jsx'

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'PSTU', sub: 'Computer Science & Engineering' },
  { icon: Trophy, label: 'Hackathon Champion', sub: 'IT Carnival 2024' },
  { icon: Users, label: 'General Secretary', sub: 'CSE Club PSTU' },
  { icon: MapPin, label: 'Based in', sub: 'Patuakhali, Bangladesh' },
]
export default function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About Me"
      title="A developer with a researcher's mindset."
      description="I bridge full-stack engineering and applied research — shipping polished products while exploring the frontiers of AI."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass rounded-3xl p-6 sm:p-8 leading-relaxed text-slate-300 text-base sm:text-[17px] space-y-5">
            <p>
              I'm <span className="text-white font-semibold">Md. Toukir Ahmed</span>, a Computer
              Science student at{' '}
              <span className="text-white">Patuakhali Science and Technology University</span>{' '}
              — passionate about building premium web experiences and conducting research at the
              intersection of AI, computer vision and machine learning.
            </p>
            <p>
              As a MERN stack developer I design and ship end-to-end products using React,
              Node.js, Express and MongoDB, paired with Tailwind CSS for beautiful, responsive
              UIs. My research explores deep learning for medical imaging, computer vision and
              simulation through OpenGL.
            </p>
            <p>
              Beyond web development, I'm an{' '}
              <span className="text-white">AI automation builder</span> — designing end-to-end
              workflows in <span className="text-white">n8n</span> that connect LLMs, APIs and
              SaaS tools to automate repetitive tasks, scrape and process data, and orchestrate
              multi-step agentic pipelines. I love turning brittle manual processes into reliable,
              self-running systems.
            </p>
            <p>
              I'm also a competitive problem solver with a strong handle on{' '}
              <span className="text-white">C++</span> — ranked on Codeforces with{' '}
              <span className="text-white">194+ accepted solutions</span>{' '}
              (<a
                href="https://codeforces.com/profile/toukir_ahmed18"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent-300 hover:text-accent-200 underline-offset-4 hover:underline"
              >
                @toukir_ahmed18
              </a>
              ), which sharpens my algorithmic thinking and translates directly into writing
              efficient backend and systems code.
            </p>
            <p>
              Beyond code, I serve as the <span className="text-white">General Secretary</span>{' '}
              of the CSE Club PSTU and the Greater Mymensingh Students Welfare Association, and
              lead the CSE Cricket Team as Captain — blending technical leadership with
              community impact.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {HIGHLIGHTS.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 hover:bg-white/[0.06] hover:border-accent-500/40 transition-all"
                >
                  <Icon size={18} className="text-accent-300 mb-2" />
                  <div className="text-[11px] uppercase tracking-widest text-slate-400">
                    {sub}
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-4"
        >
          <Card k="Focus" v="MERN Stack · AI · CV · ML" />
          <Card k="Currently" v="Researching Transformers for medical imaging (Breast Cancer Histopathology) & XAI for visualization" />
          <Card k="Building" v="FABROMS · Roamad Travels BD" />
          <Card k="University" v="Patuakhali Science & Technology University" />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

function Card({ k, v }) {
  return (
    <div className="glass rounded-2xl p-5 flex items-center justify-between gap-4 hover:bg-white/[0.05] transition-colors">
      <span className="text-[11px] uppercase tracking-widest text-slate-400">{k}</span>
      <span className="text-sm sm:text-base text-white text-right">{v}</span>
    </div>
  )
}
