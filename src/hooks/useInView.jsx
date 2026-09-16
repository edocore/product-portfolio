import { useRef, useState, useEffect } from 'react'

// Fires once when the element scrolls into view. Used to gate reveal animations
// so they trigger on scroll rather than on mount.
export function useInView(opts = { threshold: 0, rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSeen(true)
    }, opts)
    io.observe(el)
    return () => io.disconnect()
  }, [seen])
  return [ref, seen]
}
