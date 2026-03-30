import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

type FooterProps = {
  templatesUrl: string
  linkedinUrl?: string
}

const gmailComposeUrl = (email: string) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    tf: '1',
    to: email,
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

export default function Footer({ templatesUrl, linkedinUrl = '#' }: FooterProps) {
  const email = 'maison.clm.contact@gmail.com'

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-wrap">
              <img src="/logo-noir.png" alt="Maison CLM" className="footer-brand-logo" />
              <div>
                <div className="footer-brand">Maison CLM</div>
                <p className="footer-tagline">
                  Création de sites modernes, sur mesure et pensés pour inspirer confiance.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-links footer-links-top">
            <a href={templatesUrl} target="_blank" rel="noreferrer">Templates</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={gmailComposeUrl(email)} target="_blank" rel="noreferrer">
              <Mail
                size={14}
                strokeWidth={2}
                style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.25rem' }}
              />
              {email}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Maison CLM — Clément Carré. Tous droits réservés.
          </p>
          <div className="footer-links footer-links-bottom">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
