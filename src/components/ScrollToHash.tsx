import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      }
      return
    }

    const element = document.querySelector(hash)
    if (!element) return

    const offset = 110
    const top = element.getBoundingClientRect().top + window.scrollY - offset

    window.setTimeout(() => {
      window.scrollTo({ top, behavior: 'smooth' })
    }, 50)
  }, [hash, pathname])

  return null
}
