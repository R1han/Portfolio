import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [sectionIds.join(',')])

  return active
}
