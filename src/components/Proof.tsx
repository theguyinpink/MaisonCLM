import FadeIn from './FadeIn'

const points = [
  {
    title: 'Une image plus crédible',
    description:
      'Un site qui donne une impression plus professionnelle, plus soignée et plus cohérente.',
  },
  {
    title: 'Un message plus clair',
    description:
      'Des sections structurées pour aider un visiteur à comprendre rapidement ce que vous proposez.',
  },
  {
    title: 'Un parcours plus rassurant',
    description:
      'Des repères, des blocs de confiance et des appels à l’action mieux placés.',
  },
  {
    title: 'Un site plus exploitable',
    description:
      'Une base propre et sur mesure, plus simple à faire évoluer que quelque chose de bricolé.',
  },
]

export default function Proof() {
  return (
    <section className="proof">
      <div className="container">
        <FadeIn>
          <div className="proof-header">
            <div className="section-label section-label-center">Pourquoi c&apos;est utile</div>
            <h2 className="section-title">
              Ce qu&apos;un bon site doit réellement
              <br />
              <em>apporter à votre activité</em>
            </h2>
            <p className="section-desc">
              Le but n&apos;est pas seulement d&apos;être joli. Le but, c&apos;est d&apos;aider votre activité
              à paraître plus fiable, plus lisible et plus facile à choisir.
            </p>
          </div>
        </FadeIn>

        <div className="proof-grid">
          {points.map((point, index) => (
            <FadeIn key={point.title} delay={0.1 + index * 0.08}>
              <article className="proof-card">
                <span className="proof-index">0{index + 1}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
