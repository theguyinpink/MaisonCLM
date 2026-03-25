import FadeIn from "./FadeIn";
import { Mail } from "lucide-react";

type ContactProps = {
  email: string;
  formUrl: string;
};

export default function Contact({ email, formUrl }: ContactProps) {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-gray-900 px-8 py-14 text-white shadow-2xl md:px-14">
        <FadeIn>
          <div className="text-center">
            <h2
              className="mb-6 text-4xl md:text-5xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Prêt à donner vie à ton projet ?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-gray-300">
              Tu peux me contacter directement par email ou remplir le
              formulaire pour m’expliquer ton besoin plus en détail.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={formUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#d86aa2] px-8 py-4 font-medium text-white transition hover:bg-[#c2548a]"
              >
                Remplir le formulaire
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Demande de projet`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-medium text-white transition hover:bg-white/20"
              >
                <Mail size={18} />
                M’envoyer un email
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
