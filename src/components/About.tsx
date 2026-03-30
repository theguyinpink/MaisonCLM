import FadeIn from './FadeIn'

const highlights = [
  {
    title: 'Image haut de gamme',
    description: 'Un design qui valorise votre activité et vous rend plus crédible.',
  },
  {
    title: 'Parcours fluide',
    description: 'Une navigation claire pour aider vos visiteurs à comprendre vite.',
  },
  {
    title: 'Messages plus nets',
    description: 'Des sections structurées pour mettre en avant votre valeur.',
  },
  {
    title: 'CTA visibles',
    description: 'Des appels à l’action placés au bon moment pour favoriser le contact.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <FadeIn className="about-text">
            <div>
              <div className="section-label">À propos</div>
              <h2 className="section-title">
                Un site beau, oui.
                <br />
                Un site clair et <em>crédible</em>, surtout.
              </h2>
              <p className="about-body about-lead">
                Maison CLM, c&apos;est une approche du web qui mélange esthétique,
                clarté et sens du détail pour créer des sites qui donnent confiance.
              </p>
              <p className="about-body">
                Mon objectif n&apos;est pas seulement de faire une interface élégante,
                mais un site qui aide vraiment votre activité à mieux se présenter,
                mieux se différencier et mieux convertir.
              </p>
              <blockquote className="about-quote">
                &quot;Chaque section doit soit clarifier, soit rassurer, soit donner envie
                d&apos;agir.&quot;
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn className="about-visual" delay={0.2}>
            <div className="about-card">
              <div className="about-card-header">
                <span className="about-card-kicker">La base Maison CLM</span>
                <p className="about-card-note">
                  Un site utile commence par une structure pensée pour votre image et
                  pour votre futur client.
                </p>
              </div>

              <div className="about-highlights">
                {highlights.map((item) => (
                  <div key={item.title} className="about-highlight-card">
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="about-note">
                Design premium, responsive, messages structurés et code sur mesure.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
