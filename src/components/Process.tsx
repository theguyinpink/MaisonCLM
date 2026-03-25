import FadeIn from './FadeIn'

const steps = [
  {
    number: '01',
    title: 'Échange & brief',
    description:
      'On discute de votre projet, vos objectifs, votre cible et vos attentes pour définir le périmètre exact.',
  },
  {
    number: '02',
    title: 'Devis & validation',
    description:
      'Je vous envoie un devis détaillé et un planning. Votre validation lance officiellement le projet.',
  },
  {
    number: '03',
    title: 'Design & développement',
    description:
      'Je conçois et développe votre site avec retours réguliers pour vous garder dans la boucle.',
  },
  {
    number: '04',
    title: 'Livraison & suivi',
    description:
      'Mise en ligne, formation et support post-livraison pour que vous soyez 100% autonome.',
  },
]

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="process-header">
          <div className="section-label section-label-center">Comment ça marche</div>
          <h2 className="section-title process-title">
            Un process simple,
            <br />
            <em>des résultats concrets</em>
          </h2>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="process-step">
                <span className="process-step-num">{step.number}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
