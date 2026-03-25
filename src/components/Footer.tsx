import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

type FooterProps = {
  templatesUrl: string
  linkedinUrl?: string
}

export default function Footer({
  templatesUrl,
  linkedinUrl = '#',
}: FooterProps) {
  const email = 'maison.clm.contact@gmail.com'

  return (
    <footer className="mt-24 border-t border-[#f1e4ea] px-6 py-10">
      <div className="mx-auto w-full max-w-350">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="text-xl text-[#172033]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Maison CLM
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Création de sites modernes et sur mesure
            </p>
          </div>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#efd9e4] bg-white/80 px-5 py-3 text-sm font-medium text-[#5f6778] transition hover:border-[#d86aa2] hover:text-[#d86aa2]"
          >
            <Mail size={16} />
            Me contacter
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#f1e4ea] pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Maison CLM. Tous droits réservés.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={templatesUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d86aa2]"
            >
              Templates
            </a>

            <Link
              to="/mentions-legales"
              className="transition hover:text-[#d86aa2]"
            >
              Mentions légales
            </Link>

            <Link
              to="/confidentialite"
              className="transition hover:text-[#d86aa2]"
            >
              Politique de confidentialité
            </Link>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#d86aa2]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}