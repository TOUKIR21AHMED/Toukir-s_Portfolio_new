import { useEffect, useRef, useState } from 'react'

const RING_FILL_MS = 900
// Hard cap so the preloader never sits on screen longer than this, even if
// assets are still loading. The site reveals as soon as it's actually ready
// (or when this cap is hit — whichever comes first).
const MAX_PRELOAD_MS = 1500

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
      }, 350)
    }

    // Hard cap so the preloader never sits on screen longer than this.
    const hardCap = window.setTimeout(finish, MAX_PRELOAD_MS)

    // One-shot ring fill promise — the site opens when the ring is full.
    const ringFill = new Promise((resolve) => {
      const el = ringRef.current
      const done = () => resolve()
      if (!el) return resolve()
      el.addEventListener('animationend', done, { once: true })
      // Safety net: if the animation never fires (e.g. reduced motion), resolve
      // after RING_FILL_MS anyway.
      window.setTimeout(done, RING_FILL_MS + 150)
    })

    const tasks = [
      ringFill,
      (document.fonts && document.fonts.ready
        ? document.fonts.ready
        : Promise.resolve()
      ).catch(() => {}),
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
      window.clearTimeout(hardCap)
      // Reveal as soon as everything is ready — no extra padding.
      finish()
    })

    return () => {
      mounted = false
      window.clearTimeout(hardCap)
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
        'transition-opacity duration-[350ms] ease-out',
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
