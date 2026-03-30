import FadeIn from './FadeIn'

const items = [
  {
    question: 'Combien de temps prend un site vitrine ?',
    answer:
      'Cela dépend du nombre de pages, du niveau de personnalisation et de la rapidité des échanges, mais un site vitrine se cadre généralement assez vite une fois le contenu validé.',
  },
  {
    question: 'Est-ce que vous pouvez partir d’une idée encore floue ?',
    answer:
      'Oui. Beaucoup de projets commencent avec une idée partielle. Le but du premier échange est justement de clarifier le besoin et d’orienter vers la bonne formule.',
  },
  {
    question: 'Puis-je demander des modifications pendant le projet ?',
    answer:
      'Oui, le projet avance avec des retours réguliers. L’objectif est d’éviter les surprises et de garder un résultat cohérent avec votre image.',
  },
  {
    question: 'Pouvez-vous reprendre un site existant ?',
    answer:
      'Oui. Une refonte peut servir à moderniser le design, clarifier le message, améliorer la crédibilité ou remettre de l’ordre dans la structure.',
  },
  {
    question: 'Faites-vous aussi la mise en ligne et l’accompagnement ?',
    answer:
      'Oui, selon le besoin, la mise en ligne et l’accompagnement après livraison peuvent faire partie du projet pour vous laisser une base propre et simple à utiliser.',
  },
  {
    question: 'Et si mon budget est limité ?',
    answer:
      'Le plus simple est d’en parler dès le départ. Il est souvent possible de cadrer une version plus légère, propre et évolutive, puis de la faire grandir ensuite.',
  },
]

export default function Faq() {
  return (
    <section className="faq">
      <div className="container">
        <FadeIn>
          <div className="faq-header">
            <div className="section-label section-label-center">FAQ</div>
            <h2 className="section-title">
              Les questions qui freinent souvent
              <br />
              le passage à l&apos;<em>action</em>
            </h2>
          </div>
        </FadeIn>

        <div className="faq-grid">
          {items.map((item, index) => (
            <FadeIn key={item.question} delay={0.1 + index * 0.05}>
              <article className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
