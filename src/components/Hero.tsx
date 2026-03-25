import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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
  <em>inspirent confiance</em>
  <br />
  et boostent votre <em>visibilité</em>
</motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Je conçois des sites élégants, rapides et pensés pour donner une
            vraie image professionnelle à votre activité — et transformer vos
            visiteurs en clients.
          </motion.p>

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
            <div className="hero-stat">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-label">Code sur mesure</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">5★</span>
              <span className="hero-stat-label">Satisfaction client</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">48h</span>
              <span className="hero-stat-label">Réponse garantie</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Défiler</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
