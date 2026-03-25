import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <FadeIn className="about-text">
            <div>
              <div className="section-label">À propos</div>
              <h2 className="section-title">
                L'art du détail
                <br />
                au service du <em>web</em>
              </h2>
              <p className="about-body">
                Je crée des sites modernes, soignés visuellement, professionnels et pensés
                pour inspirer confiance. Mon objectif n&apos;est pas seulement de faire un
                &quot;beau site&quot;, mais un site utile, clair et crédible.
              </p>
              <p className="about-body">
                J&apos;aime travailler les interfaces avec soin, en mettant l&apos;accent sur
                l&apos;esthétique, la fluidité, la lisibilité et la conversion. Chaque pixel a
                une raison d&apos;être.
              </p>
              <blockquote className="about-quote">
                &quot;Un bon site ne se remarque pas — il convainc naturellement.&quot;
              </blockquote>
            </div>
          </FadeIn>

          <FadeIn className="about-visual" delay={0.2}>
            <div className="about-card">
              <div className="about-stat-row">
                <div className="about-stat-item">
                  <span className="about-stat-num">+1</span>
                  <span className="about-stat-label">Projet livré</span>
                </div>
                <div className="about-stat-item">
                  <span className="about-stat-num">100%</span>
                  <span className="about-stat-label">Code sur mesure</span>
                </div>
                <div className="about-stat-item">
                  <span className="about-stat-num about-stat-num-small">1 objectif</span>
                  <span className="about-stat-label">Un site qui convertit</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
