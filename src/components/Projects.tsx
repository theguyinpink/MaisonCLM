import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { projects } from '../data/projects'
import {
  ArrowUpRight,
  Github,
  Lock,
  AlignJustify,
  X,
} from 'lucide-react'

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demo: string
  github: string
}

function ProjectCard({ project }: { project: Project }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const hasPublicDemo = project.demo && project.demo !== '#'
  const hasGithub = project.github && project.github !== '#'
  const isConfidential = !hasPublicDemo

  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-[#efd9e4] bg-white/75 shadow-[0_10px_40px_rgba(216,106,162,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_60px_rgba(216,106,162,0.14)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f2d7e4]/60 blur-3xl transition duration-500 group-hover:scale-110" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[#eec8da]/45 blur-3xl" />

      <div className="relative min-h-[680px]">
        {/* PREVIEW */}
        <div className="flex h-full flex-col">
          <div className="relative h-[380px] overflow-hidden rounded-b-[2rem]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-[#111827]/18 to-transparent" />

            {isConfidential && (
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/75 px-3 py-2 text-xs font-medium text-[#8f4d72] shadow-sm backdrop-blur-md">
                <Lock size={14} />
                Projet confidentiel
              </div>
            )}

            {/* Bouton description */}
            <button
              type="button"
              onClick={() => setIsDetailsOpen(true)}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/75 text-[#8f4d72] shadow-sm backdrop-blur-md transition hover:scale-105 hover:bg-white"
              aria-label={`Afficher la description du projet ${project.title}`}
            >
              <AlignJustify size={18} />
            </button>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-7">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 bg-white/18 px-3 py-1 text-[0.78rem] font-medium text-white backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                className="max-w-[85%] text-[2rem] leading-[1.02] tracking-[-0.03em] text-white md:text-[2.25rem]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
            <p className="max-w-2xl text-[1rem] leading-8 text-[#5f6778]">
              {isConfidential
                ? "Projet présenté de manière confidentielle. L’aperçu met en avant la direction visuelle et la structure générale sans ouvrir l’accès public au site à la demande du client."
                : "Projet accessible en ligne avec aperçu public. Tu peux découvrir la réalisation directement ou consulter son code si celui-ci est disponible."}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {hasPublicDemo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#172033] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#d86aa2]"
                >
                  Voir le projet
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-[#efd9e4] bg-[#fff8fb] px-5 py-3 text-sm font-medium text-[#8f4d72]">
                  <Lock size={16} />
                  Accès privé
                </span>
              )}

              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#efd9e4] bg-white/80 px-5 py-3 text-sm font-medium text-[#5f6778] transition-all duration-300 hover:border-[#d86aa2] hover:text-[#d86aa2]"
                >
                  GitHub
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* OVERLAY DESCRIPTION */}
        <AnimatePresence>
          {isDetailsOpen && (
            <motion.div
              initial={{ x: '100%', opacity: 0.92 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.92 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-20 flex flex-col bg-[linear-gradient(180deg,rgba(255,250,252,0.96),rgba(255,245,249,0.98))] backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#f1dfe8] px-6 py-5 md:px-7">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#f3dce7] bg-white/80 px-3 py-1 text-[0.78rem] font-medium text-[#9b6b86]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#efd9e4] bg-white/80 text-[#8f4d72] transition hover:scale-105 hover:bg-[#fff8fb]"
                  aria-label={`Fermer la description du projet ${project.title}`}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                <div>
                  <h3
                    className="mb-6 text-[2.2rem] leading-[1.02] tracking-[-0.03em] text-[#172033]"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[1.02rem] leading-9 text-[#5f6778]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-10 rounded-[1.75rem] border border-[#f3dce7] bg-[#fff8fb]/85 p-5">
                  <p className="mb-2 text-[0.78rem] uppercase tracking-[0.18em] text-[#b07a96]">
                    Statut du projet
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {isConfidential ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#efd9e4] bg-white px-4 py-2 text-sm font-medium text-[#8f4d72]">
                        <Lock size={15} />
                        Projet confidentiel
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#d9eadf] bg-[#f6fff8] px-4 py-2 text-sm font-medium text-[#4e8b63]">
                        Projet public
                      </span>
                    )}

                    {hasPublicDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#172033] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#d86aa2]"
                      >
                        Démo
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#efd9e4] bg-white px-4 py-2 text-sm font-medium text-[#5f6778] transition hover:border-[#d86aa2] hover:text-[#d86aa2]"
                      >
                        GitHub
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto w-full max-w-[1600px] lg:px-6">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2
              className="mb-4 text-4xl tracking-tight text-gray-900 md:text-5xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Mes projets
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-500">
              Une sélection de projets pensés avec soin, entre direction visuelle,
              expérience utilisateur et développement sur mesure.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}