import {
  Code2,
  LayoutTemplate,
  Wrench,
  ShoppingCart,
  Sparkles,
  FolderKanban,
} from 'lucide-react'

export const services = [
  {
    title: 'Site vitrine simple',
    description:
      "Idéal pour démarrer rapidement avec une présence en ligne claire, propre et efficace. Convient aux petites structures, indépendants, artisans ou activités locales.",
    details: [
      'Base 1 page incluse',
      'Ajout de pages possible selon le besoin',
      'Design propre et professionnel',
      'Formulaire de contact',
    ],
    pricing: 'À partir de 400€',
    extra:
      'Des pages supplémentaires peuvent être ajoutées selon le projet, avec ajustement du prix final.',
    icon: LayoutTemplate,
  },
  {
    title: 'Site vitrine avancé',
    description:
      "Pensé pour les projets plus ambitieux avec une structure plus complète, un design davantage personnalisé et une image de marque plus forte.",
    details: [
      'Plusieurs pages',
      'Design plus travaillé',
      'Structure plus complète',
      'Présentation détaillée des services',
    ],
    pricing: 'À partir de 700€',
    extra:
      'Le tarif final évolue selon le nombre de pages, le niveau de personnalisation et les besoins spécifiques.',
    icon: Code2,
  },
  {
    title: 'Refonte de site',
    description:
      "Modernisation de ton site existant pour le rendre plus actuel, plus clair, plus esthétique et plus crédible.",
    details: [
      'Refonte standard',
      'Refonte complète',
      'Amélioration de l’interface',
      'Corrections et optimisation visuelle',
    ],
    pricing: 'Standard à partir de 300€ • Complète à partir de 500€',
    extra:
      'Le prix dépend de l’état du site actuel, du volume à retravailler et du niveau de refonte demandé.',
    icon: Wrench,
  },
  {
    title: 'Site complexe / projet sur mesure',
    description:
      "Pour les projets plus lourds nécessitant des fonctionnalités avancées, une logique métier spécifique ou un développement plus poussé.",
    details: [
      'Base de données',
      'Paiement en ligne',
      'Espace utilisateur / compte client',
      'Fonctionnalités spécifiques',
    ],
    pricing: 'Sur devis',
    extra:
      'Chaque projet complexe est chiffré selon ses fonctionnalités, sa structure et son niveau de développement.',
    icon: ShoppingCart,
  },
]

export const secondaryServices = [
  {
    title: 'Options supplémentaires',
    description:
      "Ajouts possibles pour enrichir ton site ou répondre à des besoins spécifiques.",
    details: [
      'SEO',
      'Pages supplémentaires',
      'Refonte complémentaire',
      'Création ou ajustement de logo',
    ],
    pricing: 'À partir de 50€',
    icon: Sparkles,
  },
  {
    title: 'Templates personnalisables',
    description:
      "Des modèles prêts à l’emploi, personnalisés selon ton activité, pour obtenir un site plus rapidement avec un budget plus léger.",
    details: [
      'Modèles prêts à l’emploi',
      'Personnalisation selon l’activité',
      'Mises à jour régulières',
      'Assistance technique et corrections',
    ],
    pricing: 'À partir de 50€/mois',
    icon: FolderKanban,
  },
]