import { type FormEvent, useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, Check, ExternalLink, Send } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

type AuditPageProps = {
  email: string
  fallbackFormUrl: string
}

const auditSteps = [
  {
    number: '01',
    title: 'Vous me donnez le contexte',
    text: 'Votre site, votre activité et ce que vous aimeriez améliorer.',
  },
  {
    number: '02',
    title: 'Je regarde vraiment',
    text: 'Clarté du message, parcours, crédibilité et points de friction.',
  },
  {
    number: '03',
    title: 'Vous repartez avec du concret',
    text: 'Trois recommandations prioritaires, expliquées simplement.',
  },
]

const getField = (formData: FormData, key: string) => {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

const isMobileDevice = () => {
  const mobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  return mobileUserAgent.test(navigator.userAgent) || window.matchMedia('(max-width: 768px)').matches
}

export default function AuditPage({ email, fallbackFormUrl }: AuditPageProps) {
  const [searchParams] = useSearchParams()
  const [emailPrepared, setEmailPrepared] = useState(false)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Mini-audit gratuit — Maison CLM'
    return () => {
      document.title = previousTitle
    }
  }, [])

  const attribution = useMemo(() => ({
    source: searchParams.get('utm_source') || 'accès direct',
    medium: searchParams.get('utm_medium') || 'site',
    campaign: searchParams.get('utm_campaign') || 'mini-audit',
  }), [searchParams])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fullName = getField(formData, 'fullName')
    const visitorEmail = getField(formData, 'email')
    const organization = getField(formData, 'organization')
    const website = getField(formData, 'website')
    const activity = getField(formData, 'activity')
    const objective = getField(formData, 'objective')
    const details = getField(formData, 'details') || 'Non précisé'

    const subject = `Demande de mini-audit — ${organization}`
    const body = [
      'Bonjour Clément,',
      '',
      'Je souhaite recevoir un mini-audit de mon site.',
      '',
      `Nom : ${fullName}`,
      `Email : ${visitorEmail}`,
      `Organisation : ${organization}`,
      `Site à analyser : ${website}`,
      `Type d’activité : ${activity}`,
      `Objectif prioritaire : ${objective}`,
      '',
      'Contexte complémentaire :',
      details,
      '',
      `Origine : ${attribution.source} / ${attribution.medium} / ${attribution.campaign}`,
    ].join('\n')

    const gmailParams = new URLSearchParams({
      view: 'cm',
      fs: '1',
      tf: '1',
      to: email,
      su: subject,
      body,
    })
    const mailtoParams = new URLSearchParams({ subject, body })

    setEmailPrepared(true)

    if (isMobileDevice()) {
      window.location.href = `mailto:${email}?${mailtoParams.toString()}`
      return
    }

    window.open(
      `https://mail.google.com/mail/?${gmailParams.toString()}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="audit-page">
      <div className="audit-orb audit-orb-one" aria-hidden="true"></div>
      <div className="audit-orb audit-orb-two" aria-hidden="true"></div>

      <div className="container audit-container">
        <header className="audit-intro">
          <div className="audit-intro-copy">
            <p className="audit-kicker"><span>Offert</span> Un premier regard extérieur</p>
            <h1>
              Votre site a du potentiel.
              <em>Voyons où.</em>
            </h1>
            <p className="audit-lead">
              Pas de rapport automatique ni de note sortie d’un algorithme. Je parcours
              votre site comme le ferait un vrai visiteur, puis je vous partage trois
              améliorations à traiter en priorité.
            </p>
            <div className="audit-promise">
              <span><Check size={16} /> Regard humain</span>
              <span><Check size={16} /> 3 recommandations</span>
              <span><Check size={16} /> Sans engagement</span>
            </div>
          </div>

          <aside className="audit-note" aria-label="Mot de Clément">
            <span className="audit-note-tape" aria-hidden="true"></span>
            <p>Un bon audit ne vous noie pas sous 40 remarques.</p>
            <strong>Il vous aide à savoir quoi améliorer en premier — et pourquoi.</strong>
            <small>— Clément, Maison CLM</small>
          </aside>
        </header>

        <div className="audit-steps" aria-label="Déroulement du mini-audit">
          {auditSteps.map((step) => (
            <article key={step.number} className="audit-step">
              <span>{step.number}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="audit-form-layout">
          <div className="audit-form-copy">
            <p className="audit-section-index">Le point de départ</p>
            <h2>Parlez-moi de votre site.</h2>
            <p>
              Quelques réponses suffisent. Le bouton prépare ensuite votre demande dans
              votre messagerie : vous gardez la main avant l’envoi.
            </p>
            <div className="audit-form-aside">
              <strong>Ce que je regarderai</strong>
              <ul>
                <li>La compréhension immédiate de votre offre</li>
                <li>Le parcours et les appels à l’action</li>
                <li>La confiance dégagée sur mobile et ordinateur</li>
              </ul>
            </div>
          </div>

          <form className="audit-form" onSubmit={handleSubmit}>
            <div className="audit-form-row">
              <label>
                <span>Votre nom *</span>
                <input name="fullName" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Votre email *</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <div className="audit-form-row">
              <label>
                <span>Entreprise, club ou association *</span>
                <input name="organization" type="text" autoComplete="organization" required />
              </label>
              <label>
                <span>Site à analyser *</span>
                <input name="website" type="url" inputMode="url" placeholder="https://" required />
              </label>
            </div>

            <div className="audit-form-row">
              <label>
                <span>Votre activité *</span>
                <select name="activity" defaultValue="" required>
                  <option value="" disabled>Choisir une réponse</option>
                  <option>Entreprise ou indépendant</option>
                  <option>Club ou association</option>
                  <option>Projet sportif</option>
                  <option>Autre projet</option>
                </select>
              </label>
              <label>
                <span>Votre priorité *</span>
                <select name="objective" defaultValue="" required>
                  <option value="" disabled>Choisir une réponse</option>
                  <option>Mieux expliquer mon offre</option>
                  <option>Obtenir plus de demandes</option>
                  <option>Moderniser mon image</option>
                  <option>Améliorer l’expérience mobile</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </label>
            </div>

            <label className="audit-form-wide">
              <span>Qu’est-ce qui vous gêne aujourd’hui ?</span>
              <textarea
                name="details"
                rows={5}
                placeholder="Ce qui ne fonctionne pas, les retours que vous recevez, votre objectif…"
              ></textarea>
            </label>

            <label className="audit-consent">
              <input name="consent" type="checkbox" required />
              <span>
                J’accepte que Maison CLM utilise ces informations pour répondre à ma demande,
                conformément à la <Link to="/confidentialite">politique de confidentialité</Link>.
              </span>
            </label>

            <button type="submit" className="audit-submit">
              <span>Préparer ma demande d’audit</span>
              <Send size={17} />
            </button>

            <p className="audit-submit-note" aria-live="polite">
              {emailPrepared
                ? 'Votre message est prêt dans votre messagerie. Il ne reste plus qu’à vérifier puis envoyer.'
                : 'Aucun envoi automatique : votre messagerie s’ouvre avec la demande préremplie.'}
            </p>

            <a className="audit-fallback" href={fallbackFormUrl} target="_blank" rel="noreferrer">
              La messagerie ne s’ouvre pas ? Utiliser le formulaire général
              <ExternalLink size={14} />
            </a>
          </form>
        </div>

        <div className="audit-bottom-cta">
          <span>Vous n’avez pas encore de site ?</span>
          <Link to="/#contact">
            Parlons plutôt de votre projet
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
