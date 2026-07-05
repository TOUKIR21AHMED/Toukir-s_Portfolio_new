import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function useCountUp(target, { duration = 1600, startOnView = true } = {}) {
  const [value, setValue] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  useEffect(() => {
    if (startOnView && !inView) return
    let raf
    const start = performance.now()
    const from = 0
    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(from + (target - from) * eased))
      if (t < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, inView, startOnView])

  return { value, ref }
}
