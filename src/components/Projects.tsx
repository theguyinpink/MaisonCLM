import { ArrowUpRight, Github, Lock } from 'lucide-react'
import FadeIn from './FadeIn'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <FadeIn>
              <div className="section-label">Réalisations</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="section-title">
                Ce que je
                <br />
                <em>crée concrètement</em>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <a
              href="https://github.com/maison-clm"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost projects-github"
            >
              Voir sur GitHub ↗
            </a>
          </FadeIn>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.1 + index * 0.1}>
              <article className="project-card">
                <div className="project-img-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-img-overlay"></div>
                  <div className="project-tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  {project.confidential && (
                    <div className="project-lock-badge">
                      <Lock size={12} strokeWidth={2} />
                      Confidentiel
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-links">
                    {project.confidential ? (
                      <span className="project-link-secondary project-link-static">
                        <Lock size={14} strokeWidth={2} />
                        Accès privé
                      </span>
                    ) : (
                      <>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link-primary"
                          >
                            Voir le site
                            <ArrowUpRight size={14} strokeWidth={2} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link-secondary"
                          >
                            GitHub
                            <Github size={14} strokeWidth={2} />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
