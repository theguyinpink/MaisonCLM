import type { MouseEvent } from 'react'
import FadeIn from './FadeIn'
import { services, secondaryServices } from '../data/services'

const included = [
  'Design soigné et cohérent',
  'Responsive mobile / tablette / desktop',
  'Structure claire et lisible',
  'Accompagnement simple et humain',
]

export default function Services() {
  const handleScrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const target = document.getElementById('contact')
    if (!target) return

    const offset = 110
    const top = target.getBoundingClientRect().top + window.scrollY - offset

    window.history.replaceState(null, '', '#contact')
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <FadeIn>
          <div className="services-header">
            <div className="section-label section-label-center">Services</div>
            <h2 className="section-title">
              Des prestations pensées
              <br />
              pour convertir un <em>besoin réel</em>
            </h2>
            <p className="section-desc">
              Chaque offre est conçue pour un niveau de maturité différent : se lancer,
              monter en gamme, refaire un site existant ou développer un projet plus ambitieux.
            </p>
          </div>
        </FadeIn>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={0.1 + index * 0.1}>
                <article className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    {service.badge && <span className="service-badge">{service.badge}</span>}
                  </div>

                  <p className="service-target">{service.target}</p>
                  <h3 className="service-name">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>

                  <ul className="service-features">
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="service-price-box">
                    <span className="service-price-label">{service.pricingLabel}</span>
                    <span
                      className={`service-price-value ${service.pricing === 'Sur devis' ? 'service-price-value-small' : ''}`}
                    >
                      {service.pricing}
                    </span>
                  </div>

                  <a href="#contact" className="service-cta-link" onClick={handleScrollToContact}>
                    {service.ctaLabel}
                  </a>
                </article>
              </FadeIn>
            )
          })}
        </div>

        <div className="services-included">
          <div className="services-included-label">Toujours inclus</div>
          <div className="services-included-grid">
            {included.map((item) => (
              <span key={item} className="services-included-item">{item}</span>
            ))}
          </div>
        </div>

        <div className="services-secondary">
          {secondaryServices.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={0.2 + index * 0.1}>
                <article className="service-card-secondary">
                  <div className="service-icon service-icon-shrink">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="service-name service-name-secondary">{service.title}</h3>
                    <p className="service-desc service-desc-secondary">{service.description}</p>
                    <div className="service-price-box service-price-box-inline">
                      <span className="service-price-label">{service.pricingLabel}</span>
                      <span className="service-price-value">{service.pricing}</span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
