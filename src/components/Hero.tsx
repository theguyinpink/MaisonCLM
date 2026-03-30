import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const trustPoints = [
  'Image professionnelle et premium',
  'Parcours clair pensé pour le contact',
  'Responsive, rapide et sur mesure',
]

const quickFacts = [
  {
    value: '100%',
    label: 'Code sur mesure',
  },
  {
    value: '48h',
    label: 'Réponse estimée',
  },
  {
    value: '400€',
    label: 'Offre de départ',
  },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      <div className="hero-bg-orb hero-bg-orb-3"></div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge-dot"></span>
            Disponible pour de nouveaux projets
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Des sites web qui
            <br />
            <em>rassurent</em>, valorisent votre image
            <br />
            et donnent envie de vous <em>contacter</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Je conçois des sites élégants, clairs et stratégiques pour aider votre
            activité à paraître plus crédible, plus haut de gamme et plus facile à
            choisir.
          </motion.p>

          <motion.ul
            className="hero-kickers"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.24 }}
          >
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </motion.ul>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          >
            <a href="#contact" className="btn-primary">
              <span>Démarrer mon projet</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
            <a href="#projects" className="btn-ghost">
              Voir mes réalisations
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            {quickFacts.map((fact) => (
              <div key={fact.label} className="hero-stat">
                <span className="hero-stat-num">{fact.value}</span>
                <span className="hero-stat-label">{fact.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, delay: 0.48 }}
          >
            <div className="hero-panel-eyebrow">Ce que vous obtenez</div>
            <div className="hero-panel-grid">
              <div className="hero-panel-item">
                <strong>Une image plus pro</strong>
                <span>pour inspirer confiance dès les premières secondes.</span>
              </div>
              <div className="hero-panel-item">
                <strong>Un site pensé pour convertir</strong>
                <span>avec une structure claire, lisible et orientée action.</span>
              </div>
              <div className="hero-panel-item">
                <strong>Un accompagnement simple</strong>
                <span>avec des échanges clairs, des retours et une livraison propre.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Défiler</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  )
}
