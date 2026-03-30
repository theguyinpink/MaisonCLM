import FadeIn from './FadeIn'

const steps = [
  {
    number: '01',
    title: 'Échange & cadrage',
    description:
      'On clarifie votre activité, vos objectifs, votre cible et le type de site le plus pertinent.',
  },
  {
    number: '02',
    title: 'Devis & direction',
    description:
      'Je vous propose un cadre clair : budget, structure, rythme de travail et niveau de personnalisation.',
  },
  {
    number: '03',
    title: 'Design & développement',
    description:
      'Je construis votre site avec des retours réguliers pour garder un résultat cohérent et maîtrisé.',
  },
  {
    number: '04',
    title: 'Livraison & suite',
    description:
      'Vous repartez avec un site propre, compréhensible et prêt à être utilisé ou à évoluer.',
  },
]

const summary = [
  'Brief simplifié',
  'Retours réguliers',
  'Code sur mesure',
  'Livraison propre',
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
            <em>sans friction inutile</em>
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

        <div className="process-summary">
          {summary.map((item) => (
            <span key={item} className="process-summary-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
