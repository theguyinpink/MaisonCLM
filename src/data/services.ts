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
    target: 'Pour démarrer proprement',
    description:
      'Idéal pour poser une présence en ligne claire, élégante et rassurante sans partir sur un projet trop lourd.',
    details: [
      '1 page principale + sections structurées',
      'Design propre et professionnel',
      'Formulaire de contact',
      'Responsive et optimisé',
    ],
    pricingLabel: 'À partir de',
    pricing: '590 €',
    ctaLabel: 'Demander cette formule',
    icon: LayoutTemplate,
  },
  {
    title: 'Site vitrine avancé',
    target: 'Pour mieux vendre votre activité',
    description:
      'Pensé pour une image plus premium avec plusieurs pages, plus de contenu, plus de réassurance et une structure plus stratégique.',
    details: [
      'Plusieurs pages clés',
      'Design premium personnalisé',
      'Services / présentation détaillée',
      'Parcours plus orienté conversion',
    ],
    pricingLabel: 'À partir de',
    pricing: '990 €',
    ctaLabel: 'Parler de mon projet',
    badge: 'Le plus demandé',
    icon: Code2,
  },
  {
    title: 'Refonte de site',
    target: 'Pour repartir sur une meilleure base',
    description:
      'Si votre site paraît daté, confus ou peu crédible, la refonte permet de moderniser le fond comme la forme.',
    details: [
      'Refonte standard ou complète',
      'Hiérarchie plus lisible',
      'Interface modernisée',
      'Image plus cohérente',
    ],
    pricingLabel: 'À partir de',
    pricing: '490 €',
    ctaLabel: 'Étudier ma refonte',
    icon: RefreshCw,
  },
  {
    title: 'Projet sur mesure',
    target: 'Pour les besoins plus avancés',
    description:
      'Pour les projets qui demandent une vraie logique métier, des fonctionnalités spécifiques ou un socle plus évolutif.',
    details: [
      'Base de données',
      'Paiement en ligne',
      'Espace utilisateur',
      'Fonctionnalités métier spécifiques',
    ],
    pricingLabel: 'À partir de',
    pricing: '1800 €',
    ctaLabel: 'Cadrer mon besoin',
    icon: Sparkles,
  },
]

export const secondaryServices = [
  {
    title: 'Options supplémentaires',
    description:
      'SEO, pages additionnelles, optimisation, logo, ajustements plus poussés…',
    pricingLabel: 'À partir de',
    pricing: '50 €',
    icon: Star,
  },
  {
    title: 'Templates personnalisables',
    description:
      'Des modèles premium à adapter à votre activité, avec une base déjà soignée et rapide à mettre en place.',
    pricingLabel: 'À partir de',
    pricing: '39 €/mois',
    icon: Monitor,
  },
]
