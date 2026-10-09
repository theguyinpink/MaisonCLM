import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, ClipboardCheck, Globe2, Instagram, Linkedin, MessagesSquare, Share2, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/socials.css'

const destinations = [
  {
    name: 'CLM SportLink', label: 'Clubs & joueurs',
    description: 'Gestion du club, réseau et boutique.',
    action: 'Ouvrir SportLink', url: 'https://sportlink.maisonclm.fr',
    icon: UsersRound, style: 'sportlink', external: true,
  },
  {
    name: 'Site officiel', label: 'Maison CLM',
    description: 'Sites web et outils sur mesure.',
    action: 'Visiter le site', url: '/', icon: Globe2, style: 'website',
  },
  {
    name: 'Mini-audit gratuit', label: 'Offert',
    description: '3 conseils pour améliorer votre site.',
    action: 'Demander l’audit',
    url: '/audit?utm_source=socials&utm_medium=bio&utm_campaign=audit_gratuit',
    icon: ClipboardCheck, style: 'audit',
  },
  {
    name: 'Votre projet', label: 'On en parle ?',
    description: 'Une idée ? Parlons de votre projet.',
    action: 'Contacter Clément', url: '/#contact', icon: MessagesSquare, style: 'contact',
  },
  {
    name: 'Après Le vote', label: 'Politique & société',
    description: 'Senarios et outils pour la presidence 2027.',
    action: 'Ouvrir Après le Vote', url: 'https://apreslevote.maisonclm.fr', icon: MessagesSquare, style: 'contact',
  },
]

const socials = [
  { name: 'Instagram', handle: '@maisonclmfr', url: 'https://www.instagram.com/maisonclmfr/', icon: Instagram },
  { name: 'TikTok', handle: '@maisonclm', url: 'https://www.tiktok.com/@maisonclm', icon: null },
  { name: 'LinkedIn', handle: 'Maison CLM', url: 'https://www.linkedin.com/company/maisonclm', icon: Linkedin },
]

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3v12.5a4.5 4.5 0 1 1-4-4.47M14 3c.4 3 2.4 5 5.5 5v3c-2.1 0-4-.8-5.5-2.1" />
    </svg>
  )
}

export default function SocialsPage() {
  const [shareLabel, setShareLabel] = useState('Partager cette page')
  const shareTimeout = useRef<ReturnType<typeof window.setTimeout> | null>(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Maison CLM — Projets & liens'
    return () => {
      document.title = previousTitle
      if (shareTimeout.current !== null) window.clearTimeout(shareTimeout.current)
    }
  }, [])

  const handleShare = async () => {
    const shareData = {
      title: 'Maison CLM', text: 'Découvrez les projets et les liens Maison CLM.', url: window.location.href,
    }
    const showStatus = (label: string) => {
      if (shareTimeout.current !== null) window.clearTimeout(shareTimeout.current)
      setShareLabel(label)
      shareTimeout.current = window.setTimeout(() => setShareLabel('Partager cette page'), 2500)
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(window.location.href)
      showStatus('Lien copié')
    } catch {
      showStatus('Copiez le lien dans la barre d’adresse')
    }
  }

  return (
    <div className="social-hub">
      <div className="social-hub-frame">
        <header className="social-hub-header">
          <Link className="social-hub-brand" to="/" aria-label="Maison CLM — site officiel">
            <span className="social-hub-logo"><img src="/logo-noir.png" alt="" width="40" height="40" /></span>
            <span>
              <strong>Maison CLM<span aria-hidden="true">.</span></strong>
              <small>Des idées qui prennent vie.</small>
            </span>
          </Link>
          <button className="social-hub-share" type="button" onClick={handleShare} aria-label={shareLabel}>
            {shareLabel === 'Lien copié' ? <Check size={18} aria-hidden="true" /> : <Share2 size={18} aria-hidden="true" />}
          </button>
          <span className="social-hub-sr-only" role="status">{shareLabel === 'Partager cette page' ? '' : shareLabel}</span>
        </header>
        <main>
          <section className="social-hub-projects" aria-labelledby="social-hub-title">
            <div className="social-hub-section-heading">
              <h1 id="social-hub-title">Les projets & les liens</h1>
              <p>Choisissez votre destination.</p>
            </div>
            <div className="social-hub-grid">
              {destinations.map((destination) => {
                const Icon = destination.icon
                const content = (
                  <>
                    <div className="social-hub-card-top">
                      <span className="social-hub-card-icon"><Icon size={21} aria-hidden="true" /></span>
                      <span className="social-hub-card-label">{destination.label}</span>
                    </div>
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                    <span className="social-hub-card-action">{destination.action}<ArrowUpRight size={15} aria-hidden="true" /></span>
                  </>
                )
                const className = `social-hub-card social-hub-card--${destination.style}`
                return destination.external ? (
                  <a key={destination.name} className={className} href={destination.url} target="_blank" rel="noopener noreferrer">{content}</a>
                ) : (
                  <Link key={destination.name} className={className} to={destination.url}>{content}</Link>
                )
              })}
            </div>
          </section>
          <section className="social-hub-networks" aria-labelledby="social-hub-networks-title">
            <h2 id="social-hub-networks-title">Suivre Maison CLM</h2>
            <div className="social-hub-network-list">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} — ${social.handle}`}>
                    <span className="social-hub-network-icon">{Icon ? <Icon size={18} aria-hidden="true" /> : <TikTokIcon />}</span>
                    <span>{social.name}</span>
                    <ArrowUpRight className="social-hub-network-arrow" size={13} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </section>
          <aside className="social-hub-note" aria-label="Un mot de Clément">
            <p>Vos idées méritent mieux qu’un site ordinaire.</p>
            <blockquote>« Je transforme les idées en expériences digitales utiles, belles et simples à utiliser. »</blockquote>
            <span>Clément, fondateur de Maison CLM</span>
          </aside>
        </main>
        <footer className="social-hub-footer">
          <span>© {new Date().getFullYear()} Maison CLM</span>
          <div><Link to="/mentions-legales">Mentions légales</Link><Link to="/confidentialite">Confidentialité</Link></div>
        </footer>
      </div>
    </div>
  )
}
