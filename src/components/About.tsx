import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-[2rem] border border-white/60 bg-white/50 p-8 shadow-sm backdrop-blur-xl md:grid-cols-2 md:p-14">
        <FadeIn>
          <div>
            <h2
              className="mb-6 text-4xl text-gray-900"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              L’art du détail au service du web
            </h2>

            <p className="mb-4 leading-relaxed text-gray-600">
              Je crée des sites modernes, doux visuellement, professionnels et pensés
              pour inspirer confiance. Mon objectif n’est pas seulement de faire un
              “beau site”, mais un site utile, clair et crédible.
            </p>

            <p className="leading-relaxed text-gray-600">
              J’aime travailler les interfaces avec soin, en mettant l’accent sur
              l’esthétique, la fluidité, la lisibilité et la conversion.
            </p>
          </div>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-[#f2d7e4]/70 to-[#eec8da]/70 p-8 shadow-sm"
        >
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-[#d86aa2]/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl font-semibold text-[#1f2937]">+1</span>
              <span className="mt-2 text-sm uppercase tracking-[0.2em] text-[#8f4d72]">
                Projets créés
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="h-px w-20 origin-center bg-white/60"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl font-semibold text-[#1f2937]">100%</span>
              <span className="mt-2 text-sm uppercase tracking-[0.2em] text-[#8f4d72]">
                Code sur mesure
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-px w-20 origin-center bg-white/60"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-semibold text-[#1f2937]">1 objectif</span>
              <span className="mt-2 text-sm uppercase tracking-[0.2em] text-[#8f4d72]">
                Créer un site qui convertit
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}