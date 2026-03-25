export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demo?: string
  github?: string
  confidential?: boolean
}

export const projects: Project[] = [
  {
    title: 'Photographi.nes',
    description:
      'Site avec base de données et fonction d’achat via Stripe développé pour une photographe spécialisée dans la photo sportive, avec une interface élégante et professionnelle.',
    image: '/projects/projet-1.jpg',
    tags: ['React', 'TypeScript', 'Tailwind'],
    confidential: true,
  },
  {
    title: 'Nexora Tech',
    description:
      'Concept de site e-commerce pour une enseigne tech fictive. Interface moderne, responsive, avec catalogue produits, catégories dynamiques et expérience utilisateur optimisée.',
    image: '/projects/projet-2.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://maison-clm.github.io/Nexora-Tech-Project/',
    github: 'https://github.com/maison-clm/Nexora-Tech-Project',
  },
  {
    title: 'NovaTek',
    description:
      'Concept de site pour une marque tech premium fictive. Interface moderne et immersive avec mise en avant des produits, navigation fluide et design orienté expérience utilisateur.',
    image: '/projects/projet-3.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://maison-clm.github.io/Novatek-Concept/',
    github: 'https://github.com/maison-clm/Novatek-Concept',
  },
]
