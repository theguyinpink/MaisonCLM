export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demo?: string
  github?: string
  confidential?: boolean
  kind: string
  objective: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'Photographi.nes',
    description:
      'Site avec base de données et achat via Stripe développé pour une photographe spécialisée dans la photo sportive, avec une interface élégante et professionnelle.',
    image: '/projects/projet-1.jpg',
    tags: ['React', 'TypeScript', 'Tailwind'],
    confidential: true,
    kind: 'Projet client réel',
    objective: 'Créer une expérience crédible pour présenter et vendre des photos sportives en ligne.',
    highlights: ['Base de données', 'Paiement Stripe', 'Interface premium'],
  },
  {
    title: 'Nexora Tech',
    description:
      'Concept de site e-commerce pour une enseigne tech fictive. Interface moderne, responsive, avec catalogue produits et expérience utilisateur optimisée.',
    image: '/projects/projet-2.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://maison-clm.github.io/Nexora-Tech-Project/',
    github: 'https://github.com/maison-clm/Nexora-Tech-Project',
    kind: 'Concept e-commerce',
    objective: 'Montrer une capacité à structurer un catalogue, une navigation et une interface commerciale propre.',
    highlights: ['Catalogue clair', 'Parcours plus fluide', 'UI responsive'],
  },
  {
    title: 'NovaTek',
    description:
      'Concept de site pour une marque tech premium fictive. Interface immersive, navigation fluide et design orienté image de marque.',
    image: '/projects/projet-3.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://maison-clm.github.io/Novatek-Concept/',
    github: 'https://github.com/maison-clm/Novatek-Concept',
    kind: 'Concept branding premium',
    objective: 'Mettre en avant une identité visuelle forte et un univers produit plus haut de gamme.',
    highlights: ['Hero immersif', 'Image premium', 'Présentation plus impactante'],
  },
]
