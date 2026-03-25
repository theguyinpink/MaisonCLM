import { ArrowUpRight, Check, Mail } from 'lucide-react'
import FadeIn from './FadeIn'

type ContactProps = {
  email: string
  formUrl: string
}

export default function Contact({ email, formUrl }: ContactProps) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <FadeIn>
          <div className="contact-inner">
            <div className="contact-bg-orb contact-bg-orb-1"></div>
            <div className="contact-bg-orb contact-bg-orb-2"></div>

            <div className="contact-content">
              <div className="section-label section-label-center contact-label">Démarrons</div>
              <h2 className="contact-title">
                Prêt à donner vie
                <br />
                à votre <em>projet</em> ?
              </h2>
              <p className="contact-sub">
                Parlez-moi de votre idée — je vous réponds sous 48h avec une estimation
                claire et sans engagement.
              </p>

              <div className="contact-actions">
                <a href={formUrl} target="_blank" rel="noreferrer" className="btn-rose">
                  Remplir le formulaire
                  <ArrowUpRight size={16} strokeWidth={2} />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Demande de projet`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-white"
                >
                  <Mail size={16} strokeWidth={2} />
                  M&apos;envoyer un email
                </a>
              </div>

              <div className="contact-trust">
                <div className="contact-trust-item">
                  <Check size={14} strokeWidth={2} />
                  Réponse sous 48h
                </div>
                <div className="contact-trust-item">
                  <Check size={14} strokeWidth={2} />
                  Devis sans engagement
                </div>
                <div className="contact-trust-item">
                  <Check size={14} strokeWidth={2} />
                  100% code sur mesure
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
