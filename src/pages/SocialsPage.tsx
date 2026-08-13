import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const socials = [
  {
    name: 'Instagram',
    handle: '@maisonclmfr',
    url: 'https://www.instagram.com/maisonclmfr/',
  },
  {
    name: 'TikTok',
    handle: '@maisonclm',
    url: 'https://www.tiktok.com/@maisonclm',
  },
  {
    name: 'LinkedIn',
    handle: 'Maison CLM',
    url: 'https://www.linkedin.com/company/maisonclm',
  },
]

export default function SocialsPage() {
  const [shareLabel, setShareLabel] = useState('Partager')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Maison CLM — Tous nos liens'
    return () => {
      document.title = previousTitle
    }
  }, [])

  const handleShare = async () => {
    const shareData = {
      title: 'Maison CLM',
      text: 'Découvrez Maison CLM, ses projets et ses réseaux.',
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }

      await navigator.clipboard.writeText(window.location.href)
      setShareLabel('Lien copié')
      window.setTimeout(() => setShareLabel('Partager'), 2200)
    } catch {
      setShareLabel('Partager')
    }
  }

  return (
    <div className="socials-page">
      <div className="socials-noise" aria-hidden="true"></div>

      <div className="socials-frame">
        <nav className="socials-masthead" aria-label="Navigation principale">
          <Link className="socials-brand" to="/">
            <span className="socials-brand-mark">
              <img src="/logo-noir.png" alt="" />
            </span>
            <span className="socials-brand-copy">
              <strong>Maison CLM</strong>
              <span>Studio digital indépendant</span>
            </span>
          </Link>

          <button className="socials-share" type="button" onClick={handleShare}>
            <span className="socials-share-dot" aria-hidden="true"></span>
            <span aria-live="polite">{shareLabel}</span>
          </button>
        </nav>

        <main>
          <header className="socials-hero">
            <div className="socials-hero-copy">
              <p className="socials-kicker"><span>01</span> Bienvenue chez Maison CLM</p>
              <h1>
                Vos idées méritent
                <em>mieux qu’un site ordinaire.</em>
              </h1>
            </div>

            <aside className="socials-founder-note">
              <span className="socials-tape" aria-hidden="true"></span>
              <p>Moi, c’est Clément.</p>
              <strong>
                Je transforme les idées en expériences digitales utiles, belles et simples
                à utiliser.
              </strong>
              <span>— Clément, fondateur</span>
            </aside>
          </header>

          <section className="socials-board" aria-label="Liens et projets Maison CLM">
            <Link className="socials-tile socials-tile-main" to="/">
              <div className="socials-tile-topline">
                <span>01 / Site officiel</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="socials-tile-main-copy">
                <span className="socials-eyebrow">Tout commence ici</span>
                <h2>Entrez dans<br />l’univers Maison CLM.</h2>
                <p>
                  Sites web, applications et outils numériques pensés pour faire avancer
                  vos projets.
                </p>
              </div>
              <span className="socials-tile-url">maisonclm.fr</span>
            </Link>

            <Link
              className="socials-tile socials-tile-audit"
              to="/audit?utm_source=socials&utm_medium=bio&utm_campaign=audit_gratuit"
            >
              <div className="socials-audit-stamp" aria-hidden="true">
                <strong>3</strong>
                <span>conseils</span>
              </div>
              <div className="socials-tile-topline">
                <span>02 / Offert</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="socials-tile-audit-copy">
                <span className="socials-eyebrow">Mini-audit gratuit</span>
                <h2>Votre site a du potentiel.<br />Voyons où.</h2>
                <p>Trois recommandations personnalisées, concrètes et sans engagement.</p>
                <span className="socials-text-link">Demander mon audit <b>→</b></span>
              </div>
            </Link>

            <Link
              className="socials-tile socials-tile-product socials-tile-asso"
              to="/?interest=clm-asso#contact"
            >
              <div className="socials-tile-topline">
                <span>03 / Pour les clubs</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="socials-product-symbol" aria-hidden="true">A</div>
              <div className="socials-product-copy">
                <span className="socials-eyebrow">Une idée pour votre club ?</span>
                <h2>CLM Asso</h2>
                <p>Échangeons sur les besoins de votre association et la bonne solution.</p>
              </div>
              <ul aria-label="Sujets CLM Asso">
                <li>Équipes</li>
                <li>Organisation</li>
                <li>Documents</li>
              </ul>
            </Link>

            <Link
              className="socials-tile socials-tile-product socials-tile-sport"
              to="/?interest=clm-sportlink#contact"
            >
              <div className="socials-tile-topline">
                <span>04 / Sport</span>
                <i aria-hidden="true">↗</i>
              </div>
              <div className="socials-product-symbol" aria-hidden="true">S</div>
              <div className="socials-product-copy">
                <span className="socials-eyebrow">Projet en construction</span>
                <h2>CLM SportLink</h2>
                <p>Un futur espace pensé pour connecter les profils du monde sportif.</p>
              </div>
              <ul aria-label="Profils CLM SportLink">
                <li>Clubs</li>
                <li>Joueurs</li>
                <li>Staff</li>
              </ul>
            </Link>
          </section>

          <section className="socials-network-section" aria-labelledby="socials-title">
            <div>
              <p className="socials-kicker"><span>02</span> Les coulisses</p>
              <h2 id="socials-title">On se retrouve<br />aussi par ici.</h2>
            </div>
            <div className="socials-network-list">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                  <span>{social.name}</span>
                  <small>{social.handle}</small>
                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="socials-footer">
          <p>Fait avec attention — pas avec un template.</p>
          <div>
            <span>Combs-la-Ville, France</span>
            <span>© {new Date().getFullYear()} Maison CLM</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
