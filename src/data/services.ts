import {
  LayoutTemplate,
  Code2,
  RefreshCw,
  Sparkles,
  Star,
  Monitor,
} from 'lucide-react'

export const services = [
  {
    title: 'Site vitrine simple',
    description:
      'Idéal pour démarrer rapidement avec une présence en ligne claire, propre et efficace.',
    details: [
      '1 page incluse + ajouts possibles',
      'Design propre et professionnel',
      'Formulaire de contact',
      'Responsive & optimisé',
    ],
    pricingLabel: 'À partir de',
    pricing: '400 €',
    icon: LayoutTemplate,
  },
  {
    title: 'Site vitrine avancé',
    description:
      'Pour les projets plus ambitieux avec une structure complète et une image de marque forte.',
    details: [
      'Plusieurs pages',
      'Design premium personnalisé',
      'Structure renforcée',
      'Présentation détaillée des services',
    ],
    pricingLabel: 'À partir de',
    pricing: '700 €',
    icon: Code2,
  },
  {
    title: 'Refonte de site',
    description:
      'Modernisation de votre site existant pour le rendre plus actuel, clair et crédible.',
    details: [
      'Refonte standard',
      'Refonte complète',
      'Amélioration de l’interface',
      'Optimisation visuelle',
    ],
    pricingLabel: 'À partir de',
    pricing: '300 €',
    icon: RefreshCw,
  },
  {
    title: 'Projet sur mesure',
    description:
      'Pour les projets complexes nécessitant des fonctionnalités avancées ou une logique métier spécifique.',
    details: [
      'Base de données',
      'Paiement en ligne (Stripe)',
      'Espace utilisateur',
      'Fonctionnalités spécifiques',
    ],
    pricingLabel: 'Tarif',
    pricing: 'Sur devis',
    icon: Sparkles,
  },
]

export const secondaryServices = [
  {
    title: 'Options supplémentaires',
    description:
      'SEO, pages additionnelles, logo, refonte complémentaire…',
    pricingLabel: 'À partir de',
    pricing: '50 €',
    icon: Star,
  },
  {
    title: 'Templates personnalisables',
    description:
      'Modèles prêts à l’emploi, personnalisés selon votre activité, avec maintenance mensuelle.',
    pricingLabel: 'À partir de',
    pricing: '39 €/mois',
    icon: Monitor,
  },
]
