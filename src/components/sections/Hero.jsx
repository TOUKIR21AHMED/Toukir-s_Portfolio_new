import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ROLES } from '../../data/portfolio.js'

const codeLoopLines = [
  'return ship("full-stack products");',
  'return craft("glassmorphic interfaces");',
  'return blend("design and engineering");',
]

const typingLoopLines = [
  'const motion = usePremiumMotion({ cinematic: true })',
  'motion.loop({ reveal: true, glow: "subtle" })',
  'export default buildExperience({ signature: "Toukir Ahmed" })',
]

export default function Hero() {
  const [activeLine, setActiveLine] = useState(0)
  const [mouse, setMouse] = useState({ x: 50, y: 24, active: false })
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const updateTheme = () => {
      const root = document.documentElement
      setIsDark(
        root.classList.contains('dark') ||
          root.dataset.theme === 'dark' ||
          root.getAttribute('data-theme') === 'dark'
      )
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  const heroBg = isDark ? '#05070d' : '#f0f4ff'
  const heroBgRgb = isDark ? '5,7,13' : '240,244,255'

  const heroBackground = isDark
    ? 'linear-gradient(135deg, #05070d 0%, #08111f 35%, #10091f 65%, #160814 100%)'
    : 'linear-gradient(135deg, #f0f4ff 0%, #e8eaf6 30%, #f5f0ff 60%, #fce4ec 100%)'

  const headingColor = isDark ? '#f8fafc' : '#0e0e1a'
  const mutedText = isDark ? '#a3adc2' : '#5a5a7a'
  const softMutedText = isDark ? '#8b95aa' : '#8888aa'
  const strongText = isDark ? '#ffffff' : '#0e0e1a'
  const chipBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.72)'
  const chipBorder = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'
  const chipText = isDark ? '#d7def0' : '#4a4a6a'

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLine((current) => (current + 1) % codeLoopLines.length)
    }, 2400)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return undefined
    const handleMove = (event) => {
      const rect = hero.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      if (x >= 0 && x <= 100 && y >= 0 && y <= 100) setMouse({ x, y, active: true })
    }
    const handleLeave = () => setMouse((cur) => ({ ...cur, active: false }))
    hero.addEventListener('pointermove', handleMove)
    hero.addEventListener('pointerleave', handleLeave)
    return () => {
      hero.removeEventListener('pointermove', handleMove)
      hero.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
    >
      {/* ── Page background ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: heroBackground,
        }}
      />

      {/* ── Mouse radial glow ── */}
      {/* <motion.div
        aria-hidden
        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
        animate={{ opacity: mouse.active ? 1 : 0.7 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(82,188,255,0.13), transparent 28%),
                         radial-gradient(circle at ${100 - mouse.x}% ${Math.max(12, mouse.y - 10)}%, rgba(139,92,246,0.11), transparent 30%)`,
          }}
        />
      </motion.div> */}

      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '58%',
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            zIndex: 1,
            background: `
              radial-gradient(ellipse 72% 58% at 62% 36%, rgba(210,30,65,0.38) 0%, rgba(210,30,65,0.10) 50%, transparent 74%),
              radial-gradient(ellipse 44% 38% at 78% 68%, rgba(180,15,45,0.20) 0%, transparent 62%)
            `,
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '4%',
            left: '10%',
            width: '78%',
            height: '52%',
            zIndex: 2,
            background: 'linear-gradient(155deg, rgba(200,35,65,0.80) 0%, rgba(150,8,35,0.86) 48%, rgba(28,4,12,0.90) 100%)',
            WebkitMaskImage: `
              linear-gradient(to right,  transparent 0%,  black 14%, black 86%, transparent 100%),
              linear-gradient(to bottom, transparent 0%,  black 8%,  black 84%, transparent 100%)
            `,
            maskImage: `
              linear-gradient(to right,  transparent 0%,  black 14%, black 86%, transparent 100%),
              linear-gradient(to bottom, transparent 0%,  black 8%,  black 84%, transparent 100%)
            `,
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
          }}
        />

        <motion.img
          src="/hero.png"
          alt="Md. Toukir Ahmed"
          initial={{ y: 0, scale: 1.02 }}
          animate={{ y: [0, -8, 0], x: [0, 3, 0], scale: [1.02, 1.045, 1.02] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center top',
            paddingTop: '3%',
            zIndex: 3,
            // mixBlendMode: 'darken',
            WebkitMaskImage: `
              linear-gradient(to right,  transparent 0%,   black 22%,  black 90%,  transparent 100%),
              linear-gradient(to bottom, transparent 0%,   black 6%,   black 78%,  transparent 100%)
            `,
            maskImage: `
              linear-gradient(to right,  transparent 0%,   black 22%,  black 90%,  transparent 100%),
              linear-gradient(to bottom, transparent 0%,   black 6%,   black 78%,  transparent 100%)
            `,
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 4,
            background: `
              linear-gradient(to right,  ${heroBg} 0%, rgba(${heroBgRgb},0.85) 8%,  rgba(${heroBgRgb},0.2) 22%,  transparent 40%),
              linear-gradient(to bottom, ${heroBg} 0%, rgba(${heroBgRgb},0.9)  6%,  transparent 18%),
              linear-gradient(to top,    ${heroBg} 0%, rgba(${heroBgRgb},0.9)  8%,  transparent 22%),
              linear-gradient(to left,   rgba(${heroBgRgb},0.4) 0%, transparent 15%)
            `,
          }}
        />

        {/* Handwritten signature */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '7%',
            zIndex: 6,
            fontFamily: '"Dancing Script", cursive',
            fontSize: 'clamp(1.3rem, 2.2vw, 2rem)',
            color: 'rgba(220,40,80,0.88)',
            pointerEvents: 'none',
            letterSpacing: '0.02em',
            textShadow: '0 2px 16px rgba(220,40,80,0.22)',
          }}
        >
          Toukir Ahmed
        </motion.div> */}

        <svg
          aria-hidden
          style={{
            position: 'absolute',
            bottom: '9%',
            right: '3%',
            width: '38%',
            height: '38%',
            zIndex: 5,
            opacity: 0.13,
          }}
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="rgba(139,92,246,0.9)" strokeWidth="1" />
          <circle cx="100" cy="100" r="58" stroke="rgba(82,188,255,0.9)" strokeWidth="0.6" />
        </svg>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          paddingTop: 'clamp(5.5rem, 9vw, 8rem)',
          paddingLeft: 'clamp(1.25rem, 4vw, 3rem)',
          paddingRight: 'clamp(1.25rem, 4vw, 3rem)',
          paddingBottom: 0,
          boxSizing: 'border-box',
        }}
      >
        <div
          className="hero-text-col"
          style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '48%' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip w-fit"
            style={{
              border: `1px solid ${chipBorder}`,
              background: chipBg,
              backdropFilter: 'blur(12px)',
              color: chipText,
            }}
          >
            
            Available for premium MERN Stack and research collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            style={{
              marginTop: '1.5rem',
              fontFamily: 'var(--font-display, "Inter", sans-serif)',
              fontSize: 'clamp(3.8rem, 9vw, 9rem)',
              fontWeight: 900,
              lineHeight: 0.83,
              letterSpacing: '-0.1em',
              color: headingColor,
            }}
          >
            <span style={{ display: 'block' }}>I build</span>
            <span
              style={{
                display: 'block',
                background: 'linear-gradient(90deg, #52bcff 0%, #8b5cf6 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              full-stack
            </span>
            <span
              style={{
                display: 'block',
                background: 'linear-gradient(90deg, #52bcff 0%, #8b5cf6 60%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              products
            </span>
            <span style={{ display: 'block' }}>with</span>
            <span style={{ display: 'block' }}>cinematic</span>
            <span style={{ display: 'block' }}>motion.</span>
            <span
              style={{
                display: 'block',
                marginTop: '1rem',
                fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)',
                fontWeight: 600,
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                color: softMutedText,
                WebkitTextFillColor: softMutedText,
                background: 'none',
              }}
            >
              Md. Toukir Ahmed
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            style={{
              marginTop: '1.5rem',
              maxWidth: '34rem',
              fontSize: 'clamp(0.9rem, 1.15vw, 1.1rem)',
              lineHeight: 1.7,
              color: mutedText,
            }}
          >
            A <strong style={{ color: strongText, fontWeight: 600 }}>Full-Stack MERN Developer</strong>{' '}
            building scalable web applications with React, Node.js, Express and MongoDB — while
            expanding expertise in{' '}
            <strong style={{ color: strongText, fontWeight: 600 }}>NestJS</strong>,{' '}
            <strong style={{ color: strongText, fontWeight: 600 }}>PostgreSQL</strong>,{' '}
            <strong style={{ color: strongText, fontWeight: 600 }}>Prisma ORM</strong> and modern
            backend architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
            <a
              href="/Toukir's_CV.pdf"
              download="Toukir_Ahmed_CV.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '9999px',
                border: '1px solid transparent',
                padding: '0.75rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: mutedText,
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.12)'
                e.currentTarget.style.color = strongText
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.color = mutedText
              }}
            >
              <Download size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
          >
            {ROLES.map((r) => (
              <span
                key={r}
                className="chip"
                style={{
                  border: `1px solid ${chipBorder}`,
                  background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.6)',
                  color: chipText,
                  cursor: 'default',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(124,92,246,0.5)'
                  e.currentTarget.style.color = strongText
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = chipBorder
                  e.currentTarget.style.color = chipText
                }}
              >
                {r}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="hero-mobile-portrait">
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '360px',
              margin: '2.5rem auto 0',
              aspectRatio: '3 / 4',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '6% 4%',
                background: 'radial-gradient(ellipse 80% 70% at 55% 40%, rgba(210,30,65,0.7) 0%, rgba(210,30,65,0.2) 55%, transparent 78%)',
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '8%',
                left: '8%',
                width: '80%',
                height: '70%',
                background: 'linear-gradient(155deg, rgba(220,40,80,0.88) 0%, rgba(160,10,40,0.92) 48%, rgba(35,5,15,0.96) 100%)',
                zIndex: 2,
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 85%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
              }}
            />
            <img
              src="/hero.png"
              alt="Md. Toukir Ahmed"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center center',
                zIndex: 3,
                // mixBlendMode: 'darken',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 86%, transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 86%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect',
              }}
            />
            {/* Mobile compositor overlay */}
            {/* <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 4,
                background: 'linear-gradient(to bottom, rgba(240,244,255,0.5) 0%, transparent 12%, transparent 80%, rgba(240,244,255,0.8) 100%), linear-gradient(to right, rgba(240,244,255,0.6) 0%, transparent 15%, transparent 85%, rgba(240,244,255,0.6) 100%)',
              }}
            /> */}
            {/* Mobile signature */}
            {/* <div
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '6%',
                zIndex: 5,
                fontFamily: '"Dancing Script", cursive',
                fontSize: '1.35rem',
                color: 'rgba(220,40,80,0.9)',
                letterSpacing: '0.02em',
                textShadow: '0 2px 12px rgba(220,40,80,0.2)',
              }}
            >
              Toukir Ahmed
            </div> */}
          </div>
        </div>

        <div className="hero-desktop-spacer" style={{ height: 'clamp(2rem, 6vw, 5rem)' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.28, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          marginTop: '5rem',
          padding: '0 clamp(1.25rem, 4vw, 3rem) clamp(2.5rem, 5vw, 4.5rem)',
          boxSizing: 'border-box',
        }}
      >
        <CodeEditor activeLine={activeLine} typingLoopLines={typingLoopLines} isDark={isDark} />
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        @media (min-width: 769px) {
          .hero-mobile-portrait { display: none !important; }
          .hero-text-col { max-width: 48% !important; }
          .hero-desktop-spacer { display: block; }
        }
        @media (max-width: 768px) {
          .hero-mobile-portrait { display: block !important; }
          .hero-text-col { max-width: 100% !important; }
          .hero-desktop-spacer { display: none; }
          #hero > div[style*="position: absolute"][style*="width: 58%"] { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function CodeEditor({ activeLine, typingLoopLines, isDark }) {
  const [typedText, setTypedText] = useState('')
  const [typingIndex, setTypingIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: -1, y: -1, active: false })

  useEffect(() => {
    const currentLine = typingLoopLines[typingIndex]
    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (typedText.length < currentLine.length) {
          setTypedText(currentLine.slice(0, typedText.length + 1))
          return
        }
        window.setTimeout(() => setDeleting(true), 540)
        return
      }
      if (typedText.length > 0) {
        setTypedText(currentLine.slice(0, typedText.length - 1))
        return
      }
      setDeleting(false)
      setTypingIndex((cur) => (cur + 1) % typingLoopLines.length)
    }, deleting ? 28 : 42)
    return () => window.clearTimeout(timer)
  }, [deleting, typedText, typingIndex, typingLoopLines])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y, active: true })
  }

  const handleMouseLeave = () => {
    setMousePos((cur) => ({ ...cur, active: false }))
  }

  const edgeGlowX = Math.min(100, Math.max(0, mousePos.x))
  const edgeGlowY = Math.min(100, Math.max(0, mousePos.y))
  const angle = Math.atan2(edgeGlowY - 50, edgeGlowX - 50) * (180 / Math.PI)

  const theme = isDark
    ? {
        bg: '#13141a',
        coverBg: '#13141a',
        borderGlow: `conic-gradient(from ${angle}deg at 50% 50%,
          rgba(56,189,248,0.95) 0deg,
          rgba(139,92,246,0.70) 25deg,
          transparent 70deg,
          transparent 290deg,
          rgba(139,92,246,0.70) 335deg,
          rgba(56,189,248,0.95) 360deg
        )`,
        sheen: 'linear-gradient(135deg, rgba(255,255,255,0.06), transparent 25%, transparent 60%, rgba(82,188,255,0.06))',
        boxShadow: '0 24px 80px rgba(0,0,0,0.22)',
        titleBarDivider: '1px solid rgba(255,255,255,0.08)',
        baseText: '#cdd6f4',
        lineNumber: '#565c73',
        braces: '#94a3b8',
        key: '#7dd3fc',
        string: '#a5e890',
        punct: '#cdd6f4',
        array: '#fcd34d',
        consoleObj: '#f472b6',
        funcCall: '#a5e890',
        codeText: '#c4b5fd',
        cursor: '#7dd3fc',
        winBtn: ['#ff5f57','#ffbd2e','#28c840'],
        sideIcon: '#7dd3fc',
        sideLabel: '#a5b4d8',
        fileActive: 'rgba(255,255,255,0.08)',
        fileColor: '#a5b4d8',
      }
    : {
        // Dark editor — same as dark mode, but with red edge glow
        bg: '#13141a',
        coverBg: '#13141a',
        borderGlow: `conic-gradient(from ${angle}deg at 50% 50%,
          rgba(220,38,38,0.80) 0deg,
          rgba(249,115,22,0.55) 25deg,
          transparent 70deg,
          transparent 290deg,
          rgba(249,115,22,0.55) 335deg,
          rgba(220,38,38,0.80) 360deg
        )`,
        sheen: 'linear-gradient(135deg, rgba(255,255,255,0.06), transparent 25%, transparent 60%, rgba(220,38,38,0.06))',
        boxShadow: '0 24px 80px rgba(220,38,38,0.12)',
        titleBarDivider: '1px solid rgba(255,255,255,0.08)',
        baseText: '#cdd6f4',
        lineNumber: '#565c73',
        braces: '#94a3b8',
        key: '#7dd3fc',
        string: '#a5e890',
        punct: '#cdd6f4',
        array: '#fcd34d',
        consoleObj: '#f472b6',
        funcCall: '#a5e890',
        codeText: '#c4b5fd',
        cursor: '#7dd3fc',
        winBtn: ['#ff5f57','#ffbd2e','#28c840'],
        sideIcon: '#7dd3fc',
        sideLabel: '#a5b4d8',
        fileActive: 'rgba(255,255,255,0.08)',
        fileColor: '#a5b4d8',
      }

  return (
    <div
      ref={containerRef}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '1.5rem',
        background: theme.bg,
        boxShadow: theme.boxShadow,
      }}
    >
      {/* ── Cursor-tracked edge border line ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          borderRadius: 'inherit',
          opacity: mousePos.active ? 1 : 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none',
          background: theme.borderGlow,
        }}
      />
      {/* Cover the middle — only the 2px border ring shows */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 2,
          zIndex: 0,
          borderRadius: 'calc(1.5rem - 2px)',
          background: theme.coverBg,
          pointerEvents: 'none',
        }}
      />
      {/* Subtle inner sheen */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 2,
          zIndex: 0,
          borderRadius: 'calc(1.5rem - 2px)',
          background: theme.sheen,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          borderBottom: theme.titleBarDivider,
          padding: '1rem 1.25rem 0.875rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '9999px',
              border: theme.titleBarDivider,
              background: 'rgba(255,255,255,0.04)',
              padding: '0.5rem 0.75rem',
              flexShrink: 0,
            }}
          >
            {[['#ff5f57', '255,95,87'], ['#febc2e', '254,188,46'], ['#28c840', '40,200,64']].map(
              ([color, rgb]) => (
                <span
                  key={color}
                  style={{
                    width: '0.75rem',
                    height: '0.75rem',
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 8px rgba(${rgb},0.4)`,
                    flexShrink: 0,
                  }}
                />
              )
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                borderRadius: '9999px',
                border: theme.titleBarDivider,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                padding: '0.2rem 0.75rem',
                fontSize: '0.75rem',
                color: theme.sideLabel,
              }}
            >
              <span style={{ color: theme.sideIcon, fontSize: '0.7rem' }}>{'/>'}</span>
              toukir.dev
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '1.5rem',
          padding: '1.25rem 1.5rem 1.5rem',
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            fontFamily: 'ui-monospace, "Fira Code", monospace',
            fontSize: 'clamp(0.7rem, 1.05vw, 0.875rem)',
            lineHeight: 2,
            color: theme.baseText,
            minWidth: 0,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '1.25rem', rowGap: '0.05rem' }}>
            <EditorLine number="01" lineNumberColor={theme.lineNumber} code={<span style={{ color: theme.braces }}>{'const developer = {'}</span>} />
            <EditorLine number="02" lineNumberColor={theme.lineNumber} code={
              <span>
                <span style={{ color: theme.key }}>{'  name'}</span>
                <span style={{ color: theme.punct }}>: </span>
                <span style={{ color: theme.string }}>{`'Md. Toukir Ahmed'`}</span>
                <span style={{ color: theme.punct }}>,</span>
              </span>
            } />
            <EditorLine number="03" lineNumberColor={theme.lineNumber} code={
              <span>
                <span style={{ color: theme.key }}>{'  role'}</span>
                <span style={{ color: theme.punct }}>: </span>
                <span style={{ color: theme.string }}>{`'MERN Stack Developer'`}</span>
                <span style={{ color: theme.punct }}>,</span>
              </span>
            } />
            <EditorLine number="04" lineNumberColor={theme.lineNumber} code={
              <span>
                <span style={{ color: theme.key }}>{'  focus'}</span>
                <span style={{ color: theme.punct }}>: </span>
                <span style={{ color: theme.array }}>{`['MERN'`}</span>
                <span style={{ color: theme.punct }}>, </span>
                <span style={{ color: theme.array }}>{`'NestJS'`}</span>
                <span style={{ color: theme.punct }}>, </span>
                <span style={{ color: theme.array }}>{`'PostgreSQL']`}</span>
                <span style={{ color: theme.punct }}>,</span>
              </span>
            } />
            <EditorLine number="05" lineNumberColor={theme.lineNumber} code={
              <span>
                <span style={{ color: theme.key }}>{'  mission'}</span>
                <span style={{ color: theme.punct }}>: </span>
                <span style={{ color: theme.string }}>{`'Build intelligent solutions that make impact'`}</span>
                <span style={{ color: theme.punct }}>,</span>
              </span>
            } />
            <EditorLine number="06" lineNumberColor={theme.lineNumber} code={<span style={{ color: theme.braces }}>{'}'};</span>} />
            <EditorLine number="07" lineNumberColor={theme.lineNumber} code={
              <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ color: theme.consoleObj }}>console</span>
                <span style={{ color: theme.punct }}>.</span>
                <span style={{ color: theme.funcCall }}>log</span>
                <span style={{ color: theme.punct }}>(</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeLine}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span style={{ color: theme.codeText }}>{codeLoopLines[activeLine]}</span>
                  </motion.span>
                </AnimatePresence>
                <motion.span
                  aria-hidden
                  style={{ marginLeft: '2px', display: 'inline-block', width: '2px', height: '1.05em', borderRadius: '2px', background: theme.cursor, verticalAlign: 'text-bottom', flexShrink: 0 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.05, repeat: Infinity }}
                />
                <span style={{ color: theme.punct }}>)</span>
              </span>
            } />
            <EditorLine number="08" lineNumberColor={theme.lineNumber} code={
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ color: theme.string }}>{typedText}</span>
                <motion.span
                  aria-hidden
                  style={{ marginLeft: '2px', display: 'inline-block', width: '2px', height: '1.05em', borderRadius: '2px', background: theme.cursor, verticalAlign: 'text-bottom' }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.95, repeat: Infinity }}
                />
              </span>
            } />
          </div>
        </div>

        <div
          className="editor-roles-panel"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.6rem',
            paddingLeft: '1.5rem',
            borderLeft: theme.titleBarDivider,
            minWidth: '190px',
            flexShrink: 0,
          }}
        >
          {[
            { icon: '⌬', label: 'MERN Stack Developer' },
            { icon: '◎', label: 'NestJS & PostgreSQL' },
            { icon: '◈', label: 'Computer Vision Enthusiast' },
            { icon: '◇', label: 'Open Source Contributor' },
          ].map(({ icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', color: theme.sideLabel }}>
              <span style={{ fontSize: '0.9rem', color: theme.sideIcon, flexShrink: 0 }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .editor-roles-panel { display: none !important; } }
      `}</style>
    </div>
  )
}

function EditorLine({ number, code, lineNumberColor }) {
  return (
    <>
      <span style={{ userSelect: 'none', color: lineNumberColor || '#565c73', textAlign: 'right', paddingRight: '0.25rem', flexShrink: 0 }}>
        {number}
      </span>
      <span style={{ minWidth: 0 }}>{code}</span>
    </>
  )
}