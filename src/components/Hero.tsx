import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#f2d7e4] blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-[#eec8da] blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 font-serif text-5xl leading-tight text-gray-900 md:text-7xl"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Création de sites web
          <br />
          <span className="italic text-[#d86aa2]">modernes & performants</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl"
        >
          Je conçois des sites élégants, rapides et pensés pour donner une vraie
          image professionnelle à ton activité et convertir tes visiteurs en
          clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-8 py-4 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d86aa2] hover:text-white hover:shadow-lg"
          >
            Travailler avec moi
          </a>

          <a
            href="#projects"
            className="rounded-full border border-gray-200 bg-white/70 px-8 py-4 text-gray-900 backdrop-blur-sm transition hover:bg-white"
          >
            Voir mes projets
          </a>
        </motion.div>
      </div>
    </section>
  );
}
