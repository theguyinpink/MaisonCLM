import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import FadeIn from './FadeIn'

type ContactProps = {
  email: string
  formUrl: string
}

const checklist = [
  'Votre activité ou votre projet',
  'Le type de site souhaité',
  'Votre délai idéal',
  'Votre budget approximatif',
]

const reassurance = [
  'Réponse claire sous 48h',
  'Estimation sans engagement',
  'Orientation honnête selon votre besoin',
]

const gmailComposeUrl = (email: string) => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`
}

const mailtoUrl = (email: string) => {
  return `mailto:${email}`
}

const detectMobile = () => {
  if (typeof window === 'undefined') return false

  const ua = navigator.userAgent || navigator.vendor

  const isMobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)

  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches

  return isMobileUA || isSmallScreen
}

export default function Contact({ email, formUrl }: ContactProps) {
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(detectMobile())
    }

    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  const emailHref = isMobile ? mailtoUrl(email) : gmailComposeUrl(email)

  return (
    <section id="contact" className="contact">
      <div className="container">
        <FadeIn>
          <div className="contact-inner">
            <div className="contact-bg-orb contact-bg-orb-1"></div>
            <div className="contact-bg-orb contact-bg-orb-2"></div>

            <div className="contact-layout">
              <div className="contact-content contact-copy">
                <div className="section-label contact-label">Démarrons</div>
                <h2 className="contact-title">
                  Parlons de votre
                  <br />
                  <em>projet web</em>
                </h2>
                <p className="contact-sub">
                  Pas besoin d&apos;arriver avec un brief parfait. Expliquez-moi simplement
                  votre activité, ce que vous voulez améliorer, et je vous aide à cadrer le reste.
                </p>

                <div className="contact-actions">
                  <a
                    id="contact-form-link"
                    href={formUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-rose"
                  >
                    Remplir le formulaire
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </a>

                  <a
                    id="contact-email-link"
                    href={emailHref}
                    target={isMobile ? undefined : '_blank'}
                    rel={isMobile ? undefined : 'noreferrer noopener'}
                    className="btn-outline-white"
                    aria-label={
                      isMobile
                        ? `Envoyer un email à ${email}`
                        : `Ouvrir Gmail pour écrire à ${email}`
                    }
                  >
                    <Mail size={16} strokeWidth={2} />
                    {isMobile ? "M'envoyer un email" : 'Ouvrir dans Gmail'}
                  </a>
                </div>

                <div className="contact-email-helper">
                  <span className="contact-email-text">{email}</span>
                  <button
                    type="button"
                    className="contact-copy-btn"
                    onClick={handleCopyEmail}
                  >
                    <Copy size={14} strokeWidth={2} />
                    {copied ? 'Adresse copiée' : "Copier l'adresse"}
                  </button>
                </div>

                <p className="contact-email-note">
                  {isMobile
                    ? "Sur téléphone, le bouton ouvre votre application mail."
                    : 'Sur ordinateur, le bouton ouvre Gmail avec votre adresse déjà renseignée.'}
                </p>

                <div className="contact-trust">
                  {reassurance.map((item) => (
                    <div key={item} className="contact-trust-item">
                      <Check size={14} strokeWidth={2} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-side-card">
                <div className="contact-side-kicker">Pour aller plus vite</div>
                <h3>Ce que vous pouvez déjà me préciser</h3>
                <ul className="contact-checklist">
                  {checklist.map((item) => (
                    <li key={item}>
                      <Check size={15} strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="contact-small">
                  Même quelques lignes suffisent pour que je puisse vous orienter vers la
                  bonne formule ou vous proposer un devis adapté.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}