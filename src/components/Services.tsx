import FadeIn from './FadeIn'
import { services, secondaryServices } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <FadeIn>
          <div className="mb-14 text-center">
            <h2
              className="mb-4 text-4xl text-gray-900 md:text-5xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Mes services
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-500">
              Des prestations pensées pour t’aider à lancer, améliorer ou
              moderniser ta présence en ligne, avec des solutions adaptées à ton
              niveau de besoin, de personnalisation et de complexité.
            </p>
          </div>
        </FadeIn>

                {/* Services principaux */}
        <div className="mt-16 grid gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-[#efd9e4] bg-white/72 p-8 shadow-[0_10px_40px_rgba(216,106,162,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_60px_rgba(216,106,162,0.14)]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f2d7e4]/60 blur-3xl transition duration-500 group-hover:scale-110" />

                  <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/70 text-[#d86aa2] shadow-[0_8px_30px_rgba(216,106,162,0.10)] backdrop-blur-md">
                    <Icon size={24} />
                  </div>

                  <h3
                    className="relative z-10 mb-4 text-[1.9rem] leading-[1.05] tracking-[-0.03em] text-[#172033]"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {service.title}
                  </h3>

                  <p className="relative z-10 mb-6 text-[0.98rem] leading-8 text-[#5f6778]">
                    {service.description}
                  </p>

                  <ul className="relative z-10 mb-8 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-[#d86aa2]" />
                        <span className="text-[0.95rem] leading-7 text-[#6c7282]">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-auto rounded-[1.5rem] border border-[#f3dce7] bg-[#fff8fb] p-5">
                    <p className="mb-2 text-[0.8rem] uppercase tracking-[0.18em] text-[#b07a96]">
                      Tarif de départ
                    </p>
                    <p
                      className="text-2xl text-[#8f4d72]"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {service.pricing}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#8b8190]">
                      {service.extra}
                    </p>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        {/* Bloc complémentaire */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {secondaryServices.map((service, index) => {
            const Icon = service.icon

            return (
              <FadeIn key={service.title} delay={0.15 + index * 0.08}>
                <article className="group relative overflow-hidden rounded-[2.25rem] border border-[#efd9e4] bg-[linear-gradient(180deg,rgba(242,215,228,0.34),rgba(255,255,255,0.72))] p-8 shadow-[0_10px_40px_rgba(216,106,162,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_60px_rgba(216,106,162,0.14)]">
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f2d7e4]/70 blur-3xl" />

                  <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/70 text-[#d86aa2] shadow-[0_8px_30px_rgba(216,106,162,0.10)] backdrop-blur-md">
                    <Icon size={24} />
                  </div>

                  <h3
                    className="relative z-10 mb-4 text-[1.9rem] leading-[1.05] tracking-[-0.03em] text-[#172033]"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {service.title}
                  </h3>

                  <p className="relative z-10 mb-6 text-[0.98rem] leading-8 text-[#5f6778]">
                    {service.description}
                  </p>

                  <ul className="relative z-10 mb-8 grid gap-3 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-[#d86aa2]" />
                        <span className="text-[0.95rem] leading-7 text-[#6c7282]">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 rounded-[1.5rem] border border-[#f3dce7] bg-[#fff8fb]/80 p-5">
                    <p className="mb-2 text-[0.8rem] uppercase tracking-[0.18em] text-[#b07a96]">
                      Tarif de départ
                    </p>
                    <p
                      className="text-2xl text-[#8f4d72]"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {service.pricing}
                    </p>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        {/* Note explicative */}
        <FadeIn delay={0.3}>
          <div className="mt-10 rounded-[1.5rem] border border-[#f2d7e4] bg-white/70 p-6 text-sm leading-relaxed text-gray-500 shadow-sm">
            <p>
              Les tarifs affichés sont des bases indicatives. Le prix final peut
              évoluer selon le nombre de pages, le niveau de personnalisation, les
              fonctionnalités demandées et la complexité globale du projet.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}