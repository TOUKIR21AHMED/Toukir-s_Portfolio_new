import { useEffect, useRef, useState } from 'react'

const RING_FILL_MS = 2200

// Critical assets we want warm before revealing the site. These run in
// parallel with the ring fill — the ring just gives a visual minimum.
const CRITICAL_ASSETS = [
  '/hero.png',
  '/fabroms.png',
  '/roamadtravels.png',
  '/aurmita.png',
  '/pdc.png',
  '/openGl.png',
  '/cseclub.jpg',
  '/csecricket.jpg',
  '/greaterMym.jpg',
]

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => resolve(src) // never hang the site on a 404
    img.decoding = 'async'
    img.src = src
  })
}

export default function Preloader({ onDone }) {
  const [exiting, setExiting] = useState(false)
  const calledRef = useRef(false)
  const ringRef = useRef(null)

  useEffect(() => {
    let mounted = true

    const finish = () => {
      if (!mounted || calledRef.current) return
      calledRef.current = true
      setExiting(true)
      window.setTimeout(() => {
        if (mounted) onDone?.()
      }, 650)
    }

    const startedAt = performance.now()

    // One-shot ring fill promise — the site opens when the ring is full.
    const ringFill = new Promise((resolve) => {
      const el = ringRef.current
      const done = () => resolve()
      if (!el) return resolve()
      el.addEventListener('animationend', done, { once: true })
      // Safety net: if the animation never fires (e.g. reduced motion), resolve
      // after RING_FILL_MS anyway.
      window.setTimeout(done, RING_FILL_MS + 250)
    })

    const tasks = [
      ringFill,
      (document.fonts && document.fonts.ready
        ? document.fonts.ready
        : Promise.resolve()
      ).catch(() => {}),
      Promise.all(CRITICAL_ASSETS.map(preloadImage)).catch(() => {}),
      new Promise((resolve) => {
        if (document.readyState === 'complete') resolve()
        else
          window.addEventListener('load', resolve, {
            once: true,
            passive: true,
          })
      }),
    ]

    Promise.all(tasks).then(() => {
      if (!mounted) return
      // If critical assets / fonts are still loading, hold the preloader
      // a touch longer so the site doesn't reveal with empty images.
      const elapsed = performance.now() - startedAt
      const pad = Math.max(0, RING_FILL_MS - elapsed)
      window.setTimeout(finish, pad)
    })

    return () => {
      mounted = false
    }
  }, [onDone])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={[
        'fixed inset-0 z-[9999] flex items-center justify-center',
        'bg-black select-none',
        'transition-opacity duration-[650ms] ease-out',
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100',
      ].join(' ')}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="flex flex-col items-center gap-7 px-6">
        {/* Wordmark */}
        <h1
          className="toukir-preloader-word text-center"
          style={{
            fontFamily: "'Syne', 'DM Sans', system-ui, sans-serif",
            fontSize: 'clamp(2.5rem, 7.5vw, 5.25rem)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            lineHeight: 1,
            color: '#ffffff',
          }}
        >
          TOUKIR
        </h1>

        {/* One-shot progress ring */}
        <div
          className="toukir-preloader-ring"
          aria-hidden="true"
          style={{
            width: 'clamp(40px, 6vw, 56px)',
            height: 'clamp(40px, 6vw, 56px)',
          }}
        >
          <svg viewBox="0 0 50 50" className="h-full w-full">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
            <circle
              ref={ringRef}
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="125.6"
              strokeDashoffset="125.6"
              transform="rotate(-90 25 25)"
              className="toukir-preloader-ring-progress"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes toukirFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes toukirRingFill {
          from { stroke-dashoffset: 125.6; }
          to   { stroke-dashoffset: 0; }
        }
        .toukir-preloader-word {
          animation: toukirFadeIn 600ms ease-out both;
        }
        .toukir-preloader-ring-progress {
          animation: toukirRingFill ${RING_FILL_MS}ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .toukir-preloader-word,
          .toukir-preloader-ring-progress {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  )
}
