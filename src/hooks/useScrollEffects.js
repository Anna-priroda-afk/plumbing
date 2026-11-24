import { useEffect, useState } from 'react'

/**
 * Centrally handles scroll-driven effects:
 * - exposes pixel-based CSS variables for parallax layers;
 * - tracks whether the header should use its compact state;
 * - reveals .reveal elements once when they enter the viewport.
 */
export function useScrollEffects() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const apply = () => {
      frame = 0
      const y = window.scrollY
      root.style.setProperty('--scroll-y', `${y}px`)
      root.style.setProperty('--blob-one-y', `${y * 0.14}px`)
      root.style.setProperty('--blob-two-y', `${y * -0.1}px`)
      root.style.setProperty('--blob-three-y', `${y * 0.07}px`)
      root.style.setProperty('--grid-y', `${y * 0.04}px`)
      setScrolled(y > 24)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return scrolled
}
