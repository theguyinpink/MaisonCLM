import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'

type NavbarProps = {
  templatesUrl: string
}

export default function Navbar({ templatesUrl }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  const getHashHref = useMemo(
    () => (id: string) => (location.pathname === '/' ? `#${id}` : `/#${id}`),
    [location.pathname],
  )

  return (
    <>
      <nav id="navbar" className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="nav-logo" href={location.pathname === '/' ? '#home' : '/#home'} aria-label="Maison CLM accueil">
            <img src="/logo-noir.png" alt="Maison CLM" className="nav-logo-image" />
          </a>

          <ul className="nav-links">
            <li><a href={getHashHref('about')}>À propos</a></li>
            <li><a href={getHashHref('services')}>Services</a></li>
            <li><a href={getHashHref('projects')}>Projets</a></li>
            <li>
              <a href={templatesUrl} target="_blank" rel="noreferrer">Templates ↗</a>
            </li>
            <li>
              <a href={getHashHref('contact')} className="nav-cta">
                <span>Démarrer un projet</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </li>
          </ul>

          <button
            className={`nav-burger ${isOpen ? 'active' : ''}`}
            id="burger"
            aria-label="Menu"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-mobile ${isOpen ? 'open' : ''}`} id="mobileNav">
        <a href={getHashHref('about')} onClick={() => setIsOpen(false)}>À propos</a>
        <a href={getHashHref('services')} onClick={() => setIsOpen(false)}>Services</a>
        <a href={getHashHref('projects')} onClick={() => setIsOpen(false)}>Projets</a>
        <a href={templatesUrl} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
          Templates ↗
        </a>
        <a href={getHashHref('contact')} onClick={() => setIsOpen(false)} className="nav-mobile-cta">
          Démarrer un projet →
        </a>
      </div>
    </>
  )
}
